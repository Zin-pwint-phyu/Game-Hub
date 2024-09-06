import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
export interface selectorOrderProps {
  onSelectedOrder: (selectedOrder: string) => void;
  selectedOrder: string;
}
const orderSelector = [
  { value: "", label: "name" },
  { value: "-released", label: "released" },
  { value: "-added", label: "added date" },
  { value: "created", label: "created date" },
  { value: "-updated", label: "updated date" },
  { value: "metacritic", label: "rating" },
];
const SortOrder = ({ onSelectedOrder, selectedOrder }: selectorOrderProps) => {
  const currentSortOrder = orderSelector.find(
    (selector) => selector.value === selectedOrder
  );
  return (
    <>
      <Box marginLeft={5}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BiChevronDown />}>
            Order By: {currentSortOrder?.label || "Relevance"}
          </MenuButton>
          <MenuList>
            {orderSelector.map((selector) => (
              <MenuItem
                onClick={() => onSelectedOrder(selector.value)}
                key={selector.value}>
                {selector.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default SortOrder;
