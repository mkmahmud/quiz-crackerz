import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';
import './SingelQuiz.css'

const SingelQuiz = () => {
    const data = useLoaderData();
    // console.log(data.data.questions)
    const questions = data.data.questions;
    console.log(questions)
    return (
        <div className='Singel-question'>
            <h2>{data.data.name}</h2>
            {
                questions.map(question => <Question key={question.id} data={question}></Question>)
            }
        </div>
    );
};

export default SingelQuiz;