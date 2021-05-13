import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react?",
    content: "React is a front end JS library",
  },
  {
    title: "Why use react?",
    content: "Because it is easy to use",
  },
  {
    title: "How to use react",
    content: "Use react by creating components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
