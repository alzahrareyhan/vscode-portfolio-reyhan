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
              Hey! I&apos;m a fresh graduate from Indramayu, West Java. 
              I&apos;m passionate about Data Science, 
              AI Engineering, and ML Engineering, and I&rsquo;m eager to 
              apply my knowledge and skills in these fields.
            </p>

            <p className={styles.paragraph}>
              I&rsquo;m focused on extracting actionable insights from complex datasets, 
              developing AI-driven applications, and building robust machine learning models.
              With expertise in Python, R, and machine learning frameworks like TensorFlow and 
              Scikit-Learn.
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
