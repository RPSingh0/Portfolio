import {Box, styled} from "@mui/material";

export const StyledResumeSectionItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
}));

export const StyledItemContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingLeft: "3.5rem",

    "@media (max-width: 600px)": {
        paddingLeft: "0"
    }
}));

export const StyledItemDescriptionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));