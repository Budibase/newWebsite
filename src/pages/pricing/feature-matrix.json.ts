import featureMatrixData from "./_components/feature-matrix.json";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(featureMatrixData, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
