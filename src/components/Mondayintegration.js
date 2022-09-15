import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Style.css";
import { Button, Box, TextField } from "@material-ui/core";

const Mondayintegration = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [allgroups, setAllGroups] = useState([]);
  const [selectGroups, setSelectGroups] = useState([]);
  const [fields, setFields] = useState([]);
  const [userData, setUserData] = useState();

  let query = new URLSearchParams(useLocation().search);
  const code = query.get("code");
  useEffect(() => {
    if (!code) {
      return;
    }
    axios
      .get(`http://localhost:8000/getboardinfo/624e5d148cdf19ad340ecea2`)
      .then((resp) => {
        setUsers(resp.data.boardData.data.boards);
        console.log("all boards", resp.data.boardData.data.boards);
      })
      .then((error) => console.log(error));
  }, [code]);

  //get fields

  useEffect(() => {
    if (!code) {
      return;
    }
    axios
      .post(`http://localhost:8000/mondayfields/624e5d148cdf19ad340ecea2`)
      .then((resp) => {
        setFields(resp.data.boardData.data.boards.groups[0].columns);
        console.log(
          "column result",
          resp.data.boardData.data.boards[0].groups.columns
        );
      })
      .then((error) => console.log(error));
  }, [code]);

  const handleOnChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value, "handlechange");

    await axios
      .post(`http://localhost:8000/mondaygroups/:id`)
      .then((resp) => {
        setSelectGroups(resp.data.boardData.data.boards[0].groups);
        console.log(
          "get all groups",
          resp.data.boardData.data.boards[0].groups
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value, "handlechange");

    await axios
      .post(`http://localhost:8000/mondayfields/:id`)
      .then((resp) => {
        setFields(resp.data.boardData.data.boards[0].columns);
        console.log(
          "get all fields",
          resp.data.boardData.data.boards[0].columns
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData, "data");

    // const { userData } = userData;

    await axios
      .post(`http://localhost:8000/mondayitems`, userData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // history.push("/integration");
  };

  return (
    <>
      <div className="container">
        <div className={`dropdown`}>
          <select onChange={handleOnChange}>
            {users.map((user) => {
              return <option value={user.id}>{user.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <select onChange={handleChange}>
          {selectGroups.map((user) => {
            return <option value={user.id}>{user.title}</option>;
          })}
        </select>
      </div>

      <div>
        <Box>
          <div className="container">
            <div className="main-div">
              {fields.map((item, index) => {
                return (
                  <>
                    <div style={{ marginTop: "25px" }} key={index}>
                      <h3>{item.title}</h3>
                      <TextField
                        name={item.title}
                        id="lastname"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        placeholder={item.title}
                        // value={(e) => userData[e.target.name]}
                      />
                    </div>
                  </>
                );
              })}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: 100,
                    marginTop: 25,
                    marginRight: 20,
                    fontSize: 12,
                  }}
                  onClick={submitData}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: 100, marginTop: 25, fontSize: 12 }}
                  // onClick={onintegrationpage}
                >
                  Integrations
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Mondayintegration;

//get groups

// useEffect(() => {
//   if (!code) {
//     return;
//   }
//   axios
//     .get(`http://localhost:8000/mondaygroups/624e5d148cdf19ad340ecea2`)
//     .then((resp) => {
//       setAllGroups(resp.data.boardData.data.boards.groups);
//       console.log("console res", resp.data.boardData.data.boards[0].groups);
//     })
//     .then((error) => console.log(error));
// }, [code]);

// const [inputValue, setValue] = useState("");
// const [selectedValue, setselectedValue] = useState();

// let query = new URLSearchParams(useLocation().search);
// const code = query.get("code");
// useEffect(() => {
//   if (!code) {
//     return;
//   }
//   // axios.post(`http://localhost:8000/integration/monday/${code}`);

//   axios
//     .get(`http://localhost:8000/getboardinfo/624e5d148cdf19ad340ecea2`)
//     .then((resp) => {
//       console.log(resp);
//       setProduct(resp);
//     });
// }, [code]);

// const [dropdownState, setDropdownState] = useState(false);
// const [dropdownValue, setDropdownValue] = useState("");

// const handleDropdownClick = () => {
//   setDropdownState(!dropdownState);
// };
// const handleSetDropdownValue = (value) => {
//   setDropdownValue(value);
//   setDropdownState(!dropdownState);
// };
// return (
//   <>
//     <div className="container">
//       <div className={`dropdown`}>
//         <button onClick={handleDropdownClick} className="dropdown-btn">
//           {dropdownValue === "" ? "Dropdown" : dropdownValue}
//         </button>
//         <div
//           className={`dropdown-items ${
//             dropdownState ? "isVisible" : "isHidden"
//           }`}
//         >
//           <div className="dropdown-item">
//             <div
//               className="dropdown__link"
//               onClick={() => handleSetDropdownValue("value 01")}
//             >
//               Item 01
//             </div>
//           </div>
//           <div className="dropdown-item">
//             <div
//               className="dropdown__link"
//               onClick={() => handleSetDropdownValue("value 02")}
//             >
//               Item 02
//             </div>
//           </div>
//           <div className="dropdown-item">
//             <div
//               className="dropdown__link"
//               onClick={() => handleSetDropdownValue("value 03")}
//             >
//               Item 03
//             </div>
//           </div>
//           <div className="dropdown-item">
//             <div
//               className="dropdown__link"
//               onClick={() => handleSetDropdownValue("value 04")}
//             >
//               Item 04
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
