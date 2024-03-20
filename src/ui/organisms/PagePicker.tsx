"use client"

import { usePathname } from "next/navigation";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PagePicker = ({ pages }: { pages: number }) => {
	const pathname = usePathname();

	const generatePageNumbers = (pages: number) => {
		const components = [];

		for (let i = 1; i <= pages; i++) {
			console.log(i);
			components.push(
				<li key={i}>
					<ActiveLink href={`/products/${i}`}>{i}</ActiveLink>
				</li>,
			);
		}

		return components;
	};
	return (
		<nav>
			<ul className="mt-2 flex justify-center space-x-4">{generatePageNumbers(pages)}</ul>;
		</nav>
	);
};
