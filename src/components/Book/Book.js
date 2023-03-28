import React from 'react';
import './Book.css'

const Book = (props) => {
    const {courseName, teacherName, price, id, image}= props.book;
    const buttonStyle = {backgroundColor: 'green', color: 'white'};
    return (
        <div className='book'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
            <h1 className='book-name'>{courseName}</h1>
            
            <p>Teach By: {teacherName}</p>
            <p>Enrolled price: $ {price} </p>
            <p>Course Id : {id}</p>
            <button style={buttonStyle}> Enrolled Now : </button>
            </div>
            
            
        </div>
    );
};

export default Book;