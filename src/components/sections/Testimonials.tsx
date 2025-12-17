import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechFlow Solutions',
      company: 'TechFlow',
      image: `${import.meta.env.BASE_URL}photos/client photos/client 1.png`,
      content: 'ZenStart transformed our digital presence completely. Their attention to detail and innovative approach helped us increase our conversion rate by 300%. The team is incredibly professional and delivers beyond expectations.',
      rating: 5,
    },
    {
      name: 'Oliver Ibrahim',
      position: 'Founder of GrowAcquisition',
      company: 'EcoLiving',
      image: `${import.meta.env.BASE_URL}photos/client photos/client 2.png`,
      content: 'Shuvo has impressive talent in the production business. His creativity and professionalism really stood out throughout our collaboration. There’s always a spot for his talent here, should he need it moving forward.',
      rating: 5,
    },
    {
      name: 'Ed Johnson',
      position: 'Co-founder of uRoitine',
      company: 'Luxe Fashion',
      image: `${import.meta.env.BASE_URL}photos/client photos/client 03.jpg`,
      content: 'Working with Shuvo was a great experience! Everything went smoothly, and I’m really happy with the final outcome. He delivered exactly what I was looking for. I’ll definitely reach out to him again when we’re ready for the next project!',
      rating: 5,
    },
    {
      name: 'Ash Rahman',
      position: 'Founder of Built by Design',
      company: 'WellnessPro',
      image: `${import.meta.env.BASE_URL}photos/client photos/client 1.png`,
      content: 'Shuvo has a genuinely good heart and incredible skills. I’ve worked with over 50 editors, and by far, he’s my favorite. Trust me—she would be proud of him. His dedication and talent truly set him apart.',
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
                      <h2 className="text-4xl md:text-5xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent drop-shadow-lg">
              What Our Clients Say
            </h2>
                      <p className="text-xl text-thin max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with ZenStart
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">

          {/* Continuous Film-like Scrolling Testimonials */}
          <div className="relative h-94 overflow-hidden">
            {/* Film Strip Container */}
            <motion.div
              className="flex"
              animate={{
                x: [0, -((testimonials.length * 384) + (testimonials.length * 32))]
              }}
              transition={{
                duration: testimonials.length * 15, // 6 seconds for full cycle
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="relative w-96 flex-shrink-0 bg-white/3 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl min-h-[400px] mr-8"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(70%_45%_at_50%_0%,rgba(161,191,255,0.18)_0%,rgba(166,73,210,0.12)_35%,transparent_70%)]" />
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-14 rounded-l-2xl bg-gradient-to-r from-black/25 to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-2xl bg-gradient-to-l from-black/25 to-transparent" />
                  <div className="flex h-full flex-col items-center text-center">

                    {/* Content */}
                    <p className="text-lg md:text-xl text-white leading-relaxed text-thin font-light flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Client Info */}
                    <div className="flex flex-col items-center mt-8">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white/20"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#A1BFFF] to-[#A649D2] flex items-center justify-center mb-4 border-2 border-white/20 text-white font-light text-lg hidden">
                        {testimonial.name.charAt(0)}
                      </div>
                      <h4 className="text-white font-light text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-white mb-2">
                        {testimonial.position}
                      </p>
                      <p className="font-medium bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center mt-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Overlays for Smooth Edges */}
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonials;