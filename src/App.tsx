import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hook/useGenere";
import PlatformSelector from "./components/PlatformSelector";
import { platformProp } from "./hook/useGame";
import SortOrder from "./components/SortOrder";
import Heading from "./components/Heading";
export interface GameQuery {
  genres: Genres | null;
  platforms: platformProp | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
          // md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "180px 1fr",
        }}>
        <GridItem area={"nav"}>
          <Navbar
            onChangeSubmit={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <GridItem area={"aside"}>
          <Show above="lg">
            <GenreList
              selectedGenre={gameQuery.genres}
              onSelectedGenre={(genres) =>
                setGameQuery({ ...gameQuery, genres })
              }
            />
          </Show>
        </GridItem>
        <GridItem area={"main"}>
          <Heading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              selectedPlatform={gameQuery.platforms}
              onSelectedPlatform={(platforms) =>
                setGameQuery({ ...gameQuery, platforms })
              }
            />
            <SortOrder
              onSelectedOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
