import { execFileSync } from 'child_process'
import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const buildSha = process.env.BUILD_SHA || (() => {
  try { return execFileSync('git', ['rev-parse', '--short', 'HEAD']).toString().trim() }
  catch { return 'unknown' }
})()

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/**/*': ['./src/app/**/*.mdx'],
  },
  env: {
    BUILD_SHA: buildSha,
  },
}

export default withSearch(withMDX(nextConfig))
