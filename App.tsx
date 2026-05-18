import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StudyCase from "./components/StudyCase";
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { getProfileContent } from './data/profileSelector';
import SoftSkills from './components/SoftSkills';
import SmoothScroll from "./components/SmoothScroll";

const App: React.FC = () => {
  const resumeData = getProfileContent();

  return (
    <BrowserRouter>
      <SmoothScroll />
      <Routes>

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            <main>
              <Header name={resumeData.name} />

              <Hero
                name={resumeData.name}
                profile={resumeData.professional_profile}
                contactEmail={resumeData.contact.split(' | ')[0]}
              />

              <div className="max-w-6xl bg-white mx-auto px-4">
                <div className="max-w-3xl mx-auto px-4">

                  <Services valueProposition={resumeData.value_proposition} />

                  {/* <SoftSkills /> */}
                  <SoftSkills data={resumeData.case_studies_preview} />

                  <Skills toolStack={resumeData.tool_stack} />

                  <Experience experience={resumeData.experience} />

                </div>
              </div>

              <Footer data={resumeData} />
            </main>
          }
        />

        {/* 📄 CASE PAGE */}
   <Route
  path="/case/:slug"
  element={
    <StudyCase
      name={resumeData.name}
      cases={resumeData.case_studies}
    />
  }
/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;