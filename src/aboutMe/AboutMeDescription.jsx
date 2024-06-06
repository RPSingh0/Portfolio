import {Box, styled, Typography} from "@mui/material";
import {ABOUT_USER} from "../utils/Utils.jsx";

const StyledUserDescriptionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

function AboutMeDescription() {
    return (
        <StyledUserDescriptionContainer>
            {
                ABOUT_USER.map((about, index) =>
                    <Typography variant={"body1"} key={index}>
                        {about}
                    </Typography>
                )
            }
        </StyledUserDescriptionContainer>
    );
}

export default AboutMeDescription;