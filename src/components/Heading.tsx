import { Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const Heading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return (
    <Text fontSize="x-large" fontWeight="bold" marginLeft={5}>
      {heading}
    </Text>
  );
};

export default Heading;
