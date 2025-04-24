/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_API_URL = process.env.GITHUB_API_URL;

  if (!GITHUB_API_URL) {
    return NextResponse.json(
      { error: 'API URL not configured.' },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch releases. Status: ${res.status}`);
    }

    const releases = await res.json();
    return NextResponse.json(releases);
  } catch (err: any) {
    console.error('GitHub fetch error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
