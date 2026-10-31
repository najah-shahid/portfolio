import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import type { Language } from './i18n/translations'

function App() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return (
    <>
      <LandingPage language={language} onLanguageChange={setLanguage} />
      <AboutPage language={language} />
      <ProjectsPage language={language} />
      <ContactPage language={language} />
    </>
  )
}

export default App
