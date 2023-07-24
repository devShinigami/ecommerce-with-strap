import React, { useEffect } from "react";

function Filter({ setactivecategory, activecategory, setfiltered, data }) {
  const filtered = data.filter(
    (item) => item?.attributes.filter === activecategory
  );
  useEffect(() => {
    if (activecategory === 10) {
      setfiltered(data);
      return;
    }
    setfiltered(filtered);
  }, [activecategory]);
  return (
    <div className="dropdown dropdown-hover mx-4 text-white">
      <label tabIndex={0} className="btn m-1 bg-black">
        Categories
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow rounded-box w-52 bg-black gap-3"
      >
        <li>
          {" "}
          <button
            className={
              activecategory === 4
                ? "bg-gray-700 py-2 px-4 rounded-2xl "
                : "bg-black py-2 px-4 rounded-2xl"
            }
            onClick={() => setactivecategory(4)}
          >
            Airpods
          </button>
        </li>
        <li>
          <button
            className={
              activecategory === 2
                ? "bg-gray-700 py-2 px-4 rounded-2xl "
                : "bg-black py-2 px-4 rounded-2xl"
            }
            onClick={() => setactivecategory(2)}
          >
            HeadPhones
          </button>
        </li>
        <li>
          <button
            className={
              activecategory === 10
                ? "bg-gray-700 py-2 px-4 rounded-2xl "
                : "bg-black py-2 px-4 rounded-2xl"
            }
            onClick={() => setactivecategory(10)}
          >
            All
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
