/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays with Values

  const pronoun = ["the", "our", "my", "their", "his"];
  const adj = ["last", "greatest", "biggest", "smallest", "silliest"];
  const noun = ["elon", "gates", "jobbs", "bezos", "mogul"];
  const ending = [".com", ".net", ".us", ".io", ".biz"];

  // Array that will contain list of generated domain names
  let finalOutput = [];

  // Loop to print 10 different combinations
  for (let i = 0; i < 10; i++) {
    let indexPronoun = Math.floor(Math.random() * pronoun.length);
    let indexAdj = Math.floor(Math.random() * adj.length);
    let indexNoun = Math.floor(Math.random() * noun.length);
    let indexEnding = Math.floor(Math.random() * ending.length);

    // Get string for domain name
    let sentence =
      pronoun[indexPronoun] +
      adj[indexAdj] +
      noun[indexNoun] +
      ending[indexEnding];

    // Pushing generated string to an separate array
    finalOutput.push(sentence);
  }

  for (let j = 0; j < 10; j++) {
    console.log(finalOutput[j]);
  }
  document.getElementById("generator").innerHTML = finalOutput;
};
