import './Credit.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';

const Credit = () => {
  return (
    <div className='credit-container'>
      <div className='credit'>
        <span>Crafted by Farhad </span>
        <a
          href='https://www.linkedin.com/in/farhadxf/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn Profile'
        >
          <LinkedInIcon className='icon' />
        </a>
      </div>

      <div className='source-code'>
        <span>Source code:</span>
        <a
          href='https://github.com/farhadxf/React-Shopping-App'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub Repository'
        >
          <GitHub className='icon' />
        </a>
      </div>
    </div>
  );
};

export default Credit;
