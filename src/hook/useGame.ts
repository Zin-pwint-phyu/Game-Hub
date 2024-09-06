import { GameQuery } from "../App";
import useData from "./useData";

export interface platformProp {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platformProp }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
export default useGame;
