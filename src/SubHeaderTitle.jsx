import {Box, styled, Typography} from "@mui/material";

const StyledSubHeader = styled(Box)(() => ({
    maxWidth: "max-content"
}));

function SubHeaderTitle({title}) {
    return (
        <StyledSubHeader>
            <Typography variant={"h5"} fontWeight={"bold"}>
                {title}
            </Typography>
        </StyledSubHeader>
    );
}

export default SubHeaderTitle;