import {Box, styled, useMediaQuery} from "@mui/material";
import {grey} from "@mui/material/colors";
import Resume from "./Resume.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import {SpeedDial, SpeedDialAction} from "@mui/lab";
import {Autorenew, Description, Home, Public} from "@mui/icons-material";
import {useState} from "react";

const StyledMainContentContainer = styled(Box)(() => ({
    flex: 4,
    border: "1px solid",
    borderColor: grey["600"],
    padding: "2rem",
    backgroundColor: grey["900"],
    borderRadius: "1rem",
    position: "relative"
}));

const StyledSpeedDial = styled(SpeedDial)(() => ({
    position: "absolute",
    top: "0",
    right: "0",

    "& button": {
        borderRadius: "0",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem"
    }
}));

const SCREENS = [
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
]

const CONTENT_TO_KEY_MAP = {
    "home": <AboutMe/>,
    "resume": <Resume/>,
    "projects": <Projects/>
}

function MainContent() {

    const [currentContent, setCurrentContent] = useState("home");
    const [open, setOpen] = useState(true);
    const shouldChangeSide = useMediaQuery("(min-width: 540px)");

    function handleOpenSpeedDial() {
        setOpen(true);
    }

    function handleCloseSpeedDial() {
        setOpen(false)
    }

    function handleSwitchWindowAndClose(switchTo) {
        setCurrentContent(switchTo);
    }

    return (
        <StyledMainContentContainer>
            {CONTENT_TO_KEY_MAP[currentContent]}
            <StyledSpeedDial
                ariaLabel="items-navigation"
                icon={<Autorenew/>}
                direction={shouldChangeSide ? "left" : "down"}
                onClose={handleCloseSpeedDial}
                onOpen={handleOpenSpeedDial}
                open={open}
            >
                {
                    SCREENS.map(screen =>
                        <SpeedDialAction
                            key={screen.key}
                            icon={screen.icon}
                            tooltipTitle={screen.text}
                            onClick={() => handleSwitchWindowAndClose(screen.key)}
                        />
                    )
                }
            </StyledSpeedDial>

        </StyledMainContentContainer>
    );
}

export default MainContent;