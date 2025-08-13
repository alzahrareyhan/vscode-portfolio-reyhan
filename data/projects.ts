export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'SKM Kabupaten Cirebon',
    description:
      'Public Satisfaction Survey Portal for Cirebon Regency. A Laravel-based system for efficient, transparent, and integrated SKM submission, management, and analysis.',
    logo: '/logos/logo.png',
    link: 'https://github.com/alzahrareyhan/SKM-DISKOMINFO-CIREBON/',
    slug: 'SKM Kabupaten Cirebon',
  },

  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/alzahrareyhan/vscode-portfolio-reyhan',
    slug: 'vscode-portfolio',
  },

   {
    title: 'Portofolio - UI/UX Designer & Web Developer',
    description:
      'Showcasing creative UI/UX designs and modern web development projects.',
    logo: '/logos/html_icon.svg',
    link: 'https://github.com/alzahrareyhan/portofolio-reyhannanditaalzahra',
    slug: 'Portofolio - UI/UX Designer & Web Developer',
  },

  {
    title: 'Computer Vision - Trash Detection',
    description:
      'An intelligent and efficient way to detect and classify trash using computer vision for a cleaner environment.',
    logo: '/logos/Py.png',
    link: 'https://github.com/alzahrareyhan/Computer-Vision-Trash-Detection',
    slug: 'Computer Vision - Trash Detection',
  },

  {
    title: 'Voyage',
    description:
      'Navigate Bali by bus with live schedules, real-time tracking, and easy booking—built with React for a fast and seamless travel experience',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/alzahrareyhan/Voyage',
    slug: 'Voyage',
  },

  {
    title: 'Mango Leaf Disease Detection',
    description:
      'Mango leaf disease detection using feature fusion of ResNet50V2 and EfficientNetV2, achieving 99.75% accuracy.',
    logo: '/logos/py.png',
    link: 'https://www.kaggle.com/code/reyhannandita/mango-feature-fusion-resnet50v2-and-efficientnetv2',
    slug: 'Mango Leaf Disease Detection',
  },
  {
    title: 'Your Skin - Beatuy Care Prototype',
    description:
      'A prototype beauty care platform offering doctor consultations, skincare tips, skin disease info, and mental health support in one place',
    logo: '/logos/figma.svg',
    link: 'https://www.figma.com/proto/MKrAx1HtZpTQU3GsA2OipT/Beauty-Care-Prototype?node-id=416-6896&p=f&t=hnPAc023bLUny8fp-0&scaling=scale-down&content-scaling=fixed&page-id=145%3A3339&starting-point-node-id=416%3A6896',
    slug: 'Your Skin - Beatuy Care Prototype',
  },
];
