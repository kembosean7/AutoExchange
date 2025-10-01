import React, { useState, useRef, useEffect } from "react";

// Icons (using simple SVG icons instead of external icon library)
import { FuelIcon } from "@/models/FuelIcon";
import { ArrowRightIcon } from "@/models/ArrowRightIcon";
import { StarIcon } from "@/models/StarIcon";
import { whyUs } from "@/models/whyUs";
import { carTypes } from "@/models/BrowseByCarTypes";
import { latestBlogs } from "@/models/LatestBlogs";
import { testimonials } from "@/models/testimonials";
import { carCards } from "@/models/exploreCars";

import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar';


/**
 * 
 * @returns Inventory Page
 * load cars from backend
 * display them in the inventory page
 * each car should be shown as a card
 * clicking on "view more" should navigate to the car details page
 */

const Inventory = () => {
  const navigate = useNavigate()

  //filters: most relevant, price (low to high), price (high to low), year (new to old), year (old to new), mileage (low to high), mileage (high to low)

  const [carFilter, setCarFilter] = useState("most-relevant");

    const [activeTab, setActiveTab] = useState("in-stock");
    const [calculatorValues, setCalculatorValues] = useState({
      price: "10000",
      interestRate: "10",
      loanTerm: "3",
      downPayment: "5000",
    });
  
    const scrollRef = useRef(null);
  
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
  
    useEffect(() => {
      const el = scrollRef.current;
  
      if (!el) return;
  
      const update = () => {
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth -1);
      };
  
      update();
      el.addEventListener("scroll", update, {passive:true});
      window.addEventListener("resize", update);
  
      return () => {
        el.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      }
  
    }, [carCards])
  
    const scrollBy = (dir) => {
      const el = scrollRef.current;
      if (!el) return;
  
      const amount = Math.round(el.clientWidth * 0.8);
      el.scrollBy({left: dir === "left" ? -amount : amount, behavior : "smooth"});
    };



  return (
    <div>


      <div>
              <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                  <div className="flex justify-between items-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-dark">
                      Find Your Next Dream Car
                    </h2>

                  </div>
                  <div className="w-90 h-20 px-20 py-20 shadow-md ">
                    <SearchBar />
                    {/* filter button */}
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md">
                      Filter
                    </button>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-8 border-b border-brand-lightgray mb-12">
                    <button
                      className={`pb-4 px-2 font-medium relative ${
                        activeTab === "in-stock"
                          ? "text-brand-dark border-b-2 border-brand-blue"
                          : "text-brand-dark hover:text-brand-blue"
                      }`}
                      onClick={() => setActiveTab("in-stock")}
                    >
                      In Stock
                    </button>
                    <button
                      className={`pb-4 px-2 font-medium ${
                        activeTab === "new-cars"
                          ? "text-brand-dark border-b-2 border-brand-blue"
                          : "text-brand-dark hover:text-brand-blue"
                      }`}
                      onClick={() => setActiveTab("new-cars")}
                    >
                      New Cars
                    </button>
                    <button
                      className={`pb-4 px-2 font-medium ${
                        activeTab === "used-cars"
                          ? "text-brand-dark border-b-2 border-brand-blue"
                          : "text-brand-dark hover:text-brand-blue"
                      }`}
                      onClick={() => setActiveTab("used-cars")}
                    >
                      Used Cars
                    </button>
                  </div>
                  
                  <div className="relative mb-12">
                  {/* Vehicle Cards */}
                  <div className="relative mb-12">
                    <div
                      ref={scrollRef}
                      className="flex gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
                    >
                      {carCards.map((car) => (
                        <div
                          key={car.title}
                          className="min-w-[20rem] md:min-w-[36rem] snap-start bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0"
                        >
                          {/* Card inner content - kept your original markup */}
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-80 h-48 md:h-72">
                              <img src={car.image} alt={car.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 p-6 md:p-8 text-white">
                              <div className="flex justify-between items-start mb-4">
                                <div>
                                  <h3 className="text-xl font-medium mb-2">{car.title}</h3>
                                  <p className="text-sm opacity-75">{car.description}</p>
                                </div>
                                <button className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                                  <StarIcon />
                                </button>
                              </div>
        
                              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                                <div>
                                  <div className="opacity-75">Mileage</div>
                                  <div>{car.mileage}</div>
                                </div>
                                <div>
                                  <div className="opacity-75">Fuel</div>
                                  <div>{car.fuel}</div>
                                </div>
                                <div>
                                  <div className="opacity-75">Transmission</div>
                                  <div>{car.transmission}</div>
                                </div>
                              </div>
        
                              <div className="flex justify-between items-center">
                                <div className="text-2xl font-bold">{car.price}</div>
                                <button className="flex items-center gap-2 text-white hover:text-brand-blue transition-colors">
                                  View Details
                                  <ArrowRightIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
        
                    {/* Navigation Arrows (below the scroller) */}
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={() => scrollBy("left")}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                        className={`w-16 h-12 border border-brand-lightgray rounded-full flex items-center justify-center transition-colors ${
                          !canScrollLeft ? "opacity-40 cursor-not-allowed" : "hover:bg-brand-lightgray"
                        }`}
                      >
                        {/* Left arrow */}
        
                                        <svg className="w-4 h-4" viewBox="0 0 12 13" fill="none">
                          <path
                            d="M2.55859 6.31006C2.55859 6.07006 2.65193 5.87006 2.83859 5.71006L7.99859 0.550059C8.15859 0.390059 8.35193 0.310059 8.57859 0.310059C8.80526 0.310059 9.00526 0.390059 9.17859 0.550059C9.35193 0.710059 9.43859 0.910059 9.43859 1.15006C9.43859 1.39006 9.34526 1.59006 9.15859 1.75006L4.59859 6.31006L9.15859 10.8701C9.31859 11.0301 9.39859 11.2301 9.39859 11.4701C9.39859 11.7101 9.31859 11.9101 9.15859 12.0701C8.99859 12.2301 8.80526 12.3101 8.57859 12.3101C8.35193 12.3101 8.15859 12.2301 7.99859 12.0701L2.83859 6.91006C2.65193 6.75006 2.55859 6.55006 2.55859 6.31006Z"
                            fill="currentColor"
                          />
                        </svg>
        
                      </button>
        
                      <button
                        onClick={() => scrollBy("right")}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                        className={`w-16 h-12 border border-brand-lightgray rounded-full flex items-center justify-center transition-colors ${
                          !canScrollRight ? "opacity-40 cursor-not-allowed" : "hover:bg-brand-lightgray"
                        }`}
                      >
                        {/* Right arrow */}
        
                                        <svg className="w-4 h-4" viewBox="0 0 12 13" fill="none">
                          <path
                            d="M9.17652 6.91006L4.02083 12.0701C3.86096 12.2301 3.66779 12.3101 3.44131 12.3101C3.21484 12.3101 3.015 12.2301 2.84181 12.0701C2.66863 11.9101 2.58203 11.7101 2.58203 11.4701C2.58203 11.2301 2.67529 11.0301 2.8618 10.8701L7.41799 6.31006L2.8618 1.75006C2.67529 1.59006 2.58203 1.39006 2.58203 1.15006C2.58203 0.910059 2.66863 0.710059 2.84181 0.550059C3.015 0.390059 3.21484 0.310059 3.44131 0.310059C3.66779 0.310059 3.86096 0.390059 4.02083 0.550059L9.17652 5.71006C9.36303 5.87006 9.45628 6.07006 9.45628 6.31006C9.45628 6.55006 9.36303 6.75006 9.17652 6.91006Z"
                            fill="currentColor"
                          />
                        </svg>
        
                      </button>
                    </div>
        
                  </div>
                </div>
              </div>
            </section>
      </div>
      
    </div>
  )
}

export default Inventory