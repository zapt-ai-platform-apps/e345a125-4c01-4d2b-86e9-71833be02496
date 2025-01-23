import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import axios from 'axios';
import { FiVideo, FiLoader, FiCheckCircle } from 'react-icons/fi';
import { Header } from './components/Header';
import { VideoResult } from './components/VideoResult';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      console.log('Starting video generation...');
      const { data } = await axios.post('/api/generate', { text: inputText });
      setGeneratedVideo(data.videoUrl);
      console.log('Video generated successfully:', data.videoUrl);
    } catch (err) {
      console.error('Video generation error:', err);
      setError('Failed to generate video. Please try again.');
      Sentry.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Create Engaging HubSpot Tutorial Videos
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Transform your HubSpot knowledge into shareable video content
          </p>
          
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
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </section>

        {generatedVideo && <VideoResult generatedVideo={generatedVideo} />}
      </main>
    </div>
  );
}