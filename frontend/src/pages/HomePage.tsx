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


const HomePage = () => {
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
                <FuelIcon />
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

      {/* Explore Vehicles Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">
              Explore All Vehicles
            </h2>
            <button className="flex items-center gap-2 text-brand-dark font-medium hover:text-brand-blue transition-colors">
              View All
              <ArrowRightIcon />
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
            <div className="min-w-[20rem] md:min-w-[36rem] snap-start bg-gray-800 rounded-2xl overflow-hidden flex-shrink-0" ref={scrollRef}>

            {/* Cards mapping */}

              {carCards.map((car) => (
                <div key={car.title} className="bg-gray-800 rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-80 h-48 md:h-72">
                      <img
                        src={car.image}
                        alt={car.title}
                        className="w-full h-full object-cover"
                      />
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


          {/* Navigation Arrows */}
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
          d="M9.17652 6.91006L4.02083 12.0701C3.86096 12.2301 3.66779 12.3101 3.44131 12.3101C3.21484 12.3101 3.015 12.2301 2.84181 12.0701C2.66863 11.9101 2.58203 11.7101 2.58203 11.4701C2.58203 11.2301 2.67529 11.0301 2.8618 10.8701L7.41799 6.31006L2.8618 1.75006C2.67529 1.59006 2.58203 1.39006 2.58203 1.15006C2.58203 0.910059 2.66863 0.710059 2.84181 0.550059C3.015 0.390059 3.21484 0.310059 3.44131 0.310059C3.66779 0.310059 3.86096 0.390059 4.02083 0.550059L9.17652 5.71006C9.36303 5.87006 9.45628 6.07006 9.45628 6.31006C9.45628 6.55006 9.36303 6.75006 9.17652 6.91006Z"
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
          d="M2.55859 6.31006C2.55859 6.07006 2.65193 5.87006 2.83859 5.71006L7.99859 0.550059C8.15859 0.390059 8.35193 0.310059 8.57859 0.310059C8.80526 0.310059 9.00526 0.390059 9.17859 0.550059C9.35193 0.710059 9.43859 0.910059 9.43859 1.15006C9.43859 1.39006 9.34526 1.59006 9.15859 1.75006L4.59859 6.31006L9.15859 10.8701C9.31859 11.0301 9.39859 11.2301 9.39859 11.4701C9.39859 11.7101 9.31859 11.9101 9.15859 12.0701C8.99859 12.2301 8.80526 12.3101 8.57859 12.3101C8.35193 12.3101 8.15859 12.2301 7.99859 12.0701L2.83859 6.91006C2.65193 6.75006 2.55859 6.55006 2.55859 6.31006Z"
          fill="currentColor"
        />
      </svg>
    </button>
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-brand-section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-dark mb-16 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-medium text-brand-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-brand-dark opacity-75 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Type Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark">Browse by Type</h2>
            <button className="flex items-center gap-2 text-brand-dark font-medium hover:text-brand-blue transition-colors">
              View All
              <ArrowRightIcon />
            </button>
          </div>

          {[0, 2].map((startIndex) => (
            <div key={startIndex} className={`grid md:grid-cols-2 gap-8 ${startIndex === 2 ? "mt-8" : ""}`}>
              {carTypes.slice(startIndex, startIndex + 2).map((car) => (
                <div
                  key={car.label}
                  className="relative rounded-2xl overflow-hidden h-96 group cursor-pointer"
                >
                  <img
                    src={car.image}
                    alt={car.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-8 left-8">
                    <div className="bg-white rounded-full px-6 py-3 flex items-center gap-3">
                      <span className="text-2xl">{car.icon}</span>
                      <span className="font-medium text-brand-dark">{car.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Auto Loan Calculator Section */}
      <section className="bg-brand-lightblue py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark mb-6">
                Auto Loan Calculator
              </h2>
              <p className="text-brand-dark mb-8 leading-relaxed">
                Use this car payment calculator to estimate monthly payments on
                your next new or used auto loan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm text-brand-gray mb-2">
                    Price ($)
                  </label>
                  <input
                    type="text"
                    value={calculatorValues.price}
                    onChange={(e) =>
                      setCalculatorValues({
                        ...calculatorValues,
                        price: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-brand-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-gray mb-2">
                    Interest Rate
                  </label>
                  <input
                    type="text"
                    value={calculatorValues.interestRate}
                    onChange={(e) =>
                      setCalculatorValues({
                        ...calculatorValues,
                        interestRate: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-brand-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-gray mb-2">
                    Loan Term (year)
                  </label>
                  <input
                    type="text"
                    value={calculatorValues.loanTerm}
                    onChange={(e) =>
                      setCalculatorValues({
                        ...calculatorValues,
                        loanTerm: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-brand-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-gray mb-2">
                    Down Payment
                  </label>
                  <input
                    type="text"
                    value={calculatorValues.downPayment}
                    onChange={(e) =>
                      setCalculatorValues({
                        ...calculatorValues,
                        downPayment: e.target.value,
                      })
                    }
                    className="w-full p-4 border border-brand-lightgray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <button className="w-full bg-brand-blue text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors">
                Calculate
                <ArrowRightIcon />
              </button>
            </div>

            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5232ad159261160e567e25b266081c08f9e9bf5c?width=3600"
                alt="Auto Loan Calculator"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-dark mb-16">
            What our customers say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-section p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm flex items-center justify-center ${
                          i < testimonial.rating
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      >
                        <StarIcon />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-brand-gray">Verified</span>
                </div>

                <h4 className="font-medium text-brand-dark mb-3">
                  {testimonial.title}
                </h4>
                <p className="text-brand-dark text-sm mb-4 opacity-75">
                  {testimonial.review}
                </p>
                <div className="font-medium text-brand-dark text-sm">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8 justify-center">
            <button className="w-16 h-12 border border-brand-lightgray rounded-full flex items-center justify-center hover:bg-brand-lightgray transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 12 13" fill="none">
                <path
                  d="M2.55859 6.75C2.55859 6.51 2.65193 6.31 2.83859 6.15L7.99859 0.990001C8.15859 0.83 8.35193 0.75 8.57859 0.75C8.80526 0.75 9.00526 0.83 9.17859 0.990001C9.35193 1.15 9.43859 1.35 9.43859 1.59C9.43859 1.83 9.34526 2.03 9.15859 2.19L4.59859 6.75L9.15859 11.31C9.31859 11.47 9.39859 11.67 9.39859 11.91C9.39859 12.15 9.31859 12.35 9.15859 12.51C8.99859 12.67 8.80526 12.75 8.57859 12.75C8.35193 12.75 8.15859 12.67 7.99859 12.51L2.83859 7.35C2.65193 7.19 2.55859 6.99 2.55859 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="w-16 h-12 border border-brand-lightgray rounded-full flex items-center justify-center hover:bg-brand-lightgray transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 12 13" fill="none">
                <path
                  d="M9.17652 7.35L4.02083 12.51C3.86096 12.67 3.66779 12.75 3.44131 12.75C3.21484 12.75 3.015 12.67 2.84181 12.51C2.66863 12.35 2.58203 12.15 2.58203 11.91C2.58203 11.67 2.67529 11.47 2.8618 11.31L7.41799 6.75L2.8618 2.19C2.67529 2.03 2.58203 1.83 2.58203 1.59C2.58203 1.35 2.66863 1.15 2.84181 0.990001C3.015 0.83 3.21484 0.75 3.44131 0.75C3.66779 0.75 3.86096 0.83 4.02083 0.990001L9.17652 6.15C9.36303 6.31 9.45628 6.51 9.45628 6.75C9.45628 6.99 9.36303 7.19 9.17652 7.35Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-brand-blue py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Shop used cars, whether you're
                <br />
                on the lot or on the go
              </h2>
              <p className="mb-8 leading-relaxed opacity-90">
                Download our app to save cars and create alerts, scan window
                stickers on our lot for more details, and even call dibs on a
                car by holding it for up to 7 days.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-brand-blue px-6 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-medium">Apple Store</div>
                  </div>
                </button>
                <button className="bg-white text-brand-blue px-6 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7bc59e18964a9e937d45968ea9ae0d522bf0c3ef?width=3840"
                alt="Mobile App"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-brand-dark mb-16">
            Latest Blog Posts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-brand-dark">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-brand-dark mb-3">
                  <span>{post.author}</span>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-medium text-brand-dark leading-tight group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;