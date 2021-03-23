import React from "react";
/* eslint-disable import/no-anonymous-default-export */
//import errorImg from "./error.svg";
import InputText from "./InputText";

export default {
  title: "Form/InputText",
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});

Default.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
};

export const DefaultSmall = Template.bind({});

DefaultSmall.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  smallField: true,
};

export const Error = Template.bind({});
