import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({data}) => {
    return (
        <div className="card bg-dark" >
        <img src={data.logo} className='card-img-top' alt="" />
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <div className="bottom-bar">
            <h6>Total Questions ({data.total})</h6>
            <Link to={`/quiz/singel-quiz/${data.id}`} className='btn btn-primary'>Try Now</Link>
          </div>
        </div>
        </div>
    );
};

export default Quiz;