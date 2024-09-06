import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hook/useGame";
import PlatformIconList from "./PlatformIconList";
import Critic from "./Critic";
import getImageUrl from "../imageUrl";
interface Props {
  games: Games;
}
const GameCard = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getImageUrl(games.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={games.parent_platforms.map((p) => p.platform)}
          />
          <Critic score={games.metacritic} />
        </HStack>
        <Heading fontSize="x">{games.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
