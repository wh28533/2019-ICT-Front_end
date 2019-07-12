import React from 'react';
import '../../././assets/css/MainPAge.css'

const MainFooter = ()=>{
    return (
        <footer>
            <ul id="contact"  className="rr">
                {/*<style>{"\*/}
                {/*.rr{\*/}
                {/*    list-style: none;\*/}
                {/*}\*/}
                {/*    "}</style>*/}

                <li>Reception: +996 (312) 545 162</li>
                <li>Fax: +996 (312) 545 162</li>
                <li>e-mail: rector@kstu.kg</li>
                <li>website: www.kstu.kg</li>
            </ul>
            <div idl="anguage_block">
                <a ><img className="lang_icon"  alt="aa" src={require( '../.././assets/image/kg.png')} title="park_sewha"/></a>
                <a ><img className="lang_icon"  alt="aa" src={require( '../.././assets/image/eng.png')} title="english"/></a>
                <a ><img className="lang_icon"  alt="aa" src={require( '../.././assets/image/ru.png')} title="russian"/></a>
            </div>
        </footer>
    );
}

export default MainFooter;