import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, pageMeta }) {
  const meta = {
    title: 'Recipes, Delicious dishes',
    description: 'Food that bring people together',
    type: 'website',
    ...pageMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <link rel='icon' favicon='' />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
