import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
  return <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw" aria-hidden="true"></span> {errorMessage}</p>;
}

export default ErrorMessage;
