import React from "react";

function Row(props) {
  function handleRowClick() {
    props.getUserInfo({
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phone: props.phone,
      city: props.address.city,
      streetAddress: props.address.streetAddress,
      description: props.description,
    });
  }

  return (
    <tr onClick={handleRowClick} className="row-hover">
      <th scope="row">{props.id}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default Row;
