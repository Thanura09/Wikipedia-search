import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  { label: "Color of red", value: "red" },
  { label: "Color of green", value: "green" },
  { label: "Shade of blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setShowDropdown(!showDropdown);
    //     }}
    //   >
    //     Toggle dropdown
    //   </button>
    //   {showDropdown ? (
    //     <Dropdown
    //       selected={selected}
    //       onSelectedChange={setSelected}
    //       options={options}
    //     />
    //   ) : null}
    // </div>

    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          setSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
