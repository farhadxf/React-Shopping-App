import Card from './card/Card';
import AllData from '../data/AllData';
const Trending = () => {
  const Trending = AllData.slice(7, 11);

  return (
    <div className='featured-products'>
      <div className='featured-products-top'>
        <h1>Trendin Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima laudantium, fuga veritatis
          laboriosam fugiat tenetur velit quisquam natus tempora suscipit, omnis hic harum. Aut voluptatum quis error
          vero sed?
        </p>
      </div>
      <div className='featured-products-top-items'>
        {Trending.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
