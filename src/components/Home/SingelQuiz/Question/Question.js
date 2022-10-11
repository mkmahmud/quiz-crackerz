import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Quistion.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({data}) => {
    const notify = (data) => toast(data);

    const {question, options, correctAnswer} = data;
   
    const [Qresult, setResult] = useState(' ');
    const [click, setClick] = useState(false)
    const [correctAns, setCorrectAns] = useState(false)
    const [showCorrect, setShowCorrect] = useState(false)
    
    const result = (e) => {
     
        if(e.target.innerText === correctAnswer){
          setResult('True')
          notify('True')
        }else{
          setResult('False')
          setCorrectAns(true)
          notify('False')
        }
        setClick(true)
    }

    const showCorrectAns = () => {
        setShowCorrect(true)
    }
    

    return (
        <div className='question'>
            <h2 id='question'><span>Q:</span> {question} </h2>
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
            <ToastContainer />
            </div>
        </div>
    );
};

export default Question;