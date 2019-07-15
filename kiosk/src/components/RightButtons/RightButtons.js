import React from 'react';

import '../../././assets/css/rightbutton.css';
import '../../././assets/css/bootstrap.css';

import { createRequireFromPath } from 'module';


class RightButtons extends React.Component {
    
    constructor(props)
    {
        super(props);
    }

    render(){

        return (
            <div>
                <a onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Home");
                }.bind(this)}><img id = "Home" src={require('../../././assets/image/home.png')} title='HOME'/></a>
                
                
                <a onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Back");
                }.bind(this)}><img id = "Go_Back" src={require('../../././assets/image/go_back.png')} title='Go_Back'/></a>
                
                
                
                <a onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Menu");
                }.bind(this)}><img id = "Menu" src={require('../../././assets/image/menu.png')} title='MENU' /></a>
            </div>
        );
    }
}

export default RightButtons;

