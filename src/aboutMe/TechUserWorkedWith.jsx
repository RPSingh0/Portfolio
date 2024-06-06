import SubHeaderTitle from "../ui/SubHeaderTitle.jsx";
import {USER_KNOWN_TECH} from "../utils/Utils.jsx";
import TechIconWithTooltip from "./TechIconWithTooltip.jsx";
import {StyledSubAboutContainer} from "./CommonStylesAboutMe.jsx";
import {Box, styled} from "@mui/material";

const StyledTechIconContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",

    "& svg": {
        height: "2rem",
        width: "2rem"
    }
}));

function TechUserWorkedWith() {
    return (
        <StyledSubAboutContainer>
            <SubHeaderTitle title={"Technologies I've worked with"}/>
            <StyledTechIconContainer>
                {
                    USER_KNOWN_TECH.map((tech, index) =>
                        <TechIconWithTooltip tech={tech} key={index}/>
                    )
                }
            </StyledTechIconContainer>
        </StyledSubAboutContainer>
    );
}

export default TechUserWorkedWith;