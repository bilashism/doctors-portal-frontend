import { useQuery } from "@tanstack/react-query";
import React from "react";
import { APP_SERVER } from "../../../utilities/utilities";
import UserRow from "./UserRow";

const AllUsers = () => {
  const { data: allUsers = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`${APP_SERVER}/users`);
      const data = await response.json();
      return data;
    }
  });

  return (
    <div>
      <div className="">
        <h2 className="">All Users</h2>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Hello</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, i) => (
                  <UserRow key={user._id} user={user} idx={i + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
