import { useState } from 'react';
import './Products.scss';
import SearchProducts from './SearchProducts';

const ProductSort = () => {
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [sort, setSort] = useState<'asc' | 'desc' | null>(null);
  const [sex, setSex] = useState<'all' | 'female' | 'male' | 'kids'>('all'); //initialise sex filter state

  return (
    <div className='products-sort'>
      <div className='products-sort-wrapper'>
        <div className='products-sort-left'>
          <div className='products-sort-filter-items'>
            <h2>Filter by Gender</h2>
            <div className='products-sort-input-items'>
              <input
                type='checkbox'
                id='all'
                name='sex'
                value='all'
                checked={sex === 'all'}
                onChange={(e) => setSex(e.target.value as 'all')}
              />
              <label htmlFor='all'>All</label>
            </div>

            <div className='products-sort-input-items'>
              <input
                type='checkbox'
                id='female'
                name='sex'
                value='female'
                checked={sex === 'female'}
                onChange={(e) => setSex(e.target.value as 'female')}
              />
              <label htmlFor='female'>Women</label>
            </div>

            <div className='products-sort-input-items'>
              <input
                type='checkbox'
                id='male'
                name='sex'
                value='male'
                checked={sex === 'male'}
                onChange={(e) => setSex(e.target.value as 'male')}
              />
              <label htmlFor='male'>Men</label>
            </div>

            <div className='products-sort-input-items'>
              <input
                type='checkbox'
                id='kids'
                name='sex'
                value='kids'
                checked={sex === 'kids'}
                onChange={(e) => setSex(e.target.value as 'kids')}
              />
              <label htmlFor='kids'>Kids</label>
            </div>
          </div>

          <div className='products-sort-filter-items'>
            <h2>Filter by Price</h2>
            <div className='products-sort-input-items'>
              <span>£0</span>
              <input
                type='range'
                min={5}
                max={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
              <span>£{maxPrice}</span>
            </div>
          </div>

          <div className='products-sort-filter-items'>
            <h2>Sort by</h2>
            <div className='products-sort-filter-items'>
              <input type='radio' id='asc' name='price' onChange={() => setSort('asc')} />
              <label htmlFor='asc'>Price (Low - High)</label>
            </div>

            <div className='products-sort-filter-items'>
              <input type='radio' id='desc' name='price' onChange={() => setSort('desc')} />
              <label htmlFor='desc'>Price (High - Low)</label>
            </div>
          </div>
        </div>

        <div className='products-sort-right'>
          <img
            className='products-sort-right-img'
            src='https://images.pexels.com/photos/5625067/pexels-photo-5625067.jpeg'
            alt=''
          />
          <SearchProducts maxPrice={maxPrice} sort={sort} sex={sex} />
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
