'use server'

import { Suspense } from "react";
import TotalOrdersByMonthChart from "../container/dashboard/total_orders_by_month_chart";
import * as d3 from "d3";
import FetchTotalOrdersByMonth from "../actions/dashboard/fetchTotalOrdersByMonth";

const Dashboard = async () => {

    const data = await FetchTotalOrdersByMonth();

    return (
        <>
            <div className="flex flex-row">
                <div className="m-2 justify-evenly">
                    <h1 className="text-center text-neutral text-xl">Số lượng đơn thuê theo tháng</h1>
                    <TotalOrdersByMonthChart data={data} />
                </div>
            </div>
        </>
    );
}

export default Dashboard;