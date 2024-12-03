export interface BasicButtonProps {
    label: string;
    image?: string;
    imageAlt?: string;
}

export function BasicButton({ label, image, imageAlt }: BasicButtonProps) {
    return (
        <button className="flex gap-2 border-2 min-w-36 justify-center py-2 px-4 border-black hover:bg-white text-black font-bold rounded transition-all duration-300">
            {image && (
                <img src={image} alt={imageAlt} height={24} width={24} />
            )}
            {label}
        </button>
    );
}