import React from 'react';
import '../../././assets/css/MainPage.css'

class  MainFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <footer>
                <ul id="main_contact" className="main_rr">
                    <li>Reception: +996 (312) 545 162</li>
                    <li>Fax: +996 (312) 545 162</li>
                    <li>e-mail: rector@kstu.kg</li>
                    <li>website: www.kstu.kg</li>
                </ul>
                <div id="main_language_block">
                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("kg");

                    }.bind(this)}><img className="main_lang_icon" src={require('../.././assets/image/kg.png')}
                                       title="park_sewha"/></a>

                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("en");

                    }.bind(this)}><img className="main_lang_icon" src={require('../.././assets/image/eng.png')}
                                       title="english"/></a>

                    <a onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage("ru");

                    }.bind(this)}><img className="main_lang_icon" src={require('../.././assets/image/ru.png')}
                                       title="russian"/></a>
                </div>
            </footer>
        );
    }
}
export default MainFooter;