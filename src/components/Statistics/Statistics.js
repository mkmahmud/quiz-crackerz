import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData().data;
    
    return (
        <div className='Statistics'>
            <h2>Statistics</h2>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="white" />
                <CartesianGrid stroke="green" strokeDasharray="7 7" />
                <XAxis dataKey="name" />
                <YAxis />
        </LineChart>
        </div>
    );
};

export default Statistics;