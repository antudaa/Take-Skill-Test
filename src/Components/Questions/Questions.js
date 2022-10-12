import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Question.css'
import Option from  '../Options/Option';
import {ToastContainer, toast} from 'react-toastify';


const Question = ({ ques }) => {
    console.log(ques)

    const { question, options, correctAnswer } = ques;
    const splitques = question.split('<p>').join('');
    const newQues = splitques.split('<p>').join('');


    const seeTheAns = ans => {
        toast.success(ans, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div className=''>
            <div className='question-container'>
                <div className='que'>
                    <h3>{newQues}</h3>

                    <div className='que-icon' onClick={() => seeTheAns(correctAnswer)}>
                        <EyeIcon style={{width:'80px', height:'50px'}} />
                    </div>
                </div>

                <div className='option'>
                    {
                        options.map(option => <Option option={option} correctAnswer={correctAnswer}></Option>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Question;