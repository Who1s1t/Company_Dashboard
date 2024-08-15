import React from 'react';
import CuteKitten from '../assets/cute kitten/cute_kitten_3.png'
import classes from "../style/Cat.module.css";


const Cat3 = () => {
    return (
        <div className={classes.imgBox}>
            <img className={classes.img} src={CuteKitten} alt="Cute Kitten"/>
        </div>
    );
};

export default Cat3;