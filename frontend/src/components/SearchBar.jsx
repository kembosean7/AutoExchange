import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function SearchBar({ onSearch }) {

    const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`); // replace with real search logic
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Search</label>
                <Input
                  placeholder="Enter make, model, or keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Make</label>
                <Select value={selectedMake} onValueChange={setSelectedMake}>
                  <SelectTrigger className="text-gray-900">
                    <SelectValue placeholder="Any Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="text-gray-900">
                    <SelectValue placeholder="Any Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="coupe">Coupe</SelectItem>
                    <SelectItem value="convertible">Convertible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Link to="/browse" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search Cars
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        
  );
  // const [query, setQuery] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (onSearch) onSearch(query);
  // };

  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //     className="flex items-center max-w-lg mx-auto"
  //   >
  //     <label htmlFor="search" className="sr-only">
  //       Search
  //     </label>

  //     <div className="relative w-full">
  //       {/* Left Icon */}
  //       <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
  //         <svg
  //           className="w-4 h-4 text-gray-500 dark:text-gray-400"
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 21 21"
  //         >
  //           <path
  //             stroke="currentColor"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
  //           />
  //         </svg>
  //       </div>

  //       {/* Input */}
  //       <input
  //         type="text"
  //         id="search"
  //         value={query}
  //         onChange={(e) => setQuery(e.target.value)}
  //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  //         placeholder="Search Mockups, Logos, Design Templates..."
  //         required
  //       />

  //       {/* Voice Button */}
  //       <button
  //         type="button"
  //         className="absolute inset-y-0 right-0 flex items-center pe-3"
  //         onClick={() => alert("Voice search not implemented yet")}
  //       >
  //         <svg
  //           className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 16 20"
  //         >
  //           <path
  //             stroke="currentColor"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth="2"
  //             d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
  //           />
  //         </svg>
  //       </button>
  //     </div>

  //     {/* Submit Button */}
  //     <button
  //       type="submit"
  //       className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
  //     >
  //       <svg
  //         className="w-4 h-4 me-2"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 20 20"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
  //         />
  //       </svg>
  //       Search
  //     </button>
  //   </form>
  // );
}

// export default function SearchSection() {
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     alert(`Searching for: ${query}`); // replace with real search logic
//   };

//   return (
//     <section className="bg-indigo-900 h-50 p-8">
//       <div className="container mx-auto py-8">
//         {/* Search Input */}
//         <form onSubmit={handleSearch}>
//           <input
//             className="w-full h-16 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
//             type="search"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//         </form>

//         {/* Navigation Links */}
//         <nav className="flex flex-wrap">
//           {[
//             "Cardamom",
//             "Cinnamon",
//             "Chamomille",
//             "Apple",
//             "Mint",
//             "Curry",
//             "Fragrance",
//             "Amchoor",
//           ].map((item, idx) => (
//             <a
//               key={idx}
//               href="#"
//               className={`no-underline text-white py-3 px-4 font-medium mx-3 ${
//                 idx % 2 === 0
//                   ? "bg-indigo-700 hover:bg-indigo-800"
//                   : "bg-indigo-800 hover:bg-indigo-700"
//               } ${item === "Amchoor" ? "ml-auto" : ""}`}
//             >
//               {item}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </section>
//   );
// }