import React from 'react'
import "./SingleMeal.css";
import Modal from '../Modal/Modal';
import { useState } from 'react';
const SingleMeal = ({ meal, onAdd, fullArray }) => {
    const [show, setShow] = useState(false);
    const handleAddClick = (item) => {
        setShow(true);
        onAdd(item)
    }
    const handleCloseClick = () => {
        setShow(false);
    }
    const filteredQuantity = fullArray.find((data) => {
        return data.id === meal.id
    });
    let itemquantity;
    if (filteredQuantity) {
         itemquantity = filteredQuantity.quantity;
    }
    return (
        <>
            <div className='meal_container'>
                <div className='left_div'>
                    <div className='meal_name'>
                        <li><h2>{meal.name}</h2></li>
                        <p>{meal.description}</p>
                    </div>
                    <div className='meal_price'>
                        <li>${meal.price}</li>
                    </div>
                </div>
                <div className='right_div'>
                    <div className='meal_set_amount'>
                        <h3>Total Quantity</h3>
                        <div>
                            <input type="number" value={itemquantity} />
                        </div>
                    </div>
                    <button onClick={(event) => { handleAddClick(meal) }}>+Add</button>
                </div>
            </div>
            {show && <Modal showProp={show} fullArray={fullArray} onClose={handleCloseClick} />}
        </>
    )
}

export default SingleMeal;
