import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import errorImg from "./error.svg";
import InputDate from "./InputDate";

export default {
  title: "Form/InputDate",
  component: InputDate,
};

const Template = (args) => <InputDate {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Date",
  helperText: "Test Date",
};

export const DefaultSmall = Template.bind({});

DefaultSmall.args = {
  label: "Date",
  helperText: "Test Date",
  smallField: true,
};

export const Error = Template.bind({});

Error.args = {
  label: "Date",
  helperText: "Test Date",
  suffixImg: errorImg,
  error: true,
  errorMessage: "Test Error",
};

export const ErrorSmall = Template.bind({});

ErrorSmall.args = {
  label: "Date",
  helperText: "Test Date",
  smallField: true,
  error: true,
  suffixImg: errorImg,
  errorMassage: "Test Error",
};

export const DefaultBold = Template.bind({});

DefaultBold.args = {
  label: "Date",
  helperText: "Test Date",
  boldBorder: true,
};

export const DefaultSmallBold = Template.bind({});

DefaultSmallBold.args = {
  label: "Date",
  helperText: "Test Date",
  smallField: true,
  boldBorder: true,
};

export const ErrorBold = Template.bind({});

ErrorBold.args = {
  label: "Date",
  helperText: "Test Date",
  error: true,
  errorMassage: "Test Error",
  boldBorder: true,
  suffixImg: errorImg,
};

export const ErrorSmallBold = Template.bind({});

ErrorSmallBold.args = {
  label: "Date",
  helperText: "Test Date",
  smallField: true,
  error: true,
  errorMassage: "Test Error",
  boldBorder: true,
  suffixImg: errorImg,
};
