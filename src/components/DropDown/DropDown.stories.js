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
};
