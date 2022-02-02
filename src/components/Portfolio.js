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
        liveLink:"https://protected-eyrie-17990.herokuapp.com/"
    },
    {
        label: "Test2",
        picture: ClearSky,
        pictureAlt: "Clear Sky Screenshot",
        repoLink: "https://github.com/Cleggatron/ClearSky",
        liveLink:"https://cleggatron.github.io/ClearSky/"
    },
    {
        label: "Test3",
        picture: codeShare,
        pictureAlt: "Code Share Screenshot",
        repoLink: "https://github.com/Cleggatron/code-sharers",
        liveLink:"https://mighty-ridge-50767.herokuapp.com/"
    },
    {
        label: "Test4",
        picture: FiveStarLocal,
        pictureAlt: "Five Star Local Screenshot",
        repoLink: "https://github.com/Cleggatron/My-5-Star-Local",
        liveLink:"https://vast-journey-10843.herokuapp.com/login"
    },
    {
        label: "Test5",
        picture: GoogleBooks,
        pictureAlt: "Google Books Screenshot",
        repoLink: "https://github.com/Cleggatron/GoogleBooks-GraphQL-Refactor",
        liveLink:"https://lit-island-86967.herokuapp.com/"
    },
    {
        label: "Test6",
        picture: TechBlog,
        pictureAlt: "Tech Blog Screenshot",
        repoLink: "https://github.com/Cleggatron/Tech-Blog",
        liveLink:"https://whispering-dawn-83042.herokuapp.com/"
    }
];



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