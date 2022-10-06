import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/theme";
import { PokemonPage } from "./components/pages/PokemonPage";
import { HeaderLayout } from "./components/templates/HeaderLayout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout>
        <PokemonPage />
      </HeaderLayout>
    </ChakraProvider>
  );
}

export default App;
