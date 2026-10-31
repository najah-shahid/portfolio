import { useState } from 'react'
import type { ProjectEntry } from '../i18n/projects'

interface ProjectCardProps {
  project: ProjectEntry
  image: string
  cardBorderFrame: string
}

function ProjectCard({ project, image, cardBorderFrame }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggle = () => setIsFlipped((current) => !current)

  return (
    <div
      className={`project-card${isFlipped ? ' is-flipped' : ''}`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          toggle()
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={project.title}
    >
      <div className="project-card__inner">
        <div className="project-card__face project-card__face--front">
          <img src={image} alt="" className="project-card__photo" />
          <img src={cardBorderFrame} alt="" className="project-card__frame" />
          <h3 className="project-card__title">{project.title}</h3>
        </div>

        <div className="project-card__face project-card__face--back">
          <div className="project-card__back-content">
            <header className="project-card__header">
              <h3 className="project-card__back-title">{project.title}</h3>
              <span className="project-card__date">{project.dateRange}</span>
            </header>

            <div className="project-card__meta">
              <span className="project-card__subtitle">{project.subtitle}</span>
              <span className="project-card__location">{project.location}</span>
            </div>

            <ul className="project-card__bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="project-card__link"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="project-card__tools">{project.tools.join(' | ')}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
