import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import axios from 'axios';
import { VideoForm } from './components/VideoForm';
import { VideoResult } from './components/VideoResult';
import { Header } from './components/Header';
import * as Sentry from '@sentry/browser';

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
          
          <VideoForm
            inputText={inputText}
            setInputText={setInputText}
            loading={loading}
            error={error}
            handleGenerateVideo={handleGenerateVideo}
          />
        </section>

        {generatedVideo && <VideoResult generatedVideo={generatedVideo} />}
      </main>
    </div>
  );
}