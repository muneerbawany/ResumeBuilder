'use client';

import React, { useRef, useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { ResumeData } from './types/resume';

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [isEditing, setIsEditing] = useState(true);
  const previewRef = useRef(null);

  const handlePrint = () => {
    // Add print-specific styles
    const originalContent = document.body.innerHTML;
    const printContent = previewRef.current ? (previewRef.current as HTMLElement).innerHTML : '';
    
    document.body.innerHTML = `
      <div style="background-color: ${backgroundColor}">
        ${printContent}
      </div>
    `;
    
    window.print();
    
    // Restore original content
    document.body.innerHTML = originalContent;
    
    // Re-render React app
    window.location.reload();
  };

  const handleSubmit = (data: ResumeData) => {
    setResumeData(data);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Resume Builder by Muneer Bawany</h1>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Print/Save PDF
          </button>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="h-10 w-20"
          />
        </div>

        {isEditing ? (
          <ResumeForm 
            onSubmit={handleSubmit}
            initialData={resumeData || undefined}
          />
        ) : (
          resumeData && (
            <div ref={previewRef}>
              <ResumePreview
                data={resumeData}
                backgroundColor={backgroundColor}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}