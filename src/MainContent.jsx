import {Box, styled} from "@mui/material";
import {grey} from "@mui/material/colors";
import Resume from "./Resume.jsx";
import AboutMe from "./AboutMe.jsx";

const StyledMainContentContainer = styled(Box)(() => ({
    flex: 4,
    border: "1px solid",
    borderColor: grey["600"],
    padding: "2rem",
    backgroundColor: grey["900"],
    borderRadius: "1rem"
}));

function MainContent() {
    return (
        <StyledMainContentContainer>
            <AboutMe/>
            {/*<Resume/>*/}
        </StyledMainContentContainer>
    );
}

export default MainContent;