import TestimonialCard from "@/ui/TestimonialCard";



const Testimonial = () => {
  const founders = [
   
   
    {
      name: 'Dummy Data',
      role: 'upcoming post',
      image: `/vercal.svge`,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus architecto, error distinctio ullam quis eligendi magnam, quos alias exercitationem quaerat. Quibusdam, non quidem sit maxime deleniti ratione itaque aliquid?' 
    },
     {
      name: 'Dummy Data',
      role: 'upcoming post',
      image: `/vercal.svge`,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus architecto, error distinctio ullam quis eligendi magnam, quos alias exercitationem quaerat. Quibusdam, non quidem sit maxime deleniti ratione itaque aliquid?' 
    }, {
      name: 'Dummy Data',
      role: 'upcoming post',
      image: `/vercal.svge`,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus architecto, error distinctio ullam quis eligendi magnam, quos alias exercitationem quaerat. Quibusdam, non quidem sit maxime deleniti ratione itaque aliquid?' 
    }, {
      name: 'Dummy Data',
      role: 'upcoming post',
      image: `/vercal.svge`,
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatibus architecto, error distinctio ullam quis eligendi magnam, quos alias exercitationem quaerat. Quibusdam, non quidem sit maxime deleniti ratione itaque aliquid?' 
    },
  ];

  return (
    <section className='pb-12'>
      <div className='container mx-auto px-4'>

      <p className="flex justify-center items-center text-md md:text-xl wide px-3 pb-3 text-center">Know what people think about us ?</p>
            
        {/* Scrolling Container */}
        <div className="relative overflow-hidden w-full group">
          <div className="flex animate-scroll my-4">
            {founders.concat(founders).map((founder, index) => (
              <div key={index} className={`flex-shrink-0 w-80 transition-all duration-300 ${index % 2 === 0 ? 'mt-0' : 'mt-15'}`}>
                <TestimonialCard
                  name={founder.name}
                  index={founder.name+ " " +index}
                  role={founder.role}
                  image={founder.image}
                  description={founder.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
