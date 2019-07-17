import React from 'react';

import '../../././assets/css/MainPage.css';
import '../../././assets/css/bootstrap.css';

class content extends React.Component{
    render(){
    return (
        <div>
        <div className="row">
            <div className="col-lg-1">
            </div>
            <div className="col-lg-5">
                <button type="button" className="btn-light main_buttons" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("MapPage");

                }.bind(this)}>
                    <div className="main_icons" align='left'>
                        <img className="media-object"src={require( '../.././assets/image/Asset 4.png')} alt="Map" width="20%"/>
                            <span className="main_text_in">Map</span>
                    </div>
                </button>
            </div>
            <div className="col-lg-5">
                <button type="button" className="btn-light main_buttons"  onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Schedule");

                }.bind(this)}>
                    <div className="main_icons" align='left'>
                        <img className="media-object" src={require( '../.././assets/image/Asset 7.png')} alt="Schedule" width="20%"/>
                            <span className="main_text_in">Schedule</span>
                    </div>
                </button>
            </div>
            <div className="col-lg-1">
            </div>
        </div>
    <br/>
        <div className="row">
            <div className="col-lg-1">
            </div>
            <div className="col-lg-5">
                <button type="button" className="btn-light main_buttons" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("FacultyFirst");
                    
                }.bind(this)}>
                    <div className="main_icons" align='left'>
                        <img className="media-object" src={require( '../.././assets/image/Asset 5.png')} alt="Faculties" width="20%"/>
                            <span className="main_text_in">Faculties</span>
                    </div>
                </button>
            </div>
            <div className="col-lg-5">
                <button type="button" className="btn-light main_buttons" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("Instituties");

                }.bind(this)}>
                    <div className="main_icons" align='left'>
                        <img className="media-object" src={require( '../.././assets/image/Asset 10.png')} alt="Institutes" width="20%"/>
                            <span className="main_text_in">Institutes</span>
                    </div>
                </button>
            </div>
            <div className="col-lg-1">
            </div>
        </div>
        <br/>
            <div className="row">
                <div className="col-lg-1">
                </div>
                <div className="col-lg-5">
                    <button type="button" className="btn-light main_buttons" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("UnivInfoPage");

                }.bind(this)}>
                        <div className="main_icons" align='left'>
                            <img className="media-object" src={require( '../.././assets/image/Asset 3.png')} alt="History" width="20%"/>
                                <span className="main_text_in">KSTU</span>
                        </div>
                    </button>
                </div>
                <div className="col-lg-5">
                    <button type="button" className="btn-light main_buttons" onClick = {function(e){
                    e.preventDefault();
                    this.props.onChangePage("InfoPage");
                    
                }.bind(this)}>
                        <div className="main_icons" align='left'>
                            <img className="media-object" src={require( '../.././assets/image/Asset 5.png')} alt="Information" width="20%"/>
                                <span className="main_text_in">Information</span>
                        </div>
                    </button>
                </div>
                <div className="col-lg-1">
                </div>
            </div>
        </div>
    );
  }
}

export default content;