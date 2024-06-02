import * as fs from "fs";
import { parse } from "csv-parse/sync";
import simpleSort from "./sort-algorithm/simple";
import bubbleSort from "./sort-algorithm/bubble";
import selectionSort from "./sort-algorithm/selection";
import insertionSort from "./sort-algorithm/insertion";
import shellSort from "./sort-algorithm/shell";
import quickSort from "./sort-algorithm/quick";
import heapSort from "./sort-algorithm/heap";
import mergeSort from "./sort-algorithm/merge";
import countSort from "./sort-algorithm/count";
import binSort from "./sort-algorithm/bin";

const rawTemperatures: number[] = [];

for (let year = 2004; year <= 2023; year++) {
  const data = fs.readFileSync(`data/${year}.csv`, "utf-8");
  const lines = data.split("\n");
  const filteredData = lines.slice(5).join("\n");
  const records = parse(filteredData) as string[][];
  for (const record of records) {
    rawTemperatures.push(Number(record[1]));
  }
}
console.log(rawTemperatures.length);

const rawTemperatures10 = rawTemperatures.map((t) => t * 10);

for (let i = 0; i < 10; i++) {
  const temperatures = i <= 7 ? [...rawTemperatures] : [...rawTemperatures10];

  const startTime = Date.now();

  switch (i) {
    case 0:
      console.log("SimpleSort");
      simpleSort(temperatures, temperatures.length);
      break;
    case 1:
      console.log("bubbleSort");
      bubbleSort(temperatures, temperatures.length);
      break;
    case 2:
      console.log("selectionSort");
      selectionSort(temperatures, temperatures.length);
      break;
    case 3:
      console.log("insertionSort");
      insertionSort(temperatures, temperatures.length);
      break;
    case 4:
      console.log("shellSort");
      shellSort(temperatures, temperatures.length);
      break;
    case 5:
      console.log("quickSort");
      quickSort(temperatures, temperatures.length);
      break;
    case 6:
      console.log("heapSort");
      heapSort(temperatures, temperatures.length);
      break;
    case 7:
      console.log("mergeSort");
      mergeSort(temperatures, temperatures.length);
      break;
    case 8:
      console.log("countSort");
      countSort(temperatures, temperatures.length);
      break;
    case 9:
      console.log("binSort");
      binSort(temperatures, temperatures.length);
      break;
  }

  const endTime = Date.now();

  console.log("処理時間", (endTime - startTime) / 1000, "秒");
}
