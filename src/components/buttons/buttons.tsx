export interface BasicButtonProps {
  label: string;
  image?: string;
  imageAlt?: string;
}

export function BasicButton({ label, image, imageAlt }: BasicButtonProps) {
  return (
    <button className="btn-background-slide">
      <div className="btn-background-slide--pink btn-background-slide-bg">
        <div className="flex gap-2 justify-center">
          {image && <img src={image} alt={imageAlt} height={24} width={24} />}
          {label}
        </div>
      </div>
    </button>
  );
}

export function Toggle() {
  return (
    <input type="checkbox" className="toggle" />
  );
}