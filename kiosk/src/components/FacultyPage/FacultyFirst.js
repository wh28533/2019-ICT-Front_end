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

                axios.get('http://192.168.1.122:8000/faculty/').
                then(res=>{
                    const faculty_load=res.data;
                  //  console.log(res.data);
                    this.setState({
                        faculty: faculty_load
                    });
            });
        }

    
    render(){
        return(
            <div>
                <h1 className= "Name"><FormattedMessage id="Faculties" defaultMassage="Faculties"/></h1>
                    <div id = "f1_button_pos">
                    { this.state.faculty.map(faculty => <div>
                        <button align='center' className="f1_buttons" type="button" onClick = {function(e){
                            e.preventDefault();
                            alert(faculty.id);
                          this.props.onChangePage(faculty.id);
                            this.componentDidMount(faculty.id);
                        }.bind(this)} >
                            <pre>{faculty.name}</pre>
                        </button>
                    </div>)}
            </div>
    
        </div>

        );
    }
}

export default FacultyFirst;