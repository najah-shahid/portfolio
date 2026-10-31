import type { Language } from './translations'

export interface EducationEntry {
  dateRange: string
  institution: string
  location: string
  program: string
}

export interface SkillCategory {
  id: 'languages' | 'frameworks' | 'tools'
  label: string
  items: string[]
}

export interface AboutContent {
  name: string
  role: string
  sectionLabels: {
    aboutMe: string
    education: string
    skills: string
  }
  bio: string[]
  education: EducationEntry[]
  skillCategories: SkillCategory[]
}

export const aboutContent: Record<Language, AboutContent> = {
  en: {
    name: 'Najah Shahid',
    role: 'Full-Stack Developer',
    sectionLabels: {
      aboutMe: 'About Me',
      education: 'Education',
      skills: 'Skills',
    },
    bio: [
      "I'm Najah, a Computer Science graduate from LUMS in Pakistan. My background spans full-stack development, AI/ML research, and UI/UX design. I've worked across the full stack — React, Node.js, MongoDB, Flutter — and have shipped production-ready applications, from a client-facing web application to a senior project connecting architects, clients, and vendors.",
      "Beyond development, I'm drawn to problems at the intersection of technology and people. That interest has led me into computer vision research (wildfire detection using YOLO and ResNet) and HCI work designing trauma-informed digital interventions for children in underserved communities.",
    ],
    education: [
      {
        dateRange: 'Sept 2022 – July 2026',
        institution: 'Lahore University of Management Sciences',
        location: 'Lahore, Pakistan',
        program: 'BSc Computer Science',
      },
      {
        dateRange: 'Sept 2018 – June 2022',
        institution: 'Jawahir Al-Riyadh International School',
        location: 'Riyadh, Saudi Arabia',
        program: 'High School',
      },
    ],
    skillCategories: [
      {
        id: 'languages',
        label: 'Languages',
        items: ['C/C++', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'LaTeX', 'Dart'],
      },
      {
        id: 'frameworks',
        label: 'Frameworks',
        items: ['React', 'Node.js', 'MongoDB', 'Flutter'],
      },
      {
        id: 'tools',
        label: 'Developer Tools',
        items: ['VS Code', 'Git', 'Postman', 'Figma', 'Jupyter Notebook', 'Docker', 'Kubernetes'],
      },
    ],
  },
  ar: {
    name: 'نجاح شاهد',
    role: 'مطوّرة ويب متكامل',
    sectionLabels: {
      aboutMe: 'من أنا',
      education: 'التعليم',
      skills: 'المهارات',
    },
    bio: [
      'أنا نجاح، خريجة علوم الحاسب من جامعة لاهور للعلوم الإدارية (LUMS) في باكستان. أمتلك خلفية متنوعة في تطوير البرمجيات المتكامل (Full-Stack Development)، وأبحاث الذكاء الاصطناعي وتعلّم الآلة، وتصميم واجهات وتجارب المستخدم (UI/UX). عملت على تطوير حلول تقنية متكاملة باستخدام تقنيات مثل React وNode.js وMongoDB وFlutter، وأسهمت في إطلاق تطبيقات جاهزة للاستخدام الفعلي، بدءًا من تطبيق ويب موجّه للعملاء، وصولًا إلى مشروع تخرّج يربط بين المعماريين والعملاء والمورّدين ضمن منصة واحدة.',
      'وإلى جانب التطوير البرمجي، أهتم باستكشاف الحلول للمشكلات التي تقع عند تقاطع التقنية واحتياجات الإنسان. وقد قادني هذا الاهتمام إلى العمل في أبحاث الرؤية الحاسوبية، بما في ذلك تطوير أنظمة للكشف عن حرائق الغابات باستخدام نماذج YOLO وResNet، بالإضافة إلى العمل في مجال التفاعل بين الإنسان والحاسوب (HCI)، حيث شاركت في تصميم تدخلات رقمية تراعي الصدمات النفسية واحتياجات الأطفال في المجتمعات الأقل حظًا من حيث الوصول إلى الخدمات والموارد.',
    ],
    education: [
      {
        dateRange: 'سبتمبر 2022 – يوليو 2026',
        institution: 'جامعة لاهور للعلوم الإدارية',
        location: 'لاهور، باكستان',
        program: 'بكالوريوس في علوم الحاسب',
      },
      {
        dateRange: 'سبتمبر 2018 – يونيو 2022',
        institution: 'مدرسة جواهر الرياض العالمية',
        location: 'الرياض، المملكة العربية السعودية',
        program: 'الثانوية العامة',
      },
    ],
    skillCategories: [
      {
        id: 'languages',
        label: 'لغات البرمجة',
        items: ['C/C++', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'LaTeX', 'Dart'],
      },
      {
        id: 'frameworks',
        label: 'الأطر والمكتبات',
        items: ['React', 'Node.js', 'MongoDB', 'Flutter'],
      },
      {
        id: 'tools',
        label: 'أدوات المطوّرين',
        items: ['VS Code', 'Git', 'Postman', 'Figma', 'Jupyter Notebook', 'Docker', 'Kubernetes'],
      },
    ],
  },
}
