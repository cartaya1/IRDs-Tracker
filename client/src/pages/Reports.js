import React from 'react';
import '../css/Report.css';

function Reports({TECH, image, TEAM, SUP, available}) {
    return (

        <div className="report">
            <p><em>{available} On Hand Report</em></p>

            <div className="image">
                <img src={image} alt={TEAM}/>
            </div>

            <div className="TECH">
            {TECH}</div>

            <div className="details">

                <div className="Supervisor">
                    <p className="p1">Supervisor:</p>
                    <p className="p2"><strong>{SUP}</strong></p>
                </div>


                <button className="addToCart">
                    <p className="p1">Tech Number to Show</p>                       
                </button>

            </div>
        </div>
    )
}

export default Reports;