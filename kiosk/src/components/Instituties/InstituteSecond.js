import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/institute_second.css';
import  axios from 'axios';

class InstituteSecond extends React.Component{
    constructor(props) {
        
        super(props);
        this.state = {
            institute_id: this.props.institute_id,
            institutes:[],
            departments : [],
            institute_info:[],
            
            check_institute_third : false,
            institute_third: <instituteThird onChangePage = {function(){
                this.setState({
                    check_institute_third:false
                });

            }.bind(this)}
            />
        };
    }
    componentDidMount(id)
    {
        if(id === undefined)
        {
            id = this.state.institute_id;
        }
        alert(this.props.language);
        axios.get('https://nameless-dusk-42348.herokuapp.com/'+this.props.language+'/institute/').
        then(res=>{
            const institute_load=res.data;
            this.setState({
                institutes: institute_load
            });
        });
        axios.get('https://nameless-dusk-42348.herokuapp.com/'+this.props.language+'/institute/'+id).
        then(res=>{
            const departments_load=res.data.departments_of_institute;
            const institute_load=res.data.about;
            this.setState({
                departments: departments_load,
                fauculty_info: institute_load
            });
        });
    }
    
    change_f_id = (id)=>{
        this.setState({
            institute_id : id
        });
    }
    set_css_name = (id)=>{
        if(id === this.state.institute_id) {
            return "i2_buttons";
        }
        else{
            return "i2_buttons i2_not";
        }
    }
    render(){
        
        var view_institutes,view_departments , view_institute_third;
        view_institutes = 
        <div id = "i2_button_pos">
        { this.state.institutes.map(institute =>
                    <div> 
                        <button align='center' className= {this.set_css_name(institute.id)} type="button" onClick = {function(e){
                            
                            e.preventDefault();
                            this.change_f_id(institute.id);
                            this.componentDidMount(institute.id);
                            }.bind(this)} >

                            <pre>{institute.name}</pre>
                        </button>
                    </div>)
                
                }
        </div>;

        view_departments = 
        <ul type="none" className = "i2_List_Pos">
        { this.state.departments.map(department => 
                        
                        <li><a onClick = {function(e){
                            
                            e.preventDefault();
                            alert(department.id);
                            var t_language = this.props.language;
                            this.setState({
                                check_institute_third:true,
                               
                                institute_third : <instituteThird department_id = {department.id} language = {t_language} onChangePage = {function(){
                                    this.setState({
                                        check_institute_third:false
                                    });
                    
                                }.bind(this)}/>
                            });
                        }.bind(this)}>
                        <div className = "i2_department_text">{department.name}</div></a></li>
                    )}
        </ul>;

        view_institute_third = this.state.check_institute_third ? this.state.institute_third: '';
        
        return(
            <div>             
                <h1 id = 'Name'>Departments</h1>
            
                {view_institutes}
        
                <table id = 'i2_institute_intro'>
                <tr>
                {this.state.institute_info}
                </tr>
                </table>
                {view_departments}
                {view_institute_third}
            </div>
        );
    }
}

export default InstituteSecond;