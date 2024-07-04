import './Footer.scss';
import Credit from './credit/Credit';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='upper-section'>
          <div className='item'>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
          </div>

          <div className='item'>
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Cookies</span>
          </div>

          <div className='item'>
            <h1>About</h1>
            <span>Lorem</span>
          </div>

          <div className='item'>
            <h1>Contact us</h1>
            <span>Lorem</span>
          </div>
        </div>
      </div>
      <Credit />
    </>
  );
};

export default Footer;
