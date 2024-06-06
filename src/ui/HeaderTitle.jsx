import {Box, styled, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";

const StyledHeaderContainer = styled(Box)(() => ({
    maxWidth: "max-content"
}));

const StyledHeaderUnderline = styled(Box)(() => ({
    height: "0.5rem",
    backgroundColor: blue["500"],
    borderRadius: "1rem"
}));

function HeaderTitle({title}) {
    return (
        <StyledHeaderContainer>
            <Typography variant={"h4"} fontWeight={"bold"}>
                {title}
            </Typography>
            <StyledHeaderUnderline>
            </StyledHeaderUnderline>
        </StyledHeaderContainer>
    );
}

export default HeaderTitle;