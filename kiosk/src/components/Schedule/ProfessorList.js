import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/ProfessorList.css';
import {FormattedMessage} from "react-intl";
class ProfessorList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <div>
                <div id = 'New_screen_for_department'></div>

                <div id = 'Teacher_Schedule_Name'><FormattedMessage id="Professor List Title" defaultMassage="Professor List Title"/></div>

<div id = 'Teacher_page_num'>- 1 -</div>

<a onClick = {function(e){//cancle button
                    e.preventDefault();
                    this.props.onChangePage("");

                }.bind(this)}
                
                ><img  id = 'Teacher_cancel' src = {require( '../.././assets/image/cancel.png')}/></a>


<a ><img id = 'Teacher_next' src={require( '../.././assets/image/right_triangle.png')} title='next'/></a>
<a ><img id = 'Teacher_prev' src={require( '../.././assets/image/left_triangle.png')} title='prev'/></a>

<table id = 'Teacher_Schedule_List_Pos'>
    <tr>
        <td><button className = 'Professor_button'>Professor1</button></td>
        <td><button className = 'Professor_button'>Professor2</button></td>
        <td><button className = 'Professor_button'>Professor3</button></td>
        <td><button className = 'Professor_button'>Professor4</button></td>
        <td><button className = 'Professor_button'>Professor5</button></td>
    </tr>
    <tr>
        <td><button className = 'Professor_button'>Professor6</button></td>
        <td><button className = 'Professor_button'>Professor7</button></td>
        <td><button className = 'Professor_button'>Professor8</button></td>
        <td><button className = 'Professor_button'>Professor9</button></td>
        <td><button className = 'Professor_button'>Professor10</button></td>
    </tr>
    <tr>
        <td><button className = 'Professor_button'>Professor11</button></td>
        <td><button className = 'Professor_button'>Professor12</button></td>
        <td><button className = 'Professor_button'>Professor13</button></td>
        <td><button className = 'Professor_button'>Professor14</button></td>
        <td><button className = 'Professor_button'>Professor15</button></td>
    </tr>
    </table>
            </div>
        );
    }
}
export default ProfessorList;
