import React from 'react';

import FacultyFirst from './components/FacultyPage/FacultyFirst';
import FacultySecond from './components/FacultyPage/FacutySecond';
import MainHeader from './components/MainPage/MainHeader';
import MainContent from './components/MainPage/content';
import MainFooter from './components/MainPage/MainFooter';
import RightButtons from './components/RightButtons/RightButtons';
import MenuBar from './components/RightButtons/MenuBar';
import InfoPage from './components/InfoPage/InfoPage';
import Shedule from './components/Schedule/Schedule';
import Instituties from './components/Instituties/Instituties';
import MapPage from './components/MapPage/MapPage';

import './assets/css/bootstrap.css';
import '../src/assets/css/MainPage.css';

import './App.css';
// import { bindExpression } from '@babel/types';

class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      page_storeage :['MainPage'],
      check_menu_bar : false,
      
      main_page: <div>
      <div className="container">
        <MainHeader/>
        
        <MainContent 
        onChangePage = {function(next_page){
          var new_page_storeage = this.state.page_storeage.slice();

          new_page_storeage.push(next_page);

          this.setState({
             page_storeage : new_page_storeage
          });

        }.bind(this)}
        />
      </div>
        <MainFooter/>
      </div>,

      right_button:<RightButtons 
      
      onChangePage = {function(what_to_do){
        if(what_to_do === 'Home')
        {
          this.setState({
            page_storeage :['MainPage']
         });

        }
        else if(what_to_do === 'Back')
        {
          this.setState((prevState) => {
            var new_page_storeage = this.state.page_storeage;
            new_page_storeage.pop();
           
            return {
              page_storeage : new_page_storeage,
              check_menu_bar : false
              }
          });  
        }
        else if(what_to_do === 'Menu')
        {
          var change = this.state.check_menu_bar;
          this.setState((prevState) => {
            return {
            check_menu_bar : !change
            }
          });
        }
      }.bind(this)}
      />,
      
      menu_bar:<MenuBar  onChangePage = {function(next_page){
          
        var new_page_storeage = this.state.page_storeage.slice();
        if (new_page_storeage[new_page_storeage.length - 1] === next_page)//같은페이지로 가는걸 눌렀으면
        {
          this.setState({
            check_menu_bar : false
          });
        }
        else
        {
          new_page_storeage.push(next_page);
         
          this.setState({
             page_storeage : new_page_storeage,
             check_menu_bar : false
            });
        }
      }.bind(this)}
      />,

      faculty_first: <FacultyFirst/>,
      faculty_second: <FacultySecond/>,

      instituties: <Instituties/>,

      info_page:<InfoPage/>,
      shedule_page: <Shedule/>,
      
      map_page:<MapPage/>
    }
  }
  componentDidMount () {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "http://code.jquery.com/jquery-latest.min.js";
    script1.type = "text/javascript";
    script1.async = true;

    script2.src = "js/bootstrap.js";
    script2.async = true;
    
    document.getElementById('root').appendChild(script1);
    document.getElementById('root').appendChild(script2);
  }
  render(){
    var view_page,right_button = '',menu_bar = '';
    var now_page = this.state.page_storeage[this.state.page_storeage.length - 1 ];
    
    if(now_page === 'MainPage')
    {
      view_page = this.state.main_page;
      right_button = '';
      menu_bar = '';
      this.state.check_menu_bar = false;
    }

    else if(now_page === 'FacultyFirst')
    {
      view_page = this.state.faculty_first;
      right_button = this.state.right_button;
    }
    else if(now_page === 'FacultySecond')
    {
      view_page = this.state.faculty_second;
      right_button = this.state.right_button;
    }
    else if(now_page === 'Instituties')
    {
      view_page = this.state.instituties;
      right_button = this.state.right_button;
    }
    else if (now_page === 'InfoPage')
    {
       view_page = this.state.info_page;
       right_button = this.state.right_button;
    }
    else if (now_page === 'Schedule')
    {
      view_page = this.state.shedule_page;
      right_button = this.state.right_button;
    }
    else if(now_page === 'MapPage')
    {
      view_page = this.state.map_page;
      right_button = this.state.right_button;
    }
    if(this.state.check_menu_bar === true)
    {
      menu_bar = this.state.menu_bar;
    }
    else
    {
      menu_bar = '';
    }

    return(
      <div>
        {view_page}
        {right_button}
        {menu_bar}
        {alert(this.state.page_storeage)}
      </div>
  );
  }
}

export default App;
