import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';
import {FormattedMessage} from "react-intl";
import axios from "axios";
import Teacher_Schedule from "./Teacher_Schedule";


class TeachersName extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            teacher_id:'',
            T_Schedule:[],
            time1:{},
            time2:{},
            time3:{},
            time4:{},
            time5:{},
            time6:{},
            check_shedule : false,
            schedule_table: <Teacher_Schedule/>,
           // check_name:true,
         // //   Techer_name_table:<div id='New_screen_for_department'>
         //
         //        <div id='Teacher_Schedule_Name'>Professor List Title</div>
         //
         //        <a href='#' onClick={function(e){
         //            this.setState({
         //                check_name:false,
         //                check_shedule:true,
         //
         //            });
         //
         //        }.bind(this)}><img id='Teacher_cancel' src='./image/cancel.png'/></a>
         //
         //        <div id='Teacher_Schedule_List_Pos'>
         //            { this.props.teacher_name.map(teacher_name =>
         //
         //                <button className='Professor_button'  onClick={function(e){
         //
         //                    e.preventDefault();
         //                    this.Tch_Schedule(teacher_name.id,);
         //
         //                }.bind(this)}> <span>Teacher Name</span> {teacher_name.name  }<br/> <span>Status :</span> {teacher_name.status  }
         //                </button> )}
         //
         //
         //        </div>
         //        <div >aaaaa</div>
         //    </div>

        }
    }

    Tch_Schedule(id) {
        alert("In Techers"+this.props.teacher_name)
        console.log("teacher id -:"+id)

        axios.get('https://nameless-dusk-42348.herokuapp.com/en/schedule/teacher/'+id).
        then(res=>{
            const T_Schedule=res.data;
            console.log("Teacher Schedule");
            console.log(res.data);
            this.setState({
                T_Schedule: T_Schedule,
                // T_Faculties:faculties
            });
            console.log("Teacher Sched");
            console.log(this.state.T_Schedule);
             this.Sorting(T_Schedule)
        });
    }
    Sorting=(T_Schedule)=>{
        console.log("*****************************************")
        let time = {}
        let time1 = {} , time2 = {} , time3 = {},   time4 = {}  , time5= {},  time6 = {}
        if(time["tim"+1]=== undefined){
            time["tim"+1] = []
        }
        if(time["tim"+2]=== undefined){
            time["tim"+2] = []
        }
        if(time["tim"+3]=== undefined){
            time["tim"+3] = []
        }
        if(time["tim"+4]=== undefined){
            time["tim"+4] = []
        }
        if(time["tim"+5]=== undefined){
            time["tim"+5] = []
        }
        if(time["tim"+6]=== undefined){
            time["tim"+6] = []
        }


        time1["day_of_week"+1] = []
        time1["day_of_week"+2] = []
        time1["day_of_week"+3] = []
        time1["day_of_week"+4] = []
        time1["day_of_week"+5] = []
        time1["day_of_week"+6] = []
        time2["day_of_week"+1] = []
        time2["day_of_week"+2] = []
        time2["day_of_week"+3] = []
        time2["day_of_week"+4] = []
        time2["day_of_week"+5] = []
        time2["day_of_week"+6] = []
        time3["day_of_week"+1] = []
        time3["day_of_week"+2] = []
        time3["day_of_week"+3] = []
        time3["day_of_week"+4] = []
        time3["day_of_week"+5] = []
        time3["day_of_week"+6] = []
        time4["day_of_week"+1] = []
        time4["day_of_week"+2] = []
        time4["day_of_week"+3] = []
        time4["day_of_week"+4] = []
        time4["day_of_week"+5] = []
        time4["day_of_week"+6] = []
        time5["day_of_week"+1] = []
        time5["day_of_week"+2] = []
        time5["day_of_week"+3] = []
        time5["day_of_week"+4] = []
        time5["day_of_week"+5] = []
        time5["day_of_week"+6] = []
        time6["day_of_week"+1] = []
        time6["day_of_week"+2] = []
        time6["day_of_week"+3] = []
        time6["day_of_week"+4] = []
        time6["day_of_week"+5] = []
        time6["day_of_week"+6] = []

        console.log("BBBBBBBBBBBBBBBBBBBBBB")
        console.log(T_Schedule)
        T_Schedule.forEach((item)=>{
            if(time["tim"+item.time]=== undefined){
                time["tim"+item.time] = []
            }
            time["tim"+item.time].push(item)
            console.log("item:"+ item.time)
        });
        console.log('temp:', time)

        time.tim1.forEach((item)=>{
            if(time1["day_of_week"+item.day_of_week]=== undefined){
                time1["day_of_week"+item.day_of_week] = []
            }
            time1["day_of_week"+item.day_of_week].push(item)
        });
        console.log('time1'+time1)

        time.tim2.forEach((item)=>{
            if(time2["day_of_week"+item.day_of_week]=== undefined){
                time2["day_of_week"+item.day_of_week] = []
            }
            time2["day_of_week"+item.day_of_week].push(item)

        });
        console.log('time2'+ time2)

        time.tim3.forEach((item)=>{
            if(time3["day_of_week"+item.day_of_week]=== undefined){
                time3["day_of_week"+item.day_of_week] = []
            }
            time3["day_of_week"+item.day_of_week].push(item)
        });
        console.log('time3'+ time3)

        time.tim4.forEach((item)=>{
            if(time4["day_of_week"+item.day_of_week]=== undefined){
                time4["day_of_week"+item.day_of_week] = []
            }
            time4["day_of_week"+item.day_of_week].push(item)
        });
        console.log('time4'+ time4)

        time.tim5.forEach((item)=>{
            if(time5["day_of_week"+item.day_of_week]=== undefined){
                time5["day_of_week"+item.day_of_week] = []
            }
            time5["day_of_week"+item.day_of_week].push(item)

        });
        console.log( "time5"+time5)

        time.tim6.forEach((item)=>{
            if(time6["day_of_week"+item.day_of_week]=== undefined){
                time6["day_of_week"+item.day_of_week] = []
            }
            time6["day_of_week"+item.day_of_week].push(item)
        });
        console.log( "time6"+ time6)

        var i
        for (i=1;i<7;i++){
            if( time1["day_of_week"+i].length==0){
                time1["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
            if( time2["day_of_week"+i].length==0){
                time2["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
            if( time3["day_of_week"+i].length==0){
                time3["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
            if( time4["day_of_week"+i].length==0){
                time4["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
            if( time5["day_of_week"+i].length==0){
                time5["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
            if( time6["day_of_week"+i].length==0){
                time6["day_of_week"+i]=[{"day_of_week": '',
                    "subject": {
                        "name": " "
                    },
                    "week": '',
                    "type_of_lecture": '',
                    "teacher": {
                        "id": '',
                        "name": " ",
                        "photo": " ",
                        "status": " ",
                        "contact": " "
                    },
                    "classroom": {
                        "id": '',
                        "name": " ",
                        "floor": '',
                        "about": " "
                    },
                    "group": {
                        "id": '',
                        "name": " ",
                        "grade": ''
                    }
                }]
            }
        }
        console.log( time1)
        console.log( time2)
        console.log( time3)
        console.log( time4)
        console.log( time5)
        console.log( time6)
        this.setState({
            time1:time1,
            time2:time2,
            time3:time3,
            time4:time4,
            time5:time5,
            time6:time6,
        })
        this.setState({
            check_shedule:false,

            schedule_table : <Teacher_Schedule time1= {time1 } time2={time2} time3={time3} time4={time4} time5={time5} time6={time6} />
        });
        console.log("Shedule table");
        console.log(time1)
        console.log(this.state.time2)
        console.log(this.state.time3)
        console.log(this.state.time4)


    }
    render(){
        var view_schedule_table = this.state.check_shedule ? this.state.schedule_table: '';
        //var teacher_name = this.state.check_name ? this.state.Techer_name_table: '';

        return(
        <div>
            <div id='New_screen_for_department'>

                <div id='Teacher_Schedule_Name'>Professor List Title</div>

                <a href='#' onClick={function(e){
                    this.setState({
                        check_name:false,
                        check_shedule:true,

                    });

                }.bind(this)}><img id='Teacher_cancel' src='./image/cancel.png'/></a>

                <div id='Teacher_Schedule_List_Pos'>
                    { this.props.teacher_name.map(teacher_name =>

                        <button className='Professor_button'  onClick={function(e){

                            e.preventDefault();
                            this.Tch_Schedule(teacher_name.id,);

                        }.bind(this)}> <span>Teacher Name</span> {teacher_name.name  }<br/> <span>Status :</span> {teacher_name.status  }
                        </button> )}


                </div>
                <div >aaaaa</div>
            </div>
            {view_schedule_table}
        </div>
        );
    }
}

export default TeachersName;