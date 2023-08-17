import React from 'react'
import "./Modal.css";
const Modal = ({ showProp, onClose, fullArray }) => {
    if (!showProp) {
        return null;
    }
    // console.log("fullArray",fullArray);
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {fullArray.map((data) => (
                    <div className='modal_wrapper'>
                        <div className='modal'>
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
                                    <button onClick={onClose}>close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Modal
