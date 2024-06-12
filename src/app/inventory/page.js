'use server'

import FetchInventoryItems from "../actions/inventory/fetchInventoryItems";
import InventorySection from "../container/inventory/inventory_page/inventory_section";

const Inventory = async () => {

    const data = await FetchInventoryItems();

    return (
        <InventorySection items={data}/>
    )
}

export default Inventory;