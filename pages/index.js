import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>


        <p> Full stack developer with at least 3 years of professional experience!</p>
        <p>
          On this website you'll find a blogs about why I should start using Next.js instead of React.js
        </p>

        <h1>
          Checkout <Link href="/posts/first-post">blog 1</Link>
        </h1>



      </section>
    </Layout>
  );
}