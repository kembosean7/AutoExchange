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


/*
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

  return (
    <div>


      <div>
              <section className="bg-white py-10">
                <div className="container mx-auto px-4 md:px-4">
                  <div className="flex justify-between items-center mb-16">
                    <h2 className="text-4xl font-bold text-brand-dark">
                      Find Your Next Dream Car
                    </h2>

                  </div>
                  <div className="w-90 h-20 px-10 py-20 shadow-md ">
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

                    {/* put two cards per row gap between 4 make a gap of 6 for cards below make cars slimmer with image on top and info below no horizontal scrolling */}
                    <div
                    
                      className="flex gap-2 "
                    >
                      {carCards.map((car) => (
                        <div
                          key={car.title}
                          className="min-w-[8rem] md:min-w-[16rem] snap-start bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0"
                        >
                          <div className="flex flex-col md:flex-col">
                            <div className="w-30 md:w-50 h-58 md:h-72">
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
        

                  </div>
                </div>
              </div>
            </section>
      </div>
      
    </div>
  )
}

export default Inventory