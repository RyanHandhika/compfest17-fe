import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Plans />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
