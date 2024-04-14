import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../controllers/Nav";
import RoomTable from "react-data-table-component";
import "../../public/css/Rooms.css";

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Rooms() {
  const [roomdata, setRoomdata] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/rooms");
        const modifiedData = response.data.map(room => ({
          ...room,
          RoomPice: `฿${formatNumber(room.Price)}`
        }));
        setRoomdata(modifiedData);
        setRecords(modifiedData); // Set records after fetching and modifying data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      name: "Number",
      selector: (row) => row.RoomNumber,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.RoomType,
      sortable: true,
    },
    {
      name: "Pice",
      selector: (row) => row.RoomPice,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.RoomStatus,
      sortable: true,
    },
  ];


  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "rgba(174, 174, 235, 0.80)",
        boxShadow: "0px 0px 4px 0px rgba(96, 93, 93, 0.5)",
      },
    },
    headCells: {
      style: {
        color: "#000000",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        cursor: "pointer",
      },
    },
  };

  function handleFilter(event) {
    const newData = roomdata.filter((row) => {
      return (
        row.RoomNumber.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.RoomType.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.RoomPice.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.RoomStatus.toLowerCase().includes(event.target.value.toLowerCase()) 

      );
    });
    setRecords(newData);
  }

  return (
    <>
      <Nav />
      <div className="Room_contenner">
        <header className=" Room_header">
          <h1>Rooms</h1>
          <hr />
          <div className="Renter_Search">
            <input
              className="form-control me-2"
              type="text"
              style={{ width: 400 }}
              placeholder="Search..."
              onChange={handleFilter}
            />
            <button type="button" className="btn btn-primary">
              Add+
            </button>
          </div>
        </header>

        <div className="body_Renter_table">
          <div className="Renter_table">
            <RoomTable
              columns={columns}
              data={records}
              fixedHeader={true}
              fixedHeaderScrollHeight="600px"
              customStyles={customStyles}
              highlightOnHover
              pagination
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
