import Image from 'next/image';
import Link from 'next/link';
const RecipeCard = ({ recipes }) => {
  function timeConvert(cookingTime) {
    var num = cookingTime;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    const timeInHour = rhours > 1 ? 'hours' : 'hour';
    const timeInMinute = rminutes > 1 ? 'mins' : 'minute';

    return `${rhours} ${timeInHour} ${rminutes} ${timeInMinute}`;
  }
  return (
    <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-2 gap-8 py-10 w-11/12 max-w-7xl'>
      {recipes.map(({ id, title, featuredImage, cookingTime }) => (
        <div key={id}>
          <Image
            src={featuredImage}
            alt={title}
            width={500}
            height={500}
            className='w-full'
            priority
          />

          <div className='bg-white flex flex-col shadow-md p-5 -translate-y-6'>
            <div>
              <h4 className='font-bold'>{title}</h4>
              <p className='mb-5'>
                Takes approx. {timeConvert(cookingTime)} to prepare
              </p>
            </div>
            <div className='self-end'>
              <Link href='/recipe/[id]' as={`/recipe/${id}`} passHref>
                <a className='bg-red-600 text-white font-bold py-3 px-4'>
                  Cook this
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
