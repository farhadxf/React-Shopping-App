import './FeaturedProducts.scss';
import Card from './card/Card';
import AllData from '../data/AllData';

const FeaturedProducts = () => {
  const data = AllData.slice(3, 8);

  return (
    <div className='featured-products'>
      <div className='featured-products-top'>
        <h1>Featured Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima laudantium, fuga veritatis
          laboriosam fugiat tenetur velit quisquam natus tempora suscipit, omnis hic harum. Aut voluptatum quis error
          vero sed?
        </p>
      </div>
      <div className='featured-products-top-items'>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
