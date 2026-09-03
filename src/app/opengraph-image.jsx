import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export const runtime = "nodejs";
export const alt = "Sparkclub — Eventos y experiencias corporativas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og (resvg) no soporta WebP en <img>, así que se convierte a PNG en memoria.
async function webpToPngDataUri(relativePath) {
  const webpBuffer = fs.readFileSync(path.join(process.cwd(), relativePath));
  const pngBuffer = await sharp(webpBuffer).png().toBuffer();
  return `data:image/png;base64,${pngBuffer.toString("base64")}`;
}

export default async function OpengraphImage() {
  const textureSrc = await webpToPngDataUri(
    "public/images/Textures/SparkLogo_Texture.webp"
  );
  const logoSrc = await webpToPngDataUri(
    "public/images/Logos/Logo_SparkClub_Original.webp"
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#151515",
          position: "relative",
        }}
      >
        <img
          src={textureSrc}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={logoSrc}
          alt="Sparkclub"
          width={360}
          style={{ position: "relative" }}
        />
        <p
          style={{
            position: "relative",
            marginTop: 32,
            fontSize: 32,
            color: "#FFFFFF",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Eventos y experiencias corporativas en minutos
        </p>
      </div>
    ),
    { ...size }
  );
}
