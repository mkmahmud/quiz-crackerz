import React, { useState } from 'react';
import './Quistion.css'

const Question = ({data}) => {
    const {question, options, correctAnswer} = data;
    console.log(correctAnswer)

    const [Qresult, setResult] = useState(' ');
    
    const result = (e) => {
        if(e.target.innerText === correctAnswer){
          setResult('True')
        }else{
          setResult('False')
        }
    }


    return (
        <div className='question'>
            <h2 id='question'><span>01</span> {question} </h2>
            <div className="options">
                <ul>
                    {
                        options.map(opt => <li onClick={result}>{opt}</li> )
                    }
                    
                </ul>
            </div>
            <div className="answer">
                
            <h2 className={`my ${Qresult}`}> {Qresult}</h2>
            </div>
        </div>
    );
};

export default Question;