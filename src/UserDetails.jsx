import React from "react";

function UserDetails({details}) {
  return (
    <div className="card mt-5 mb-5">
      <div className="card-header bg-success text-white">
        <h2>Submitted Data</h2>
      </div>
      <div className="card-body">
        <p><b>First Name:</b> {details.firstName}</p>
        <p><b>Last Name:</b> {details.lastName}</p>
        <p><b>Email:</b> {details.email}</p>
        <p><b>Password:</b> {details.password}</p>
        <p><b>Address:</b> {details.address}</p>
        <p><b>City:</b> {details.city}</p>
        <p><b>State:</b> {details.state}</p>
        <p><b>Zip:</b> {details.zip}</p>
        <p><b>Check:</b> {details.check ? "Checked" : "Not Checked"}</p>
      </div>
    </div>
  );
}

export default UserDetails;
