import type { Language } from './translations'

export interface Quote {
  text: string
  author: string
}

export interface ContactContent {
  heading: string
  fields: {
    name: string
    email: string
    subject: string
    message: string
  }
  submitLabel: string
  closeLabel: string
  status: {
    sending: string
    success: string
    error: string
  }
  designThinkingSteps: string[]
  reminderTitle: string
  reminderItems: string[]
  quotes: Quote[]
  phone: string
  email: string
}

export const contactContent: Record<Language, ContactContent> = {
  en: {
    heading: 'Contact Me',
    fields: {
      name: 'Name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
    },
    submitLabel: 'Send',
    closeLabel: 'Close',
    status: {
      sending: 'Sending…',
      success: 'Your letter has been sent. Please wait for a reply.',
      error:
        'Oh dear! Your letter got lost somewhere along the way. Please try sending it again?',
    },
    designThinkingSteps: ['Empathize', 'Define', 'Ideate', 'Prototype', 'Test'],
    reminderTitle: 'Reminder',
    reminderItems: [
      'Single Responsibility',
      'Open/Closed',
      'Liskov Substitution',
      'Interface Segregation',
      'Dependency Inversion',
    ],
    quotes: [
      {
        text: 'Nothing in life is to be feared, it is only to be understood.',
        author: '— Marie Curie',
      },
      {
        text: 'Beauty of whatever kind, in its supreme development, invariably excites the sensitive soul to tears',
        author: '— Edgar Allan Poe',
      },
    ],
    phone: '+966 591200906',
    email: 'najahshahidqaseem@gmail.com',
  },
  ar: {
    heading: 'اتصل بي',
    fields: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
    },
    submitLabel: 'إرسل',
    closeLabel: 'إغلاق',
    status: {
      sending: 'جارٍ الإرسال…',
      success: 'تم إرسال رسالتك. يرجى انتظار الرد.',
      error:
        'يا للأسف! ضاعت رسالتك في الطريق. حاول إرسالها مرة أخرى من فضلك.',
    },
    designThinkingSteps: [
      'التعاطف',
      'تحديد المشكلة',
      'توليد الأفكار',
      'إنشاء نموذج أولي',
      'الاختبار',
    ],
    reminderTitle: 'تذكير',
    reminderItems: [
      'مبدأ المسؤولية الواحدة',
      'مبدأ الانفتاح والإغلاق',
      'مبدأ إحلال ليسكوف',
      'مبدأ فصل الواجهات',
      'مبدأ عكس التبعيات',
    ],
    quotes: [
      {
        text: 'لا شيء في الحياة يستحق الخوف، بل يستحق الفهم فقط.',
        author: '— ماري كوري',
      },
      {
        text: 'إن الجمال، أيًّا كان نوعه، حين يبلغ ذروته، يثير في النفس المرهفة الدموع حتمًا.',
        author: '— إدغار آلان بو',
      },
    ],
    phone: '+966 591200906',
    email: 'najahshahidqaseem@gmail.com',
  },
}
