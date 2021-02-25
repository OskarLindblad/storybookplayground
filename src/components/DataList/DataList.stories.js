import React from "react";
/* eslint-disable import/no-anonymous-default-export */

import DataList from "./DataList";

export default {
  title: "Form/DataList",
  component: DataList,
};

const Template = (args) => <DataList {...args} />;

export const IsSelected = Template.bind({});

IsSelected.args = {};
