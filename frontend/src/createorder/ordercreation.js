import React from "react";
import "./createorder.css";
import Profilepic from "../images/profilepic.svg";
import Homeimg from "../images/home-run (1).svg";
import Plusimg from "../images/more.svg";
import Listimg from "../images/list.svg";
import Searchimg from "../images/search.svg";

import products from "../components/productlist";

const Ordercreation = () => {
  return (
    <div className="ordershome">
      <div className="onavbar">
        <div className="onavleft">
          <h2 className="oheading1">LAUNDRY</h2>
        </div>
        <div className="onavright">
          <h4>Pricing</h4>
          <h4>Career</h4>
        </div>
        <div className="profile1">
          <img src={Profilepic} alt="ProfilePic" />
          <h3 className="profileuser"> User Name </h3>
        </div>
      </div>
      <div className="mainbody1">
        <div className="sidenav">
          <div className="homeimg">
            <img src={Homeimg} alt="Homeimage" />
          </div>
          <div className="plusimg">
            <img src={Plusimg} alt="plusimg" />
          </div>
          <div className="listimg">
            <img src={Listimg} alt="listimg" />
          </div>
        </div>
        <div className="mainbody2">
          <div className="orderslist1">
            <div className="orderscountandsearch">
              <h3>Create Order</h3>
              <span>
                <input
                  type="text"
                  class="ordersearchbar1"
                  placeholder="Search"
                />
                <img src={Searchimg} alt="searchicon" />
              </span>
            </div>
          </div>
          <table className="orderingtable1">
            <th className="orderingtableheadings">
              <tr className="orderingtableheadingsrow">
                <th>Produt Types</th>
                <th>Quantity</th>
                <th>Wash Type</th>
                <th>Price</th>
                <th>Reset</th>
              </tr>
            </th>
            <tbody>
              {products.map((item) => {
                // < Createorder image={item.image} title={item.title} description={item.description} />
                return (
                  <tr>
                    <td className="producttype1">
                      <div className="productitem1">
                        <div className="productimg1">
                          <img
                            src={item.image}
                            alt="productimage"
                            className="productimage"
                          />
                        </div>
                        <div className="productnameanddesc">
                          <p className="p1"> {item.title} </p>
                          <p className="p2"> {item.description} </p>
                        </div>
                        <div className="inputquantity">
                          <input
                            type="text"
                            maxlength="4"
                            size="1"
                            className="quantityinput"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="ocopyright">
        <p className="ocopyright1">2022 © Laundry</p>
      </div>
    </div>
  );
};

export default Ordercreation;
