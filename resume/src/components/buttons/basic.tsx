export interface BasicButtonProps {
    label: string;
    image?: string;
    imageAlt?: string;
}

export function BasicButton({ label, image, imageAlt }: BasicButtonProps) {
    return (
        <button className="flex gap-2 border-2 border-black hover:bg-rose-500 text-black font-bold py-2 px-4 rounded min-w-36 justify-center">
            {image && (
                <img src={image} alt={imageAlt} height={24} width={24} />
            )}
            {label}
        </button>
    );
}