import React from 'react';
import Input from './Input';
import useHover from './useHover';

const Header = ({title, onSubmit, onClick}) => {
  const [ref, isHovered] = useHover();

  return (
    <div ref={ref} className='heading'>
        <Input value={title} className='title' onSubmit={onSubmit} />
        <span onClick={onClick} className='removeButton'>{isHovered ? 'x' : ''}</span>
    </div>
  );
}

export default Header;