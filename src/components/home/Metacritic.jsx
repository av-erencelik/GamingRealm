import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../state/filters";

const schema = yup
  .object({
    min: yup
      .number()
      .required("Min is required")
      .positive()
      .integer()
      .min(0, "The minimum value must be at least 0")
      .max(100, "The maximum value must be at most 100"),
    max: yup
      .number()
      .positive()
      .integer()
      .required()
      .min(0, "The minimum value must be at least 0")
      .min(yup.ref("min"))
      .max(100, "The maximum value must be at most 100"),
  })
  .required();
const Metacritic = () => {
  const [isMetacriticOpened, setIsMetacriticOpened] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(filtersActions.setMetacriticMin(data.min));
    dispatch(filtersActions.setMetacriticMax(data.max));
  };
  return (
    <div className="flex w-[100%] cursor-pointer flex-col items-center justify-center rounded-md transition ">
      <div
        className=" group flex w-[100%] flex-row justify-center p-2 hover:bg-gray-600"
        onClick={() => {
          setIsMetacriticOpened((prev) => !prev);
        }}
      >
        <h2 className=" text-sm font-bold text-gray-300  transition-all group-hover:text-white sm:text-base">
          Metacritic
        </h2>
        <motion.div animate={{ rotate: isMetacriticOpened ? 0 : 180 }}>
          <MdKeyboardArrowDown className="h-[25px] w-[25px] font-bold text-gray-200"></MdKeyboardArrowDown>
        </motion.div>
      </div>
      <AnimatePresence>
        {isMetacriticOpened && (
          <motion.form
            className="flex w-[100%] flex-col overflow-hidden rounded-b-md bg-gray-300 p-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-center gap-4">
              <input
                {...register("min")}
                className=" w-[60px] rounded-md border-2 border-gray-400 bg-gray-100 p-1 text-gray-800 outline-none transition-all focus:border-gray-800"
                placeholder="min"
              ></input>
              <input
                className="w-[60px] rounded-md border-2 border-gray-400 bg-gray-100 p-1 text-gray-800 outline-none transition-all focus:border-gray-800"
                placeholder="max"
                {...register("max")}
              ></input>
            </div>

            <button className="mt-2 rounded-md bg-gray-800 p-2 text-gray-300" type="submit">
              Apply
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Metacritic;
