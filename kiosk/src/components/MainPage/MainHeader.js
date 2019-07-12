import React from 'react';
// import '../App.css';
import logo from '../.././assets/image/kstu_symbol.png'

import '../../././assets/css/MainPAge.css'

const MainHeader = ()=>{
    return (
        <header>
            <img id = "logo" src={logo} alt="KSTU_logo"/>
            <h1 className="chan">Welcome to KSTU</h1>
            <p className="chan_2">Kyrgyz State Technical University named after I.Razzakov</p>
            <br/><br/><br/>
        </header>
    );
}

export default MainHeader;