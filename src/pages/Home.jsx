import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { homeSection } from '../data/HomeSection';
import { aboutSection } from '../data/AboutSection';
import { tutorsSection, tutorsList } from '../data/TutorsSection';
import { partnersSection, partnersList } from '../data/PartnersSection';
import { contactSection } from '../data/ContactSection';

import Tutors from '../components/Tutors';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

import parse from 'html-react-parser';
import '../styles/Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                {/* home */}
                <section id="home">
                    <img src={homeSection.image} alt="Home Section" />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>
                {/* about */}
                <section id="about">
                    <div className="kolom">
                        {parse(aboutSection.content)}
                    </div>
                    <img src={aboutSection.image} className="responsive-gif" alt="About Section" />
                </section>
                {/* tutors */}
                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(tutorsSection.content)}
                        </div>
                        <Tutors tutorsList={tutorsList} />
                    </div>
                </section>
                {/* partners */}
                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(partnersSection.content)}
                        </div>
                        <Partners partnersList={partnersList} />
                    </div>
                </section>
            </div>
            <Contact contactSection={contactSection} />
            <Footer />
        </>
    );
}

export default Home;
