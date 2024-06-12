'use server'

import database from "@/app/config/db_config";

const FetchInventoryItems = async () => {
    try {

        if (database.collection("inventory").countDocuments({}) === 0) {
            console.log("No documents found");
        }

        const inventory = await database.collection("inventory").find().toArray();
        for (const i in inventory) {
            inventory[i]._id = inventory[i]._id.toHexString();
        }
        return inventory;
    }
    catch (error) {
        console.log(error);
    }
}

export default FetchInventoryItems;