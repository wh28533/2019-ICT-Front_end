import React from 'react';


import '../../././assets/css/bootstrap.css';
import '../../././assets/css/facultiefirst.css';
import  axios from 'axios'
import {FormattedMessage} from "react-intl";


class FacultyFirst extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            faculty: []
        }
    }
    
        componentDidMount()
        {
                axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/').///
                then(res=>{
                    const faculty_load=res.data;
                    this.setState({
                        faculty: faculty_load
                    });
            });
        }

    
    render(){
        return(
            <div>
                <div id = "f1_background_width">
                <h1 className= "Name"><FormattedMessage id="Faculties" defaultMassage="Faculties"/></h1>
                    <div id = "f1_button_pos">
                    { this.state.faculty.map(faculty => <div>
                        <button className="f1_buttons" type="button" onClick = {function(e){
                            e.preventDefault();
                          this.props.onChangePage(faculty.id);
                            this.componentDidMount(faculty.id);
                        }.bind(this)} >
                            <pre>{faculty.name}</pre>
                        </button>
                    </div>)}
                </div>
            </div>
    
        </div>

        );
    }
}

export default FacultyFirst;