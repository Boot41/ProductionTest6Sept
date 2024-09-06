import React from 'react';

const JobListingManager = ({ jobListings, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => onEdit(job.id)}
                className="bg-green-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-400"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(job.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-yellow-400"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingManager;