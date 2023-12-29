import React from 'react'
import MealSummary from './MealSummary'
import AboutMeal from './AboutMeal'

const Meal = ({ onAdd, fullArray }) => {
    return (
        <div>
            <MealSummary />
            <AboutMeal fullArray={fullArray} onAdd={onAdd} />
        </div>
    )
}

export default Meal
