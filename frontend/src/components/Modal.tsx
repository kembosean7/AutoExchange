import React from "react";
import SearchBar from "./SearchBar";

interface Props {
  open: boolean;
  cancelFn?: () => void;
  titleContent?: React.ReactNode;
  content?: React.ReactNode;
}

const Modal: React.FC<Props> = ({ open, cancelFn, titleContent, content }) => {
  if (!open) return null; // don’t render if closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg w-full p-8">
        {/* Close button */}
        <button
          onClick={cancelFn}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        {titleContent && (
          <h2 className="text-lg font-semibold mb-4">{titleContent}</h2>
        )}

        {/* Content */}
        {content || <SearchBar />}
      </div>
    </div>
  );
};

export default Modal;
