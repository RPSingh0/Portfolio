import ResumeSectionHeading from "./ResumeSectionHeading.jsx";
import {Box, LinearProgress, styled, Typography} from "@mui/material";
import {StyledResumeSectionItem} from "./CommonStylesResume.jsx";
import {USER_SKILL_PERCENTAGE} from "../utils/Utils.jsx";

const StyledSkillsContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.5rem 0.5rem",
    marginLeft: "3.5rem",
    backgroundColor: "#353c4a",
    borderRadius: "0.5rem",

    "@media (max-width: 600px)": {
        marginLeft: "0"
    }
}));

const StyledSkillItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
}));

const StyledLinearProgress = styled(LinearProgress)(() => ({
    height: "0.5rem",
    borderRadius: "1rem"
}));

function UserSkills() {
    return (
        <StyledResumeSectionItem>
            <ResumeSectionHeading type={"skills"} value={"Skills"}/>
            <StyledSkillsContainer>
                {
                    USER_SKILL_PERCENTAGE.map((skill, index) =>
                        <StyledSkillItem key={index}>
                            <Typography variant={"body1"}>
                                {skill.skill} ({skill.percentage}%)
                            </Typography>
                            <StyledLinearProgress variant="determinate" value={parseInt(skill.percentage)}/>
                        </StyledSkillItem>
                    )
                }
            </StyledSkillsContainer>
        </StyledResumeSectionItem>
    );
}

export default UserSkills;