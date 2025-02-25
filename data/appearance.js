// Appearance data
const HEIGHTS = {
    human: { male: ["Short", "Average height", "Tall", "Very tall"], 
             female: ["Short", "Average height", "Tall", "Very tall"],
             other: ["Short", "Average height", "Tall", "Very tall"] },
    abhuman: { male: ["Squat", "Unnaturally tall", "Hulking", "Diminutive"], 
              female: ["Squat", "Unnaturally tall", "Hulking", "Diminutive"],
              other: ["Squat", "Unnaturally tall", "Hulking", "Diminutive"] },
    adeptus_mechanicus: { male: ["Hunched", "Towering", "Asymmetric", "Standard-pattern"], 
                          female: ["Hunched", "Towering", "Asymmetric", "Standard-pattern"],
                          other: ["Hunched", "Towering", "Asymmetric", "Standard-pattern"] },
    navigator: { male: ["Slender", "Gaunt", "Tall", "Willowy"], 
                female: ["Slender", "Gaunt", "Tall", "Willowy"],
                other: ["Slender", "Gaunt", "Tall", "Willowy"] },
    astropath: { male: ["Withered", "Frail", "Skeletal", "Wasted"], 
                female: ["Withered", "Frail", "Skeletal", "Wasted"],
                other: ["Withered", "Frail", "Skeletal", "Wasted"] },
    sensei: { male: ["Perfectly proportioned", "Statuesque", "Idealized", "Heroic"], 
             female: ["Perfectly proportioned", "Statuesque", "Idealized", "Heroic"],
             other: ["Perfectly proportioned", "Statuesque", "Idealized", "Heroic"] },
    xenobreed: { male: ["Subtly wrong", "Almost human", "Uncannily proportioned", "Alien-limbed"], 
                female: ["Subtly wrong", "Almost human", "Uncannily proportioned", "Alien-limbed"],
                other: ["Subtly wrong", "Almost human", "Uncannily proportioned", "Alien-limbed"] }
};

const BUILDS = {
    human: { male: ["Wiry", "Athletic", "Muscular", "Heavyset", "Portly", "Stocky"], 
             female: ["Slim", "Athletic", "Muscular", "Curvy", "Stout", "Stocky"],
             other: ["Thin", "Athletic", "Muscular", "Heavy", "Solid", "Stocky"] },
    abhuman: { male: ["Brutish", "Stunted", "Malproportioned", "Overdeveloped"], 
              female: ["Brutish", "Stunted", "Malproportioned", "Overdeveloped"],
              other: ["Brutish", "Stunted", "Malproportioned", "Overdeveloped"] },
    adeptus_mechanicus: { male: ["Augmented", "More machine than flesh", "Mechanically enhanced", "Partially replaced"], 
                          female: ["Augmented", "More machine than flesh", "Mechanically enhanced", "Partially replaced"],
                          other: ["Augmented", "More machine than flesh", "Mechanically enhanced", "Partially replaced"] },
    navigator: { male: ["Unnaturally thin", "Elongated", "Graceful", "Ethereal"], 
                female: ["Unnaturally thin", "Elongated", "Graceful", "Ethereal"],
                other: ["Unnaturally thin", "Elongated", "Graceful", "Ethereal"] },
    astropath: { male: ["Emaciated", "Soul-withered", "Slight", "Hollow"], 
                female: ["Emaciated", "Soul-withered", "Slight", "Hollow"],
                other: ["Emaciated", "Soul-withered", "Slight", "Hollow"] },
    sensei: { male: ["Perfect physique", "Immortal vigor", "Ageless strength", "Mythic form"], 
             female: ["Perfect physique", "Immortal vigor", "Ageless strength", "Mythic form"],
             other: ["Perfect physique", "Immortal vigor", "Ageless strength", "Mythic form"] },
    xenobreed: { male: ["Inhuman musculature", "Xenos-touched", "Not-quite-human", "Hybrid vigor"], 
                female: ["Inhuman musculature", "Xenos-touched", "Not-quite-human", "Hybrid vigor"],
                other: ["Inhuman musculature", "Xenos-touched", "Not-quite-human", "Hybrid vigor"] }
};

const FACES = {
    human: ["scarred", "weathered", "noble", "common", "handsome", "beautiful", "ugly", "plain", "distinctive", "forgettable"],
    abhuman: ["bestial", "mutated", "feral", "inhuman", "abhuman", "grotesque", "fearsome"],
    adeptus_mechanicus: ["augmetic", "partially mechanical", "mask-like", "vox-grilled", "tech-integrated", "vestigial"],
    navigator: ["hooded", "blindfolded", "aristocratic", "warp-touched", "third-eye concealing", "noble-bred"],
    astropath: ["eyeless", "blind", "psychically marked", "soul-bound scarred", "emperor-touched", "warp-withered"],
    sensei: ["perfect", "ageless", "iconic", "heroic", "inspiring", "timeless"],
    xenobreed: ["almost-human", "xenos-featured", "subtly alien", "uncanny", "hybrid", "gene-spliced"]
};

const SPECIAL_FEATURES = {
    human: [
        "Augmetic arm that gestures inappropriately in tense situations",
        "Mechanical eye that occasionally records the wrong things",
        "Collection of campaign scars arranged like constellations",
        "Walks with a limp but runs perfectly fine when scared",
        "Ritual scarification showing devotion to the Emperor",
        "Missing digits replaced with simple augmetics",
        "Hive-pallor that never faded despite years in space",
        "Death world tribal tattoos that glow faintly in darkness",
        "Unusually colored eyes from unknown genetic quirk",
        "Voice augmetic that occasionally switches to inappropriate volume"
    ],
    abhuman: [
        "More pronounced abhuman features when emotional",
        "Attempts to hide abhuman traits with creative clothing",
        "Distinctly non-regulation teeth or claws",
        "Unusually patterned skin or fur",
        "Subdermal implants to appear more human",
        "Proudly displayed mutation as mark of distinction",
        "Signs of experimental 'corrective' procedures",
        "Unique adaptations perfect for their specialist role",
        "Ceremonial markings showing clan or tribe status",
        "Unexplained minor mutations beyond their abhuman type"
    ],
    adeptus_mechanicus: [
        "Exposed circuitry that sparks when agitated",
        "Decorative but non-functional gears and cogs",
        "Mechadendrites with inappropriate attachments",
        "Incense censers integrated into limbs",
        "Vocalizer that expresses emotion they claim not to have",
        "Overly complex augmetics for simple tasks",
        "Different generations of tech implants showing patchy upgrades",
        "Cherubim familiar that looks suspiciously like them",
        "Optical units in unusual colors or numbers",
        "Binary cant tattoos visible on remaining flesh"
    ],
    navigator: [
        "Elaborate third eye covering of personal design",
        "Warp-touched skin with subtle luminescence",
        "Vestigial mutations carefully hidden by high collars",
        "Family heraldry prominently displayed on all clothing",
        "Ghostly pallor from generations in void-ships",
        "Ornate navigator house jewelry and symbols",
        "Eyes that occasionally shift color during warp translation",
        "Elegant but practical clothing suitable for bridge duties",
        "Subtle signs of inbreeding carefully disguised",
        "Unexplained temporal anomalies in their presence"
    ],
    astropath: [
        "Soul-binding scars around empty eye sockets",
        "Psychic hood fused permanently to skull",
        "Staff that acts as psychic focus and walking aid",
        "Ghostly whispers audible around them at all times",
        "Skin etched with microscopic hexagrammic wards",
        "Minor objects levitate when they're distracted",
        "Temperature drops noticeably in their presence",
        "Constantly moving hands as if sending messages",
        "Eyes replaced with smooth obsidian orbs",
        "Servitor companion that records all messages"
    ],
    sensei: [
        "Appears simultaneously young and ancient",
        "Perfect features with one deliberate flaw",
        "Ageless appearance with ancient eyes",
        "Subtle golden aura visible in dim light",
        "Wounds that heal as you watch",
        "Voice with unusual harmonics that inspire loyalty",
        "Strange birthmark resembling Imperial symbols",
        "No visible scars despite countless battles",
        "Weapons and armor that seem part of them",
        "Unexplained charismatic presence that affects everyone nearby"
    ],
    xenobreed: [
        "Inhuman features disguised with creative fashion",
        "Odd-colored blood visible through translucent skin",
        "Non-standard number of digits carefully hidden by gloves",
        "Pupils that change shape under stress",
        "Subtle scales or chitin patches passed off as skin condition",
        "Strange dietary requirements explained away as 'allergies'",
        "Unusual bodily symmetry or proportions",
        "Voice with harmonics outside human range",
        "Unexplained physiological abilities they downplay",
        "Pheromones that cause unease in animals"
    ]
};
