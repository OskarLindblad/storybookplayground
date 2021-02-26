import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import Button from "./Button";
import error from "./error.svg";
import test from "./test.svg";

export default {
  title: "Form/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "button",
};

export const Icon = Template.bind({});

Icon.args = {
  label: "button",
  icon: error,
  type: "nonactive",
};

export const IconTest = Template.bind({});

IconTest.args = {
  label: "button",
  icon: test,
  type: "outlined",
};
