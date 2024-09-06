import React from 'react';

const JobPostSuccessNotification = ({ message, onNavigate }) => {
  return (
    <div className="fixed top-0 left-0 right-0 mx-auto mt-4 w-80 bg-white border border-gray-300 rounded shadow-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13l-5 5 1.41 1.41L11 10.83l4.59 4.59L17 15l-6-6z" />
        </svg>
      </div>
      <h2 className="text-heading text-2xl font-heading mb-2">Success!</h2>
      <p className="text-body text-sm mb-4">{message}</p>
      <button 
        onClick={onNavigate} 
        className="bg-primaryColor text-white rounded border border-primaryColor py-2 px-4 transition duration-300 ease-in-out hover:bg-green-600"
      >
        View Your Posting
      </button>
    </div>
  );
};

export default JobPostSuccessNotification;