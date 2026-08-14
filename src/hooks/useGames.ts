import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatforms: Platform | null) => 
  useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatforms?.id}}, [selectedGenre?.id, selectedPlatforms?.id]);

export default useGames;