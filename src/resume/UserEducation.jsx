import ResumeSectionHeading from "./ResumeSectionHeading.jsx";
import {Box, Typography} from "@mui/material";
import ItemTitle from "./ItemTitle.jsx";
import {grey} from "@mui/material/colors";
import {StyledItemContainer, StyledItemDescriptionContainer, StyledResumeSectionItem} from "./CommonStylesResume.jsx";
import {USER_EDUCATION} from "../utils/Utils.jsx";

function UserEducation() {
    return (
        <StyledResumeSectionItem>
            <ResumeSectionHeading type={"education"} value={"Education"}/>
            {
                USER_EDUCATION.map((education, index) =>
                    <StyledItemContainer key={index}>
                        <Box>
                            <ItemTitle title={education.title}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                {education.from ? `${education.from}, ` : ""} {education.timeline}
                            </Typography>
                        </Box>
                        <StyledItemDescriptionContainer>
                            <Typography variant={"body2"} sx={{color: grey["400"]}}>
                                {education.about}
                            </Typography>
                        </StyledItemDescriptionContainer>
                    </StyledItemContainer>
                )
            }
        </StyledResumeSectionItem>
    );
}

export default UserEducation;