import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import Button from "./Button";
import error from "./error.svg";

export default {
  title: "Form/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "test",
};

export const Icon = Template.bind({});

Icon.args = {
  label: "test",
  icon: error,
  type: "red",
};
