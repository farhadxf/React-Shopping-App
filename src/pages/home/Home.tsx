import Categories from '../../components/featuredProducts/Categories';
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts';
import Trending from '../../components/featuredProducts/Trending';
import Slider from '../../components/slider/Slider';
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts />
      <Categories />
      <Trending />
    </div>
  );
};

export default Home;
