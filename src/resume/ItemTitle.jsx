import {Box, styled, Typography} from "@mui/material";

const StyledHeaderContainer = styled(Box)(() => ({
    maxWidth: "max-content"
}));

function ItemTitle({title}) {
    return (
        <StyledHeaderContainer>
            <Typography variant={"h6"} fontWeight={"bold"}>
                {title}
            </Typography>
        </StyledHeaderContainer>
    );
}

export default ItemTitle;