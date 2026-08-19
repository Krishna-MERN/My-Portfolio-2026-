import React from 'react'
import Hero from '../components/Hero'
import QuickStats from '../components/QuickStats'
import AboutPreview from '../components/AboutPreview'
import TechStack from '../components/TechStack'
import ProjectPreview from '../components/ProjectPreview'
import EducationPreview from '../components/EducationPreview'
import ExperiencePreview from '../components/ExperiencePreview'
import CodingProfiles from '../components/CodingProfiles'
import GitHubActivity from '../components/GitHubActivity'
import CallToAction from '../components/CallToAction'
import UpdatesPreview from '../components/UpdatesPreview'
import ResearchPreview from '../components/ResearchPreview'

const Home = () => {
  return (
    <div>
     <Hero/>
     <QuickStats/>
     <AboutPreview/>
     <TechStack/>
     {/* <FeaturedProjects/> */}
     <ProjectPreview/>
     <EducationPreview/>
     <ResearchPreview/>
     <ExperiencePreview/>
     <CodingProfiles/>
     <GitHubActivity/>
     <UpdatesPreview/>
     <CallToAction/>
    </div>
  )
}

export default Home