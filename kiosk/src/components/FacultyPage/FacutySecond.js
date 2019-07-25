import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/faculty_second.css';
import  axios from 'axios';

import FacultyThird from './FacultyThird';
import {FormattedMessage} from "react-intl";

class FacultySecond extends React.Component{
    constructor(props) {
        
        super(props);
        this.state = {
            faculty_id: this.props.faculty_id,
            faculties:[],
            departments : [],
            faculty_info:[],
            
            check_faculy_thired : false,
            faculy_third: <FacultyThird onChangePage = {function(){
                this.setState({
                    check_faculy_thired:false
                });

            }.bind(this)}
            />
        };
    }
    componentDidMount(id)
    {
        if(id === undefined)
        {
            id = this.state.faculty_id;
        }
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/').
        then(res=>{
            const faculty_load=res.data;
            this.setState({
                faculties: faculty_load
            });
        });
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/'+id).
        then(res=>{
            const departments_load=res.data.departments_of_faculty;
            const faculty_load=res.data.about;
            this.setState({
                departments: departments_load,
                fauculty_info: faculty_load
            });
        });
    }
    
    change_f_id = (id)=>{
        this.setState({
            faculty_id : id
        });
    }
    set_css_name = (id)=>{
        if(id === this.state.faculty_id) {
            return "f2_buttons";
        }
        else{
            return "f2_buttons f2_not";
        }
    }
    render(){
        
        var view_faculties,view_departments , view_faculty_third;
        view_faculties = 
        <div id = "f2_button_pos">
        { this.state.faculties.map(faculty =>
                    <div> 
                        <button align='center' className= {this.set_css_name(faculty.id)} type="button" onClick = {function(e){
                            
                            e.preventDefault();
                            this.change_f_id(faculty.id);
                            this.componentDidMount(faculty.id);
                            }.bind(this)} >

                            <pre>{faculty.name}</pre>
                        </button>
                    </div>)
                
                }
        </div>;

        view_departments = 
        <ul type="none" className = "f2_List_Pos">
        { this.state.departments.map(department => 
                        
                        <li><a onClick = {function(e){
                            
                            e.preventDefault();
                            var t_language = this.props.language;
                            this.setState({
                                check_faculy_thired:true,
                               
                                faculy_third : <FacultyThird department_id = {department.id} language = {t_language} onChangePage = {function(){
                                    this.setState({
                                        check_faculy_thired:false
                                    });
                    
                                }.bind(this)}/>
                            });
                        }.bind(this)}>
                        <div className = "f2_department_text">{department.name}</div></a></li>
                    )}
        </ul>;

        view_faculty_third = this.state.check_faculy_thired ? this.state.faculy_third: '';
        
        return(
            <div>             
                <h1 className="Name"><FormattedMessage id="Departments" defaultMassage="Departments"/></h1>
            
                {view_faculties}
        
                <table id = 'f2_Faculty_intro'>
                <tr><td>
                {this.state.fauculty_info}
                </td></tr>
                </table>
                {view_departments}
                {view_faculty_third}
            </div>
        );
    }
}

export default FacultySecond;
