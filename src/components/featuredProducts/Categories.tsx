import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row row-large'>
          <img src='https://images.pexels.com/photos/11491085/pexels-photo-11491085.jpeg' alt='' />
          <button>
            <Link to='/products-sort' className='link'>
              On Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
            alt=''
          />
          <button>
            <Link to='/products-sort'>New Season</Link>
          </button>
        </div>

        <div className='row'>
          <img
            src='https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
            alt=''
          />
          <button>
            <Link to='/products-sort'>Clothes</Link>
          </button>
        </div>

        <div className='row row-large'>
          <img src='https://images.pexels.com/photos/1058140/pexels-photo-1058140.jpeg' alt='' />
          <button>
            <Link to='/products-sort'>Kids</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
