const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-500'>
      <div className='flex flex-col justify-center items-center py-5'>
        <address>
          <span>
            <a href='https://twitter.com/terieyenike'>Teri </a>
          </span>
          &copy; {new Date().getFullYear()}
        </address>
        <div>
          <span>AWS Amplify x Hashnode hackathon.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
