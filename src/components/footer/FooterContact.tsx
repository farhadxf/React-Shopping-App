import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

const FooterContact = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <span>Get in touch</span>
        <div className='contact-mail'>
          <input type='text' placeholder='Enter your e-mail..' />
          <button>Join us</button>
        </div>
        <div className='contact-icons'>
          <XIcon />
          <InstagramIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
