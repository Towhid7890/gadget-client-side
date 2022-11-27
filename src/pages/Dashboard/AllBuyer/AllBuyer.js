import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { MyContext } from "../../../context/AuthContext";

const AllBuyer = () => {
  const { user } = useContext(MyContext);
  const url = `https://assignment-12-server-orcin.vercel.app/buyers?role=user`;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
      console.log(users);
    },
  });
  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`https://assignment-12-server-orcin.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-4xl font-bold py-5">All Buyers</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  onClick={() => handleDeleteUser(u._id)}
                  className="btn btn-accent"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyer;
