import { ColorPalette } from "../components/ColorPalette";

export default function HomePage({ currentUserName, palette, onChange }) {
  return (
    <>
      <ColorPalette key={palette.id} palette={palette} onChange={onChange} />
    </>
  );
}
