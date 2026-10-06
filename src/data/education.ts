export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  note: string;
}

/** Education details from Mahbub's CV (Mahbub_Ali.pdf). */
export const education: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    period: "Graduated 2023",
    note: "CGPA: 3.58 / 4.00",
  },
];
