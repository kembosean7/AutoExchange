import React from "react"



function thy(){

    return (
        <>
<div className="bg-gray-800 rounded-2xl overflow-hidden">
    <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-80 h-48 md:h-72">
        <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/653cdc2e2a0a587ab9fe1d07de7dbfec422320e9?width=637"
        alt="T-Cross 2023"
        className="w-full h-full object-cover"
        />
    </div>

    <div className="flex-1 p-6 md:p-8 text-white">
        <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-xl font-medium mb-2">
            T-Cross – 2023
            </h3>
            <p className="text-sm opacity-75">
            4.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
            </p>
        </div>
        <button className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
            <StarIcon />
        </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
        <div>
            <div className="opacity-75">Mileage</div>
            <div>15 Miles</div>
        </div>
        <div>
            <div className="opacity-75">Fuel</div>
            <div>Petrol</div>
        </div>
        <div>
            <div className="opacity-75">Transmission</div>
            <div>CVT</div>
        </div>
        </div>

        <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">$15,000</div>
        <button className="flex items-center gap-2 text-white hover:text-brand-blue transition-colors">
            View Details
            <ArrowRightIcon />
        </button>
        </div>
    </div>
    </div>
</div>

{/* Card 2 */}
<div className="bg-gray-800 rounded-2xl overflow-hidden">
    <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-80 h-48 md:h-72">
        <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/bdfb1f15cf5774ccd56aa9ba0ed75881d3d1b08e?width=637"
        alt="C-Class 2023"
        className="w-full h-full object-cover"
        />
    </div>
    <div className="flex-1 p-6 md:p-8 text-white">
        <div className="flex justify-between items-start mb-4">
        <div>
            <h3 className="text-xl font-medium mb-2">
            C-Class – 2023
            </h3>
            <p className="text-sm opacity-75">
            4.0 D5 PowerPulse Momentum 5dr AWD… Geartronic Estate
            </p>
        </div>
        <button className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
            <StarIcon />
        </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
        <div>
            <div className="opacity-75">Mileage</div>
            <div>50 Miles</div>
        </div>
        <div>
            <div className="opacity-75">Fuel</div>
            <div>Petrol</div>
        </div>
        <div>
            <div className="opacity-75">Transmission</div>
            <div>Automatic</div>
        </div>
        </div>

        <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">$150,000</div>
        <button className="flex items-center gap-2 text-white hover:text-brand-blue transition-colors">
            View Details
            <ArrowRightIcon />
        </button>
        </div>
    </div>
    </div>
</div>
</>

    )
 }