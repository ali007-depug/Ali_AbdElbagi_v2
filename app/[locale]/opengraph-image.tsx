import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: { locale: "ar" | "en-US" } };

export default function OpenGraphImage({ params }: Props) {
  const isArabic = params.locale === "ar";

  // Reshape Arabic text (letters only, no word reversal)

  const title = "Ali AbdElbagi";

  const subtitle = "Frontend Developer - React | Next.js";

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
          background: "linear-gradient(135deg, #020617, #1e1b4b)",
          color: "white",
          textAlign: "center",
          direction: isArabic ? "rtl" : "ltr",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            fontFamily: "Arabic",
            whiteSpace: "pre",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 36,
            opacity: 0.85,
            marginTop: 24,
            whiteSpace: "pre",
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
