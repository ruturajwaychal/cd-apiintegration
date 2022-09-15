// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// const ZohoIntegration = () => {
//   let query = new URLSearchParams(useLocation().search);
//   const code = query.get("code");
//   useEffect(() => {
//     if (!code) {
//       return;
//     }
//     axios.post(`http://localhost:8000/integration/zoho/${code}`);
//   }, [code]);
//   //   const useQuery = () => {
//   //     return new URLSearchParams(useLocation().search);
//   //   };

//   //   const query = useQuery();
//   //   const code = query.get("code");
//   return (
//     <>
//       <div>ZohoIntegration</div>
//       {/* <h5>{code}</h5> */}
//     </>
//   );
// };

// export default ZohoIntegration;
