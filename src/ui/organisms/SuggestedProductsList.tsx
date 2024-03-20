import { getProductsList } from "@/api/products";
import { ProductItemList } from "@/ui/organisms/ProductItemList";

export const SuggestedProductsList = async () => {
	const products = await getProductsList(1);
	return <ProductItemList products={products.slice(-4)} />;
};
