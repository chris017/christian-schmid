/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
      },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        config.externals.push("pino-pretty", "lokijs", "encoding");
        return config;
    },
}
