export const bio = {
  about: {
    text: [
      "Hi &#128075;",
      "I'm Rupesh Kumar. I’m currently pursuing B.Tech in Computer Science from KIET Group of Institutions. I did my Diploma in Electronics Engineering from Chhotu Ram Rural Institute of Technology Delhi.",
      "I'm a developer, geek and curious human besides being an Cybersecurity enthusiast.",
      "I love to read, listen to music, and travel.",
    ],
  },
  contact: {
    text: [
      "If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: rupeshkumar906960@gmail.com",
    ],
  },
};

export const skills = [
  {
    title: "Languages",
    skillName: "C, C++",
    color: "1",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Nmap, Burpsuite",
    color: "6",
    percentage: "50",
  },
  {
    title: "SEO",
    skillName: "Google Analytics, Google Search Console",
    color: "2",
    percentage: "60",
  },
  {
    title: "Clouds",
    skillName: "AWS(EC2), Linode, Digitalocean",
    color: "3",
    percentage: "40",
  },
  {
    title: "Design",
    skillName: "Python",
    color: "4",
    percentage: "30",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Git",
    color: "7",
    percentage: "70",
  },
  // {
  //   title: "Tools",
  //   skillName: "Postman, Chrome DevTools",
  //   color: "3",
  //   percentage: "80",
  // },
  // {
  //   title: "Saas products",
  //   skillName: "CleverTap, FreshDesk",
  //   color: "5",
  //   percentage: "50",
  // },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "70",
  },
];

 export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Cloud Based Phone System using Asterisk.",
    duration: "",
    subtitle: "Major Project",
    details: [
      "The goal of this project is to design and implement a cloud-based phone system using the Asterisk open-source PBX (private branch exchange) software. The system will provide reliable and flexible communication services.",
    ],
    tags: ["Asterisk", "Cloud", "Digitalocean", "Ubuntu Server"],
    icon: "cloud",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      "Worked as a full stack developer to support tech team.",
      "Developed a customer Web Application from scratch for social media management.",
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "code",
  },
];

export const education = [
  {
    title: "Bachelors in Computer Science",
    duration: "2021 - 2024",
    subtitle: "KIET Group of Institutions, Ghaziabad",
    details: [
      "Top 13% on Tryhackme",
      "Active Competitive Programmer with CodeChef Rating 1466*.",
      // "Received 500+ stars and 300+ forks on GitHub projects.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Diploma in Electronics Engineering",
    duration: "",
    subtitle: "Chhotu Ram Rural Institute of Technology, Delhi",
    details: [
      // "Qualified JEE Advanced, Main & BITSAT.",
      "Secured 83.5 percentage in Diploma.",
    ],
    tags: [
            "Microprocessor",
            "Computer Organization",
            "Digital Electronics",
            "Communication System",
          ],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Tryhackme",
        link: "https://tryhackme.com/p/rupesh72",
      },
      {
        text: "GitHub",
        link: "https://github.com/rupesh-72",
      },
      {
        text: "Codechef",
        link: "https://codechef.com/rupesh72/",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/rupesh72/",
      },
      {
        text: "Hackerank",
        link: "https://www.hackerrank.com/rupesh72",
      }
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      // {
      //   text: "Clone this page",
      //   link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      // },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/rupesh72/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/",
      },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Rupesh Kumar.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = 'vinaysomawat';

export const URLs = {
	mediumProfile: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vinaysomawat",
};
