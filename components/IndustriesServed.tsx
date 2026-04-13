"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const industries = [
  "Wholesale Distributors",
  "Food Processing Plants",
  "Retail Supermarket Chains",
  "Artisan Culinary Brands",
  "Global Supply Chain Partners"
];

const highlightedCountries = [
  "United States of America",
  "China",
  "Brazil",
  "Peru",
  "Bolivia",
  "Australia",
  "Spain",
  "France",
  "Germany",
  "Italy",
];

const markers = [
  { coordinates: [-95, 38], name: "USA" },
  { coordinates: [10, 48], name: "Europe" },
  { coordinates: [105, 35], name: "China" },
  { coordinates: [-60, -15], name: "South America" },
  { coordinates: [135, -25], name: "Australia" },
];

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

export default function IndustriesServed() {
  return (
    <section id="industries" className="section-shell bg-surface">
      <div className="content-shell">
        <div className="ag-card px-8 py-12 md:px-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left Content */}
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface sm:text-4xl md:text-5xl">
                Serving Multiple<br/> Industries
              </h2>
              <p className="mt-5 text-base text-on-surface-variant max-w-lg leading-relaxed">
                From large-scale wholesale distributors to international food processing plants, we deliver premium export results globally.
              </p>
              
              <ul className="mt-10 space-y-5">
                {industries.map((industry, i) => (
                   <li key={industry} className="flex items-center gap-4 text-base font-bold text-on-surface">
                      {/* Check icon matching the reference image */}
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-on-surface text-white shrink-0">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {industry}
                   </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right Map */}
            <ScrollReveal direction="left" delay={150}>
               <div className="relative w-full aspect-[4/3] -mt-10 md:mt-0">
                  <ComposableMap projection="geoMercator" projectionConfig={{ scale: 110 }}>
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const isHighlighted = highlightedCountries.includes(geo.properties.name);
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={isHighlighted ? "#89c836" : "#e5e5e5"}
                              stroke="#ffffff"
                              strokeWidth={0.5}
                              style={{
                                default: { outline: "none" },
                                hover: { outline: "none", fill: isHighlighted ? "#72a72b" : "#d9d9d9" },
                                pressed: { outline: "none" },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>
                    
                    {markers.map(({ name, coordinates }) => (
                      <Marker key={name} coordinates={coordinates as [number, number]}>
                        <g
                          fill="none"
                          stroke="#ff4d4d"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="translate(-12, -24)"
                        >
                          <path
                            fill="#ff4d4d"
                            d="M12 0C5.372 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.372-12-12-12Zm0 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
                          />
                          <circle cx="12" cy="12" r="4" fill="white" stroke="none" />
                        </g>
                      </Marker>
                    ))}
                  </ComposableMap>
               </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
