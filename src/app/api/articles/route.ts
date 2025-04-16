import { NextResponse } from 'next/server';
import articlesData from '@/app/data/articles.json';

export async function GET() {
  return NextResponse.json(articlesData); // This returns the articles data as JSON
}
