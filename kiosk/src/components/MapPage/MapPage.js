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
            view_building: <img className="Map_all" src= {require('../.././assets/image/map_image/map0-0.png')} />,
            bulding_num:'Select',
            floor_num:'Select'
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
        var view_under_button;
        var under_bottons_array = new Array(2);
        under_bottons_array[0] = new Array(4);
        under_bottons_array[1] = new Array(6);   
        
        for(var i = 1; i < 5;i++){
            under_bottons_array[0][i-1] = i;
        }

        for(var i = 1;i < 7; i++){
            under_bottons_array[1][i-1] = i;    
        }

        if(this.state.bulding_num === 'Select'){
            view_under_button = <a><FormattedMessage id="Select Building First Please" defaultMassage="Select Building First Please"/></a>;
        }
        else{
            view_under_button = under_bottons_array[Number(this.state.bulding_num) -1 ].map(i => <a onClick = {function(e){
                e.preventDefault();
                this.setState({
                    floor_num : String(i)
                });
            }.bind(this)}>{i} building</a>);
        }
        
        return (
            <div className="Map_fullscreen">
                <header>
                <h1 className="Name"><FormattedMessage id="Map" defaultMassage="Map"/></h1>
                </header>
                <div className="row">
                    <div className="col-sm-3" >
                        
                    <button className="view_all_map" onClick = {function(e){
                           
                            this.setState({
                                bulding_num : 'Select',
                                floor_num : 'Select',
                                view_building : <img className="Map_all" src= {require('../.././assets/image/map_image/map0-0.png')} />
                            })

                        }.bind(this)}><FormattedMessage id="View all map" defaultMassage="View all map"/>  </button>
                       
                        <div className="dropdown" onClick={this.ChangeFalClassname.bind(this)} >
                            <button className="dropbtn map_buttons building_number_first"  ><FormattedMessage id="Building Number" defaultMassage="Building Number"/> : <FormattedMessage id = {this.state.bulding_num} defaultMessage =  {this.state.bulding_num}/></button>
                            <div className={Building}>
                                <a onClick = {function(e){
                                    e.preventDefault();
                                    this.setState({
                                        bulding_num : '1',
                                        floor_num:'Select'
                                    });

                                }.bind(this)}>1st_building</a>
                                <a onClick = {function(e){
                                    e.preventDefault();
                                    this.setState({
                                        bulding_num : '2',
                                        floor_num:'Select'
                                    });

                                }.bind(this)}>2st_building</a>
                            </div>
                        </div>

                        <div className={FloorButtonNone} onClick={this.ChangeGradClassname.bind(this)}>
                            <button className="dropbtn map_buttons" ><FormattedMessage id="Floor Number" defaultMassage=" Floor Number"/> : <FormattedMessage id = {this.state.floor_num} defaultMessage =  {this.state.floor_num}/></button>
                            <div className={Floor}>
                                {view_under_button}
                            </div>
                        </div>
                        <button className="MapSubmit" onClick = {function(e){
                            if(this.state.floor_num !== 'Select' && this.state.floor_num !== 'Select')
                            {
                                if(this.state.bulding_num === '1')
                                {
                                    this.setState({
                                    view_building : <img className="Map_1building" src= {require( '../.././assets/image/map_image/map' + this.state.bulding_num +'-'+ this.state.floor_num +'.png')} />
                                    });
                                }
                                else
                                {
                                    this.setState({
                                    view_building : <img className="Map_2building" src= {require( '../.././assets/image/map_image/map' + this.state.bulding_num +'-'+ this.state.floor_num +'.png')} />
                                    });
                                }
                            }
                        }.bind(this)}><FormattedMessage id="MapSubmit" defaultMassage="View map"/>  </button>
                    </div>


                    <div className="col-sm-9" >
                        <div id="Box">
                            {this.state.view_building}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapPage;
