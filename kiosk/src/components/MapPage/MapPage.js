import React from 'react';
import ReactDOM from 'react-dom';
import '../../././assets/css/MapPage.css';
import '../../././assets/css/bootstrap.css';
import {FormattedMessage} from "react-intl";

class MapPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return (
            <div>
                <h1 id="Name"><FormattedMessage id="Name" defaultMassage="Map"/></h1>
        <div id="Box">
        <img id="Map" src= {require('../.././assets/image/map_image/whole_campus.png')} />
        </div>

    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'
                        id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="button_text"><FormattedMessage id="Building_Number" defaultMassage="Building Number"/></span></button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#"><span className="button_text">1st_building</span></a>
                        <a className="dropdown-item" href="#"><span className="button_text">2nd_building</span></a>
                    </div>
                </li>
                &nbsp; &nbsp;
                <li className="nav-item dropdown">
                    <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'
                        id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="button_text"><FormattedMessage id="Floor_Number" defaultMassage="Floor Number"/></span></button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#"><span className="button_text">1st</span></a>
                        <a className="dropdown-item" href="#"><span className="button_text">2nd</span></a>
                        <a className="dropdown-item" href="#"><span className="button_text">3nd</span></a>
                        <a className="dropdown-item" href="#"><span className="button_text">4nd</span></a>
                    </div>
                </li>
                &nbsp; &nbsp; &nbsp;
                <li>
                    <form action="#" accept-charset="utf-8" name="info" method="get">

                        <input type="submit" value="choose" className="btn-light button_deco button_text" href='#'/>

                    </form>
                </li>
            </ul>

        </div>
        </nav>
            </div>
        );
    }

}

export default MapPage;
