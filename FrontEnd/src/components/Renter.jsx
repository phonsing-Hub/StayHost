import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../controllers/Nav";
import FormInsert from '../controllers/FormInsert'
import FormUpdate from "../controllers/FormUpdate";
import "../../public/css/Renter.css";
import DataTable from "react-data-table-component";

function Renter() {
  const [userdata, setUserdata] = useState([]);
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
  const [showForminsert, setShowForminsert] = useState(false);
  const [showFormupdate, setShowFormupdate] = useState(false);

  const handleToggleForminsert = () => {
    setShowForminsert(!showForminsert); 
  }
  const closehandleToggleForminsert = () => {
    setShowForminsert(!showForminsert);
  }


  const handleToggleFormupdate = (row) => {
    setData(row);
    setShowFormupdate(!showFormupdate); 
  }
  const closehandleToggleFormupdate = () => {
    setShowFormupdate(!showFormupdate);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        const modifiedData = response.data.map(user => ({
          ...user,
          Birthdate: new Date(user.Birthdate).toISOString().split('T')[0]
        }));
        setUserdata(modifiedData);
        setRecords(modifiedData); // Set records after fetching and modifying data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      name: "IDCard",
      selector: (row) => row.IDCard,
      sortable: true,
    },
    {
      name: "Firstname",
      selector: (row) => row.Firstname,
      sortable: true,
    },
    {
      name: "Lastname",
      selector: (row) => row.Lastname,
    },
    {
      name: "Birthdate",

      selector: (row) => row.Birthdate,
    },
    {
      name: "Gender",
      selector: (row) => row.Gender,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.Address,
    },
    {
      name: "PhoneNumber",
      selector: (row) => row.PhoneNumber,
    }
  ];

  function handleFilter(event) {
    const newData = userdata.filter((row) => {
      return (
        row.IDCard.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.Firstname.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecords(newData);
  }


  const customStyles = {
    headRow: {
      style: {
        backgroundColor: 'rgba(174, 174, 235, 0.80)',
        boxShadow: '0px 0px 4px 0px rgba(96, 93, 93, 0.5)'
      }
    },
    headCells: {
      style: {
        color: '#000000',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        cursor: 'pointer',
      }
    },
  };


  return (
    <>
      <Nav />
      <div className="Renter">
        <header className="Renter_header">
          <h1>Renter</h1>
          <hr />
          <div className="Renter_Search">
          <input className="form-control me-2" type="text" style={{width: 400}} placeholder="Firstname or IDCard ..." onChange={handleFilter}/>
          <button type="button" className="btn btn-success" onClick={handleToggleForminsert}>New user +</button>
          </div>
        </header>
        <div className="Renter_table">
        {showForminsert && <FormInsert  closehandleToggleForminsert={closehandleToggleForminsert} />}
        {showFormupdate && <FormUpdate  closehandleToggleFormupdate={closehandleToggleFormupdate} data={data}/>}
        <DataTable
          columns={columns}
          data={records}
          fixedHeader={true}
          fixedHeaderScrollHeight="600px"
          onRowClicked={handleToggleFormupdate} 
          customStyles={customStyles}
          highlightOnHover
          pagination
          />
        </div>
      </div>
    </>
  );
}

export default Renter;
