import React from "react";
import { useParams } from "react-router-dom";
import UsersPage from "./UsersPage";
import UserPage from "./UserPage";
import UserEditPage from "./UserEditPage";

const UsersListPage = () => {
  const params = useParams();
  const { userId, edit } = params;
  return (
    <div>
      <>
        <h1>UsersListPage</h1>

        {userId ? edit ? <UserEditPage /> : <UserPage /> : <UsersPage />}
      </>
    </div>
  );
};

export default UsersListPage;
