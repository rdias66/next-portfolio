'use client'

import { Home } from '@/app/sections/home'
import { Skills } from '@/app/sections/skills'
import { Experiences } from '@/app/sections/experiences'
import { Contact } from '@/app/sections/contact'
import { Header } from '@/app/sections/header'
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
            <div className="p-10">
              <Label>PT-BR</Label>
              <Switch
                id="languageSwitch"
                className="m-2"
                checked={languageController}
                onCheckedChange={setLanguage}
              />
              <Label>EN</Label>
            </div>
          }
        />
        <div>
          <Home LanguageTextData={pageTexts.homeTexts} />
          <Skills
            LanguageTextData={pageTexts.skillsTexts}
            LanguageTitleData={pageTexts.skillsTitle}
          />
          <Experiences />
          <Contact />
        </div>
      </div>
    </div>
  )
}
