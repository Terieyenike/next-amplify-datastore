// import Menu from '../pages/recipe/[id]';
import Logo from './Logo';
import Link from 'next/link';

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

// <Link href='/menu-form'>
//   <a>Menu Form</a>
// </Link>
