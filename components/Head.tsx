import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Reyhan Nandita Al Zahra is an enthusiastic data scientist, AI engineer, and ML engineer building smart systems and solutions you'll enjoy using"
      />
     <meta
        name="keywords"
        content="reyhan nandita al zahra, reyhan, nandita, data scientist, ai engineer, ml engineer, data science portfolio, reyhan data scientist, machine learning, ai solutions, reyhan nandita al zahra portfolio"
      />

      <meta property="og:title" content="Reyhan Nandita Al Zahra's Portfolio" />
      <meta
        property="og:description"
        content="A data scientist, AI engineer, and ML engineer building intelligent systems and solutions you'll enjoy using."
      />

      <meta property="og:image" content="https://imgur.com/a/L3pFK77" />
      <meta property="og:url" content="https://reyhannandita.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Reyhan Nandita Al Zahra',
};
