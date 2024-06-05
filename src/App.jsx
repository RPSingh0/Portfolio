import {Box, styled} from "@mui/material";
import {grey} from "@mui/material/colors";
import Aside from "./Aside.jsx";
import MainContent from "./MainContent.jsx";

const StyledMainContainer = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    color: grey["50"],
    maxWidth: "80%",
    marginTop: "4rem",
    marginBottom: "4rem",
    marginInline: "auto",

    "@media (max-width: 1240px)": {
        maxWidth: "90%"
    },

    "@media (max-width: 1024px)": {
        maxWidth: "95%"
    },

    "@media (max-width: 900px)": {
        maxWidth: "80%",
        flexDirection: "column"
    },

    "@media (max-width: 768px)": {
        maxWidth: "90%",
        flexDirection: "column"
    }

}));

function App() {
    return (
        <StyledMainContainer>
            <Aside/>
            <MainContent/>
        </StyledMainContainer>
    );
}

export default App;