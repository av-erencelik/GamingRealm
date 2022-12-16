import React from "react";
import ThreeDotsWave from "../../utilities/ThreeDotsLoading";
import Categories from "./Categories";
import Filter from "./Filter";
import Games from "./Games";

const Display = (props) => {
  return (
    <>
      <section className="sm:left:10 sticky top-[0] z-30 m-0 mt-0 flex w-[100%] items-start rounded-none sm:absolute sm:top-auto sm:m-auto sm:mt-10 sm:w-[90%] sm:rounded-md xl:left-[10%] xl:w-[75%] 2xl:left-[11%]">
        <Categories></Categories>
        <Filter></Filter>
      </section>
      <section>
        <Games></Games>
        {props.isLoading && <ThreeDotsWave />}
        {props.error && <h2 className="mt-10 text-center text-xl font-semibold text-gray-800">{props.error}</h2>}
      </section>
    </>
  );
};

export default Display;
