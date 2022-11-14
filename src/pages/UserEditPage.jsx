import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserEditPage = () => {
  const { userId } = useParams();
  const data = [0, 1, 2, 3, 4, 5];
  const some = data.filter((el) => userId.includes(el));
  if (!some.length) {
    return <Redirect to="/users/listpage" />;
  }

  return (
    <>
      <div className="d-flex flex-column mb-3 ms-5 mt-5">
        <h1>UserEditPage</h1>
        <Link to={`/users/listpage/${userId}`}>1. NavLink to user page</Link>
        {/* <NavLink to={`/users/listpage/${Number(userId) + 1}`}>2. NavLink to another user page</NavLink> */}
        <Link to={`/users/listpage/${userId}`}>
          2. NavLink to another user page
        </Link>
        <Link to={`/users/listpage`}>3. NavLink to Users list page</Link>
      </div>
    </>
  );
};

export default UserEditPage;
