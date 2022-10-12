import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data);

    // const top = topics.data
    // const {logo, total , name, id} = {top};
    return (
        <div className='flex gap-5 mt-12 flex-wrap'>

            {
                topics.data.map(topic => <Cart key={topic.id} topic={topic}></Cart>)
            }

        </div>
    );
};

export default Topics;