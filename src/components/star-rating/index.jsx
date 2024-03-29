import "./style.css"

import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"

const StarRating = ({noOfStar = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

    return (
    <div className="star-rating">
        {
            [...Array(noOfStar)].map((_, index) => {
                index += 1
                return (
                    <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                )
            })
        }
    </div>
  )
}

export default StarRating