import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../../../context/AuthContext";
const Report = () => {
  const { user } = useContext(MyContext);
  const [report, setReport] = useState([]);
  axios
    .get("https://assignment-12-server-orcin.vercel.app/report")
    .then(function (response) {
      setReport(response.data);
    });
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-4xl font-bold py-5">All Reports Item</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Seller</th>
              <th>Report By</th>
            </tr>
          </thead>
          <tbody>
            {report &&
              report.map((u, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{u?.name}</td>
                  <td>{u.seller?.name}</td>
                  <td>{user?.displayName}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
