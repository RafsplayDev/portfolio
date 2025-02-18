import { styled } from "@mui/material"

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
      backgroundColor: "blue"
    }))

    return (
      <>
        <StyledHero>
          i am Rafael
        </StyledHero>
      </>
    )
  }
  
  export default Hero