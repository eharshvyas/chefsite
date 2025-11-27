import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chef Surendra Rawat | ACF Chef & Himalayan Culinary Artist",
    short_name: "Chef Surendra",
    description:
      "Award-winning ACF Chicago chef specializing in authentic Himalayan Uttarakhand cuisine, pastry arts, and fine dining Indian gastronomy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0066FF", // Himalayan Blue (brand color)
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
