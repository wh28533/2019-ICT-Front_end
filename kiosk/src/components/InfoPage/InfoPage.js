import React from 'react';

import '../../././assets/css/bootstrap.css';
import '../../././assets/css/Info.css';
import {FormattedMessage} from "react-intl";

class InfoPage extends React.Component{
    constructor(props)
    {

        super(props);
    }

    render(){
        return(
            <div id ="info_background_width">
            <h1 className='Name'><FormattedMessage id="Information" defaultMassage="Information"/></h1>
                <div className="row">
                    <div className="col-sm-6 info_p">

                        <div className="row" >
                            <div className="col-7">
                                <img className = "info_screen" src= {require( "../.././assets/image/info1.png")}/>
                            </div>
                            <div className="col-5">
                                 <pre className = "info_paragraph">
                                        <FormattedMessage id="info_paragraph" defaultMassage="How is used ?"/>
                                 </pre>
                                <div>
                                    <FormattedMessage id="info_paragraph_how_to_select_menu_information" defaultMassage="
                               Select n and tap on it.
                               On the home page you can
                               change the language of the
                               proposed information. For that
                               find buttons on the right side of
                               bottom."/>

                                </div>

                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-7">
                                <img className = "info_screen" src={require( '../.././assets/image/info2.png')}/>
                            </div>
                            <div className="col-5">
                                <div>
                                    <FormattedMessage id="info_paragraph_how_to_use_back_menu" defaultMassage="
                                Use the HOME button to return
                                to home page.
                                Use BACK button to go to
                                previous page.
                                By tapping on the MENU button
                                you can choose any section
                                without going to home page."/>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6  info_p team_info">
                           <pre className = "info_paragraph">
                                 <FormattedMessage id="2019_World_Friends_ICT_SKKU_Volunteers_Program" defaultMassage=" 2019 World Friends ICT SKKU Volunteers Program."/>

                            </pre>
                        <div className="row">
                            <span className = 'info_bold'>SKKU(Sungkyunkwan University)</span>
                            <FormattedMessage id="Sungkyunkwan University" defaultMassage="
                            is a private comprehensive research university in South Korea. The institution traces its origins to the historical Sungkyunkwan
                            founded in 1398 by the Joseon Dynasty located in the central Seoul. As the foremost
                            educational institution of the Joseon Kingdom, it was governed by the great code of
                            the state administration with royal assent. It was restructured into a university in
                            the late nineteenth century, and has since greatly expanded its course offerings and
                            reputation, which is attributed to its numerous influential graduates, strong research output,
                            and close partnership with Samsung"/>



                        </div>
                        <div className="row ">
                            <div>
                                <br/>
                             <p className = "info_paragraph">
                                  <FormattedMessage id=" Development Team Members" defaultMassage=" Development Team Members"/>

                            </p>
                            <p>  <FormattedMessage id="Team from SKKU:" defaultMassage=" Team from SKKU:"/><br/> Hera Koo, 구헤라. Doyoon Yoon, 윤도윤. Woojin Jun, 전우진. Hyunjun Ahn, 안현준. <br/> Hayoung Cho, 조하영. Songchan Jin, 진송찬. Seonggyu Choi, 최성규. <br/></p>
                            <p>  <FormattedMessage id="Team from MANAS University:" defaultMassage="Team from MANAS University:"/><br/></p>
                            <p>  <FormattedMessage id="Team from KSTU:" defaultMassage="Team from KSTU:"/><br/></p>
                            </div>

                        </div>


                    </div>
                </div>

        </div>
        );
    }

}
export default InfoPage;