import React from 'react';
import { Link } from 'react-router-dom';
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
                <section className='main-spotlight-section'>
                    <section className='spotlight-card'>
                        <h3 className='spotlight-title'>PawUp Spotlight</h3>

                        <section className='container'>
                            <p>Name:  <a href="mailto:hgundogdu53@gmail.com">Muffin</a></p>
                            <p>Birthdate: '01-01-2019'</p>
                            <p>Types-of-pet: 'white cat'</p>
                            <p>Location: 'San Francisco'</p>
                            <p>Hobbies: 'White cat that loves playing with small cats. Friendly and lovely.'</p>
                        </section>
                    </section>
                </section>
                <footer className="footer">
                    <h5>Huseyin Gundogdu</h5>
                    <p>Copyright @ 2019</p>
                </footer>
            </main>
        </>
    )
}

export default LandingPage;