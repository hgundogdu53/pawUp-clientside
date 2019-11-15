import React from 'react';
import { Link } from 'react-router-dom';
import Spotlight from '../Spotlight/Spotlight';
import './LandingPage.css';

function LandingPage(props) {
    return (
        <>
            <main role="main" className='landing-main'>
                <header role="banner" className='landing-header'>
                    <h1 id="landing-title">PawUp</h1>
                    <h2 id="phrase">Connect your pets with pets from your neighborhood.</h2>
                    <Link to='/signup'><button className='btn'>Sign Up Today!</button></Link>
                </header>
                <section className='desc-section'>
                    {/* <Spotlight /> */}
                </section>
            </main>
            <footer className="footer">
                <h5>Huseyin Gundogdu</h5>
                <p>Copyright @ 2019</p>
            </footer>
        </>
    )
}

export default LandingPage;