'use client'

import { Home } from '@/app/sections/home'
import { Skills } from '@/app/sections/skills'
import { Experiences } from '@/app/sections/experiences'
import { Contact } from '@/app/sections/contact'
import { Header } from '@/app/sections/header'
import { Footer } from '@/app/sections/footer'
import Stars from '@/components/stars'
import TextsEN from '@/app/data/texts-EN'
import TextsPT from '@/app/data/texts-PT'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import '@/app/css/starry-sky.css'

let pageTexts = TextsPT()

export default function App() {
  const [languageController, setLanguageController] = useState(false)
  const setLanguage = () => {
    setLanguageController(!languageController)
    pageTexts = languageController ? TextsPT() : TextsEN()
  }

  return (
    <div className="relative min-h-screen">
      <div className="bg bg-custom-bg bg-cover fixed top-0 left-0 w-full h-full">
        <div className="bg-overlay" />
      </div>
      <Stars />
      <div className="relative z-10">
        <Header
          LanguageTextData={pageTexts.headerTexts}
          LanguageSwitch={
            <div className="">
              <Label className="text-xm md:text-sm lg:text-base xl:text-base">
                PT-BR
              </Label>
              <Switch
                id="languageSwitch"
                className="m-1 lg:m-2"
                checked={languageController}
                onCheckedChange={setLanguage}
              />
              <Label className="text-xm ">EN</Label>
            </div>
          }
        />
        <div>
          <Home LanguageTextData={pageTexts.homeTexts} />
          <Skills
            LanguageTextData={pageTexts.skillsTexts}
            LanguageTitleData={pageTexts.skillsTitle}
          />
          <Experiences
            LanguageTextData={pageTexts.experienceTexts}
            LanguageTitleData={pageTexts.experienceTitle}
          />
          <Contact LanguageTextData={pageTexts.contactTexts} />
        </div>
        <Footer LanguageTextData={pageTexts.footerTexts} />
      </div>
    </div>
  )
}
