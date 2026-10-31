export type Language = 'en' | 'ar'

export interface LandingContent {
  welcomeTo: string
  title: string
  badges: string[]
  scrollPrompt: string
  navLinks: {
    home: string
    aboutMe: string
    projects: string
    contactMe: string
  }
}

export const landingContent: Record<Language, LandingContent> = {
  en: {
    welcomeTo: 'Welcome to',
    title: "Najah Shahid's Portfolio",
    badges: [
      'Full-Stack Developer',
      'Computer Science Undergraduate',
      'Creative Problem-Solver',
    ],
    scrollPrompt: 'Scroll to Explore',
    navLinks: {
      home: 'Home',
      aboutMe: 'About Me',
      projects: 'Projects',
      contactMe: 'Contact Me',
    },
  },
  ar: {
    welcomeTo: 'أهلاً بكم في',
    title: 'معرض أعمال نجاح شاهد',
    badges: [
      'مطوّرة برمجيات متكاملة',
      'طالبة بكالوريوس علوم الحاسوب',
      'مبدعة في حل المشكلات',
    ],
    scrollPrompt: 'مرر للأسفل للاستكشاف',
    navLinks: {
      home: 'الرئيسية',
      aboutMe: 'من أنا',
      projects: 'المشاريع',
      contactMe: 'اتصل بي',
    },
  },
}
