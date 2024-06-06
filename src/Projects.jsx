import HeaderTitle from "./HeaderTitle.jsx";
import {Box, Chip, styled, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {CHIP_TYPE_TO_ICON_MAP} from "./utils/Utils.jsx";

const PROJECT_DATA = [
    {
        image: "./projects/react-ecommerce.png",
        altText: "react-ecommerce-cover-image",
        title: "Ecommerce Platform",
        code: {
            frontend: "https://github.com/RPSingh0/EcommerceFrontend",
            backend: "https://github.com/RPSingh0/EcommerceBackend"
        },
        live: "http://ecommerce-production-r.s3-website-us-east-1.amazonaws.com/"
    },
    {
        image: "./projects/react-blogs.png",
        altText: "react-blogs-cover-image",
        title: "Blogging Application",
        code: {
            frontend: "https://github.com/RPSingh0/ReactBlogFrontend",
            backend: "https://github.com/RPSingh0/ReactBlogsBackend"
        },
        live: "http://react-blogs-r.s3-website-us-east-1.amazonaws.com/"
    },
    {
        image: "./projects/react-todo.png",
        altText: "react-todo-cover-image",
        title: "Todo Application",
        code: {
            frontend: "https://github.com/RPSingh0/TodoApplication"
        },
        live: "http://todo-application-r.s3-website-us-east-1.amazonaws.com/"
    },
    {
        image: "./projects/html-omnifood.png",
        altText: "html-omnifood-cover-image",
        title: "Omnifood",
        code: {
            frontend: "https://github.com/RPSingh0/Omnifood"
        },
        live: "http://omnifood-r.s3-website-us-east-1.amazonaws.com/"
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

const StyledProjectsContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    height: "100%"
}));

const StyledProjectsItemContainer = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "2rem",
    rowGap: "3rem",
    height: "100%",

    "@media (max-width: 1440px)": {
        gridTemplateColumns: "repeat(2, 1fr)"
    },

    "@media (max-width: 1024px)": {
        gridTemplateColumns: "1fr"
    },

    "@media (max-width: 900px)": {
        gridTemplateColumns: "repeat(2, 1fr)"
    },

    "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr"
    }
}));

const StyledProjectItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    minWidth: "0"
}));

const StyledProjectCoverImage = styled("img")(() => ({
    width: "100%",
    height: "100%"
}));

const StyledImageContainer = styled(Box)(() => ({
    borderRadius: "1rem",
    padding: "1rem",
    backgroundColor: grey["800"],
    width: "100%",
    height: "70%",

    "& div:hover": {
        scale: "1.1"
    }
}));

const StyledImageSubContainer = styled(Box)(() => ({
    borderRadius: "0.5rem",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    transition: "all 0.5s",
}));

const StyledProjectInfo = styled(Box)(() => ({
    borderRadius: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: grey["800"],
}));

const StyledProjectInfoChipContainer = styled(Box)(() => ({
    display: "flex",
    gap: "0.5rem",
    paddingTop: "0.2rem",
}));

const StyledChip = styled(Chip)(() => ({
    color: "white",

    // "& svg": {
    //     stroke: "white"
    // }
}));

const StyledLink = styled("a")(() => ({
    color: grey["300"],
    textDecoration: "none",

    "&:visited": {
        color: grey["300"]
    }
}));

function ProjectChip({href, label}) {

    const icon = CHIP_TYPE_TO_ICON_MAP[label.toLowerCase()];

    return (
        <StyledLink href={href} target={"_blank"}>
            <StyledChip label={label} size={"small"} icon={icon}/>
        </StyledLink>
    );
}

function Projects() {
    return (
        <StyledProjectsContainer>
            <HeaderTitle title={"Projects"}/>
            <StyledProjectsItemContainer>
                {
                    PROJECT_DATA.map((project, index) =>
                        <StyledProjectItem key={index}>
                            <StyledImageContainer>
                                <StyledImageSubContainer>
                                    <StyledProjectCoverImage src={project.image} alt={project.altText}/>
                                </StyledImageSubContainer>
                            </StyledImageContainer>
                            <StyledProjectInfo>
                                <Typography variant={"h6"}>
                                    {project.title}
                                </Typography>
                                <StyledProjectInfoChipContainer>
                                    {
                                        project.live ? <ProjectChip href={project.live} label={"Live"}/> : ""
                                    }
                                    {
                                        project.code?.frontend ?
                                            <ProjectChip href={project.code?.frontend} label={"Frontend"}/> : ""
                                    }
                                    {
                                        project.code?.backend ?
                                            <ProjectChip href={project.code?.backend} label={"Backend"}/> : ""
                                    }
                                </StyledProjectInfoChipContainer>
                            </StyledProjectInfo>
                        </StyledProjectItem>
                    )
                }
            </StyledProjectsItemContainer>
        </StyledProjectsContainer>
    );
}

export default Projects;