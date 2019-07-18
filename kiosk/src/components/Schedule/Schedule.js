import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';
import {FormattedMessage} from "react-intl";

class Schedule extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            fal: false,
            Grade: false,
            Group: false,
            
    }
    }
    ChangeFalClassname(){
        this.setState({fal: !this.state.fal})

    }
    ChangeGradClassname(){
        this.setState({Grade: !this.state.Grade})

    }
    ChangeGroupClassname(){
        this.setState({Group: !this.state.Group})

    }
    render() {
        let style={
            background:"yellow",
        }
        let style2={
            background:"red",
        }


        let fal = this.state.fal ? "dropdown-fal" : "dropdown-fal-block";
        let grade = this.state.Grade ? "dropdown-grade" : "dropdown-grade-block ";
        let group = this.state.Group ? "dropdown-group" : "dropdown-group-block";
        return (
           <div>
               <header><h1 className="Name"><FormattedMessage id="Schedule" defaultMassage="Schedule"/></h1>
               </header>
               <div className="row">
                   <div className="col-sm-2" style={style}>

                           {/*<li className="nav-item dropdown">*/}
                           {/*    <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'*/}
                           {/*            id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"*/}
                           {/*            aria-expanded="false">*/}
                           {/*        <span className="button_text">Grade</span></button>*/}
                           {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">1st</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">2nd</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">3rd</span></a>*/}

                           {/*    </div>*/}
                           {/*</li>*/}
                           {/*&nbsp; &nbsp;*/}
                           <div className="dropdown" onClick={this.ChangeFalClassname.bind(this)}>
                               <button className="dropbtn" ><FormattedMessage id="SFaculty" defaultMassage=" Faculties"/></button>
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


                           {/*<li className="nav-item dropdown">*/}
                           {/*    <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'*/}
                           {/*            id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"*/}
                           {/*            aria-expanded="false">*/}
                           {/*        <span className="button_text">Faculties</span></button>*/}
                           {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">A</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">B</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">C</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">D</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span className="button_text">E</span></a>*/}
                           {/*    </div>*/}
                           {/*</li>*/}
                           {/*&nbsp; &nbsp;*/}
                           {/*<li className="nav-item dropdown">*/}
                           {/*    <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'*/}
                           {/*            id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"*/}
                           {/*            aria-expanded="false">*/}
                           {/*        <span className="button_text">Group</span></button>*/}
                           {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                           {/*        <a className="dropdown-item" href="#"><span*/}
                           {/*            className="button_text">A_class</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span*/}
                           {/*            className="button_text">B_class</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span*/}
                           {/*            className="button_text">C_class</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span*/}
                           {/*            className="button_text">D_class</span></a>*/}
                           {/*        <a className="dropdown-item" href="#"><span*/}
                           {/*            className="button_text">E_class</span></a>*/}
                           {/*    </div>*/}
                           {/*</li>*/}
                           &nbsp; &nbsp; &nbsp; &nbsp;
                           {/*<li>*/}
                           {/*    <form action="#" accept-charset="utf-8" name="info" method="get">*/}

                           {/*        <input type="submit" value="choose" className="btn-light button_deco button_text"*/}
                           {/*               href='#'/>*/}

                           {/*    </form>*/}
                           {/*</li>*/}



                   </div>
                   <div className="col-sm-10" style={style2}>
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
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
                               <td className = "schedule_td"></td>
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




           </div>

    )
    }

}

export default Schedule ;