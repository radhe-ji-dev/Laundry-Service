import React from 'react';
import "./createorder.css"
import Profilepic from "../images/profilepic.svg"
import Homeimg from "../images/home-run (1).svg";
import Plusimg from "../images/more.svg"
import Listimg from "../images/list.svg"
import Searchimg from  "../images/search.svg"
import { Link } from "react-router-dom";

const Ordershome=()=> {
  return (
    <div className='ordershome'>
        <div className='onavbar'>
            <div className='onavleft'>
                <h2 className='oheading1'>LAUNDRY</h2>
            </div>
            <div className='onavright'>
                <h4>Pricing</h4>
                <h4>Career</h4>
            </div>
            <div className='profile1'>
                <img src={Profilepic} alt="ProfilePic" />
                <h3 className="profileuser"> User Name </h3>
            </div>
        </div>
        <div className='mainbody1'>
            <div className='sidenav'>
                <div className='homeimg'>
                    <img src={Homeimg} alt="Homeimage" />
                </div>
                <div className='plusimg'>
                    <img src={Plusimg} alt="plusimg" />
                </div>
                <div className='listimg'>
                    <img src={Listimg} alt="listimg" />
                </div>
            </div>
            <div className='mainbody2'>
                <div className='orderslist1'>
                    <div className='orderscountandsearch'>
                        <h3>Orders | 0</h3>
                        <span><input type="text" class="ordersearchbar1" placeholder="Search"/><img src={Searchimg} alt="searchicon" /></span>
                    </div>
                </div>
                <div className='createordersbtn1'>
                    <p>No Orders avaialble</p>
                    {/* <button className='createordersbtn2'>Create</button> */}
                    <Link to="/ordercreate"><button className="createordersbtn2">Create</button></Link>
                </div>
            </div>
        </div>
        <div className='ocopyright'>
            <p className='ocopyright1'>2022 © Laundry</p>
        </div>
    </div>
    )
}

export default Ordershome;