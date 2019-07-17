import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/faculty_second.css';
import  axios from 'axios';

class FacultySecond extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                 <h1 id = 'Name'>Departments</h1>
        <div id = "f2_button_pos">
            <div>
                <button align = 'center' className = "f2_buttons" type="button">
                    <pre>Faculty of Technology</pre>
                </button>
            </div>
            <div>
                <button align = 'center' className = "f2_buttons f2_not" type="button">
                    <pre>Faculty of Information Technology</pre>
                </button>
            </div>
            <div>
                <button align = 'center' className = "f2_buttons f2_not" type="button">
                    <pre>Faculty of Transport and Engineering</pre>
                </button>
            </div>    
            <div>
               <button align = 'center' className = "f2_buttons f2_not" type="button">
                    <pre>Faculty of Energy</pre>
                </button> 
            </div>
            <div>
                <button align = 'center'className = "f2_buttons f2_not" type="button">
                    <pre>Faculty of Engineering and Economics</pre>
                </button>
            </div>
            <div>
                <button align = 'center' className = "f2_buttons f2_not" type="button">
                    <pre>High school of master degree</pre>
                </button>
            </div>
        </div>

        <table id = 'f2_Faculty_intro'>
            <tr>
            Faculty_Introherefdsfklsd;anfk;lsadnfsdl;kfnsdl;kfnsdk;lfnsdklfnsdaklfnsdaklfnsdklfnsadkl;n
            </tr>
        </table>

        <ul type="none" className = "f2_List_Pos">
            <li><a href='#' className = "department_text">Department of Chemistry and Chemical Technologies</a></li>
            <li><a href='#' className = "department_text">Department of Kyrgyz language</a></li>
            <li><a href='#' className = "department_text">Russian language chair</a></li>
            <li><a href='#' className = "department_text">Department of Food Engineering</a></li>
            <li><a href='#' className = "department_text">Department of Canning Technology</a></li>
            <li><a href='#' className = "department_text">Department of aritistic product design</a></li>
            <li><a href='#' className = "department_text">Department of Technology of Light Industry Products</a></li>
            <li><a href='#' className = "department_text">Department of Higher School of Design</a></li>
            <li><a href='#' className = "department_text">Department of Food Technology catering</a></li>
            <li><a href='#' className = "department_text">Department of Food Production</a></li>
        </ul>
            </div>
        );
    }
}

export default FacultySecond;