import {Box, styled, Tooltip} from "@mui/material";
import {TECH_TO_ICON_MAP} from "./utils/Utils.jsx";
import {grey} from "@mui/material/colors";

const StyledIconContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
    backgroundColor: grey["800"],
    borderRadius: "0.5rem",
}));

function TechTooltip({tech}) {

    const icon = TECH_TO_ICON_MAP[tech]["logo"];
    const text = TECH_TO_ICON_MAP[tech]["text"];

    return (
        <Tooltip title={text}>
            <StyledIconContainer>
                {icon}
            </StyledIconContainer>
        </Tooltip>
    );
}

export default TechTooltip;