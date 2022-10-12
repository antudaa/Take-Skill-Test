import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css'

const Option = ({option, correctAnswer}) => {

    const handelCorrectAns = (option) => {
        if(option === correctAnswer){
            toast.success('correct answer', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.error('Wrong answer!', {
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
    }

    return (
        <div className='option'>
            <ul onClick={() => handelCorrectAns(option)}>
                <li>{option}</li>

            </ul>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;