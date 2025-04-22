

import React from "react";

const ServiceCard = ({ title, description, image, subServices }) => (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    {image && (
      <img src={image} alt={title} className="w-full h-40 object-cover" />
    )}
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      {subServices && (
        <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
          {subServices.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button className="mt-auto bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  </div>
);

export default ServiceCard;
