import {PROJECT_DATA} from "../utils/Utils.jsx";
import {Box, styled, Typography} from "@mui/material";
import ProjectChip from "./ProjectChip.jsx";

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
    backgroundColor: "#353c4a",
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
    backgroundColor: "#353c4a",
}));

const StyledProjectInfoChipContainer = styled(Box)(() => ({
    display: "flex",
    gap: "0.5rem",
    paddingTop: "0.2rem",
}));

function ProjectItems() {
    return (
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
    );
}

export default ProjectItems;