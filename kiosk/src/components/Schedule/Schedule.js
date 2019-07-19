import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';
import {FormattedMessage} from "react-intl";

import ProfessorList from './ProfessorList';

class Schedule extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            fal: true,
            Grade: false,
            Group: false,
            professor_list_check : true,
        
            professor_list : <ProfessorList onChangePage = { function(){ // 교수목록 보이게 하거나 안보이게 하는것 // to show Professer list or not
                this.setState({
                    professor_list_check : false
                });
      
              }.bind(this)}
              />
        }

    }

    ChangeFalClassname(){
        this.setState({
            fal: !this.state.fal,
        });
    }
    ChangeGradClassname(){
        this.setState({Grade: !this.state.Grade})

    }
    ChangeGroupClassname(){
        this.setState({Group: !this.state.Group})

    }
    render() {
        let view_profe_list = this.state.professor_list_check ? this.state.professor_list : '';
        
        let fal = this.state.fal ? "dropdown-fal-block" : "dropdown-fal";
        let grade = this.state.Grade ? "dropdown-grade-block" : "dropdown-grade ";
        let group = this.state.Group ? "dropdown-group-block" : "dropdown-group";
        
        
        return (
           <div>
               <header><h1 className="Name"><FormattedMessage id="Schedule" defaultMassage="Schedule"/></h1>
               </header>
               <div className="row">
                   <div className="col-sm-2">
                           <div className="dropdown" >
                               <button className="dropbtn" onClick={this.ChangeFalClassname.bind(this)} ><FormattedMessage id="SFaculty" defaultMassage="Faculties"/>{}</button>
                               <div className={fal}>
                                   <a href="#">1</a>
                                   <a href="#"> 2</a>
                                   <a href="#"> 3</a>
                                   <a href="#">1</a>
                                   <a href="#"> 2</a>
                                   <a href="#"> 3</a>
                               </div>
                           </div>
                           <div className="dropdown" onClick={this.ChangeGradClassname.bind(this)}>
                               <button className="dropbtn" ><FormattedMessage id="Grade" defaultMassage=" Grade"/></button>
                               <div className={grade}>
                                   <a href="#">1st</a>
                                   <a href="#">2nd</a>
                                   <a href="#">3rd</a>
                               </div>
                           </div>

                           <div className="dropdown" onClick={this.ChangeGroupClassname.bind(this)}>
                               <button className="dropbtn" ><FormattedMessage id="Group" defaultMassage=" Group"/></button>
                               <div className={group}>
                                   <a href="#">A_class</a>
                                   <a href="#"> B_class</a>
                                   <a href="#"> C_class</a>
                               </div>
                           </div>


                   </div>
                   <div className="col-sm-10" >
                       <table border="2" className = "schedule_table">
                           <th ><span id="day"><FormattedMessage id="day" defaultMassage="day"/></span><br/>
                               <span id="day"><FormattedMessage id="time" defaultMassage="time"/></span></th>
                           <th id="Time">Mon</th>
                           <th id="Time">Tue</th>
                           <th id="Time">Wed</th>
                           <th id="Time">Thu</th>
                           <th id="Time">Fri</th>
                           <th id="Time">Sat</th>
                           <tr>
                               <td id="Time" className = "schedule_td">Time1</td>
                               <td className = "schedule_td">1</td>
                               <td className = "schedule_td">2</td>
                               <td className = "schedule_td">3</td>
                               <td className = "schedule_td">4</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time2</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time3</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time4</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time5</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time6</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                           <tr>
                               <td id="Time" className = "schedule_td">Time7</td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                           </tr>
                       </table>
                   </div>
               </div>



            {view_profe_list}

           </div>

    )
    }

}

export default Schedule ;