import { useScrollFade } from "../hooks/useScrollFade";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export function Heritage() {
  const titleFade = useScrollFade({ threshold: 0.3, bidirectional: true });
  const milestone1Fade = useScrollFade({ threshold: 0.3, bidirectional: true });
  const milestone2Fade = useScrollFade({ threshold: 0.3, bidirectional: true });
  const milestone3Fade = useScrollFade({ threshold: 0.3, bidirectional: true });

  const milestones: Milestone[] = [
    {
      year: "1948",
      title: "The Beginning",
      description:
        "Ferry Porsche creates the iconic 356, launching a legacy of engineering excellence and motorsport passion that would define automotive history.",
      image:
        "https://images.unsplash.com/photo-1718465346687-f78be3a4750f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwUG9yc2NoZSUyMDM1NiUyMGNsYXNzaWMlMjAxOTQ4fGVufDF8fHx8MTc3Mjk0NDE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      year: "1963",
      title: "The Icon is Born",
      description:
        "Introduction of the legendary 911. A timeless design that revolutionizes sports car philosophy and becomes the heart of Porsche DNA.",
      image:
        "https://images.unsplash.com/photo-1602319767567-50339378ae7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwUG9yc2NoZSUyMDkxMSUyMGljb25pYyUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzI5NDQxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      year: "2019",
      title: "Electric Evolution",
      description:
        "The Taycan emerges as Porsche's first all-electric sports car, blending cutting-edge technology with legendary performance heritage.",
      image:
        "https://images.unsplash.com/photo-1619114664520-1d1dbf9f224c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQb3JzY2hlJTIwVGF5Y2FuJTIwZWxlY3RyaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzcyOTQ0MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const fades = [milestone1Fade, milestone2Fade, milestone3Fade];

  return (
    <section
      id="heritage"
      className="relative py-24 md:py-32 px-4 md:px-8 bg-black overflow-hidden"
    >
      {/* Gradient Overlay Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-0">
        {/* Title */}
        <div
          ref={titleFade.ref}
          className={`text-center mb-20 md:mb-28 transition-all duration-1000 ease-out ${
            titleFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-white font-light tracking-tight">
            Heritage
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light tracking-wide">
            Seven decades of innovation and passion
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent transform -translate-x-1/2" />

          <div className="space-y-24 md:space-y-32">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const fade = fades[index];

              return (
                <div
                  key={milestone.year}
                  ref={fade.ref}
                  className={`relative transition-all duration-1000 ease-out ${
                    fade.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Mobile Layout - Stacked */}
                  <div className="md:hidden">
                    <div className="mb-6">
                      <div className="inline-block px-4 py-2 border border-gray-700 mb-4">
                        <span className="text-white text-3xl font-light tracking-wider">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl text-white mb-3 font-light tracking-wide">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                      <ImageWithFallback
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                    {isEven ? (
                      <>
                        {/* Content Left */}
                        <div className="text-right pr-8">
                          <div className="inline-block px-6 py-3 border border-gray-700 mb-6">
                            <span className="text-white text-4xl font-light tracking-wider">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-3xl text-white mb-4 font-light tracking-wide">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-400 text-base font-light leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>

                        {/* Image Right */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 group">
                          <ImageWithFallback
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Image Left */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-900 group">
                          <ImageWithFallback
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Content Right */}
                        <div className="text-left pl-8">
                          <div className="inline-block px-6 py-3 border border-gray-700 mb-6">
                            <span className="text-white text-4xl font-light tracking-wider">
                              {milestone.year}
                            </span>
                          </div>
                          <h3 className="text-3xl text-white mb-4 font-light tracking-wide">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-400 text-base font-light leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </>
                    )}

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
