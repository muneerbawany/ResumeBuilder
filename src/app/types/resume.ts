// types/resume.ts
export interface Education {
    school: string;
    degree: string;
    year: string;
  }
  
  export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export interface ResumeData {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    education: Education[];
    experience: Experience[];
    skills: string[];
  }