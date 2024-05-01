import React from "react";
import './UpdateCenter.css';
import Navbar from "../../components/Navbar";

function UpdateCenter() {
  return (
    <div> <Navbar/>
    <div className="UpdateCenter">
    <div className="containerv" >
      <h2>Update Vaccination Center</h2>
      <form action="#" method="post" className="vaccination-center-formv">
        <div className="form-groupv">
          <label>Center Name</label>
          <input type="text" id="center-name" name="center-name" placeholder="Enter name" required />
        </div>
        <div className="form-groupv">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="Enter city" required />
        </div>
        <div className="form-groupv">
          <label>Address</label>
          <input type="text" id="address" name="address" placeholder="Update address" required />
        </div>
        <input type="submit" className="btnv" defaultValue="Update Center" />
      </form>
    </div>
    </div>
    </div>
  );
}

export default UpdateCenter;
