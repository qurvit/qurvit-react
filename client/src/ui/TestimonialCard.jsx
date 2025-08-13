import React, { useState } from 'react';

const TestimonialCard = ({ name, role, image, description, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-68 md:w-72 h-88 md:h-92 relative perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d relative ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-hidden">
            <img 
              src={image || "/Logo.png"} 
              alt={index !== undefined ? String(index) : "default-alt"} 
              className="w-full h-64 object-fill" 
            />
          </div>
          <div className="p-4 text-center">
            <p className="font-bold text-lg text-gray-800">{name}</p>
            <p className="text-blue-600">{role}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-primary text-white backface-hidden rounded-lg shadow-lg p-6 flex flex-col justify-center rotate-y-180">
          <p className="font-bold text-xl mb-3">{name}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
