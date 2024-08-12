'use server'

import database from "@/app/config/db_config";
import { redirect } from 'next/navigation'

const CreateOrder = async (formData) => {
    try {
        const rawFormData = {
            name: formData.get('name'),
            itemsForRent: formData.get('itemsForRent'),
            rent_date: new Date(formData.get('rent_date')),
            return_date: new Date(formData.get('return_date')),
            paid: Number(formData.get('paid')),
            debt: Number(formData.get('debt')),
            status: formData.get('status')
        }

        const order = {
            "name": rawFormData.name,
            "itemsForRent": JSON.parse(rawFormData.itemsForRent),
            "rent_date": rawFormData.rent_date,
            "return_date": rawFormData.return_date,
            "paid": rawFormData.paid,
            "debt": rawFormData.debt,
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