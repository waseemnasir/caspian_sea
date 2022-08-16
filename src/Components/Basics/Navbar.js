import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
    <div className="container-fluid">
      <nav className="navbar d-flex justify-content-center ">
        <div className="btn-group container">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      </div>
    </>
  );
};

export default navbar;