'use server'

import Image from "next/image";
import FetchOrders from "./actions/orders/fetchOrders";
import OrdersSection from "./container/order/orders_page/orders_section";

const Home = async () => {

  const data = await FetchOrders();

  return (
    <OrdersSection orders={data} />
  )
}

export default Home;
