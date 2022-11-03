/* eslint-disable @next/next/no-img-element */
import Header from "../components/layouts/Header";
import Hero from "../components/sections/homepage/Hero";
import CaseStudyList from "../components/sections/homepage/CaseStudyList";
import Services from "../components/sections/homepage/Services";
import Team from "../components/sections/homepage/Team";
import Review from "../components/sections/homepage/Review";
import AboutUs from "../components/sections/homepage/AboutUs";
import College from "../components/sections/homepage/College";
import Work from "../components/sections/homepage/Work";
import OfficeList from "../components/sections/homepage/OfficeList";
import BlogList from "../components/sections/homepage/BlogList";
import ContactUs from "../components/sections/homepage/ContactUs";
import Footer from "../components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="isolate pt-20">
        <Hero />
        <CaseStudyList />
        <Services />
        <Team />
        <Review />
        <AboutUs />
        <College />
        <Work />
        <OfficeList />
        <BlogList />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
