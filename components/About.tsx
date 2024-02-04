"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-10 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        Hey there! I&apos;m a skilled creative professional with a solid
        <span className="font-bold"> computer science </span>background. My
        expertise is creating amazing{" "}
        <span className="font-bold">3D models and animations</span> that bring
        {"  "}
        <span className="font-mono ">websites</span> and{" "}
        <span className="font-mono ">applications</span> to life! Combining
        technology and design is my passion, and I love using it to create
        unique and cool websites.
      </p>
    </motion.section>
  );
}
