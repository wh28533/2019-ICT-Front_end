import React from 'react';


import '../../././assets/css/bootstrap.css';
import '../../././assets/css/institute_first.css';
import  axios from 'axios'
import {FormattedMessage} from "react-intl";


class InstituteFirst extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            institutes: []
        }
    }
    
        componentDidMount()
        {
                axios.get('https://nameless-dusk-42348.herokuapp.com/'+this.props.language+'/institute/').
                then(res=>{
                    const institutes_load=res.data;
                    this.setState({
                        institutes: institutes_load
                    });
            });
        }

    
    render(){
        return(
            <div>
                <div id = "i1_background_width">
                <h1 className= "Name"><FormattedMessage id="Institute" defaultMassage="Institute"/></h1>
                    <div id = "i1_button_pos">
                    { this.state.institutes.map(institute => <div>
                        <button className="i1_buttons" type="button" onClick = {function(e){
                            e.preventDefault();
                            alert(institute.id);
                          this.props.onChangePage(institute.id);
                        }.bind(this)} >
                            <pre>{institute.name}</pre>
                        </button>
                    </div>)}
                </div>
            </div>
    
        </div>

        );
    }
}

export default InstituteFirst;