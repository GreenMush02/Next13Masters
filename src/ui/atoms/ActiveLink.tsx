"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx("text-blue-400 hover:text-blue-600", { underline: isActive })}
		>
			{children}
		</Link>
	);
};
