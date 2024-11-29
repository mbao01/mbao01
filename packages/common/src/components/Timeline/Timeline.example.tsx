import { PlusIcon } from "lucide-react";
import type { TimelineProps } from "./types";
import { Timeline } from "./Timeline";
import {
  TimelineContentProps,
  TimelineDotProps,
  TimelineHeadingProps,
  TimelineItemProps,
  TimelineLineProps,
} from "./types";

type TimelineExampleProps = Partial<{
  timeline: TimelineProps;
  item: TimelineItemProps;
  dot: TimelineDotProps;
  content: TimelineContentProps;
  heading: TimelineHeadingProps;
  line: TimelineLineProps;
}>;

export const TimelineExample = ({
  timeline,
  dot,
  item,
  content,
  heading,
  line,
}: TimelineExampleProps) => {
  return (
    <Timeline {...timeline}>
      <Timeline.Item variant="success" {...item}>
        <Timeline.Heading variant="content" {...heading}>
          Plan!
        </Timeline.Heading>
        <Timeline.Dot status="success" variant="success" {...dot} />
        <Timeline.Line variant="success" {...line} />
        <Timeline.Content {...content}>
          Before diving into coding, it is crucial to plan your software project thoroughly.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Done!</Timeline.Heading>
        <Timeline.Line {...line} />
        <Timeline.Dot {...dot} />
      </Timeline.Item>
      <Timeline.Item {...item} variant="success">
        <Timeline.Heading {...heading} variant="success">
          Done!
        </Timeline.Heading>
        <Timeline.Dot icon={<PlusIcon />} {...dot} />
      </Timeline.Item>
    </Timeline>
  );
};

export const TimelineAlternateExample = ({
  timeline,
  dot,
  item,
  content,
  heading,
  line,
}: TimelineExampleProps) => {
  return (
    <Timeline positions="center" {...timeline}>
      <Timeline.Item variant="info" {...item}>
        <Timeline.Heading side="left" {...heading}>
          Plan!
        </Timeline.Heading>
        <Timeline.Dot status="success" {...dot} />
        <Timeline.Line variant="secondary" {...line} />
        <Timeline.Content side="left" {...content}>
          Before diving into coding, it is crucial to plan your software project thoroughly. This
          involves defining the project scope, setting clear objectives, and identifying the target
          audience. Additionally, creating a timeline and allocating resources appropriately will
          contribute to a successful development process.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="warning" {...item}>
        <Timeline.Heading side="right" className="text-destructive" {...heading}>
          Design
        </Timeline.Heading>
        <Timeline.Dot status="failed" {...dot} />
        <Timeline.Line variant="success" {...line} />
        <Timeline.Content>
          Designing your software involves creating a blueprint that outlines the structure, user
          interface, and functionality of your application. Consider user experience (UX)
          principles, wireframing, and prototyping to ensure an intuitive and visually appealing
          design.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="error" {...item}>
        <Timeline.Heading side="left" {...heading}>
          Code
        </Timeline.Heading>
        <Timeline.Dot status="active" {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          The coding phase involves translating your design into actual code. Choose a programming
          language and framework that aligns with your project requirements. Follow best practices,
          such as modular and reusable code, to enhance maintainability and scalability. Regularly
          test your code to identify and fix any bugs or errors.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Test</Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content>
          Thorough testing is essential to ensure the quality and reliability of your software.
          Implement different testing methodologies, including unit testing, integration testing,
          and user acceptance testing. This helps identify and rectify any issues before deploying
          the software.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading side="left" {...heading}>
          Deploy
        </Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          Once your software has passed rigorous testing, it's time to deploy it. Consider the
          deployment environment, whether it's on-premises or in the cloud. Ensure proper
          documentation and provide clear instructions for installation and configuration.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Dot {...dot} />
        <Timeline.Heading {...heading}>Done!</Timeline.Heading>
      </Timeline.Item>
    </Timeline>
  );
};

export const TimelineLeftExample = ({
  timeline,
  dot,
  item,
  content,
  heading,
  line,
}: TimelineExampleProps) => {
  return (
    <Timeline {...timeline}>
      <Timeline.Item variant="primary" {...item}>
        <Timeline.Heading>Plan!</Timeline.Heading>
        <Timeline.Dot status="success" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content {...content}>
          Before diving into coding, it is crucial to plan your software project thoroughly. This
          involves defining the project scope, setting clear objectives, and identifying the target
          audience. Additionally, creating a timeline and allocating resources appropriately will
          contribute to a successful development process.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="success" {...item}>
        <Timeline.Heading side="right" className="text-destructive" {...heading}>
          Design
        </Timeline.Heading>
        <Timeline.Dot status="failed" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content {...content}>
          Designing your software involves creating a blueprint that outlines the structure, user
          interface, and functionality of your application. Consider user experience (UX)
          principles, wireframing, and prototyping to ensure an intuitive and visually appealing
          design.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="success" {...item}>
        <Timeline.Heading {...heading}>Code</Timeline.Heading>
        <Timeline.Dot status="active" {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content {...content}>
          The coding phase involves translating your design into actual code. Choose a programming
          language and framework that aligns with your project requirements. Follow best practices,
          such as modular and reusable code, to enhance maintainability and scalability. Regularly
          test your code to identify and fix any bugs or errors.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Test</Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content {...content}>
          Thorough testing is essential to ensure the quality and reliability of your software.
          Implement different testing methodologies, including unit testing, integration testing,
          and user acceptance testing. This helps identify and rectify any issues before deploying
          the software.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Deploy</Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content {...content}>
          Once your software has passed rigorous testing, it's time to deploy it. Consider the
          deployment environment, whether it's on-premises or in the cloud. Ensure proper
          documentation and provide clear instructions for installation and configuration.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Done!</Timeline.Heading>
        <Timeline.Dot {...dot} />
      </Timeline.Item>
    </Timeline>
  );
};

export const TimelineLabelsExample = ({
  timeline,
  dot,
  item,
  content,
  heading,
  line,
}: TimelineExampleProps) => {
  return (
    <Timeline positions="center" {...timeline}>
      <Timeline.Item variant="success" {...item}>
        <Timeline.Heading {...heading} side="left">
          Plan!
        </Timeline.Heading>
        <Timeline.Heading {...heading} side="right" variant="secondary">
          Done (05/04/2024)
        </Timeline.Heading>
        <Timeline.Dot status="success" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content side="left" {...content}>
          Before diving into coding, it is crucial to plan your software project thoroughly. This
          involves defining the project scope, setting clear objectives, and identifying the target
          audience. Additionally, creating a timeline and allocating resources appropriately will
          contribute to a successful development process.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading} side="right" className="text-destructive">
          Design
        </Timeline.Heading>
        <Timeline.Heading {...heading} side="left" variant="secondary">
          Failed (05/04/2024)
        </Timeline.Heading>
        <Timeline.Dot status="failed" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content>
          Designing your software involves creating a blueprint that outlines the structure, user
          interface, and functionality of your application. Consider user experience (UX)
          principles, wireframing, and prototyping to ensure an intuitive and visually appealing
          design.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading} side="left">
          Code
        </Timeline.Heading>
        <Timeline.Heading {...heading} side="right" variant="secondary">
          Current step
        </Timeline.Heading>
        <Timeline.Dot status="active" {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          The coding phase involves translating your design into actual code. Choose a programming
          language and framework that aligns with your project requirements. Follow best practices,
          such as modular and reusable code, to enhance maintainability and scalability. Regularly
          test your code to identify and fix any bugs or errors.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading}>Test</Timeline.Heading>
        <Timeline.Heading {...heading} side="left" variant="secondary">
          Next step
        </Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content>
          Thorough testing is essential to ensure the quality and reliability of your software.
          Implement different testing methodologies, including unit testing, integration testing,
          and user acceptance testing. This helps identify and rectify any issues before deploying
          the software.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading {...heading} side="left">
          Deploy
        </Timeline.Heading>
        <Timeline.Heading {...heading} side="right" variant="secondary">
          Deadline (05/10/2024)
        </Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          Once your software has passed rigorous testing, it's time to deploy it. Consider the
          deployment environment, whether it's on-premises or in the cloud. Ensure proper
          documentation and provide clear instructions for installation and configuration.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Dot {...dot} />
        <Timeline.Heading {...heading}>Done!</Timeline.Heading>
        <Timeline.Heading {...heading} side="left" variant="secondary">
          Here everything ends
        </Timeline.Heading>
      </Timeline.Item>
    </Timeline>
  );
};

export const TimelineRightExample = ({
  timeline,
  dot,
  item,
  content,
  heading,
  line,
}: TimelineExampleProps) => {
  return (
    <Timeline positions="right" {...timeline}>
      <Timeline.Item variant="secondary" {...item}>
        <Timeline.Heading side="left" {...heading}>
          Plan!
        </Timeline.Heading>
        <Timeline.Dot status="success" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content side="left" {...content}>
          Before diving into coding, it is crucial to plan your software project thoroughly. This
          involves defining the project scope, setting clear objectives, and identifying the target
          audience. Additionally, creating a timeline and allocating resources appropriately will
          contribute to a successful development process.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="secondary" {...item}>
        <Timeline.Heading side="left" className="text-destructive" {...heading}>
          Design
        </Timeline.Heading>
        <Timeline.Dot status="failed" {...dot} />
        <Timeline.Line variant="neutral" {...line} />
        <Timeline.Content side="left" {...content}>
          Designing your software involves creating a blueprint that outlines the structure, user
          interface, and functionality of your application. Consider user experience (UX)
          principles, wireframing, and prototyping to ensure an intuitive and visually appealing
          design.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item variant="accent" {...item}>
        <Timeline.Heading side="left" {...heading}>
          Code
        </Timeline.Heading>
        <Timeline.Dot status="active" {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          The coding phase involves translating your design into actual code. Choose a programming
          language and framework that aligns with your project requirements. Follow best practices,
          such as modular and reusable code, to enhance maintainability and scalability. Regularly
          test your code to identify and fix any bugs or errors.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading side="left" {...heading}>
          Test
        </Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          Thorough testing is essential to ensure the quality and reliability of your software.
          Implement different testing methodologies, including unit testing, integration testing,
          and user acceptance testing. This helps identify and rectify any issues before deploying
          the software.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Heading side="left" {...heading}>
          Deploy
        </Timeline.Heading>
        <Timeline.Dot {...dot} />
        <Timeline.Line {...line} />
        <Timeline.Content side="left" {...content}>
          Once your software has passed rigorous testing, it's time to deploy it. Consider the
          deployment environment, whether it's on-premises or in the cloud. Ensure proper
          documentation and provide clear instructions for installation and configuration.
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item {...item}>
        <Timeline.Dot {...dot} />
        <Timeline.Heading side="left" {...heading}>
          Done!
        </Timeline.Heading>
      </Timeline.Item>
    </Timeline>
  );
};
