import React from "react";

const Services = () => {
  const ceQueVousObtenez = [
    `<b>3 pages </b> <samll>(max)</samll> `,
    ` <b> Nom de domaine </b> & hébergement 1 an`,
    `Un code optimisé pour le référencement <b>SEO</b>`,
    `Une livraison <b>rapide</b> en seulement <b>4 jours </b>`,
  ];

  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mes Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Pack Standard
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Mettez en valeur votre portfolio ou votre vitrine commerciale en
                créant des sites web personnalisés grâce à notre service
                exclusif.({" "}
                <b>
                  BarberShop website, Photographer webiste, Portfolio, Marketing
                  website...
                </b>
                )
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Ce que vous obtenez :
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {ceQueVousObtenez.map((x, index) => {
                  return (
                    <li key={index} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: x }} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Payement x 2
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      2500
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      DH
                    </span>
                  </p>
                  <a
                    href="https://wa.me/212652701485/?text=Bonjour,je un site web"
                    className="mt-10 block w-full rounded-md  px-3 py-2 text-center text-sm font-semibold hover:text-black text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{
                      background:
                        "linear-gradient(#25d366,#25d366) no-repeat,radial-gradient(#25d366 60%,transparent 0)",
                    }}
                  >
                    Contacte
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
