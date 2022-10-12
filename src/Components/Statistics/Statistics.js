import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = (props) => {
    const topics = useLoaderData();
    console.log(topics.data)
    const data = topics.data;
    return (
        <div className='my-12'>
            <ResponsiveContainer width="80%" height={400}>
            <LineChart style={{ marginRight: 'auto', marginLeft: 'auto' }} width={400} height={300} data={data}>
                <Line
                    type="monotone"
                    dataKey='total'
                    stroke="#8884d8"
                    fill="#8884d8"
                    strokeWidth={3}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                />
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke='#ccc' />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;