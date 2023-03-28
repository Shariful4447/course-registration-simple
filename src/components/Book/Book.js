import React from 'react';
import './Book.css'

const Book = (props) => {
    const {image, courseName, teacherName, price}= props.book;
    return (
        <div className='book'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
            <h1 className='book-name'>{courseName}</h1>
            <br />
            <p>Teach By: {teacherName}</p>
            <p>Enrolled price: $ {price} </p>
            </div>
            
            
        </div>
    );
};

export default Book;