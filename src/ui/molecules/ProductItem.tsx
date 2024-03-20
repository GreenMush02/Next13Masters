import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import type { ProductItemType } from "@/utils/types";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</>
	);
};
