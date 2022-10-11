import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import Quiz from './Quiz/Quiz';

const Home = () => {

    const topics = useLoaderData();

    return (
        <div className='Home'>
            <div className="Home-head">
                <h2>
                    Think you have what it takes? It's time to head back to the 1990s to see if you can ace this ultimate Blossom quiz! START QUIZ.
                </h2>
            </div>
            <div className="Home-quiz">
                {
                    topics.data.map(topic => <Quiz key={topic.id} data={topic}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;