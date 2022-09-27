import '../styles/globals.css';
// import Layout from '../components/Layout';

import awsExports from '../src/aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
