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
            page_num : 1,
            pofessers:[],
            view_professors:''
        };
    }
    
    componentDidMount()
    {
        axios.get('http://192.168.1.122:8000/department/'+this.props.department_id).
        then(res=>{
            const professer_load=res.data.teachers;
           // console.log(res.data);
            this.setState({
                professer: professer_load
            });
        });
    }
    
    make_view()
    {
    }
    
    render(){
        return(
            <div>
                
    <div id = 'f3_New_screen_for_department'></div>

<table id = 'f3_Department_Intro'>
    <td>Department Intro here</td>
</table>

<div id = 'f3_Teacher_page_num'>- {this.state.page_num} -</div>

<a onClick = {function(e){
    e.preventDefault();
    this.props.onChangePage();
}.bind(this)}>
<img  id = 'f3_Teacher_cancel' src = {require('../.././assets/image/cancel.png')}/></a>

<a onClick = {function(e){
    e.preventDefault();
    if(this.state.page_num != ((this.state.professer.length-1) / 6) + 1)
    {
        this.setState((prevState) => {
            return {
            page_num : prevState.page_num + 1
            }
          });
    }

}.bind(this)}><img id = 'f3_Teacher_next' src={require('../.././assets/image/right_triangle.png')} title='next'/></a>


<a onClick = {function(e){
    e.preventDefault();
    if(this.state.page_num != 1)
    {
        this.setState((prevState) => {
            return {
            page_num : prevState.page_num - 1
            }
          });
    }

}.bind(this)}><img id = 'f3_Teacher_prev' src={require('../.././assets/image/left_triangle.png')} title='prev'/></a>

<table id = 'f3_List_Pos'>
<tr>
    <td align = 'center'> 
    <table className = 'f3_Teacher_Name_Card'>
        <tr>
           <td>
            <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
            </td> 
        </tr>
        <tr><td>Name</td></tr>
        <tr><td>Status</td></tr>
        <tr><td>Contacts-1</td></tr>
        <tr><td>Contacts-2</td></tr>
    </table>
    </td>
    <td align = 'center'>
        <table className = 'f3_Teacher_Name_Card'>
            <tr>
            <td>
                <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
            </td> 
            </tr>
            <tr><td>Name</td></tr>
            <tr><td>Status</td></tr>
            <tr><td>Contacts-1</td></tr>
            <tr><td>Contacts-2</td></tr>
        </table>
    </td>
    <td align = 'center'>
        <table className = 'f3_Teacher_Name_Card'>
            <tr>
               <td>
                <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                </td> 
            </tr>
            <tr><td>Name</td></tr>
            <tr><td>Status</td></tr>
            <tr><td>Contacts-1</td></tr>
            <tr><td>Contacts-2</td></tr>
        </table>
    </td>
    <td align = 'center'>
            <table className = 'f3_Teacher_Name_Card'>
                  <tr>
                      <td>
                          <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                      </td> 
                  </tr>
                  <tr><td>Name</td></tr>
                  <tr><td>Status</td></tr>
                  <tr><td>Contacts-1</td></tr>
                  <tr><td>Contacts-2</td></tr>
              </table>  
          </td>
</tr>
<tr>
        <td align = 'center'>
            <table className = 'f3_Teacher_Name_Card'>
                <tr>
                   <td>
                    <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                    </td> 
                </tr>
                <tr><td>Name</td></tr>
                <tr><td>Status</td></tr>
                <tr><td>Contacts-1</td></tr>
                <tr><td>Contacts-2</td></tr>
            </table>
        </td>
        <td align = 'center'>
           <table className = 'f3_Teacher_Name_Card'>
                <tr>
                    <td>
                        <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                    </td> 
                </tr>
                <tr><td>Name</td></tr>
                <tr><td>Status</td></tr>
                <tr><td>Contacts-1</td></tr>
                <tr><td>Contacts-2</td></tr>
            </table> 
        </td>
        <td align = 'center'>
          <table className = 'f3_Teacher_Name_Card'>
                <tr>
                    <td>
                        <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                    </td> 
                </tr>
                <tr><td>Name</td></tr>
                <tr><td>Status</td></tr>
                <tr><td>Contacts-1</td></tr>
                <tr><td>Contacts-2</td></tr>
            </table>  
        </td>
        <td align = 'center'>
                <table className = 'f3_Teacher_Name_Card'>
                      <tr>
                          <td>
                              <img className = 'f3_Teacher_photo' src = {require('../.././assets/image/Asset 1.png')}/>
                          </td> 
                      </tr>
                      <tr><td>Name</td></tr>
                      <tr><td>Status</td></tr>
                      <tr><td>Contacts-1</td></tr>
                      <tr><td>Contacts-2</td></tr>
                  </table>  
            </td>
    </tr>
</table>
            </div>
        );
    }
}


export default FacultyThird;