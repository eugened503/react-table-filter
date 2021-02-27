import React from "react";

function UserPage({ user }) {
  let userInfo;
  if (user !== undefined && user !== null) {
    userInfo = (
      <div className="card">
        <nav className="list-group list-group-flush">
          <li className="list-group-item">
            Name: {user.firstName} {user.lastName}
          </li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">City: {user.city}</li>
          <li className="list-group-item">
            streetAddress: {user.streetAddress}
          </li>

          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Description: {user.description}</li>
        </nav>
      </div>
    );
  } else {
    userInfo = <div></div>;
  }

  return <div>{userInfo}</div>;
}

export default UserPage;
