import {CHIP_TYPE_TO_ICON_MAP} from "../utils/Utils.jsx";
import {Chip, styled} from "@mui/material";
import {grey} from "@mui/material/colors";

const StyledChip = styled(Chip)(() => ({
    color: "white",

    "& svg": {
        color: `${grey["300"]} !important`
    }
}));

const StyledLink = styled("a")(() => ({
    color: grey["300"],
    textDecoration: "none",

    "&:visited": {
        color: grey["300"]
    }
}));

function ProjectChip({href, label}) {

    const icon = CHIP_TYPE_TO_ICON_MAP[label.toLowerCase()];

    return (
        <StyledLink href={href} target={"_blank"}>
            <StyledChip label={label} size={"small"} icon={icon} sx={{backgroundColor: "#181e29"}}/>
        </StyledLink>
    );
}

export default ProjectChip;