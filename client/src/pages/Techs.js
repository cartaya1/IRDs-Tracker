import React from 'react';
import '../util/css/Techs.css';

function Techs({TECH, PHOTO, TEAM, SUP, available}) {
    return (

        <div className="Report">
            <p><em>{available} List of Tech by Team.</em></p>

            <div className="image">
                <img src={PHOTO} alt={TEAM}/>
            </div>

            <div className="TECH">
            {TECH}</div>

            <div className="details">

                <div className="Supervisor">
                    <p className="p1">Supervisor:</p>
                    <p className="p2"><strong>{SUP}</strong></p>
                </div>


                <button className="addToCart">
                    <p className="p1">Team Name to look</p>                       
                </button>

            </div>
        </div>
    )
}

export default Techs;