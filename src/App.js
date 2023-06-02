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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFlag, setIsFlag] = useState(false)

  useEffect(() => {
    axios("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
      getQuestion(res.data);
    });
  }, []);
  const getQuestion = (data) => {
    var random = Math.floor(Math.random() * 247);
    console.log(random);
    if(data[random].capital){
      setIsFlag(false)
      setQuestion(data && data[random].capital[0]);
    }
    else{
      setQuestion(data[random].flags.png);
      setIsFlag(true)
    }
    setAnswer(data && data[random].name.common);
    var options = [];
    for (let i = 0; i < 4; i++) {
      const opt = { id: i, text: data[random + i].name.common, isCorrect: i === 0 }
      options.push(opt);
    }
    setOptions(options);
  };
  const checkAnswer = (index) => {
    setOptionClicked(true);
    setSelectedIndex(index)
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
          selectedIndex={selectedIndex}
          isFlag={isFlag}
        />
      </div>
    </div>
  );
}
