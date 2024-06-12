'use server'

import database from "@/app/config/db_config";
import { redirect } from 'next/navigation'

const CreateOrder = async (formData) => {
    try {
        const rawFormData = {
            itemsForRent: formData.get('itemsForRent'),
            rent_date: new Date(formData.get('rent_date')),
            return_date: new Date(formData.get('return_date')),
            status: formData.get('status')
        }

        const order = {
            "itemsForRent": JSON.parse(rawFormData.itemsForRent),
            "rent_date": rawFormData.rent_date,
            "return_date": rawFormData.return_date,
            "status": rawFormData.status
        }

        await database.collection("orders").insertOne(order);
    }
    catch (error) {
        console.log(error);
    }
    redirect('/');
}

export default CreateOrder;