import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/faculty_third.css';
import  axios from 'axios';

import {FormattedMessage} from "react-intl";

class FacultyThird extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            department_info:[],
            professers:[],
            department_name:[]
        };
    }
    
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/department/'+this.props.department_id).
        then(res=>{
            const info_load = res.data.about;
            const professer_load=res.data.teachers;
            const department_name_load = res.data.name;
            this.setState({
                professers: professer_load,
                department_info:info_load,
                department_name:department_name_load
            });
        });
    }
 
    render(){

        return(
         <div>
         <div id = 'New_screen_for_department'></div>

<table id = 'Department_Intro'>
    <tr className  = "f3_department_name" ><td >{this.state.department_name}</td></tr>
    <tr className = "f3_department_info"><td>{this.state.department_info}</td></tr>
</table>

<div id = 'f3_Teacher_page_num'>-
    {this.state.page_num} -</div>
<a onClick = {function(e){
    e.preventDefault();
    this.props.onChangePage();
}.bind(this)}><img  id = 'f3_Teacher_cancel' src = {require('../../assets/image/cancel.png')}/></a>

<div id = 'Teacher_List_Pos'>

{this.state.professers.map(professer => 

<table className = 'Teacher_Name_Card'>
<tr className="f3_tr1">
   <td >
    <img className = 'Teacher_photo' src = {professer.photo}/>
    </td> 
</tr>
<tr className = "f3_tr2"><td >{professer.name}</td></tr>
<tr className = "f3_tr3"><td >{professer.contact}</td></tr>

</table>)}


</div>
         </div>
        );
    }
}


export default FacultyThird;