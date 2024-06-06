import {Box, styled} from "@mui/material";
import HeaderTitle from "../ui/HeaderTitle.jsx";
import AboutMeDescription from "./AboutMeDescription.jsx";
import WhatUserIsDoing from "./WhatUserIsDoing.jsx";
import TechUserWorkedWith from "./TechUserWorkedWith.jsx";

const StyledAboutMeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
}));

function AboutMe() {
    return (
        <StyledAboutMeContainer>
            <HeaderTitle title={"About Me"}/>
            <AboutMeDescription/>
            <WhatUserIsDoing/>
            <TechUserWorkedWith/>
        </StyledAboutMeContainer>
    );
}

export default AboutMe;