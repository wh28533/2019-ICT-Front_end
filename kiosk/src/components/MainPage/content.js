import React from 'react';
import '../../././assets/css/MainPAge.css'

const content = ()=>{
    return (
        <main>
            <div align="center">
                <button className="buttons" type="button" href='#'>
                    <img align='left' className="icons" src={require( '../.././assets/image/Asset 4.png')} alt="Map"/>
                    <p>Map</p>
                </button>
                <button className="buttons" type="button" href='#'>
                    <img align='left' className="icons" src={require( '../.././assets/image/Asset 7.png')} alt="Schedule"/>
                        <p>Schedule</p>
                </button>
            </div>
            <br/>
            <div align="center">
                <button className= "buttons" type="button" href='#'>
                    <img align='left' className="icons"  src={require( '../.././assets/image/Asset 5.png')} alt="Faculties"/>
                        <p>Faculties</p>
                </button>
                <button className="buttons" type="button" href='#'>
                    <img align='left' className="icons"  src={require( '../.././assets/image/Asset 10.png')} alt="Institutes"/>
                      <p>Institutes</p>
                </button>
            </div>
            <br/>
            <div align="center">
                <button className="buttons" type="button" href='#'>
                    <img align='left' className="icons"  src={require( '../.././assets/image/Asset 3.png')} alt="History"/>
                <p> History</p>
                </button>
                <button className="buttons" type="button" href='#'>
                    <img align='left' className="icons"  src={require( '../.././assets/image/Asset 5.png')} alt="Information"/>
                       <p>Information</p>
                </button>
            </div>
        </main>
    );
}

export default content;