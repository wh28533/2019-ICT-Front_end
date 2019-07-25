import React from 'react';
import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Schedular.css';
import {FormattedMessage} from "react-intl";
import axios from "axios";
import Shedule_table from "../Schedule/Department";
import TeachersName from "../Schedule/TeachersName"


class Schedule extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            check_student_faculty : false,
            check_student_department : false,
            check_student_group : false,
            
            check_teacher_faculty : false,
            check_teacher_department : false,
            
            Faculties:[],
            TFaculties:[],
            faculty_name: '',
            faculty_id:'1',
            t_faculty_name: '',
            t_faculty_id:'',
            departments:[],
            department_id:'',
            department_name:'',
            tdepartments:[],
            tdepartment_id:'',
            tdepartment_name:'',
            department_techers:'',
            groups: [],
            group_id: [],
            group_name: '',
            shedule:[],

            time1:{},
            time2:{},
            time3:{},
            time4:{},
            time5:{},
            time6:{},
            check_shedule : false,
            schedule_table: <Shedule_table/>,
            check_tName:false,
            teacher_name:<TeachersName language = {this.props.language}/>,




            fal: false,
            Grade: false,
            Group: false,
            MenuElName: '',
            GroupButtonNone: false,
            GradeButtonNone: false,
            StudentButtons: true,
            DisplayNone: false,
            StudentDiv:true,
            TeacherDiv:true,
            TeacherMenuNone: false,
            TeacherButtons: true,
            TeacherFal: false,
            TeacherSubmit: false,
            StudentSubmit: false,
            dropdivTecher: false,
            TDepartButton:false,
            tDepart:false

        }
    }
    componentDidMount(faculty_id)
    {

        if(faculty_id === undefined   )
        {
            faculty_id= this.state.faculty_id;
            // department_id= this.state.department_id;
        }
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/').
        then(res=>{
            const faculties=res.data;
             console.log(res.data);
            this.setState({
                Faculties: faculties,
            });
        });

        console.log("Faculty id "+this.state.faculty_id);
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/'+faculty_id).
        then(res=>{
            const departments=res.data.departments_of_faculty;
             console.log("departments "+res.data);
            this.setState({
                departments: departments,
            });
          //  console.log(res.data)
        });
    // this.setState({
    //     department:this.state.data[0].departments_of_faculty[0].name
    // })
    //     console.log("sdfghjk"+this.state.data[0].departments_of_faculty[0].groups[0].name)
    //     console.log(this.state.department)
    }
    Groups_name (department_id){
        console.log("department_id "+department_id);
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/department/'+department_id).
        then(res=>{
            const groups=res.data.groups;
            console.log(res.data);
            this.setState({
                groups: groups
            });
        });
    }


     Shedule =(groups_id)=> {
         axios.get('http://127.0.0.1:8000/'+this.props.language+'/schedule/group/' + groups_id).then(res => {
             const shedule_load = res.data;
             this.setState({
                 sсhedule: shedule_load
             });
             console.log("sсhedule" + this.state.sсhedule);

             this.Sorting(shedule_load)
         });

     }
     Sorting=(a)=>{
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


                 a.forEach((item)=>{
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
                    if( time1["day_of_week"+i].length===0){
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
                     if( time2["day_of_week"+i].length===0){
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
                     if( time3["day_of_week"+i].length===0){
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
                     if( time4["day_of_week"+i].length===0){
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
                     if( time5["day_of_week"+i].length===0){
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
                     if( time6["day_of_week"+i].length===0){
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

             schedule_table : <Shedule_table time1= {time1 } time2={time2} time3={time3} time4={time4} time5={time5} time6={time6} />
         });
         console.log("Shedule table");
         console.log(this.state.time1)
         console.log(this.state.time2)
         console.log(this.state.time3)
         console.log(this.state.time4)


     }

//
// Show_shedule =()=>{
//     // this.setState({
//     //     time1:this.state.time1,
//     //     time2:this.state.time2,
//     //     time3:this.state.time2,
//     //     time4:this.state.time2,
//     //     time5:this.state.time2,
//     //     time6:this.state.time2,
//     // })
//     console.log("dfghjkl;kjhhjk"+this.state.time1.day_of_week1[0].subject.name)
// }
Show=()=>{
        console.log(this.state.group_id)
    }
    TFaculty=()=>{
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/').
        then(res=>{
            const tfaculties=res.data;
            console.log(res.data);
            this.setState({
                TFaculties: tfaculties,
                // T_Faculties:faculties
            });
        });

    }
    Faculty_id = (id,faculty_name)=>{
        console.log(id)
        this.setState({
            faculty_id : id,
            faculty_name:faculty_name,

        })


    }
    T_Faculty_id = (id,faculty_name)=>{
        console.log(id)
        this.setState({
            t_faculty_name: faculty_name,
            t_faculty_id:id,
        })
        console.log("T Faculty id "+id);
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/faculty/'+id).
        then(res=>{
            const tdepartments=res.data.departments_of_faculty;
            console.log(tdepartments);
            // let teachers;
            // tdepartments.map(departments_of_faculty =>
            //     console.log("teachers all  "+ departments_of_faculty.teachers)
            // )
          //  console.log("teachers all  aa"+ teachers);
            this.setState({
                tdepartments: tdepartments,
            });
            console.log(this.state.tdepartments);
// let teacher
//             this.state.tdepartments.forEach((item)=>{
//                 if(teacher["teacher"+item.teacher]=== undefined){
//                     teacher["teacher"+item.teacher] = []
//                 }
//                 teacher["teacher"+item.teacher].push(item.teacher)
//             });
//              console.log(teacher)
        });


    }
    department_id = (id,department_name)=>{
        this.setState({
            department_id : id,
            department_name:department_name,

        });

    }
    Tdepartment_id = (id,department_name)=>{
        this.setState({
            tdepartment_id : id,
            tdepartment_name:department_name,

        });
        axios.get('http://127.0.0.1:8000/'+this.props.language+'/department/'+id).
        then(res=>{
            const teachers=res.data.teachers;
            console.log(res.data);
            this.setState({
                department_techers: teachers
            });
            console.log(teachers);
            this.setState({
                check_tName:false,
                teacher_name : <TeachersName teacher_name={teachers} language = {this.props.language} />
            });
        });
    }
    Group_id = (id,group_name)=>{
        this.setState({
            group_id : id,
            group_name:group_name,

        });
    }
   // *************************************************Student's Schedule Menu Functions******************************************************************************
        ViewStudentMenu()
        {
            this.setState({
                StudentButtons: !this.state.StudentButtons,
                TeacherMenuNone: !this.state.TeacherMenuNone,
                StudentSubmit: !this.state.StudentSubmit,
                TeacherDiv:!this.state.TeacherDiv
            })

        }
        ChangeFalClassname()
        {
            this.setState({
                fal: !this.state.fal,
                GradeButton: !this.state.GradeButton,
                GroupButtonNone: !this.state.GroupButtonNone,
                GradeButtonNone: !this.state.GradeButtonNone,

            })

        }
        ChangeGradClassname()
        {
            this.setState(
                {
                    Grade: !this.state.Grade,
                    GroupButtonNone: !this.state.GroupButtonNone,
                })

        }
        ChangeGroupClassname()
        {
            this.setState({Group: !this.state.Group})

        }
        //*************************************************Student's Schedule Menu Functions******************************************************************************
        ViewTeacherMenu()
        {
            this.setState({
                TeacherButtons: !this.state.TeacherButtons,
                TeacherSubmit: !this.state.TeacherSubmit,
                StudentDiv:!this.state.StudentDiv
            })


        }
        ChangeTeacherFalClassname()
        {
            this.setState({
                TeacherFal: !this.state.TeacherFal,
                TDepartButton: !this.state.TDepartButton,
                GroupButtonNone: !this.state.GroupButtonNone,
                GradeButtonNone: !this.state.GradeButtonNone,
            })

        }
    ChangeTDepartClassname()
    {
        this.setState(
            {
                tDepart: !this.state.tDepart,
                TDepartButton: this.state.TDepartButton,
            })

    }
    render() {
        //******************************************Student scheduler Menu Change Css Class*********************************************************************************
        let StudentButtons = this.state.StudentButtons ?   "DisplayBlock" : "dropdown";
        let dropdivTecher=this.state.TeacherMenuNone ?   "DisplayBlock" : "dropdivTecher";
        let GradeButtonNone = this.state.GradeButtonNone ?   "DisplayBlock" : "dropdown";
        let GroupButtonNone = this.state.GroupButtonNone ?   "DisplayBlock" : "dropdown";
        let fal= this.state.fal ?   "dropdown-fal-block" : "dropdown-fal";
        let grade = this.state.Grade ? "dropdown-grade-block" : "dropdown-grade ";
        let group = this.state.Group ? "dropdown-group-block" : "dropdown-group";
        let StudentSubmit = this.state.StudentSubmit?"StudentSubmit":"DisplayBlock"

        //******************************************Teacher scheduler Menu Change Css Class*********************************************************************************
        let TeacherButtons = this.state.TeacherButtons ?   "DisplayBlock" : "dropdown";
        let TeacherFal= this.state.TeacherFal ?   "dropdown-fal-block" : "dropdown-fal";
        let TDepartButton = this.state.TDepartButton ?   "DisplayBlock" : "dropdown";
        let depart = this.state.tDepart ?   "dropdown-grade-block" : "dropdown-grade ";
        let TeacherSubmit =  this.state.TeacherSubmit ?   "TeacherSubmit" : "DisplayBlock";
        let StudentDiv= this.state.StudentDiv ? "none":"DisplayBlock"
        let TeacherDiv= this.state.TeacherDiv ? "none":"DisplayBlock"
        var view_schedule_table = this.state.check_shedule ? this.state.schedule_table: '';
        var view_teacher_name = this.state.check_tName ? this.state.teacher_name: '';



        return (
           <div>
               <header>
                   <h1 className="Name"><FormattedMessage id="Schedule" defaultMassage="Schedule"/></h1>
               </header>
               <div className="row" >
                   <div className="col-sm-3">

{/*****************************************************Student Schedule Menu **************************************************************************************/}
                     <div className={StudentDiv}>
                       <button className="dropbtn" onClick={function(e){

                           e.preventDefault();
                           this.ViewStudentMenu()
                           this.setState({
                               check_tName:false,

                           });
                       }.bind(this)} ><FormattedMessage id="Studen's Scheduler Menu Title" defaultMassage="student schedule"/>  </button>
                       <div className={StudentButtons}>
                           <div className="dropdown" onClick={this.ChangeFalClassname.bind(this)} >

                               <button className="dropbtn"  ><FormattedMessage id="ShelMenuFaculty" defaultMassage="Falcuty"/>{"  "+this.state.faculty_name} </button>
                               <div className={fal} >

                                   { this.state.Faculties.map(faculty =>
                                       <a href="#" onClick={function(e){

                                           e.preventDefault();
                                           this.setState({
                                               faculty_name:faculty.name,
                                               check_student_faculty : true

                                           })
                                           this.Faculty_id(faculty.id,faculty.name);
                                           this.componentDidMount(faculty.id,);
                                       }.bind(this)}>
                                           {faculty.name  }  </a>)}

                               </div>

                           </div>

                           <div className={GradeButtonNone} onClick={this.ChangeGradClassname.bind(this)}>
                                   <button className="dropbtn" ><FormattedMessage id="ShelMenuDepart" defaultMassage=" Department"/> {"  "+this.state.department_name}</button>
                                   <div className={grade}>
                                       { this.state.departments.map(department =>
                                           <a href="#" onClick={function(e){

                                               e.preventDefault();
                                               this.department_id(department.id,department.name);
                                               this.Groups_name(department.id);
                                               this.setState({
                                                check_student_department : true
 
                                            })
                                           }.bind(this)}>
                                               {department.name  }  </a>)}

                                   </div>
                           </div>

                           <div className={GroupButtonNone} onClick={this.ChangeGroupClassname.bind(this)}>
                                   <button className="dropbtn" ><FormattedMessage id="ShelMenuGroup" defaultMassage=" Group"/> {"  "+this.state.group_name}</button>
                                   <div className={group}>
                                       <div className="Aleft">
                                           { this.state.groups.map(groups =>
                                               <a href="#" onClick={function(e){

                                                   e.preventDefault()

                                                   this.Group_id(groups.id,groups.name);
                                                   this.Shedule(groups.id);

                                                   this.setState({
                                                    check_student_group : true
     
                                                })
                                               }.bind(this)}>
                                                   {groups.name  }  </a>)}

                                       </div>
                                       <div className="Bleft">


                                       </div>
                                   </div>
                           </div>
                       </div>
                       <button className={StudentSubmit}   onClick = {function(e){

                           e.preventDefault();
                           if(this.state.check_student_faculty === true && this.state.check_student_department === true && this.state.check_student_group === true) 
                           {
                               this.setState({
                               check_shedule:true,

                                });
                            }
                       }.bind(this)}>
                           <FormattedMessage id="StudentSubmit" defaultMassage="View schedule" />  </button>
                     </div>
  {/*****************************************************************************Teacher Shedule Menu***********************************************************************/}
                    <div className={TeacherDiv}>
                      <div className="dropdivTecher">
                        <button className="dropbtnTecher"  onClick = {function(e){

                            e.preventDefault();
                            this.TFaculty();
                            this.ViewTeacherMenu();
                            this.setState({
                                check_shedule:false,

                            });
                        }.bind(this)}><FormattedMessage id="Teacher's Scheduler Menu Title" defaultMassage="Teacher Scheduler"/> </button>
                        <div className={TeacherButtons}>
                            <div className="dropdown" onClick={this.ChangeTeacherFalClassname.bind(this)} >
                                <button className="dropbtn"  ><FormattedMessage id="TeacherScheduleFaculty" defaultMassage="Faculty"/>{" "+this.state.t_faculty_name}</button>
                                <div className={TeacherFal}>
                                    {/*<a href="#" onClick={this.GetMenuVal(...)} >...}</a>*/}
                                    { this.state.TFaculties.map(faculty =>
                                        <a href="#" onClick={function(e){

                                            e.preventDefault();
                                            this.T_Faculty_id(faculty.id,faculty.name);
                                            this.setState({
                                                check_teacher_faculty : true
 
                                            })
                                        }.bind(this)}>
                                            {faculty.name  }  </a>)}
                                </div>
                            </div>
                            <div className={TDepartButton} onClick={this.ChangeTDepartClassname.bind(this)} >
                                <button className="dropbtn"  ><FormattedMessage id="TDepartment" defaultMassage="Department"/>{" "+this.state.tdepartment_name}</button>
                                <div className={depart}>
                                    {/*<a href="#" onClick={this.GetMenuVal(...)} >...}</a>*/}
                                    { this.state.tdepartments.map(tdepartment =>
                                        <a href="#" onClick={function(e){

                                            e.preventDefault();
                                            this.Tdepartment_id(tdepartment.id,tdepartment.name);
                                            // this.Groups_name(tdepartment.id);
                                            this.setState({
                                                check_teacher_department : true
 
                                            })
                                        }.bind(this)}>
                                            {tdepartment.name  }  </a>)}

                                </div>
                            </div>
                            <div className="dropdown" >
                                <button className="dropbtn" onClick = {function(e){

                                    e.preventDefault();
                                    if(this.state.check_teacher_department=== true && this.state.check_teacher_faculty === true)
                                    {
                                        this.setState({
                                            check_tName:true,

                                        });
                                    }
                                }.bind(this)} ><FormattedMessage id="TeacherScheduleTName" defaultMassage="Teacher's name"/></button>
                            </div>

                        </div>

                    </div>
                    </div>
                       {/***************************************************************************** // Teacher Shedule Menu***********************************************************************/}
                   </div>
                   <div className="col-sm-9" >


                       <div>
                           {view_teacher_name}
                       </div>
                        <div>
                            {view_schedule_table}

                        </div>
                   </div>
               </div>




           </div>

    )
    }

}

export default Schedule ;