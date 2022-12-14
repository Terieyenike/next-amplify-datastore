import { useState } from 'react';
import { DataStore } from 'aws-amplify';
import Layout from '../components/Layout';
import { CakeIcon } from '@heroicons/react/solid';
import { Recipe } from '../src/models';

export default function Form() {
  const defaultFormFiels = {
    title: '',
    description: '',
    cookingTime: '',
    featuredImage: '',
    method: '',
    ingredients: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFiels);

  const {
    title,
    description,
    cookingTime,
    featuredImage,
    method,
    ingredients,
  } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });

    console.log(name, value);
  };

  const handleMenu = async (e) => {
    e.preventDefault();
    await DataStore.save(
      new Recipe({
        title: title,
        description: description,
        cookingTime: parseInt(cookingTime),
        featuredImage: '',
        method: method,
        ingredients: ingredients,
      })
    );
  };

  return (
    <Layout
      pageMeta={{
        title: 'Supply us your favourite meals',
        description:
          'Share your favourite meals so the world knows about your culture and food.',
      }}>
      <div className='flex flex-col justify-center items-center max-w-7xl mx-auto w-11/12 min-h-screen'>
        <div className='py-4'>
          <CakeIcon className='w-12 h-12 flex-shrink-0 text-red-600' />
          <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
            Share a menu
          </h2>
          <div className='bg-white shadow rounded-lg'>
            <form onSubmit={handleMenu}>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Title
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    value={title}
                    name='title'
                    required
                    className='w-full'
                    placeholder='Title of food'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Description
                </label>
                <div className='mt-1'>
                  <textarea
                    required
                    value={description}
                    name='description'
                    onChange={handleChange}
                    className='w-full'></textarea>
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Cooking Time
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    value={cookingTime}
                    name='cookingTime'
                    placeholder='Time in minutes'
                    required
                    onChange={handleChange}
                    className='w-full'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Upload a food menu
                </label>
                <div className='mt-1'>
                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    name='featuredImage'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Method
                </label>
                <div className='mt-1'>
                  <textarea
                    required
                    value={method}
                    name='method'
                    className='w-full'
                    onChange={handleChange}></textarea>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Ingredients
                </label>
                <div className='mt-1'>
                  <textarea
                    required
                    value={ingredients}
                    name='ingredients'
                    className='w-full'
                    onChange={handleChange}></textarea>
                </div>
              </div>
              <button
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4'
                type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
