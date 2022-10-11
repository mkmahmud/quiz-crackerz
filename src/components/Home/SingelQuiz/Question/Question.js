import React from 'react';
import './Quistion.css'

const Question = ({data}) => {
    const {question, options} = data;
    console.log(options)
    return (
        <div className='question'>
            <h2 id='question'><span>01</span> {question} </h2>
            <div className="options">
                <ul>
                    {
                        options.map(opt => <li>{opt}</li> )
                    }
                    
                </ul>
            </div>
            <div className="answer">
                <h2>True</h2>
            </div>
        </div>
    );
};

export default Question;