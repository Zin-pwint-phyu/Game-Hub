import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images.jpg";
import ColorMode from "./ColorMode";
import InputSearchBox from "./InputSearchBox";
export interface Props {
  onChangeSubmit: (searchText: string) => void;
}
const Navbar = ({ onChangeSubmit }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={5} spacing={8}>
      <Image src={logo} boxSize={50} boxShadow="lg" rounded="full" />
      <InputSearchBox onChangeSubmit={onChangeSubmit} />
      <ColorMode />
    </HStack>
  );
};

export default Navbar;
