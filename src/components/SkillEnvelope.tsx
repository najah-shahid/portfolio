import closedEnvelope from '../assets/closed envelope.png'
import openEnvelope from '../assets/open envelope empty.png'
import paperTexture from '../assets/paper.png'
import type { SkillCategory } from '../i18n/about'

interface SkillEnvelopeProps {
  category: SkillCategory
  isOpen: boolean
  onToggle: () => void
}

function SkillEnvelope({ category, isOpen, onToggle }: SkillEnvelopeProps) {
  const paperId = `skill-paper-${category.id}`

  return (
    <div className="skill-envelope">
      <button
        type="button"
        className="skill-envelope__trigger"
        aria-expanded={isOpen}
        aria-controls={paperId}
        onClick={onToggle}
      >
        <img
          src={isOpen ? openEnvelope : closedEnvelope}
          alt={category.label}
          className="skill-envelope__image"
        />
      </button>

      <div
        id={paperId}
        className={`skill-envelope__paper${isOpen ? ' is-open' : ''}`}
        style={{ backgroundImage: `url(${paperTexture})` }}
        aria-hidden={!isOpen}
      >
        <h3 className="skill-envelope__title">{category.label}</h3>
        <ul className="skill-envelope__list">
          {category.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SkillEnvelope
