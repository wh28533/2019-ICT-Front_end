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
        this.state = {
            Building: false,
            Floor: false,
            DisplayNone:false,
            FloorButtonNone:false,

        }
    }
    ChangeFalClassname()
    {
        this.setState({
            Building: !this.state.Building,
            FloorButtonNone:!this.state.FloorButtonNone,
        })

    }
    ChangeGradClassname()
    {
        this.setState(
            {Floor: !this.state.Floor,
            })

    }
    render(){
        let Building= this.state.Building ?   "Building" : "Building-None";
        let FloorButtonNone = this.state.FloorButtonNone ?   "DisplayBlock" : "dropdown";
        let Floor = this.state.Floor ? "Floor" : "Floor-None ";

        return (
            <div>
                <header>
                <h1 className="Name"><FormattedMessage id="Map" defaultMassage="Map"/></h1>
                </header>
                <div className="row">
                    <div className="col-sm-3" >
                        <div className="dropdown" onClick={this.ChangeFalClassname.bind(this)} >
                            <button className="dropbtn"  ><FormattedMessage id="Building Number" defaultMassage="Building Number"/></button>
                            <div className={Building}>
                                {/*<a href="#" onClick={this.GetMenuVal(...)} >...}</a>*/}
                                <a href="#">1st_building</a>
                                <a href="#">2st_buildingd</a>
                                <a href="#">3st_building</a>
                                <a href="#">4st_building</a>
                                <a href="#">5st_building</a>
                            </div>
                        </div>

                        <div className={FloorButtonNone} onClick={this.ChangeGradClassname.bind(this)}>
                            <button className="dropbtn" ><FormattedMessage id="Floor Number" defaultMassage=" Floor Number"/></button>
                            <div className={Floor}>
                                <a href="#">1st</a>
                                <a href="#">2nd</a>
                                <a href="#">3rd</a>
                            </div>
                        </div>
                        <button className="MapSubmit" ><FormattedMessage id="MapSubmit" defaultMassage="View map"/>  </button>

                    </div>
                    <div className="col-sm-9" >
                        <div id="Box">
                            <img id="Map" src= {require('../.././assets/image/map_image/whole_campus.png')} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapPage;
