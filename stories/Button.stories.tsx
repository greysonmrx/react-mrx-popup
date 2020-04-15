import React from "react";
import { storiesOf } from "@storybook/react";
import { MdSettings } from "react-icons/md";

import { Button } from "../src";

storiesOf("Button", module)
  .add("Default", () => <Button>Default</Button>)
  .add("Outlined", () => <Button outlined>Outlined</Button>)
  .add("Disabled", () => <Button disabled>Disabled</Button>)
  .add("With Icon", () => <Button icon={<MdSettings />}>Settings</Button>);
