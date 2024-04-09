// NextJS
import createMiddleware from "next-intl/middleware";
export { default } from "next-auth/middleware";

export const middleware = createMiddleware({
    locales: ["es", "en", "fr"],
    defaultLocale: "es",
});

export const config = {
    matcher: ["/", "/(es|en|fr)/:path*"],
};
