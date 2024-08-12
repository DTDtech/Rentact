'use server'

import database from "@/app/config/db_config";

const FetchTotalOrdersByMonth = async () => {
    try {
        const totalOrdersByMonth = await database.collection("orders").aggregate([
            {
                $set: { rent_date: { $toDate: "$rent_date" } }
            },
            {
                $match: { status: "completed" }
            },
            {
                $group: {
                    _id: { $month: "$rent_date" },
                    totalOrders: { $sum: 1 },
                    month: {$first: { $dateToString: { format: "%B", date: "$rent_date", timezone: "+07:00" } }}
                }
            }
        ]).toArray()
        return totalOrdersByMonth;
    }
    catch (error) {
        console.log(error);
    }
}

export default FetchTotalOrdersByMonth;