import Logo from './Logo';

const Header = () => {
  return (
    <header className='border-b border-gray-100'>
      <div className='max-w-7xl mx-auto w-11/12 flex justify-between items-center py-4'>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
