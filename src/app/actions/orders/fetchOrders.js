'use server'

import database from "@/app/config/db_config";
import { unstable_noStore as noStore } from 'next/cache'

const FetchOrders = async () => {
    noStore();
    try {
        if (database.collection("orders").countDocuments({}) === 0) {
            console.log("No documents found");
        }

        const orders = await database.collection("orders").find().toArray();
        for (const i in orders) {
            orders[i]._id = orders[i]._id.toHexString();
        }
        return orders;
    }
    catch (error) {
        console.log(error);
    }
}

export default FetchOrders;