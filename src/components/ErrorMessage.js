import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
  return <p className="message error-message"><span className="fa-solid fa-circle-exclamation fa-lg fa-fw" aria-hidden="true"></span> {errorMessage}</p>;
}

export default ErrorMessage;
