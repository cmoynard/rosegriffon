import { NextResponse } from "next/server";

export async function GET() {
  try {
    // trop chère et complexe a mettre en place
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

    // TODO: récupérer les données réelles

    return NextResponse.json(mockData);
  } catch (error) {
    console.error("Erreur lors de la récupération des données TikTok:", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les données TikTok", success: false },
      { status: 500 }
    );
  }
}
