import react from "react";

//mui components
import { Box, MobileStepper, Paper, Typography, Button, Link } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles"

//images
import BudgetTracker from "../assets/BudgetTracker.png"
import ClearSky from "../assets/ClearSky.png"
import codeShare from "../assets/codeShare.png"
import FiveStarLocal from "../assets/FiveStarLocal.png"
import GoogleBooks from "../assets/GoogleBooks.png"
import TechBlog from "../assets/TechBlog.png"


const steps = [
    {
        label: "codeShare",
        picture: codeShare,
        pictureAlt: "Code Share Screenshot",
        repoLink: "https://github.com/Cleggatron/code-sharers",
        liveLink: "https://mighty-ridge-50767.herokuapp.com/",
        Description: "A social site to allow users to share code fragements and comment on other users' posts.",
        keyTechnologies: ["HTML", "CSS", "Javascript", "MongoDB", "MUI", "React", "NodeJS", "GraphQL", "Express"],
        myRole: "Build front and back end GraphQL queries, typedefs, and resolvers. Build some React components. Assist with styling implementation."
    },
    {
        label: "Budget Tracker",
        picture: BudgetTracker,
        pictureAlt: "Budget Tracker Screenshot",
        repoLink: "https://github.com/Cleggatron/Track-Your-Budget",
        liveLink: "https://protected-eyrie-17990.herokuapp.com/",
        Description: "A budget tracking application that uses indexedDB and caching to provide offline support in the manner of a Progressive Web Application.",
        keyTechnologies: ["HTML", "CSS", "Javascript", "MongoDB", "Express"],
        myRole: "Refactor frontend to provide offline support."
    },
    {
        label: "Google Book Search",
        picture: GoogleBooks,
        pictureAlt: "Google Books Screenshot",
        repoLink: "https://github.com/Cleggatron/GoogleBooks-GraphQL-Refactor",
        liveLink: "https://lit-island-86967.herokuapp.com/",
        Description: "A site that allows users to search for books using a Google API, and save them to the user's favourites.",
        keyTechnologies: ["HTML", "CSS", "Javascript", "Express", "MongoDB", "GraphQL"],
        myRole: "Refactor front and back end to use GraphQL for data queries and mutations."
    },
    {
        label: "Five Star Local",
        picture: FiveStarLocal,
        pictureAlt: "Five Star Local Screenshot",
        repoLink: "https://github.com/Cleggatron/My-5-Star-Local",
        liveLink: "https://vast-journey-10843.herokuapp.com/login",
        Description: "A restaurant posting and review site, using logging technology to track http requests to check site use.",
        keyTechnologies: ["HTML", "CSS", "Javascript", "Express", "MySQL"],
        myRole: "Build handlebars for templating engine. Build parts of the database schema, and some queries."
    },
    {
        label: "Tech Blog",
        picture: TechBlog,
        pictureAlt: "Tech Blog Screenshot",
        repoLink: "https://github.com/Cleggatron/Tech-Blog",
        liveLink: "https://whispering-dawn-83042.herokuapp.com/",
        Description: "A full stack blogging website.",
        keyTechnologies: ["HTML", "CSS", "NodeJS", "Express", "MySQL" ],
        myRole: "Sole creator of all aspects of the site."
    },
    {
        label: "ClearSky",
        picture: ClearSky,
        pictureAlt: "Clear Sky Screenshot",
        repoLink: "https://github.com/Cleggatron/ClearSky",
        liveLink: "https://cleggatron.github.io/ClearSky/",
        Description: "A site that allows the user to check what astonomical bodies are in the sky, as well as check the weather.",
        keyTechnologies: ["HTML", "CSS", "Javascript"],
        myRole: "Write Javascript to build elements, and create the search history using local storage."
    },
];

const badges = {
    HTML: {
        img: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        alt: "HTML5 badge"
    },
    CSS: {
        img: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        alt: "CSS3 badge"
    },
    Javascript: {
        img: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        alt: "JavaScript badge"
    },
    React: {
        img: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        alt: "React badge"
    },
    NodeJS: {
        img: "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
        alt: "Node.js badge"
    },
    MySQL: {
        img: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
        alt: "MySQL badge"
    },
    MongoDB: {
        img: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
        alt: "MongoDB badge"
    },
    Express: {
        img: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
        alt: "Express.js badge"
    },
    MUI: {
        img: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&amp;logo=material-ui&amp;logoColor=white",
        alt: "MUI badge"
    },
    GraphQL: {
        img: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql",
        alt: "Apollo GraphQL badge"
    }
}

const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: "contain"
  });

function Portfolio() {

    const [activeStep, setActiveStep] = react.useState(0);

    const maxSteps = steps.length

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            return (prevActiveStep === maxSteps - 1) ? 0 : prevActiveStep + 1
        })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            return (prevActiveStep === 0) ? maxSteps - 1 : prevActiveStep - 1
        })
    }

   return(
       <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column"
            }}>

            <h1>Portfolio</h1>

            <Paper
            square
            elevation={1}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%"
            }}>
                <h2><Link href={steps[activeStep].liveLink}>{steps[activeStep].label}</Link> | <Link href={steps[activeStep].repoLink}>Repo</Link></h2>
                <Img src={steps[activeStep].picture} alt={steps[activeStep].pictureAlt} className="screenshot"/>
                <Typography>{steps[activeStep].Description}</Typography>
                <Typography>My Role: {steps[activeStep].myRole}</Typography>

                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {steps[activeStep].keyTechnologies.map((technology) => {
                       return(
                            <img src={badges[technology].img} alt={badges[technology].alt}/>   
                        )
                    })}
                </Box>

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
                        <KeyboardArrowRight/>
                    </Button>}
                backButton={
                    <Button
                    size="small"
                    onClick={handleBack}
                    >
                        <KeyboardArrowLeft/>
                        Back
                        
                    </Button>
                }/>

            </Paper>

       </Box>
   )

}

export default Portfolio