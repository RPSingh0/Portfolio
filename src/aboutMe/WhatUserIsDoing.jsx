import SubHeaderTitle from "../ui/SubHeaderTitle.jsx";
import {Box, styled, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {WHAT_USER_IS_DOING} from "../utils/Utils.jsx";
import {StyledSubAboutContainer} from "./CommonStylesAboutMe.jsx";

const StyledWhatIAmDoingItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.5rem 0.5rem",
    backgroundColor: "#353c4a",
    borderRadius: "0.5rem"
}));

function WhatUserIsDoing() {
    return (
        <StyledSubAboutContainer>
            <SubHeaderTitle title={"What I'm doing"}/>
            {
                WHAT_USER_IS_DOING.map((task, index) =>
                    <StyledWhatIAmDoingItem key={index}>
                        <Box>
                            <Typography variant={"body1"} fontWeight={"bold"}>
                                {task.as}
                            </Typography>
                            <Typography variant={"caption"} fontWeight={"bold"} color={grey["500"]}>
                                {task.where}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant={"body2"}>
                                {task.about}
                            </Typography>
                        </Box>
                    </StyledWhatIAmDoingItem>
                )
            }
        </StyledSubAboutContainer>
    );
}

export default WhatUserIsDoing;