import { Button } from "@radix-ui/themes";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import Money from "../assets/money.svg";
import HomeImg from "../assets/home.svg";
import AboutImg from "../assets/about.svg";

export default function Transfer() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: 0,
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch("api/v1/user/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        alert(data.message);
      }
      navigate('/transactions')
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-32">
        <h1 className="text-3xl font-bold text-center my-12">Transfer Money</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          className="p-3 border rounded-lg"
          type="text"
          placeholder="Senders Name"
          id="from"
        />
        <input
          onChange={handleChange}
          className="p-3 border rounded-lg"
          type="text"
          placeholder="Recievers Name"
          id="to"
        />
        <input
          onChange={handleChange}
          className="p-3 border rounded-lg"
          type="number"
          placeholder="Amount"
          id="amount"
        />
        <Button radius="large" variant="soft">
          Send
        </Button>
      </form>

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
}
