export interface Translation {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
  };
  bio: {
    aboutMe: string;
    completedCourses: string;
  };
  developer: {
    title: string;
    subtitle: string;
    skills: string;
    projects: string;
    viewProject: string;
    returnHome: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
  };
  header: {
    portfolio: string;
    home: string;
    projects: string;
    contact: string;
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    welcome: {
      title: "Welcome to My Portfolio",
      subtitle: "Junior Mobile Developer/Junior Software Tester",
      description: "I am a passionate mobile developer who can create modern and intuitive mobile applications. My experience includes both application development and work as a software tester, which allows me to take a comprehensive approach to projects. I am knowledgeable about various IT and artificial intelligence issues, and I am always eager to learn new things and take on new challenges."
    },
    bio: {
      aboutMe: "About Me",
      completedCourses: "Completed Courses"
    },
    developer: {
      title: "Mobile & Full-Stack Development",
      subtitle: "Crafting innovative digital solutions",
      skills: "Technical Skills",
      projects: "Featured Projects",
      viewProject: "View Project",
      returnHome: "Return to Home"
    },
    contact: {
      title: "Contact me",
      phone: "Phone",
      email: "Email"
    },
    header: {
      portfolio: "My Portfolio",
      home: "Home",
      projects: "Projects",
      contact: "Contact"
    }
  },
  pl: {
    // Placeholder for Polish translations
    // You'll fill these in later
    welcome: {
      title: "",
      subtitle: "",
      description: ""
    },
    bio: {
      aboutMe: "",
      completedCourses: ""
    },
    developer: {
      title: "",
      subtitle: "",
      skills: "",
      projects: "",
      viewProject: "",
      returnHome: ""
    },
    contact: {
      title: "",
      phone: "",
      email: ""
    },
    header: {
      portfolio: "Moje Portfolio",
      home: "Glowna",
      projects: "Projekty",
      contact: "Kontakt"
    }
  }
};