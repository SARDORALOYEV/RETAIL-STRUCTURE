import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Guarantee the bundled vault (/STRUCTURE) is included in the serverless
  // function output on Vercel, since it's read at runtime via a dynamic path.
  outputFileTracingIncludes: {
    "/api/agents": ["./STRUCTURE/**/*"],
    "/": ["./STRUCTURE/**/*"],
  },
};

export default nextConfig;
