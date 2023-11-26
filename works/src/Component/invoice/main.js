import React, { useState } from "react";
import MedicationList from "./medicine";
import Invoice from "./invoice";
import AppBars from "../NavigationBar/Appbar";
// import { Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./context";
const Main = () => {
  const [medications] = useState([
    {
      id: 1,
      name: "Ibuprofen",
      price: 10,
      des: "Often used for headaches, muscle aches, and reducing inflammation.",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/4/301540770/DX/RS/AD/7034457/ibuprofen-tablets-500x500.jpg",
    },
    {
      id: 2,
      name: "Paracetamol",
      price: 15,
      des: "Commonly used for various types of pain and to reduce fever.",
      img: "https://c8.alamy.com/comp/EBY4RR/pack-of-tesco-paracetamol-500mg-tablets-isolated-on-white-background-EBY4RR.jpg",
    },
    {
      id: 3,
      name: "Amoxicillin",
      price: 15,
      des: "Used to treat bacterial infections such as respiratory infections, ear infections, and urinary tract infections",
      img: "https://c8.alamy.com/comp/M57JR5/amoxicillin-capsules-antibiotics-pills-M57JR5.jpg",
    },
    {
      id: 4,
      name: "Lisinopril",
      price: 10,
      des: "Angiotensin-converting enzyme (ACE) inhibitor. Used to treat high blood pressure and heart failure",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/6/UU/UI/KM/153525401/lisinopril-tablets-i-p--500x500.jpg",
    },
    {
      id: 5,
      name: "Omeprazole",
      price: 15,
      des: "Reduces stomach acid and is used to treat conditions such as heartburn, acid reflux, and ulcers",
      img: "https://c8.alamy.com/comp/BBHRBP/omeprazole-capsules-omeprazole-BBHRBP.jpg",
    },
    {
      id: 6,
      name: "Atorvastatin",
      price: 15,
      des: " Statin. Used to lower cholesterol levels and reduce the risk of cardiovascular events",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/OL/HD/OY/65052997/atosep-10-atorvastatin-calcium-10mg.jpg",
    },
    {
      id: 7,
      name: "Metformin",
      price: 10,
      des: " Antidiabetic. Used to manage type 2 diabetes by improving insulin sensitivity",
      img: "https://c8.alamy.com/comp/CXYJGT/metformin-tablets-CXYJGT.jpg",
    },
    {
      id: 8,
      name: "Aspirin",
      price: 15,
      des: "Used for pain relief, reducing inflammation, and preventing blood clots",
      img: "https://c8.alamy.com/comp/B8A7K7/bayer-aspirin-tablets-B8A7K7.jpg",
    },
    {
      id: 9,
      name: "Cetirizine",
      price: 15,
      des: " Used to relieve allergy symptoms such as sneezing, itching, and runny nose",
      img: "https://c8.alamy.com/comp/H2NNCR/stock-photo-of-a-box-of-cetirizine-hydrochoride-antihistamine-tablets-H2NNCR.jpg",
    },
    {
      id: 10,
      name: "Albuterol",
      price: 15,
      des: "Used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD)",
      img: "https://www.shutterstock.com/shutterstock/videos/1097447721/thumb/1.jpg?ip=x480",
    },
    {
      id: 11,
      name: "Ciprofloxacin",
      price: 15,
      des: "Often prescribed for bacterial infections, including urinary tract infections and respiratory infections",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/3/295262183/QQ/HD/BH/70053924/ciprofloxacin-tablets.png",
    },
    {
      id: 12,
      name: "Metoprolol",
      price: 15,
      des: "Used to treat conditions like high blood pressure, angina, and heart failure",
      img: "https://www.shutterstock.com/image-photo/metoprolol-beta-blocker-hypertension-heart-260nw-2313652731.jpg",
    },
    // Add more medications
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (medication) => {
    setCart([...cart, medication]);
  };
  // const navigate = useNavigate();
  const handleDelete = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div>
        <AppBars cartCount={cart.length} />
        <MedicationList medications={medications} addToCart={addToCart} />
        <Invoice cart={cart} handleDelete={handleDelete} />
        {/* <Link to="pay">
          <Button
            variant="contained"
            onClick={() => {
              navigate("/payment");
            }}
          >
            SUBMIT
          </Button> */}
        {/* </Link> */}
      </div>
    </CartContext.Provider>
  );
};

export default Main;
