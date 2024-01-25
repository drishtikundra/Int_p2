import React from "react";
import Foodlist from "./components/Foodlist";
import "./App.css";


export default function App() {
  const fooditem=[
    "pizza",
    "burger",
    "fries",
    "waffle",
  ];
 
  return <Foodlist item={fooditem}/>;
}