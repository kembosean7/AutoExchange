import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-gray mb-8 max-w-md">
          Sorry, the page you are looking for doesn't exist. Here are some
          helpful links:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/inventory"
            className="border border-brand-blue text-brand-blue px-6 py-3 rounded-lg hover:bg-brand-blue hover:text-white transition-colors"
          >
            Browse Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
