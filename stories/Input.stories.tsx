import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import {
  MdSearch,
  MdVpnKey,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

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
  .add("With Left Icon", () => {
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
  })
  .add("With Right Icon", () => {
    const [inputValue, setInputValue] = useState("");
    const [visibility, setVisibility] = useState(false);

    return (
      <Input
        name="password"
        leftIcon={<MdVpnKey />}
        type={visibility ? "text" : "password"}
        placeholder="Password"
        value={inputValue}
        setValue={setInputValue}
        rightIcon={
          visibility ? (
            <MdVisibilityOff onClick={() => setVisibility(false)} />
          ) : (
            <MdVisibility onClick={() => setVisibility(true)} />
          )
        }
      />
    );
  });
