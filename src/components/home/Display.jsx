import React from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Games from "./Games";

const Display = () => {
  return (
    <section className="m-0 mt-0 flex w-[100%] items-start rounded-none sm:m-auto sm:mt-10 sm:flex sm:rounded-md xl:w-[70%]">
      <Categories></Categories>
      <Filter></Filter>
      {/* <Games></Games> */}
    </section>
  );
};

export default Display;
