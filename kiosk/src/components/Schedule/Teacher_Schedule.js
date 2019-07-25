import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';
import {FormattedMessage} from "react-intl";
import axios from "axios";


class Department extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            group_id: this.props.id,
            group_name: '',

            time1:{},
            time2:{},
            time3:{},
            time4:{},
            time5:{},
            time6:{},
            sсhedule:{},

        }
    }

    componentDidMount() {
        alert(this.props.time2.day_of_week1[0].subject.name)
    }
    render(){

        return(

            <div>
                <table border="2" className = "schedule_table">
                    <th ><span id="day"><FormattedMessage id="day" defaultMassage="day"/></span><br/>
                        <span id="day"><FormattedMessage id="time" defaultMassage="time"/></span></th>
                    <th id="Time"><FormattedMessage id="Mon" defaultMassage="Mon"/></th>
                    <th id="Time"><FormattedMessage id="Tue" defaultMassage="Tue"/></th>
                    <th id="Time"><FormattedMessage id="Wed" defaultMassage="Wed"/></th>
                    <th id="Time"><FormattedMessage id="Thu" defaultMassage="Thu"/></th>
                    <th id="Time"><FormattedMessage id="Fri" defaultMassage="Fri"/></th>
                    <th id="Time"><FormattedMessage id="Sat" defaultMassage="Sat"/></th>
                    <tr>
                        <td id="Time" className = "schedule_td">8:00 - 9:20</td>
                        <td href="#"> { this.props.time1.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time1.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time1.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time1.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time1.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time1.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>
                    <tr>

                        <td id="Time" className = "schedule_td">9:30 - 10:50 </td>
                        <td href="#"> { this.props.time2.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time2.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time2.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time2.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time2.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time2.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>
                    <tr>
                        <td id="Time" className = "schedule_td">11:00 - 12:20</td>
                        <td href="#"> { this.props.time3.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time3.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time3.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time3.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time3.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time3.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>

                    <tr>
                        <td id="Time" className = "schedule_td">13:00 - 14:20</td>
                        <td href="#"> { this.props.time4.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time4.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time4.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time4.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time4.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time4.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>
                    <tr>
                        <td id="Time" className = "schedule_td">14:30 - 15:50 </td>
                        <td href="#"> { this.props.time5.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time5.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time5.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time5.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time5.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time5.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>

                    <tr>
                        <td id="Time" className = "schedule_td">16:00 - 17:20</td>
                        <td href="#"> { this.props.time6.day_of_week1.map(day_of_week1 =>

                            <tr href="#"> <span>les n :</span> {day_of_week1.subject.name  }<br/> <span>tch n :</span> {day_of_week1.teacher.name  }
                                <br/> <span>room :</span>{day_of_week1.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time6.day_of_week2.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time6.day_of_week3.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time6.day_of_week4.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time6.day_of_week5.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                        <td href="#"> { this.props.time6.day_of_week6.map(day_of_week =>

                            <tr href="#"> <span>les n :</span> {day_of_week.subject.name  }<br/> <span>tch n :</span> {day_of_week.teacher.name  }
                                <br/> <span>room :</span>{day_of_week.classroom.name  } </tr> )}
                        </td>
                    </tr>

                </table>

            </div>
        );
    }
}

export default Department;