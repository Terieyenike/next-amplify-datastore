import Layout from '../components/Layout';
export default function Form() {
  const handleMenu = async (e) => {
    e.preventDefault();
    // await DataStore.save(
    //   new Recipe({
    //     title: 'My First Post',
    //     description: 'saved',
    //     cookingTime: 60,
    //     featuredImage: '',
    //     method: '',
    //     ingredients: '',
    //   })
    // );
    console.log('waiting!!!');
  };

  return (
    <Layout
      pageMeta={{
        title: 'Supply us your favourite meals',
        description:
          'Share your favourite meals so the world knows about your culture and food.',
      }}>
      <div className='max-w-7xl mx-auto w-11/12 min-h-screen'>
        <div className='py-4'>
          <form>
            <button onClick={handleMenu}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
