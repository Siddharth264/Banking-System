import BankImg from "../assets/bank.jpeg";
import Money from "../assets/money.svg";
import HomeImg from "../assets/home.svg";
import AboutImg from "../assets/about.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto max-h-full m-32 border-2 rounded-lg shadow-xl">
      <h1 className="text-4xl text-center my-7 p-4">
        Welcome to the Banking System
      </h1>
      <div className="max-w-5xl mx-auto">
        <img src={BankImg} alt="" />
      </div>
      <div className=" flex justify-center gap-5 my-7 p-6">
        <Link to="/transactions">
          <div className="flex gap-2 bg-slate-600 text-white p-3 rounded-lg cursor-pointer">
            <img src={Money} alt="" width="25px" />
            <span>Transactions</span>
          </div>
        </Link>

        <Link to="/">
          <div className="flex gap-2 bg-slate-600 text-white p-3 rounded-lg cursor-pointer">
            <img src={HomeImg} alt="" width="25px" />
            <span>Home</span>
          </div>
        </Link>

        <Link to="/about">
          <div className="flex gap-2 bg-slate-600 text-white p-3 rounded-lg cursor-pointer">
            <img src={AboutImg} alt="" width="25px" />
            <span>About</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
