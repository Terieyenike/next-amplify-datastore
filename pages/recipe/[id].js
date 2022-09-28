import Link from 'next/link';
import Layout from '../../components/Layout';
import { DataStore } from 'aws-amplify';
import { withSSRContext } from 'aws-amplify';
import { serializeModel } from '@aws-amplify/datastore/ssr';
import { Recipe } from '../../src/models';
import Image from 'next/future/image';
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';

export async function getServerSideProps({ params }) {
  const SSR = withSSRContext();
  const data = await SSR.DataStore.query(Recipe, params.id);

  return {
    props: {
      recipe: serializeModel(data),
    },
  };
}

export default function Menu({ recipe }) {
  if (!recipe) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <div className='max-w-7xl mx-auto w-11/12 py-10'>
        <Link href='/'>
          <a>
            <ChevronDoubleLeftIcon className='w-8 h-8 flex-shrink-0 mb-4' />
          </a>
        </Link>
        <Image
          src={recipe.featuredImage}
          alt='menu detail'
          width={500}
          height={500}
          className='md:w-full lg:w-2/4'
        />
        <h2 className='mt-2 mb-4'>{recipe.title}</h2>
        <div>
          <span className='font-bold uppercase'>Description</span>
          <p className='mb-6 max-w-6xl'>{recipe.description}</p>
          <span className='font-bold uppercase'>Ingredients</span>
          <p className='mb-6 max-w-6xl'>{recipe.ingredients}</p>
          <span className='font-bold uppercase'>Method</span>
          <p className='max-w-6xl'>{recipe.method}</p>
        </div>
      </div>
    </Layout>
  );
}
