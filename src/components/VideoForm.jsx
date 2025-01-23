import React from 'react';
import { FiVideo, FiLoader } from 'react-icons/fi';

export const VideoForm = ({ 
  inputText,
  setInputText,
  loading,
  error,
  handleGenerateVideo
}) => {
  return (
    <form onSubmit={handleGenerateVideo} className="max-w-3xl mx-auto">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your HubSpot tutorial content..."
        className="w-full h-48 p-4 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none box-border"
        required
      />
      
      <button
        type="submit"
        disabled={loading}
        className={`mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${
          loading ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {loading ? (
          <span className="flex items-center">
            <FiLoader className="animate-spin mr-2" />
            Generating...
          </span>
        ) : (
          <span className="flex items-center">
            <FiVideo className="mr-2" />
            Create Video
          </span>
        )}
      </button>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}
    </form>
  );
};