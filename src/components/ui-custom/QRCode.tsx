
import { useEffect, useRef } from "react";
import QRCodeLib from "qrcode";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  bgColor?: string;
  fgColor?: string;
  level?: "L" | "M" | "Q" | "H";
  includeMargin?: boolean;
}

export function QRCode({
  value,
  size = 200,
  className = "",
  bgColor = "#FFFFFF",
  fgColor = "#000000",
  level = "M",
  includeMargin = false,
}: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: includeMargin ? 4 : 0,
          color: {
            dark: fgColor,
            light: bgColor,
          },
          errorCorrectionLevel: level,
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error);
        }
      );
    }
  }, [value, size, bgColor, fgColor, level, includeMargin]);

  return (
    <div className={`inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        className="rounded-md"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export function QRCodeDownload({
  value,
  fileName = "qrcode",
  size = 200,
  bgColor = "#FFFFFF",
  fgColor = "#000000",
  level = "M",
  includeMargin = false,
  children,
}: QRCodeProps & { fileName?: string; children: React.ReactNode }) {
  const downloadQRCode = () => {
    const canvas = document.createElement("canvas");
    
    QRCodeLib.toCanvas(
      canvas,
      value,
      {
        width: size,
        margin: includeMargin ? 4 : 0,
        color: {
          dark: fgColor,
          light: bgColor,
        },
        errorCorrectionLevel: level,
      },
      (error) => {
        if (error) return console.error("Error generating QR code:", error);
        
        // Convert canvas to data URL
        const dataUrl = canvas.toDataURL("image/png");
        
        // Create download link
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${fileName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    );
  };

  return (
    <div onClick={downloadQRCode} className="cursor-pointer">
      {children}
    </div>
  );
}
