import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import WebCam from "./WebCam";

export function CarouselDemo() {
    const colors = [
        '#FFFFFF', '#000000', '#808080', // whites, blacks, grays
        '#FF0000', '#FFFF00', '#008000', // reds, yellows, greens
        '#0000FF', '#4B0082', '#800080', // blues, indigos, purples
        '#FFC0CB', '#FF69B4', '#FF1493', // pinks
        '#F5F5F5', '#DCDCDC', '#D3D3D3', // light grays
        '#C0C0C0', '#A9A9A9', '#808080', // more grays
        '#FFCCCC', '#FF9999', '#FF6666', // light reds
        '#FF3333', '#FF0000', '#CC0000', // more reds
        '#FFCC99', '#FF9966', '#FF6633', // light oranges
        '#FF3300', '#FF6600', '#CC6600', // more oranges
        '#FFFF99', '#FFFF66', '#FFCC66', // light yellows
        '#FF9933', '#FFCC33', '#CC9933', // more yellows
        '#CCFF99', '#CCFF66', '#99CC66', // light greens
        '#66CC33', '#99FF33', '#66FF33', // more greens
        '#99CCFF', '#6699FF', '#3366FF', // light blues
        '#3399FF', '#3333FF', '#0000FF', // more blues
        '#CC99FF', '#9966FF', '#6633FF', // light indigos
        '#6600FF', '#9900FF', '#6600CC', // more indigos
        '#FF99FF', '#FF66FF', '#FF33FF', // light purples
        '#CC66CC', '#CC33CC', '#993399', // more purples
      ];

      const skinToneColors = {
    "Cornflower Blue": "#6495ed",
    "Peach": "#ffe5b4",
    "Lavender": "#e6e6fa",
    "Mint Green": "#98ff98",
    "Salmon": "#fa8072",
    "Coral": "#ff6b6b",
    "Turquoise": "#40e0d0",
    "Blush Pink": "#ffc0cb",
    "Olive Green": "#808000",
    "Slate Gray": "#708090",
    "Lilac": "#c8a2c8",
    "Beige": "#f5f5dc",
    "Teal": "#008080",
    "Terracotta": "#e2725b",
    "Periwinkle": "#ccccff",
    "Goldenrod": "#daa520",
    "Mauve": "#e0b0ff",
    "Khaki": "#c3b091",
    "Rose Gold": "#b76e79",
    "Dusty Rose": "#dca3a3",
    "Mustard Yellow": "#ffdb58",
    "Cinnamon": "#d2691e",
    "Sage Green": "#bce6b0",
    "Chocolate Brown": "#d2691e",
    "Cyan": "#00ffff",
    "Apricot": "#ffb347",
    "Steel Blue": "#4682b4",
    "Pistachio": "#93c572",
    "Copper": "#b87333",
    "Indigo": "#4b0082",
    "Terracotta": "#e2725b",
    "Moss Green": "#8a9a5b",
    "Powder Blue": "#b0e0e6",
    "Sienna": "#a0522d",
    "Lemon Yellow": "#fff44f",
    "Dove Gray": "#696969",
    "Rust": "#b7410e",
    "Sky Blue": "#87ceeb",
    "Sand": "#c2b280",
    "Berry": "#990066",
    "Mint": "#3eb489",
    "Bronze": "#cd7f32",
    "Champagne": "#fad6a5",
    "Charcoal Gray": "#36454f",
    "Pumpkin": "#ff7518",
    "Pearl": "#f0eae0",
    "Plum": "#dda0dd",
    "Hazelnut": "#b38b6d",
    "Denim Blue": "#1560bd",
    "Caramel": "#ffddaf",
};

const skinToneColorsArray = Object.entries(skinToneColors).map(([name, code]) => ({
  name,
  code
}));


  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {skinToneColorsArray.map((color, index) => (
          <CarouselItem key={color}>
            <div className="p-1 rounded-lg">
              <Card>
                <CardContent className="rounded-lg flex flex-col aspect-square items-center justify-center p-10" style={{ backgroundColor: color.code }}>
                  <WebCam />
                   <div><span className="text-xl font-semibold">{color.name}</span></div>
                </CardContent>

              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
