import {Box, Divider, styled, Typography} from "@mui/material";
import {blue, grey} from "@mui/material/colors";
import ContactItem from "./ContactItem.jsx";
import SocialContact from "./SocialContact.jsx";
import {USER_CONTACT, USER_SOCIAL_CONTACT} from "../utils/Utils.jsx";

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
    backgroundColor: "#181e29",
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
    backgroundColor: "#353c4a",
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
                {
                    USER_CONTACT.map((contact, index) =>
                        <ContactItem type={contact.type} value={contact.value} key={index}/>
                    )
                }
            </StyledContactContainer>
            <StyledDivider flexItem={true}/>
            <StyledSocialConnectionContainer>
                {
                    USER_SOCIAL_CONTACT.map((socialContact, index) =>
                        <SocialContact type={socialContact.type} href={socialContact.value} key={index}/>
                    )
                }
            </StyledSocialConnectionContainer>
        </StyledAsideContainer>
    );
}

export default Aside;