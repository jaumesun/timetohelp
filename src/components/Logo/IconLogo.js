import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg 
      className={className}
      {...rest}
      width="153" 
      height="16" 
      viewBox="0 0 153 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text id="TIME_TO_HELP" data-name="TIME TO HELP" x="0" y="16">TIME TO HELP</text>
    </svg>   
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;