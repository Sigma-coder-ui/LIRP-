// ============================================
// LIRP — Complete Content Data (All Pages)
// ============================================

export const navLinks = [
  { label: 'Programs', href: '/programs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Career', href: '/career' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'About', href: '/about' },
];

export const footerLinks = {
  pages: [
    { label: 'Home', href: '/' },
    { label: 'Programs', href: '/programs' },
    { label: 'Projects', href: '/projects' },
    { label: 'Career Support', href: '/career' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Roadmap', href: '/roadmap' },
    { label: 'About', href: '/about' },
    { label: 'Apply', href: '/apply' },
    { label: 'Contact', href: '/contact' },
  ],
  programs: [
    { label: 'B.Tech 1st Year', href: '/programs#btech-1' },
    { label: 'B.Tech 2nd Year', href: '/programs#btech-2' },
    { label: 'BCA 1st Year', href: '/programs#bca-1' },
    { label: 'BCA 2nd Year', href: '/programs#bca-2' },
  ],
  social: {
    instagram: 'https://www.instagram.com/lirpofficial/',
    linkedin: 'https://linkedin.com/company/lirp',
    youtube: 'https://www.youtube.com/@lirptech12',
  },
};

// ---- PROGRAMS DATA ----
export const programs = [
  {
    id: 'btech-1',
    title: 'B.Tech 1st Year',
    subtitle: 'Foundation Builder',
    icon: '🚀',
    color: 'from-blue-600 to-blue-800',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-700',
    description: 'Start strong. Build your foundation with industry-relevant skills from day one of your engineering journey.',
    outcomes: [
      'Strong programming fundamentals in Python/Java',
      'First GitHub repository with real projects',
      'Understanding of industry expectations',
      'Basic portfolio website deployed live',
      'Introduction to open-source ecosystem',
    ],
    projects: ['Personal Portfolio', 'CLI Calculator', 'Basic Web App', 'Git & GitHub Mastery'],
    suitableFor: 'B.Tech 1st & 2nd Semester',
    duration: '6 months',
    curriculum: [
      { phase: 'Phase 1', title: 'Programming Foundations', weeks: 8, topics: ['Python/Java basics', 'Problem solving', 'Logic building'] },
      { phase: 'Phase 2', title: 'Web Fundamentals', weeks: 6, topics: ['HTML/CSS', 'JavaScript basics', 'Responsive design'] },
      { phase: 'Phase 3', title: 'Git & GitHub', weeks: 4, topics: ['Version control', 'Collaboration', 'Open source intro'] },
      { phase: 'Phase 4', title: 'Portfolio Building', weeks: 6, topics: ['Portfolio website', 'Project deployment', 'Online presence'] },
    ],
  },
  {
    id: 'btech-2',
    title: 'B.Tech 2nd Year',
    subtitle: 'Skill Accelerator',
    icon: '⚡',
    color: 'from-purple-600 to-purple-800',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-700',
    description: 'Level up your skills. Build meaningful projects and prepare for internship applications with confidence.',
    outcomes: [
      'Full-stack project portfolio (4+ projects)',
      'Data Structures & Algorithms practice',
      'Internship-ready resume & LinkedIn',
      'Technical interview preparation',
      'Team project experience with Agile',
    ],
    projects: ['Full-Stack Web App', 'REST API Project', 'DSA Problem Solving', 'Team Project (Agile)'],
    suitableFor: 'B.Tech 3rd & 4th Semester',
    duration: '6 months',
    curriculum: [
      { phase: 'Phase 1', title: 'Advanced Programming', weeks: 6, topics: ['DSA fundamentals', 'Problem patterns', 'Competitive programming intro'] },
      { phase: 'Phase 2', title: 'Full-Stack Development', weeks: 8, topics: ['React.js', 'Node.js', 'Database design'] },
      { phase: 'Phase 3', title: 'Project Building', weeks: 6, topics: ['Real-world projects', 'API integration', 'Deployment'] },
      { phase: 'Phase 4', title: 'Career Prep', weeks: 4, topics: ['Resume building', 'LinkedIn optimization', 'Interview practice'] },
    ],
  },
  {
    id: 'bca-1',
    title: 'BCA 1st Year',
    subtitle: 'Tech Explorer',
    icon: '🌱',
    color: 'from-emerald-600 to-emerald-800',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    description: 'Bridge the B.Tech gap. Build industry skills that set you apart and prove BCA students are just as capable.',
    outcomes: [
      'Programming fundamentals (Python/Java)',
      'Web development foundations',
      'First professional portfolio online',
      'Active GitHub presence',
      'Clear career direction in tech',
    ],
    projects: ['Portfolio Website', 'Python Automation', 'Database Project', 'Static Web App'],
    suitableFor: 'BCA 1st & 2nd Semester',
    duration: '6 months',
    curriculum: [
      { phase: 'Phase 1', title: 'Core Programming', weeks: 8, topics: ['Python/Java', 'Problem solving', 'Data types & structures'] },
      { phase: 'Phase 2', title: 'Web Development', weeks: 6, topics: ['HTML/CSS/JS', 'Responsive design', 'Basic interactivity'] },
      { phase: 'Phase 3', title: 'Database & Tools', weeks: 4, topics: ['SQL fundamentals', 'Git basics', 'Development tools'] },
      { phase: 'Phase 4', title: 'Portfolio & Presence', weeks: 6, topics: ['Portfolio site', 'GitHub profile', 'Career exploration'] },
    ],
  },
  {
    id: 'bca-2',
    title: 'BCA 2nd Year',
    subtitle: 'Career Launchpad',
    icon: '🎯',
    color: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-700',
    description: 'Go from student to professional. Get internship-ready with real projects, mentorship, and industry exposure.',
    outcomes: [
      'Advanced full-stack projects',
      'Internship application strategy',
      'Technical communication skills',
      'Direct industry mentorship access',
      'Placement readiness foundation',
    ],
    projects: ['Capstone Full-Stack App', 'REST API Development', 'Mobile-Responsive Portfolio', 'Open Source Contribution'],
    suitableFor: 'BCA 3rd & 4th Semester',
    duration: '6 months',
    curriculum: [
      { phase: 'Phase 1', title: 'Advanced Web Dev', weeks: 8, topics: ['React.js', 'Backend APIs', 'Database integration'] },
      { phase: 'Phase 2', title: 'Capstone Project', weeks: 6, topics: ['Full-stack app', 'Team collaboration', 'Code review'] },
      { phase: 'Phase 3', title: 'Career Preparation', weeks: 4, topics: ['Resume & portfolio', 'Interview prep', 'LinkedIn strategy'] },
      { phase: 'Phase 4', title: 'Industry Exposure', weeks: 6, topics: ['Mentorship sessions', 'Workshops', 'Networking'] },
    ],
  },
];

// ---- PROJECTS DATA ----
export const projectCategories = ['All', 'Web Development', 'Full-Stack', 'Python', 'Mobile', 'Open Source'];

export const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    description: 'A complete e-commerce web application with product catalog, cart, checkout, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    program: 'B.Tech 2nd Year',
    level: 'Advanced',
    image: '🛒',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description: 'A responsive, professional portfolio showcasing projects, skills, and contact information.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    program: 'All Programs',
    level: 'Beginner',
    image: '🎨',
  },
  {
    title: 'Task Management API',
    category: 'Python',
    description: 'RESTful API for task management with authentication, CRUD operations, and documentation.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Swagger'],
    program: 'B.Tech 2nd Year',
    level: 'Intermediate',
    image: '📋',
  },
  {
    title: 'Weather Dashboard',
    category: 'Web Development',
    description: 'Real-time weather app with location search, forecasts, and beautiful data visualizations.',
    tech: ['React', 'OpenWeather API', 'Chart.js'],
    program: 'BCA 2nd Year',
    level: 'Intermediate',
    image: '🌤️',
  },
  {
    title: 'CLI Calculator & Tools',
    category: 'Python',
    description: 'Command-line calculator with advanced math operations, history, and file export features.',
    tech: ['Python', 'Argparse', 'Math'],
    program: 'B.Tech 1st Year',
    level: 'Beginner',
    image: '🧮',
  },
  {
    title: 'Blog Platform',
    category: 'Full-Stack',
    description: 'Full-featured blog with markdown support, comments, user auth, and content management.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    program: 'B.Tech 2nd Year',
    level: 'Advanced',
    image: '📝',
  },
  {
    title: 'Expense Tracker',
    category: 'Web Development',
    description: 'Personal finance tracker with categories, charts, budget planning, and export functionality.',
    tech: ['React', 'Firebase', 'Chart.js'],
    program: 'BCA 2nd Year',
    level: 'Intermediate',
    image: '💰',
  },
  {
    title: 'GitHub Profile Analyzer',
    category: 'Open Source',
    description: 'Tool that analyzes GitHub profiles, generates skill reports, and suggests improvement areas.',
    tech: ['Python', 'GitHub API', 'Streamlit'],
    program: 'B.Tech 2nd Year',
    level: 'Advanced',
    image: '📊',
  },
  {
    title: 'Student Database System',
    category: 'Python',
    description: 'Complete student management system with CRUD, search, reports, and data visualization.',
    tech: ['Python', 'SQLite', 'Tkinter'],
    program: 'BCA 1st Year',
    level: 'Beginner',
    image: '🎓',
  },
];

// ---- CAREER SUPPORT DATA ----
export const careerServices = [
  {
    icon: '🤝',
    title: '1-on-1 Mentorship',
    description: 'Get paired with an industry mentor who guides you through your career journey with personalized advice and accountability.',
    features: ['Weekly check-ins', 'Career goal setting', 'Skill gap analysis', 'Industry insights'],
  },
  {
    icon: '📝',
    title: 'Resume & Portfolio Review',
    description: 'Your resume and portfolio are your first impression. We help you make it count with expert reviews and optimization.',
    features: ['Professional resume templates', 'ATS optimization', 'Portfolio website review', 'LinkedIn profile audit'],
  },
  {
    icon: '🎤',
    title: 'Interview Preparation',
    description: 'Technical and behavioral interview prep with mock sessions, common questions, and confidence-building strategies.',
    features: ['Mock interviews', 'Technical Q&A practice', 'Behavioral prep', 'Communication skills'],
  },
  {
    icon: '🗺️',
    title: 'Career Roadmapping',
    description: 'Not sure which career path to take? We help you identify the right direction based on your interests and strengths.',
    features: ['Career assessment', 'Path exploration', 'Goal milestones', 'Decision frameworks'],
  },
  {
    icon: '🌐',
    title: 'Industry Networking',
    description: 'Connect with professionals, attend industry events, and build the network that opens doors to opportunities.',
    features: ['Industry meetups', 'Alumni network', 'Professional introductions', 'Community access'],
  },
  {
    icon: '💼',
    title: 'Internship Guidance',
    description: 'From finding internships to acing the application — we guide you through every step of the internship process.',
    features: ['Internship search strategy', 'Application review', 'Follow-up guidance', 'Offer evaluation'],
  },
];

// ---- WORKSHOPS DATA ----
export const upcomingWorkshops = [
  {
    title: 'Build Your First Web App',
    date: 'Coming Soon',
    time: '2:00 PM - 5:00 PM',
    format: 'In-Person + Online',
    seats: 'Limited Seats',
    description: 'Hands-on workshop where you\'ll build and deploy your first web application from scratch.',
    topics: ['HTML/CSS fundamentals', 'JavaScript basics', 'Deploying your app'],
    level: 'Beginner',
  },
  {
    title: 'Git & GitHub Masterclass',
    date: 'Coming Soon',
    time: '11:00 AM - 2:00 PM',
    format: 'In-Person + Online',
    seats: 'Limited Seats',
    description: 'Master version control and collaboration — essential skills every developer needs.',
    topics: ['Git commands', 'Branching & merging', 'Pull requests', 'Open source contributions'],
    level: 'Beginner',
  },
  {
    title: 'Resume Building Workshop',
    date: 'Coming Soon',
    time: '4:00 PM - 6:00 PM',
    format: 'Online',
    seats: 'Open Registration',
    description: 'Create a resume that gets noticed. Learn what recruiters actually look for.',
    topics: ['Resume structure', 'ATS optimization', 'Action verbs', 'Portfolio integration'],
    level: 'All Levels',
  },
];

export const pastWorkshops = [
  { title: 'Introduction to Python', attendees: 120, rating: 4.8 },
  { title: 'React.js Crash Course', attendees: 85, rating: 4.9 },
  { title: 'Career Clarity Session', attendees: 200, rating: 4.7 },
  { title: 'DSA Problem Solving', attendees: 95, rating: 4.8 },
];

// ---- ROADMAP DATA ----
export const roadmaps = [
  {
    id: 'btech-1',
    title: 'B.Tech 1st Year',
    semesters: [
      {
        name: 'Semester 1',
        focus: 'Foundation & Exploration',
        skills: ['Programming basics', 'Logic building', 'Development environment setup'],
        projects: ['CLI Calculator', 'Basic automation script'],
        milestone: 'First GitHub commit & repository',
      },
      {
        name: 'Semester 2',
        focus: 'Building & Creating',
        skills: ['Web fundamentals', 'Responsive design', 'Version control'],
        projects: ['Portfolio website', 'Interactive web page'],
        milestone: 'Live portfolio deployed online',
      },
    ],
  },
  {
    id: 'btech-2',
    title: 'B.Tech 2nd Year',
    semesters: [
      {
        name: 'Semester 3',
        focus: 'Full-Stack Skills',
        skills: ['Frontend frameworks', 'Backend development', 'Database design'],
        projects: ['Full-stack web app', 'REST API'],
        milestone: 'First full-stack project deployed',
      },
      {
        name: 'Semester 4',
        focus: 'Career Preparation',
        skills: ['DSA practice', 'System design basics', 'Interview skills'],
        projects: ['Team capstone project', 'Open source contribution'],
        milestone: 'Internship-ready portfolio & resume',
      },
    ],
  },
  {
    id: 'bca-1',
    title: 'BCA 1st Year',
    semesters: [
      {
        name: 'Semester 1',
        focus: 'Core Skills',
        skills: ['Programming fundamentals', 'Web basics', 'Database concepts'],
        projects: ['Static website', 'Python script'],
        milestone: 'Active GitHub profile started',
      },
      {
        name: 'Semester 2',
        focus: 'Practical Application',
        skills: ['Advanced programming', 'Web development', 'Development tools'],
        projects: ['Portfolio site', 'Database application'],
        milestone: 'Professional portfolio online',
      },
    ],
  },
  {
    id: 'bca-2',
    title: 'BCA 2nd Year',
    semesters: [
      {
        name: 'Semester 3',
        focus: 'Advanced Development',
        skills: ['Frontend frameworks', 'API development', 'Project management'],
        projects: ['Dynamic web app', 'REST API'],
        milestone: 'Multiple projects in portfolio',
      },
      {
        name: 'Semester 4',
        focus: 'Industry Transition',
        skills: ['Interview preparation', 'Professional communication', 'Networking'],
        projects: ['Capstone project', 'Open source contribution'],
        milestone: 'Internship applications submitted',
      },
    ],
  },
];

// ---- TESTIMONIALS DATA ----
export const testimonials = [
  {
    name: 'Rahul Sharma',
    course: 'B.Tech 2nd Year — CSE',
    text: 'Before LIRP, I had zero projects and no idea what to do after college. In 6 months, I built 8 real projects, learned Git, and got my first internship interview call.',
    outcome: 'Got internship at a startup',
    rating: 5,
  },
  {
    name: 'Priya Meena',
    course: 'BCA 2nd Year',
    text: 'As a BCA student, I always felt behind B.Tech students. LIRP gave me a structured path and the confidence to compete. My portfolio now speaks for itself.',
    outcome: 'Built 12+ projects portfolio',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    course: 'B.Tech 1st Year — IT',
    text: 'My seniors told me to wait until 3rd year to worry about career. I joined LIRP in 1st year and by 2nd year, I was already ahead of most 3rd years.',
    outcome: 'Started mentoring juniors',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    course: 'BCA 1st Year',
    text: 'LIRP didn\'t just teach me coding — it taught me how to think like a professional. The mentorship, projects, community — everything felt designed for real growth.',
    outcome: 'Landed freelance web dev client',
    rating: 5,
  },
];

// ---- FAQ DATA ----
export const faqs = [
  {
    question: 'Is LIRP a coaching institute?',
    answer: 'Absolutely not. LIRP is a career acceleration and industry readiness platform. We don\'t do traditional coaching — we focus on project-based learning, mentorship, portfolio building, and real industry exposure.',
  },
  {
    question: 'I\'m in my 1st year. Isn\'t it too early to start?',
    answer: 'It\'s actually the BEST time to start. Students who begin in 1st year have a massive advantage by placement time. You\'ll have 3+ years of projects, a strong portfolio, and industry awareness.',
  },
  {
    question: 'I\'m a BCA student. Is LIRP relevant for me?',
    answer: '100%. We have dedicated tracks for BCA students that are specifically designed to bridge any gaps and put you on equal or better footing than B.Tech students.',
  },
  {
    question: 'How does this work alongside college?',
    answer: 'LIRP is designed to complement your college schedule, not compete with it. Sessions are scheduled during evenings and weekends. The project work is flexible.',
  },
  {
    question: 'What kind of projects will I build?',
    answer: 'Real, industry-grade projects — not toy exercises. You\'ll build full-stack web applications, APIs, automation tools, and more. Every project goes into your GitHub and portfolio.',
  },
  {
    question: 'Do I need any prior coding experience?',
    answer: 'No. Our programs start from fundamentals. Whether you\'re a complete beginner or have some experience, we\'ll meet you where you are and take you forward.',
  },
  {
    question: 'How is the consultation process?',
    answer: 'It\'s a free, no-obligation 15-20 minute conversation with one of our mentors. We discuss your current situation, career goals, and whether LIRP is the right fit.',
  },
  {
    question: 'Where is LIRP based?',
    answer: 'LIRP is run by Laxmaya Technologies and is based in Jaipur, Rajasthan. We offer both in-person sessions and online mentorship.',
  },
];

// ---- STATS ----
export const stats = [
  { value: '500+', label: 'Students Transformed', icon: '👨‍🎓' },
  { value: '200+', label: 'Projects Built', icon: '💻' },
  { value: '95%', label: 'Industry Readiness', icon: '📊' },
  { value: '50+', label: 'Industry Mentors', icon: '🧑‍💼' },
];

// ---- HOME PAGE DATA ----
export const problems = [
  { icon: '📚', text: 'College teaches theory. Industry wants practical skills.', stat: '0 real projects by graduation' },
  { icon: '💼', text: 'No portfolio means no proof of your capabilities.', stat: 'Empty GitHub profiles' },
  { icon: '🗺️', text: 'No roadmap, no career clarity, no direction.', stat: 'Confused about next steps' },
  { icon: '📝', text: 'Weak resume that doesn\'t stand out to recruiters.', stat: 'Generic, unimpressive CVs' },
  { icon: '🤷', text: 'No internship preparation or industry exposure.', stat: 'Missed opportunities' },
  { icon: '⏰', text: 'Every semester you wait, the gap widens.', stat: 'Time you can\'t get back' },
];

export const howItWorksSteps = [
  { number: '01', title: 'Career Assessment', description: 'We assess your current skill level, interests, and career goals to create your personalized roadmap.', icon: '🎯' },
  { number: '02', title: 'Personalized Roadmap', description: 'Get a clear, semester-by-semester plan tailored to your course, year, and career aspirations.', icon: '🗺️' },
  { number: '03', title: 'Project-Based Learning', description: 'Build real, industry-grade projects — not toy exercises. Every project goes into your portfolio.', icon: '🛠️' },
  { number: '04', title: 'Mentorship & Guidance', description: 'Get weekly mentorship from industry professionals who\'ve been where you want to go.', icon: '🤝' },
  { number: '05', title: 'Portfolio & Presence', description: 'Build your GitHub, portfolio website, LinkedIn profile, and resume — the industry sees you.', icon: '📁' },
  { number: '06', title: 'Industry Exposure', description: 'Attend workshops, hackathons, tech talks, and networking events that open doors.', icon: '🌐' },
];

export const differentiators = [
  { title: 'Not a Coaching Class', description: 'We don\'t do lectures. We do real projects, real mentorship, and real industry exposure.', icon: '🏗️', vs: 'Coaching = Theory | LIRP = Practice' },
  { title: 'Not a Certification Mill', description: 'We don\'t sell certificates. We help you build a portfolio that actually impresses employers.', icon: '📋', vs: 'Certificates = Paper | LIRP = Proof' },
  { title: 'Not Another Online Course', description: 'You don\'t need more content. You need structure, accountability, mentorship, and a community.', icon: '👥', vs: 'Online Courses = Solo | LIRP = Community' },
  { title: 'Not a Placement Guarantee', description: 'We don\'t make fake promises. We make you genuinely industry-ready so opportunities find you.', icon: '🎯', vs: 'Guarantees = Marketing | LIRP = Preparation' },
];
