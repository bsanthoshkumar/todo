import React from 'react';
import useHover from './useHover';

const Header = ({ title, onClick, onChange }) => {
  const [ref, isHovered] = useHover();

  return (
    <div ref={ref} className="heading">
      <input
        value={title}
        className="title"
        onChange={({ target }) => onChange(target.value)}
      />
      <span onClick={onClick} className="removeButton">
        {isHovered ? 'x' : ''}
      </span>
    </div>
  );
};

export default Header;
