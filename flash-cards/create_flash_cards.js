const getDeckName = () => {
  const deckName = prompt("Enter The Deck Name");
  Deno.writeTextFileSync("deck_list.txt", deckName + ".txt\n", {
    append: true,
  });
  return deckName + ".txt";
};

const formatDataToAppend = (question, answer) =>
  "ques: " + question + "  ans: " + answer + "\n";

const appendToFile = (file_name, dataToAppend) => {
  Deno.writeTextFileSync("data_files/" + file_name, dataToAppend, {
    append: true,
  });
};

const getCardDetails = (file_name) => {
  console.clear();
  const question = prompt("Enter The Front Side :");
  const answer = prompt("Enter The Back Side");
  const dataToAppend = formatDataToAppend(question, answer);
  appendToFile(file_name, dataToAppend);
};

const displayInstructions = () => {
  console.clear();
  const instructions = Deno.readTextFileSync("instructions.txt");
  console.log(instructions);
};

const dataCreateMode = (mode) => {
  if (mode === 1) {
    const deckName = getDeckName();
    while (confirm()) {
      getCardDetails(deckName);
    }
  }

  if (mode === 2) {
    console.log('\n ENTER "help" FOR  HELP TO IMPORT DATA FILE \n\n');
    const path = prompt("Enter The Path Correctly");
    if (path === 'help') {
      displayInstructions();
      return dataCreateMode(2);
    }
    const deckName = getDeckName();
    const dataToAppend = Deno.readTextFileSync("/" + path);
    appendToFile(deckName, dataToAppend);
  }
};

export const createFlashCards = () => {
  console.clear();
  console.log("           1 : ENTER DATA MANUALLY");
  console.log("           2 : TO IMPORT DATA FILE");
  const mode = +prompt("");
  dataCreateMode(mode);
};
