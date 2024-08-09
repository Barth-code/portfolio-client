import React, { PropsWithChildren } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <Section classNme="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Salu je suis Jon🖖 </h1>
      <p>
        J'aide les
        <Code>créateurs youtube </Code>
        <i className="fa-brands fa-youtube"></i> à augmenter des vues avec des
        montage captivante de vidéo virales
      </p>
    </Section>
  );
};
const Code = (props: PropsWithChildren) => {
  return (
    <span
      className={cn(
        "px-1 -mx-0.5 rounded-md  bg-accent/20 border-accent py-1",
        props.children
      )}
    >
      {props.children}
    </span>
  );
};

export default Hero;
