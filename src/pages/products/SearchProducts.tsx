import Card from '../../components/featuredProducts/card/Card';
import AllData from '../../components/data/AllData';

interface SearchProductsProps {
  sort: 'asc' | 'desc' | null;
  maxPrice: number;
  sex: 'all' | 'male' | 'female' | 'kids';
}

const SearchProducts: React.FC<SearchProductsProps> = ({ sort, maxPrice, sex }) => {
  const data = AllData;

  // Filter and sort products
  const sortedData = data
    .filter((item) => item.price <= maxPrice)
    .filter((item) => {
      if (sex === 'all') {
        return true;
      }
      return item.sex && item.sex.includes(sex);
    })

    // Sort products based on price
    .sort((a, b) => {
      if (sort === 'asc') {
        return a.price - b.price;
      } else if (sort === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    //render product card by their id
    <div className='list-products'>
      {sortedData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default SearchProducts;
