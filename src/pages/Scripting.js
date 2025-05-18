// src/pages/ScriptingPage.js
import React, { useState } from 'react';
// import ScriptEditor from '../components/ScriptEditor'; // You would build this
// import GrammarCorrector from '../components/GrammarCorrector'; // You would build this

// Placeholder components for now
const ScriptEditorPlaceholder = () => {
  const [script, setScript] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyzeScript = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSuggestions([
        { id: 1, type: 'grammar', original: 'Its a nice day.', corrected: 'It\'s a nice day.', explanation: 'Possessive vs. Contraction' },
        { id: 2, type: 'style', original: 'The report was read by John.', corrected: 'John read the report.', explanation: 'Active voice preferred' }
      ]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-neutral-dark mb-4">AI Script Assistant</h2>
      <textarea
        className="w-full h-64 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition duration-150 ease-in-out mb-4"
        placeholder="Start writing your script here..."
        value={script}
        onChange={(e) => setScript(e.target.value)}
      />
      <div className="flex justify-end mb-6">
        <button
          onClick={handleAnalyzeScript}
          disabled={isLoading}
          className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md disabled:opacity-50 transition duration-150 ease-in-out flex items-center"
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isLoading ? 'Analyzing...' : 'Analyze & Correct'}
        </button>
      </div>
      {suggestions.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-neutral-dark mb-3">Suggestions:</h3>
          <ul className="space-y-3">
            {suggestions.map(suggestion => (
              <li key={suggestion.id} className="p-3 bg-neutral-light border border-gray-200 rounded-md">
                <p className="text-sm text-red-600">Original: <span className="line-through">{suggestion.original}</span></p>
                <p className="text-sm text-green-600">Suggested: {suggestion.corrected}</p>
                <p className="text-xs text-gray-500 mt-1">Reason: {suggestion.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


function ScriptingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-neutral-dark">Script Editor & Grammar AI</h1>
      <p className="text-gray-600 mb-6">
        Craft your scripts with AI-powered assistance for grammar, style, and clarity.
      </p>
      <ScriptEditorPlaceholder />
      {/* You'd build out the actual ScriptEditor and GrammarCorrector components */}
      {/* <ScriptEditor /> */}
      {/* <GrammarCorrector /> */}
    </div>
  );
}

export default ScriptingPage;
