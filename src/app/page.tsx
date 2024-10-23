import FeatureCourses from "./components/FeatureCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import TestimonialCard from "./components/TestimonialCard";
import UpcommingWeinars from "./components/UpcommingWeinars";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <TestimonialCard/>
      <UpcommingWeinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
