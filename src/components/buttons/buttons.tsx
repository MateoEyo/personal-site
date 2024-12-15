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
          {image && <img className="btn-image" src={image} alt={imageAlt} height={24} width={24} />}
          {label}
        </div>
      </div>
    </button>
  );
}

export interface ToggleProps {
  isOn: boolean;
  onChange: (isOn: boolean) => void;
}

export function Toggle(props: ToggleProps) {
  const { isOn, onChange } = props;

  return (
    <input
      type="checkbox"
      className="toggle"
      checked={isOn}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
}

export interface MobileMenuProps {
  isMobile: boolean;
  onChange: (isMobile: boolean) => void;
}