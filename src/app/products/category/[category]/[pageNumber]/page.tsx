export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	return params.category === "t-shirts" ? [{ pageNumber: "1" }, { pageNumber: "2" }] : [];
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			Produkty z kategorii {params.category}, strona {params.pageNumber}
		</h1>
	);
}
