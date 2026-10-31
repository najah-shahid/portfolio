import { useEffect, useState, type ChangeEvent, type SubmitEvent } from 'react'
import emailjs from '@emailjs/browser'
import paperTexture from '../assets/paper.png'
import pinImage from '../assets/pin.png'
import smallMothAnimation from '../assets/small-animation-sheet.png'
import bigMothAnimation from '../assets/big-animation-sheet.png'
import { contactContent } from '../i18n/contact'
import type { Language } from '../i18n/translations'
import './ContactPage.css'

interface ContactPageProps {
  language: Language
}

type PopupState = 'success' | 'error' | null

const initialFormValues = { name: '', email: '', subject: '', message: '' }

function ContactPage({ language }: Readonly<ContactPageProps>) {
  const content = contactContent[language]
  const [formValues, setFormValues] = useState(initialFormValues)
  const [isSending, setIsSending] = useState(false)
  const [popup, setPopup] = useState<PopupState>(null)
  const [isSmallMothFlapping, setIsSmallMothFlapping] = useState(false)
  const [isBigMothFlapping, setIsBigMothFlapping] = useState(false)
  const isRtl = language === 'ar'

  useEffect(() => {
    if (!popup) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPopup(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [popup])

  const handleChange =
    (field: keyof typeof formValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSending) return

    setIsSending(true)

    let sendSucceeded = false
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formValues.name,
          email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      sendSucceeded = true
    } catch {
      sendSucceeded = false
    }

    setIsSending(false)
    if (sendSucceeded) {
      setFormValues(initialFormValues)
    }
    setPopup(sendSucceeded ? 'success' : 'error')
  }

  return (
    <main
      id="contact"
      className="contact"
      data-lang={language}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div
        className="contact__note contact__note--steps"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <img src={pinImage} alt="" className="contact__pin" />
        <ol className="contact__note-list contact__note-list--numbered">
          {content.designThinkingSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <button
          type="button"
          className={`contact__note-moth contact__note-moth--small${isSmallMothFlapping ? ' is-flapping' : ''}`}
          style={{ backgroundImage: `url(${smallMothAnimation})` }}
          aria-label="moth"
          onClick={() => setIsSmallMothFlapping(true)}
          onAnimationEnd={() => setIsSmallMothFlapping(false)}
        />
      </div>

      <div
        className="contact__note contact__note--reminder"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <img src={pinImage} alt="" className="contact__pin" />
        <h3 className="contact__note-title">{content.reminderTitle}</h3>
        <ul className="contact__note-list">
          {content.reminderItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div
        className="contact__note contact__note--moth-only"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <img src={pinImage} alt="" className="contact__pin" />
        <button
          type="button"
          className={`contact__note-moth contact__note-moth--solo${isBigMothFlapping ? ' is-flapping' : ''}`}
          style={{ backgroundImage: `url(${bigMothAnimation})` }}
          aria-label="moth"
          onClick={() => setIsBigMothFlapping(true)}
          onAnimationEnd={() => setIsBigMothFlapping(false)}
        />
      </div>

      <form
        className={`contact-card${isSending ? ' is-sending' : ''}`}
        style={{ backgroundImage: `url(${paperTexture})` }}
        onSubmit={handleSubmit}
      >
        <h2 className="contact-card__heading">{content.heading}</h2>

        <label className="contact-card__field">
          {content.fields.name}
          <input
            type="text"
            required
            value={formValues.name}
            onChange={handleChange('name')}
            disabled={isSending}
          />
        </label>

        <label className="contact-card__field">
          {content.fields.email}
          <input
            type="email"
            required
            value={formValues.email}
            onChange={handleChange('email')}
            disabled={isSending}
          />
        </label>

        <label className="contact-card__field">
          {content.fields.subject}
          <input
            type="text"
            required
            value={formValues.subject}
            onChange={handleChange('subject')}
            disabled={isSending}
          />
        </label>

        <label className="contact-card__field">
          {content.fields.message}
          <textarea
            required
            rows={5}
            value={formValues.message}
            onChange={handleChange('message')}
            disabled={isSending}
          />
        </label>

        <button type="submit" className="contact-card__submit" disabled={isSending}>
          {isSending ? (
            <span className="contact-card__submit-loading">
              <span className="contact-card__spinner" aria-hidden="true" />
              {content.status.sending}
            </span>
          ) : (
            content.submitLabel
          )}
        </button>

        <span className="sr-only" role="status">
          {isSending ? content.status.sending : ''}
        </span>
      </form>

      <div
        className="contact__note contact__note--quote contact__note--quote-1"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <img src={pinImage} alt="" className="contact__pin" />
        <p className="contact__quote-text">{content.quotes[0].text}</p>
        <p className="contact__quote-author">{content.quotes[0].author}</p>
      </div>

      <div
        className="contact__note contact__note--quote contact__note--quote-2"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <img src={pinImage} alt="" className="contact__pin" />
        <p className="contact__quote-text">{content.quotes[1].text}</p>
        <p className="contact__quote-author">{content.quotes[1].author}</p>
      </div>

      <footer className="contact__footer">
        <div className="contact__footer-group">
          <a className="contact__footer-item" href={`tel:${content.phone.replace(/\s+/g, '')}`}>
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 3h3l1.5 4-2 1.5a10 10 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15 15 0 0 1 2.5 4.6 1.5 1.5 0 0 1 4 3Z"
              />
            </svg>
            <span dir="ltr">{content.phone}</span>
          </a>
          <a className="contact__footer-item" href={`mailto:${content.email}`}>
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h14v10H3z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3 5 7 6 7-6"
              />
            </svg>
            <span dir="ltr">{content.email}</span>
          </a>
        </div>

        <div className="contact__footer-group contact__footer-group--icons">
          <a className="contact__footer-icon" href={`mailto:${content.email}`} aria-label="Email">
            <svg viewBox="0 0 20 20" width="24" height="22" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h14v10H3z"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3 5 7 6 7-6"
              />
            </svg>
          </a>
          <a
            className="contact__footer-icon"
            href="https://linkedin.com/in/najah-shahid/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 20 20" width="24" height="24" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 8.5v7M4.5 5.5v.01M9 15.5v-4c0-1.5 1-2.5 2.5-2.5S14 10 14 11.5v4"
              />
            </svg>
          </a>
        </div>
      </footer>

      {popup && (
        <div className="contact-popup-backdrop" onClick={() => setPopup(null)}>
          <div
            className="contact-popup"
            role="alertdialog"
            aria-modal="true"
            style={{ backgroundImage: `url(${paperTexture})` }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="contact-popup__message">
              {popup === 'success' ? content.status.success : content.status.error}
            </p>
            <button
              type="button"
              className="contact-popup__close"
              onClick={() => setPopup(null)}
              autoFocus
            >
              {content.closeLabel}
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default ContactPage
