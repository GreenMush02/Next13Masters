import { getProductsList } from "@/api/products";
import { ProductItemList } from "@/ui/organisms/ProductItemList";

export default async function ProductsPage() {
	const products = await getProductsList();
	return (
			<ProductItemList products={products} />
	);
}
