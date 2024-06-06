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
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
              labore etdolore.
            </span>
          </div>

          <div className='item'>
            <h1>Contact us</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
              labore
            </span>
          </div>
        </div>
      </div>
      <Credit />
    </>
  );
};

export default Footer;
