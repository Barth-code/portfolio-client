import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{ classNme?: string }>;

const Section = (props: SectionProps) => {
  return (
    <section className="py-8 max-w-2xl m-auto lg:px-6 px-4">
      {props.children}
    </section>
  );
};

export default Section;
