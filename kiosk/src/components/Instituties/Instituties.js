import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/facultiefirst.css';
import  axios from 'axios'
import {FormattedMessage} from "react-intl";

class Instituties extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            institut: []
        }
    }
    componentDidMount()
    {
        let id ='1';
        axios.get('https://e-kundoluk-flask-server.herokuapp.com/api/timetable/klass/'+id).
        then(res=>{
            const institut=res.data;
            console.log(res.data)
            this.setState({institut})
        })

    }



    render(){
        return(
            <div>
                <h1 className='Name'> <FormattedMessage id="Instituties" defaultMassage="Instituties"/></h1>
                <div id = "f1_button_pos">
                    { this.state.institut.map(institut => <div>
                        <button align='center' className="f1_buttons" type="button" href="#">
                            <pre>{institut.lesson_name}</pre>
                        </button>
                    </div>)}

                </div>
                {/*<div>*/}
                {/*    <button align = 'center' class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>Faculty of Technology</pre>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button align = 'center' class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>Faculty of Information Technology</pre>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button align = 'center' class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>Faculty of Transport and Engineering</pre>*/}
                {/*    </button>*/}
                {/*</div>    */}
                {/*<div>*/}
                {/*   <button align = 'center' class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>Faculty of Energy</pre>*/}
                {/*    </button> */}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button align = 'center'class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>Faculty of Engineering and Economics</pre>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button align = 'center' class = "f1_buttons" type="button" href="#">*/}
                {/*        <pre>High school of master degree</pre>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

        );
    }
}

export default Instituties;