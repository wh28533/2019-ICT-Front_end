import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Info.css';

class InfoPage extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
            <h1 id = 'Name'>Information</h1>
            <table className = "info_table_position">
            <tr>
                <th>
                    <img className = "info_screen" src= {require( "../.././assets/image/info1.png")}/>
                </th>
                <th>
                    <pre className = "info_paragraph">
                       Slect a section and tap on it.<br/>
                       On the home page you can<br/>
                       change the language of the<br/>
                       proposed information. For that<br/>
                       find buttons on the right side of<br/>
                       bottom. <br/><br/>
                    </pre>
                </th>
                <td rowspan="2">
                        <pre className='team_info'>
                            <span className='info_bold'>2019 World Friends ICT SKKU Volunteers Program.</span><br/><br/>
                    
                             <span className = 'info_bold'>SKKU(Sungkyunkwan University)</span> is a private comprehensive research unive<br/>
                            -rsity in South Korea. The institution traces its origins to the historical Sungkyunkwan<br/>
                            founded in 1398 by the Joseon Dynasty located in the central Seoul. As the foremost<br/>
                            educational institution of the Joseon Kingdom, it was governed by the great code of<br/>
                            the state administration with royal assent. It was restructured into a university in <br/>
                            the late nineteenth century, and has since greatly expanded its course offerings and <br/>
                            reputation, which is attributed to its numerous influential graduates, strong research output, <br/>
                            and close partnership with Samsung.<br/><br/>
                    
                            <span className ='info_bold'>Development Team Members</span><br/>

                            Team from SKKU: <br/><br/>

                            Team from MANAS University:<br/><br/>

                            Team from KSTU:<br/><br/>
                        </pre>
                </td> 
            </tr>
            <tr>
                <th>
                    <img className = "info_screen" src={require( '../.././assets/image/info2.png')}/>
                </th>
                <th>
                    <pre className = "info_paragraph">
                        Use the "HOME" button to return<br/>
                        to home page.<br/>
                        Use "BACK" button to go to<br/>
                        previous page.<br/>
                        By tapping on the "MENU" button <br/>
                        you can choose any section <br/>
                        without going to home page.<br/>
                    </pre>
                </th>
            </tr>   
        </table>
        </div>
        );
    }

}
export default InfoPage;