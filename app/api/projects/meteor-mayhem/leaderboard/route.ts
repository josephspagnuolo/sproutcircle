import { badWords } from '@/bad-words';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import {
  RegExpMatcher,
  englishDataset,
  englishRecommendedTransformers,
} from 'obscenity';

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

export async function GET(req: Request) {
  const leaderboard = await prisma.leaderboardEntry.findMany();

  leaderboard.sort((a, b) => b.score - a.score).slice(0, 5);

  const filtered = leaderboard.map((entry) => {
    if (matcher.hasMatch(entry.name)) {
      entry.name = "Anonymous";
      return entry;
    } else if (badWords.some(v => entry.name.includes(v))) {
      entry.name = "Anonymous";
      return entry;
    } else {
      return entry;
    }
  });

  const response = NextResponse.json(filtered);

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
}

export async function POST(req: Request) {
  try {
    const { name, score } = await req.json();

    const filteredName = matcher.hasMatch(name) ? "Anonymous" : (badWords.some(v => name.includes(v)) ? "Anonymous" : name);

    const leaderboardEntry = await prisma.leaderboardEntry.create({
      data: {
        name: filteredName,
        score,
      },
    });

    const response = NextResponse.json({ leaderboardEntry });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (error) {
    const response = NextResponse.json({ error });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
