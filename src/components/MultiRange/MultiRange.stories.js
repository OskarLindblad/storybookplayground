import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import MultiRange from "./MultiRange";

export default {
  title: "Form/multRange",
  component: MultiRange,
};

const Template = (args) => <MultiRange {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Test",
};
