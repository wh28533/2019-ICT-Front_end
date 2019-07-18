import React from 'react';
import '../../././assets/css/UnivInfoPage.css';
import '../../././assets/css/bootstrap.css';

class UnivInfoPage extends React.Component
{
    constructor(props) 
    {
        super(props);
    }  

    render(){

        return (
            <div>
            <div id = "his_style">
            <div class="header">			
    <h1 id = "Name">KSTU</h1>
    </div>
<table id = "Table">
<ul>
<ol><tr><th>Former names:</th> <th>Frunze Polytechnic Institute</th></tr></ol>
<ol><tr><th>Year of foundation:</th> <th>1954</th></tr></ol>
<ol><tr><th>Year of reorganization:</th><th>1992
type of state</th></tr></ol>
<ol><tr><th>President:</th><th>Nurakunov Sardar Anvarovich</th></tr></ol>
<ol><tr><th>Rector:</th><th>De Vyacheslav Alekseevich</th></tr></ol>
<ol><tr><th>Students:</th><th>over 19,000</th></tr></ol>
<ol><tr><th>Doctors:</th><th>more than 50</th></tr></ol>
<ol><tr><th>Teachers:</th><th>about 1000</th></tr></ol>
<ol><tr><th>Location:</th><th>Kyrgyzstan, Bishkek</th></tr></ol>
<ol><tr><th>Legal address:</th><th>720044 Kyrgyzstan, Bishkek, Mira Ave. 66</th></tr></ol>
<ol><tr><th>Website:</th><th>kstu.kg</th></tr></ol>
</ul>
</table>
</div>
<div id = "General" >
<h3>General knowledge about KSTU</h3>
<p>It began in 1953, when, due to the acute shortage of highly qualified specialists in the engineering industry of Kyrgyzstan, a technical faculty was established at Kyrgyz State University. Created on September 1, 1954, as the Frunze Polytechnic Institute. The first rector of FPI was Professor George Akimovich Sukhomlinov.</p>
<p>The training of future engineers was carried out by 12 faculties in 60 departments, where 13 thousand students studied in 26 specialties, 350 teachers (200 - with academic degrees and titles). FPI has become a forge for training highly qualified personnel for industry and construction of the Kirghiz SSR and the entire Central Asian region.</p>
<p>For the successes achieved in the preparation of highly qualified personnel, a team of FPI among the 26 best universities in the country in honor of the 50th anniversary of the USSR was awarded the Jubilee Medal of the CPSU Central Committee, Presidium of the USSR Supreme Council, USSR Council of Ministers and the All-Union Central Council of Trade Unions.</p>
<p>Since 1992 - KSTU. I. Razzakov. Now the university is a modern university complex, the largest educational and scientific center for training and retraining of engineering, engineering and economic personnel in 77 specialties.</p>
<p>KSTU owns innovative technologies and introduces the latest educational programs. The university has more than 19 thousand students who want to get a higher and secondary special education, as well as about 200 students of the Lyceum and more than 190 graduate students and applicants.</p>
</div>
</div>
);
    }
}

export default UnivInfoPage;