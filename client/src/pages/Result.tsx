import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useParams } from "react-router-dom";
import Success from "../components/Banner copy";

export default function Result() {
  const { txId } = useParams();
  console.log(txId);
  return (
    <>
      <Success />
    </>
  );
}
