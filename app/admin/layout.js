import Link from 'next/link';
import React from 'react';
import Sidbar from './Sidbar';
import Topbar from './Topbar';

const layout = ({children}) => {
  
  return (
    <div className='flex items-start'>
      <Sidbar/>
      <div className='px-5 flex-1'>
        <Topbar/>
      {children}
      </div>
    </div>
  );
}

export default layout;
