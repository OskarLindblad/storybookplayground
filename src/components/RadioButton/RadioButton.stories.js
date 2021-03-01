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
  id: "1",
  label: "Is Selected",
  checked: "",
  type: "",
};

export const IsNotSelected = Template.bind({});

IsNotSelected.args = {
  id: "1",
  label: "Is Not Selected",
  checked: "",
  type: "x",
};

export const Unclickable = Template.bind({});

Unclickable.args = {
  id: "1",
  label: "Unclickable",
  checked: "",
  type: "x",
  unClickable: true,
};
