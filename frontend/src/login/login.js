import React,{useState, useContext} from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";
import './login.css';
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"


const Login = () =>{
    const [token, setToken] = useContext(store)
    const [user, setUser] = useState({
        email:'',
        password:'',
    });
    const changeHandler = (event) =>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:4500/api/v1/users/login",user).then(
            res=> setToken(res.data.token)
        )
    }
    console.log(token)
    if(token){
        console.log(user.firstname)
        return <Navigate to="/createorder" />
    }
  return (
        <div className='homepage'>
            <div className='lnavbar'>
                <div className='lnavleft'>
                    <h2 className='lheading1'>LAUNDRY</h2>
                </div>
                <div className='lnavright'>
                    <h4>Home</h4>
                    <h4>Pricing</h4>
                    <h4>Career</h4>
                </div>
                <h4 className='lnavbtn1'>Sign In</h4>
            </div>
            <div className='lmaincontent'>
                <div className='lleftmain'>
                    <div className='lleftcontent'>
                        <h2 className="lheading2">Laundry Service</h2>
                        <p className='ldescription1'>Doorstep Wash and Drycelan Service</p>
                        <p className='lhaveaccount1'>Dont Have An Account?</p>
                        {/* <button className="lregister-btn1">Register</button> */}
                        <Link to="/register"><button className="lregister-btn1">Register</button></Link>
                    </div>
                </div>
                <div className='lrightmain'>
                    <div className='lrightcontent'>
                        <h2 className='lheading3'>SIGN IN</h2>
                        <form className="loginform" onSubmit={submitHandler} autoComplete="off">
                            <label className="email1">Email</label><br />
                            <input type="email" onChange={changeHandler} name="email" required/><br />
                            <label className="password1">Password</label><br />
                            <input type="password" onChange={changeHandler} name="password" required/><br />
                            <span className='lforget1'>Forget Password?</span><br />
                            <button type="submit" value="Login" className="lsigninbtn">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='lreferalfooter'>
                <span className="lreferal">Now Refer & Earn ₹500 for every referral*</span>
                <span className="lterms">*Terms and conditions will be applied</span>
            </div>
            <div className='lfootercontainer'>
                <div className='ltask1'>
                    <p className='laboutus'>ABOUT US</p>
                    <p className='laboutdesc'>Doorstep Wash & Dryclean Service</p>
                </div>
                <div className='ltask2'>
                    <p className='lt-one'>Home</p>
                    <p className='lt-two'>Sign In</p>
                    <p className='lt-three'>Register</p>
                </div>
                <div className='ltask3'>
                    <p className='lt-one'>Pricing</p>
                </div>
                <div className='ltask4'>
                    <p className='lt-one'>Career</p>
                    <p className='lt-two'>Blogs</p>
                    <p className='lt-three'>Create</p>   
                </div>
                <div className='ltask5'>
                    <p className='lt-one'>Content</p>
                </div>
                <div className='ltask6'>
                    <p className='ls-media'>SOCIAL MEDIA</p>
                    <div className='licons'>
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />
                    </div>
                </div>
            </div>
            <div className='lcopyright'>
                <p className='lcopyright1'>2022 © Laundry</p>
            </div>

        </div>
  )
}

export default Login;
