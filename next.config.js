/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "img.icons8.com",
      "raw.githubusercontent.com",
      "i.imgur.com",
      "img.freepik.com",
      "media.geeksforgeeks.org",
      "icons8.com",
      "ngrx.io",
      "rxjs.dev",
      "lesscss.org",
      "material.angular.io",
      "pbs.twimg.com",
      "yt3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
      "upload.wikimedia.org",
      "www.svgrepo.com"
    ],
  },
};

module.exports = nextConfig;
