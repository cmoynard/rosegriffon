export default function SoutenirPage() {
  return (
    <div className="flex flex-col mb-8">
      <div className="container mx-auto py-12">
        <div className="flex flex-col gap-8 px-4">
          <h2 className="text-5xl font-bold">Comment nous soutenir ?</h2>

          <p className="text-lg">
            Rose Griffon est une association à but non lucratif qui
            s&apos;efforce de créer une communauté dynamique autour
            d&apos;Inazuma Eleven. Votre soutien est essentiel pour nous
            permettre de continuer à développer nos projets et à organiser des
            événements de qualité.
          </p>

          {/* Blocs de dons côte à côte */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Don unique via PayPal */}
            <div className="bg-white text-black p-8 rounded-lg shadow-lg border-l-4 border-blue-700 hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full justify-between">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4 text-blue-700">
                    Don unique via PayPal
                  </h3>
                  <p className="text-lg">
                    Vous souhaitez faire un don ponctuel pour soutenir nos
                    actions ? PayPal vous permet de contribuer facilement et en
                    toute sécurité, quel que soit le montant.
                  </p>
                </div>
                <a
                  href="https://www.paypal.com/paypalme/rosegriffon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0070BA] hover:bg-[#005ea6] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.395.395 0 0 1-.058-.363c.061-.246.13-.521.207-.825.077-.304.376-1.454.376-1.454.043-.171.132-.329.256-.43a.662.662 0 0 1 .448-.167h1.115c2.243 0 3.83-.957 4.323-3.116a3.238 3.238 0 0 0 .167-1.116 3.39 3.39 0 0 0-.168-1.116c-.056-.171-.139-.324-.249-.452a2.2 2.2 0 0 0-.309-.337 2.335 2.335 0 0 1 .325-.027h.971c.582 0 1.125.041 1.607.129Z" />
                    <path d="M18.088 6.148c.271.26.492.57.653.929.172.372.272.784.295 1.204.025.42-.005.85-.092 1.288-.207.984-.583 1.821-1.125 2.491-.542.67-1.214 1.182-2.016 1.524-.802.342-1.714.513-2.734.513h-3.38a.799.799 0 0 0-.445.139.86.86 0 0 0-.307.373L7.766 20.1c-.043.171-.132.329-.256.429a.658.658 0 0 1-.448.167H4.306a.394.394 0 0 1-.331-.15.394.394 0 0 1-.058-.363l2.18-13.88a.697.697 0 0 1 .248-.429.655.655 0 0 1 .447-.166h6.898c.582 0 1.125.043 1.607.129.495.086.93.235 1.302.428.371.193.69.428.956.704.271.26.492.57.653.929.172.372.272.784.295 1.204.025.42-.005.85-.092 1.288" />
                  </svg>
                  Faire un don
                </a>
              </div>
            </div>

            {/* Don récurrent via Patreon */}
            <div className="bg-white text-black p-8 rounded-lg shadow-lg border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <div className="flex flex-col h-full justify-between">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-4 text-red-600">
                    Don récurrent via Patreon
                  </h3>
                  <p className="text-lg">
                    Devenez un soutien régulier de Rose Griffon et bénéficiez
                    d&apos;avantages exclusifs ! Votre contribution mensuelle
                    nous aide à planifier nos actions sur le long terme et à
                    développer des projets ambitieux.
                  </p>
                </div>
                <a
                  href="https://www.patreon.com/rosegriffon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F96854] hover:bg-[#e05b49] text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
                  </svg>
                  Devenir Patron
                </a>
              </div>
            </div>
          </div>

          {/* Bloc de transparence mis en avant */}
          <div className="bg-white text-black p-8 rounded-lg shadow-lg border-l-4 border-amber-500">
            <h2 className="text-5xl font-bold my-4 pb-2 inline-block">
              Où va votre soutien ?
            </h2>

            <p className="text-lg mb-4">
              Rose Griffon s&apos;engage à utiliser vos dons de manière
              transparente. Un bilan financier est présenté chaque année lors de
              notre assemblée générale et partagé avec nos membres. Pour toute
              question concernant l&apos;utilisation des fonds, n&apos;hésitez
              pas à nous contacter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-black p-8 rounded-lg shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Événements communautaires
                </h3>
                <p className="text-lg">
                  Vos dons nous permettent d&apos;organiser des tournois, des
                  rencontres et des événements pour rassembler la communauté
                  Inazuma Eleven.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-lg shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Projets médiatiques</h3>
                <p className="text-lg">
                  Nous investissons dans du matériel et des ressources pour
                  améliorer la qualité de nos contenus sur Azalée et nos autres
                  plateformes.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-lg shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Développement e-sport
                </h3>
                <p className="text-lg">
                  Votre soutien aide à structurer la scène compétitive
                  d&apos;Inazuma Eleven à travers notre branche Achilléa et à
                  organiser des compétitions de qualité.
                </p>
              </div>

              <div className="bg-white text-black p-8 rounded-lg shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">
                  Infrastructure technique
                </h3>
                <p className="text-lg">
                  Nous maintenons des serveurs, des sites web et des outils pour
                  offrir la meilleure expérience possible à notre communauté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
