'use server'

import FetchOrders from "./actions/orders/fetchOrders";
import OrdersSection from "./container/order/orders_section";
import CreateOrderButton from "./container/order/create_order_button";
import { Suspense } from "react";
import OrderPageLoadingSkeleton from "./loading";

const Home = async () => {

	const data = await FetchOrders();

	return (
		<>
			<CreateOrderButton />
			<Suspense fallback={<OrderPageLoadingSkeleton />}>
				<OrdersSection orders={data} />
			</Suspense>
		</>
	)
}

export default Home;
