import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className='p-2 flex bg-slate-500 text-white'>
        <Link className='text-[18px] py-2 mx-5 px-4 ml-2 rounded-md hover:bg-white hover:text-slate-500 cursor-pointer' to='/login'>Login</Link>
        <Link className='text-[18px] py-2 px-4 ml-2 rounded-md hover:bg-white hover:text-slate-500 cursor-pointer' to='/resister'>Resister</Link>
      </nav>
    </div>
  );
};

export default Header;