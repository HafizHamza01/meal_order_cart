import React from 'react'
import "./AboutMeal.css";
import { useState } from 'react';
import SingleMeal from './SingleMeal';
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const AboutMeal = () => {
    const [modalCart, setModalCart] = useState([]);
    console.log(modalCart);
    const onAdd = (item) => {
        const exist = modalCart.find((x) => {
            return x.id === item.id
        })
        if (exist) {
            setModalCart(modalCart.map((x) => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x)
            )
        }
        else {
            // setModalCart(prev => [...prev, { ...item, quantity: 1 }])
            setModalCart([...modalCart , item]);
        
        }

    }
    return (
        <>
            <section className='about_meal_section'>
                {DUMMY_MEALS.map((meal) => (
                    <SingleMeal fullArray={modalCart} onAdd={onAdd} meal={meal} />
                ))}
            </section>
        </>
    )
}

export default AboutMeal
