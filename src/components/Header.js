import React from 'react';
import Logo from '../assets/shr1.png';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <a href='#' style={{ marginRight: '16px' }}> */}
              <img src={Logo} alt='' style={{ height: '77px' }} />
            
            {/* <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Your Website Title</h1> */}
          </div>
          <Link to='contact'>
          <button className='btn btn-sm'>Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
