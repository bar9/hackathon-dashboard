import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import TimeScale from "../components/TimeScale";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dashboard/TimeScale',
  component: TimeScale,
  size: 'medium'
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof TimeScale>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimeScale> = (args) => <TimeScale{...args} />;

export const TwoDayHackathon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TwoDayHackathon.args = {
  areaAfter: 6,
  areaBefore: 6,
  areaDuring: 12,
  start: "2022-10-21T09:00:00",
  end: "2022-10-22T16:00:00",
  earliest: "2022-10-01T17:00:00",
  latest:"2022-11-30T00:00:00"
};


// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
