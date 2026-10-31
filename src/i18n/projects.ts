import type { Language } from './translations'

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectEntry {
  id: string
  title: string
  dateRange: string
  subtitle: string
  location: string
  bullets: string[]
  tools: string[]
  links: ProjectLink[]
}

export interface ProjectCategory {
  id: 'workExperience' | 'academicProjects' | 'researchProjects'
  label: string
  projects: ProjectEntry[]
}

export interface ProjectsContent {
  tabs: ProjectCategory[]
}

export const projectsContent: Record<Language, ProjectsContent> = {
  en: {
    tabs: [
      {
        id: 'workExperience',
        label: 'Work Experience',
        projects: [
          {
            id: 'web-developer',
            title: 'Web Developer',
            dateRange: 'July 2025 – August 2025',
            subtitle: 'Colourish Bubble',
            location: 'Lahore, Pakistan',
            bullets: [
              'Developed and deployed a full-stack web application using React and PostgreSQL, translating client requirements into a production-ready product from design to deployment.',
              'Designed responsive UI mockups in Figma, accelerating stakeholder approval and cutting redesign cycles through iterative feedback loops.',
            ],
            tools: ['React', 'Figma', 'PostgreSQL'],
            links: [{ label: 'Website', href: 'http://colourishbubble.com/' }],
          },
          {
            id: 'teaching-assistant',
            title: 'Teaching Assistant',
            dateRange: 'January 2025 – May 2025',
            subtitle: 'LUMS',
            location: 'Lahore, Pakistan',
            bullets: [
              'Facilitated weekly office hours to provide students with academic support and guidance.',
              "Evaluated programming assignments and conducted vivas to assess students' understanding of the assignment material.",
            ],
            tools: ['C++'],
            links: [],
          },
        ],
      },
      {
        id: 'academicProjects',
        label: 'Academic Projects',
        projects: [
          {
            id: 'archconnect',
            title: 'ArchConnect',
            dateRange: 'September 2025 – April 2026',
            subtitle: 'Senior Year Project',
            location: 'LUMS, Lahore',
            bullets: [
              'Led a 5-member team to develop a centralized communication platform connecting architects, clients, and vendors, managing sprints, deadlines, and milestone delivery end-to-end.',
              'Built the full-stack system using Flutter (frontend), Node.js + Express (API), MongoDB (database), and AWS S3 (file storage).',
              'Implemented Google OAuth 2.0 authentication for secure, frictionless user login.',
              'Built an interactive Gantt chart for project scheduling and real-time progress tracking.',
              'Integrated Google Calendar API to enable in-app meeting scheduling, reducing coordination overhead for users.',
            ],
            tools: [
              'Flutter',
              'Node.js',
              'Express.js',
              'MongoDB',
              'AWS S3',
              'Kubernetes',
              'Docker',
              'Google OAuth',
            ],
            links: [{ label: 'Website', href: 'http://arch-connect-nine.vercel.app/' }],
          },
          {
            id: 'gul',
            title: 'Gul',
            dateRange: 'January 2026 – May 2026',
            subtitle: 'Human-Computer Interaction',
            location: 'LUMS, Lahore',
            bullets: [
              'Conducted semi-structured interviews in Pakistani orphanages to understand psychosocial challenges and needs, then ideated 30+ design concepts informed by research and existing SEL tools.',
              "Designed Gul, a trauma-informed, culturally appropriate system supporting children's emotional development through guided conversations and group storytelling, with a caregiver dashboard for child-level behavioral insights.",
              'Prototyped from paper sketches to a high-fidelity Figma prototype and conducted usability evaluations, measuring task completion, error rate, and behavioral observations across both user groups.',
            ],
            tools: ['Figma'],
            links: [
              {
                label: 'Figma',
                href: 'https://www.figma.com/proto/6QFDjh929XvRLUVMnAhPjL/Gul?node-id=0-1&t=ZeFL9YOhtCS1xCW0-1',
              },
              {
                label: 'Github',
                href: 'https://github.com/najah-shahid/Gul-Digital-Garden',
              },
            ],
          },
          {
            id: 'o-level-vault',
            title: 'O Level Vault',
            dateRange: 'January 2025 – May 2025',
            subtitle: 'Software Engineering',
            location: 'LUMS, Lahore',
            bullets: [
              'Co-developed a full-stack MERN application serving O Level students with notes, past papers, AI-generated quizzes, and personalized progress dashboards.',
              'Designed and implemented a parent-student account linking system, enabling real-time monitoring of academic performance.',
              'Built admin controls for user management, improving platform security and maintainability.',
              'Applied best practices in modular architecture, JWT authentication, and responsive UI across both frontend and backend layers.',
            ],
            tools: ['MERN Stack', 'MongoDB', 'Python'],
            links: [
              { label: 'Website', href: 'https://o-level-vault-zr4n.vercel.app/' },
            ],
          },
          {
            id: 'anime-prediction',
            title: 'Anime Prediction',
            dateRange: 'January 2025 – May 2025',
            subtitle: 'Data Science',
            location: 'LUMS, Lahore',
            bullets: [
              'Preprocessed and analyzed a Kaggle dataset of anime metadata using Python (NumPy, Pandas, Matplotlib, scikit-learn), surfacing actionable trends through exploratory analysis.',
              'Engineered features including log transformations and trained a Linear Regression model to predict user ratings, demonstrating end-to-end ML pipeline experience.',
              'Documented findings and published a Medium blog post to share methodology and insights with the ML community.',
            ],
            tools: ['Python'],
            links: [
              {
                label: 'Details',
                href: 'https://medium.com/@sajeelanwer3/anime-rating-prediction-model-1634454cba9e',
              },
            ],
          },
        ],
      },
      {
        id: 'researchProjects',
        label: 'Research Projects',
        projects: [
          {
            id: 'wildfire-detection',
            title: 'Wildfire Detection',
            dateRange: 'January 2025 – May 2025',
            subtitle: 'LUMS',
            location: 'Lahore, Pakistan',
            bullets: [
              'Reviewed 10+ papers on CNN-based wildfire detection, synthesizing current techniques and gaps in the literature.',
              'Fine-tuned YOLO models on day and night wildfire datasets, improving detection accuracy through a Mixture of Experts strategy.',
              'Trained a ResNet classifier to route input images to the correct expert model based on lighting conditions, enhancing overall model accuracy.',
              'Produced a comprehensive research report detailing model design, methodology, and performance evaluation.',
            ],
            tools: ['Python', 'Jupyter Notebook'],
            links: [
              { label: 'GitHub', href: 'https://github.com/najah-shahid/fire-detection-project' },
            ],
          },
        ],
      },
    ],
  },
  ar: {
    tabs: [
      {
        id: 'workExperience',
        label: 'الخبرات المهنية',
        projects: [
          {
            id: 'web-developer',
            title: 'مطوّرة ويب',
            dateRange: 'يوليو 2025 – أغسطس 2025',
            subtitle: 'Colourish Bubble',
            location: 'لاهور، باكستان',
            bullets: [
              'طوّرت وأطلقت تطبيق ويب متكاملًا باستخدام React وPostgreSQL، وحوّلت متطلبات العميل إلى منتج جاهز للاستخدام الفعلي، بدءًا من التصميم وصولًا إلى النشر.',
              'صمّمت نماذج أولية لواجهات مستخدم متجاوبة باستخدام Figma، مما ساهم في تسريع اعتماد التصاميم من قِبل أصحاب المصلحة وتقليل دورات إعادة التصميم من خلال التحسين المستمر بناءً على الملاحظات.',
            ],
            tools: ['React', 'Figma', 'PostgreSQL'],
            links: [{ label: 'الموقع الإلكتروني', href: 'http://colourishbubble.com/' }],
          },
          {
            id: 'teaching-assistant',
            title: 'مساعدة تدريس',
            dateRange: 'يناير 2025 – مايو 2025',
            subtitle: 'جامعة لاهور للعلوم الإدارية (LUMS)',
            location: 'لاهور، باكستان',
            bullets: [
              'قدّمت ساعات مكتبية أسبوعية لدعم الطلاب أكاديميًا وتوجيههم في دراستهم.',
              'قيّمت الواجبات البرمجية وأجريت اختبارات شفهية لتقييم مدى استيعاب الطلاب للمفاهيم والمواد المرتبطة بالواجبات.',
            ],
            tools: ['C++'],
            links: [],
          },
        ],
      },
      {
        id: 'academicProjects',
        label: 'المشاريع الأكاديمية',
        projects: [
          {
            id: 'archconnect',
            title: 'ArchConnect',
            dateRange: 'سبتمبر 2025 – أبريل 2026',
            subtitle: 'مشروع التخرج',
            location: 'جامعة لاهور للعلوم الإدارية، لاهور',
            bullets: [
              'قدت فريقًا مكوّنًا من خمسة أعضاء لتطوير منصة تواصل مركزية تربط بين المعماريين والعملاء والمورّدين، مع الإشراف على دورات العمل والمواعيد النهائية وتسليم المراحل الرئيسية للمشروع من البداية إلى النهاية.',
              'طوّرت النظام المتكامل باستخدام Flutter للواجهة الأمامية، وNode.js وExpress لواجهات برمجة التطبيقات، وMongoDB لقاعدة البيانات، وAWS S3 لتخزين الملفات.',
              'نفّذت نظام مصادقة باستخدام Google OAuth 2.0 لتوفير تسجيل دخول آمن وسلس للمستخدمين.',
              'طوّرت مخطط جانت تفاعليًا لتخطيط المشاريع ومتابعة تقدّمها في الوقت الفعلي.',
              'دمجت Google Calendar API لإتاحة جدولة الاجتماعات من داخل المنصة، مما قلّل الجهد اللازم لتنسيق المواعيد بين المستخدمين.',
            ],
            tools: [
              'Flutter',
              'Node.js',
              'Express.js',
              'MongoDB',
              'AWS S3',
              'Kubernetes',
              'Docker',
              'Google OAuth',
            ],
            links: [{ label: 'الموقع الإلكتروني', href: 'http://arch-connect-nine.vercel.app/' }],
          },
          {
            id: 'gul',
            title: 'Gul',
            dateRange: 'يناير 2026 – مايو 2026',
            subtitle: 'التفاعل بين الإنسان والحاسوب',
            location: 'جامعة لاهور للعلوم الإدارية، لاهور',
            bullets: [
              'أجريت مقابلات شبه منظّمة في دور الأيتام في باكستان لفهم التحديات والاحتياجات النفسية والاجتماعية، ثم طوّرت أكثر من 30 فكرة تصميمية استنادًا إلى نتائج البحث وأدوات التعلّم الاجتماعي والعاطفي المتاحة.',
              'صمّمت Gul، وهو نظام يراعي آثار الصدمات النفسية ويتناسب مع السياق الثقافي المحلي، لدعم النمو العاطفي للأطفال من خلال المحادثات الموجّهة وسرد القصص الجماعي، إلى جانب لوحة تحكّم لمقدّمي الرعاية تتيح الاطلاع على مؤشرات سلوكية خاصة بكل طفل.',
              'طوّرت نماذج أولية بدءًا من الرسومات الورقية وصولًا إلى نموذج تفاعلي عالي الدقة باستخدام Figma، وأجريت تقييمات لقابلية الاستخدام من خلال قياس معدلات إنجاز المهام والأخطاء وملاحظة سلوك المستخدمين لدى كلتا الفئتين.',
            ],
            tools: ['Figma'],
            links: [
              {
                label: 'تصميم Figma',
                href: 'https://www.figma.com/proto/6QFDjh929XvRLUVMnAhPjL/Gul?node-id=0-1&t=ZeFL9YOhtCS1xCW0-1',
              },
              {
                label: 'Github',
                href: 'https://github.com/najah-shahid/Gul-Digital-Garden',
              },
            ],
          },
          {
            id: 'o-level-vault',
            title: 'O Level Vault',
            dateRange: 'يناير 2025 – مايو 2025',
            subtitle: 'هندسة البرمجيات',
            location: 'جامعة لاهور للعلوم الإدارية، لاهور',
            bullets: [
              'شاركت في تطوير تطبيق متكامل باستخدام حزمة MERN لخدمة طلاب المرحلة الثانوية البريطانية (O Level)، من خلال توفير الملخصات والملاحظات والاختبارات السابقة والاختبارات المُنشأة بالذكاء الاصطناعي ولوحات متابعة الأداء الأكاديمي المخصّصة.',
              'صمّمت ونفّذت نظامًا لربط حسابات أولياء الأمور بحسابات الطلاب، مما أتاح متابعة الأداء الأكاديمي في الوقت الفعلي.',
              'طوّرت أدوات إدارية لإدارة المستخدمين، مما عزّز أمان المنصة وسهولة صيانتها.',
              'طبّقت أفضل الممارسات في تصميم البنية البرمجية المعيارية، والمصادقة باستخدام JWT، وتصميم واجهات متجاوبة على مستوى الواجهتين الأمامية والخلفية.',
            ],
            tools: ['MERN Stack', 'MongoDB', 'Python'],
            links: [
              { label: 'الموقع الإلكتروني', href: 'https://o-level-vault-zr4n.vercel.app/' },
            ],
          },
          {
            id: 'anime-prediction',
            title: 'التنبؤ بتقييمات الأنمي',
            dateRange: 'يناير 2025 – مايو 2025',
            subtitle: 'علم البيانات',
            location: 'جامعة لاهور للعلوم الإدارية، لاهور',
            bullets: [
              'عالجت مسبقًا مجموعة بيانات من Kaggle تحتوي على بيانات وصفية عن أعمال الأنمي، وحلّلتها باستخدام Python ومكتبات NumPy وPandas وMatplotlib وscikit-learn، واستخلصت اتجاهات ذات دلالة من خلال التحليل الاستكشافي للبيانات.',
              'هندست خصائص البيانات، بما في ذلك التحويلات اللوغاريتمية، ودرّبت نموذج انحدار خطي للتنبؤ بتقييمات المستخدمين، مما أتاح تطبيق مراحل تطوير نموذج تعلّم آلة متكامل.',
              'وثّقت النتائج والمنهجية ونشرت مقالًا على منصة Medium لمشاركة الأفكار والاستنتاجات مع مجتمع تعلّم الآلة.',
            ],
            tools: ['Python'],
            links: [
              {
                label: 'التفاصيل',
                href: 'https://medium.com/@sajeelanwer3/anime-rating-prediction-model-1634454cba9e',
              },
            ],
          },
        ],
      },
      {
        id: 'researchProjects',
        label: 'المشاريع البحثية',
        projects: [
          {
            id: 'wildfire-detection',
            title: 'الكشف عن حرائق الغابات',
            dateRange: 'يناير 2025 – مايو 2025',
            subtitle: 'جامعة لاهور للعلوم الإدارية (LUMS)',
            location: 'لاهور، باكستان',
            bullets: [
              'راجعت أكثر من 10 أوراق بحثية حول الكشف عن حرائق الغابات باستخدام الشبكات العصبية الالتفافية (CNN)، ولخّصت التقنيات الحالية والفجوات البحثية في هذا المجال.',
              'أجريت ضبطًا دقيقًا لنماذج YOLO باستخدام مجموعات بيانات لحرائق الغابات نهارًا وليلًا، وحسّنت دقة الكشف من خلال تطبيق استراتيجية مزيج الخبراء (Mixture of Experts).',
              'درّبت نموذج تصنيف ResNet لتوجيه الصور المدخلة إلى النموذج المتخصص المناسب وفقًا لظروف الإضاءة، مما عزّز الدقة الإجمالية للنظام.',
              'أعددت تقريرًا بحثيًا شاملًا يوضّح تصميم النماذج والمنهجية المتبعة وتقييم الأداء.',
            ],
            tools: ['Python', 'Jupyter Notebook'],
            links: [
              { label: 'GitHub', href: 'https://github.com/najah-shahid/fire-detection-project' },
            ],
          },
        ],
      },
    ],
  },
}
