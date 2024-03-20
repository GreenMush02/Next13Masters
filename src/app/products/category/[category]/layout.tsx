export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }, { category: "boots" }];
};

export default function CategoryProductLayout({ children }: { children: React.ReactNode }) {
	return children;
}
