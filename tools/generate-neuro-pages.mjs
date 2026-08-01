import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const today = "2026-08-01";
const stripeUrl = "https://buy.stripe.com/00w8wPg20aWQcMu39Q8k80c";

const pages = [
  {
    slug: "neuroatypiques",
    eyebrow: "Café & neuroatypies",
    title: "Torrégral pour les cerveaux intenses",
    seoTitle: "Café pour neuroatypiques - Torrégral, focus et énergie stable",
    meta:
      "Un guide pour les profils neuroatypiques qui cherchent un café plus stable: HPI, TDAH, hypersensibles, overthinkers, créateurs et profils intenses.",
    intro:
      "Certains cerveaux ne manquent pas d'énergie. Ils manquent d'un cadre suffisamment stable pour transformer cette intensité en action claire.",
    audience:
      "Cette page s'adresse aux profils qui pensent vite, ressentent fort, changent souvent de piste ou ont besoin d'un rituel simple pour canaliser leur attention.",
    promise:
      "Torrégral n'est pas une solution médicale. C'est un café premium pensé comme un rituel d'énergie plus posée, pour les personnes qui veulent avancer sans ajouter de la dispersion à leur dispersion.",
    bullets: ["moins d'emballement mental", "un rituel d'entrée dans l'action", "une énergie plus stable", "un café qui reste un vrai café"],
    toc: ["Pourquoi les profils intenses réagissent différemment", "Le problème du café trop brutal", "Le rituel Torrégral", "Choisir votre page"],
    sections: [
      {
        id: "profils",
        h2: "Les cerveaux intenses n'ont pas tous le même besoin.",
        p: [
          "HPI, TDAH, hypersensibilité, autisme, overthinking, multipotentialité: ces mots ne décrivent pas la même réalité. Mais beaucoup de personnes concernées partagent une expérience commune: une intensité mentale difficile à orienter.",
          "Le sujet n'est pas seulement d'avoir plus d'énergie. Le sujet est de mieux choisir où elle va."
        ]
      },
      {
        id: "cafe",
        h2: "Quand le café accélère trop, il peut amplifier le bruit.",
        p: [
          "Le café classique peut aider à démarrer. Mais chez certains profils, il peut aussi rendre l'attention plus nerveuse: trop d'idées, trop d'impulsions, trop de micro-départs.",
          "Torrégral conserve le goût du café tout en apportant une approche plus complète de la cerise de café. L'objectif marketing est clair: moins de café automatique, plus de rituel conscient."
        ]
      },
      {
        id: "rituel",
        h2: "Un café pour passer de l'intensité au geste.",
        p: [
          "Préparer Torrégral, choisir une tâche, fermer les sollicitations, travailler en bloc court, puis noter ce qui a été livré. La force est dans la répétition.",
          "La transformation vendue n'est pas magique: c'est le passage d'un cerveau saturé d'idées à une action plus lisible."
        ]
      }
    ],
    related: ["hpi", "tdh", "overthinker", "hypersensible"]
  },
  {
    slug: "hpi",
    eyebrow: "Café pour HPI",
    title: "Le café pour HPI qui veulent sortir de la suranalyse",
    seoTitle: "Café pour HPI - Torrégral pour clarté, focus et action",
    meta:
      "Torrégral pour profils HPI: un café premium pour canaliser l'intensité mentale, soutenir une énergie stable et passer de la pensée à l'action.",
    intro:
      "Le profil HPI peut produire beaucoup d'idées, de connexions et de scénarios. Le vrai défi n'est pas de penser plus, mais de matérialiser mieux.",
    audience: "Pour les personnes HPI qui veulent transformer la vitesse mentale en décisions, projets terminés et gestes concrets.",
    promise:
      "Torrégral agit comme un rituel de cadrage: une tasse, une priorité, un bloc d'action. Pas pour réduire l'intelligence, mais pour lui donner une direction.",
    bullets: ["moins de suranalyse", "plus de décision", "une énergie claire", "un rituel de finition"],
    toc: ["HPI et suranalyse", "Pourquoi le café classique peut disperser", "Torrégral comme rituel", "Protocole action"],
    sections: [
      {
        id: "suranalyse",
        h2: "Le HPI n'a pas besoin de plus d'idées.",
        p: [
          "Beaucoup de profils HPI vivent avec un cerveau qui modélise vite: conséquences, possibilités, détails, risques, variantes. Cette richesse devient puissante quand elle se met au service d'une action claire.",
          "Mais quand l'énergie monte sans cadre, l'intelligence peut rester dans la boucle: analyser, améliorer, recommencer, repousser."
        ]
      },
      {
        id: "cafe",
        h2: "Le café trop stimulant peut nourrir la boucle.",
        p: [
          "Un café très brutal peut donner l'impression d'une grande productivité mentale tout en augmentant le volume intérieur. Plus de vitesse ne signifie pas toujours plus de livraison.",
          "Torrégral vend une autre expérience: conserver l'intensité du café, mais l'associer à un rituel plus stable, plus sobre, plus orienté."
        ]
      },
      {
        id: "protocole",
        h2: "Le protocole HPI: choisir avant de boire.",
        p: [
          "Avant la tasse, notez une seule question: qu'est-ce qui doit exister à la fin de ce bloc ? Ensuite seulement, préparez Torrégral.",
          "La tasse devient un déclencheur: arrêter de cartographier le possible, commencer à construire le réel."
        ]
      }
    ],
    related: ["overthinker", "multipotentiel", "cafe-focus", "ship"]
  },
  {
    slug: "tdh",
    eyebrow: "Café pour TDAH",
    title: "Un café pour TDAH orienté focus, pas agitation",
    seoTitle: "Café pour TDAH - Torrégral, énergie stable et rituel focus",
    meta:
      "Café pour TDAH: comprendre comment Torrégral peut devenir un rituel d'action pour les profils qui cherchent plus de focus, d'ordre et de stabilité.",
    intro:
      "Quand l'attention part vite dans plusieurs directions, chercher simplement plus de stimulation peut devenir contre-productif.",
    audience:
      "Pour les personnes concernées par le TDAH ou une attention très fluctuante, qui veulent un rituel café plus posé pour entrer dans une tâche.",
    promise:
      "Torrégral ne traite pas le TDAH. Il propose un cadre: café, intention, bloc court, livraison concrète.",
    bullets: ["départ plus clair", "moins de dispersion", "bloc de travail court", "rituel répétable"],
    toc: ["Attention fluctuante", "Stimulation vs direction", "Rituel Torrégral", "Cadre de travail"],
    sections: [
      {
        id: "attention",
        h2: "Le problème n'est pas toujours l'énergie. C'est la direction.",
        p: [
          "Beaucoup de personnes avec une attention fluctuante savent démarrer fort. Le problème arrive souvent après: une notification, une idée secondaire, une envie urgente de changer de piste.",
          "Le bon café ne devrait pas ajouter du bruit au bruit. Il devrait s'intégrer à une routine simple."
        ]
      },
      {
        id: "stimulation",
        h2: "Plus de stimulation ne veut pas dire plus de focus.",
        p: [
          "Un café classique trop intense peut donner un départ rapide, mais aussi nourrir l'agitation mentale ou l'impulsivité de tâche.",
          "Torrégral se positionne comme un café plus complet, associé à une énergie plus stable et à une logique de rituel."
        ]
      },
      {
        id: "cadre",
        h2: "Le protocole TDAH: court, visible, terminé.",
        p: [
          "Écrivez une action qui se termine en 25 à 45 minutes. Préparez Torrégral. Posez le téléphone loin. Travaillez jusqu'à un résultat visible.",
          "La promesse n'est pas de vous changer. C'est de vous aider à créer un contexte où votre attention a moins d'occasions de s'éparpiller."
        ]
      }
    ],
    related: ["cafe-focus", "cafe-sans-crash", "overthinker", "ship"]
  },
  {
    slug: "trouble-autistique",
    eyebrow: "Café & autisme",
    title: "Un café plus lisible pour profils autistiques",
    seoTitle: "Café pour trouble autistique - Torrégral et rituel sensoriel stable",
    meta:
      "Café et trouble autistique: une page pour comprendre l'intérêt d'un rituel café plus prévisible, sensoriel et stable avec Torrégral.",
    intro:
      "Pour beaucoup de profils autistiques, la qualité d'une expérience tient à sa lisibilité: goût, intensité, contexte, répétition.",
    audience:
      "Pour les personnes autistes ou proches du spectre qui veulent un rituel café plus cadré, sans promesse médicale.",
    promise:
      "Torrégral propose une expérience café premium, répétable et structurée, pour celles et ceux qui aiment savoir ce qu'ils consomment et pourquoi.",
    bullets: ["rituel prévisible", "goût café familier", "cadre stable", "lecture claire du produit"],
    toc: ["Lisibilité sensorielle", "Rituel et prévisibilité", "Pourquoi Torrégral", "Mode d'usage"],
    sections: [
      {
        id: "sensoriel",
        h2: "Une expérience café doit rester lisible.",
        p: [
          "Une boisson fonctionnelle compliquée, trop parfumée ou trop chargée peut devenir difficile à intégrer. Torrégral garde une base claire: le café.",
          "L'intérêt est de proposer une expérience plus complète sans transformer le rituel en cocktail illisible."
        ]
      },
      {
        id: "rituel",
        h2: "La répétition peut devenir un support.",
        p: [
          "Même tasse, même moment, même quantité, même tâche. Pour certains profils, cette répétition n'est pas une contrainte: c'est une façon de réduire la friction.",
          "Torrégral peut s'inscrire dans cette logique: une boisson stable, un contexte clair, une transition vers le travail ou le calme."
        ]
      },
      {
        id: "usage",
        h2: "Commencer bas, observer, ajuster.",
        p: [
          "La sensibilité au café varie fortement. La bonne approche consiste à commencer avec une petite quantité, observer son ressenti, puis ajuster.",
          "Le produit n'est pas présenté comme une réponse médicale, mais comme un rituel café plus conscient pour profils qui recherchent plus de maîtrise sur leur environnement."
        ]
      }
    ],
    related: ["hypersensible", "cafe-sans-crash", "cafe-energie-stable", "neuroatypiques"]
  },
  {
    slug: "hypersensible",
    eyebrow: "Café pour hypersensibles",
    title: "Un café pour hypersensibles qui veulent une énergie plus douce",
    seoTitle: "Café pour hypersensible - Torrégral, énergie stable et rituel doux",
    meta:
      "Torrégral pour personnes hypersensibles: un café premium pensé pour une expérience plus posée, plus stable et plus consciente.",
    intro:
      "Quand on ressent fort, un café trop brutal peut vite devenir inconfortable. Le sujet est de trouver une énergie qui accompagne au lieu de bousculer.",
    audience:
      "Pour les personnes hypersensibles qui aiment le café, mais veulent une relation moins nerveuse à l'énergie.",
    promise:
      "Torrégral conserve le goût du café tout en mettant l'accent sur la stabilité, le rituel et le respect du ressenti.",
    bullets: ["énergie plus agréable", "moins de brutalité", "rituel sensoriel", "café premium"],
    toc: ["Hypersensibilité et café", "Énergie douce", "Rituel", "Conseils d'usage"],
    sections: [
      {
        id: "sensibilite",
        h2: "L'hypersensible ne cherche pas forcément moins d'énergie.",
        p: [
          "Il cherche souvent une énergie mieux dosée. Trop de stimulation peut devenir du stress, de la tension ou une saturation sensorielle.",
          "Torrégral s'adresse à cette nuance: continuer à aimer le café sans accepter automatiquement l'effet trop abrupt."
        ]
      },
      {
        id: "douceur",
        h2: "Une tasse plus posée.",
        p: [
          "Le marketing de Torrégral repose sur l'idée d'une énergie plus stable, plus durable, plus agréable.",
          "Ce positionnement parle naturellement aux personnes qui ne veulent pas être poussées, mais accompagnées."
        ]
      },
      {
        id: "usage",
        h2: "Rendre le rituel calme.",
        p: [
          "Buvez lentement, dans un contexte clair. Évitez d'empiler Torrégral avec d'autres stimulants. Observez votre seuil.",
          "Le bon café devient un signal de présence, pas une injonction à accélérer."
        ]
      }
    ],
    related: ["trouble-autistique", "cafe-energie-stable", "cafe-sans-crash", "neuroatypiques"]
  },
  {
    slug: "overthinker",
    eyebrow: "Café pour overthinker",
    title: "Le café pour overthinker qui veulent enfin shipper",
    seoTitle: "Café pour overthinker - Torrégral pour passer de la pensée à l'action",
    meta:
      "Café pour overthinker: Torrégral comme rituel pour transformer les idées, scénarios et hésitations en actions concrètes.",
    intro:
      "L'overthinker ne manque pas d'analyse. Il manque souvent d'un seuil clair où la pensée devient action.",
    audience:
      "Pour ceux qui empilent les idées, les onglets, les notes et les plans, mais veulent livrer plus souvent.",
    promise:
      "Torrégral vend une bascule: passer du mental qui tourne au geste qui avance.",
    bullets: ["moins d'hésitation", "plus de passage à l'action", "bloc Ship", "focus concret"],
    toc: ["Overthinking", "Le café qui accélère", "Le rituel Ship", "Livrer plus"],
    sections: [
      {
        id: "overthinking",
        h2: "Penser beaucoup peut devenir une manière d'éviter de livrer.",
        p: [
          "L'overthinking donne parfois l'impression de travailler: on compare, on prépare, on affine. Mais rien ne sort.",
          "Le vrai changement arrive quand le café n'accompagne plus la rumination, mais le passage à l'acte."
        ]
      },
      {
        id: "cafe",
        h2: "Le mauvais café peut accélérer la boucle.",
        p: [
          "Plus de caféine peut rendre la pensée plus rapide, mais pas forcément plus utile.",
          "Torrégral met l'accent sur une énergie plus stable et un rituel volontaire: boire pour commencer, pas pour tourner plus vite."
        ]
      },
      {
        id: "ship",
        h2: "Le protocole: une tasse, une sortie.",
        p: [
          "Avant la tasse, définissez le résultat minimum acceptable. Après la tasse, exécutez sans rouvrir la stratégie.",
          "La phrase clé: assez pensé, maintenant livré."
        ]
      }
    ],
    related: ["hpi", "ship", "cafe-focus", "multipotentiel"]
  },
  {
    slug: "multipotentiel",
    eyebrow: "Café pour multipotentiel",
    title: "Un café pour multipotentiels qui veulent prioriser",
    seoTitle: "Café pour multipotentiel - Torrégral pour focus, tri et projets",
    meta:
      "Torrégral pour multipotentiels: un rituel café pour canaliser plusieurs intérêts, choisir une priorité et avancer sans se disperser.",
    intro:
      "Avoir plusieurs talents est une force. Mais sans rituel de choix, chaque nouveau possible peut voler l'énergie du projet déjà commencé.",
    audience:
      "Pour les profils multipotentiels qui veulent garder leur richesse d'idées sans perdre leur capacité à terminer.",
    promise:
      "Torrégral accompagne un moment de tri: choisir la piste du jour et lui donner un bloc entier.",
    bullets: ["priorité claire", "moins de zapping", "énergie durable", "projet livré"],
    toc: ["Multipotentialité", "Dispersion", "Rituel de tri", "Action"],
    sections: [
      {
        id: "force",
        h2: "Le problème n'est pas d'avoir trop d'intérêts.",
        p: [
          "Le problème est de ne pas donner assez de temps à une piste pour qu'elle produise quelque chose de réel.",
          "Le multipotentiel a besoin d'un système simple: sélectionner, agir, archiver, revenir."
        ]
      },
      {
        id: "zapping",
        h2: "Le café peut nourrir le zapping mental.",
        p: [
          "Quand l'énergie monte vite, chaque idée semble urgente. Le risque: commencer cinq choses, n'en finir aucune.",
          "Torrégral est positionné comme un café de clarté: une énergie plus stable pour choisir et rester."
        ]
      },
      {
        id: "rituel",
        h2: "La tasse devient un filtre.",
        p: [
          "Écrivez trois options. Choisissez-en une. Préparez Torrégral. Travaillez uniquement sur cette piste pendant un bloc.",
          "Le but n'est pas de supprimer la multiplicité. C'est de lui donner une cadence."
        ]
      }
    ],
    related: ["hpi", "overthinker", "cafe-focus", "ship"]
  },
  {
    slug: "dyslexie",
    eyebrow: "Café & dyslexie",
    title: "Un café pour dyslexiques qui veulent un rituel clair",
    seoTitle: "Café pour dyslexie - Torrégral, clarté et rituel de travail",
    meta:
      "Café et dyslexie: une page Torrégral pour les profils qui veulent structurer leur énergie, simplifier le démarrage et travailler par blocs lisibles.",
    intro:
      "La dyslexie n'empêche pas l'intelligence. Elle demande souvent une relation différente au texte, au rythme et à l'organisation.",
    audience:
      "Pour les profils dyslexiques qui veulent un rituel simple pour entrer dans l'écriture, la lecture ou la production.",
    promise:
      "Torrégral ne corrige pas la dyslexie. Il peut devenir le signal d'un bloc de travail plus lisible: court, cadré, concret.",
    bullets: ["démarrage simplifié", "bloc lisible", "moins de surcharge", "rituel stable"],
    toc: ["Dyslexie et énergie", "Surcharge", "Rituel", "Méthode"],
    sections: [
      {
        id: "energie",
        h2: "Quand lire ou écrire demande plus d'énergie.",
        p: [
          "Certaines tâches textuelles peuvent coûter plus cher en attention. Le café ne remplace pas une méthode, mais il peut être intégré à une routine.",
          "L'idée est de réduire la friction d'entrée: savoir quoi faire, combien de temps, et quand s'arrêter."
        ]
      },
      {
        id: "surcharge",
        h2: "Éviter la surcharge inutile.",
        p: [
          "Un café trop agressif peut pousser à aller trop vite, alors que la tâche demande parfois rythme et précision.",
          "Torrégral se place dans une logique plus stable: une énergie moins désordonnée pour accompagner un travail par étapes."
        ]
      },
      {
        id: "methode",
        h2: "Le protocole dyslexie: visible et court.",
        p: [
          "Découpez la tâche en une action observable: lire deux pages, écrire dix lignes, corriger un paragraphe.",
          "La tasse marque le début. Le livrable marque la fin."
        ]
      }
    ],
    related: ["dyspraxie", "cafe-focus", "cafe-energie-stable", "neuroatypiques"]
  },
  {
    slug: "dyspraxie",
    eyebrow: "Café & dyspraxie",
    title: "Un café pour dyspraxiques qui veulent simplifier le passage à l'action",
    seoTitle: "Café pour dyspraxie - Torrégral et rituel d'action clair",
    meta:
      "Café et dyspraxie: Torrégral comme rituel simple pour structurer l'énergie, réduire la friction et avancer par gestes clairs.",
    intro:
      "Quand l'organisation du geste ou de l'action demande plus d'effort, le rituel doit être simple, répétable et non envahissant.",
    audience:
      "Pour les profils dyspraxiques qui cherchent un cadre de démarrage plus clair, sans promesse médicale.",
    promise:
      "Torrégral peut devenir un repère: une tasse, une action, un environnement préparé.",
    bullets: ["cadre simple", "action unique", "moins de friction", "rituel stable"],
    toc: ["Dyspraxie et friction", "Préparer l'environnement", "Torrégral", "Méthode"],
    sections: [
      {
        id: "friction",
        h2: "La friction consomme de l'énergie.",
        p: [
          "Quand beaucoup de petites étapes demandent de l'attention, le risque est de s'épuiser avant même d'avoir commencé.",
          "Un rituel efficace réduit le nombre de décisions: même boisson, même espace, même première action."
        ]
      },
      {
        id: "environnement",
        h2: "Le café ne suffit pas. Le contexte compte.",
        p: [
          "Torrégral doit être associé à un espace préparé: bureau dégagé, tâche visible, outils déjà sortis.",
          "La tasse n'est pas une solution miracle. Elle devient un signal d'entrée dans un environnement plus lisible."
        ]
      },
      {
        id: "methode",
        h2: "Un seul geste prioritaire.",
        p: [
          "Choisissez le geste qui débloque la suite. Pas toute la journée. Pas tout le projet. Juste le premier mouvement utile.",
          "Torrégral accompagne cette transition: passer de l'intention au geste."
        ]
      }
    ],
    related: ["dyslexie", "tdh", "cafe-focus", "neuroatypiques"]
  },
  {
    slug: "cerveau-en-ebullition",
    eyebrow: "Café pour cerveau en ébullition",
    title: "Un café pour calmer la dispersion sans éteindre l'intensité",
    seoTitle: "Café pour cerveau en ébullition - Torrégral énergie stable",
    meta:
      "Un café pour cerveau en ébullition: Torrégral aide à ritualiser l'énergie mentale pour viser clarté, stabilité et action.",
    intro:
      "Un cerveau en ébullition peut être une force créative. Mais sans canal, il transforme parfois chaque idée en nouvelle distraction.",
    audience:
      "Pour les personnes qui ont trop d'onglets mentaux ouverts et veulent retrouver une ligne d'action.",
    promise:
      "Torrégral ne cherche pas à rendre l'esprit plat. Il cherche à donner une direction à l'intensité.",
    bullets: ["canaliser", "choisir", "agir", "terminer"],
    toc: ["Ébullition mentale", "Le risque caféine", "Canaliser", "Rituel"],
    sections: [
      {
        id: "ebullition",
        h2: "L'intensité devient utile quand elle a une forme.",
        p: [
          "Quand tout semble important, rien ne devient vraiment prioritaire. Le cerveau saute d'une piste à l'autre.",
          "La première promesse de Torrégral est comportementale: créer un moment où l'on choisit consciemment la direction de son énergie."
        ]
      },
      {
        id: "cafeine",
        h2: "Accélérer n'est pas toujours avancer.",
        p: [
          "Un café brutal peut donner plus de vitesse, mais aussi plus de bruit. Le résultat peut être paradoxal: beaucoup d'activité, peu de production finie.",
          "Torrégral se positionne pour celles et ceux qui veulent une énergie plus régulière."
        ]
      },
      {
        id: "rituel",
        h2: "Canaliser sans se couper de sa puissance.",
        p: [
          "Notez toutes les idées parasites sur une feuille à côté. Choisissez une seule tâche. Lancez le bloc.",
          "Les idées ne sont pas perdues. Elles sont mises en attente pendant que le réel avance."
        ]
      }
    ],
    related: ["overthinker", "hpi", "multipotentiel", "cafe-focus"]
  },
  {
    slug: "profil-atypique",
    eyebrow: "Café pour profil atypique",
    title: "Le café pour profils atypiques qui veulent avancer à leur manière",
    seoTitle: "Café pour profil atypique - Torrégral, focus et énergie stable",
    meta:
      "Café pour profil atypique: Torrégral comme rituel premium pour les personnes qui pensent différemment et veulent une énergie plus stable.",
    intro:
      "Penser différemment peut être une force. Encore faut-il un rituel qui respecte votre fonctionnement au lieu de vous forcer dans un modèle standard.",
    audience:
      "Pour les profils atypiques, intenses, créatifs ou non linéaires qui veulent une façon plus intelligente de boire leur café.",
    promise:
      "Torrégral propose un café plus complet, au service d'une énergie plus claire et d'un rapport plus conscient à l'action.",
    bullets: ["fonctionnement atypique", "café plus complet", "énergie stable", "rituel personnel"],
    toc: ["Profil atypique", "Standard vs rituel", "Torrégral", "Usage"],
    sections: [
      {
        id: "atypique",
        h2: "Un profil atypique n'a pas besoin d'un café standard.",
        p: [
          "Les personnes atypiques ont souvent une relation différente à l'énergie: pics, creux, intensité, hyperfocus, saturation.",
          "Le café peut alors devenir soit un amplificateur de chaos, soit un point d'ancrage."
        ]
      },
      {
        id: "rituel",
        h2: "La différence se joue dans le rituel.",
        p: [
          "Torrégral est intéressant parce qu'il permet de garder le geste du café tout en racontant autre chose: le fruit entier, la stabilité, la clarté, le vivant.",
          "Ce discours parle à ceux qui ne veulent pas simplement consommer plus, mais consommer plus intelligemment."
        ]
      },
      {
        id: "usage",
        h2: "Construire son propre protocole.",
        p: [
          "Certains l'utiliseront pour écrire. D'autres pour travailler, créer, organiser, décider ou entrer dans une session profonde.",
          "L'important est de l'associer à une intention claire."
        ]
      }
    ],
    related: ["neuroatypiques", "hpi", "tdh", "hypersensible"]
  },
  {
    slug: "fatigue-mentale",
    eyebrow: "Café & fatigue mentale",
    title: "Un café pour fatigue mentale quand l'esprit est saturé",
    seoTitle: "Café pour fatigue mentale - Torrégral, clarté et énergie stable",
    meta:
      "Café pour fatigue mentale: Torrégral pour les profils qui veulent une énergie plus stable et un rituel de clarté sans surstimulation.",
    intro:
      "La fatigue mentale n'est pas toujours un manque d'énergie. C'est souvent une saturation: trop d'informations, trop de décisions, trop d'ouvertures.",
    audience:
      "Pour les profils intenses qui veulent relancer leur journée sans ajouter une stimulation désordonnée.",
    promise:
      "Torrégral se positionne comme un café de relance claire: reprendre un bloc, une décision, une tâche.",
    bullets: ["relance douce", "moins de crash", "clarté", "bloc utile"],
    toc: ["Fatigue mentale", "Stimulation", "Relance", "Protocole"],
    sections: [
      {
        id: "fatigue",
        h2: "Quand le cerveau est plein, pousser plus fort n'aide pas toujours.",
        p: [
          "La fatigue mentale ressemble parfois à de la paresse, alors qu'elle vient d'une surcharge cognitive.",
          "Le bon rituel doit réduire le désordre avant d'ajouter de l'énergie."
        ]
      },
      {
        id: "relance",
        h2: "Une tasse pour relancer une seule chose.",
        p: [
          "Torrégral peut devenir le signal d'une reprise: pas toute la journée, pas toute la stratégie, juste un bloc utile.",
          "Cette simplicité est particulièrement précieuse pour les cerveaux qui accumulent rapidement les informations."
        ]
      },
      {
        id: "protocole",
        h2: "Le protocole fatigue mentale.",
        p: [
          "Hydratez-vous, préparez Torrégral, choisissez une tâche courte, coupez les entrées, livrez une version simple.",
          "Cherchez la clarté avant la performance."
        ]
      }
    ],
    related: ["cafe-sans-crash", "cafe-energie-stable", "tdh", "neuroatypiques"]
  },
  {
    slug: "createur-intense",
    eyebrow: "Café pour créateur intense",
    title: "Un café pour créateurs intenses qui veulent finir",
    seoTitle: "Café pour créateur intense - Torrégral, flow et livraison",
    meta:
      "Café pour créateurs intenses: Torrégral comme rituel pour entrer dans le flow, structurer l'énergie et finir plus de projets.",
    intro:
      "Les créateurs intenses ont souvent le départ. Le vrai avantage se construit dans la finition.",
    audience:
      "Pour les créateurs, indépendants, entrepreneurs, auteurs et makers qui veulent transformer l'inspiration en livrables.",
    promise:
      "Torrégral accompagne le passage entre l'élan créatif et le travail profond.",
    bullets: ["flow", "travail profond", "livraison", "rituel créatif"],
    toc: ["Créativité", "Flow", "Finition", "Rituel Ship"],
    sections: [
      {
        id: "creation",
        h2: "L'inspiration ne suffit pas.",
        p: [
          "Avoir une idée peut procurer une énergie immédiate. Mais le marché, lui, ne voit que ce qui est publié, livré, proposé.",
          "Torrégral s'adresse à cette étape: transformer l'élan en forme."
        ]
      },
      {
        id: "flow",
        h2: "Le flow demande une énergie orientée.",
        p: [
          "Le flow n'est pas seulement une grande intensité. C'est une continuité: attention, geste, retour, ajustement.",
          "Torrégral ne promet pas de provoquer cet état. Il peut accompagner les conditions qui le favorisent: rituel, stabilité, intention."
        ]
      },
      {
        id: "ship",
        h2: "Publier devient le vrai rituel.",
        p: [
          "Préparez Torrégral au début d'un bloc de création. Définissez ce qui sortira: un brouillon, une page, une offre, un message, une vidéo.",
          "Le café ne célèbre pas l'idée. Il marque le passage à la livraison."
        ]
      }
    ],
    related: ["ship", "overthinker", "multipotentiel", "cafe-focus"]
  }
];

const navPages = pages.map((page) => page.slug);
const pageBySlug = new Map(pages.map((page) => [page.slug, page]));

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function linkFor(slug) {
  const known = pageBySlug.get(slug);
  if (known) return `../${known.slug}/`;
  return `../${slug}/`;
}

function relatedLabel(slug) {
  const known = pageBySlug.get(slug);
  if (known) return known.title;
  const labels = {
    "cafe-focus": "Café focus",
    "cafe-sans-crash": "Café sans crash",
    "cafe-energie-stable": "Café énergie stable",
    "cafe-et-bdnf": "Café et BDNF",
    ship: "Torrégral Ship"
  };
  return labels[slug] ?? slug;
}

function articleJsonLd(page) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.meta,
    image: "https://www.torregral.com/assets/images/focus-work.jpg",
    author: { "@type": "Organization", name: "Torrégral" },
    publisher: {
      "@type": "Organization",
      name: "Torrégral",
      logo: { "@type": "ImageObject", url: "https://www.torregral.com/assets/images/logo-cafe-integral.png" }
    },
    mainEntityOfPage: `https://www.torregral.com/${page.slug}/`,
    dateModified: today,
    inLanguage: "fr-FR"
  });
}

function faqJsonLd(page) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Torrégral est-il un café pour ${page.eyebrow.replace(/^Café (pour |& )/i, "")} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Torrégral est un café premium pensé pour les profils qui cherchent une énergie plus stable et un rituel de focus. Il ne remplace pas un avis médical et ne traite aucun trouble."
        }
      },
      {
        "@type": "Question",
        name: "Quelle est la différence avec un café classique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Torrégral garde le goût du café, mais s'appuie sur une approche plus complète de la cerise de café et sur une expérience orientée clarté, stabilité et passage à l'action."
        }
      }
    ]
  });
}

function renderPage(page) {
  const toc = page.sections.map((section) => `<a href="#${section.id}">${esc(section.h2)}</a>`).join("");
  const sections = page.sections
    .map(
      (section) => `<section id="${section.id}"><h2>${esc(section.h2)}</h2>${section.p
        .map((paragraph) => `<p>${esc(paragraph)}</p>`)
        .join("")}</section>`
    )
    .join("");

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(page.seoTitle)}</title>
    <meta name="description" content="${esc(page.meta)}" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.meta)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://www.torregral.com/${page.slug}/" />
    <meta property="og:image" content="https://www.torregral.com/assets/images/focus-work.jpg" />
    <meta property="og:site_name" content="Torrégral" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.meta)}" />
    <meta name="twitter:image" content="https://www.torregral.com/assets/images/focus-work.jpg" />
    <link rel="canonical" href="https://www.torregral.com/${page.slug}/" />
    <link rel="icon" type="image/png" href="../assets/images/logo-cafe-integral.png" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body>
    <header class="site-header"><a class="brand" href="../" aria-label="Accueil Torrégral"><img class="brand-mark" src="../assets/images/logo-cafe-integral.png" alt="" width="42" height="42" /><span class="brand-name">Torrégral</span></a><button class="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-nav-toggle><span></span><span></span></button><nav class="main-nav" aria-label="Navigation principale" data-nav><a href="../#difference">La différence</a><a href="../#guides">Guides</a><a href="../ship/">Ship</a><a href="#commander">Commander</a></nav><a class="header-cta" href="${stripeUrl}">Commander</a></header>
    <main>
      <section class="hero article-hero"><div class="hero-copy"><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.title)}</h1><p class="lead">${esc(page.intro)}</p><p class="lead secondary-lead">${esc(page.promise)}</p><div class="hero-actions"><a class="button red" href="${stripeUrl}">Commander Torrégral</a><a class="text-link light-link" href="../ship/">Voir la page Ship</a></div><div class="hero-points">${page.bullets.map((bullet) => `<span>${esc(bullet)}</span>`).join("")}</div></div><figure class="hero-media cinematic-media"><img src="../assets/images/focus-work.jpg" alt="Rituel Torrégral pour profil intense au travail" width="1402" height="1122" fetchpriority="high" decoding="async" /></figure></section>
      <section class="guide-content"><div class="guide-layout"><aside class="guide-toc"><strong>Sommaire</strong>${toc}<a href="#commander">Commander</a></aside><article class="guide-body">
        <section id="intro"><h2>Pourquoi cette page existe.</h2><p>${esc(page.audience)}</p><div class="guide-callout"><p>${esc(page.promise)}</p></div></section>
        ${sections}
        <section id="precision"><h2>Important: ce n'est pas une promesse médicale.</h2><p>Torrégral ne diagnostique, ne prévient et ne traite aucun trouble. La page parle de rituel, d'expérience café, de stabilité ressentie et d'organisation personnelle. Si vous êtes suivi médicalement ou sensible à la caféine, demandez un avis professionnel et ajustez votre consommation.</p></section>
        <div class="source-list"><strong>À lire aussi</strong><ul>${page.related
          .map((slug) => `<li><a href="${linkFor(slug)}">${esc(relatedLabel(slug))}</a></li>`)
          .join("")}</ul></div>
      </article></div></section>
      <section class="offer-section" id="commander"><div class="offer-copy"><p class="eyebrow">Torrégral</p><h2>Le café des esprits éveillés.</h2><p>Pour les cerveaux intenses qui veulent transformer leur énergie mentale en action claire, stable et concrète.</p><a class="button red" href="${stripeUrl}">Commander Torrégral</a></div><figure><img src="../assets/images/paquet-torregal.jpg" alt="Packaging Torrégral noir mat" width="900" height="1024" loading="lazy" decoding="async" /></figure></section>
    </main>
    <footer class="site-footer"><div><strong>Torrégral</strong><span>Le café des idées qui deviennent réelles.</span></div><nav aria-label="Liens secondaires"><a href="../">Accueil</a><a href="../#guides">Guides</a><a href="../ship/">Ship</a><a href="https://cafeintegral.fr">Café Intégral</a></nav></footer>
    <script type="application/ld+json">${articleJsonLd(page)}</script>
    <script type="application/ld+json">${faqJsonLd(page)}</script>
    <script src="../script.js" defer></script>
  </body>
</html>
`;
}

for (const page of pages) {
  const dir = join(root, page.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), renderPage(page));
}

const aliasDir = join(root, "tdah");
mkdirSync(aliasDir, { recursive: true });
writeFileSync(
  join(aliasDir, "index.html"),
  `<!doctype html><html lang="fr"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Café pour TDAH - Torrégral</title><meta name="robots" content="noindex, follow" /><link rel="canonical" href="https://www.torregral.com/tdh/" /><meta http-equiv="refresh" content="0; url=../tdh/" /></head><body><p><a href="../tdh/">Café pour TDAH - Torrégral</a></p></body></html>`
);

const sitemapPath = join(root, "sitemap.xml");
let sitemap = readFileSync(sitemapPath, "utf8");
sitemap = sitemap.replace(/\s*<\/urlset>\s*$/, "");
const existing = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
for (const slug of [...navPages, "tdah"]) {
  const loc = `https://www.torregral.com/${slug}/`;
  if (!existing.has(loc)) {
    const priority = slug === "neuroatypiques" ? "0.8" : slug === "tdah" ? "0.3" : "0.7";
    sitemap += `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }
}
sitemap += "\n</urlset>\n";
writeFileSync(sitemapPath, sitemap);
