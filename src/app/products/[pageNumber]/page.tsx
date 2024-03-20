import { getProductsList } from "@/api/products";
import { ProductItemList } from "@/ui/organisms/ProductItemList";

export default async function ProductsPage({ params }: { params: { pageNumber: number } }) {
	const products = await getProductsList(params.pageNumber);
	return <ProductItemList products={products} />;
}
