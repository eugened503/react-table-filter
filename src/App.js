import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Spinner from "./components/Spinner";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import { USER_PER_PAGE } from "./utils/constants";
import UserPage from "./components/UserPage";
import dataMini from "./data/data";
import dataMax from "./data/bigData";

function App() {
  const [data, setData] = React.useState([]); // основной массив
  const [dataSort, setDataSort] = React.useState([]); // массив для сортировки
  const [isSpinner, setIsSpinner] = React.useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errorInput, setErrorInput] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [userObject, setUserObject] = useState(null);
  const ulElements = document.querySelectorAll("ul");

  const renderLoading = (isLoading) => {
    if (isLoading) {
      setIsSpinner("spinner-border");
    } else {
      setIsSpinner("");
    }
  };

  const sortArrayInc = (arr, key) => {
    return arr.sort((a, b) => {
      return a[key] - b[key];
    });
  };

  const sortArrayDec = (arr, key) => {
    return arr.sort((a, b) => {
      return b[key] - a[key];
    });
  };

  function sortIdInc() {
    const newData = sortArrayInc(data, "id");
    setData([...newData]);
  }

  function sortIdDec() {
    const newData = sortArrayDec(data, "id");
    setData([...newData]);
  }

  function sortfirstNameInc() {
    const newData = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setData([...newData]);
  }

  function sortfirstNameDec() {
    const newData = data.sort((a, b) => b.firstName.localeCompare(a.firstName));
    setData([...newData]);
  }

  function sortlastNameInc() {
    const newData = data.sort((a, b) => a.lastName.localeCompare(b.lastName));
    setData([...newData]);
  }

  function sortlastNameDec() {
    const newData = data.sort((a, b) => b.lastName.localeCompare(a.lastName));
    setData([...newData]);
  }
  function sortEmailInc() {
    const newData = data.sort((a, b) => a.email.localeCompare(b.email));
    setData([...newData]);
  }

  function sortEmailDec() {
    const newData = data.sort((a, b) => b.email.localeCompare(a.email));
    setData([...newData]);
  }

  function sortPhoneInc() {
    const newData = data.sort(function (a, b) {
      return a.phone.replace(/\D/g, "") - b.phone.replace(/\D/g, "");
    });
    setData([...newData]);
  }

  function sortPhoneDec() {
    const newData = data.sort(function (a, b) {
      return b.phone.replace(/\D/g, "") - a.phone.replace(/\D/g, "");
    });
    setData([...newData]);
  }

  function deleteClass() {
    let el = document.querySelector(".active");
    el && el.classList.remove("active");
  }

  function selectFirstElement() {
    if (ulElements[0] !== undefined) {
      ulElements[0].firstChild.firstChild.style.background = "#0d6efd";
      ulElements[0].firstChild.firstChild.style.color = "white";
    }
  }

  function deselect() {
    ulElements[0].firstChild.firstChild.style.background = "white";
    ulElements[0].firstChild.firstChild.style.color = "#0d6efd";
  }

  function getSmallDataServer() {
    if (data.length !== 0) {
      selectFirstElement();
    }
    setErrorSearch(false);
    setUserObject(null);
    setErrorInput(false);
    setPage(1);
    renderLoading(false);
    setData(dataMini);
    setDataSort(dataMini);
    setTotalPages(Math.ceil(dataMini.length / USER_PER_PAGE));
  }

  function handleBigVolume() {
    if (data.length !== 0) {
      selectFirstElement();
    }

    setErrorSearch(false);
    setUserObject(null);
    setErrorInput(false);
    setPage(1);
    renderLoading(false);
    setData(dataMax);
    setDataSort(dataMax);
    setTotalPages(Math.ceil(dataMax.length / USER_PER_PAGE));
  }

  const keyPressHandler = (search) => {
    setErrorSearch(false);
    if (data.length === 0) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
      let result = dataSort.filter(function (el) {
        return el.firstName.indexOf(search) > -1; //fieldName - поле по которому нужно фильтровать
      });

      if (result.length !== 0) {
        setData([...result]);
        setTotalPages(Math.ceil(result.length / USER_PER_PAGE));
        setPage(1);
        selectFirstElement();
        deleteClass();
      } else {
        setErrorSearch(true);
      }
    }
  };

  function getUserInfo(obj) {
    setUserObject(obj);
  }

  const handleClick = (e, num) => {
    if (e.target.classList.contains("page-link")) {
      deleteClass();
      e.target.classList.add("active");
    }
    setPage(num);
    deselect();
    if (e.target.id === "a1") {
      selectFirstElement();
    }
  };

  let errorMassageInput;
  if (errorInput) {
    errorMassageInput = <div className="error">Выберите объем данных</div>;
  }

  let errorMassageSearch;
  if (errorSearch) {
    errorMassageInput = (
      <div className="error">По вашему запросу ничего не найдено</div>
    );
  }

  function setTimeoutSmallData() {
    renderLoading(true);
    setTimeout(getSmallDataServer, 350);
  }

  function setTimeoutBigVolume() {
    renderLoading(true);
    setTimeout(handleBigVolume, 550);
  }

  return (
    <div className="app">
      <Header keyPressHandler={keyPressHandler} />
      <Buttons
        handleSmallVolume={setTimeoutSmallData}
        handleBigVolume={setTimeoutBigVolume}
      />
      {errorMassageInput}
      {errorMassageSearch}
      <Table
        page={page}
        data={data}
        sortIdInc={sortIdInc}
        sortIdDec={sortIdDec}
        sortfirstNameInc={sortfirstNameInc}
        sortfirstNameDec={sortfirstNameDec}
        sortlastNameInc={sortlastNameInc}
        sortlastNameDec={sortlastNameDec}
        sortEmailInc={sortEmailInc}
        sortEmailDec={sortEmailDec}
        sortPhoneInc={sortPhoneInc}
        sortPhoneDec={sortPhoneDec}
        getUserInfo={getUserInfo}
      />
      <Pagination totalPages={totalPages} handleClick={handleClick} />
      <UserPage user={userObject} />
      <Spinner isSpinner={isSpinner} />
    </div>
  );
}

export default App;
