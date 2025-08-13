import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Reyhan Nandita Al Zahra</h1>
        <div className={styles.subtitle}>Data Scientist, AI Engineer, ML Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I'm a fresh graduate from Indramayu, West Java. 
              I'm passionate about Data Science, 
              AI Engineering, and ML Engineering, and I’m eager to 
              apply my knowledge and skills in these fields
            </p>

            <p className={styles.paragraph}>
              I’m focused on extracting actionable insights from complex datasets, 
              developing AI-driven applications, and building robust machine learning models.
              With expertise in Python, R, and machine learning frameworks like TensorFlow and 
              Scikit-Learn.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Tessact</span> as
              Software Engineer 2, working with a lean team of 4 frontend
              engineers to build a next-gen video creation suite for the people
              of video.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              collaborative video reviewing and editing to the platform. I also
              maintain our in-house component library, icon library and website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Apart from programming and writing, I enjoy watching movies, 
              listening to music, and playing musical instruments, especially the guitar.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
