import {Box, styled} from "@mui/material";
import HeaderTitle from "../ui/HeaderTitle.jsx";
import UserExperience from "./UserExperience.jsx";
import UserEducation from "./UserEducation.jsx";
import UserSkills from "./UserSkills.jsx";

const StyledResumeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
}));

const StyledResumeSectionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
}));

function Resume() {
    return (
        <StyledResumeContainer>
            <HeaderTitle title={"Resume"}/>
            <StyledResumeSectionContainer>
                <UserExperience/>
                <UserEducation/>
                <UserSkills/>
            </StyledResumeSectionContainer>
        </StyledResumeContainer>
    );
}

export default Resume;