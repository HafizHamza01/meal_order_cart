import React from 'react'
import "./Modal.css";
const Modal = ({ showProp, onClose, fullArray }) => {
    if (!showProp) {
        return null;
    }
    return (
        <>
            <div className='modal_wrapper'>
                <div className='modal'>
                    {fullArray.map((data) => (
                        <div className='meal_container'>
                            <div className='left_div'>
                                <div className='meal_name'>
                                    <li><h2>{data.name}</h2></li>
                                    <p>{data.description}</p>
                                </div>
                                <div className='meal_price'>
                                    <li>${data.price}</li>
                                </div>
                            </div>
                            <div className='right_div'>
                                <li><h3>{data.quantity}</h3></li>
                            </div>
                        </div>
                    ))}
                    <button className='close_btn' onClick={onClose}>close</button>

                </div>
            </div>
        </>
    )
}

export default Modal
