import React from 'react';

import '../../././assets/css/MenuBar.css';
import '../../././assets/css/bootstrap.css';


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
                <br/>Map
                </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("SchedulePage");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/schedule.png")} alt = "Schedule"/>
                <br/>Schedule
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("FacultyFirst");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/faculties.png")} alt = "Faculties"/>
                <br/>Faculties
            </button>
            <button>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/institutes.png")} alt = "Institutes"/>
                <br/>Institutes
            </button>
            <button >
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/history.png")} alt = "History"/>
                <br/>History
            </button>
            <button onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("InfoPage");
                    
                }.bind(this)}>
                <img align = 'left' className = "menu_bar_icons" src = {require("../../././assets/image/info.png")} alt = "Information"/>
                <br/>Information
            </button>
                <table>

                </table>
        </div>
        );
    }
}
export default MenuBar;

