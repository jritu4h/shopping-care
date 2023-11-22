import React from 'react';

const Error = () => {
    return (
        <div>
            <div className="flex h-screen ">
      <div className="m-auto text-center">
        <h1 className="text-6xl font-semibold text-red-500">404</h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
        </div>
    );
};

export default Error;