import React from 'react';
import { FiShare2 } from 'react-icons/fi';

export function VideoResult({ generatedVideo }) {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">
        Your Generated Video
      </h3>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB3aXRoJTIwY29tcHV0ZXJzJTIwc2hvd2luZyUyMEh1YlNwb3QlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzM3NjQwNTcxfDA&ixlib=rb-4.0.3&q=80&w=1080" 
            alt="Video preview" 
            className="w-full h-full object-cover"
            data-image-request="modern office workspace with computers showing HubSpot dashboard"
          />
        </div>
        <div className="mt-6 flex items-center justify-end space-x-4">
          <button className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 cursor-pointer">
            <FiShare2 className="mr-2" />
            Share Video
          </button>
        </div>
      </div>
    </section>
  );
}