import React from "react";
import {Link} from 'react-router-dom';

function Register(){
    return (
        <>
       <div className="--registerfromouter">
           <div className="--registerform">

           <form action="">

               <h1 className = "--registerheading">Create an account</h1>

               <label htmlFor="" className="--registeremail">EMAIL</label>
               <input type="text" />

               <label htmlFor="" className="--registerusername">USERNAME</label>
               <input type="text" />

               <label htmlFor="" className="--registerusername">PASSWORD</label>
               <input type="password" />

               <button className="--registerbutton">Continue</button>
               <Link to = '/login' className = "--alreadyaccount">
                   Already have an account?
               </Link>
               
           </form>
           </div>
       </div>
        </>
    );
};

export default Register;
