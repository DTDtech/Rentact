'use server'

import CreateOrderForm from "../container/order/create_order_form";
import FetchInventoryItems from "../actions/inventory/fetchInventoryItems";

const CreateOrderPage = async () => {

    let data = await FetchInventoryItems();

    data = data.map(item => ({name: item.name}));

    return (
        <CreateOrderForm items={data}/>
    )
}

export default CreateOrderPage;