import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Input } from "../src";

storiesOf("Input", module).add("Default", () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
      name="first_name"
      placeholder="First name"
      value={inputValue}
      setValue={setInputValue}
    />
  );
});
