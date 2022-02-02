import react from "react";

//mui components
import {Card, MobileStepper, Button, Box, Typography} from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"

//images
import BudgetTracker from "../assets/BudgetTracker.PNG"
import ClearSky from "../assets/ClearSky.PNG"
import codeShare from "../assets/codeShare.PNG"
import FiveStarLocal from "../assets/FiveStarLocal.PNG"
import GoogleBooks from "../assets/GoogleBooks.PNG"
import TechBlog from "../assets/TechBlog.PNG"

const steps = [
    { 
        label: "Budget Tracker",
        picture: BudgetTracker,
        pictureAlt: "Budget Tracker Screenshot",
        repoLink: "https://github.com/Cleggatron/Track-Your-Budget",
        liveLink:"https://protected-eyrie-17990.herokuapp.com/",
        Description: "A budget tracking application that uses indexedDB and caching to provide offline support in the manner of a Progressive Web Application.",
        keyTechnologies: []
    },
    {
        label: "ClearSky",
        picture: ClearSky,
        pictureAlt: "Clear Sky Screenshot",
        repoLink: "https://github.com/Cleggatron/ClearSky",
        liveLink:"https://cleggatron.github.io/ClearSky/",
        Description: "A site that allows the user to check what astonomical bodies are in the sky, as well as check the weather.",
        keyTechnologies: []
    },
    {
        label: "codeShare",
        picture: codeShare,
        pictureAlt: "Code Share Screenshot",
        repoLink: "https://github.com/Cleggatron/code-sharers",
        liveLink:"https://mighty-ridge-50767.herokuapp.com/",
        Description: "A social site to allow users to share code fragements and comment on other users' posts.",
        keyTechnologies: []
    },
    {
        label: "Five Star Local",
        picture: FiveStarLocal,
        pictureAlt: "Five Star Local Screenshot",
        repoLink: "https://github.com/Cleggatron/My-5-Star-Local",
        liveLink:"https://vast-journey-10843.herokuapp.com/login",
        Description: "A restaurant posting and review site, using logging technology to track http requests to check site use.",
        keyTechnologies: []
    },
    {
        label: "Google Book Search",
        picture: GoogleBooks,
        pictureAlt: "Google Books Screenshot",
        repoLink: "https://github.com/Cleggatron/GoogleBooks-GraphQL-Refactor",
        liveLink:"https://lit-island-86967.herokuapp.com/",
        Description: "A site that allows users to search for books using a Google API, and save them to the user's favourites.",
        keyTechnologies: []
    },
    {
        label: "Tech Blog",
        picture: TechBlog,
        pictureAlt: "Tech Blog Screenshot",
        repoLink: "https://github.com/Cleggatron/Tech-Blog",
        liveLink:"https://whispering-dawn-83042.herokuapp.com/",
        Description: "A full stack blogging website.",
        keyTechnologies: []
    }
];

const badges = {
    HTML: {
        img:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white",
        alt:"HTML5 badge"
    },
    CSS: {
        img:"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white",
        alt: "CSS3 badge"
    },
    Javascript: {
        img:"https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E",
        alt: "JavaScript badge"
    },
    React: {
        img: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB",
        alt: "React badge"
    },
    NodeJS: {
        img: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white",
        alt: "Node.js badge"
    },
    MySQL: {
        img: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white",
        alt: "MySQL badge"
    },
    MongoDB: {
        img: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white",
        alt: "MongoDB badge"
    },
    Express: {
        img: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB",
        alt: "Express.js badge"
    },
    MUI: {
        img: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white",
        alt: "MUI badge"
    },
    GraphQL: {
        img: "https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&amp;logo=apollo-graphql",
        alt :"Apollo GraphQL badge"
    }
}



function Portfolio(){

    const [activeStep, setActiveStep] = react.useState(0);

    const theme = useTheme()

    const maxSteps = steps.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) =>{
            return (prevActiveStep === maxSteps - 1) ? 0 : prevActiveStep + 1
        })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) =>{
            return (prevActiveStep === 0) ? 0 : prevActiveStep -1
        })
    }
    
    return (
        <Box>
            <Typography>{steps[activeStep].label}</Typography>
            <Card>
                <img src={steps[activeStep].picture}/>
            </Card>
            <Typography>Description: {steps[activeStep].Description}</Typography>

            <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
        </Box>
    )

}

export default Portfolio