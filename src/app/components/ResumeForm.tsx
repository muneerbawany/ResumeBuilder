// components/ResumeForm.tsx
import React, { useState } from 'react';
import { ResumeData } from '../types/resume';

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
  initialData?: ResumeData;
}

export default function ResumeForm({ onSubmit, initialData }: ResumeFormProps) {
  const [formData, setFormData] = useState<ResumeData>(initialData || {
    personalInfo: { name: '', email: '', phone: '', address: '' },
    education: [],
    experience: [],
    skills: []
  });

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', degree: '', year: '' }]
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { 
        company: '', 
        position: '', 
        startDate: '', 
        endDate: '', 
        description: '' 
      }]
    });
  };

  const removeEducation = (index: number) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const removeExperience = (index: number) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded"
            value={formData.personalInfo.name}
            onChange={(e) => setFormData({
              ...formData,
              personalInfo: { ...formData.personalInfo, name: e.target.value }
            })}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            value={formData.personalInfo.email}
            onChange={(e) => setFormData({
              ...formData,
              personalInfo: { ...formData.personalInfo, email: e.target.value }
            })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border rounded"
            value={formData.personalInfo.phone}
            onChange={(e) => setFormData({
              ...formData,
              personalInfo: { ...formData.personalInfo, phone: e.target.value }
            })}
          />
          <input
            type="text"
            placeholder="Address"
            className="p-2 border rounded"
            value={formData.personalInfo.address}
            onChange={(e) => setFormData({
              ...formData,
              personalInfo: { ...formData.personalInfo, address: e.target.value }
            })}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Education</h2>
          <button
            type="button"
            onClick={addEducation}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Education
          </button>
        </div>
        {formData.education.map((edu, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-4 border rounded">
            <input
              type="text"
              placeholder="School"
              className="p-2 border rounded"
              value={edu.school}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].school = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />
            <input
              type="text"
              placeholder="Degree"
              className="p-2 border rounded"
              value={edu.degree}
              onChange={(e) => {
                const newEducation = [...formData.education];
                newEducation[index].degree = e.target.value;
                setFormData({ ...formData, education: newEducation });
              }}
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Year"
                className="p-2 border rounded flex-grow"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...formData.education];
                  newEducation[index].year = e.target.value;
                  setFormData({ ...formData, education: newEducation });
                }}
              />
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Experience</h2>
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Experience
          </button>
        </div>
        {formData.experience.map((exp, index) => (
          <div key={index} className="space-y-4 p-4 border rounded">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="p-2 border rounded"
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...formData.experience];
                  newExperience[index].company = e.target.value;
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <input
                type="text"
                placeholder="Position"
                className="p-2 border rounded"
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...formData.experience];
                  newExperience[index].position = e.target.value;
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <input
                type="text"
                placeholder="Start Date"
                className="p-2 border rounded"
                value={exp.startDate}
                onChange={(e) => {
                  const newExperience = [...formData.experience];
                  newExperience[index].startDate = e.target.value;
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <input
                type="text"
                placeholder="End Date"
                className="p-2 border rounded"
                value={exp.endDate}
                onChange={(e) => {
                  const newExperience = [...formData.experience];
                  newExperience[index].endDate = e.target.value;
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
            </div>
            <textarea
              placeholder="Description"
              className="p-2 border rounded w-full"
              value={exp.description}
              onChange={(e) => {
                const newExperience = [...formData.experience];
                newExperience[index].description = e.target.value;
                setFormData({ ...formData, experience: newExperience });
              }}
            />
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Skills</h2>
        <textarea
          placeholder="Enter skills (comma-separated)"
          className="p-2 border rounded w-full"
          value={formData.skills.join(', ')}
          onChange={(e) => setFormData({
            ...formData,
            skills: e.target.value.split(',').map(skill => skill.trim())
          })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save Resume
      </button>
    </form>
  );
}