import {TYPE_TO_ICON_MAP} from "../utils/Utils.jsx";
import {styled, Typography} from "@mui/material";

const StyledSocialContact = styled('a')(() => ({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    color: "inherit",

    "&:visited": {
        color: "inherit"
    }
}));

function SocialContact({type, href}) {

    const icon = TYPE_TO_ICON_MAP[type];

    return (
        <StyledSocialContact href={href} target={"_blank"}>
            {icon} <Typography variant={"caption"}>{type.toUpperCase()}</Typography>
        </StyledSocialContact>
    );
}

export default SocialContact;