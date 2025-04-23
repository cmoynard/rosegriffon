import React, { useEffect, useState } from "react";
import Image from "next/image";

type DiscordMember = {
  id: string;
  username: string;
  avatar?: string;
  avatar_url?: string;
  status: "online" | "idle" | "dnd" | "offline";
  game?: { name: string };
};

type DiscordChannel = {
  id: string;
  name: string;
  position: number;
  type: "text" | "voice" | "category";
};

type DiscordData = {
  name: string;
  icon: string | null;
  banner: string | null;
  presence_count: number;
  member_count: number;
  instant_invite: string;
  members: DiscordMember[];
};

type DiscordBlockProps = {
  serverId: string;
  children: React.ReactNode;
  isWidgetLeft?: boolean;
};

export default function DiscordBlock({
  serverId,
  children,
  isWidgetLeft = false,
}: DiscordBlockProps) {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Récupération des données Discord depuis l'API
  useEffect(() => {
    const fetchDiscordData = async () => {
      setLoading(true);
      setError(false);

      try {
        // Tenter de récupérer les données depuis l'API
        const response = await fetch(`/api/discord-widget`);

        if (response.ok) {
          const data = await response.json();
          setDiscordData(data);
        } else {
          throw new Error("Impossible de récupérer les données Discord");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données Discord:",
          error
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordData();
  }, [serverId]);

  // Composant pour afficher le statut
  const StatusIndicator = ({ status }: { status: string }) => {
    const statusColors = {
      online: "bg-green-500",
      idle: "bg-yellow-500",
      dnd: "bg-red-500",
      offline: "bg-gray-500",
    };

    return (
      <div
        className={`w-3 h-3 rounded-full ${
          statusColors[status as keyof typeof statusColors]
        } absolute -bottom-0.5 -right-0.5 border-2 border-[#36393f]`}
      ></div>
    );
  };

  // Composant pour afficher un canal avec icône
  const ChannelItem = ({ channel }: { channel: DiscordChannel }) => {
    return (
      <div className="px-2 py-1 hover:bg-[#42464D] rounded cursor-pointer text-gray-300 hover:text-white flex items-center group">
        {channel.type === "text" ? (
          <span className="mr-1 text-gray-400 group-hover:text-gray-200">
            #
          </span>
        ) : (
          <svg
            className="w-4 h-4 mr-1 text-gray-400 group-hover:text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm7 9v2a7 7 0 0 1-14 0v-2h2v2a5 5 0 0 0 10 0v-2h2z"></path>
          </svg>
        )}
        <span className="text-sm font-medium">{channel.name}</span>
      </div>
    );
  };

  // Le widget Discord personnalisé
  const CustomDiscordWidget = () => (
    <div className="bg-[#36393f] text-white h-full w-full flex flex-col border border-[#202225] overflow-hidden shadow-lg">
      {/* CSS pour scrollbar personnalisée */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2e3136;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #202225;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #18191c;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #202225 #2e3136;
        }
      `}</style>

      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white mb-4"></div>
          <p className="text-sm text-gray-300">
            Chargement des données Discord...
          </p>
        </div>
      ) : error || !discordData ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <svg
            className="w-12 h-12 text-gray-400 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <h3 className="text-xl font-bold mb-2">Données indisponibles</h3>
          <p className="text-gray-400 text-sm mb-4">
            Les informations du serveur Discord sont inaccessibles.
          </p>
          <p className="text-gray-400 text-xs">
            Assurez-vous que le token bot Discord est correctement configuré.
          </p>
        </div>
      ) : (
        <>
          <div className="bg-[#2f3136] p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2 relative overflow-hidden">
                {discordData.icon ? (
                  <img
                    src={discordData.icon}
                    alt={discordData.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-8 h-8 text-[#5865F2]"
                    viewBox="0 0 71 55"
                    fill="currentColor"
                  >
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                  </svg>
                )}
              </div>
              <h3 className="font-bold text-lg">{discordData.name}</h3>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-300 mr-2">
                <span className="inline-block bg-green-500 w-2 h-2 rounded-full mr-1"></span>
                <span>{discordData.presence_count} en ligne</span>
                <span className="mx-1">•</span>
                <span>{discordData.member_count} membres</span>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Membres */}
            <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
              <h4 className="uppercase text-xs font-bold text-gray-400 mb-1">
                Quelques membres en ligne
              </h4>

              {discordData.members && discordData.members.length > 0 ? (
                <div className="space-y-1">
                  {discordData.members
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 50)
                    .map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center px-2 py-1 hover:bg-[#42464D] rounded cursor-pointer group"
                      >
                        <div className="w-8 h-8 mr-2 relative">
                          {member.avatar_url ? (
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img
                                src={member.avatar_url}
                                alt={member.username}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center`}
                            >
                              <span className="text-white text-xs font-bold">
                                {member.username.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                          <StatusIndicator status={member.status || "online"} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium truncate group-hover:text-white">
                            {member.username}
                          </div>
                          {member.game && (
                            <div className="text-xs text-gray-400 truncate">
                              Joue à {member.game.name}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-4 text-gray-400 text-sm">
                  Aucun membre en ligne pour le moment
                </div>
              )}
            </div>
          </div>

          {/* Footer avec bouton */}
          <div className="bg-[#2f3136] flex justify-center gap-4 p-3">
            <a
              href={discordData.instant_invite}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium text-sm px-4 py-2 rounded-md transition-colors flex justify-center gap-2 w-full"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Rejoindre le Discord
            </a>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="flex w-full h-[400px]">
      {isWidgetLeft ? (
        <>
          <div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
            <CustomDiscordWidget />
          </div>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-r-3xl shadow-lg">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 h-full bg-white p-8 flex items-center rounded-l-3xl shadow-lg">
            {children}
          </div>
          <div className="w-1/2 h-full rounded-r-3xl overflow-hidden">
            <CustomDiscordWidget />
          </div>
        </>
      )}
    </div>
  );
}
