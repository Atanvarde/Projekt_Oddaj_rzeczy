import React from 'react';
import './LandingPage.scss';
import Header from './Header/Header.jsx';
import Navigation from './Navigation/Navigation.jsx';
import YellowSection from "./YellowSection/YellowSection";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="LandingPage_container">
                <Navigation/>
                <Header/>
                <YellowSection/>
            </div>
        )
    }
}

export default LandingPage;