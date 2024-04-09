import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["tailwindui.com", "images.unsplash.com", "ui-avatars.com"],
    },
};

export default withNextIntl(nextConfig);
