const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {




  miniapp: {
    version: "1",
    name: "Isik University Campus",
    subtitle: "Campus Access & Payments",
    description: "Isik University öğrencileri için kampüs geçiş ve ödeme mini uygulaması.",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "education",
    tags: ["education", "campus", "payments"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Işık Üniversitesi için onchain giriş ve ödemeler.",
    ogTitle: "Isik University Campus",
    ogDescription: "Işık Üniversitesi kampüs giriş ve ödeme mini uygulaması.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
