import { BasicButton } from './buttons';

export function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/mateo-matic/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BasicButton
        label="LinkedIn"
        image="linkedin-logo.png"
        imageAlt="LinkedIn logo"
      />
    </a>
  );
}

export default LinkedIn;
