import {Box, Divider, styled, Typography} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import ContactItem from "./contact/ContactItem.jsx";
import SocialContact from "./contact/SocialContact.jsx";

const StyledAsideContainer = styled(Box)(() => ({
    flex: 1,
    border: "1px solid",
    borderColor: grey["600"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    padding: "2rem",
    paddingTop: "4rem",
    backgroundColor: grey["900"],
    borderRadius: "1rem",
    position: "sticky",
    top: "4rem",
    maxHeight: "max-content",
    height: "100%",

    "@media (max-width: 900px)": {
        position: "unset",
    }
}));

const StyledImageDesignationContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
}));

const StyledUserImageContainer = styled(Box)(() => ({
    width: "10rem",
    height: "10rem",
    overflow: "hidden",
    borderRadius: "1rem",
    transition: "all 0.5s",

    "&:hover": {
        "-moz-box-shadow": `0px 0px 20px 4px ${blue["800"]}`,
        boxShadow: `0px 0px 20px 4px ${blue["800"]}`
    }
}));

const StyledImage = styled("img")(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover"
}));

const StyledDesignationContainer = styled(Box)(() => ({
    padding: "0.4rem 0.8rem",
    backgroundColor: grey["800"],
    borderRadius: "0.5rem"
}));

const StyledDivider = styled(Divider)(({theme}) => ({
    color: theme.palette.grey["300"],
    borderColor: "white"
}));

const StyledContactContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",

    "& svg": {
        height: "1.5rem",
        width: "1.5rem"
    }
}));

const StyledSocialConnectionContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
}));

function Aside() {
    return (
        <StyledAsideContainer>
            <StyledImageDesignationContainer>
                <StyledUserImageContainer>
                    <StyledImage src={"./rupinder.jpg"} alt={"rupinder-image"}/>
                </StyledUserImageContainer>
                <Typography variant={"h6"} fontWeight={"bold"}>
                    Rupinder Pal Singh
                </Typography>
                <StyledDesignationContainer>
                    Software Engineer
                </StyledDesignationContainer>
            </StyledImageDesignationContainer>
            <StyledDivider flexItem={true}/>
            <StyledContactContainer>
                <ContactItem type={"email"} value={"rpalsingh715@gmail.com"}/>
                <ContactItem type={"phone"} value={"+91 (705) 553-6884"}/>
                <ContactItem type={"location"} value={"Madhapur, Hyderabad, India"}/>
            </StyledContactContainer>
            <StyledDivider flexItem={true}/>
            <StyledSocialConnectionContainer>
                <SocialContact type={"linkedin"} href={"https://www.linkedin.com/in/rupinder-p-s/"}/>
                <SocialContact type={"github"} href={"https://github.com/RPSingh0"}/>
            </StyledSocialConnectionContainer>
        </StyledAsideContainer>
    );
}

export default Aside;