import React from "react";
import HeroHeading from "./HeroHeading";
import HeroMailings from "./HeroMailing";
import HeroImage from "./HeroImage";
import { Box, Grid, GridItem } from "@chakra-ui/react";

function Hero() {
  return (
    <React.Fragment>
      <Box
        mx="auto"
        mt={{ base: 10, md: 5, lg: 0 }}
        mb={{ lg: 12 }}
        sx={{
          background: "#FEFEFE",
          borderRadius: "61% / 0 0 0 45% ",
          boxShadow: "5px 5px 20px -2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "40% 60%",
          }}
        >
          <GridItem px={10}>
            <HeroHeading />
            <HeroMailings />
          </GridItem>
          <GridItem>
            <HeroImage />
          </GridItem>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
