/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "plus.unsplash.com" },
            { protocol: "https", hostname: "fonts.gstatic.com" },
            { protocol: "https", hostname: "ui.shadcn.com" },
            { protocol: "https", hostname: "images.pexels.com" },
            { protocol: "https", hostname: "kaif-ui.vercel.app" },
            { protocol: "https", hostname: "github.com" },
        ],
    },
};

export default nextConfig;
