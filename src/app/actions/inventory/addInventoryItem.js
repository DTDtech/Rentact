'use server'

import database from "@/app/config/db_config";
import { redirect } from 'next/navigation'

const AddInventoryItem = async (formData) => {
    try {
        const rawFormData = {
            name: formData.get('name'),
            price: Number(formData.get('price')),
            quantity: formData.get('quantity'),
        }

        const item = {
            "name": rawFormData.name,
            "price": rawFormData.price,
            "quantity": rawFormData.quantity
        }

       await database.collection("inventory").insertOne(item);
    }
    catch(error) {
        console.log(error);
    }
    redirect('/inventory');
}

export default AddInventoryItem;