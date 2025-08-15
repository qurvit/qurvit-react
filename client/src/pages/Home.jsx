import React from 'react'
import HeroSection from '../components/HeroSection';
import OurMission from '../components/OurMission';
import FeatureSection from '../components/FeatureSection';
import ContactForm from '../components/ContactForm'
import Testimonial from '../components/Testimonial'
import StatsSection from '../components/StatsSection'

const Home = () => {
  return (
    <div className='w-full h-full mt-10 flex flex-col gap-10' > 
    
    <HeroSection />
    <OurMission />
    <FeatureSection />
    <ContactForm />
    <StatsSection />
    <Testimonial />
    
  </div>
  )
}

export default Home