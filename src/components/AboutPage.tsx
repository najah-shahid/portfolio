import { useState } from 'react'
import mirrorFrame from '../assets/mirror frame.png'
import bottomBorder from '../assets/bottom border.png'
import personalPic from '../assets/personal-pic.jpeg'
import { aboutContent } from '../i18n/about'
import type { Language } from '../i18n/translations'
import SkillEnvelope from './SkillEnvelope'
import './AboutPage.css'

interface AboutPageProps {
  language: Language
}

function AboutPage({ language }: AboutPageProps) {
  const content = aboutContent[language]
  const [openSkill, setOpenSkill] = useState<string | null>(null)

  return (
    <main id="about" className="about" data-lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="about__content">
        <div className="about__portrait">
          <div className="about__portrait-frame">
            <div className="about__portrait-placeholder" role="img" aria-label={content.name}>
              <img src={personalPic} alt="" className="about__portrait-photo" />
            </div>
            <img src={mirrorFrame} alt="" className="about__frame-image" />
          </div>
          <p className="about__name">{content.name}</p>
          <p className="about__role">{content.role}</p>
        </div>

        <section className="about__bio">
          <h2 className="about__heading">{content.sectionLabels.aboutMe}</h2>
          <div className="about__divider">
            <img src={bottomBorder} alt="" />
          </div>
          {content.bio.map((paragraph) => (
            <p key={paragraph} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </section>

        <div className="about__side">
          <section className="about__education">
            <h2 className="about__heading">{content.sectionLabels.education}</h2>
            <div className="about__divider">
              <img src={bottomBorder} alt="" />
            </div>
            <ol className="education-list">
              {content.education.map((entry) => (
                <li key={entry.institution} className="education-list__item">
                  <span className="education-list__marker" aria-hidden="true" />
                  <div className="education-list__body">
                    <p className="education-list__date">{entry.dateRange}</p>
                    <div className="education-list__details">
                      <p className="education-list__institution">{entry.institution}</p>
                      <p className="education-list__location">{entry.location}</p>
                      <p className="education-list__program">{entry.program}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="about__skills">
            <h2 className="about__heading">{content.sectionLabels.skills}</h2>
            <div className="about__divider">
              <img src={bottomBorder} alt="" />
            </div>
            <div className="skills-row">
              {content.skillCategories.map((category) => (
                <SkillEnvelope
                  key={category.id}
                  category={category}
                  isOpen={openSkill === category.id}
                  onToggle={() =>
                    setOpenSkill((current) => (current === category.id ? null : category.id))
                  }
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* <img src={aboutMeCat} alt="" className="about__cat" /> */}
    </main>
  )
}

export default AboutPage
