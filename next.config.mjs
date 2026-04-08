/** @type {import('next').NextConfig} */
const repository = "WEBHub"
const isGithubActions = process.env.GITHUB_ACTIONS === "true"

const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? `/${repository}` : '',
  assetPrefix: isGithubActions ? `/${repository}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
