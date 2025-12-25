import { calculateStatics } from "./statics.js";

const parseData = (data) => {
  const fileName = data.match(/^file :([^ ]+)/);
  const attempts = data.match(/attempts :([^ ]+)/);
  const time = data.match(/time :([^ ]+)/);
  const score = data.match(/score :(.+)$/);
  return [fileName[1], score[1], attempts[1], time[1]];
};

const printParticularHistory = (data) => {
  const [fileName, score, attemptsString, timesString] = parseData(data);
  const attempts = attemptsString.split(',').map(element => +element);
  const times = timesString.split(',').map(element => +element);
  calculateStatics(attempts, times);
  prompt('');
};

const printAllHistory = (data) => {
  for (let index = 0; index < data.length; index++) {
    const [fileName, score] = parseData(data[index]);
    console.log("\n\t" + (index + 1) + " FILE :" + fileName,"\t SCORE :" + score);
  }
};

export const displayHistory = () => {
  const data = Deno.readTextFileSync("history.txt");
  const historyData = data.split("\n");
  historyData.pop();
  printAllHistory(historyData);
  const choice = +prompt("");
  printParticularHistory(historyData[choice - 1]);
};