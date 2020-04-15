import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { MdSearch } from "react-icons/md";

import { Input } from "../src";

storiesOf("Input", module)
  .add("Default", () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <Input
        name="first_name"
        placeholder="First name"
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add("With left icon", () => {
    const [inputValue, setInputValue] = useState("");

    return (
      <Input
        name="search"
        leftIcon={<MdSearch />}
        placeholder="Search..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
