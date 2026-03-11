import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollFade } from "../hooks/useScrollFade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import 911 images using figma:asset scheme
import gt3rs1 from "figma:asset/aa8eccb9c7752543f915c80c1c9afe2927d991d5.png";
import gt3rs2 from "figma:asset/634010b6f5ee0d48579c30073cd80220829b02f7.png";
import gt3rs3 from "figma:asset/925c36a1227271cd887cef600350545cca6356a0.png";

// Import Taycan images using figma:asset scheme
import taycan1 from "figma:asset/2cd77eceae9ff399c5ad61370096f27c84d3388b.png";
import taycan2 from "figma:asset/0f3df03469de06df4f5f8e5b720070e5c52156be.png";
import taycan3 from "figma:asset/42f050bfb5b271438b6b906c9e22f53d46be3fc5.png";

// Import Cayenne images using figma:asset scheme
import cayenne1 from "figma:asset/dcb75919503fb56df2110d7ae20901e5192b16db.png";
import cayenne2 from "figma:asset/6fc1fb012aef8331f5063da16475306f8929a35b.png";
import cayenne3 from "figma:asset/1c584e026770ddaee923d8437f240ce7f2be9df0.png";

// Import Panamera images using figma:asset scheme
import panamera1 from "figma:asset/cf238a8aec218944209fff17156092d09cc75cca.png";
import panamera2 from "figma:asset/aa35c2fff3ca521d493eb94939b14790457c8d06.png";
import panamera3 from "figma:asset/0809a290870caa4ceeb5e6e4bae668df9433e333.png";

export function Gallery() {
  const sliderRef = useRef<Slider>(null);
  const titleFade = useScrollFade({ threshold: 0.2, bidirectional: true });

  const models = [
    {
      name: "911",
      subtitle: "Iconic Sports Car",
      images: [
        gt3rs1, // Gray GT3 RS lateral profile
        gt3rs2, // Interior cockpit view
        gt3rs3, // Blue 911 on desert road
      ],
    },
    {
      name: "Taycan",
      subtitle: "Electric Performance",
      images: [
        taycan1, // Blue Taycan exterior landscape
        taycan2, // Gray Taycan exterior sunset
        taycan3, // Taycan interior red cockpit
      ],
    },
    {
      name: "Cayenne",
      subtitle: "Performance SUV",
      images: [
        cayenne1, // Front view showroom exterior
        cayenne2, // Front view on road
        cayenne3, // Interior cockpit
      ],
    },
    {
      name: "Panamera",
      subtitle: "Luxury Sedan",
      images: [
        panamera1, // Dashboard interior close-up
        panamera2, // Lateral garage black exterior
        panamera3, // Red exterior on road
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    arrows: false,
    autoplay: false,
  };

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-8 bg-black text-white relative overflow-hidden">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
      
      <div className="max-w-7xl mx-auto relative z-0">
        <div 
          ref={titleFade.ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            titleFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-4 font-light tracking-wide">Model Gallery</h2>
          <p className="text-gray-400 text-base md:text-lg font-light">
            Experience our complete lineup
          </p>
        </div>

        <div className="relative">
          {/* Custom Navigation Arrows */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-x-1" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {models.map((model, index) => (
              <div key={index} className="outline-none">
                <div className="mb-8 md:mb-12 text-center">
                  <h3 className="text-3xl md:text-4xl font-light tracking-wide mb-2">
                    {model.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base font-light tracking-wider">
                    {model.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {model.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative h-64 md:h-80 overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={image}
                        alt={`${model.name} view ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button className="border border-white px-8 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-wider font-light hover:bg-white hover:text-black transition-all duration-300">
            EXPLORE ALL MODELS
          </button>
        </div>
      </div>

      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

      {/* Custom Slick Carousel Styles */}
      <style>{`
        .slick-slider {
          position: relative;
        }
        
        .slick-list {
          overflow: hidden;
        }
        
        .slick-track {
          display: flex;
        }
        
        .slick-slide {
          outline: none;
          opacity: 1;
          transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slick-slide > div {
          outline: none;
        }

        .slick-slide.slick-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}