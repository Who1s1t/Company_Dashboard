import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../style/Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <h2>Company</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/cat1">Cat 1</Link></li>
                <li><Link to="/cat2">Cat 2</Link></li>
                <li><Link to="/cat3">Cat 3</Link></li>
            </ul>
        </div>
    );
};
export default Sidebar;
