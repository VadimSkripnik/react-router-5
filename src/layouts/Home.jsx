import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <h1>Home</h1>
      <Link to={`/users/listpage`}>NavLink to user list</Link>
    </div>
  );
};

export default Home;
