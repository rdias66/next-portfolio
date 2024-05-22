'use client'

import { Home } from '@/app/sections/home'
import { About } from '@/app/sections/about'
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
    <div>
      <div className="bg bg-cover bg-custom-bg fixed h-full w-full">
        <Stars />
        <Header
          className="z-0"
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
          <About />
          <Skills />
          <Experiences />
          <Contact />
        </div>
      </div>
    </div>
  )
}
