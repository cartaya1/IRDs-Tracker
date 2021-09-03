import React from 'react'
import { Link } from 'react-router-dom';
import { SubNavAdmOHR } from './SubNavAdmOHR';
import '../util/css/SubNav.css';

function SubNavOHR() {
    return (
        <div className="subnav">
            {
                SubNavAdmOHR.map((item, key) => {
                    return (
                        <div className="subnavbox" key={item.id}>
                            <Link to={item.path} className="subnavboxlink">
                                <div className="subnavbox__icon">{item.icon}</div>
                                <div className={item.cName}>{item.title}</div>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubNavOHR
