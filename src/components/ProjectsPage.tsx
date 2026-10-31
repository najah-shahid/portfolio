import { useState } from 'react'
import cardBorderFrame from '../assets/card border frame.png'
import colourishBubble from '../assets/colourish-bubble.png'
import lums from '../assets/lums.png'
import archconnectImage from '../assets/archconnect.png'
import gulImage from '../assets/gul.png'
import oLevelVaultImage from '../assets/o-level-vault.png'
import animePredictionImage from '../assets/anime-prediction.jpg'
import wildfireDetectionImage from '../assets/wildfire-detection.png'
import { projectsContent } from '../i18n/projects'
import type { Language } from '../i18n/translations'
import ProjectCard from './ProjectCard'
import './ProjectsPage.css'

interface ProjectsPageProps {
  language: Language
}

const projectImages: Record<string, string> = {
  'web-developer': colourishBubble,
  'teaching-assistant': lums,
  archconnect: archconnectImage,
  gul: gulImage,
  'o-level-vault': oLevelVaultImage,
  'anime-prediction': animePredictionImage,
  'wildfire-detection': wildfireDetectionImage,
}

function ProjectsPage({ language }: ProjectsPageProps) {
  const content = projectsContent[language]
  const [activeTab, setActiveTab] = useState(content.tabs[0].id)
  const activeCategory = content.tabs.find((tab) => tab.id === activeTab) ?? content.tabs[0]

  return (
    <main id="projects" className="projects" data-lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="projects__content">
        <nav className="projects-tabs">
          <div className="projects-tabs__line" />
          <div className="projects-tabs__row">
            {content.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`projects-tabs__button${tab.id === activeTab ? ' is-active' : ''}`}
                aria-pressed={tab.id === activeTab}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="projects-tabs__line" />
        </nav>

        <div className="projects-grid">
          {activeCategory.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              image={projectImages[project.id]}
              cardBorderFrame={cardBorderFrame}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage
