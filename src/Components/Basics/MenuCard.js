import React,{useState} from "react";
import ProComponent from "./ProComponent";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  // const initialData = 1;
  // const  [ myNum , setMyNum] = useState(initialData);

  
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((item,index) => {

return (
  <ProComponent key={index} index={index} item={item} />
  );
        })}
      </section>
    </>
  );
};

export default MenuCard;