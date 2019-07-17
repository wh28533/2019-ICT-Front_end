import React from 'react';
import logo from '../.././assets/image/kstu_symbol.png'
import {FormattedMessage,} from "react-intl";

import '../../././assets/css/MainPage.css';
import '../../././assets/css/bootstrap.css';

const MainHeader = ()=>{
    return (
        <header>
            <img id="main_logo" src={logo} alt="KSTU_logo"/>
           <br/><br/><br/>
                    <h1 className="chan"> <FormattedMessage id="Welcome to KSTU" defaultMassage="Welcome to KSTU"/></h1>
                    <p className="chan_2"><FormattedMessage id="named after I.Razzakov" defaultMassage="Kyrgyz State Technical University named after I.Razzakov"/></p>
                <br/><br/>

        </header>
    );
}

export default MainHeader;