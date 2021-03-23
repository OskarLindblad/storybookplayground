import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import DropDown from "./DropDown";

export default {
  title: "Form/DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Cost",
  options: [
    {
      value: "test1",
      title: "Test1",
    },
    {
      value: "test2",
      title: "Test2",
    },
    {
      value: "test3",
      title: "Test3",
    },
  ],
  helperText: "Test Cost",
  startValue: false,
};

export const DefaultError = Template.bind({});

DefaultError.args = {
  error: true,
  label: "Cost",
  options: [
    {
      value: "test1",
      title: "Test1",
    },
    {
      value: "test2",
      title: "Test2",
    },
    {
      value: "test3",
      title: "Test3",
    },
  ],
  helperText: "Test Cost",
  errorMessage: "Test Error",
  startValue: false,
};

export const DefaultSmall = Template.bind({});

DefaultSmall.args = {
  label: "Cost",
  options: [
    {
      value: "test1",
      title: "Test1",
    },
    {
      value: "test2",
      title: "Test2",
    },
    {
      value: "test3",
      title: "Test3",
    },
  ],
  helperText: "Test Cost",
  smallField: true,
  startValue: false,
};

export const DefaultErrorSmall = Template.bind({});

DefaultErrorSmall.args = {
  error: true,
  label: "Cost",
  options: [
    {
      value: "test1",
      title: "Test1",
    },
    {
      value: "test2",
      title: "Test2",
    },
    {
      value: "test3",
      title: "Test3",
    },
  ],
  helperText: "Test Cost",
  errorMessage: "Test Error",
  smallField: true,
  startValue: false,
};
