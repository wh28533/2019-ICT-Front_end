import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';

class Schedule extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render() {

        return (
           <div>
               <header><h1 id="Name">Schedule</h1>
               </header>

               <table border="2" className = "schedule_table">
                   <th>day<br/>time</th>
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

               <nav className="navbar navbar-expand-lg navbar-light">
                   <div className="collapse navbar-collapse" id="navbarNavDropdown">
                       <ul className="navbar-nav">
                           <li className="nav-item dropdown">
                               <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'
                                       id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                   <span className="button_text">Grade</span></button>
                               <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <a className="dropdown-item" href="#"><span className="button_text">1st</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">2nd</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">3rd</span></a>

                               </div>
                           </li>
                           &nbsp; &nbsp;
                           <li className="nav-item dropdown">
                               <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'
                                       id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                   <span className="button_text">Faculties</span></button>
                               <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <a className="dropdown-item" href="#"><span className="button_text">A</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">B</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">C</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">D</span></a>
                                   <a className="dropdown-item" href="#"><span className="button_text">E</span></a>
                               </div>
                           </li>
                           &nbsp; &nbsp;
                           <li className="nav-item dropdown">
                               <button type="button" className="btn-light nav-link dropdown-toggle button_deco" href='#'
                                       id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">
                                   <span className="button_text">Group</span></button>
                               <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                   <a className="dropdown-item" href="#"><span
                                       className="button_text">A_class</span></a>
                                   <a className="dropdown-item" href="#"><span
                                       className="button_text">B_class</span></a>
                                   <a className="dropdown-item" href="#"><span
                                       className="button_text">C_class</span></a>
                                   <a className="dropdown-item" href="#"><span
                                       className="button_text">D_class</span></a>
                                   <a className="dropdown-item" href="#"><span
                                       className="button_text">E_class</span></a>
                               </div>
                           </li>
                           &nbsp; &nbsp; &nbsp; &nbsp;
                           <li>
                               <form action="#" accept-charset="utf-8" name="info" method="get">

                                   <input type="submit" value="choose" className="btn-light button_deco button_text"
                                          href='#'/>

                               </form>
                           </li>
                       </ul>

                   </div>
               </nav>

           </div>

    )
    }

}

export default Schedule ;