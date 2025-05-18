// src/pages/AudioTranscriptionPage.js
import React, { useState, useRef } from 'react';
import { ArrowUpTrayIcon, DocumentTextIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

// Placeholder component for now
const AudioProcessorPlaceholder = () => {
  const [file, setFile] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [correctedTranscript, setCorrectedTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setTranscript(''); // Clear previous transcript
      setCorrectedTranscript(''); // Clear previous corrected transcript
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleProcessAudio = () => {
    if (!file) {
      alert("Please select an audio file first.");
      return;
    }
    setIsProcessing(true);
    // Simulate API call for transcription and correction
    setTimeout(() => {
      // This is where you'd call your AI service
      const raw_dummy_transcript = "helo world this is a test audio for jornalize its gonna be great.";
      const corrected_dummy_transcript = "Hello world. This is a test audio for JournalAIse. It's going to be great.";
      setTranscript(raw_dummy_transcript);
      setCorrectedTranscript(corrected_dummy_transcript);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-neutral-dark mb-6">Audio to Broadcast Text</h2>

      <div className="mb-6">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <button
          onClick={handleUploadClick}
          className="w-full flex flex-col items-center justify-center px-6 py-10 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition duration-150 ease-in-out cursor-pointer"
        >
          <ArrowUpTrayIcon className="h-12 w-12 text-gray-400 mb-2" />
          <span className="text-neutral-dark font-medium">
            {file ? file.name : 'Click to upload or drag & drop audio file'}
          </span>
          <span className="text-xs text-gray-500 mt-1">MP3, WAV, M4A supported (Max 50MB)</span>
        </button>
      </div>

      {file && (
        <div className="flex justify-center mb-6">
          <button
            onClick={handleProcessAudio}
            disabled={isProcessing}
            className="bg-accent hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md disabled:opacity-50 transition duration-150 ease-in-out flex items-center text-lg"
          >
            <SpeakerWaveIcon className="h-6 w-6 mr-2" />
            {isProcessing ? 'Processing Audio...' : 'Transcribe & Correct'}
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="text-center my-4">
          <div className="inline-flex items-center">
             <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
             </svg>
             <span className="text-lg font-medium text-neutral-dark">Turning your audio into gold...</span>
          </div>
        </div>
      )}

      {correctedTranscript && (
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
              <DocumentTextIcon className="h-6 w-6 mr-2 text-primary" />
              Raw Transcript (Preview)
            </h3>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md max-h-40 overflow-y-auto text-sm text-gray-700">
              {transcript}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
              <DocumentTextIcon className="h-6 w-6 mr-2 text-secondary" />
              Corrected & Broadcast-Ready Text
            </h3>
            <textarea
              className="w-full h-48 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition duration-150 ease-in-out"
              value={correctedTranscript}
              readOnly // Or allow editing
            />
            <div className="flex justify-end mt-2">
                <button className="bg-secondary hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
                    Copy Text
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function AudioTranscriptionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-neutral-dark">Audio Transcription Service</h1>
      <p className="text-gray-600 mb-6">
        Upload your audio files to get fast, accurate transcriptions, automatically corrected for broadcast.
      </p>
      <AudioProcessorPlaceholder />
      {/* <AudioProcessor /> */}
    </div>
  );
}

export default AudioTranscriptionPage;
