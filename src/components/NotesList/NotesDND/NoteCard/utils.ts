function hexToRgb(hex: string): [number, number, number] {
  let formattedHex = hex.replace(/^#/, "");

  if (formattedHex.length === 3) {
    formattedHex = formattedHex
      .split("")
      .map((h) => h + h)
      .join("");
  }

  const bigint = parseInt(formattedHex, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function getLuminance([r, g, b]: [number, number, number]) {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function getTextColorForBackground(backgroundColor: string) {
  const rgb = hexToRgb(backgroundColor);
  const luminance = getLuminance(rgb);
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
