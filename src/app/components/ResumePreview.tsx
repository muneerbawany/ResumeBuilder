// components/ResumePreview.tsx
import React, { forwardRef } from 'react';
import { ResumeData } from '../types/resume';

interface ResumePreviewProps {
  data: ResumeData;
  backgroundColor: string;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data, backgroundColor }, ref) => {
    return (
      <div 
        ref={ref}
        className="p-8 max-w-4xl mx-auto"
        style={{ backgroundColor }}
      >
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
            <p className="text-gray-600">
              {data.personalInfo.email} | {data.personalInfo.phone}
            </p>
            <p className="text-gray-600">{data.personalInfo.address}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 mb-4">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <strong>{edu.school}</strong>
                  <span>{edu.year}</span>
                </div>
                <p>{edu.degree}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 mb-4">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between">
                  <strong>{exp.company}</strong>
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="font-semibold">{exp.position}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold border-b-2 mb-4">Skills</h2>
            <p>{data.skills.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
);

ResumePreview.displayName = 'ResumePreview';
export default ResumePreview;