import ResumeSectionHeading from "./ResumeSectionHeading.jsx";
import {Box, Typography} from "@mui/material";
import ItemTitle from "./ItemTitle.jsx";
import {grey} from "@mui/material/colors";
import {USER_EXPERIENCE} from "../utils/Utils.jsx";
import {StyledItemContainer, StyledItemDescriptionContainer, StyledResumeSectionItem} from "./CommonStylesResume.jsx";

function UserExperience() {
    return (
        <StyledResumeSectionItem>
            <ResumeSectionHeading type={"work"} value={"Experience"}/>
            {
                USER_EXPERIENCE.map((experience, index) =>
                    <StyledItemContainer key={index}>
                        <Box>
                            <ItemTitle title={`${experience.designation}, ${experience.organization}`}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                {experience.timeline}
                            </Typography>
                        </Box>
                        <StyledItemDescriptionContainer>
                            {
                                experience.about.map((aboutExperience, subIndex) =>
                                    <Typography variant={"body2"} sx={{color: grey["400"]}} key={subIndex}>
                                        {aboutExperience}
                                    </Typography>
                                )
                            }
                        </StyledItemDescriptionContainer>
                    </StyledItemContainer>
                )
            }
        </StyledResumeSectionItem>
    );
}

export default UserExperience;