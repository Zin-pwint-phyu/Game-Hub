import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Props } from "./Navbar";

const InputSearchBox = ({ onChangeSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onChangeSubmit(ref.current.value);
          if (ref.current?.value) ref.current.value = " ";
        }}
        style={{ width: "100%" }}>
        <InputGroup>
          <InputLeftElement>
            <BsSearch />
          </InputLeftElement>
          <Input placeholder="Search items..." borderRadius={20} ref={ref} />
        </InputGroup>
      </form>
    </>
  );
};

export default InputSearchBox;
