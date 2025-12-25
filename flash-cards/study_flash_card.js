const getDeckList = () => {
  const data = Deno.readTextFileSync("deck_list.txt");
  const deckList = data.split("\n");
  deckList.pop();
  return deckList;
};

const printDeckList = (deck_list) => {
  console.clear();
  console.log("AVAILABLE DECK CARDS : \n");
  for (let index = 1; index <= deck_list.length; index++) {
    console.log("\t", index, "  ", deck_list[index - 1]);
  }
};

const locations = (cards) => {
  return function b(card) {
    return cards.findIndex(item => item === card);
  };
};

const evaluateAnswer = (answer, expectedAnswer, card, wrongAnsweredCards) => {
  console.clear();
  if (answer !== expectedAnswer) {
    console.log("It Is Wrong ❌");
    wrongAnsweredCards.push(card);
    return;
  }
  console.log("It Is Right ✅");
};

const parseCard = (card) => {
  const question = card.match(/^ques:(.+)ans:/);
  const answer = card.match(/ans:(.+)$/);
  return [question[1], answer[1].trim()];
};

const examineCards = (cards, eachAttempts,findLocation) => {
  const wrongAnsweredCards = [];
  for (let index = 0; index < cards.length; index++) {
    eachAttempts[findLocation(cards[index])]++;
    const [question, expectedAnswer] = parseCard(cards[index]);
    console.log(index + 1 + " :  ", question);
    const answer = prompt("answer :");
    evaluateAnswer(answer, expectedAnswer, cards[index], wrongAnsweredCards);
  }

  return wrongAnsweredCards;
};

const readFlashCards = (fileName) => {
  const fileData = Deno.readTextFileSync("data_files/" + fileName);
  const cards = fileData.split("\n");
  cards.pop();
  return cards;
};

const conductExam = (cards) => {
  const eachAttempts = "0".repeat(cards.length).split("").map((ele) => +ele);
  let cardsToAnswer = [...cards];
  const findLocation = locations(cardsToAnswer);
  while (cardsToAnswer.length !== 0) {
    cardsToAnswer = examineCards(cardsToAnswer, eachAttempts,findLocation);
  }

  return eachAttempts;
}

const main = () => {
  const deckList = getDeckList();
  printDeckList(deckList);
  const choice = +prompt("Enter The Deck Option :");
  const  cards = readFlashCards(deckList[choice - 1]);
  const eachAttempts = conductExam(cards);
  console.log(eachAttempts);
};

main();
