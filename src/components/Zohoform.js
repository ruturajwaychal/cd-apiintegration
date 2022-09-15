// /* eslint-disable no-lone-blocks */
// import React, { useEffect, useState } from "react";
// import {
//   Checkbox,
//   Grid,
//   TextField,
//   FormControlLabel,
//   Paper,
//   Button,
//   Box,
// } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import "./Style.css";

// const Zohoform = () => {
//   let history = useHistory();

//   const [fName, setFname] = useState();
//   const [lName, setLname] = useState();
//   const [address, setAddress] = useState();
//   const [phone, setPhone] = useState();
//   const [product, setProduct] = useState([]);
//   const [userData, setUserData] = useState();

//   //dynamic form

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/getleadsinfozoho/6260de74e33b64191a527653`)
//       .then((resp) => {
//         console.log(resp);
//         setProduct(resp.data.leadsdata.fields);
//       });
//   }, []);

//   //send data to backend

//   const submitData = async (e) => {
//     e.preventDefault();
//     console.log(userData, "data");

//     // const { userData } = userData;

//     await axios
//       .post(`http://localhost:8000/zohocrm/leads`, userData)
//       .then((resp) => {
//         console.log(resp.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // history.push("/integration");
//   };

//   const backtologin = () => {
//     history.push("/");
//   };

//   const onintegrationpage = () => {
//     history.push("/integration");
//   };

//   return (
//     <>
//       <div align="center">
//         <Box>
//           <div className="container">
//             <div className="main-div">
//               <h3>PRODUCTS</h3>
//               {product.map((item, index) => {
//                 return (
//                   <>
//                     <div style={{ marginTop: "25px" }} key={index}>
//                       <h3>{item.field_label}</h3>
//                       <TextField
//                         name={item.api_name}
//                         id="lastname"
//                         onChange={(e) => {
//                           setUserData({
//                             ...userData,
//                             [e.target.name]: e.target.value,
//                           });
//                         }}
//                         placeholder={item.field_label}
//                         // value={(e) => userData[e.target.name]}
//                       />
//                     </div>
//                   </>
//                 );
//               })}
//               <div>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{
//                     width: 100,
//                     marginTop: 25,
//                     marginRight: 20,
//                     fontSize: 12,
//                   }}
//                   onClick={submitData}
//                 >
//                   Submit
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ width: 100, marginTop: 25, fontSize: 12 }}
//                   onClick={onintegrationpage}
//                 >
//                   Integrations
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default Zohoform;

// // const [data, setData] = useState({
// //   firstname: "",
// //   lastname: "",
// //   address: "",
// //   phone: "",
// // });

// // function handle(e) {
// //   const newdata = { ...data };
// //   newdata[e.target.id] = e.target.value;
// //   setData(newdata);
// // }

// // const submitUser = (e) => {
// //   e.preventDefault();
// //   const postUserUrl = "http://localhost:3003/user";
// //   axios.post(postUserUrl, {
// //     firstname: data.firstname,
// //     lastname: data.lastname,
// //     address: data.address,
// //     phone: data.phone,
// //   });
// // };

// {
//   /* <form onSubmit={(e)=>submitUser()}>   */
// }

// {
//   /* <Box
//           align-text="center"
//           component="form"
//           // onSubmit={(e) => submitUser(e)}
//           justifyContent="center"
//           alignItems="center"
//           borderRadius={"5"}
//           border="2px solid blue"
//           sx={{
//             margin: 10,
//             width: 500,
//             height: 350,
//             backgroundColor: "#e3f2fd",
//             justifyContent: "center",
//             marginTop: 150,
//             "&:hover": {
//               backgroundColor: "#bbdefb",
//               opacity: [0.9, 0.8, 1.0],
//             },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <Grid item xs={6} style={{ paddingTop: 55, alignItems: "center" }}>
//             <TextField
//               id="firstname"
//               onChange={(e) => {
//                 setFname(e.target.value);
//               }}
//               label="FirstName"
//               value={fName}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               id="lastname"
//               onChange={(e) => {
//                 setLname(e.target.value);
//               }}
//               label="LastName"
//               value={lName}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               id="address"
//               onChange={(e) => {
//                 setAddress(e.target.value);
//               }}
//               label="Address"
//               value={address}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               id="phone"
//               onChange={(e) => {
//                 setPhone(e.target.value);
//               }}
//               label="Phone"
//               value={phone}
//             />
//           </Grid>
//           <Grid style={{ margin: 25 }}>
//             <Button
//               variant="contained"
//               style={{ marginRight: 10, width: 100 }}
//               color="primary"
//               onClick={backtologin}
//             >
//               Back
//             </Button>
//             <Button
//               variant="contained"
//               color="primary"
//               style={{ width: 100 }}
//               onClick={redirectnext}
//             >
//               Next
//             </Button>
//           </Grid>
//         </Box> */
// }

// {
//   /* <Button type="submit" variant="contained"  component = {Link} to="/pay">Next</Button>          */
// }
// {
//   /* <Button type="submit" variant="contained">
//             Next
//           </Button> */
// }

// //setdata(...data,[e.target.name]:e.target.value);
