import React, { useState } from "react";

const Search = ({ tasks, setTasksToDisplay }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const keyword = e.target.value;

    const res = tasks.filter((t) => t.title.includes(keyword));

    console.log(res);
    setInput(keyword);
    setTasksToDisplay(res);
  };

  return (
    <input
      className="search"
      type="text"
      value={input}
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default Search;
