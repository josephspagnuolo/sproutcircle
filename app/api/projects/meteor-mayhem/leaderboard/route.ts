import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const leaderboard = [
    { id: 1, name: "Joseph", score: 2900 },
    { id: 2, name: "Bryan", score: 2400 },
    { id: 3, name: "Alex", score: 2300 },
    { id: 4, name: "Michael", score: 1800 },
    { id: 5, name: "Sarah", score: 2500 },
    { id: 6, name: "Jessica", score: 1900 },
    { id: 7, name: "Daniel", score: 2200 },
    { id: 8, name: "David", score: 1700 },
    { id: 9, name: "Emily", score: 2000 },
    { id: 10, name: "Sophia", score: 1600 },
    { id: 11, name: "Liam", score: 2400 },
    { id: 12, name: "Mason", score: 2100 },
    { id: 13, name: "Oliver", score: 2500 },
    { id: 14, name: "Lucas", score: 2300 },
    { id: 15, name: "Ethan", score: 1800 },
    { id: 16, name: "Ava", score: 1900 },
    { id: 17, name: "Isabella", score: 2200 },
    { id: 18, name: "Mia", score: 1700 },
    { id: 19, name: "James", score: 2000 },
    { id: 20, name: "William", score: 1600 },
    { id: 21, name: "Ella", score: 2400 },
    { id: 22, name: "Logan", score: 2100 },
    { id: 23, name: "Charlotte", score: 2500 },
    { id: 24, name: "Amelia", score: 2300 },
    { id: 25, name: "Harper", score: 1800 },
    { id: 26, name: "Evelyn", score: 1900 },
    { id: 27, name: "Abigail", score: 2200 },
    { id: 28, name: "Benjamin", score: 1700 },
    { id: 29, name: "Henry", score: 2000 },
    { id: 30, name: "Sebastian", score: 1600 },
  ];

  leaderboard.sort((a, b) => b.score - a.score);

  const response = NextResponse.json(leaderboard);

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
