import React from 'react';
import '../../././assets/css/MainPage.css'
import {FormattedMessage,} from "react-intl";

class  MainFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <footer className = "main_screen_size">
                <ul id="main_contact" className="main_rr">
                    <li><FormattedMessage id="Reception" defaultMassage="Reception"/>: +996 (312) 545 162</li>
                    <li><FormattedMessage id="Fax" defaultMassage="Fax"/>: +996 (312) 545 162</li>
                    <li>E-mail: rector@kstu.kg</li>
                    <li><FormattedMessage id="Website" defaultMassage="Website"/>: www.kstu.kg</li>
                </ul>
                <div>
                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("en");

                    }.bind(this)}><img id="main_language_en" src={require('../.././assets/image/eng.png')}
                                       title="english"/></a>

                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("ru");

                    }.bind(this)}><img id="main_language_ru" src={require('../.././assets/image/ru.png')}
                                       title="russian"/></a>
                </div>
            </footer>
        );
    }
}
export default MainFooter;