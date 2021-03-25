import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import errorImg from "./error.svg";
import DataList from "./DataList";

export default {
  title: "Form/DataList",
  component: DataList,
};

const Template = (args) => <DataList {...args} />;

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

Error.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  suffixImg: errorImg,
  error: true,
  errorMessage: "Test Error",
};

export const ErrorSmall = Template.bind({});

ErrorSmall.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  smallField: true,
  error: true,
  suffixImg: errorImg,
  errorMassage: "Test Error",
};

export const DefaultBold = Template.bind({});

DefaultBold.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  boldBorder: true,
};

export const DefaultSmallBold = Template.bind({});

DefaultSmallBold.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  smallField: true,
  boldBorder: true,
};

export const ErrorBold = Template.bind({});

ErrorBold.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  error: true,
  errorMassage: "Test Error",
  boldBorder: true,
  suffixImg: errorImg,
};

export const ErrorSmallBold = Template.bind({});

ErrorSmallBold.args = {
  suffixInput: "SEK",
  label: "Cost",
  helperText: "Test Cost",
  smallField: true,
  error: true,
  errorMassage: "Test Error",
  boldBorder: true,
  suffixImg: errorImg,
};
