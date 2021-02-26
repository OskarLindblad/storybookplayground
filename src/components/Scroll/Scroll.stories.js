import React from "react";
/* eslint-disable import/no-anonymous-default-export */
import Scroll from "./Scroll";

export default {
  title: "Form/Scroll",
  component: Scroll,
};

const Template = (args) => <Scroll {...args} />;

export const Default = Template.bind({});

Default.args = {
  content: "<p>Hej</p>",
};
