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
        axios.get('https://nameless-dusk-42348.herokuapp.com/'+this.props.language+'/department/'+this.props.department_id).
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

<a onClick = {function(e){
    e.preventDefault();
    this.props.onChangePage();
}.bind(this)}><img  id = 'Teacher_cancel' src = {require('../../assets/image/cancel.png')}/></a>

<div id = 'Teacher_List_Pos'>

{this.state.professers.map(professer =>  <table className = 'Teacher_Name_Card'>
<tr>
   <td>
    <img className = 'Teacher_photo' src = {require('../../assets/image/Asset 1.png')}/>
    </td> 
</tr>
<tr><td>{professer.name}</td></tr>
<tr><td>{professer.contact}</td></tr>

</table>)}


</div>
         </div>
        );
    }
}


export default FacultyThird;