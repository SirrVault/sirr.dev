import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    sha: process.env.BUILD_SHA ?? 'unknown',
    version: process.env.BUILD_VERSION ?? 'unknown',
    name: 'sirr.dev',
  })
}
