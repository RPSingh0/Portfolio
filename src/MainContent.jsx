import {Box, styled, useMediaQuery} from "@mui/material";
import {grey} from "@mui/material/colors";
import {SpeedDial, SpeedDialAction} from "@mui/lab";
import {Autorenew} from "@mui/icons-material";
import {useState} from "react";
import {CONTENT_TO_KEY_MAP, SCREENS} from "./utils/Utils.jsx";

const StyledMainContentContainer = styled(Box)(() => ({
    flex: 4,
    border: "1px solid",
    borderColor: grey["600"],
    padding: "2rem",
    backgroundColor: "#181e29",
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