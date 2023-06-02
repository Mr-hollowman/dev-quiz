import React from 'react'

export default function Card({ question, options }) {
    return (
        <div className='quiz-card'>
            <h4>{question} is the capital of</h4>

            {options.sort().map((item, index) => {
                const alph = ["A", "B", "C", "D"]
                return <div key={index} className='options'>
                    <span>{alph[index]}</span><span>{item}</span>
                </div>
            })}
        </div>
    )
}
