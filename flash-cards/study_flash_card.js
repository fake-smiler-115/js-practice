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

const evaluateAnswer = (answer, expectedAnswer, card, wrongAnsweredCards) => {
  if (answer !== expectedAnswer) {
    console.log("It Is Wrong ❌");
    wrongAnsweredCards.push(card);
    return;
  }
  console.clear();
  console.log("It Is Right ✅");
};

const parseCard = (card) => {
  const question = card.match(/^ques:(.+)ans:/);
  const answer = card.match(/ans:(.+)$/);
  return [question[1], answer[1].trim()];
};

const examineCards = (cards) => {
  const wrongAnsweredCards = [];
  for (let index = 0; index < cards.length; index++) {
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
  let cardsToAnswer = cards;
  while (cardsToAnswer.length !== 0) {
    cardsToAnswer = examineCards(cardsToAnswer);
  }
};

const main = () => {
  const deckList = getDeckList();
  printDeckList(deckList);
  const choice = +prompt("Enter The Deck Option :");
  readFlashCards(deckList[choice - 1]);
};

main();
