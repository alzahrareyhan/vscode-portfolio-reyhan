import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'reyhannandita.com',
    href: 'https://reyhannandita.com',
  },
  {
    social: 'email',
    link: 'alzahrareyhan@gmail.com',
    href: 'mailto:alzahrareyhan@gmail.com',
  },
  {
    social: 'github',
    link: 'alzahrareyhan',
    href: 'https://github.com/alzahrareyhan',
  },
  {
    social: 'linkedin',
    link: 'Reyhan Nandita Al Zahra',
    href: 'https://www.linkedin.com/in/reyhan-nandita-al-zahra-64a82a278/',
  },
  {
    social: 'instagram',
    link: '@reyhannandita',
    href: 'https://www.instagram.com/reyhannandita/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
