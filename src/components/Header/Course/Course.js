import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Book from '../../Book/Book';
import './Course.css'

const Course = () => {
    
    const allData =fakeData.slice(0,12);
    const [books,setBooks]=useState(allData)
    

    return (
        <div className='course-container'>
            
           <div className="book-container">
           
                {
                    books.map(bd=> <Book book={bd}></Book>)
                }
            
           </div>
           <div className="cart-container">
            <p>This is cart</p>
           </div>
        </div>
    );
};

export default Course;