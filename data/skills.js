// Skills data
const COMMON_SKILLS = [
    "Awareness",
    "Barter",
    "Charm",
    "Climb",
    "Concealment",
    "Contortionist",
    "Deceive", 
    "Disguise",
    "Dodge",
    "Evaluate",
    "Gamble",
    "Inquiry",
    "Intimidate",
    "Logic",
    "Scrutiny",
    "Search",
    "Silent Move",
    "Swim"
];

const CAREER_SKILLS = {
    arch_militant: [
        "Command +10",
        "Intimidate +20",
        "Heavy Weapons +10",
        "Dodge +10", 
        "Wrangling (Guards)",
        "Tactical Drinking +20"
    ],
    explorator: [
        "Tech-Use +20",
        "Forbidden Lore (Archeotech) +10",
        "Logic +10",
        "Binary Chanting +10",
        "Evaluate (Technology) +20",
        "Unnecessarily Complex Repair +10"
    ],
    missionary: [
        "Charm +10",
        "Deceive +10",
        "Intimidate +10",
        "Forbidden Lore (Heresy) +10",
        "Emperor Quotes For Any Situation +20",
        "Creative Interpretation of Doctrine +20"
    ],
    navigator: [
        "Navigation (Warp) +20",
        "Forbidden Lore (Warp) +10",
        "Scholastic Lore (Navigator Houses) +20",
        "Psyniscience +10",
        "Condescension +20",
        "Cryptic Warnings +10" 
    ],
    rogue_trader: [
        "Charm +20",
        "Deceive +20",
        "Evaluate +10",
        "Scholastic Lore (Bureaucracy) +10",
        "Profit Calculation +20",
        "Dramatic Entrances +20"
    ],
    seneschal: [
        "Commerce +20",
        "Evaluate +10",
        "Inquiry +10",
        "Scholastic Lore (Bureaucracy) +20",
        "Creative Accounting +20",
        "Finding Loopholes +10"
    ],
    void_master: [
        "Pilot (Spacecraft) +20",
        "Navigation (Stellar) +10",
        "Command +10",
        "Tech-Use +10",
        "Inappropriate Ship Metaphors +20",
        "Gravity Well Avoidance +10"
    ],
    astropath_transcendent: [
        "Psyniscience +20",
        "Invocation +10",
        "Forbidden Lore (Warp) +10",
        "Scholastic Lore (Astromancy) +20",
        "Cryptic Message Composition +20",
        "Dramatic Psychic Gestures +10"
    ]
};
