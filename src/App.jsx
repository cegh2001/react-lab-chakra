import React from "react";
import { ChakraProvider, Heading, Box, Button, Flex, Center, Container, Grid, Stack} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        h="auto"
        w="auto"
        bgImage="https://th.bing.com/th/id/OIG.AvVtlQpzeHP1ZKkXqyaJ?pid=ImgGn"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex direction="column" align="center" justify="center" h="100%">
          <Heading color="white" textAlign="center" textTransform="uppercase">
            Domina el terreno
          </Heading>
          <Stack 
          direction= "row"
          spacing="40px"
          >
            <Button variant="outline" size="lg">
              Ver detalles
            </Button>
            <Button variant="outline" size="lg">
              Ver video
            </Button>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
