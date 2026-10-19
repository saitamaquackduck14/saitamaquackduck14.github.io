export interface HistoryMilestone {
  id: string
  title: string
  date: string
  region: string
  overview: string
  evidence: string
  caution: string
  question: string
  answer: string
  source: { label: string; href: string }
}

export const historyMilestones: HistoryMilestone[] = [
  {
    id: "uruk",
    title: "Cities in Mesopotamia",
    date: "c. 3500 BCE",
    region: "Southern Mesopotamia · present-day Iraq",
    overview:
      "Uruk grew into one of the earliest large cities. Irrigated agriculture supported specialized work, trade, and institutions that collected and distributed goods. Early writing developed in this setting during the late fourth millennium BCE.",
    evidence:
      "Clay accounting tablets, cylinder seals, and monumental buildings help us trace how people organized goods and labor.",
    caution:
      "Writing did not appear everywhere at once. Surviving administrative records tell us much more about institutions than about the lives of most inhabitants.",
    question: "Why might accounting encourage the development of writing?",
    answer:
      "An institution needs to track quantities, goods, and obligations beyond one person's memory. Marks and signs can preserve those records. This explains an important early use of writing, rather than every reason writing developed.",
    source: { label: "Read about Uruk", href: "https://en.wikipedia.org/wiki/Uruk" },
  },
  {
    id: "egypt",
    title: "The unification of Egypt",
    date: "c. 3100 BCE",
    region: "Nile Valley · present-day Egypt",
    overview:
      "The formation of a unified Egyptian state is conventionally placed around 3100 BCE. The Nile connected settlements and supported agriculture. Kingship, administration, and religious institutions developed together over the following centuries.",
    evidence:
      "The Narmer Palette depicts royal power and symbols associated with Upper and Lower Egypt. Tombs and inscriptions offer other evidence for early kingship.",
    caution:
      "The palette is a ceremonial object, not a neutral report. Unification was a process, and its precise sequence remains debated.",
    question: "Can an image of a king prove how much territory he controlled?",
    answer:
      "It can show a claim to authority. Establishing actual control also requires evidence from settlements, burials, administration, and other inscriptions. Political imagery and political reality are not always the same.",
    source: { label: "Read about the Narmer Palette", href: "https://en.wikipedia.org/wiki/Narmer_Palette" },
  },
  {
    id: "indus",
    title: "The cities of the Indus civilization",
    date: "c. 2600 BCE",
    region: "Northwestern South Asia · present-day Pakistan and India",
    overview:
      "The Mature Harappan period saw major urban centers such as Harappa and Mohenjo-daro. Planned streets, drainage, standardized weights, and long-distance trade reveal sophisticated systems of urban life.",
    evidence:
      "Buildings, drains, seals, weights, and traded materials let archaeologists compare practices across widely separated settlements.",
    caution:
      "The Indus script remains undeciphered. We cannot confidently name its rulers or describe its political organization from written records.",
    question: "Does standardization necessarily mean there was one central ruler?",
    answer:
      "No. Shared standards can result from political authority, trade networks, common traditions, or combinations of these. Material similarities alone do not settle how power was organized.",
    source: { label: "Read about the Indus civilization", href: "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation" },
  },
  {
    id: "shang",
    title: "Written records at Anyang",
    date: "c. 1250 BCE",
    region: "Yellow River region · present-day China",
    overview:
      "Late Shang oracle-bone inscriptions preserve some of the earliest securely attested Chinese writing. Questions about harvests, warfare, weather, and royal affairs were inscribed on bones and turtle shells used in divination.",
    evidence:
      "Oracle bones and excavations at Anyang connect written royal concerns with the material remains of a late Shang center.",
    caution:
      "These records largely reflect royal ritual and elite concerns. This date refers to surviving evidence at Anyang, not the beginning of Chinese culture or the Shang dynasty.",
    question: "Whose everyday life is missing from a royal archive?",
    answer:
      "Most farmers, craftspeople, and other people outside the court rarely speak directly in these records. Archaeology can recover parts of their lives that royal texts leave out.",
    source: { label: "Read about oracle bones", href: "https://en.wikipedia.org/wiki/Oracle_bone" },
  },
  {
    id: "athens",
    title: "Political reform in Athens",
    date: "508–507 BCE",
    region: "Attica · present-day Greece",
    overview:
      "Reforms associated with Cleisthenes reorganized Athenian citizens into new tribes and helped establish the foundations of Athenian democracy. Its institutions continued to change during the fifth century BCE.",
    evidence:
      "Literary accounts, inscriptions, and archaeological evidence help reconstruct the city's institutions and practices.",
    caution:
      "Political participation was restricted to male citizens. Women, enslaved people, and resident foreigners were excluded from the citizen assembly. Athens was one Greek city-state, not all of Greece.",
    question: "Who counts as 'the people' in a democracy?",
    answer:
      "The answer depends on citizenship and political rights. Calling Athens a democracy describes participation within its citizen body; it does not imply equal participation for everyone who lived there.",
    source: { label: "Read about Athenian democracy", href: "https://en.wikipedia.org/wiki/Athenian_democracy" },
  },
  {
    id: "rome",
    title: "Augustus and the Roman Principate",
    date: "27 BCE",
    region: "Rome and the Mediterranean",
    overview:
      "In 27 BCE, Octavian received the title Augustus. This is a conventional starting point for the Roman Empire, following decades of civil war. Republican offices survived while power became concentrated around the emperor.",
    evidence:
      "Coins, inscriptions, monuments, and literary accounts show how Augustus presented his authority and how the new political order worked.",
    caution:
      "Rome already controlled a large empire before Augustus. The date marks a change in political organization, not the first Roman conquest or an instant break with every republican institution.",
    question: "Can institutions keep their names while their power changes?",
    answer:
      "Yes. A senate or elected office can continue to exist even as military authority, resources, and appointments become concentrated elsewhere. Names alone do not explain where political power lies.",
    source: { label: "Read about the Principate", href: "https://en.wikipedia.org/wiki/Principate" },
  },
]
