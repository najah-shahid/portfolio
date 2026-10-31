import { useEffect, useState } from 'react'
import bigMothAnimation from '../assets/big-animation-sheet.png'
import './LoadingScreen.css'

// Every image under src/assets, resolved to its final hashed URL by Vite at build time.
const assetUrls = Object.values(
  import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
) as string[]

// Safety net so a stalled request can never keep visitors on the loading screen forever.
const MAX_WAIT_MS = 10000
const FADE_MS = 400

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = url
  })
}

function useAssetsReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timeout = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS))
    const fonts = document.fonts ? document.fonts.ready.then(() => undefined) : Promise.resolve()
    const loaded = Promise.all([...assetUrls.map(preloadImage), fonts]).then(() => undefined)

    Promise.race([loaded, timeout]).then(() => {
      if (!cancelled) setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return ready
}

function LoadingScreen() {
  const ready = useAssetsReady()
  const [mothLoaded, setMothLoaded] = useState(false)

  // The moth is the loading indicator, so show it only once its own sheet has arrived rather than
  // flashing an empty box.
  useEffect(() => {
    preloadImage(bigMothAnimation).then(() => setMothLoaded(true))
  }, [])
  const [removed, setRemoved] = useState(false)

  // Keep the page from scrolling behind the overlay while it is visible.
  useEffect(() => {
    if (removed) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [removed])

  useEffect(() => {
    if (!ready) return
    const id = window.setTimeout(() => setRemoved(true), FADE_MS)
    return () => window.clearTimeout(id)
  }, [ready])

  if (removed) return null

  return (
    <div
      className={`loading-screen${ready ? ' is-hidden' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className={`loading-screen__moth${mothLoaded ? ' is-visible' : ''}`}
        style={{ backgroundImage: `url(${bigMothAnimation})` }}
        aria-hidden="true"
      />
    </div>
  )
}

export default LoadingScreen
