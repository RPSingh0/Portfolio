import {TYPE_TO_ICON_MAP} from "../utils/Utils.jsx";
import {Box, styled, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const StyledContactItemContainer = styled(Box)(() => ({
    display: "flex",
    gap: "1rem",
    alignItems: "center"
}));

const StyledIconContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
    backgroundColor: grey["800"],
    borderRadius: "0.5rem",
}));

const StyledContactInfoContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem"
}));

function ContactItem({type, value}) {

    const icon = TYPE_TO_ICON_MAP[type];

    return (
        <StyledContactItemContainer>
            <StyledIconContainer>
                {icon}
            </StyledIconContainer>
            <StyledContactInfoContainer>
                <Typography variant={"caption"} sx={{color: grey["500"]}}>
                    {type.toUpperCase()}
                </Typography>
                <Typography variant={"caption"}>
                    {value}
                </Typography>
            </StyledContactInfoContainer>
        </StyledContactItemContainer>
    );
}

export default ContactItem;