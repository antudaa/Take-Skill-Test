import React from 'react';
import img from './../Images/Quiz Image.jpg';
import './Home.css'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart';

const Home = () => {

    const topic = useLoaderData();

    return (
        <div>
            <div className='grid grid-cols lg:grid-cols-2  my-16'>
                <div className='mx-auto width text-center p-6 my-auto shadow-xl rounded-xl'>
                    <h1 className='text-6xl color font-semibold'>Welcome</h1>
                    <p className='block my-4 text-xl'>To boost your skills practice Quiz with Us...</p>
                    <div className='bg-blue-100 p-2 rounded-lg'>
                        <small className='text-green-700  text-lg'>Here you can chose a topic and able to start a quiz exam in free of cost .So what are you waiting for let's start and boost up your Knowledge...</small>
                    </div>
                </div>
                <div className='mx-auto width  text-center shadow-xl rounded-xl'>
                    <img className='rounded-xl' src={img} alt="Something Went Wrong ! Path Not Fond." />
                </div>
            </div>
            <div className='flex gap-5 my-12 flex-wrap'>
            {
                topic.data.map(topic => <Cart key={topic.id} topic={topic}></Cart>)
            }
            </div>
        </div>

    );
};

export default Home;