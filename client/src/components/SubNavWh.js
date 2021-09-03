import React from 'react'
import { Link } from 'react-router-dom';
import { SubNavAdmWh } from './SubNavAdmWh';
import '../util/css/SubNav.css';

function SubNavWh() {
    return (
        <div className="subnav">
            {
                SubNavAdmWh.map((item, key) => {
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

export default SubNavWh
