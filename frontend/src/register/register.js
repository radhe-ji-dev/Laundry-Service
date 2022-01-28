import React,{useState} from "react";
import axios from "axios";
import './register.css';
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import CD from "../images/CD.svg"



const Register = () =>{
    const [user, setUser] = useState({
        firstname:'',
        secondname:'',
        email:'',
        mobile:'',
        password:'',
        confirmpassword:'',
        state:'',
        district:'',
        address:'',
        pincode:''
    })
    const changeHandler = (event) =>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        axios.post("http://localhost:4500/api/v1/users/register",user).then(
            res=>{alert("Registered Scucessfully"); setUser({
                firstname:'',
                secondname:'',
                email:'',
                mobile:'',
                password:'',
                confirmpassword:'',
                state:'',
                district:'',
                address:'',
                pincode:''
            })}
        )
    }
  return (
        <div className='registerpage'>
            <div className='rnavbar'>
                <div className='rnavleft'>
                    <h2 className='rheading1'>LAUNDRY</h2>
                </div>
                <div className='rnavright'>
                    <h4>Home</h4>
                    <h4>Pricing</h4>
                    <h4>Career</h4>
                </div>
                <h4 className='rbtn1'>Sign Up</h4>
            </div>
            <div className='rmaincontent1'>
                <div className='rleftmain1'>
                    <div className='rleftcontent1'>
                        <h2 className="rheading21">Laundry Service</h2>
                        <p className='rdescription11'>Doorstep Wash and Dryclean Service</p>
                        <p className='rhaveaccount11'>Already Have Account</p>
                        {/* <button className="rlogin-btn1">Sign In</button> */}
                        <Link to="/"><button className="rlogin-btn1">Sign In</button></Link>
                    </div>
                </div>
                <div className='rrightmain1'>
                    <div className='rrightcontent1'>
                        <h2 className='rheading31'>REGISTER</h2>
                        <form  className='rregistrationform' onSubmit={submitHandler} autoComplete="off">
                            <div className='rregistrationinputs'>
                                <div className='rleftinputs' >
                                    <label className="rlabel1">First Name</label><br />
                                    <input type="text" onChange={changeHandler} name="firstname" required/><br />
                                    <label className="rlabel1">Email</label><br />
                                    <input type="email" onChange={changeHandler} name="email" required/><br />
                                    <label className="rlabel1">Password</label><br />
                                    <input type="password" onChange={changeHandler} name="password" required/><br />
                                    <label className="rlabel1">State</label><br />
                                    <input type="text" onChange={changeHandler} name="state" required/><br />
                                    <label className="rlabel1">Address</label><br />
                                    <input type="text" onChange={changeHandler} name="address" required/><br />
                                </div>
                                <div className='rrightinputs'>
                                    <label className="rlabel1">Second Name</label><br />
                                    <input type="text" onChange={changeHandler}name="secondname" required/><br />
                                    <label className="rlabel1">Mobile</label><br />
                                    <input type="number" onChange={changeHandler} name="mobile" required/><br />
                                    <label className="rlabel1">Confirm Password</label><br />
                                    <input type="password" onChange={changeHandler} name="confirmpassword" required/><br />
                                    <label className="rlabel1">District</label><br />
                                    <input type="text" onChange={changeHandler} name="district" required/>
                                    <label className="rlabel1">Pincode</label><br />
                                    <input type="number" onChange={changeHandler} name="pincode" required/><br />
                                </div>
                            </div>
                            <div className='rcheck-box1'>
                                <span className='rcheckboxtext'><img src={CD} alt="checkbox"/> I agree to Terms & Condition receiving marketing and promotional materials</span>
                            </div>
                            <button type="submit" value="Login" className="rsignupbtn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='rreferalfooter'>
                <span className="rreferal">Now Refer & Earn ₹500 for every referral*</span>
                <span className="rterms">*Terms and conditions will be applied</span>
            </div>
            <div className='rfootercontainer'>
                <div className='rtask1'>
                    <p className='raboutus'>ABOUT US</p>
                    <p className='raboutdesc'>Doorstep Wash & Dryclean Service</p>
                </div>
                <div className='rtask2'>
                    <p className='rt-one'>Home</p>
                    <p className='rt-two'>Sign In</p>
                    <p className='rt-three'>Register</p>
                </div>
                <div className='rtask3'>
                    <p className='rt-one'>Pricing</p>
                </div>
                <div className='rtask4'>
                    <p className='rt-one'>Career</p>
                    <p className='rt-two'>Blogs</p>
                    <p className='rt-three'>Create</p>   
                </div>
                <div className='rtask5'>
                    <p className='rt-one'>Content</p>
                </div>
                <div className='rtask6'>
                    <p className='rs-media'>SOCIAL MEDIA</p>
                    <div className='ricons'>
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />
                    </div>
                </div>
            </div>
            <div className='rcopyright'>
                <p className='rcopyright1'>2022 © Laundry</p>
            </div>
        </div>
  )
}


export default Register;