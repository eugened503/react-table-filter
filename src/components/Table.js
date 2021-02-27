import React from "react";
import Row from "./Row";
import TriangleIcon from "./TriangleIcon";
import { USER_PER_PAGE } from "./../utils/constants";

function Table(props) {
  const startIndex = (props.page - 1) * USER_PER_PAGE;
  const selectedUsers = props.data.slice(
    startIndex,
    startIndex + USER_PER_PAGE
  );

  const [triangleId, setTriangleID] = React.useState(false);
  const [triangleFirstName, setTriangleFirstName] = React.useState(false);
  const [triangleLastName, setTriangleLastName] = React.useState(false);
  const [triangleEmail, setTriangleEmail] = React.useState(false);
  const [trianglePhone, setTrianglePhone] = React.useState(false);

  function toggleSortId(e) {
    e.preventDefault();
    if (!triangleId) {
      props.sortIdInc();
      setTriangleID(true);
    } else {
      props.sortIdDec();
      setTriangleID(false);
    }
  }

  function toggleSortfirstName(e) {
    e.preventDefault();
    if (!triangleFirstName) {
      props.sortfirstNameInc();
      setTriangleFirstName(true);
    } else {
      props.sortfirstNameDec();
      setTriangleFirstName(false);
    }
  }

  function toggleSortlastName(e) {
    e.preventDefault();
    if (!triangleLastName) {
      props.sortlastNameInc();
      setTriangleLastName(true);
    } else {
      props.sortlastNameDec();
      setTriangleLastName(false);
    }
  }

  function toggleSortEmail(e) {
    e.preventDefault();
    if (!triangleEmail) {
      props.sortEmailInc();
      setTriangleEmail(true);
    } else {
      props.sortEmailDec();
      setTriangleEmail(false);
    }
  }

  function toggleSortPhone(e) {
    e.preventDefault();
    if (!trianglePhone) {
      props.sortPhoneInc();
      setTrianglePhone(true);
    } else {
      props.sortPhoneDec();
      setTrianglePhone(false);
    }
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-id" onClick={toggleSortId}>
              id
              <TriangleIcon triangle={triangleId} />
            </th>
            <th scope="col" onClick={toggleSortfirstName}>
              firstName
              <TriangleIcon triangle={triangleFirstName} />
            </th>
            <th scope="col" onClick={toggleSortlastName}>
              lastName
              <TriangleIcon triangle={triangleLastName} />
            </th>
            <th scope="col" onClick={toggleSortEmail}>
              email
              <TriangleIcon triangle={triangleEmail} />
            </th>
            <th scope="col" onClick={toggleSortPhone}>
              phone
              <TriangleIcon triangle={trianglePhone} />
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedUsers.map((item, index) => {
            return (
              <Row
                key={index}
                address={item.address}
                description={item.description}
                email={item.email}
                firstName={item.firstName}
                id={item.id}
                lastName={item.lastName}
                phone={item.phone}
                getUserInfo={props.getUserInfo}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
