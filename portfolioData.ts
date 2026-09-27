import { ExperienceItem, SkillCategory, ProjectItem, EducationItem, CertificationItem, ContactInfo } from '../types';

export const candidateProfile: ContactInfo = {
  name: "Rushikesh Ganpat Dhole",
  role: "Mechanical Design Engineer",
  email: "rushikesh.dhole2902@gmail.com",
  phones: ["+91 7887922902", "+91 9158185710"],
  linkedIn: "https://www.linkedin.com/in/rushikesh-dhole-72b643223",
  location: "Satara, Maharashtra, India"
};

export const heroData = {
  name: candidateProfile.name,
  role: candidateProfile.role,
  subtitle: "CAD-focused Mechanical Engineer specializing in 3D modeling, engineering drawings, fabrication detailing, sheet-metal development, and mechanical equipment design.",
  summary: "Dedicated mechanical design engineer with proven industry experience in developing heavy fabrication drawings, precision CAD models, sheet metal layouts, and specialized R&D equipment from concept through manufacturing readiness.",
  badges: ["Siemens NX", "SolidWorks", "Solid Edge", "AutoCAD", "GD&T", "Sheet Metal"]
};

export const aboutHighlights = [
  {
    title: "Mechanical Design",
    description: "Designing end-to-end mechanical assemblies, specialized testing equipment, and R&D components for industrial and naval applications.",
    icon: "Cog"
  },
  {
    title: "CAD Modeling",
    description: "High-precision parametric 3D modeling in Siemens NX, SolidWorks, and Solid Edge with full design intent and constraint hierarchy.",
    icon: "Box"
  },
  {
    title: "Engineering Drawings",
    description: "Producing client-approved General Arrangement (GA) drawings, fabrication detailing, cutting drawings, and GD&T-compliant 2D drafts.",
    icon: "Compass"
  },
  {
    title: "Fabrication Detailing",
    description: "Sheet-metal development size calculations for bending parts, nesting optimization (Smart 2D, Auto Nest), and ERP item coding.",
    icon: "Layers"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Assistant Design Engineer",
    company: "Nikhtish Filtration & Protection Pvt. Ltd.",
    location: "Kesurdi Tal, Khandala, Satara",
    period: "March 2024 – Present",
    type: "Full-Time",
    responsibilities: [
      "Preparing customer service General Arrangement (GA) drawings for client review and formal approval.",
      "Creating parametric 3D models, complex assembly drawings, and accurate cutting drawings for shop-floor fabrication.",
      "Calculating development sizes of bending parts to ensure tight fabrication tolerances.",
      "Creating optimized sheet layouts using Smart 2D Optimizer and Auto Nest to maximize material utilization.",
      "Generating and maintaining engineering item codes and structured Bills of Materials (BOM) within the ERP system.",
      "Designing a HEPA Filter Test Rig Machine for evaluating filter efficiency, leakage, and pressure drop under controlled conditions.",
      "Designing an R&D Stage Air Balancing Damper for CBRN (Chemical, Biological, Radiological, and Nuclear) HVAC applications.",
      "Designing an R&D Stage Spring Overloaded Overpressure Controller for wall-mounted applications, including Navy ship installations."
    ],
    technologies: ["Siemens NX", "AutoCAD", "Smart 2D Optimizer", "Auto Nest", "ERP System", "Sheet Metal", "Fabrication Detailing"]
  },
  {
    id: "exp-2",
    role: "Graduate Trainee Engineer – DCD Tool Design",
    company: "Bajaj Maharashtra Scooter Ltd.",
    location: "Satara, Maharashtra",
    period: "August 2022 – March 2024",
    type: "Trainee / Full-Time",
    responsibilities: [
      "Designing precision EDM electrodes according to client component requirements and die-casting specifications.",
      "Preparing comprehensive manufacturing detailing and accurate Bill of Materials (BOM) for tooling production.",
      "Conducting in-depth model inspection studies to verify dimensional accuracy and draft compliance.",
      "Performing shot model studies and evaluating tooling longevity and component fill integrity.",
      "Conducting casting model and machine model studies to ensure optimal machining allowances.",
      "Performing comprehensive 3D CAD modeling and precise 2D drafting for tooling and machine fixtures."
    ],
    technologies: ["SolidWorks", "Tool Design", "Electrode Design", "Die Casting", "Machining Study", "2D Drafting", "BOM"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "CAD & Design",
    category: "cad",
    description: "Industry-standard parametric 3D modeling and 2D drafting suites.",
    skills: [
      "Siemens NX / NX CAD",
      "SolidWorks",
      "Solid Edge",
      "AutoCAD",
      "3D Modeling",
      "2D Drafting",
      "Assembly Drawings",
      "Engineering Drawings",
      "Fabrication Detailing"
    ]
  },
  {
    title: "Engineering Knowledge",
    category: "engineering",
    description: "Core mechanical engineering principles and drafting standards.",
    skills: [
      "Orthographic Projection",
      "Isometric Drawing",
      "Dimensioning",
      "GD&T",
      "Machine Drawing",
      "Sheet-Metal Development",
      "Sheet Layout",
      "Bill of Materials (BOM)",
      "Electrode Design"
    ]
  },
  {
    title: "Manufacturing Knowledge",
    category: "manufacturing",
    description: "Machining operations, nesting tools, and production systems.",
    skills: [
      "CNC Machines",
      "EDM Machines",
      "Wire-Cut Machines",
      "Casting Models",
      "Machine Models",
      "Auto Nest",
      "Smart 2D Optimizer",
      "ERP Systems"
    ]
  },
  {
    title: "Professional Skills",
    category: "soft",
    description: "Engineering communication, project execution, and teamwork.",
    skills: [
      "Technical Writing",
      "Critical Thinking",
      "Cross-Functional Collaboration",
      "Problem Solving",
      "Learning New Technologies"
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "HEPA Filter Test Rig Machine",
    category: "Filtration & Testing Equipment",
    shortDescription: "Designed an industrial test rig machine for evaluating HEPA filter efficiency, leakage, and pressure drop under controlled conditions.",
    fullDescription: "Developed the complete mechanical layout and fabrication detailing for an industrial-grade HEPA Filter Test Rig Machine at Nikhtish Filtration & Protection Pvt. Ltd. The rig provides precise air delivery, pressure-monitoring chambers, and airtight filter housing to evaluate filtration efficiency, detect particulate leakage, and monitor differential pressure drop under standardized test protocols.",
    tags: ["Mechanical Design", "CAD", "Testing Equipment", "Fabrication"],
    keyFeatures: [
      "Airtight chamber structure engineered for high differential pressure containment.",
      "Comprehensive assembly drawings and sheet metal cutting drawings for manufacturing.",
      "Integration of sensor tap ports for differential pressure and particulate counter probes.",
      "Optimized modular frame ensuring ease of filter replacement and maintenance."
    ],
    toolsUsed: ["Siemens NX", "AutoCAD", "Smart 2D Optimizer", "Sheet Metal"],
    schematicType: "hepa"
  },
  {
    id: "proj-2",
    title: "R&D Stage Air Balancing Damper – CBRN",
    category: "Defense & Environmental Protection",
    shortDescription: "Designed an air balancing damper intended to control airflow and help prevent the introduction of CBRN agents through HVAC systems.",
    fullDescription: "Engineered an R&D stage critical airflow regulation damper configured specifically for CBRN (Chemical, Biological, Radiological, and Nuclear) protective HVAC systems. The design ensures precise airflow throttling, rapid hermetic shut-off capability, and durable structural integrity under hazardous overpressure conditions.",
    tags: ["HVAC", "CBRN Protection", "Mechanical Design", "Airflow Control"],
    keyFeatures: [
      "Low-leakage blade linkage mechanism designed for uniform sealing along all perimeters.",
      "Aerodynamic blade profile minimizing system pressure drop during normal ventilation.",
      "Calculated bending development sizes for custom stainless/galvanized sheet-metal housings.",
      "Engineered to withstand sudden shockwaves and chemical decontamination procedures."
    ],
    toolsUsed: ["Siemens NX", "AutoCAD", "Fabrication Detailing", "Sheet-Metal Development"],
    schematicType: "damper"
  },
  {
    id: "proj-3",
    title: "R&D Stage Spring Overloaded Overpressure Controller",
    category: "Marine & Protective Defense Systems",
    shortDescription: "Designed a wall-mounted overpressure controller suitable for applications where the valve axle is preferably positioned horizontally, including Navy ship applications.",
    fullDescription: "Specialized mechanical R&D project addressing overpressure protection requirements in enclosed tactical shelters and Naval vessels. The spring-overloaded controller regulates internal atmospheric overpressure by venting excess air while maintaining a positive pressure barrier against toxic ingress, engineered for horizontal axle orientation.",
    tags: ["Pressure Control", "Mechanical Design", "Marine Application", "R&D"],
    keyFeatures: [
      "Calibrated spring-loaded counterbalancing mechanism for accurate relief cracking pressures.",
      "Wall-mounted structural flange assembly optimized for marine bulkhead vibration resistance.",
      "Horizontally oriented valve axle design ensuring balanced pivot operation under high sea states.",
      "Complete assembly modeling and tolerance stack-up analysis."
    ],
    toolsUsed: ["Siemens NX", "Engineering Drawings", "Assembly Modeling", "BOM"],
    schematicType: "controller"
  },
  {
    id: "proj-4",
    title: "Moving Belt Conveyor",
    category: "Material Handling & Machine Design",
    shortDescription: "Final-year sponsored engineering project focused on the design and development of a moving belt conveyor.",
    fullDescription: "Academic capstone industry-sponsored project involving the mechanical design, load calculation, structural sizing, and fabrication of a moving belt conveyor system. Covered motor power calculations, belt tension sizing, roller shaft diameter determination, structural chassis development, and safety guards.",
    tags: ["Machine Design", "Conveyor", "Mechanical Engineering", "Product Development"],
    keyFeatures: [
      "Structural frame stress and deflection analysis for targeted payload capacity.",
      "Drive drum, idler roller, and take-up tensioning system detailed in 3D CAD.",
      "Component bill of materials with standard bearing, motor, and belt specifications.",
      "Orthographic fabrication drawings with weld symbols and dimensional tolerances."
    ],
    toolsUsed: ["CAD Modeling", "Machine Drawing", "Orthographic Projection", "BOM"],
    schematicType: "conveyor"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Mechanical Engineering",
    institution: "Dr. Babasaheb Ambedkar Technological University",
    location: "Lonere, Maharashtra",
    year: "2022",
    badge: "Graduated"
  },
  {
    id: "edu-2",
    degree: "Diploma in Mechanical Engineering",
    institution: "Maharashtra State Board of Technical Education",
    location: "Mumbai, Maharashtra",
    year: "2019",
    badge: "Completed"
  },
  {
    id: "edu-3",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "State Board",
    location: "Kolhapur, Maharashtra",
    year: "2016",
    badge: "Science"
  },
  {
    id: "edu-4",
    degree: "Secondary School Certificate (SSC)",
    institution: "State Board",
    location: "Kolhapur, Maharashtra",
    year: "2014",
    badge: "Completed"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Siemens NX Training",
    issuer: "DigitalCADD Solutions",
    type: "Professional CAD Certification",
    year: "Specialized Course"
  },
  {
    id: "cert-2",
    name: "SolidWorks Premium Training",
    issuer: "DigitalCADD Solutions",
    type: "Parametric 3D & Assemblies",
    year: "Specialized Course"
  },
  {
    id: "cert-3",
    name: "CCC Certificate (Course on Computer Concepts)",
    issuer: "Disha Computer Institute",
    type: "Computing & IT Proficiency",
    year: "Certified"
  }
];
