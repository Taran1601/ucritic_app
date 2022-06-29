import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./sidebar.css";
import axios from "axios";
export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats= async()=>{
      const res=await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="spansidebarTitle">ABOUT US</span>
        <img
          src="https://1gf5ml217l1u1m5lgw2dpmm8-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ratings-mobile.jpeg"
          alt=""
        />
        <p>
           Ucritic aims to provide easy access to its users for sharing 
            their reviews about anything they like or dislike. We claim to provide honest reviews which can help a person to analyse
           about a product and decide accordingly.The feedback provided by others can help you to explore the alternatives of that product.
       </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
         {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListItem">{`${c.name} `} </li>
          </Link>  
         ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i id="face" className="sidebarIcon fab fa-facebook-square"></i>
          <i id="insta" className="sidebarIcon fab fa-instagram-square"></i>
          <i id="pin" className="sidebarIcon fab fa-pinterest-square"></i>
          <i  id="tweet" className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
