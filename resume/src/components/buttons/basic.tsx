export function BasicButton({ label }: { label: string }) {
    return (
        <button className="border-2 border-black hover:bg-rose-500 text-black font-bold py-2 px-4 rounded">{label}</button>
    );
}