import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { BiChevronDown } from "react-icons/bi";
import usePlatform from "../hook/usePlatform";
import { platformProp } from "../hook/useGame";
interface Props {
  onSelectedPlatform: (platform: platformProp) => void;
  selectedPlatform: platformProp | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <>
      <Box marginLeft={5}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BiChevronDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList>
            {data.map((item) => (
              <MenuItem onClick={() => onSelectedPlatform(item)} key={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default PlatformSelector;
