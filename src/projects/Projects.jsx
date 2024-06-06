import HeaderTitle from "../ui/HeaderTitle.jsx";
import {Box, styled} from "@mui/material";
import ProjectItems from "./ProjectItems.jsx";

const StyledProjectsContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    height: "100%"
}));

function Projects() {
    return (
        <StyledProjectsContainer>
            <HeaderTitle title={"Projects"}/>
            <ProjectItems/>
        </StyledProjectsContainer>
    );
}

export default Projects;