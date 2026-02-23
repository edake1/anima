import { NextResponse } from 'next/server';

const METACULUS_BASE = 'https://www.metaculus.com/api2';

// Key AGI-related question IDs on Metaculus
const TRACKED_QUESTIONS = [
  5121,  // Date of AGI
  3479,  // Transformative AI by 2036
  4118,  // Weak AGI by 2030
  6321,  // AI beats humans at all tasks by 2030
];

export interface MetaculusQuestion {
  id: number;
  title: string;
  url: string;
  communityPrediction: number | null;
  resolution: number | null;
  closeTime: string;
  publishTime: string;
  numForecasters: number;
  description: string;
}

async function fetchQuestion(id: number): Promise<MetaculusQuestion | null> {
  try {
    const res = await fetch(`${METACULUS_BASE}/questions/${id}/`, {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!res.ok) return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await res.json();
    const cp = data?.community_prediction?.full?.q2 ?? null;
    return {
      id: data.id,
      title: data.title,
      url: `https://www.metaculus.com/questions/${data.id}/`,
      communityPrediction: cp !== null ? Math.round(cp * 100) : null,
      resolution: data.resolution,
      closeTime: data.close_time,
      publishTime: data.publish_time,
      numForecasters: data.number_of_forecasters ?? 0,
      description: data.description ?? '',
    };
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');

  if (idParam) {
    const id = parseInt(idParam, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid question ID' }, { status: 400 });
    }
    const question = await fetchQuestion(id);
    if (!question) {
      return NextResponse.json({ error: 'Question not found' }, { status: 404 });
    }
    return NextResponse.json(question);
  }

  // Return all tracked questions
  const results = await Promise.all(TRACKED_QUESTIONS.map(fetchQuestion));
  const valid = results.filter((q): q is MetaculusQuestion => q !== null);

  return NextResponse.json({
    questions: valid,
    fetchedAt: new Date().toISOString(),
  });
}
