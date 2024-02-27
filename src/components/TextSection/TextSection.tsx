"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#ddd",
      "#67acea",
      "#ddd",
      "#083760",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection({text1,text2,text3,text4,text5}:any) {
  return (
    <TextSectionStyled>
      <div className=" flex flex-col gap-9 break-words  word-space  tracking-widest   font-extrabold">
      <TextWrapper>
        {text1}
      </TextWrapper>
      <TextWrapper>
        {text2}
      </TextWrapper>
      <TextWrapper>
        {text3}
      </TextWrapper>
      <TextWrapper>
        {text4}
      </TextWrapper>
      <TextWrapper>
        {text5}
      </TextWrapper>
      </div>
      
      {/* <TextWrapper>
        {text1}
      </TextWrapper>
      <TextWrapper>
        {text1}
      </TextWrapper> */}
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 1.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export default TextSection;