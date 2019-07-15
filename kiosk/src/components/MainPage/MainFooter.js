import React from 'react';
import '../../././assets/css/MainPage.css'

const MainFooter = ()=>{
    return (
        <footer>
            <ul id="main_contact" className="main_rr">
                <li>Reception: +996 (312) 545 162</li>
                <li>Fax: +996 (312) 545 162</li>
                <li>e-mail: rector@kstu.kg</li>
                <li>website: www.kstu.kg</li>
            </ul>
            <div id="main_language_block">
                <a href="#"><img className="main_lang_icon" src={require( '../.././assets/image/kg.png')} title="park_sewha"/></a>
                <a href="#"><img className="main_lang_icon" src={require( '../.././assets/image/eng.png')} title="english"/></a>
                <a href="#"><img className="main_lang_icon"  src={require( '../.././assets/image/ru.png')} title="russian"/></a>
            </div>
        </footer>
    );
}

export default MainFooter;