import Users from "../components/Users";
import { Link } from "react-router-dom";
import HomeImg from "../assets/home.svg";
import Money from "../assets/money.svg";

export default function Transactions() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-32 max-w-4xl mx-auto m-24 border-2 p-16 rounded-xl shadow-xl">
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-center mt-5 mb-16">
            Customers
          </h1>
          <Users />
        </div>
      </div>
        <div className="flex justify-center">
      <Link to="/">
          <div className="flex items-center gap-2 p-3 bg-slate-600 justify-center max-w-xs rounded-lg mx-10 text-white">
            <img src={HomeImg} alt="" width="25px" />
            <span>Go to Home </span>
          </div>
      </Link>
      <Link to="/transfer">
          <div className="flex items-center gap-2 p-3 bg-slate-600 justify-center max-w-xs rounded-lg mx-10 text-white">
            <img src={Money} alt="" width="25px" />
            <span>Transfer Money </span>
          </div>
      </Link>

        </div>
    </div>
  );
}
