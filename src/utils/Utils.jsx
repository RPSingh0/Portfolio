import {MdEmail, MdWork} from "react-icons/md";
import {BsFillPhoneFill, BsFillTerminalFill} from "react-icons/bs";
import {FaLocationDot, FaXTwitter} from "react-icons/fa6";
import {
    FaAws, FaBookOpen,
    FaCss3,
    FaDocker,
    FaGithub,
    FaHtml5,
    FaJava,
    FaLinkedin,
    FaNodeJs,
    FaPython,
    FaReact
} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {SiFirebase, SiMui, SiMysql, SiRedux, SiSpring, SiSpringboot} from "react-icons/si";
import {RiTailwindCssFill} from "react-icons/ri";
import {DiMongodb} from "react-icons/di";
import {Code, Description, Home, OpenInNew, Public} from "@mui/icons-material";
import AboutMe from "../aboutMe/AboutMe.jsx";
import Resume from "../resume/Resume.jsx";
import Projects from "../projects/Projects.jsx";

export const USER_CONTACT = [
    {
        type: "email",
        value: "rpalsingh715@gmail.com"
    },
    {
        type: "phone",
        value: "+91 (705) 553-6884"
    },
    {
        type: "location",
        value: "Madhapur, Hyderabad, India"
    }
];

export const USER_SOCIAL_CONTACT = [
    {
        type: "linkedin",
        value: "https://www.linkedin.com/in/rupinder-p-s/"
    },
    {
        type: "github",
        value: "https://github.com/RPSingh0"
    }
];

export const USER_KNOWN_TECH = ["javascript", "react", "redux", "materialUi", "html5", "css3", "tailwindCss", "nodeJs", "python", "java", "spring", "springBoot", "mongoDb", "mySql", "aws", "firebase", "docker"];

export const ABOUT_USER = [
    "Hi, I am a passionate Software Engineer with a Bachelor's degree in Computer Science and Engineering from Lovely Professional University. Currently, I am enhancing my skills at ValueLabs, where I develop robust solutions and contribute to high-impact projects. My expertise spans across various technologies, including JavaScript, Python, Java, React, Redux, Node.js, Express.js, Spring Boot, and AWS.",
    "At ValueLabs, I have successfully built an order management system with multiple processing steps, improved task tracking services, and integrated AWS services for a real-time ecommerce platform. My work on a data visualization interface using React and Redux received multiple client appreciations for its structured and component-based design.",
    "I also take pride in my personal projects, including a full-stack ecommerce application and a blogging platform. These projects showcase my ability to design and implement comprehensive solutions using React, Node.js, MongoDB, and AWS.",
    "Recognized for my performance and design excellence, I have received awards such as Shutter Riser and Star of the Month. My dedication to delivering high-quality solutions and my strong problem-solving skills drive me to continually improve and innovate in the field of software development."
];

export const WHAT_USER_IS_DOING = [
    {
        as: "Senior Software Engineer",
        where: "ValueLabs",
        about: "As a Software Engineer at ValueLabs, I develop high-impact solutions using React, Node.js, Java, and AWS. I’ve built an advanced order management system, improved task tracking, and integrated real-time services for an ecommerce platform, earning multiple client appreciations for my work on data visualization and design excellence."
    }
];

export const USER_EXPERIENCE = [
    {
        designation: "Senior Software Engineer",
        organization: "ValueLabs",
        timeline: "May 2024 - Present",
        about: [
            "Promoted to Senior Software Engineer, I excel in developing robust systems and enhancing team efficiency. I specialize in ReactJs, MaterialUI, Java, Spring Boot, and AWS services, driving project success with innovative UI designs and seamless backend integration. I am committed to maintaining high standards and delivering quality solutions with motivation and enthusiasm."
        ]
    },
    {
        designation: "Software Engineer",
        organization: "ValueLabs",
        timeline: "Nov 2022 - May 2024",
        about: [
            "Developed an order management system with multiple screens and steps including batching of products, assigning to printers, packaging, label printing and shipment process using ReactJs and MaterialUI for front-end with Java and SpringBoot as back-end.",
            "Worked on a service to track tasks based on task type, progress, estimate time to complete and completion status, which helped team leads and members to improve on task planning and execution and gained 25% increase in task completion.",
            "Utilized AWS as cloud provider with multiple services including s3, lambda, kinesis, SQS and RDS, integrating REST services for a second sales ecommerce platform for handling real-time customer data.",
            "Designed and implemented a user interface for visualizing data with images and product albums, using ReactJs and Redux. Received multiple appreciations from clients and stakeholders for well structured and component based design implementation."
        ]
    }
];

export const USER_EDUCATION = [
    {
        title: "Self taught programmer and Engineer",
        timeline: "2017 - Present",
        about: "I'm a self-taught programmer who fell in love with computers during my high school computer science class. Since then, I've been fascinated by technology and enjoy learning new things about it every day."
    },
    {
        title: "B.Tech in Computer Science and Engineering",
        from: "Lovely Professional University",
        timeline: "2019 - 2023",
        about: "During my B.Tech in Computer Science at Lovely Professional University, I learned to solve complex problems, use modern tools, create sustainable solutions, communicate effectively, and keep learning new things. These skills are essential in today's industries, where companies need people who can handle challenges, adapt to new technologies, and contribute to ongoing improvement and innovation."
    }
];

export const USER_SKILL_PERCENTAGE = [
    {
        skill: "FrontEnd Development",
        percentage: "80"
    },
    {
        skill: "Backend Development",
        percentage: "70"
    },
    {
        skill: "Cloud",
        percentage: "70"
    },
    {
        skill: "Product Development",
        percentage: "80"
    },
    {
        skill: "Problem Solving",
        percentage: "80"
    },
    {
        skill: "Leadership and Team Management",
        percentage: "70"
    }
];

export const PROJECT_DATA = [
    {
        image: "./projects/react-ecommerce.png",
        altText: "react-ecommerce-cover-image",
        title: "Ecommerce Platform",
        code: {
            frontend: "https://github.com/RPSingh0/EcommerceFrontend",
            backend: "https://github.com/RPSingh0/EcommerceBackend"
        },
        live: "https://rpsingh0.github.io/EcommerceFrontend/"
    },
    {
        image: "./projects/react-blogs.png",
        altText: "react-blogs-cover-image",
        title: "Blogging Application",
        code: {
            frontend: "https://github.com/RPSingh0/ReactBlogFrontend",
            backend: "https://github.com/RPSingh0/ReactBlogsBackend"
        },
        live: "https://rpsingh0.github.io/ReactBlogFrontend/"
    },
    {
        image: "./projects/react-todo.png",
        altText: "react-todo-cover-image",
        title: "Todo Application",
        code: {
            frontend: "https://github.com/RPSingh0/TodoApplication"
        },
        live: "https://rpsingh0.github.io/TodoApplication/"
    },
    {
        image: "./projects/html-omnifood.png",
        altText: "html-omnifood-cover-image",
        title: "Omnifood",
        code: {
            frontend: "https://github.com/RPSingh0/Omnifood"
        },
        live: "https://rpsingh0.github.io/Omnifood/"
    },
    {
        image: "./projects/java-springboot.png",
        altText: "java-springboot-cover-image",
        title: "University API",
        code: {
            backend: "https://github.com/RPSingh0/JavaSpringboot"
        }
    },
    {
        image: "./projects/fast-api.png",
        altText: "fast-api-cover-image",
        title: "FastAPI trade API",
        code: {
            backend: "https://github.com/RPSingh0/A-FastAPI-project"
        }
    }
];

export const TYPE_TO_ICON_MAP = {
    "email": <MdEmail/>,
    "phone": <BsFillPhoneFill/>,
    "location": <FaLocationDot/>,
    "github": <FaGithub/>,
    "linkedin": <FaLinkedin/>,
    "x": <FaXTwitter/>,
    "education": <FaBookOpen/>,
    "work": <MdWork/>,
    "skills": <BsFillTerminalFill/>
};

export const CHIP_TYPE_TO_ICON_MAP = {
    "live": <OpenInNew/>,
    "frontend": <Code/>,
    "backend": <Code/>
};

export const TECH_TO_ICON_MAP = {
    "javascript": {
        "logo": <IoLogoJavascript/>,
        "text": "Javascript"
    },
    "react":
        {
            "logo": <FaReact/>,
            "text": "React"
        },
    "redux":
        {
            "logo": <SiRedux/>,
            "text": "Redux"
        },
    "materialUi":
        {
            "logo": <SiMui/>,
            "text": "Material UI"
        },
    "html5":
        {
            "logo": <FaHtml5/>,
            "text": "HTML5"
        },
    "css3":
        {
            "logo": <FaCss3/>,
            "text": "CSS3"
        },
    "tailwindCss":
        {
            "logo": <RiTailwindCssFill/>,
            "text": "Tailwind CSS"
        },
    "nodeJs":
        {
            "logo": <FaNodeJs/>,
            "text": "Node Js"
        },
    "python":
        {
            "logo": <FaPython/>,
            "text": "Python"
        },
    "java":
        {
            "logo": <FaJava/>,
            "text": "Java"
        },
    "spring":
        {
            "logo": <SiSpring/>,
            "text": "Spring"
        },
    "springBoot":
        {
            "logo": <SiSpringboot/>,
            "text": "SpringBoot"
        },
    "mongoDb":
        {
            "logo": <DiMongodb/>,
            "text": "MongoDB"
        },
    "mySql":
        {
            "logo": <SiMysql/>,
            "text": "MySQL"
        },
    "aws":
        {
            "logo": <FaAws/>,
            "text": "AWS"
        },
    "firebase":
        {
            "logo": <SiFirebase/>,
            "text": "Firebase"
        },
    "docker":
        {
            "logo": <FaDocker/>,
            "text": "Docker"
        }
};

export const SCREENS = [
    {
        key: "home",
        icon: <Home/>,
        text: "Home / About"
    },
    {
        key: "resume",
        icon: <Description/>,
        text: "Resume"
    },
    {
        key: "projects",
        icon: <Public/>,
        text: "Projects"
    }
];

export const CONTENT_TO_KEY_MAP = {
    "home": <AboutMe/>,
    "resume": <Resume/>,
    "projects": <Projects/>
};