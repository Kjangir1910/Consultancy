

import React from "react";
import services from "./servicesData";
import ServiceCard from "./ServiceCard";

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">
        Explore Our Services
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            subServices={service.subServices}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
