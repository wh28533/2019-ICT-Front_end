import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/facultiefirst.css';


class FacultyFirst extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render(){
        return(
            <div>
                <h1 id = 'Name'>Faculties</h1>
<div id = "f1_button_pos">
    <div>
        <button align = 'center' class = "f1_buttons" type="button" href="#">
            <pre>Faculty of Technology</pre>
        </button>
    </div>
    <div>
        <button align = 'center' class = "f1_buttons" type="button" href="#">
            <pre>Faculty of Information Technology</pre>
        </button>
    </div>
    <div>
        <button align = 'center' class = "f1_buttons" type="button" href="#">
            <pre>Faculty of Transport and Engineering</pre>
        </button>
    </div>    
    <div>
       <button align = 'center' class = "f1_buttons" type="button" href="#">
            <pre>Faculty of Energy</pre>
        </button> 
    </div>
    <div>
        <button align = 'center'class = "f1_buttons" type="button" href="#">
            <pre>Faculty of Engineering and Economics</pre>
        </button>
    </div>
    <div>
        <button align = 'center' class = "f1_buttons" type="button" href="#">
            <pre>High school of master degree</pre>
        </button>
    </div>
</div>
            </div>
        );
    }
}

export default FacultyFirst;