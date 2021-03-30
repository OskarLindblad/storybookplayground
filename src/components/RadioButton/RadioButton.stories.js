/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import RadioButton from "./RadioButton";

export default {
  title: "Form/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const IsSelected = Template.bind({});

IsSelected.args = {
  variant: "selected",
  checked: true,
  label: "Is Selected",
};

export const IsNotSelected = Template.bind({});

IsNotSelected.args = {
  variant: "not-selected",
  checked: false,
  label: "Is Not Selected",
};
