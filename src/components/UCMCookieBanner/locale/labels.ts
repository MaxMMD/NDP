export interface UCMLabels {
  invalidKeyWarning?: string;
  noKeyWarning?: string;
  generalNotice?: string;
  generalNoticeHeadline?: string;
  changeSettings?: string;
  closeSettings?: string;
  popinClose?: string;
  popinTitle?: string;
  allCookieTitle?: string;
  allCookieLabel?: string;
  validateForm?: string;
  cancelForm?: string;
  topText?: string;
  middleText?: string;
  bottomText?: string;
  bannerYes?: string;

  // Pushpop
  pushpopMessage?: string;
  pushpopQuestion?: string;
  pushpopMore?: string;
  pushpopYes?: string;
  pushpopBottom?: string;

  // defaults cookies
  functionalCookieTitle?: string;
  functionalCookieLabel?: string;
  analyticsCookieTitle?: string;
  analyticsCookieLabel?: string;
  advertisingCookieTitle?: string;
  advertisingCookieLabel?: string;
}

export const DEFAULT_LABELS: UCMLabels = {
  invalidKeyWarning: "You must update the location recovery key for ipinfodb.",
  noKeyWarning: "You must update the location recovery key for ipinfodb.",
  generalNotice:
    "We use cookies to provide you with a more personal experience on our site",
  generalNoticeHeadline: "",
  changeSettings: "Change preferences",
  closeSettings: "",
  popinClose: "Close",
  popinTitle: "Cookie settings",
  allCookieTitle: "All cookies.",
  allCookieLabel: "Activates all cookies on the site, without restriction.",
  validateForm: "Accept",
  cancelForm: "Return",
  topText: "",
  middleText: "",
  bottomText: "",
  bannerYes: "Accept all",
  pushpopMessage:
    "Cookies are small text files that your computer downloads each time you visit a website. When you return to websites, or go to websites using the same cookies, they recognize these cookies and therefore your computer or mobile device. ",
  pushpopQuestion: "Do you accept these cookies?",
  pushpopMore: "Learn more",
  pushpopYes: "Ok",
  pushpopBottom:
    "You can change your preferences at any time by going to the' Cookie settings 'section at the bottom of the page.",
  functionalCookieTitle: "Cookies required",
  functionalCookieLabel:
    "We use cookies necessary for the operation of the site.",
  analyticsCookieTitle: "Analytics and functional",
  analyticsCookieLabel: "We measure site traffic via analysis cookies.",
  advertisingCookieTitle: "Advertising",
  advertisingCookieLabel:
    "Cookies linked to the advertisements chosen according to your habits and interests."
};

export const LOCALISED_LABELS: { [key: string]: UCMLabels } = {
  en: {},
  it: {
    generalNotice:
      "Utilizziamo i cookie per offrirti un’esperienza più personale sul nostro sito",
    changeSettings: "Cambia preferenze",
    popinClose: "Chiudi",
    popinTitle: "Impostazioni cookie",
    validateForm: "Accetta",
    bannerYes: "Accetta tutti i cookie",
    functionalCookieTitle: "Cookie necessari",
    functionalCookieLabel:
      "Utilizziamo i cookie necessari per il funzionamento del sito",
    analyticsCookieTitle: "Analisi e funzioni",
    analyticsCookieLabel:
      "Misuriamo il traffico nel sito mediante i cookie analitici",
    advertisingCookieTitle: "Pubblicità",
    advertisingCookieLabel:
      "I cookie collegati agli annunci pubblicitari sono scelti in base alle tue abitudini e ai tuoi interessi"
  },
  de: {
    generalNotice:
      "Wir verwenden Cookies, um Ihnen eine persönlichere Erfahrung auf unserer Website zu ermöglichen.",
    changeSettings: "Einstellungen ändern",
    popinClose: "Schließen",
    popinTitle: "Cookie-Einstellungen",
    validateForm: "Akzeptieren",
    bannerYes: "Alle akzeptieren",
    functionalCookieTitle: "Erforderliche Cookies",
    functionalCookieLabel:
      "Wir verwenden Cookies, die für den Betrieb der Website erforderlich sind ",
    analyticsCookieTitle: "Analytisch und funktional",
    analyticsCookieLabel:
      "Wir messen den Website-Verkehr über Analyse-Cookies ",
    advertisingCookieTitle: "Werbung",
    advertisingCookieLabel:
      "Die Cookies sind mit ausgewählten Werbeanzeigen gemäß Ihren Gewohnheiten und Interessen verknüpft"
  },
  es: {
    generalNotice:
      "Utilizamos cookies para proporcionarle una experiencia más personalizada en nuestra página web",
    changeSettings: "Cambiar preferencias",
    popinClose: "Cerrar",
    popinTitle: "Configuración de cookies",
    validateForm: "Aceptar",
    bannerYes: "Aceptar todo",
    functionalCookieTitle: "Se requieren cookies",
    functionalCookieLabel:
      "Utilizamos solo las cookies necesarias para el funcionamiento correcto de la página web",
    analyticsCookieTitle: "Datos analíticos y funcionales",
    analyticsCookieLabel:
      "Medimos el tráfico de la página web a través de cookies de análisis",
    advertisingCookieTitle: "Publicidad",
    advertisingCookieLabel:
      "Cookies vinculadas a los anuncios elegidos de acuerdo con sus hábitos e intereses"
  },
  fr: {
    generalNotice:
      "Nous utilisons des cookies afin de vous offrir une expérience personnalisée sur notre site",
    changeSettings: "Modifier les préférences",
    popinClose: "Fermer",
    popinTitle: "Réglage des cookies",
    validateForm: "Accepter",
    bannerYes: "Tout accepter",
    functionalCookieTitle: "Cookies nécessaires",
    functionalCookieLabel:
      "Nous utilisons des cookies nécessaires au bon fonctionnement du site",
    analyticsCookieTitle: "Analyse et fonctionnalité",
    analyticsCookieLabel:
      "Nous mesurons le trafic du site au moyen de cookies d’analyse des données",
    advertisingCookieTitle: "Publicité",
    advertisingCookieLabel:
      "Cookies liés aux publicités correspondant à vos préférences et à vos habitudes d’utilisation"
  },
  nl: {
    generalNotice:
      "We gebruiken cookies om u een persoonlijkere ervaring op onze website te bieden",
    changeSettings: "Voorkeuren wijzigen",
    popinClose: "Sluiten",
    popinTitle: "Cookies-instellingen",
    validateForm: "Accepteren",
    bannerYes: "Alles accepteren",
    functionalCookieTitle: "Cookies vereist",
    functionalCookieLabel:
      "We gebruiken cookies die nodig zijn voor de werking van de website",
    analyticsCookieTitle: "Analytisch en functioneel",
    analyticsCookieLabel: "Websiteverkeer meten we via analytische cookies",
    advertisingCookieTitle: "Advertenties",
    advertisingCookieLabel:
      "Cookies gekoppeld aan de advertenties die zijn gekozen op basis van uw gewoonten en interesses"
  }
};

export default function cookieLabels(locale?: string) {
  if (locale && LOCALISED_LABELS[locale]) {
    return { ...DEFAULT_LABELS, ...LOCALISED_LABELS[locale] };
  }
  // eslint-disable-next-line no-console
  console.log(
    "CookieBanner::cookieLabels - localised labels not found, defaulting to `en`"
  );
  return DEFAULT_LABELS;
}
