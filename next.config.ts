import type { NextConfig } from "next";
import createMDX from '@next/mdx' 

const nextConfig: NextConfig = {
  /* config options here */
  // turbopack: {
  //   rules: {
  //     '*.mdx': {
  //       loaders: ['@mdx-js/loader'],
  //       as: "*.js"
  //     }
  //   }
  // },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  // extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);
