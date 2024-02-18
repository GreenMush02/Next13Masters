export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="bgs aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};
