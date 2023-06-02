import React from "react";

export default function Card({
    question,
    options,
    checkAnswer,
    optionClicked,
    handleNextBtnClick,
    selectedIndex
}) {
    return (
        <div className="quiz-card">
            <h4>{question} is the capital of</h4>

            {options.sort((a,b)=>{
                var first = a.text.toLowerCase()
                var second = b.text.toLowerCase()
                if(first < second){
                    return -1;
                }
                if(first > second){
                    return 1;
                }
                return 0;
            }).map((item, index) => {
                const alph = ["A", "B", "C", "D"];
                return (
                    <div
                        key={index}
                        className={`options ${optionClicked && item.isCorrect ? "right-ans" : ""} ${optionClicked && selectedIndex === index && !item.isCorrect ? 'wrong-ans' : ""} `}
                        onClick={() => (!optionClicked && checkAnswer(index))}
                    >
                        <span>{alph[index]}</span>
                        <span>{item.text}</span>
                    </div>
                );
            })}
            {optionClicked && <button onClick={handleNextBtnClick}>Next</button>}
        </div >
    );
}
