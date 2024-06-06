import {Box, styled} from "@mui/material";
import SubHeaderTitle from "./ui/SubHeaderTitle.jsx";
import {TYPE_TO_ICON_MAP} from "./utils/Utils.jsx";

const StyledContactItemContainer = styled(Box)(() => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center"
}));

const StyledIconContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
    backgroundColor: "#353c4a",
    borderRadius: "0.5rem",

    "& svg": {
        height: "1.5rem",
        width: "1.5rem"
    }
}));

const StyledContactInfoContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem"
}));

function ResumeSectionHeading({type, value}) {

    const icon = TYPE_TO_ICON_MAP[type];

    return (
        <StyledContactItemContainer>
            <StyledIconContainer>
                {icon}
            </StyledIconContainer>
            <StyledContactInfoContainer>
                <SubHeaderTitle title={value}/>
            </StyledContactInfoContainer>
        </StyledContactItemContainer>
    );
}

export default ResumeSectionHeading;