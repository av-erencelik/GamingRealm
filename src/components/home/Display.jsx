import React from "react";
import Categories from "./Categories";
import Games from "./Games";

const Display = () => {
  return (
    <section className="m-auto mt-0 w-[100%] rounded-none sm:mt-10 sm:rounded-md xl:w-[70%]">
      <Categories></Categories>
      <Games></Games>
    </section>
  );
};

export default Display;
