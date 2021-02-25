import React from "react";
/* eslint-disable import/no-anonymous-default-export */

import DataList from "./DataList";

export default {
  title: "Form/DataList",
  component: DataList,
};

const Template = (args) => <DataList {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Cost",
  options: [
    {
      value: "100",
      title: "Not Applicable (100.0%)",
    },
    {
      value: "92.5",
      title: "Very High (92.5%)",
    },
    {
      value: "77.5",
      title: "High (77.5%)",
    },
    {
      value: "65",
      title: "Average High (65.0%)",
    },
    {
      value: "50",
      title: "Average (50.0%)",
    },
    {
      value: "35",
      title: "Average Low (35.0%)",
    },
    {
      value: "22.5",
      title: "Low (22.5%)",
    },
    {
      value: "7.5",
      title: "Very Low (7.5%)",
    },
  ],
  helperText: "Test Cost",
};
