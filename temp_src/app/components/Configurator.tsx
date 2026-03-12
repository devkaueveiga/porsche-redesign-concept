import { useState } from "react";
import { useScrollFade } from "../hooks/useScrollFade";
import guardsRedImg from "figma:asset/7570d24711dc9d5cdc92d9af3335eeef099ded4b.png";
import jetBlackImg from "figma:asset/af8efb632b43dd5e42dcb3d07e22443963c79655.png";
import carraraWhiteImg from "figma:asset/b3e622bb112f7aee905c3a97741e3e8a511c2414.png";
import standardWheelsImg from "figma:asset/3a5c7c027aee092a407846e522998eee77faa7d5.png";
import sportWheelsImg from "figma:asset/58782eb24768f8f7ba532fafe865dcf8841f5eff.png";
import leatherInteriorImg from "figma:asset/de403b62ef51e38d09305199025f2f0d48e44eaa.png";
import carbonInteriorImg from "figma:asset/4b9c5fc0423663fb44db358863d9d6bd7545211c.png";

interface ConfigOption {
  id: string;
  name: string;
  preview: string;
}

interface ConfigCategory {
  title: string;
  options: ConfigOption[];
}

export function Configurator() {
  const titleFade = useScrollFade({ threshold: 0.3, bidirectional: true });
  const previewFade = useScrollFade({ threshold: 0.3, bidirectional: true });
  const optionsFade = useScrollFade({ threshold: 0.3, bidirectional: true });

  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedWheels, setSelectedWheels] = useState("sport");
  const [selectedInterior, setSelectedInterior] = useState("leather");
  const [previewImage, setPreviewImage] = useState(guardsRedImg);

  const colors: ConfigOption[] = [
    {
      id: "red",
      name: "Guards Red",
      preview: guardsRedImg,
    },
    {
      id: "black",
      name: "Jet Black Metallic",
      preview: jetBlackImg,
    },
    {
      id: "white",
      name: "Carrara White Metallic",
      preview: carraraWhiteImg,
    },
  ];

  const wheels: ConfigOption[] = [
    {
      id: "standard",
      name: "20-inch Standard Wheels",
      preview: standardWheelsImg,
    },
    {
      id: "sport",
      name: "21-inch Sport Design Wheels",
      preview: sportWheelsImg,
    },
  ];

  const interiors: ConfigOption[] = [
    {
      id: "leather",
      name: "Full Leather Interior",
      preview: leatherInteriorImg,
    },
    {
      id: "carbon",
      name: "Carbon Fiber Package",
      preview: carbonInteriorImg,
    },
  ];

  const handleColorChange = (color: ConfigOption) => {
    setSelectedColor(color.id);
    setPreviewImage(color.preview);
  };

  const handleWheelsChange = (wheel: ConfigOption) => {
    setSelectedWheels(wheel.id);
    setPreviewImage(wheel.preview);
  };

  const handleInteriorChange = (interior: ConfigOption) => {
    setSelectedInterior(interior.id);
    setPreviewImage(interior.preview);
  };

  return (
    <section
      id="configurator"
      className="relative py-24 md:py-32 px-4 md:px-8 bg-black overflow-hidden"
    >
      {/* Gradient Overlay Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div
          ref={titleFade.ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            titleFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl mb-4 text-white font-light tracking-tight">
            Configure Your Porsche
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-light tracking-wide">
            Build your dream GT3 RS with exclusive options
          </p>
        </div>

        {/* Preview Image */}
        <div
          ref={previewFade.ref}
          className={`mb-16 md:mb-20 transition-all duration-1000 ease-out ${
            previewFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-900 rounded-sm">
            <img
              src={previewImage}
              alt="Porsche Preview"
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Configuration Options */}
        <div
          ref={optionsFade.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-1000 ease-out ${
            optionsFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Exterior Color */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-6 font-light tracking-wide">
              Exterior Color
            </h3>
            <div className="space-y-4">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => handleColorChange(color)}
                  onMouseEnter={() => setPreviewImage(color.preview)}
                  className={`w-full text-left px-6 py-4 border transition-all duration-300 group ${
                    selectedColor === color.id
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-700 hover:border-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-light tracking-wide">
                      {color.name}
                    </span>
                    {selectedColor === color.id && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Wheels */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-6 font-light tracking-wide">
              Wheels
            </h3>
            <div className="space-y-4">
              {wheels.map((wheel) => (
                <button
                  key={wheel.id}
                  onClick={() => handleWheelsChange(wheel)}
                  onMouseEnter={() => setPreviewImage(wheel.preview)}
                  className={`w-full text-left px-6 py-4 border transition-all duration-300 group ${
                    selectedWheels === wheel.id
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-700 hover:border-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-light tracking-wide">
                      {wheel.name}
                    </span>
                    {selectedWheels === wheel.id && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Interior */}
          <div>
            <h3 className="text-xl md:text-2xl text-white mb-6 font-light tracking-wide">
              Interior
            </h3>
            <div className="space-y-4">
              {interiors.map((interior) => (
                <button
                  key={interior.id}
                  onClick={() => handleInteriorChange(interior)}
                  onMouseEnter={() => setPreviewImage(interior.preview)}
                  className={`w-full text-left px-6 py-4 border transition-all duration-300 group ${
                    selectedInterior === interior.id
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-700 hover:border-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-light tracking-wide">
                      {interior.name}
                    </span>
                    {selectedInterior === interior.id && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Summary CTA */}
        <div
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 ease-out delay-200 ${
            optionsFade.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative bg-white text-black px-10 md:px-16 py-4 md:py-5 text-sm md:text-base tracking-wider font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            <span className="relative z-10">SAVE CONFIGURATION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <p className="mt-6 text-gray-500 text-sm font-light tracking-wide">
            Your build: {colors.find((c) => c.id === selectedColor)?.name} •{" "}
            {wheels.find((w) => w.id === selectedWheels)?.name} •{" "}
            {interiors.find((i) => i.id === selectedInterior)?.name}
          </p>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />
    </section>
  );
}