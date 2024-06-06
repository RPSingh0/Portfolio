import {Box, styled, Tooltip} from "@mui/material";
import {TECH_TO_ICON_MAP} from "../utils/Utils.jsx";

const StyledIconContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
    backgroundColor: "#353c4a",
    borderRadius: "0.5rem",
}));

function TechIconWithTooltip({tech}) {

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

export default TechIconWithTooltip;