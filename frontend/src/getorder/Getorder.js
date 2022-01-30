import React, { useEffect, useState } from "react";
import axios from "axios";
import Profilepic from "../images/profilepic.svg";
import Homeimg from "../images/home-run (1).svg";
import Plusimg from "../images/more.svg";
import Listimg from "../images/list.svg";
import Searchimg from "../images/search.svg";
import { Link } from "react-router-dom";

const allorder = {
  orderid: "101",
  ordereddateandtime: "today",
  store_location: "JP Nagar",
  city: "Banglore",
  Store_phone: 9999999999,
  total_items: 5,
  price: 0,
  status: "done",
  views: 0,
};

const Getorder = () => {
  const [order, setOrder] = useState([]);
  const getOrders = async () => {
    try {
      const data = await axios("url");
      console.log(data.data);
      setOrder(data.data);
    } catch (err) {}
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-1">
          <div className="sidenav">
            <div className="">
              <button className="btn col-md-12">
                <i class="fa fa-home fa-2x text-white"></i>
              </button>
            </div>
            <div className="">
              <button className="btn col-md-12">
                <i class="fa fa-plus-circle fa-2x text-white"></i>
              </button>
            </div>
            <div className="">
              <Link to="/">
                <button className="btn col-md-12">
                  <i class="fa fa-bars fa-2x text-white"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-11">
          <table className="table">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Order Date and Time</th>
                <th>Store Location</th>
                <th>City</th>
                <th>Store Phone</th>
                <th>Total Items</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{allorder.orderid}</td>
                <td>{allorder.ordereddateandtime}</td>
                <td>{allorder.store_location}</td>
                <td>{allorder.orderid}</td>
                <td>{allorder.orderid}</td>
                <td>{allorder.orderid}</td>
                <td>{allorder.orderid}</td>
                <td>{allorder.orderid}</td>
                <td>{allorder.orderid}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Getorder;
