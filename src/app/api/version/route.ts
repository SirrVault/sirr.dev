import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    sha: process.env.BUILD_SHA ?? 'unknown',
    name: 'sirr.dev',
    version: process.env.npm_package_version ?? '0.1.0',
  })
}
