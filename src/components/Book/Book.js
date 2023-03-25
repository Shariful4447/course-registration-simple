import React from 'react';
import './Book.css'

const Book = (props) => {
    const {img, name, seller, price}= props.book;
    return (
        <div className='book'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h1 className='book-name'>{name}</h1>
            <br />
            <p>Teach By: {seller}</p>
            <p>Enrolled price: $ {price} </p>
            </div>
            
            
        </div>
    );
};

export default Book;