import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    const { questions, name } = quiz.data;

    return (
        <div className='my-16 text-center'>
            <h2 className='text-5xl'>Quiz For {name}</h2>
            {
                questions.map(quesiton => <Questions ques={quesiton}></Questions>)
            }
        </div>
    );
};

export default Quiz;