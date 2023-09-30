
import Experience from '../components/landingpage/Experience';
import Footer from '../components/landingpage/Footer';
import Header from '../components/landingpage/Header';
import Hero from '../components/landingpage/Hero';
import Search from '../components/landingpage/Search';

function LandingPage() {
    return (
        <div className=" text-white overflow-hidden">
            <Header />
            <Hero />
            <Experience />
            <Search />
            <Footer />
        </div>
    )
}

export default LandingPage;
