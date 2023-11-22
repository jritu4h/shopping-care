import React from 'react';

const CoustomerCare = () => {
    return (
        <div>
            <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us With <span className=' text-red-400'>Email</span></h1>
      <form >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Coustomer Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Coustomer Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Coustomer Phone number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      <h3 className="text-xl font-semibold mb-2 inline pr-3"> Foronce Hotline Number:</h3>
      <a className="text-blue-500 text-lg" href="tel:+8801302224774"></a> <br />
      <h3 className="text-xl font-semibold mb-2 inline pr-3">Contact Number:</h3>
      <a className="text-blue-500 text-lg" href="tel:+8801302224774">01302224774</a> <br />
      <h3 className="text-xl font-semibold mb-2 inline pr-3">Contact Gmail:</h3>
      <a className="text-blue-500 text-lg" href="tel:">Gmail</a>
    </div>
        </div>
    );
};

export default CoustomerCare;