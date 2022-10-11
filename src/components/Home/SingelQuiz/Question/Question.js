import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Quistion.css'

const Question = ({data}) => {
    const {question, options, correctAnswer} = data;
    console.log(correctAnswer)

    const [Qresult, setResult] = useState(' ');
    const [click, setClick] = useState(false)
    const [correctAns, setCorrectAns] = useState(false)
    const [showCorrect, setShowCorrect] = useState(false)
    
    const result = (e) => {
       
        if(e.target.innerText === correctAnswer){
          setResult('True')
        }else{
          setResult('False')
          setCorrectAns(true)
        }
        setClick(true)
    }

    const showCorrectAns = () => {
        setShowCorrect(true)
    }

    return (
        <div className='question'>
            <h2 id='question'><span>01</span> {question} </h2>
            <p>{   <EyeIcon onClick={showCorrectAns}  className="eyeIcon"/>} </p>
            <div className={`options ${click ? 'disabledbutton' : ' '}`}>
                <ul>
                    {
                        options.map(opt => <li onClick={result}>{opt}</li> )
                    }
                    
                </ul>
            </div>
            <div className="answer">
            
                <h4 className={`correctAns ${showCorrect ? 'displayblock' : 'displayNone'}`}><span>Correct Answer:</span> {correctAns ? correctAnswer : ' '}</h4>
            
            <h2 className={`my ${Qresult}`}> {Qresult}</h2>
            </div>
        </div>
    );
};

export default Question;