import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const SmallFlask = ({ className, color }) => {
  return (
    <div className={classNames('small-flask', className)} id="flask">
      <div className="background" style={{ background: color }} />
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 130">
        <g>
          <path fill="white" d="M0,0v130h112.084L111.75,0H0z M94.75,128C71,128,56,128,56,128s-14.873,0-38.623,0s-13.945-19.422-6.33-35.945S40,41.25,40,41.25V3h16h11v38.25c0,0,23.901,34.283,31.517,50.805S118.5,128,94.75,128z"/>
          <path fill="none" stroke="#dedbd3" strokeWidth={2} d="M56,127.5c0,0-14.873,0-38.623,0s-13.695-19.172-6.08-35.695C18.912,75.283,40.5,41.25,40.5,41.25V2.5h-9H56h19.5h-8v38.75c0,0,23.651,34.033,31.267,50.555c7.615,16.523,19.733,35.695-4.017,35.695S56,127.5,56,127.5z"/>
        </g>
      </svg>
    </div>
  );
};

SmallFlask.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

export default SmallFlask;
