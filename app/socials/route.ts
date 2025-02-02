import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    linkedin: 'https://www.linkedin.com/in/gabriel-freitas-yamamoto/',
    instagram: 'https://www.instagram.com/gabrielyotoo',
    github: 'https://github.com/gabrielyotoo',
    medium: 'https://gabrielyotoo.medium.com',
    npm: 'https://www.npmjs.com/~gabrielyotoo',
  });
}
