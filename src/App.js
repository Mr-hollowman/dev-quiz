import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

export default function App() {
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [options, setOptions] = useState([]);
  const [optionClicked, setOptionClicked] = useState(false);

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
      getQuestion(res.data);
    });
  }, []);
  const getQuestion = (data) => {
    var random = Math.floor(Math.random() * 250);
    setQuestion(data && data[random].capital[0]);
    setAnswer(data && data[random].name.common);
    var options = [];
    for (let i = 0; i < 4; i++) {
      options.push(data[random + i].name.common);
    }
    setOptions(options);
  };
  const checkAnswer = (ans) => {
    setOptionClicked(true);
    const isAnswerRight = answer === ans;
    console.log(isAnswerRight);
  };

  const handleNextBtnClick = () => {
    setOptionClicked(false);
    getQuestion(data);
  };

  return (
    <div className="app-container">
      <div>
        <h2>Country Quiz</h2>
        <Card
          question={question}
          options={options}
          checkAnswer={checkAnswer}
          handleNextBtnClick={handleNextBtnClick}
          optionClicked={optionClicked}
        />
      </div>
    </div>
  );
}
