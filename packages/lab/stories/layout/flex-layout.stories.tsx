import {
  FLEX_ALIGNMENT_BASE,
  FLEX_CONTENT_ALIGNMENT_BASE,
  FlexItem,
  FlexLayout,
  Metric,
  MetricContent,
  MetricHeader,
} from "@jpmorganchase/uitk-lab";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FlexContent } from "./flex-item.stories";

export default {
  title: "Layout/FlexLayout",
  component: FlexLayout,
  subcomponents: { FlexItem },
  argTypes: {
    align: {
      options: [...FLEX_ALIGNMENT_BASE, "stretch", "baseline"],
      control: { type: "select" },
    },
    justify: {
      options: FLEX_CONTENT_ALIGNMENT_BASE,
      control: { type: "select" },
    },
    separators: {
      options: ["start", "center", "end", true],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof FlexLayout>;

const DefaultFlexLayoutStory: ComponentStory<typeof FlexLayout> = (args) => {
  return (
    <FlexLayout {...args}>
      {Array.from({ length: 4 }, (_, index) => (
        <FlexItem key={index}>
          <FlexContent />
        </FlexItem>
      ))}
      <FlexContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </FlexContent>
    </FlexLayout>
  );
};
export const DefaultFlexLayout = DefaultFlexLayoutStory.bind({});
DefaultFlexLayout.args = {};

const Responsive: ComponentStory<typeof FlexLayout> = (args) => {
  return (
    <FlexLayout {...args}>
      {Array.from({ length: 12 }, (_, index) => (
        <FlexItem grow={1} key={index}>
          <FlexContent />
        </FlexItem>
      ))}
    </FlexLayout>
  );
};
export const ToolkitFlexLayoutResponsive = Responsive.bind({});
ToolkitFlexLayoutResponsive.args = {
  direction: {
    xs: "column",
    md: "row",
  },
  wrap: {
    xs: true,
    lg: false,
  },
};

const FlexLayoutStorySimpleUsage: ComponentStory<typeof FlexLayout> = (
  args
) => {
  return (
    <div style={{ background: "#EAEDEF", padding: 24 }}>
      <FlexLayout {...args}>
        {Array.from({ length: 5 }, (_, index) => (
          <Metric key={index}>
            <MetricHeader title={`Form Stage ${index + 1}`} />
            <MetricContent value="Complete" />
          </Metric>
        ))}
        <Metric>
          <MetricHeader title="Form Stage 6" />
          <MetricContent value="Pending" />
        </Metric>
      </FlexLayout>
    </div>
  );
};
export const FlexLayoutSimpleUsage = FlexLayoutStorySimpleUsage.bind({});
FlexLayoutSimpleUsage.args = {
  gap: 3,
  wrap: true,
};