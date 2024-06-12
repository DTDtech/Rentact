'use server'

import FetchInventoryItems from "../actions/inventory/fetchInventoryItems";
import InventorySection from "../container/inventory/inventory_section";
import { Suspense } from "react";
import InventoryPageLoadingSkeleton from "./loading";
import AddItemButton from "../container/inventory/add_item_button";

const Inventory = async () => {

    const data = await FetchInventoryItems();

    return (
        <>
            <AddItemButton />
            <Suspense fallback={<InventoryPageLoadingSkeleton />} >
                <InventorySection items={data} />
            </Suspense>
        </>
    )
}

export default Inventory;