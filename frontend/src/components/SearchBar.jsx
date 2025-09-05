import { useState, useRef, useEffect } from "react";

// import login and sign up then render on call


export default function SearchBar({


  placeholder = "Search cars ...",
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

      <div className="relative flex-1">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">

        </div> */}

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
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500 h-10"
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
        {/* <span>Search</span> */}
      </button>
    </form>

            );

}

