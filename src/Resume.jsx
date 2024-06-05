import {Box, LinearProgress, styled, Typography} from "@mui/material";
import HeaderTitle from "./HeaderTitle.jsx";
import ResumeSectionHeading from "./ResumeSectionHeading.jsx";
import ItemTitle from "./ItemTitle.jsx";
import {grey} from "@mui/material/colors";

const StyledResumeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
}));

const StyledResumeSectionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "3rem"
}));

const StyledResumeSectionItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
}));

const StyledExperienceItemContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    paddingLeft: "3.5rem",

    "@media (max-width: 600px)": {
        paddingLeft: "0"
    }
}));

const StyledSkillsContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.5rem 0.5rem",
    marginLeft: "3.5rem",
    backgroundColor: grey["800"],
    borderRadius: "0.5rem",

    "@media (max-width: 600px)": {
        marginLeft: "0"
    }
}));

const StyledSkillItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
}));

const StyledExperienceItemDescriptionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

function Resume() {
    return (
        <StyledResumeContainer>
            <HeaderTitle title={"Resume"}/>
            <StyledResumeSectionContainer>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"work"} value={"Experience"}/>
                    <StyledExperienceItemContainer>
                        <Box>
                            <ItemTitle title={"Senior Software Engineer, ValueLabs"}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                May 2024 - Present
                            </Typography>
                        </Box>
                        <StyledExperienceItemDescriptionContainer>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                Promoted to Senior Software Engineer, I excel in developing robust systems and enhancing
                                team efficiency. I specialize in ReactJs, MaterialUI, Java, Spring Boot, and AWS
                                services, driving project success with innovative UI designs and seamless backend
                                integration. I am committed to maintaining high standards and delivering quality
                                solutions with motivation and enthusiasm.
                            </Typography>
                        </StyledExperienceItemDescriptionContainer>
                    </StyledExperienceItemContainer>
                    <StyledExperienceItemContainer>
                        <Box>
                            <ItemTitle title={"Software Engineer, ValueLabs"}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                Nov 2022 - May 2024
                            </Typography>
                        </Box>
                        <StyledExperienceItemDescriptionContainer>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                Developed an order management system with multiple screens and steps including batching
                                of products, assigning to printers, packaging, label printing and shipment process using
                                ReactJs and MaterialUI for front-end with Java and SpringBoot as back-end.
                            </Typography>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                Worked on a service to track tasks based on task type, progress, estimate time to
                                complete and completion status, which helped team leads and members to improve on task
                                planning and execution and gained 25% increase in task completion.
                            </Typography>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                Utilized AWS as cloud provider with multiple services including s3, lambda, kinesis, SQS
                                and RDS, integrating REST services for a second sales ecommerce platform for handling
                                real-time customer data.
                            </Typography>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                Designed and implemented a user interface for visualizing data with images and product
                                albums, using ReactJs and Redux. Received multiple appreciations from clients and
                                stakeholders for well structured and component based design implementation.
                            </Typography>
                        </StyledExperienceItemDescriptionContainer>
                    </StyledExperienceItemContainer>
                </StyledResumeSectionItem>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"education"} value={"Education"}/>
                    <StyledExperienceItemContainer>
                        <Box>
                            <ItemTitle title={"Self taught programmer and Engineer"}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                2017 - Present
                            </Typography>
                        </Box>
                        <StyledExperienceItemDescriptionContainer>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                I&apos;m a self-taught programmer who fell in love with computers during my high school
                                computer science class. Since then, I&apos;ve been fascinated by technology and enjoy
                                learning new things about it every day.
                            </Typography>
                        </StyledExperienceItemDescriptionContainer>
                    </StyledExperienceItemContainer>
                    <StyledExperienceItemContainer>
                        <Box>
                            <ItemTitle title={"B.Tech in Computer Science and Engineering"}/>
                            <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                Lovely Professional University, 2019 - 2023
                            </Typography>
                        </Box>
                        <StyledExperienceItemDescriptionContainer>
                            <Typography variant={"body2"} sx={{color: grey["600"]}}>
                                During my B.Tech in Computer Science at Lovely Professional University, I learned to
                                solve complex problems, use modern tools, create sustainable solutions, communicate
                                effectively, and keep learning new things. These skills are essential in today&apos;s
                                industries, where companies need people who can handle challenges, adapt to new
                                technologies, and contribute to ongoing improvement and innovation.
                            </Typography>
                        </StyledExperienceItemDescriptionContainer>
                    </StyledExperienceItemContainer>
                </StyledResumeSectionItem>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"skills"} value={"Skills"}/>
                    <StyledSkillsContainer>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                FrontEnd Development (80%)
                            </Typography>
                            <LinearProgress variant="determinate" value={80}/>
                        </StyledSkillItem>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                Backend Development (70%)
                            </Typography>
                            <LinearProgress variant="determinate" value={70}/>
                        </StyledSkillItem>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                Problem Solving (80%)
                            </Typography>
                            <LinearProgress variant="determinate" value={80}/>
                        </StyledSkillItem>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                Cloud (70%)
                            </Typography>
                            <LinearProgress variant="determinate" value={70}/>
                        </StyledSkillItem>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                Product Development (80%)
                            </Typography>
                            <LinearProgress variant="determinate" value={80}/>
                        </StyledSkillItem>
                        <StyledSkillItem>
                            <Typography variant={"body1"}>
                                Leadership and Team Management (70%)
                            </Typography>
                            <LinearProgress variant="determinate" value={70}/>
                        </StyledSkillItem>
                    </StyledSkillsContainer>
                </StyledResumeSectionItem>
            </StyledResumeSectionContainer>
        </StyledResumeContainer>
    );
}

export default Resume;