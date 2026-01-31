import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="pt-20">
            <Hero />
            <HowItWorks />
            <Footer />
        </div>
    );
}
