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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
      setLoading(true)
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
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/transaction')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    
    <div className="max-w-lg mx-auto mt-32 p-8 border-2 rounded-lg shadow-md">
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
        <Button disabled={loading} radius="large" variant="soft">
          Send
        </Button>
      </form>

      <div className="">
        {error && <p className="text-red-700 font-bold my-5">{error}</p>}
      </div>

      <div className=" flex justify-center gap-5 my-7 ">
        <Link to="/transaction">
          <div className="flex gap-2 bg-slate-500 text-white p-3 rounded-lg cursor-pointer hover:opacity-90">
            <img src={Money} alt="" width="25px" />
            <span className="pr-6">Transactions </span>
          </div>
        </Link>

        <Link to="/">
          <div className="flex gap-2 bg-slate-500 text-white p-3 rounded-lg cursor-pointer hover:opacity-90">
            <img src={HomeImg} alt="" width="25px" />
            <span className="pr-3">Home </span>
          </div>
        </Link>

        <Link to="/customer">
          <div className="flex gap-2 bg-slate-500 text-white p-3 rounded-lg cursor-pointer hover:opacity-90">
            <img src={AboutImg} alt="" width="25px" />
            <span className="pr-3">Customers </span>
          </div>
        </Link>
      </div>
    </div>
    
    
  );
}
