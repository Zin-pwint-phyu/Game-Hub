import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const Critic = ({ score }: Props) => {
  const color = score > 90 ? "yellow" : "green";
  return (
    <Badge paddingX={2} colorScheme={color} fontSize={14}>
      {score}
    </Badge>
  );
};

export default Critic;
