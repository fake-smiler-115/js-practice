import { calculateStatics } from "./statics.js";

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

const cardLocations = (cards) => {
  return function b(card) {
    return cards.findIndex((item) => item === card);
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

const calculateTime = (start, end) => Math.round((end - start) / 1000);

const displayQuestion = (question, index) =>
  console.log(index + " :  ", question);

const getResponseToQuestion = () => {
  const start = Date.now();
  const answer = prompt("answer :");
  const end = Date.now();
  return [answer, start, end];
};

const examineCards = (cards, eachAttempts, findLocation, timeTaken) => {
  const wrongAnsweredCards = [];
  for (let index = 0; index < cards.length; index++) {
    const cardLocation = findLocation(cards[index]);
    eachAttempts[cardLocation]++;
    const [question, expectedAnswer] = parseCard(cards[index]);
    displayQuestion(question, index + 1);
    const [answer, start, end] = getResponseToQuestion();
    timeTaken[cardLocation] += calculateTime(start, end);
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
  const timeTaken = "0".repeat(cards.length).split("").map((ele) => +ele);
  let cardsToAnswer = [...cards];
  const findLocation = cardLocations(cardsToAnswer);
  while (cardsToAnswer.length !== 0) {
    cardsToAnswer = examineCards(cardsToAnswer,eachAttempts,findLocation,timeTaken);
  }

  return [eachAttempts, timeTaken];
};

const saveToHistory = (fileName, attempts,timeTaken,score) => {
  let data = 'file :' + fileName + ' attempts :' + attempts.join(',');
  data += ' time :' + timeTaken.join(',') + ' score :' + score + '\n';
  Deno.writeTextFileSync("history.txt", data, { append: true });
}

export const studyFlashCards = () => {
  const deckList = getDeckList();
  printDeckList(deckList);
  const choice = +prompt("Enter The Deck Option :");
  const cards = readFlashCards(deckList[choice - 1]);
  const [eachAttempts, timeTaken] = conductExam(cards);
  const score = calculateStatics(eachAttempts, timeTaken);
  saveToHistory(deckList[choice - 1], eachAttempts, timeTaken , score);
};