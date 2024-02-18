import { ProductItemList } from "@/ui/organisms/ProductItemList";
import type { ProductItemType } from "@/utils/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Product 1",
		category: "Accesories",
		price: 100,
		coverImage: {
			src: "/koszula.jpg",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Clothes",
		price: 200,
		coverImage: {
			src: "/koszula.jpg",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Shoes",
		price: 300,
		coverImage: {
			src: "/koszula.jpg",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Accesories",
		price: 400,
		coverImage: {
			src: "/koszula.jpg",
			alt: "Product 4",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductItemList products={products} />
		</section>
	);
}
