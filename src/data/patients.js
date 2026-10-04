export const patients = [
  {
    id: "P001",
    name: "Jean Claude N.",
    age: 34,
    gender: "Male",
    status: "admitted",
    department: "Internal Medicine",
    phone: "+250 78 000 1001",
    diagnosis: "Malaria",
    history: [
      "Admitted for fever and fatigue.",
      "Malaria test returned positive.",
      "Treatment started and patient is under observation."
    ],
    billing: [
      ["Consultation", 10000],
      ["Laboratory", 18000],
      ["Medication", 12500]
    ]
  },
  {
    id: "P002",
    name: "Marie Claire U.",
    age: 28,
    gender: "Female",
    status: "outpatient",
    department: "General Outpatient",
    phone: "+250 78 000 1002",
    diagnosis: "Respiratory infection",
    history: [
      "Presented with cough and sore throat.",
      "Vital signs checked.",
      "Outpatient medication prescribed."
    ],
    billing: [
      ["Consultation", 10000],
      ["Laboratory", 12000],
      ["Medication", 8000]
    ]
  },
  {
    id: "P003",
    name: "Patrick M.",
    age: 51,
    gender: "Male",
    status: "discharged",
    department: "Surgery",
    phone: "+250 78 000 1003",
    diagnosis: "Minor surgical procedure",
    history: [
      "Admitted for a scheduled procedure.",
      "Procedure completed successfully.",
      "Discharged with follow-up instructions."
    ],
    billing: [
      ["Consultation", 10000],
      ["Procedure", 95000],
      ["Medication", 22000]
    ]
  },
  {
    id: "P004",
    name: "Aline Mukamana",
    age: 42,
    gender: "Female",
    status: "admitted",
    department: "Maternity",
    phone: "+250 78 000 1004",
    diagnosis: "Pregnancy monitoring",
    history: [
      "Admitted for routine maternity monitoring.",
      "Mother and baby monitored regularly.",
      "Next clinical review scheduled."
    ],
    billing: [
      ["Consultation", 12000],
      ["Ultrasound", 25000],
      ["Medication", 6500]
    ]
  },
  {
    id: "P005",
    name: "David Nshimiyimana",
    age: 63,
    gender: "Male",
    status: "outpatient",
    department: "Cardiology",
    phone: "+250 78 000 1005",
    diagnosis: "Hypertension",
    history: [
      "Routine blood pressure review.",
      "Blood pressure monitored.",
      "Follow-up appointment recommended."
    ],
    billing: [
      ["Consultation", 15000],
      ["ECG", 30000],
      ["Medication", 18000]
    ]
  }
];