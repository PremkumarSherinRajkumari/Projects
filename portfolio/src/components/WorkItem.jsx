//WorkItem.jsx
import React, { useState } from 'react';

const WorkItem = ({ year, title, duration, details }) => {
    const [display, setDisplay] = useState(false);
    return (
        <ul className="educationlist">
            <li>
                <div />
                <button className="DisplayDetailsBtn" onClick={() => setDisplay(!display)}>
                    <p className="lala">
                        <span className="Year"> {year} </span>
                        <span className="Title"> {title} </span>
                    </p>
                </button>
                <p className={display ? 'Details' : 'Hidden'}>  {details}  </p>
            </li>
        </ul>
    );
};
export default WorkItem;