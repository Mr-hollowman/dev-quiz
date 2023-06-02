import React from "react";

export default function Card({
    question,
    options,
    checkAnswer,
    optionClicked,
    handleNextBtnClick,
    selectedIndex,
    isFlag
}) {
    const rightIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="currentColor" className="bi bi-check" viewBox="0 -2 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
        </svg>
    }
    const wrongIcon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="currentColor" className="bi bi-x" viewBox="0 -2 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    }
    return (
        <div className="quiz-card">
            {isFlag && <div><img src={question} alt="flag" className="flag-img" /><h4>The above Flag is belogs to which country</h4></div>}
            {!isFlag && <h4>{question} is the capital of</h4>}

            {options.sort((a, b) => {
                var first = a.text.toLowerCase()
                var second = b.text.toLowerCase()
                if (first < second) {
                    return -1;
                }
                if (first > second) {
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
                        <div className="opt">
                            <span>{alph[index]}</span>
                            <span>{item.text}</span>
                        </div>
                        {optionClicked && item.isCorrect && <span className="icon">{rightIcon()}</span>}
                        {optionClicked && selectedIndex === index && !item.isCorrect && <span className="icon">{wrongIcon()}</span>}
                    </div>
                );
            })}
            {optionClicked && <button onClick={handleNextBtnClick}>Next</button>}
        </div >
    );
}
