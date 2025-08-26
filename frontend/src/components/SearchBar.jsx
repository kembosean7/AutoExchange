import { useState, useRef, useEffect } from "react";


export default function SearchBar({


  placeholder = "Search Mockups, Logos, Design Templates...",
  onSearch,
  onVoiceResult,
}) {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Optional: basic browser voice support (Chrome)
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      const r = new SR();
      r.lang = "en-US";
      r.interimResults = false;
      r.maxAlternatives = 1;
      r.onresult = (e) => {
        const text = e.results[0][0].transcript;
        setQuery(text);
        if (onVoiceResult) onVoiceResult(text);
      };
      r.onend = () => setListening(false);
      recognitionRef.current = r;
    }
  }, [onVoiceResult]);

  const handleVoice = () => {
    if (recognitionRef.current) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      // Fallback action
      alert("Voice search not supported in this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      {/* Input (with left icon + mic inside) */}
      <div className="relative flex-1">
        {/* Left icon */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          {/* simple 'spark/sun' icon */}
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 6V4M12 20v-2M6 12H4M20 12h-2M5.64 5.64l-1.4-1.4M19.78 19.78l-1.4-1.4M5.64 18.36l-1.4 1.4M19.78 4.22l-1.4 1.4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle
              cx="12"
              cy="12"
              r="3.5"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <input
          id="search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full h-12 rounded-full border border-gray-200 bg-white pl-12 pr-12 text-[15px] text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500"
        />

        {/* Mic button with red dot */}
        <button
          type="button"
          onClick={handleVoice}
          aria-label="Voice search"
          className="absolute inset-y-0 right-0 flex items-center pr-4"
        >
          <div className="relative">
            <svg
              className={`h-5 w-5 ${
                listening ? "text-blue-600" : "text-gray-400"
              } hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200`}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19 11a7 7 0 1 1-14 0M12 21v-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 block h-2 w-2 rounded-full bg-red-500"></span>
          </div>
        </button>
      </div>

      {/* Blue search button */}
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>Search</span>
      </button>
    </form>

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