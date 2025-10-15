import {
  ChartColumnIncreasing,
  Search,
  NotepadText,
  FlaskConical,
} from "lucide-react";

const AnalyzedData = ({drugName, newUse, confidence, summary}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full max-w-5xl mx-auto mt-10">
      {/* Left box */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
        <h2 className="font-semibold mb-4 text-gray-800">Analysis</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <Search className="w-5 h-5 text-green-600" />
            <span>Data Retrieval</span>
          </li>
          <li className="flex items-center gap-2">
            <NotepadText className="w-5 h-5 text-green-600" />
            <span>Summarization</span>
          </li>
          <li className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-green-600" />
            <span>Analysis</span>
          </li>
          <li className="flex items-center gap-2">
            <ChartColumnIncreasing className="w-5 h-5 text-green-600" />
            <span>Report</span>
          </li>
        </ul>
      </div>

      {/* Right box */}
      <div className="w-full md:w-2/3 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Data Scanning Progress
        </h3>
        <div className="space-y-2">
          <p>
            <span className="font-medium text-gray-700">Drug:</span>{" "}
            {drugName || "—"}
          </p>
          <p>
            <span className="font-medium text-gray-700">New Use:</span>{" "}
            {newUse || "—"}
          </p>
          <p>
            <span className="font-medium text-gray-700">Confidence:</span>{" "}
            {confidence != null ? confidence.toFixed(2) : "—"}
          </p>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          {summary ||
            "Based on research data, this analysis shows potential therapeutic applications."}
        </p>
        <div className="mt-5 flex justify-between items-center">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View Sources →
          </button>
          <div className="p-2 rounded-sm bg-green-200 hover:bg-green-300 transition-colors">
            <ChartColumnIncreasing size={25} />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AnalyzedData;
