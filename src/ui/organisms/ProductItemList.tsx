import { ProductItem } from "@/ui/molecules/ProductItem";
import type { ProductItemType } from "@/utils/types";

export const ProductItemList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-testid="products-list">
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
