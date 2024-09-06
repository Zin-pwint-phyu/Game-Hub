import { Box, Button, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGenere, { Genres } from "../hook/useGenere";
import getImageUrl from "../imageUrl";
interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenere();
  // console.log(data);
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <Box height="100vh" marginLeft={4}>
      <List>
        {data.map((genre) => (
          <HStack paddingX={2} marginY={2} key={genre.id}>
            <Image
              src={getImageUrl(genre.image_background)}
              boxSize={30}
              objectFit="cover"
              borderRadius={5}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              variant="link">
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
