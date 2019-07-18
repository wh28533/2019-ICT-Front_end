import React from 'react';import '../../././assets/css/bootstrap.css';import '../../././assets/css/Schedular.css';import {FormattedMessage} from "react-intl";class Schedule extends React.Component{    constructor(props) {        super(props);        this.state = {            fal: false,            Grade: false,            Group: false,            MenuElName: '',            GroupButtonNone:false,            GradeButtonNone:false,            StudentButtons:true,            DisplayNone:false,            TeacherMenuNone:false,            TeacherButtons:true        }    }        //*************************************************Student's Schedule Menu Functions******************************************************************************        ViewStudentMenu()        {            this.setState({                StudentButtons: !this.state.StudentButtons,                TeacherMenuNone: !this.state.TeacherMenuNone            })        }        ChangeFalClassname()        {            this.setState({                fal: !this.state.fal,                GradeButton:!this.state.GradeButton,                GroupButtonNone:!this.state.GroupButtonNone,                GradeButtonNone:!this.state.GradeButtonNone,            })        }        ChangeGradClassname()        {            this.setState(                {Grade: !this.state.Grade,                    GroupButtonNone:!this.state.GroupButtonNone,                })        }        ChangeGroupClassname()        {            this.setState({Group: !this.state.Group})        }        //*************************************************Student's Schedule Menu Functions******************************************************************************        ViewTeacherMenu()        {            this.setState({TeacherButtons: !this.state.TeacherButtons})        }    render() {        //******************************************Student scheduler Menu Change Css Class*********************************************************************************        let StudentButtons = this.state.StudentButtons ?   "DisplayBlock" : "dropdown";        let dropdivTecher=this.state.TeacherMenuNone ?   "DisplayBlock" : "dropdivTecher";        let GradeButtonNone = this.state.GradeButtonNone ?   "DisplayBlock" : "dropdown";        let GroupButtonNone = this.state.GroupButtonNone ?   "DisplayBlock" : "dropdown";        let fal= this.state.fal ?   "dropdown-fal-block" : "dropdown-fal";        let grade = this.state.Grade ? "dropdown-grade-block" : "dropdown-grade ";        let group = this.state.Group ? "dropdown-group-block" : "dropdown-group";        //******************************************Teacher scheduler Menu Change Css Class*********************************************************************************        let TeacherButtons = this.state.TeacherButtons ?   "DisplayBlock" : "dropdown";        return (           <div>               <header>                   <h1 className="Name"><FormattedMessage id="Schedule" defaultMassage="Schedule"/></h1>               </header>               <div className="row" >                   <div className="col-sm-3">{/*****************************************************Student Schedule Menu **************************************************************************************/}                       <button className="dropbtn" onClick={this.ViewStudentMenu.bind(this)} ><FormattedMessage id="SFaculty" defaultMassage="Faculties"/>   Studen's Scheduler</button>                       <div className={StudentButtons}>                           <div className="dropdown" onClick={this.ChangeFalClassname.bind(this)} >                               <button className="dropbtn"  ><FormattedMessage id="SFaculty" defaultMassage="Faculties"/>: ...</button>                               <div className={fal}>                                   {/*<a href="#" onClick={this.GetMenuVal(...)} >...}</a>*/}                                   <a href="#">2nd</a>                                   <a href="#">3rd</a>                                   <a href="#">1st</a>                                   <a href="#">2nd</a>                                   <a href="#">3rd</a>                               </div>                           </div>                           <div className={GradeButtonNone} onClick={this.ChangeGradClassname.bind(this)}>                                   <button className="dropbtn" ><FormattedMessage id="Grade" defaultMassage=" Grade"/></button>                                   <div className={grade}>                                       <a href="#">1st</a>                                       <a href="#">2nd</a>                                       <a href="#">3rd</a>                                   </div>                           </div>                           <div className={GroupButtonNone} onClick={this.ChangeGroupClassname.bind(this)}>                                   <button className="dropbtn" ><FormattedMessage id="Group" defaultMassage=" Group"/></button>                                   <div className={group}>                                       <div className="Aleft">                                           <a href="#">fvzsrhytyh</a>                                           <a href="#">fvzsrhytyhfvzsrhytyh</a>                                           <a href="#">fvzsrhytyh</a>                                       </div>                                       <div className="Bleft">                                           <a href="#">fvzsrhytyh</a>                                           <a href="#">fvzsrhytyh</a>                                           <a href="#">fvzsrhytyh</a>                                       </div>                                   </div>                           </div>                       </div>{/*****************************************************************************Teacher Shedule Menu***********************************************************************/}                    <div className="dropdivTecher">                        <button className="dropbtnTecher" onClick={this.ViewTeacherMenu.bind(this)} ><FormattedMessage id="SFaculty" defaultMassage="Faculties"/>   Teacher's Scheduler</button>                        <div className={TeacherButtons}  >                           <button className="dropbtnTecher"  ><FormattedMessage id="SFaculty" defaultMassage="Faculties"></FormattedMessage></button>                           <div className="dropdown-TeacherFal">                               <a href="#">2nd</a>                               <a href="#">3rd</a>                               <a href="#">1st</a>                               <a href="#">2nd</a>                               <a href="#">3rd</a>                           </div>                       </div>                    </div> {/***************************************************************************** // Teacher Shedule Menu***********************************************************************/}                   </div>                   <div className="col-sm-9" >                       <table border="2" className = "schedule_table">                           <th ><span id="day"><FormattedMessage id="day" defaultMassage="day"/></span><br/>                               <span id="day"><FormattedMessage id="time" defaultMassage="time"/></span></th>                           <th id="Time">Mon</th>                           <th id="Time">Tue</th>                           <th id="Time">Wed</th>                           <th id="Time">Thu</th>                           <th id="Time">Fri</th>                           <th id="Time">Sat</th>                           <tr>                               <td id="Time" className = "schedule_td">Time1</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time2</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time3</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time4</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time5</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time6</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                           <tr>                               <td id="Time" className = "schedule_td">Time7</td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                               <td className = "schedule_td"></td>                           </tr>                       </table>                   </div>               </div>           </div>    )    }}export default Schedule ;