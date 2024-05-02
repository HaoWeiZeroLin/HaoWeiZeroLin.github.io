// Try GitHub setting
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/nextjs-web",
//   output: "export",  // <=== enables static exports
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// original
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
};
