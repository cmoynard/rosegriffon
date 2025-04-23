import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Note: TikTok n'offre pas d'API publique officielle facile à utiliser
    // Cette implémentation est un exemple qui devra être adaptée selon les besoins réels
    // et les possibilités d'intégration TikTok

    // Options possibles:
    // 1. Utiliser TikTok Business API (nécessite une autorisation)
    // 2. Utiliser un service tiers comme RapidAPI qui offre des endpoints TikTok
    // 3. Scraper les données TikTok (attention aux limitations légales)

    // Exemple fictif pour la démonstration
    const mockData = {
      username: "rosegriffon",
      latest_video: {
        id: "7123456789012345678",
        description:
          "Découvrez les coulisses de notre dernier événement Inazuma Eleven !",
        cover_image: "https://example.com/tiktok-cover-image.jpg",
        video_url:
          "https://www.tiktok.com/@rosegriffon/video/7123456789012345678",
        created_at: "2023-10-15T14:30:00Z",
        views: 12500,
        likes: 2340,
        comments: 156,
        shares: 87,
        embed_html:
          '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@rosegriffon/video/7123456789012345678" data-video-id="7123456789012345678"></blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
      },
      success: true,
    };

    // En production, remplacer par une vraie implémentation d'API TikTok
    // const response = await fetch('https://api.example.com/tiktok/user/rosegriffon/latest', {
    //   headers: {
    //     'Authorization': `Bearer ${process.env.TIKTOK_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   next: { revalidate: 3600 }, // Mise en cache pour 1 heure
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Impossible de récupérer les données TikTok');
    // }
    //
    // const data = await response.json();

    return NextResponse.json(mockData);
  } catch (error) {
    console.error("Erreur lors de la récupération des données TikTok:", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les données TikTok", success: false },
      { status: 500 }
    );
  }
}
