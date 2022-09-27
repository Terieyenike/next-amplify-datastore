import Link from 'next/link';
import { CakeIcon } from '@heroicons/react/solid';

const Logo = () => (
  <Link href='/'>
    <a className='flex items-center space-x-1 text-red-600'>
      <CakeIcon className='w-8 h-8 flex-shrink-0' />
      <span className='font-bold text-lg tracking-light whitespace-nowrap'>
        Eat & Nourish
      </span>
    </a>
  </Link>
);

export default Logo;
