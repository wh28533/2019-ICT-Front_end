import React from 'react';

import '../../././assets/css/MenuBar.css';
import '../../././assets/css/bootstrap.css';
import {FormattedMessage} from "react-intl";

class MenuBar extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render(){

        return (
            <div align = 'right' className = "menu_bar_btn-group" id = "menu_bar_btn_group_start">
                <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("MapPage");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require('../../././assets/image/map.png')} alt = "Map"/>
                <br/><FormattedMessage id="MapinMenu" defaultMassage="Map"/>
                </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Schedule");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/schedule.png")} alt = "Schedule"/>
                <br/><FormattedMessage id="ScheduleinMenu" defaultMassage="Schedule"/>
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("FacultyFirst");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/faculties.png")} alt = "Faculties"/>
                <br/><FormattedMessage id="FacultiesinMenu" defaultMassage="Faculties"/>
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("InstituteFirst");
                    
                }.bind(this)}>

                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/institutes.png")} alt = "Institutes"/>
                <br/> <FormattedMessage id="InstitutesinMenu" defaultMassage="Institutes"/>
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("UnivInfoPage");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/history.png")} alt = "History"/>
                <br/><FormattedMessage id="KSTUinMenu" defaultMassage="KSTU"/>
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("InfoPage");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/info.png")} alt = "Information"/>
                <br/><FormattedMessage id="InformationinMenu" defaultMassage="Information"/>
            </button>
                <table>

                </table>
        </div>
        );
    }
}
export default MenuBar;

