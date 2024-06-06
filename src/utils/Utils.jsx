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
import Resume from "../Resume.jsx";
import Projects from "../Projects.jsx";

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