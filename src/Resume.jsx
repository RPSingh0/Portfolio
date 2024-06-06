import {Box, LinearProgress, styled, Typography} from "@mui/material";
import HeaderTitle from "./ui/HeaderTitle.jsx";
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
    backgroundColor: "#353c4a",
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

const StyledLinearProgress = styled(LinearProgress)(() => ({
    height: "0.5rem",
    borderRadius: "1rem"
}));

const USER_EXPERIENCE = [
    {
        designation: "Senior Software Engineer",
        organization: "ValueLabs",
        timeline: "May 2024 - Present",
        about: [
            "Promoted to Senior Software Engineer, I excel in developing robust systems and enhancing team efficiency. I specialize in ReactJs, MaterialUI, Java, Spring Boot, and AWS services, driving project success with innovative UI designs and seamless backend integration. I am committed to maintaining high standards and delivering quality solutions with motivation and enthusiasm."
        ]
    },
    {
        designation: "Software Engineer",
        organization: "ValueLabs",
        timeline: "Nov 2022 - May 2024",
        about: [
            "Developed an order management system with multiple screens and steps including batching of products, assigning to printers, packaging, label printing and shipment process using ReactJs and MaterialUI for front-end with Java and SpringBoot as back-end.",
            "Worked on a service to track tasks based on task type, progress, estimate time to complete and completion status, which helped team leads and members to improve on task planning and execution and gained 25% increase in task completion.",
            "Utilized AWS as cloud provider with multiple services including s3, lambda, kinesis, SQS and RDS, integrating REST services for a second sales ecommerce platform for handling real-time customer data.",
            "Designed and implemented a user interface for visualizing data with images and product albums, using ReactJs and Redux. Received multiple appreciations from clients and stakeholders for well structured and component based design implementation."
        ]
    }
];

const USER_EDUCATION = [
    {
        title: "Self taught programmer and Engineer",
        timeline: "2017 - Present",
        about: "I'm a self-taught programmer who fell in love with computers during my high school computer science class. Since then, I've been fascinated by technology and enjoy learning new things about it every day."
    },
    {
        title: "B.Tech in Computer Science and Engineering",
        from: "Lovely Professional University",
        timeline: "2019 - 2023",
        about: "During my B.Tech in Computer Science at Lovely Professional University, I learned to solve complex problems, use modern tools, create sustainable solutions, communicate effectively, and keep learning new things. These skills are essential in today's industries, where companies need people who can handle challenges, adapt to new technologies, and contribute to ongoing improvement and innovation."
    }
];

const USER_SKILL_PERCENTAGE = [
    {
        skill: "FrontEnd Development",
        percentage: "80"
    },
    {
        skill: "Backend Development",
        percentage: "70"
    },
    {
        skill: "Cloud",
        percentage: "70"
    },
    {
        skill: "Product Development",
        percentage: "80"
    },
    {
        skill: "Problem Solving",
        percentage: "80"
    },
    {
        skill: "Leadership and Team Management",
        percentage: "70"
    }
];

function Resume() {
    return (
        <StyledResumeContainer>
            <HeaderTitle title={"Resume"}/>
            <StyledResumeSectionContainer>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"work"} value={"Experience"}/>
                    {
                        USER_EXPERIENCE.map((experience, index) =>
                            <StyledExperienceItemContainer key={index}>
                                <Box>
                                    <ItemTitle title={`${experience.designation}, ${experience.organization}`}/>
                                    <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                        {experience.timeline}
                                    </Typography>
                                </Box>
                                <StyledExperienceItemDescriptionContainer>
                                    {
                                        experience.about.map((aboutExperience, subIndex) =>
                                            <Typography variant={"body2"} sx={{color: grey["400"]}} key={subIndex}>
                                                {aboutExperience}
                                            </Typography>
                                        )
                                    }
                                </StyledExperienceItemDescriptionContainer>
                            </StyledExperienceItemContainer>
                        )
                    }
                </StyledResumeSectionItem>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"education"} value={"Education"}/>
                    {
                        USER_EDUCATION.map((education, index) =>
                            <StyledExperienceItemContainer key={index}>
                                <Box>
                                    <ItemTitle title={education.title}/>
                                    <Typography variant={"caption"} sx={{color: grey["600"]}}>
                                        {education.from ? `${education.from}, ` : ""} {education.timeline}
                                    </Typography>
                                </Box>
                                <StyledExperienceItemDescriptionContainer>
                                    <Typography variant={"body2"} sx={{color: grey["400"]}}>
                                        {education.about}
                                    </Typography>
                                </StyledExperienceItemDescriptionContainer>
                            </StyledExperienceItemContainer>
                        )
                    }
                </StyledResumeSectionItem>
                <StyledResumeSectionItem>
                    <ResumeSectionHeading type={"skills"} value={"Skills"}/>
                    <StyledSkillsContainer>
                        {
                            USER_SKILL_PERCENTAGE.map((skill, index) =>
                                <StyledSkillItem key={index}>
                                    <Typography variant={"body1"}>
                                        {skill.skill} ({skill.percentage}%)
                                    </Typography>
                                    <StyledLinearProgress variant="determinate" value={parseInt(skill.percentage)}/>
                                </StyledSkillItem>
                            )
                        }
                    </StyledSkillsContainer>
                </StyledResumeSectionItem>
            </StyledResumeSectionContainer>
        </StyledResumeContainer>
    );
}

export default Resume;