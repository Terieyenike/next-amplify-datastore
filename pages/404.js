// import { useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 10000);
  // }, []);

  return (
    <Layout
      pageMeta={{
        title: "Page doesn't exist",
      }}>
      <div className='container mx-auto py-16 flex flex-col justify-center items-center space-y-12 min-h-screen'>
        <div className='text-center space-y-6'>
          <h1 className='text-3xl sm:text-6xl'>404 - Page not found</h1>
          <p className='text-xl'>
            We cannot find the page you are looking for.
          </p>
        </div>
        <Link href='/'>
          <a className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50 whitespace-nowrap'>
            Go back home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
