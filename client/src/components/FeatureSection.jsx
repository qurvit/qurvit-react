import FeatureCard from '../ui/FeatureCard';
import {  FaSync } from 'react-icons/fa';


const features = [
  {
    title: 'Lorem ipsum ',
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus?",
    icon: <FaSync />,
  },
  {
    title: 'Lorem ipsum ',
     description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus?",
    icon: <FaSync />,
  },
  {
    title: 'Lorem ipsum ',
     description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus?",
    icon: <FaSync />,
  },
  {
    title: 'Lorem ipsum ',
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellendus?",
    icon: <FaSync />,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-gray-100">
     
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
