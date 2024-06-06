import {Box, styled, Typography} from "@mui/material";
import HeaderTitle from "../ui/HeaderTitle.jsx";
import SubHeaderTitle from "../ui/SubHeaderTitle.jsx";
import {grey} from "@mui/material/colors";
import TechIconWithTooltip from "../TechIconWithTooltip.jsx";
import {USER_KNOWN_TECH} from "../utils/Utils.jsx";

const StyledAboutMeContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
}));

const StyledSubAboutContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

const StyledWhatIAmDoingItem = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
    padding: "1.5rem 0.5rem",
    backgroundColor: "#353c4a",
    borderRadius: "0.5rem"
}));

const StyledTechIconContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",

    "& svg": {
        height: "2rem",
        width: "2rem"
    }
}));

const WHAT_USER_IS_DOING = [
    {
        as: "Software Engineer",
        where: "ValueLabs",
        about: "As a Software Engineer at ValueLabs, I develop high-impact solutions using React, Node.js, Java, and AWS. I’ve built an advanced order management system, improved task tracking, and integrated real-time services for an ecommerce platform, earning multiple client appreciations for my work on data visualization and design excellence."
    }
];

const ABOUT_USER = [
    "Hi, I am a passionate Software Engineer with a Bachelor's degree in Computer Science and Engineering from Lovely Professional University. Currently, I am enhancing my skills at ValueLabs, where I develop robust solutions and contribute to high-impact projects. My expertise spans across various technologies, including JavaScript, Python, Java, React, Redux, Node.js, Express.js, Spring Boot, and AWS.",
    "At ValueLabs, I have successfully built an order management system with multiple processing steps, improved task tracking services, and integrated AWS services for a real-time ecommerce platform. My work on a data visualization interface using React and Redux received multiple client appreciations for its structured and component-based design.",
    "I also take pride in my personal projects, including a full-stack ecommerce application and a blogging platform. These projects showcase my ability to design and implement comprehensive solutions using React, Node.js, MongoDB, and AWS.",
    "Recognized for my performance and design excellence, I have received awards such as Shutter Riser and Star of the Month. My dedication to delivering high-quality solutions and my strong problem-solving skills drive me to continually improve and innovate in the field of software development."
];

const StyledAboutUserDescriptionContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

function AboutMe() {
    return (
        <StyledAboutMeContainer>
            <HeaderTitle title={"About Me"}/>
            <StyledAboutUserDescriptionContainer>
                {
                    ABOUT_USER.map((about, index) =>
                        <Typography variant={"body1"} key={index}>
                            {about}
                        </Typography>
                    )
                }
            </StyledAboutUserDescriptionContainer>
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
            <StyledSubAboutContainer>
                <SubHeaderTitle title={"Technologies I've worked with"}/>
                <StyledTechIconContainer>
                    {
                        USER_KNOWN_TECH.map((tech, index) =>
                            <TechIconWithTooltip tech={tech} key={index}/>
                        )
                    }
                </StyledTechIconContainer>
            </StyledSubAboutContainer>
        </StyledAboutMeContainer>
    );
}

export default AboutMe;