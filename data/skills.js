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
    "Swim",
    "Acrobatics",
    "Athletics",
    "Carouse",
    "Common Lore (Imperium)",
    "Common Lore (War)",
    "Common Lore (Tech)",
    "Demolition",
    "Drive (Ground Vehicle)",
    "Drive (Walker)",
    "Literacy",
    "Medicae (Basic)",
    "Navigation (Surface)",
    "Performer (Storyteller)",
    "Pilot (Civilian Craft)",
    "Sleight of Hand",
    "Stealth",
    "Survival",
    "Tactics (Small Unit)",
    "Tech-Use (Basic)",
    "Tracking",
    "Trade (Cook)",
    "Trade (Armorer)",
    "Wrangling"
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
    ],
    chirurgeon: [
        "Medicae +20",
        "Chem-Use +10",
        "Scholastic Lore (Chymistry) +10",
        "Trade (Apothecary) +20",
        "Disturbing Bedside Manner +10",
        "Experimental Treatment Enthusiasm +20"
    ],
    enginseer: [
        "Tech-Use +20",
        "Common Lore (Machine Cult) +10",
        "Trade (Technomat) +20",
        "Evaluate (Technology) +10",
        "Machine Spirit Whispering +20",
        "Unnecessary Maintenance Rituals +10"
    ],
    commissar: [
        "Intimidate +20",
        "Command +20",
        "Scholastic Lore (Tactica Imperialis) +10",
        "Dodge +10",
        "Morale-Boosting Executions +20",
        "Dramatic Hat Adjustment +10"
    ],
    inquisitorial_acolyte: [
        "Scrutiny +20",
        "Inquiry +20",
        "Forbidden Lore (Various) +10",
        "Concealment +10",
        "Ominous Inquisitorial Staring +20",
        "Heresy Detection In Mundane Objects +10"
    ],
    administratum_scribe: [
        "Literacy +20",
        "Scholastic Lore (Bureaucracy) +20",
        "Logic +10",
        "Evaluate +10",
        "Form Completion Efficiency +20",
        "Bureaucratic Obstruction +10"
    ],
    tech_wright: [
        "Tech-Use +10",
        "Trade (Wright) +20",
        "Evaluate (Technology) +10",
        "Repair +20",
        "Percussive Maintenance +10",
        "Improvised Technical Solutions +20"
    ],
    void_born_mystic: [
        "Psyniscience +10",
        "Forbidden Lore (Warp) +10",
        "Navigation (Void) +20",
        "Scrutiny +10",
        "Cryptic Void Prophecies +20",
        "Unsettling Void Stare +10"
    ],
    xenographer: [
        "Speak Language (Xenos) +20",
        "Forbidden Lore (Xenos) +20",
        "Scholastic Lore (Xenology) +10",
        "Evaluate +10",
        "Inappropriate Xenos Cultural Practices +10",
        "Disturbing Xenos Anatomical Knowledge +20"
    ],
    sanctioned_witch: [
        "Psyniscience +20",
        "Invocation +20",
        "Forbidden Lore (Psykers) +10",
        "Awareness +10",
        "Dramatic Psychic Manifestations +20",
        "Unsettling Warp Whispers +10"
    ],
    death_cult_assassin: [
        "Silent Move +20",
        "Concealment +20",
        "Acrobatics +10",
        "Dodge +10",
        "Theatrical Killing Methods +20",
        "Ritualistic Weapon Maintenance +10"
    ]
};
