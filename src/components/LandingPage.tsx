import { useEffect, useState } from 'react'
import borderFrame from '../assets/border.png'
import { landingContent, type Language } from '../i18n/translations'
import './LandingPage.css'

interface LandingPageProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

const SECTION_IDS = ['home', 'about', 'projects', 'contact']

function LandingPage({ language, onLanguageChange }: LandingPageProps) {
  const content = landingContent[language]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: content.navLinks.home },
    { id: 'about', label: content.navLinks.aboutMe },
    { id: 'projects', label: content.navLinks.projects },
    { id: 'contact', label: content.navLinks.contactMe },
  ]

  // Highlights whichever section is currently crossing the middle band of the viewport, so the
  // matching nav link can show as active — these ids live across all four page components, which
  // are all mounted in the same document, so a plain getElementById reaches them fine.
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) {
          setActiveSection(mostVisible.target.id)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const languageToggle = (
    <div className="language-toggle" role="group" aria-label="Language / اللغة">
      <button
        type="button"
        className={`language-toggle__option${language === 'en' ? ' is-active' : ''}`}
        aria-pressed={language === 'en'}
        onClick={() => onLanguageChange('en')}
      >
        EN
      </button>
      <span className="language-toggle__divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`language-toggle__option${language === 'ar' ? ' is-active' : ''}`}
        aria-pressed={language === 'ar'}
        onClick={() => onLanguageChange('ar')}
      >
        AR
      </button>
    </div>
  )

  return (
    <main
      id="home"
      className="landing"
      data-lang={language}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <nav className="navbar" aria-label="Page sections">
        {/* .navbar__panel is `display: contents` on large screens, so .navbar__links and
            .language-toggle place themselves directly as grid items of .navbar (links centered,
            toggle pinned far right). Below the mobile breakpoint it becomes the actual slide-in
            side panel, with both groups stacked inside it. */}
        <div className={`navbar__panel${isMenuOpen ? ' is-open' : ''}`}>
          <button
            type="button"
            className="navbar__panel-close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                d="M5 5l10 10M15 5L5 15"
              />
            </svg>
          </button>

          <svg
            className="navbar__panel-border"
            viewBox="0 0 20 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="5" y1="0" x2="5" y2="600" />
            <line x1="11" y1="0" x2="11" y2="600"/>
          </svg>

          <div className="navbar__links">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`site-nav__link${activeSection === item.id ? ' is-active' : ''}`}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {languageToggle}
        </div>

        <button
          type="button"
          className="navbar__menu-button"
          aria-expanded={isMenuOpen}
          aria-label="Menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <svg viewBox="0 0 20 20" width="32" height="32" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              d="M3 6h14M3 10h14M3 14h14"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="navbar__scrim" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
        )}
      </nav>

      <div className="landing__main">
        <section className="hero">
          <div className="hero__frame">
            <img src={borderFrame} alt="" className="hero__frame-image" />
            <div className="hero__text">
              <p className="hero__welcome">{content.welcomeTo}</p>
              <h1 className="hero__title">{content.title}</h1>
            </div>
          </div>

          <ul className="badge-row">
            {content.badges.map((badge) => (
              <li key={badge} className="badge-row__item">
                {badge}
              </li>
            ))}
          </ul>
        </section>

        <div className="scroll-prompt">
          <span className="scroll-prompt__label">{content.scrollPrompt}</span>
          <svg
            className="scroll-prompt__icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}

export default LandingPage
