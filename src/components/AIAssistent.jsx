import {useState} from "react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {};

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-18 h-18 flex flex-col items-center justify-center shadow-lg z-50 animate-pulse-slow"
      >
        🤖 <span>Ask AI</span>
      </button>

      {/* Popup Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <span>AI Assistant</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto">
            <p className="text-gray-500 text-sm">
              Hello! How can I assist you today?
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleClick}
              className="bg-green-600 hover:bg-green-700 text-white px-2 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
      {/* Tailwind Custom Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AIAssistant;
