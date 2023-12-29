import React from 'react'
import "./AboutMeal.css";
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
const AboutMeal = ({ onAdd, fullArray }) => {
    return (
        <>
            <section className='about_meal_section'>
                {DUMMY_MEALS.map((meal) => (
                    <SingleMeal fullArray={fullArray} onAdd={onAdd} meal={meal} />
                ))}
            </section>
        </>
    )
}

export default AboutMeal
