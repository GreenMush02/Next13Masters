import { getProductsList } from "@/api/products";
import { ProductItemList } from "@/ui/organisms/ProductItemList";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	await sleep(5000);
	return <ProductItemList products={products.slice(-4)} />;
};
