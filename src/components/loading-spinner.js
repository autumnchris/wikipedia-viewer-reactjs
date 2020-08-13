import React from 'react';

const LoadingSpinner = (props) => {

  return (
    <div className="loading-spinner">
      <span className="fa fa-sync-alt fa-spin fa-2x fa-fw" aria-label="Loading..."></span>
    </div>
  );
}

export default LoadingSpinner;
