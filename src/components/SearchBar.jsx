import React, { useState, useEffect } from "react";
import { Productos } from "./../constants";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchItemsVisible, setIsSearchItemsVisible] = useState(false);

  const handleShowSearchItems = () => {
    setIsSearchItemsVisible(true);
  };

  const handleHideSearchItems = () => {
    setIsSearchItemsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchItemsDiv = document.getElementById("search-items-div");
      if (searchItemsDiv && !searchItemsDiv.contains(event.target)) {
        handleHideSearchItems();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setShowSearch(window.innerWidth <= 767);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex items-center w-[32%] ">
        <input
          type="text"
          placeholder="Buscar Productos..."
          className="py-3 px-8 br rounded-l-lg border-2 border-secondary grow w-full focus:outline-none sm:flex hidden ml-2 "
          onClick={handleShowSearchItems}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="px-3 py-[1.12rem] items-center justify-center bg-secondary rounded-r-lg text-white font-bold sm:flex hidden ">
          <FaSearch />
        </div>
        <div
          className="sm:hidden flex  px-4 py-[15px] rounded-lg text-white font-bold text-[20px] cursor-pointer "
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <FaSearch />
        </div>

        {/*Responsive navbar*/}
        <input
          type="text"
          placeholder="Buscar Productos..."
          className={`${!toggleSearch ? "hidden" : "flex"} ${
            showSearch ? "block" : "hidden"
          } py-4 px-10 br rounded-lg border-2 grow w-[100%] absolute left-3 z-50 focus:outline-none searchbar`}
          onClick={handleShowSearchItems}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div
          className={` px-4 py-[15px] rounded-r-lg text-white font-bold text-[30px] fixed right-[5%] z-[60] cursor-pointer searchclose  ${
            showSearch ? "block" : "hidden"
          } ${!toggleSearch ? "hidden" : "flex"}`}
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <AiOutlineClose />
        </div>

        {isSearchItemsVisible && (
          <div
            id="search-items-div"
            className={` md:w-[29%] left-0  mx-auto bg-glass-gradient absolute top-[90%]  rounded-lg w-[90%]  z-[-1] max-h-[400px] overflow-y-scroll right-1 shadow-2x1 border-[1px] sm:right-6`}
          >
            {Productos.filter((proc, index) => {
              return (
                searchTerm === "" ||
                proc.nombreProducto
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                proc.categoria.toLowerCase().includes(searchTerm.toLowerCase())
              );
            })
              .slice(0, 10)
              .map((proc, index) => {
                return (
                  <div
                    className={`flex flex-col items-center py-[40px] border-t-[1px]  mt-0 `}
                    key={proc.id}
                  >
                    <div className="flex justify-between items-center text-center text-slate-700 ">
                      <img
                        src={proc.imgProducto}
                        className="w-[10%] md:w-[15%] absolute left-9"
                      />
                      <p className="text-[14px] font-bold sm:text-[18px]">
                        {proc.nombreProducto}
                      </p>
                      <p className="text-[12px] sm:text-[15px] absolute right-[11%] ">
                        {proc.categoria}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
