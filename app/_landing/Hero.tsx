import React, { PropsWithChildren } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <Section classNme="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Salu je suis Jon🖖 </h1>
      <p>
        J'aide les <Code>créateurs de contenu sur youtube</Code> à augmenter des
        vues avec des montage captivante de vidéo virales
      </p>
    </Section>
  );
};
const Code = (props: PropsWithChildren) => {
  return (
    <span
      className={cn(
        "px-1 -mx-1 rounded-md  bg-card/50 border-border py-1",
        props.children
      )}
    >
      {props.children}
    </span>
  );
};

export default Hero;
