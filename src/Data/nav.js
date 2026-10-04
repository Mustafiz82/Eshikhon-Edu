// constants/navigation.js (or wherever your nav data lives)

export const navDropdowns = [
  {
    title: 'ASSET',
    href: '/programs/asset',
    items: [
      { 
        title: 'Digital Marketing', 
        href: '/programs/asset/digital-marketing' 
      },
      { 
        title: 'Web Design for Freelancing (Level 3)', 
        href: '/programs/asset/web-design-freelancing-level-3',
        badge: 'Level 3' 
      },
      { 
        title: 'Web Design with Python (Level 4)', 
        href: '/programs/asset/web-design-python-level-4',
        badge: 'Level 4' 
      },
      { 
        title: 'Graphic Design', 
        href: '/programs/asset/graphic-design' 
      },
    ],
  },
  {
    title: 'RPL',
    href: '/programs/rpl',
    items: [
      { 
        title: 'Digital Marketing for Freelancing', 
        href: '/programs/rpl/digital-marketing-for-freelancing' 
      },
      { 
        title: 'Graphic Design', 
        href: '/programs/rpl/graphic-design' 
      },
      { 
        title: 'Web Design & Development for Freelancing', 
        href: '/programs/rpl/web-design-dev-freelancing' 
      },
      { 
        title: 'Professional Customer Services', 
        href: '/programs/rpl/professional-customer-services' 
      },
      { 
        title: 'IT Support Service', 
        href: '/programs/rpl/it-support-service' 
      },
    ],
  },
  {
    title: 'Industrial Attachment',
    href: '/programs/industrial-attachment',
    items: [
      { 
        title: 'Digital Marketing', 
        href: '/programs/industrial-attachment/digital-marketing' 
      },
      { 
        title: 'Graphic Design', 
        href: '/programs/industrial-attachment/graphic-design' 
      },
      { 
        title: 'Ethical Hacking', 
        href: '/programs/industrial-attachment/ethical-hacking' 
      },
      { 
        title: 'Web Design & Development', 
        href: '/programs/industrial-attachment/web-design-development' 
      },
      { 
        title: 'AutoCAD', 
        href: '/programs/industrial-attachment/autocad' 
      },
      { 
        title: 'UI/UX Design', 
        href: '/programs/industrial-attachment/ui-ux-design' 
      },
    ],
  },
];

export const staticNavLinks = [
  { title: 'All Courses', href: 'http://eshikhon.com.bd/batch' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact', isButton: true },
];