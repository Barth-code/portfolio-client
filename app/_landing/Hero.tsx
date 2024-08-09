import React, { PropsWithChildren } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <Section classNme="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Salut, je suis Jon🖖 </h1>
      <p className="text-lg leading-9">
        J'aide les{" "}
        <Code className="whitespace-nowrap">
          créateurs <i className="fa-brands fa-youtube"></i> youtube
        </Code>{" "}
        à augmenter des vues avec des montages captivantes de{" "}
        <Code className="whitespace-nowrap">
          <i className="fa-solid fa-video"></i> vidéos virales
        </Code>
      </p>
    </Section>
  );
};
const Code = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <span
      className={cn(
        "px-1 -mx-1 rounded-md items-center bg-accent/20 border-accent border py-1",
        props.children
      )}
    >
      {props.children}
    </span>
  );
};

export default Hero;
