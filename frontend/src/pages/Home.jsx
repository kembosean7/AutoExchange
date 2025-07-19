import React, {useState} from 'react'


import LoginSignup from './LoginSignup';
import FuelIcon from '../components/FuelIcon';
import ArrowRightIcon from '../components/ArrowRightIcon'


function Home() {

  const [activeTab, setActiveTab] = useState("in-stock");
  const [calculatorValues, setCalculatorValues] = useState({
    price: "10000",
    interestRate: "10",
    loanTerm: "3",
    downPayment: "5000",
  });

  return (
    <div className="min-h-screen bg-white font-dm">
            {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://api.builder.io/api/v1/image/assets/TEMP/7209a9ddb4485ca6445a72170e8fec52a55d636e?width=3840')`,
        }}
      >
        <div className="container mx-auto px-4 min-h-screen flex items-center py-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-7xl gap-8">
            {/* Hero Content */}
            <div className="text-white text-center lg:text-left max-w-lg">
              <div className="text-2xl md:text-4xl font-bold mb-4">
                $165,000
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
                Ranger Black –<br />
                2021
              </h1>
            </div>

            {/* Vehicle Details Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full max-w-sm lg:w-72 text-white">
              {/* Fuel Type */}
              <div className="mb-6">
                {/* <FuelIcon /> */}
                <FuelIcon/>
                <div className="text-sm opacity-75 mt-2">Fuel Type</div>
                <div className="text-lg md:text-xl font-medium">Petrol</div>
              </div>

              {/* Mileage */}
              <div className="mb-6">
                <div className="text-sm opacity-75">Mileage</div>
                <div className="text-lg md:text-xl font-medium">250 Miles</div>
              </div>

              {/* Transmission */}
              <div className="mb-6">
                <div className="text-sm opacity-75">Transmission</div>
                <div className="text-lg md:text-xl font-medium">Manual</div>
              </div>

              {/* Year */}
              <div className="mb-8">
                <div className="text-sm opacity-75">Year</div>
                <div className="text-lg md:text-xl font-medium">2021</div>
              </div>

              {/* Learn More Button */}
              <button className="w-full bg-white text-brand-dark rounded-2xl py-4 px-6 flex items-center justify-center gap-3 font-medium hover:bg-gray-50 transition-colors">
                Learn More
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

                {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-6 md:w-8 h-1 bg-white rounded-full"></div>
          <div className="w-3 md:w-4 h-1 bg-white/50 rounded-full"></div>
          <div className="w-3 md:w-4 h-1 bg-white/50 rounded-full"></div>
          <div className="w-3 md:w-4 h-1 bg-white/50 rounded-full"></div>
        </div>
      </section>
      {/* {<LoginSignup/>} */}
    </div>
    
  )
}

export default Home;