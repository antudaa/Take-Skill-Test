import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = (props) => {
    const { topic } = props;
    console.log(topic);

    return (
        <div className='mx-auto'>
            <div style={{ width: '300px', height: '400px' }} className="card dark-blue shadow-xl">
                <figure className="px-6 pt-6">
                    <img style={{ width: '200px', height: '200px' }} src={topic.logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title white my-3">{topic.name}</h2>
                    <div className="card-actions">
                        <Link to={`/quiz/${topic.id}`}><button className="btn btn-outline btn-success">Start Quiz</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;