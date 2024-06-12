'use server'

import database from "@/app/config/db_config";
import { ObjectId } from 'mongodb'
import { redirect } from "next/navigation";

const UpdateOrderStatus = async (orderId, orderStatus) => {

    try {
        const filter = { _id: ObjectId.createFromHexString(orderId) };

        let updateDoc;

        if (orderStatus === "completed") {
            updateDoc = {
                $set: {
                    status: "incomplete"
                }
            }
        }
        else {
            updateDoc = {
                $set: {
                    status: "completed"
                }
            }
        }

        await database.collection("orders").updateOne(filter, updateDoc);
    }
    catch (error) {
        console.log(error);
    }
    redirect('/');
}

export default UpdateOrderStatus;