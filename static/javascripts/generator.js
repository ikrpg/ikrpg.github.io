// global
// var ikrpg

var ikrpg = ikrpg || {};

(function() {
  
  ikrpg.generator = ikrpg.generator || {};
  var generator = ikrpg.generator;
  
  
  // # DBs # \\
  (function() {
    
    ikrpg.generator.db = ikrpg.generator.db || {};
    
    // ## Skill DB ## \\
    (function() {
      
      var skillDB = {
        "Alchemy": ["INT"],
        "Animal Handling": ["SOC"],
        "Archery": ["POI"],
        "Bribery": ["SOC"],
        "Chymistry": ["INT"],
        "Climbing": ["AGL"],
        "Command": ["SOC"],
        "Craft": ["INT"],
        "Crossbow": ["POI"],
        "Cryptography": ["INT"],
        "Deception": ["SOC"],
        "Detection": ["PER"],
        "Disguise": ["INT"],
        "Driving": ["AGL"],
        "Escape Artist": ["AGL"],
        "Etiquette": ["SOC"],
        "Fell Calling": ["POI"],
        "Forensic Science": ["INT"],
        "Forgery": ["AGL", "INT"],
        "Gambling": ["PER"],
        "Great Weapon": ["PRW"],
        "Hand Weapon": ["PRW"],
        "Heavy Artillery": ["POI"],
        "Interrogation": ["SOC"],
        "Intimidation": ["SOC"],
        "Investigation": ["INT"],
        "Jumping": ["PHY"],
        "Lance": ["PRW"],
        "Law": ["INT"],
        "Light Artillery": ["POI"],
        "Lock Picking": ["AGL"],
        "Lore": ["INT"],
        "Mechanikal Engineering": ["INT"],
        "Medicine": ["INT"],
        "Navigation": ["PER"],
        "Negotiation": ["SOC"],
        "Oratory": ["SOC"],
        "Pickpocket": ["AGL"],
        "Pistol": ["POI"],
        "Reiver": ["POI"],
        "Research": ["INT"],
        "Riding": ["AGL"],
        "Rifle": ["POI"],
        "Rope Use": ["AGL"],
        "Sailing": ["INT", "STR"],
        "Seduction": ["SOC"],
        "Shield": ["PRW"],
        "Sneak": ["AGL"],
        "Stormsmithing": ["PER"],
        "Streetwise": ["PER"],
        "Survival": ["PER"],
        "Swimming": ["STR"],
        "Thrall Crafting": ["INT"],
        "Thrown Weapon": ["PRW"],
        "Tracking": ["PER"],
        "Unarmed Combat": ["PRW"]
      };
    
      ikrpg.generator.db.skill = skillDB;
    
    })();
    
    // ## Spell DB [Done for Core Rules] ## \\
    (function() {
      
      var spellDB = {
        "Abuse": undefined,
        "Admonition": undefined,
        "Affliction": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Aggravator": undefined,
        "Agitation": undefined,
        "Annihilation": { "cost": 4, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Arcane Blast": undefined,
        "Arcane Bolt": { "cost": 2, "rng": 12, "aoe": "–", "pow": 11, "up": "NO", "off": "YES", "description": "" },
        "Arcane Bonds": undefined,
        "Arcane Strike": { "cost": 1, "rng": 8, "aoe": "–", "pow": 8, "up": "NO", "off": "YES", "description": "" },
        "Arcantrik Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ashen Cloud": { "cost": 2, "rng": "CTRL", "aoe": 3, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ashen Veil": undefined,
        "Ashes to Ashes": { "cost": 4, "rng": 8, "aoe": "*", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Aura of Protection": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Awakened Spirit": undefined,
        "Awareness": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Ayisla's Rebuke": undefined,
        "Backlash": undefined,
        "Bad Blood": undefined,
        "Banishing Ward": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Barrier of Flames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Battering Ram": { "cost": 2, "rng": 6, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Batten Down the Hatches": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Battle Charged": undefined,
        "Battle Frost": undefined,
        "Battle Rage": undefined,
        "Bestial": undefined,
        "Beyond Death": undefined,
        "Black Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blade of Radiance": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blaze of Glory": undefined,
        "Blazing Effigy": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 14, "up": "NO", "off": "NO", "description": "" },
        "Bleed": { "cost": 2, "rng": 8, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blessing of Health": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessing of Morrow": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessing of the Devourer": undefined,
        "Blessings of War": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blight Blast": undefined,
        "Blight Bringer": undefined,
        "Blight Field": undefined,
        "Blizzard": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Feast": undefined,
        "Blood Magic: Accurate Strike": undefined,
        "Blood Magic: Black Poison": undefined,
        "Blood Magic: Bleeder": undefined,
        "Blood Magic: Blood Burst": undefined,
        "Blood Magic: Brain Damage": undefined,
        "Blood Magic: Brutal Strike": undefined,
        "Blood Magic: Dispel": undefined,
        "Blood Magic: Grievous Strike": undefined,
        "Blood Magic: Heart Stopper": undefined,
        "Blood Magic: Hobbler": undefined,
        "Blood Magic: Invigoration": undefined,
        "Blood Magic: Weekness": undefined,
        "Blood Mark": undefined,
        "Blood Rain": undefined,
        "Blow the Man Down": undefined,
        "Blur": undefined,
        "Bone Shaker": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Brittle Frost": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Boundless Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Broadside": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Bullet Dodger": undefined,
        "Buoyancy": undefined,
        "Carnage": undefined,
        "Carnivore": undefined,
        "Celerity": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Chain Lightning": { "cost": 3, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Chasten": undefined,
        "Chiller": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Cleansing Fire": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Cloak of Fear": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Cloak of the Predator": undefined,
        "Cold Blooded": undefined,
        "Convection": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Crevasse": { "cost": 3, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Cross-Country": undefined,
        "Crusader's Call": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Curse of Shadows": undefined,
        "Dark Fire": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Dark Persuader": undefined,
        "Dark Water": undefined,
        "Daylight": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deadeye": undefined,
        "Deadweight": undefined,
        "Death Field": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Death Pact": undefined,
        "Deathly Slumber": undefined,
        "Deceleration": { "cost": 3, "rng": "SELF", "aoe": "DTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deep Freeze": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Devil's Tongue": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Dirge of Mists": undefined,
        "Disruptor": undefined,
        "Dissolution Bolt": undefined,
        "Dog Pile": undefined,
        "Dominate Undead": { "cost": 3, "rng": 10, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Domination": undefined,
        "Draconic Blessing": undefined,
        "Dragon's Blood": undefined,
        "Dragonsight": undefined,
        "Earthquake": { "cost": 3, "rng": 10, "aoe": 5, "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Earth's Cradle": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Earthsplitter": { "cost": 4, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Electrical Blast": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Electrical Charge": undefined,
        "Electrify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Electrodynamics": undefined,
        "Elemental Protection": undefined,
        "Eliminator": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Entangle": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Enthrall Spirit": undefined,
        "Entropic Force": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Eruption of Life": undefined,
        "Eruption of Spines": undefined,
        "Essence Blast": undefined,
        "Exorcism": undefined,
        "Explosivo": undefined,
        "Extinguisher": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Eye of Menoth": undefined,
        "Eyes of Truth": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fail Safe": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fair Winds": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Feast of Worms": undefined,
        "Fire for Effect": undefined,
        "Fire Group": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fire Starter": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Flames of Wrath": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Flare": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Flesh Eater": undefined,
        "Fog of War": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Bolt": undefined,
        "Force Field": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Hammer": { "cost": 4, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Force of Faith": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Forced Evolution": undefined,
        "Fortify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fortune": undefined,
        "Foxhole": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Freezing Grip": { "cost": 4, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Freezing Mist": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frozen Ground": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frostbite": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Fuel the Flames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Full Throttle": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fury": undefined,
        "Gallows": undefined,
        "Ghost Shroud": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ghost Walk": undefined,
        "Grave Whispers": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Grind": { "cost": 3, "rng": 10, "aoe": "–", "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Grip of Death": undefined,
        "Ground Zero": undefined,
        "Guidance": undefined,
        "Guided Blade": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Guilded Fire": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hallowed Avender": undefined,
        "Hallowed Guardian": undefined,
        "Hand of Fate": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hardened Flesh": undefined,
        "Harvest": undefined,
        "Heal": { "cost": 4, "rng": "*", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Heightened Reflexes": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hellfire": { "cost": 3, "rng": 10, "aoe": "–", "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Hellmouth": undefined,
        "Hex Blast": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Hex Hammer": undefined,
        "Hidden Path": undefined,
        "Hoarfrost": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Hollow": undefined,
        "Holy Ward": undefined,
        "Hot Shot": undefined,
        "Howling Flames": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Hunter's Mark": undefined,
        "Hymn of Battle": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Passage": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Shielding": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hyper Awareness": undefined,
        "Ice Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ice Shield": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Icy Grip": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Ignite": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Illusion of Vitality": undefined,
        "Immolation": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Incite": undefined,
        "Infernal Machine": undefined,
        "Inferno": { "cost": 3, "rng": 10, "aoe": 3, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Influence": { "cost": 1, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Inhospitable Ground": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Instigate": undefined,
        "Inviolable Resolve": undefined,
        "Iron Aggression": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Iron Flesh": undefined,
        "Jackhammer": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Jaws of Death": undefined,
        "Jump Start": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Killing Ground": undefined,
        "Killing Tide": undefined,
        "Lamentation": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Leash": undefined,
        "Light in the Darkness": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Light of Nyrro": undefined,
        "Lightning Shroud": undefined,
        "Lightning Storm": undefined,
        "Lightning Tendrils": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Lightning Tongue": undefined,
        "Locomotion": { "cost": "1+", "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Mage Sight": undefined,
        "Magnetic Hold": undefined,
        "Mark of Lyliss": undefined,
        "Marked for Death": undefined,
        "Medicate": undefined,
        "Mindblow": undefined,
        "Mirage": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Mist Shroud": undefined,
        "Mobility": undefined,
        "Mockery of Life": undefined,
        "Molten Metal": undefined,
        "Mortality": undefined,
        "Murder of Crows": undefined,
        "Muzzle": undefined,
        "Mystic Wards": undefined,
        "Obliteration": { "cost": 4, "rng": 10, "aoe": 4, "pow": 15, "up": "NO", "off": "YES", "description": "" },
        "Occultation": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Overmind": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Parasite": undefined,
        "Parasitic Invigoration": undefined,
        "Perdition": undefined,
        "Phantasm": undefined,
        "Phantom Hunter": undefined,
        "Pig Pen": undefined,
        "Playing God": undefined,
        "Polarity Shield": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Positive Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Powder Keg": undefined,
        "Power Booster": { "cost": 1, "rng": 5, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Prayer for Guidance": undefined,
        "Prayer of Guidance": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Primal Shock": undefined,
        "Protection from Cold": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Corrosion": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Electricity": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protector's Mark": undefined,
        "Prowess of Lurynsar": undefined,
        "Psi Blast": undefined,
        "Psychic Vampire": undefined,
        "Psychophage": undefined,
        "Purification": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Quagmire": undefined,
        "Quickened": undefined,
        "Raging Winds": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Raise Dead": undefined,
        "Rampager": undefined,
        "Rapid Growth": undefined,
        "Ravager": undefined,
        "Rawhide": undefined,
        "Razor Wall": undefined,
        "Razor Wind": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Realignment": undefined,
        "Reconstruction": undefined,
        "Redline": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Refuge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Respawn": undefined,
        "Restoration": undefined,
        "Return Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rift": { "cost": 3, "rng": 8, "aoe": 4, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Righteous Flames": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rime": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rise in Death": undefined,
        "Rising Tide": undefined,
        "Rock Hammer": { "cost": 3, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Rock Wall": { "cost": 2, "rng": "CTRL", "aoe": "WALL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Roots of the Earth": undefined,
        "Rune Shot: Accuracy": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Black Penny": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Brutal": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Detonator": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Disruption": undefined,
        "Rune Shot: Earth Shaker": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot Electro Leap": undefined,
        "Rune Shot: Fire Beacon": undefined,
        "Rune Shot: Freeze Fire": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Heart Stopper": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Iron Bolt": undefined,
        "Rune Shot: Iron Rot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Molten Shot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Momentum": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Phantom Seeker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Piercer": undefined,
        "Rune Shot: Shadow Fire": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Silencer": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spell Cracker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spontaneous Combustion": { "cost": 1, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Thunderbolt": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Trick Shot": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Sacraficial Pawn": undefined,
        "Sanguine Blessing": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Savagery": undefined,
        "Sea Legs": undefined,
        "Sea of Fire": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Shadow Pack": undefined,
        "Shadow Sight": undefined,
        "Shatter Storm": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shield of Faith": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shock Wave": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 13, "up": "NO", "off": "NO", "description": "" },
        "Short Out": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Shrapnel Swarm": undefined,
        "Snipe": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solid Ground": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solovin's Boon": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Somnambulist": undefined,
        "Soothing Song": undefined,
        "Soul Mark": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Soul Slave": undefined,
        "Soulfire": undefined,
        "Spirit Fang": undefined,
        "Spirit Lash": undefined,
        "Star Crossed": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Star Fire": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Star-Crossed": undefined,
        "Staying Winter's Hand": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Stone Form": undefined,
        "Stone Hold": undefined,
        "Stone Skin": undefined,
        "Stone Spray": undefined,
        "Stone Stance": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Stone Strength": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Storm Tossed": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Storm Wall": undefined,
        "Stranglehold": undefined,
        "Stygian Abyss": { "cost": 3, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Summon Vortex": undefined,
        "Sunburst": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Sunder Spirit": undefined,
        "Sunhammer": undefined,
        "Superiority": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sure Foot": undefined,
        "Synergy": undefined,
        "Telekinesis": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Telgesh Mark": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Temper Metal": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Tempest": { "cost": 4, "rng": 8, "aoe": 4, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Tide of Steel": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Torment": undefined,
        "Tornado": { "cost": 4, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Total Domination": undefined,
        "Total Spectrum": undefined,
        "Transference": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Triage": { "cost": 2, "rng": "B2B", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Path": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Sight": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Twister": undefined,
        "Unease": undefined,
        "Unminding": undefined,
        "Unnatural Aggression": undefined,
        "Unstoppable Force": undefined,
        "Veil of Mist": undefined,
        "Venom": undefined,
        "Vision": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Void Curse": undefined,
        "Voltaic Lock": { "cost": 4, "rng": 10, "aoe": "*", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Voodoo Doll": undefined,
        "Wall of Fire": { "cost": 2, "rng": "CTRL", "aoe": "WALL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Warpath": undefined,
        "Watcher": undefined,
        "Wave of Vivification": undefined,
        "Weald Hunter": undefined,
        "White Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Wild Aggression": undefined,
        "Will Breaker": undefined,
        "Wind Blast": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Wind Ravager": undefined,
        "Wind Strike": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Wind Wall": undefined,
        "Wings of Air": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Winter Storm": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Zephyr": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" }
      };
      
      ikrpg.generator.db.spell = spellDB;
      
    })();
    
    // ## Worn Armor DB [Done for Regular Armor] ## \\ TODO: Add Warcaster Armor etc.
    (function() {
      
      var wornArmorDB = {
        "Alchemist's Leather": { "spd": 0, "def": -1, "arm": 5, "description": "" },
        "Armored Great Coat": { "spd": 0, "def": -1, "arm": 5, "description": "" },
        "Assault Kommando Armor": { "spd": 0, "def": -2, "arm": 7, "description": "" },
        "Bastion Heavy Plate": { "spd": -3, "def": -4, "arm": 10, "description": "" },
        "Bog Trog Armor": { "spd": 0, "def": -1, "arm": 6, "description": "" },
        "Cataphract Armor": { "spd": -2, "def": -3, "arm": 9, "description": "" },
        "Chain Mail": { "spd": 0, "def": -2, "arm": 7, "description": "" },
        "Cleanser Armor": { "spd": -1, "def": -3, "arm": 8, "description": "" },
        "Crucible Armor": { "spd": -1, "def": -3, "arm": 8, "description": "" },
        "Custom Battle Armor": { "spd": 0, "def": -1, "arm": 6, "description": "" },
        "Exemplar Plate": { "spd": -2, "def": -3, "arm": 9, "description": "" },
        "Full Plate": { "spd": -1, "def": -3, "arm": 8, "description": "" },
        "Infantry Armor": { "spd": 0, "def": -2, "arm": 7, "description": "" },
        "Leather Armor": { "spd": 0, "def": -1, "arm": 5, "description": "" },
        "Man-O-War Armor": { "spd": -3, "def": -3, "arm": 9, "description": "" },
        "Nyss Leather Armor": { "spd": 0, "def": -1, "arm": 6, "description": "" },
        "Ordic Royal Marine Armor": { "spd": 0, "def": -1, "arm": 6, "description": "" },
        "Paingiver Armor": { "spd": 0, "def": 0, "arm": 5, "description": "" },
        "Plastron": { "spd": 0, "def": 0, "arm": 2, "description": "" },
        "Praetorian Armor": { "spd": 0, "def": -2, "arm": 8, "description": "" },
        "Ryssovass Plate": { "spd": -2, "def": -3, "arm": 9, "description": "" },
        "Skorne Infantry Armor": { "spd": 0, "def": -1, "arm": 7, "description": "" },
        "Storm Knight Armor": { "spd": -2, "def": -3, "arm": 9, "description": "" },
        "Stormsmith Armor": { "spd": 0, "def": -1, "arm": 5, "description": "" },
        "Tailored Plate": { "spd": 0, "def": -1, "arm": 7, "description": "" },
        "Temple Flameguard Armor": { "spd": 0, "def": -1, "arm": 5, "description": "" },
        "Tharn Leathers": { "spd": 0, "def": 0, "arm": 4, "description": "" },
        "Vassal Armor": { "spd": 0, "def": -2, "arm": 7, "description": "" },
        "Winter Guard Armor": { "spd": 0, "def": -2, "arm": 7, "description": "" }
      };
      
      ikrpg.generator.db.wornArmor = wornArmorDB;
      
    })();
    
    // ## Melee Weapon DB [Done for Core Rules] ## \\
    (function() {
      
      var meleeWeaponDB = {
        "Ancestral Guardian Stone Weapon": undefined,
        "Annihilator Blade": undefined,
        "Assassin's Blade": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "+2 backstrike" },
        "Axe": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 3, "notes": "" },
        "Axe, Great": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "Crit: +1 die dmg" },
        "Axe, Horseman's": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "reach, mounted: at-mod 0, POW 5, +2 charge at" },
        "Axe, Ice": undefined,
        "Axe, Riding": undefined,
        "Axe, Tharn": undefined,
        "Az'Tal": undefined,
        "Barbed Whip": undefined,
        "Battle Hammer": undefined,
        "Bayonet": { "skill": "Great Weapon", "mat-mod": -1, "pow": 3, "notes": "reach, for Rifles, +2 charge at" },
        "Blackclad Voulge": undefined,
        "Blast Shield": { "skill": "Shield", "mat-mod": -1, "pow": 1, "notes": "-2 DEF, no blast dmg" },
        "Blasting Lance": undefined,
        "Blasting Pike": { "skill": "Great Weapon", "mat-mod": -2, "pow": 7, "notes": "reach, Crit: Knockdown" },
        "Blazing Sword": undefined,
        "Blessed Lance": undefined,
        "Bloodtracker Fighting Claw": undefined,
        "Caspian Battleblade": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "1-H: mat-mod -1, POW 4" },
        "Cat's Paw": undefined,
        "Cleft Spear": undefined,
        "Cleft Sword": undefined,
        "Cloak, Weighted": undefined,
        "Clockwork Injector": { "skill": "Hand Weapon", "mat-mod": -2, "pow": "–", "notes": "1 dmg, injection" },
        "Club": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "Crit: Knockout chance" },
        "Club, Banded": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "Crit: Knockout chance" },
        "Consecrated Halbert": undefined,
        "Cutlass": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "" },
        "Dagger": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 1, "notes": "" },
        "Dagger, Poisoner's": undefined,
        "Deadblow Hammer": undefined,
        "Dueling Buckler": undefined,
        "Durkin Bar": undefined,
        "Electro Lance": undefined,
        "Entrenching Tool, Military": undefined,
        "Fellblade": undefined,
        "Fighting Claws, Pair": undefined,
        "Firebrand": undefined,
        "Flail": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "ignore shields" },
        "Flail, Two-Handed": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "reach, ignore shields, Crit: p.255" },
        "Flame Spear": undefined,
        "Gaff Spear": undefined,
        "Gaff, Hand": undefined,
        "Gaff, Pole": undefined,
        "Garrote": undefined,
        "Garrote, Clockwork": undefined,
        "Halbert": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, +2 charge at, 1-H: at-mod -1, POW 4" },
        "Hand Pick": undefined,
        "Hooked Great Sword": undefined,
        "Ice Axe": undefined,
        "Ice Maul": undefined,
        "Ilena's Chain-Axe": undefined,
        "Katara, Pair": undefined,
        "Knuckledriver": undefined,
        "Knuckledusters": { "skill": "Unarmed Combat", "mat-mod": 0, "pow": 1, "notes": "better knockouts" },
        "Kolas Club": undefined,
        "Kopis": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "+2 charge at, Crit: 1 feat for +1 die dmg" },
        "Lacerator": undefined,
        "Lance": { "skill": "Lance", "mat-mod": 0, "pow": 8, "notes": "reach" },
        "Mace": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "Crit: Knockout chance" },
        "Man Catcher": undefined,
        "Maul": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "Crit: 1 feat slam d3" },
        "Mechanoflail": undefined,
        "Nyss Claymore (FMF)": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "1 feat: boost at" },
        "Nyss Claymore (IKU)": undefined,
        "Nyss Great Sword": undefined,
        "Ogrun Warcleaver": { "skill": "Great Weapon", "mat-mod": -1, "pow": 6, "notes": "reach, +2 charge at" },
        "Orgoth Staff": undefined,
        "Pen, Blade": undefined,
        "Pen, Poison": undefined,
        "Pickaxe": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "special: p. 257" },
        "Pike": undefined,
        "Railman's Adze": undefined,
        "Rapier": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "1 feat boost at and dmg" },
        "Reclaimant Torch": undefined,
        "Relic Blade": undefined,
        "Retractable Lance": undefined,
        "Rynnish Fan": undefined,
        "Sacral Blade": undefined,
        "Shield": { "skill": "Shield", "mat-mod": 0, "pow": 0, "notes": "" },
        "Shield, Combat": { "skill": "Shield", "mat-mod": -1, "pow": 3, "notes": "" },
        "Shield, Karax": undefined,
        "Spear": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "reach, +2 charge at, 1-H: POW 4" },
        "Spear, Cavalry": undefined,
        "Spear, War": undefined,
        "Spike Mail": undefined,
        "Springblade": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 1, "notes": "draw without quick action" },
        "Staff": { "skill": "Great Weapon", "mat-mod": 0, "pow": 3, "notes": "reach, 1 feat: trip at" },
        "Staff, Battle": { "skill": "Great Weapon", "mat-mod": 0, "pow": 4, "notes": "reach, 1 feat: trip at, Crit: Knockout chance" },
        "Stone Great Sword": undefined,
        "Stormcaller and Lightning Rod": undefined,
        "Sword": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 3, "notes": "" },
        "Sword Cane": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 0, "notes": "drawn POW 2" },
        "Sword, Dress": undefined,
        "Sword, Great": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach" },
        "Sword, Praetorian, Pair": undefined,
        "Telescoping Staff": undefined,
        "Tobresh": undefined,
        "Tournament Foil": undefined,
        "Trench Knife": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "alt. Unarmed Combat" },
        "Trench Sword": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "alt. Unarmed Combat" },
        "Trollkin Rune Axe": undefined,
        "Voltaic Halbert": undefined,
        "War Hammer": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "Crit: Knockout chance" }
      };
      
      ikrpg.generator.db.meleeWeapon = meleeWeaponDB;
      
    })();
    
    // ## Ranged Weapon DB [Done for Core Rules] ## \\
    (function() {
      
      var rangedWeaponDB = {
        "Arcus": undefined,
        "Assault Kommando Flamethrower": undefined,
        "Axe, Throwing": { "rng": 6, "skill": "Thrown Weapon", "pow": 3, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Blowtorch": undefined,
        "Blunderbuss": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "1-H: RAT -2", "ammo": "1" },
        "Bola": { "rng": 8, "skill": "Thrown Weapon", "pow": 0, "rat-mod": -2, "notes": "add STR to POW", "ammo": "" },
        "Bomb Lance": undefined,
        "Bombardier Grenade Cannon": undefined,
        "Bow": { "rng": 10, "skill": "Archery", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Bow, Great": { "rng": 10, "skill": "Archery", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Bow, Nyss": { "rng": 12, "skill": "Archery", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Bow, Tharn": undefined,
        "Cannon, Royal Weight": undefined,
        "Cannon-Shield": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Carbine": { "rng": 10, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Chain Gun": undefined,
        "Crossbow": { "rng": 10, "skill": "Crossbow", "pow": 12, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Crossbow, Dual": undefined,
        "Crossbow, Lawbringer": undefined,
        "Crossbow, Repeating": { "rng": 10, "skill": "Crossbow", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "6" },
        "Crucible Arms Model 603": undefined,
        "Deck Gun": undefined,
        "Dual Magelock": undefined,
        "Dueling Pistols": undefined,
        "Duelling Pistols": undefined,
        "Efaarit Hunting Rifle": undefined,
        "Execrator Pistol": undefined,
        "Explosive Cufflinks": undefined,
        "Farrow Pig Iron": undefined,
        "Farrow Razorback": undefined,
        "Field Gun": undefined,
        "Fire Bomb": undefined,
        "Flare Pistol": undefined,
        "Flayer Cannon": undefined,
        "Grenade, Concussion": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Explosive": { "rng": 8, "skill": "Thrown Weapon", "pow": 12, "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Smoke": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Strangle Gas": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Gun Axe": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "", "ammo": "1" },
        "Hand Cannon": { "rng": 12, "skill": "Pistol", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Hand Cannon, Dual": { "rng": 12, "skill": "Pistol", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "2" },
        "Harpoon Gun": { "rng": 10, "skill": "Rifle", "pow": 12, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Incindus": undefined,
        "Injection Pistol": undefined,
        "Javelin": { "rng": 8, "skill": "Thrown Weapon", "pow": 3, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Knife, Throwing": { "rng": 6, "skill": "Thrown Weapon", "pow": 2, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Light Cannon": undefined,
        "Linethrower": undefined,
        "Man-O-War Axe Cannon": undefined,
        "Man-O-War Shield Cannon": undefined,
        "Mini-Slugger": undefined,
        "Mortar": undefined,
        "Ogrun Battle Cannon": { "rng": 12, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "AOE 3, 1-H: RAT -2", "ammo": "1" },
        "Pen, Grenade": undefined,
        "Pen, Shot": undefined,
        "Pistol": { "rng": 8, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Pistol, Collapsible": { "rng": 7, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "easy to hide", "ammo": "1" },
        "Pistol, Holdout": { "rng": 4, "skill": "Pistol", "pow": 8, "rat-mod": 1, "notes": "", "ammo": "1" },
        "Pistol, Magelock": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Pistol, Repeating": { "rng": 8, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Purifier": undefined,
        "Quad-Iron": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "4" },
        "Radcliffe Carbine": { "rng": 13, "skill": "Rifle", "pow": 11, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "5" },
        "Radcliffe Firestorm": undefined,
        "Reiver": undefined,
        "Rifle": undefined,
        "Rifle, Collapsible": { "rng": 10, "skill": "Rifle", "pow": 11, "rat-mod": -1, "notes": "easy to hide", "ammo": "1" },
        "Rifle, Heavy": { "rng": 14, "skill": "Rifle", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Long": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Magelock": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Rifle, Military": { "rng": 10, "skill": "Rifle", "pow": 11, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rilfe, Repeating": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Rockbreaker Spray": undefined,
        "Rocket Tube": undefined,
        "Rynnish Walking Stick": { "rng": 8, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Scattergun": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": 0, "notes": "SP8, 1-H: RAT -2", "ammo": "1" },
        "Skyhammer": undefined,
        "Sling": { "rng": 10, "skill": "Thrown Weapon", "pow": 8, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Slug Gun": { "rng": 4, "skill": "Pistol", "pow": 14, "rat-mod": -1, "notes": "1-H: RAT -2", "ammo": "1" },
        "Slugger": undefined,
        "Snare Gun": undefined,
        "Sword-Cannon, Heavy": { "rng": 10, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "", "ammo": "1" },
        "Sword-Cannon, Repeating": { "rng": 10, "skill": "Rifle", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "5" },
        "Vislovski Carbine": undefined,
        "War Spear": undefined
      };
      
      ikrpg.generator.db.rangedWeapon = rangedWeaponDB;
      
    })();
    
    // ## Benefits DB [all benefits, but only names] ## \\ 
    (function() {
      
      var benefitsDB = { // { description: "" }
        "Additional Study": undefined,
        "Ambidextrous": undefined,
        "Battlefield Coordination": undefined,
        "Beat Back": undefined,
        "Blood Boon": undefined,
        "Cagey": undefined,
        "Combat Caster": undefined,
        "Deft": undefined,
        "Fast Caster": undefined,
        "Feat: Back Swing": undefined,
        "Feat: Bounding Leap": undefined,
        "Feat: Counter Charge": undefined,
        "Feat: Defensive Strike": undefined,
        "Feat: Disarm": undefined,
        "Feat: Dominator": undefined,
        "Feat: Flawless Timing": undefined,
        "Feat: Influence": undefined,
        "Feat: Invulnerable": undefined,
        "Feat: Perfect Plot": undefined,
        "Feat: Plan of Action": undefined,
        "Feat: Powerful Caster": undefined,
        "Feat: Prescient": undefined,
        "Feat: Revitalize": undefined,
        "Feat: Shield Breaker": undefined,
        "Feat: Swashbuckler": undefined,
        "Feat: Quick Cast": undefined,
        "Feat: Quick Thinking": undefined,
        "Feat: Shield Breaker": undefined,
        "Feat: Strength of Will": undefined,
        "Feat: Unconventional Warfare": undefined,
        "Feat: Untouchable": undefined,
        "Feat: Vendetta": undefined,
        "Genius": undefined,
        "Hyper Perception": undefined,
        "Magic Sensitivity": undefined,
        "Occult Secrets": undefined,
        "Photographic Memory": undefined,
        "Preternatural Awareness": undefined,
        "Righteous Anger": undefined,
        "Rune Reader": undefined,
        "Savant": undefined,
        "Sidestep": undefined,
        "Tough": undefined,
        "Virtuoso": undefined,
        "Warding Circle": undefined
      };
      
      ikrpg.generator.db.benefit = benefitsDB;
      
    })();
    
    // ## Abilities DB [all abilities, but only names] ## \\ 
    (function() {
      
      var abilitiesDB = { // { description: "" }
        "'Jack Marshal": undefined,
        "Abomination": undefined,
        "Ace Commander": undefined,
        "Acrobatics": undefined,
        "Adaptable [Urban]": undefined,
        "Adjust Aim": undefined,
        "Advisor": undefined,
        "Aegis": undefined,
        "Always a Deal to be Made": undefined,
        "Ambush": undefined,
        "Anatomical Precision": undefined,
        "Anatomist": undefined,
        "Anestetize": undefined,
        "Animal Control": undefined,
        "Appraise": undefined,
        "Arcane Assassin": undefined,
        "Arcane Defenses": undefined,
        "Arcane Engineer": undefined,
        "Arcane Precision": undefined,
        "Arcane Scholar": undefined,
        "Archer": undefined,
        "Arcing Shot": undefined,
        "Artificer": undefined,
        "Astute": undefined,
        "Astute": undefined,
        "Athanc Shard": undefined,
        "Authority": undefined,
        "Awe Inspiring": undefined,
        "Backstab": undefined,
        "Balm of Dhunia": undefined,
        "Battle Commander": undefined,
        "Battle Plan: Battlefield Coordination": undefined,
        "Battle Plan: Brutal Charge": undefined,
        "Battle Plan: Call to Action": undefined,
        "Battle Plan: Close Fire": undefined,
        "Battle Plan: Coordinated Strike": undefined,
        "Battle Plan: Desperate Pace": undefined,
        "Battle Plan: Go to Ground": undefined,
        "Battle Plan: Orchestrate Fire": undefined,
        "Battle Plan: Press Forward": undefined,
        "Battle Plan: Reconnaissance": undefined,
        "Battle Plan: Relentless Charge": undefined,
        "Battle Plan: Shadow": undefined,
        "Battle Plan: Take Cover": undefined,
        "Bayonet Charge": undefined,
        "Beast Handler": undefined,
        "Beast Manipulation: Dominator": undefined,
        "Beast Manipulation: Enrage": undefined,
        "Beast Manipulation: Medicate": undefined,
        "Beast Manipulation: Toughen": undefined,
        "Berserk": undefined,
        "Big Game Hunter": undefined,
        "Binding": undefined,
        "Black Tongue": undefined,
        "Blade Shield": undefined,
        "Blaster": undefined,
        "Blood Drinker": undefined,
        "Blood Frenzy": undefined,
        "Blood Rites": undefined,
        "Blood Spiller": undefined,
        "Blood Trade": undefined,
        "Bloodletting": undefined,
        "Bloodlust": undefined,
        "Blur of Motion": undefined,
        "Boarding Action": undefined,
        "Bodge": undefined,
        "Body Slam": undefined,
        "Bodyguard": undefined,
        "Bomber": undefined,
        "Bond": undefined,
        "Bone Grinder": undefined,
        "Brawler": undefined,
        "Brew Master": undefined,
        "Broad Stroke": undefined,
        "Bull Rush": undefined,
        "Calm": undefined,
        "Camouflage": undefined,
        "Card Sharp": undefined,
        "Cataphract": undefined,
        "Cautious Advance": undefined,
        "Cavalry Charge": undefined,
        "Cavalry Fighter": undefined,
        "Chain Attack: Bleed Out": undefined,
        "Chain Attack: Body Slam": undefined,
        "Chain Attack: Pin Down": undefined,
        "Chain Attack: Smite": undefined,
        "Charmer": undefined,
        "Choir": undefined,
        "Circular Vision": undefined,
        "Cleave": undefined,
        "Clockwork Transcendence": undefined,
        "Close Shot": undefined,
        "Cold Steel": undefined,
        "Combat Rider": undefined,
        "Combo Strike (Praetorian Sword)": undefined,
        "Communion": undefined,
        "Conditioning": undefined,
        "Conniver": undefined,
        "Consume Essence": undefined,
        "Convergence Warcaster": undefined,
        "Corruptor": undefined,
        "Counter Offer": undefined,
        "Cover Identity": undefined,
        "Covering Fire": undefined,
        "Crackshot": undefined,
        "Craft Rune Shot": undefined,
        "Crossbowman": undefined,
        "Dark Dominion": undefined,
        "Dark Scribe": undefined,
        "Deadly Skill": undefined,
        "Death Mastery": undefined,
        "Defender": undefined,
        "Defensive Line": undefined,
        "Dig In": undefined,
        "Disease Resistance": undefined,
        "Dismember": undefined,
        "Dispel": undefined,
        "Distiller": undefined,
        "Divine Fortitude": undefined,
        "Dodger": undefined,
        "Dominating Presence": undefined,
        "Doom Gaze": undefined,
        "Double Powder Ration": undefined,
        "Draconic Eminence": undefined,
        "Drive: Ancillary Attack": undefined,
        "Drive: Assault": undefined,
        "Drive: Off Road": undefined,
        "Drive: Pronto": undefined,
        "Dual Fighter": undefined,
        "Dual Shot": undefined,
        "Earth Magic": undefined,
        "Electromancer": undefined,
        "Elemental Master": undefined,
        "Elusive Rider": undefined,
        "Empower": undefined,
        "Empower Weapon": undefined,
        "Energy Siphon": undefined,
        "Enigma Cipher": undefined,
        "Evasive Rider": undefined,
        "Exalted": undefined,
        "Exalted Dialogue": undefined,
        "Excruciator": undefined,
        "Expert Rider": undefined,
        "Exterminator": undefined,
        "Extoller": undefined,
        "Eye of the Storm": undefined,
        "Fabricator": undefined,
        "Fall Back": undefined,
        "Fast Cook": undefined,
        "Fast Draw": undefined,
        "Fast Rearm": undefined,
        "Fast Reload": undefined,
        "Fate Blessed": undefined,
        "Fearless": undefined,
        "Fearsome Howl": undefined,
        "Feat of Regeneration": undefined,
        "Fell Call: Cacophony": undefined,
        "Fell Call: Call of Defiance": undefined,
        "Fell Call: Ground Shaker": undefined,
        "Fell Call: Heroic Ballad": undefined,
        "Fell Call: Reverberation": undefined,
        "Fell Call: Signal Call": undefined,
        "Fell Call: Sonic Blast": undefined,
        "Field Alchemist": undefined,
        "Field Marshal: Counter Charge": undefined,
        "Field Marshal: Celestial Harmony": undefined,
        "Field Marshal: Hog Wild": undefined,
        "Field Marshal: Magical Attack": undefined,
        "Field Marshal: Poltergeist": undefined,
        "Field Marshal: Regenerate": undefined,
        "Field Marshal: Relentless Charge": undefined,
        "Field Marshal: Shield Guard": undefined,
        "Field Marshal: Sprint": undefined,
        "Field Marshal: Unyielding": undefined,
        "Find Cover": undefined,
        "Finisher": undefined,
        "Fire in the Hole!": undefined,
        "First to Fight": undefined,
        "Fist of God": undefined,
        "Flash Thief": undefined,
        "Fleet Foot": undefined,
        "Fleet Food": undefined,
        "Flesh of Steel": undefined,
        "Fleshcrafting": undefined,
        "Flying Fists": undefined,
        "Follow Up": undefined,
        "Foresight": undefined,
        "Free Style": undefined,
        "Gang": undefined,
        "Gatekeeper": undefined,
        "Get Away": undefined,
        "Ghost Shield": undefined,
        "Ghost Sight": undefined,
        "Gift of the Beast": undefined,
        "Girded": undefined,
        "Go to Ground": undefined,
        "Goad": undefined,
        "Good Breeding": undefined,
        "Grappler": undefined,
        "Grave Man": undefined,
        "Great Power": undefined,
        "Grenadier": undefined,
        "Gunfighter": undefined,
        "Gunner": undefined,
        "Hack": undefined,
        "Hard": undefined,
        "Hardened Strike": undefined,
        "Haruspex": undefined,
        "Head-Butt": undefined,
        "Heart Eater": undefined,
        "High-Pressure Fire": undefined,
        "Hit em' Low": undefined,
        "Hit the Deck!": undefined,
        "Hulking Presence": undefined,
        "Hunter": undefined,
        "Hunting Ground": undefined,
        "Hyper Awareness": undefined,
        "Imbue Weapon": undefined,
        "Immunity: Cold": undefined,
        "Immunity: Corrosion": undefined,
        "Immunity: Electricity": undefined,
        "Immunity: Fire": undefined,
        "Impelled Companions": undefined,
        "Imperishable Conviction": undefined,
        "Impervious Wall Stance": undefined,
        "Improvised Formula": undefined,
        "Inflict Pain": undefined,
        "Inscribe Formulae": undefined,
        "Inscribe Thrall Rune": undefined,
        "Instructor": undefined,
        "Iron Sentinel": undefined,
        "Iron Will": undefined,
        "Ironhead": undefined,
        "Keen Eyed": undefined,
        "Knife Thrower": undefined,
        "Language": undefined,
        "Legecy of Bragg": undefined,
        "Light Cavalry": undefined,
        "Line Breaker": undefined,
        "Live Drinker": undefined,
        "Load Bearing": undefined,
        "Long-Lived": undefined,
        "Lost in the Crowd": undefined,
        "Low Breeding": undefined,
        "Maestro": undefined,
        "Mage Killer": undefined,
        "Makeshift Engineering": undefined,
        "Maltreatment": undefined,
        "Man of Iron": undefined,
        "Marksman": undefined,
        "Master Chymist": undefined,
        "Maul": undefined,
        "Meat Alchemy": undefined,
        "Mend Flesh": undefined,
        "Mount Attack": undefined,
        "Mounted: Bounding Leap": undefined,
        "Mounted: Counter Charge": undefined,
        "Mounted: Outride": undefined,
        "Natural Leader": undefined,
        "Necromancer": undefined,
        "Night Fighter": undefined,
        "Oath of Silence": undefined,
        "Onslaught": undefined,
        "Opening Salvo": undefined,
        "Ossify": undefined,
        "Overpower": undefined,
        "Overtake": undefined,
        "Pack Hunter": undefined,
        "Pain Flow": undefined,
        "Pain Monger": undefined,
        "Parry": undefined,
        "Patch Up": undefined,
        "Pathfinder": undefined,
        "Perfect Timing": undefined,
        "Poison Glaze": undefined,
        "Poison Resistance": undefined,
        "Poisoner": undefined,
        "Poltergeist": undefined,
        "Port of Call": undefined,
        "Possession": undefined,
        "Power of Truth": undefined,
        "Powerstrain": undefined,
        "Precision Strike": undefined,
        "Press the Attack": undefined,
        "Previlege": undefined,
        "Prowl": undefined,
        "Pursuit": undefined,
        "Quick Chymist": undefined,
        "Quick Work": undefined,
        "Rallying Cry": undefined,
        "Range Amplifier": undefined,
        "Reclaim": undefined,
        "Reed in the Wind": undefined,
        "Relentless Advance": undefined,
        "Relentless Charge": undefined,
        "Ram": undefined,
        "Remedy": undefined,
        "Renowned": undefined,
        "Resonance: Devourer Warbeast": undefined,
        "Resonance: Farrow Warbeast": undefined,
        "Resonance: Skorne Warbeast": undefined,
        "Resonance: Swamp Warbeast": undefined,
        "Resonance: Trollblood Warbeast": undefined,
        "Resonance: Wold": undefined,
        "Resourceful": undefined,
        "Restoration": undefined,
        "Retaliatory Strike": undefined,
        "Return Fire": undefined,
        "Rhulic Warcaster": undefined,
        "Ride-by Attack": undefined,
        "Riposte": undefined,
        "Rock Solid": undefined,
        "Rock Steady": undefined,
        "Roll with It": undefined,
        "Runesmith": undefined,
        "Saddle Shot": undefined,
        "Sanguine Bond": undefined,
        "Scent": undefined,
        "Scoping it Out": undefined,
        "Scorched Earth": undefined,
        "Scrounge": undefined,
        "Sentry": undefined,
        "Serenity": undefined,
        "Serpent Strike": undefined,
        "Set Defence": undefined,
        "Shadow Magic": undefined,
        "Shield Guard": undefined,
        "Shield Slam": undefined,
        "Shifting Sands Stance": undefined,
        "Shootist": undefined,
        "Signal Howls": undefined,
        "Signal Language": undefined,
        "Silence": undefined,
        "Silver Tongued": undefined,
        "Skilled Trapper": undefined,
        "Snacking": undefined,
        "Snag & Slash": undefined,
        "Snap Fire": undefined,
        "Sniper": undefined,
        "Snow Wreathed": undefined,
        "Souie!": undefined,
        "Soul Guard": undefined,
        "Soul Taker": undefined,
        "Soul Thief": undefined,
        "Soulstorm": undefined,
        "Spawning Savant": undefined,
        "Specialization": undefined,
        "Spirit Eater": undefined,
        "Spirit Guide": undefined,
        "Spirit Vision": undefined,
        "Spiritual Harmony": undefined,
        "Sprint": undefined,
        "Staredown": undefined,
        "Stay Death": undefined,
        "Steady": undefined,
        "Steam Jockey": undefined,
        "Steam Savant": undefined,
        "Steamo": undefined,
        "Stone Scavenger": undefined,
        "Stone Warder": undefined,
        "Stone-and-Mortars Stance": undefined,
        "Stonecutter": undefined,
        "Storm Booster": undefined,
        "Strangler": undefined,
        "Street Survivor": undefined,
        "Street Sweeper": undefined,
        "Strength of Arms": undefined,
        "Student of Kexorus": undefined,
        "Studious": undefined,
        "Sucker!": undefined,
        "Suppressing Fire": undefined,
        "Survivalist": undefined,
        "Swift Hunter": undefined,
        "Swift Rider": undefined,
        "Tactical Coordination": undefined,
        "Take Down": undefined,
        "Tap Fury": undefined,
        "Targeteer": undefined,
        "Team Leader": undefined,
        "Team Player": undefined,
        "Test the Wind": undefined,
        "Thick Skin": undefined,
        "Tinkerer": undefined,
        "Torture": undefined,
        "Traceless Path": undefined,
        "Tracker": undefined,
        "Trained Rider": undefined,
        "Transcend the Flesh": undefined,
        "Treewalker": undefined,
        "Trick Rider": undefined,
        "Trip": undefined,
        "Troll Speaker": undefined,
        "Truth Reader": undefined,
        "Tune Up": undefined,
        "Two-Weapon Fighting": undefined,
        "Unhallowed": undefined,
        "University Education": undefined,
        "Urcaen's Gate": undefined,
        "Vampiric Harvest": undefined,
        "Vessel Upgrade": undefined,
        "Vivisectionist": undefined,
        "Warlock Bond": undefined,
        "Waylay": undefined,
        "Weapon Master (Javelin)": undefined,
        "Weapon Master (Praetorian Sword)": undefined,
        "Weatherman": undefined,
        "Weather Vane": undefined,
        "Whelp Companion": undefined,
        "Whirlwind": undefined,
        "Whispers of the Creator": undefined,
        "Wold Mastery": undefined,
        "Wolf Protector": undefined
      };
      
      ikrpg.generator.db.ability = abilitiesDB;
      
    })();
    
    // ## Capacitor DB ## \\
    (function() {
      
      var capacitorEntries = $.grep(ikrpg.index.data, function(entry) {
        return entry.category == "Mechanika" && entry.subcategory == "Capacitor";
      });
      
      var names = $.map(capacitorEntries, function(capacitor) {
        return capacitor.name;
      });
      
      ikrpg.generator.db.capacitor = names;
      
    })();
    
    // ## Runeplate DB [all runeplates, but only names] ## \\
    (function() {
      
      var runplateDB = {
        "Accuracy": undefined,
        "Aegis": undefined,
        "Arcane Disruptor": undefined,
        "Arcane Force": undefined,
        "Arcane Warding": undefined,
        "Backfire": undefined,
        "Balefire": undefined,
        "Blast": undefined,
        "Blessed": undefined,
        "Bond Plate": undefined,
        "Bounding": undefined,
        "Cold": undefined,
        "Compensator": undefined,
        "Corruption": undefined,
        "Detonate": undefined,
        "Disbinder": undefined,
        "Electrocutioner": undefined,
        "Flame": undefined,
        "Fleet": undefined,
        "Fogbank": undefined,
        "Grievous Wounds": undefined,
        "Halo of Fire": undefined,
        "Headtaker": undefined,
        "Heightened Strength": undefined,
        "Incendiary": undefined,
        "Light": undefined,
        "Light Eater": undefined,
        "Lockout": undefined,
        "Magnetism": undefined,
        "Mechanikal Seizure": undefined,
        "Natation": undefined,
        "Obscuration": undefined,
        "Quicken": undefined,
        "Reciprocity": undefined,
        "Repulsor": undefined,
        "Silencer": undefined,
        "Spell Ward": undefined,
        "Stall": undefined,
        "Steady": undefined,
        "Vitriol": undefined,
        "Whiplash": undefined
      };
      
      ikrpg.generator.db.runeplate = runplateDB;
      
    })();
    
  })();
  
  
  // # Fill character sheet input fields with DB data # \\
  (function() {
    
    // ## Spell changes ## \\
    (function() {
      
      var db = ikrpg.generator.db.spell;
      
      // ### Fill spell data on title change ### \\
      (function() {
        
        $(".character-sheet .spell .title").change(function(event) {
          var input = $(event.target);
          var title = input.val();
          var spell = input.parent();
        
          var spellData = db[title];
          if(spellData) {
            spell.find(".cost").val(spellData["cost"]);
            spell.find(".rng").val(spellData["rng"]);
            spell.find(".aoe").val(spellData["aoe"]);
            spell.find(".pow").val(spellData["pow"]);
            spell.find(".up").val(spellData["up"]);
            spell.find(".off").val(spellData["off"]);
            spell.find(".description").val(spellData["description"]);
          }
        });
        
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = $.grep(Object.keys(db), function(key) {
          return db[key];
        });
        
        function buildAutocomplete(selector) {
          $(selector + " .title").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .spell").each(function(index, skill) {
          buildAutocomplete(".character-sheet #"+$(skill).attr("id"));
        });
      })();
      
    })();
    
    // ## Skill changes ## \\
    (function() {
      
      var db = ikrpg.generator.db.skill;
      
      // ### Fill skill data on title change ### \\
      (function() {
        
        $(".character-sheet .skill .title").change(function(event) {
          var input = $(event.target);
          var title = input.val();
          var skill = input.parent();
        
          var skillBaseName = title.replace(/(\(.*\))+/g, "").replace(/\s+$/, "");
        
          var skillData = db[skillBaseName];
          if(skillData && skillData.length > 0) {
            var stat = skillData[0];
            var lowerStat = stat.toLowerCase();
            
            var statValue = $(".character-sheet #"+lowerStat).val();
            if(statValue) {
              skill.find(".stat").val(lowerStat);
              skill.find(".base").val(statValue);
              skill.find(".lvl").val(0);
              skill.find(".sum").val(statValue);
              
              if(skillData.length > 1) {
                var stat = skillData[1];
                var lowerStat = stat.toLowerCase();
              
                var statValue = $(".character-sheet #"+lowerStat).val();
                if(statValue) {
                
                  function findNextEmptySkill(currentSkill) {
                    var nextSkill = currentSkill.next(".skill");
                    if(nextSkill) {
                      if(nextSkill.find(".title").val() == "") {
                        return nextSkill;
                      } else {
                        return findNextEmptySkill(nextSkill);
                      }
                    } else {
                      return null;
                    }
                  }
                
                  var nextEmptySkill = findNextEmptySkill(skill);
                  if(nextEmptySkill) {
                    nextEmptySkill.find(".title").val(title);
                    nextEmptySkill.find(".stat").val(lowerStat);
                    nextEmptySkill.find(".base").val(statValue);
                    nextEmptySkill.find(".lvl").val(0);
                    nextEmptySkill.find(".sum").val(statValue);
                  }
                }
              }
            } else if(stat == "SOC") {
              skill.find(".stat").val("soc");
              skill.find(".base").val("*");
              skill.find(".lvl").val(0);
              skill.find(".sum").val("*");
            }
          }
        });
      
      })();
      
      // ### Recompute sum on skill level change ### \\
      (function() {
      
        $(".character-sheet .skill .lvl").change(function(event) {
          var input = $(event.target);
          var skill = input.parent();
          var lvlValue = parseInt(input.val());
          var baseValue = parseInt(skill.find(".base").val());
          if((lvlValue || lvlValue == 0) && (baseValue || baseValue == 0)) {
            var sum = skill.find(".sum");
            sum.val(lvlValue + baseValue);
            sum.trigger("change");
          }
        });
      
      })();
      
      // ### Recompute sum on parent set value change ### \\
      (function() {
      
        $(".character-sheet .skill .base").change(function(event) {
          var input = $(event.target);
          var skill = input.parent();
          var baseValue = parseInt(input.val());
          var lvlValue = parseInt(skill.find(".lvl").val());
          if((lvlValue || lvlValue == 0) && (baseValue || baseValue == 0)) {
            var sum = skill.find(".sum");
            sum.val(lvlValue + baseValue);
            sum.trigger("change");
          }
        });
      
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = $.grep(Object.keys(db), function(key) {
          return db[key];
        });
        
        function buildAutocomplete(selector) {
          $(selector + " .title").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .skill").each(function(index, skill) {
          buildAutocomplete(".character-sheet #"+$(skill).attr("id"));
        });
      })();
      
    })();
    
    // ## Stat changes ## \\
    (function() {
      
      // ### Update skill parent set value on stat change ### \\
      (function() {
      
        $(".character-sheet .stat").change(function(event) {
          var input = $(event.target);
          var stat = input.attr("id");
          $('.character-sheet .skill .stat[value="'+stat+'"]').each(function(index, s) {
            var skill = $(s).parent();
            var base = skill.find(".base");
            base.val(input.val());
            base.trigger("change");
          });
        });
      
      })();
      
      // ### Update Willpower on PHY or INT change ### \\
      (function() {
        
        $(".character-sheet #phy, .character-sheet #int").change(function(event) {
          var phyInput = $(".character-sheet #phy");
          var intInput = $(".character-sheet #int");
          var phy = parseInt(phyInput.val());
          var int = parseInt(intInput.val());
          if((phy || phy == 0) && (int || int == 0)) {
            $(".character-sheet #wil").val(phy + int);
          }
        });
        
      })();
      
      // ### Update SPD on computed SPD change ### \\
      (function() {
        
        $(".character-sheet #computed-spd").change(function(event) {
          var input = $(event.target);
          var computedSpd = parseInt(input.val()) || 0;
          var spdMod = parseInt($(".character-sheet #wornarmor1 .spd").val()) || 0;
          
          $(".character-sheet #spd").val(computedSpd - spdMod);
        })
        
      })();
      
    })();
    
    // ## Ability changes ## \\
    (function() {
      
      var db = ikrpg.generator.db.ability;
      
      // ### Update page value on ability change ### \\
      (function() {
        
        var data = ikrpg.index.data;
        
        $(".character-sheet .ability").change(function(event) {
          var input = $(event.target);
          var title = input.val();
          var ability = input.parent();
          var entry = $.grep(data, function(e) { return e["name"] == title; });
          if(entry && entry.length > 0) {
            var page = entry[0]["page"];
            ability.find(".page").val(page);
          }
        });
      
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var benefitDB = ikrpg.generator.db.benefit;
        
        var source = $.merge(Object.keys(db), Object.keys(benefitDB));
        
        function buildAutocomplete(selector) {
          $(selector + " .title").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .ability").each(function(index, ability) {
          buildAutocomplete(".character-sheet #"+$(ability).attr("id"));
        });
      })();
      
    })();
    
    // ## Ranged Weapons ## \\
    (function() {
      
      var db = ikrpg.generator.db.rangedWeapon;
      
      // ### Update on name change ### \\
      (function() {
        
        $(".character-sheet #rat1 .name, .character-sheet #rat2 .name").change(function(event) {
          var input = $(event.target);
          var title = input.val();
          var rangedWeapon = input.parent();
          
          // remove previously remembered skill and rat mod
          rangedWeapon.find(".skill").val("");
          rangedWeapon.find(".ratmod").val("");
          
          var rangedWeaponData = db[title];
          
          if(rangedWeaponData) {
            rangedWeapon.find(".rng").val(rangedWeaponData["rng"]);
            rangedWeapon.find(".pow").val(rangedWeaponData["pow"]);
            rangedWeapon.find(".notes").val(rangedWeaponData["notes"]);
            rangedWeapon.find(".ammo").val(rangedWeaponData["ammo"]);
            rangedWeapon.find(".ratmod").val(rangedWeaponData["rat-mod"]);
            
            var skillName = rangedWeaponData["skill"];
            var skills = $.grep($(".character-sheet .skill .title"), function(input) { return $(input).val() == skillName; });
            
            var skillDB = ikrpg.generator.db.skill;
            var statNames = skillDB[skillName];
            
            if(skills && skills.length > 0) {
              var skill = $(skills[0]);
              var lvl = parseInt(skill.parent().find(".lvl").val()) || 0;
              
              if(statNames && statNames.length > 0) {
                var statName = statNames[0].toLowerCase();
                var stat = parseInt($(".character-sheet #"+statName).val()) || 0;
                
                var ratMod = parseInt(rangedWeaponData["rat-mod"]);
                
                rangedWeapon.find(".rat").val(stat + lvl + ratMod);
              } else {
                rangedWeapon.find(".rat").val("");
              }
              rangedWeapon.find(".skill").val(skillName);
            } else {
              rangedWeapon.find(".skill").val("");
              rangedWeapon.find(".rat").val("");
            }
          }
        });
        
      })();
      
      // ### Update RAT on skill lvl or sum change ### \\
      (function() {
        
        $(".character-sheet .skill .lvl, .character-sheet .skill .sum").change(function(event) {
          var input = $(event.target);
          var skill = input.parent();
          var title = skill.find(".title").val();
          var base = parseInt(skill.find(".base").val()) || 0;
          var lvl = parseInt(skill.find(".lvl").val()) || 0;
          
          var rangedWeaponSkills = $(".character-sheet #rat1 .skill[value='"+title+"'], .character-sheet #rat2 .skill[value='"+title+"']");
          
          rangedWeaponSkills.each(function(index, rangedWeaponSkill) {
            var rangedWeapon = $(rangedWeaponSkill).parent();
            
            var ratMod = parseInt(rangedWeapon.find(".ratmod").val()) || 0;
            rangedWeapon.find(".rat").val(base + lvl + ratMod);
          });
        });
        
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = $.grep(Object.keys(db), function(key) {
          return db[key];
        });
        
        function buildAutocomplete(selector) {
          $(selector + " .name").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        buildAutocomplete(".character-sheet #rat1");
        buildAutocomplete(".character-sheet #rat2");
      })();
      
    })();
    
    // ## Melee Weapons ## \\
    (function() {
      
      var db = ikrpg.generator.db.meleeWeapon;
      
      // ### Update on name change ### \\
      (function() {
        
        $(".character-sheet #mat1 .name, .character-sheet #mat2 .name").change(function(event) {
          var input = $(event.target);
          var name = input.val();
          var meleeWeapon = input.parent();
          
          // remove previously remembered skill, rat mod, and pow
          meleeWeapon.find(".skill").val("");
          meleeWeapon.find(".matmod").val("");
          meleeWeapon.find(".pow").val("");
          
          var meleeWeaponData = db[name];
          if(meleeWeaponData) {
            meleeWeapon.find(".notes").val(meleeWeaponData["notes"]);
            meleeWeapon.find(".skill").val(meleeWeaponData["skill"]);
            meleeWeapon.find(".matmod").val(meleeWeaponData["mat-mod"]);
            meleeWeapon.find(".pow").val(meleeWeaponData["pow"]);
            
            var skillName = meleeWeaponData["skill"];
            var skills = $.grep($(".character-sheet .skill .title"), function(input) { return $(input).val() == skillName; });
            
            if(skills && skills.length > 0) {
              var skill = $(skills[0]).parent();
              var sum = parseInt(skill.find(".sum").val()) || 0;
              var matMod = parseInt(meleeWeaponData["mat-mod"]);
              
              meleeWeapon.find(".mat").val(sum + matMod);
            } else {
              meleeWeapon.find(".mat").val("");
            }
            
            var str = parseInt($(".character-sheet #str").val()) || 0;
            if(str || str == 0) {
              var pow = parseInt(meleeWeaponData["pow"]);
              meleeWeapon.find(".ps").val(pow + str);
            } else {
              meleeWeapon.find(".ps").val("");
            }
          }
        });
        
      })();
      
      // ### Update MAT on skill lvl or sum change ### \\
      (function() {
        
        $(".character-sheet .skill .lvl, .character-sheet .skill .sum").change(function(event) {
          var input = $(event.target);
          var skill = input.parent();
          var title = skill.find(".title").val();
          var base = parseInt(skill.find(".base").val()) || 0;
          var lvl = parseInt(skill.find(".lvl").val()) || 0;
          
          var meleeWeaponSkills = $(".character-sheet #mat1 .skill[value='"+title+"'], .character-sheet #mat2 .skill[value='"+title+"']");
          
          meleeWeaponSkills.each(function(index, meleeWeaponSkill) {
            var meleeWeapon = $(meleeWeaponSkill).parent();
            
            var matMod = parseInt(meleeWeapon.find(".matmod").val()) || 0;
            meleeWeapon.find(".mat").val(base + lvl + matMod);
          });
        });
        
      })();
      
      // ### Update P+S on STR change ### \\
      (function() {
        
        $(".character-sheet #str").change(function(event) {
          var input = $(event.target);
          var str = parseInt(input.val());
          
          $(".character-sheet #mat1, .character-sheet #mat2").each(function(index, mat) {
            var name = $(mat).find(".name").val();
            if(name) {
              var pow = parseInt($(mat).find(".pow").val()) || 0;
              $(mat).find(".ps").val(pow + str);
            }
          });
        });
        
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = $.grep(Object.keys(db), function(key) {
          return db[key];
        });
        
        function buildAutocomplete(selector) {
          $(selector + " .name").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        buildAutocomplete(".character-sheet #mat1");
        buildAutocomplete(".character-sheet #mat2");
      })();
      
    })();
    
    // ## Computed Values (DEF, ARM, INI, CMD) ## \\
    (function() {
      
      // ### Update total DEF ### \\
      (function() {
        
        $(".character-sheet #computed-spd, .character-sheet #agl, .character-sheet #per, .character-sheet #defracialmodifier, .character-sheet #defequipmentmodifiers").change(function() {
          var spd = parseInt($(".character-sheet #computed-spd").val()) || 0;
          var agl = parseInt($(".character-sheet #agl").val()) || 0;
          var per = parseInt($(".character-sheet #per").val()) || 0;
          var defracialmodifier = parseInt($(".character-sheet #defracialmodifier").val()) || 0;
          var defequipmentmodifiers = parseInt($(".character-sheet #defequipmentmodifiers").val()) || 0;
          
          if((spd || spd == 0) && (agl || agl == 0) && (per || per == 0) && (defracialmodifier || defracialmodifier == 0) && (defequipmentmodifiers || defequipmentmodifiers == 0)) {
            $(".character-sheet #def").val(spd + agl + per + defracialmodifier + defequipmentmodifiers);
          }
        });
        
      })();
      
      // ### Update total ARM ### \\
      (function() {
        
        $(".character-sheet #phy, .character-sheet #armshieldmodifier, .character-sheet #armarmormodifiers, .character-sheet #armothermodifiers").change(function() {
          var phy = parseInt($(".character-sheet #phy").val()) || 0;
          var armshieldmodifier = parseInt($(".character-sheet #armshieldmodifier").val()) || 0;
          var armarmormodifiers = parseInt($(".character-sheet #armarmormodifiers").val()) || 0;
          var armothermodifiers = parseInt($(".character-sheet #armothermodifiers").val()) || 0;
                    
          if((phy || phy == 0) && (armshieldmodifier || armshieldmodifier == 0) && (armarmormodifiers || armarmormodifiers == 0) && (armothermodifiers || armothermodifiers == 0)) {
            $(".character-sheet #arm").val(phy + armshieldmodifier + armarmormodifiers + armothermodifiers);
          }
        });
        
      })();
      
      // ### Update ARM shield modifier on Shield skill change ### \\
      (function() {
        
        $(".character-sheet .skill .lvl").change(function(event) {
          var input = $(event.target);
          var lvl = input.val();
          var skill = input.parent();
          var name = skill.find(".title").val();
          
          if(name == "Shield") {
            var mod = $(".character-sheet #armshieldmodifier");
            mod.val(lvl);
            mod.trigger("change");
          }
        });
        
      })();
      
      // ### Update total INI ### \\
      (function() {
        
        $(".character-sheet #computed-spd, .character-sheet #prw, .character-sheet #per, .character-sheet #iniequipmentmodifiers, .character-sheet #iniadditionalmodifiers").change(function() {
          var spd = parseInt($(".character-sheet #computed-spd").val()) || 0;
          var prw = parseInt($(".character-sheet #prw").val()) || 0;
          var per = parseInt($(".character-sheet #per").val()) || 0;
          var iniequipmentmodifiers = parseInt($(".character-sheet #iniequipmentmodifiers").val()) || 0;
          var iniadditionalmodifiers = parseInt($(".character-sheet #iniadditionalmodifiers").val()) || 0;
          
          if((spd || spd == 0) && (prw || prw == 0) && (per || per == 0) && (iniequipmentmodifiers || iniequipmentmodifiers == 0) && (iniadditionalmodifiers || iniadditionalmodifiers == 0)) {
            $(".character-sheet #ini").val(spd + prw + per + iniequipmentmodifiers + iniadditionalmodifiers);
          }
        });
        
      })();
      
      // ### Update total CMD ### \\
      (function() {
        
        $(".character-sheet #int, .character-sheet #cmdcommandskill, .character-sheet #cmdabilitymodifier").change(function() {
          var int = parseInt($(".character-sheet #int").val()) || 0;
          var cmdcommandskill = parseInt($(".character-sheet #cmdcommandskill").val()) || 0;
          var cmdabilitymodifier = parseInt($(".character-sheet #cmdabilitymodifier").val()) || 0;
          
          if((int || int == 0) && (cmdcommandskill || cmdcommandskill == 0) && (cmdabilitymodifier || cmdabilitymodifier == 0)) {
            $(".character-sheet #cmd").val(int + cmdcommandskill + cmdabilitymodifier);
          }
        });
        
      })();
      
      // ### Update CMD command skill on Command skill change ### \\
      (function() {
        
        $(".character-sheet .skill .lvl").change(function(event) {
          var input = $(event.target);
          var lvl = input.val();
          var skill = input.parent();
          var name = skill.find(".title").val();
          
          if(name == "Command") {
            var mod = $(".character-sheet #cmdcommandskill");
            mod.val(lvl);
            mod.trigger("change");
          }
        });
        
      })();
      
    })();
    
    // ## Worn Armor changes ## \\ 
    (function() {
      
      var db = ikrpg.generator.db.wornArmor;
      
      // ### Name changes ### \\
      (function() {
        
        $(".character-sheet .wornarmor .name").change(function(event) {
          var input = $(event.target);
          var name = input.val();
          var wornArmor = input.parent();
          
          var wornArmorData = db[name];
          if(wornArmorData) {
            wornArmor.find(".description").val(wornArmorData["description"]);
            wornArmor.find(".spd").val(wornArmorData["spd"]);
            wornArmor.find(".def").val(wornArmorData["def"]);
            wornArmor.find(".arm").val(wornArmorData["arm"]);
            
            wornArmor.find(".spd").trigger("change");
            wornArmor.find(".def").trigger("change");
            wornArmor.find(".arm").trigger("change");
          }
        });
        
      })();
      
      // ### wornarmor1 changes ### \\
      (function() {
        
        // #### wornarmor1 SPD change #### \\
        (function() {
          
          $(".character-sheet #wornarmor1 .spd").change(function(event) {
            var input = $(event.target);
            var spdMalus = input.val();
            if(spdMalus == "") {
              spdMalus = 0;
            }
            var spd = parseInt($(".character-sheet #spd").val());
            
            $(".character-sheet #computed-spd").val(spd + parseInt(spdMalus));
          });
          
        })();
        
        // #### wornarmor1 DEF change #### \\
        (function() {
          
          $(".character-sheet #wornarmor1 .def").change(function(event) {
            var input = $(event.target);
            var defMalus = input.val();
            if(defMalus == "") {
              defMalus = 0;
            }
            var mods = $(".character-sheet #defequipmentmodifiers");
            mods.val(defMalus);
            mods.trigger("change");
          });
          
        })();
        
        // #### wornarmor1 ARM change #### \\
        (function() {
          
          $(".character-sheet #wornarmor1 .arm").change(function(event) {
            var input = $(event.target);
            var armBonus = input.val();
            if(armBonus == "") {
              armBonus = 0;
            }
            var mods = $(".character-sheet #armarmormodifiers");
            mods.val(armBonus);
            mods.trigger("change");
          });
          
        })();
        
      })();
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = $.grep(Object.keys(db), function(key) {
          return db[key];
        });
        
        function buildAutocomplete(selector) {
          $(selector + " .name").autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .wornarmor").each(function(index, wornArmor) {
          buildAutocomplete(".character-sheet #"+$(wornArmor).attr("id"));
        });
      })();
      
    })();
    
    // ## Capacitor ## \\
    (function() {
      
      var db = ikrpg.generator.db.capacitor;
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = db;
        
        function buildAutocomplete(selector, clazz) {
          $(selector + " " + clazz).autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .capacitor").each(function(index, capacitor) {
          buildAutocomplete(".character-sheet #"+$(capacitor).attr("id"));
        });
        
        $(".character-sheet .mechanika").each(function(index, mechanika) {
          buildAutocomplete(".character-sheet #"+$(mechanika).attr("id"), ".capacitor");
        });
      })();
      
    })();
    
    // ## Runeplate ## \\
    (function() {
      
      var db = ikrpg.generator.db.runeplate;
      
      // ### Autocomplete ### \\
      (function() {
        
        var source = Object.keys(db);
        
        function buildAutocomplete(selector, clazz) {
          $(selector + " " + clazz).autocomplete({
            appendTo: selector,
            minLength: 0,
            source: source,
            select: function(event, ui) {
              event.target.value = ui.item.value;
              $(event.target).trigger("change");
            }
          });
        }
        
        $(".character-sheet .runeplate").each(function(index, runeplate) {
          buildAutocomplete(".character-sheet #"+$(runeplate).attr("id"), ".title");
        });
        
        $(".character-sheet .mechanika").each(function(index, mechanika) {
          buildAutocomplete(".character-sheet #"+$(mechanika).attr("id"), ".runeplate");
        });
      })();
      
    })();
    
  })();
  
  
  // # Character Generator Data DSL # \\
  (function() {
    
    // ## Character Generator Control Structures ## \\
  
    function HeroNumber(key, value) {
      this.key = key;
      this.value = value;
      this.html = function() {
        var str = '';
        str += '<tr>\n';
        str += '    <td>'+this.key+'</td>\n';
        str += '    <td><input class="'+this.key+'" type="number" data-type="number" min="'+this.value+'" max="'+this.value+'" value="'+this.value+'" disabled /></td>\n';
        str += '</tr>\n';
      
        return str;
      };
    }
    function number(key, value) {
      return new HeroNumber(key, value);
    }

    function HeroRange(key, min, max) {
      this.key = key;
      this.min = min;
      this.max = max;
      this.html = function() {
        var str = '';
        str += '<tr>\n';
        str += '    <td>'+this.key+'</td>\n';
        str += '    <td><input class="'+this.key+'" type="number" data-type="number" min="'+this.min+'" max="'+this.max+'" value="'+this.min+'" /></td>\n';
        str += '</tr>\n';
      
        return str;
      };
    }
    function range(key, min, max) {
      return new HeroRange(key, min, max);
    }

    function HeroString(key, value) {
      this.key = key;
      this.value = value;
      this.html = function() {
        var str = '';
        str += '<tr>\n';
        str += '    <td>'+this.key+'</td>\n';
        str += '    <td><input class="'+this.key+'" type="text" data-type="text" value="'+this.value+'" disabled /></td>\n';
        str += '</tr>\n';
      
        return str;
      };
    }
    function string(key, value) {
      return new HeroString(key, value);
    }

    function HeroListItem(key, value) {
      this.key = key;
      this.value = value;
      this.html = function() {
        var str = '';
        str += '<tr>\n';
        str += '    <td>'+this.key+'</td>\n';
        str += '    <td><input class="'+this.key+'" type="text" data-type="array" value="'+this.value+'" disabled /></td>\n';
        str += '</tr>\n';
      
        return str;
      };
    }
    function listItem(key, value) {
      return new HeroListItem(key, value);
    }

    function HeroList(key, listItems) {
      this.key = key;
      this.listItems = listItems;
      this.html = function() {
        var htmls = $.map(this.listItems, function(item) { return listItem(key, item).html(); });
        return mkString(htmls, "\n");
      };
    }
    function list(key, listItems) {
      return new HeroList(key, listItems);
    }

    function HeroNumberPair(key, value) {
      this.key = key;
      this.value = value;
      this.html = function() {
        return '<option class="'+this.key+'" data-type="number" value="'+this.value+'">'+this.key+': '+this.value+'</option>\n';
      };
    }
    function numberPair(key, value) {
      return new HeroNumberPair(key, value);
    }
    function numberPairs(key, values) {
      return $.map(values, function(value) { return numberPair(key, value); });
    }

    function HeroArrayPair(key, value) {
      this.key = key;
      this.value = value;
      this.html = function() {
        return '<option class="'+this.key+'" data-type="array" value="'+this.value+'">'+this.key+': '+this.value+'</option>\n';
      };
    }
    function arrayPair(key, value) {
      return new HeroArrayPair(key, value);
    }
    function arrayPairs(key, values) {
      return $.map(values, function(value) { return arrayPair(key, value); });
    }

    function HeroChoices(pairs, label) {
      this.pairs = pairs;
      this.html = function() {
        var str = '';
        str += '<tr>\n';
        if(label) str += '    <td><label>'+label+':</label></td>\n';
        str += '    <td><select multiple>\n';
        str += mkString($.map(pairs, function(pair) { return pair.html(); }), "\n        ", "", "\n");
        str += '    </select></td>\n';
        str += '</tr>\n';
      
        return str;
      };
    }
    function choices(pairs, label) {
      return new HeroChoices(pairs, label);
    }
  
    
    // ## Character Generator Keywords ## \\
  
    var _race = "race";
    var _PHY = "PHY";
    var _SPD = "SPD";
    var _STR = "STR";
    var _AGL = "AGL";
    var _PRW = "PRW";
    var _POI = "POI";
    var _INT = "INT";
    var _ARC = "ARC";
    var _PER = "PER";
    var _PHY_max = "PHY max"
    var _SPD_max = "SPD max";
    var _STR_max = "STR max";
    var _AGL_max = "AGL max";
    var _PRW_max = "PRW max";
    var _POI_max = "POI max";
    var _INT_max = "INT max";
    var _ARC_max = "ARC max";
    var _PER_max = "PER max";
    var _languages = "languages";
    var _height = "height";
    var _weight = "weight";
    var _abilities = "abilities";
    var _connections = "connections";
    var _DEF_racial_modifier = "DEF racial modifier";
    var _notes = "notes";
    var _benefits = "benefits";
    var _archetype = "archetype";
    var _careers = "careers";
    var _military_skills = "military skills";
    var _occupational_skills = "occupational skills";
    var _gold = "gold";
    var _gear = "gear";
    var _spells = "spells";
    var _ranged_weapons = "ranged weapons";
    var _melee_weapons = "melee weapons";
    var _armors = "armors";
    var _adventuring_company = "adventuring company";
    
    
    // ## Character Generator Data ## \\
    
    var languages = [
      "Aeric",
      "Caspian",
      "Cygnaran",
      "Five Cant",
      "Gobberish",
      "Grun",
      "Idrian",
      "Khadoran",
      "Khurzic",
      "Kossite",
      "Llaelese",
      "Molgur",
      "Molgur-Og",
      "Molgur-Tharn",
      "Molgur-Trul",
      "Morridane",
      "Ordic",
      "Quor-gar",
      "Quor-og",
      "Rhulic",
      "Satyx",
      "Scharde",
      "Shyr",
      "Sulese",
      "Telgesh",
      "Thrallspeak",
      "Thurian",
      "Umbrean"
    ];
    var races = {
      "Blighted Ogrun": [],
      "Bog Trog": [],
      "Dwarf": [
        string(_race, "Dwarf"),
        number(_PHY, 6),
        number(_SPD, 4),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 4),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 5),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 5),
        number(_ARC_max, 5),
        number(_PER_max, 4),
        listItem(_languages, "Rhulic"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 47, 60),
        range(_weight, 105, 190),
        listItem(_abilities, "Load Bearing"),
        listItem(_connections, "dwarven clan")
      ],
      "Efaarit": [],
      "Farrow": [],
      "Gatorman": [],
      "Gobber": [
        string(_race, "Gobber"),
        number(_PHY, 4),
        number(_SPD, 6),
        number(_STR, 3),
        number(_AGL, 4),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 6),
        number(_SPD_max, 7),
        number(_STR_max, 4),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 4),
        number(_PER_max, 4),
        listItem(_languages, "Gobberish"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 32, 42),
        range(_weight, 38, 60),
        listItem(_benefits, "Deft"),
        number(_DEF_racial_modifier, 1),
        listItem(_notes, "Gobbers cannot use great weapons or rifles")
      ],
      "Human (FMF)": [
        string(_race, "Human"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 4),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 4),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 5),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        choices(arrayPairs(_languages, languages), "Choose 2"),
        range(_height, 55, 75),
        range(_weight, 90, 200),
        choices([
          numberPair(_PHY, 1),
          numberPair(_AGL, 1),
          numberPair(_INT, 1) ], "Choose 1")
      ],
      "Human (IKU)": [],
      "Iosan": [
        string(_race, "Iosan"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 4),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 4),
        number(_INT, 4),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 5),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 6),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Shyr"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 60, 75),
        range(_weight, 85, 180),
        listItem(_notes, "begins the game with an additional ability selected from on of the careers")
      ],
      "Nyss (FMF)": [
        string(_race, "Nyss"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 4),
        number(_AGL, 4),
        number(_PRW, 4),
        number(_POI, 4),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 5),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Aeric"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 62, 77),
        range(_weight, 95, 195),
        list(_notes, [
          "Cannot be an Arcane Mechanik, Arcanist, Gun Mage, or Warcaster",
          "Nyss bows/claymores are cheaper at charater creation",
          "Gains +1 on Initiative and PER rolls",
          "Gains +3 ARM against cold damage",
          "Gains -3 ARM against fire damage"])
      ],
      "Nyss (IKU)": [],
      "Ogrun": [
        string(_race, "Ogrun"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 6),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 3),
        number(_PER, 2),
        number(_PHY_max, 7),
        number(_SPD_max, 6),
        number(_STR_max, 8),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 5),
        number(_PER_max, 4),
        list(_languages, ["Molgur-Og", "Rhulic"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 82, 105),
        range(_weight, 330, 500),
        listItem(_notes, "Can wield two-handed weapons in one hand but suffers -2 on attack rolls")
      ],
      "Pygmy Troll": [],
      "Satyxis": [],
      "Skorne": [],
      "Strider": [],
      "Tharn": [],
      "Trollkin (FMF)": [
        string(_race, "Trollkin"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 2),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 8),
        number(_SPD_max, 6),
        number(_STR_max, 7),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 4),
        number(_ARC_max, 4),
        number(_PER_max, 4),
        listItem(_languages, "Molgur-Trul"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 63, 84),
        range(_weight, 150, 330),
        listItem(_notes, "Trollkin cannot be Arcane Mechaniks, Arcanists, or Warcasters"),
        list(_benefits, ["Tough", "Feat: Revitalize"])
      ],
      "Trollkin (IKU)": []
    };
    var castes = {
      "Extoller": [],
      "Outcast": [],
      "Paingiver": [],
      "Slave": [],
      "Warrior": [],
      "Worker": []
    }
    var archetypes = {
      "Cunning": [],
      "Gifted (FMF)": [
        string(_archetype, "Gifted"),
        choices(numberPairs(_ARC, [2, 3]), "Focusers start with ARC 2,<br />Will Weavers with ARC 3"),
        choices(arrayPairs(_benefits, [
          "Additional Study",
          "Combat Caster",
          "Fast Caster",
          "Feat: Domninator",
          "Feat: Powerful Caster",
          "Feat: Quick Cast",
          "Feat: Strength of Will",
          "Magic Sensitivity",
          "Rune Reader",
          "Warding Circle"]), "Choose 1")
      ],
      "Gifted (IKU)": [],
      "Intellectual": [
        string(_archetype, "Intellectual"),
        choices(arrayPairs(_benefits, [
          "Battlefield Coordination",
          "Feat: Flawless Timing",
          "Feat: Prescient",
          "Feat: Perfect Plot",
          "Feat: Plan of Action",
          "Feat: Quick Thinking",
          "Feat: Unconventional Warfare",
          "Genius",
          "Hyper Perception",
          "Photographic Memory"]), "Choose 1"),
        listItem(_notes, "friendly models gain +1 on attack and damage rolls if within command range")
      ],
      "Mighty (FMF)": [
        string(_archetype, "Mighty"),
        choices(arrayPairs(_benefits, [
          "Beat Back",
          "Feat: Back Swing",
          "Feat: Bounding Leap",
          "Feat: Counter Charge",
          "Feat: Invulnerable",
          "Feat: Revitalize",
          "Feat: Shield Breaker",
          "Feat: Vendetta",
          "Righteous Anger",
          "Tough"]), "Choose 1"),
        listItem(_notes, "gains an additional die on melee damage rolls")
      ],
      "Mighty (IKU)": [],
      "Skilled (FMF)": [
        string(_archetype, "Skilled"),
        choices(arrayPairs(_benefits, [
          "Ambidextrous",
          "Cagey",
          "Deft",
          "Feat: Defensive Strike",
          "Feat: Disarm",
          "Feat: Swashbuckler",
          "Feat: Untouchable",
          "Preternatural Awareness",
          "Sidestep",
          "Virtuoso"]), "Choose 1"),
        listItem(_notes, "gains an additional attack")
      ],
      "Skilled (IKU)": []
    };
    var careers = {
      "Alchemist": [
        listItem(_careers, "Alchemist"),
        list(_abilities, ["Grenadier", "Poison Resistance"]),
        list(_military_skills, ["Hand Weapon", "Thrown Weapon"]),
        list(_occupational_skills, ["Alchemy", "Medicine"]),
        number(_gold, 50),
        listItem(_armors, "Alchemist's Leather"),
        list(_gear, [
          "gas mask",
          "travelling alchemist's kit",
          "grenadier's bandolier",
          "any alchemical grenate",
          "any alchemical grenate",
          "any alchemical grenate",
          "any alchemical grenate",
          "any alchemical grenate"])
      ],
      "Allegiant": [],
      "Arcane Mechanik": [
        listItem(_careers, "Arcane Mechanik"),
        listItem(_abilities, "Inscribe Formulae"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Craft (gunsmithing)",
          "Craft (metalworking)",
          "Mechanikal Engineering"]),
        list(_spells, ["Arcantrik Bolt", "Polarity Shield"]),
        number(_gold, 50),
        listItem(_gear, "rune etching kit"),
        choices(arrayPairs(_gear, [
          "mechanika weapon",
          "mechanika suit of armor"]), "Choose 1")
      ],
      "Arcane Tempest Gun Mage": [],
      "Arcanist": [
        listItem(_careers, "Arcanist"),
        listItem(_abilities, "Great Power"),
        list(_occupational_skills, ["Lore (Arcane)", "Research"]),
        list(_spells, ["Arcane Bolt", "Aura of Protection", "Light in the Darkness"]),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
      "Archer": [],
      "Aristocrat": [
        listItem(_careers, "Aristocrat"),
        list(_abilities, ["Good Breeding", "Privilege"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_connections, "nobility"),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, ["Command", "Etiquette"]),
        listItem(_notes, "50gc each month from familiy holdings"),
        number(_gold, 200)
      ],
      "Artillerist": [],
      "Ascetic": [],
      "Assault Kommando": [],
      "Beast Handler": [],
      "Blackclad": [],
      "Bloodrunner": [],
      "Bloodtracker": [],
      "Bloodweaver": [],
      "Bokor": [],
      "Bone Grinder": [],
      "Bounty Hunter": [
        listItem(_careers, "Bounty Hunter"),
        list(_abilities, ["Binding", "Take Down"]),
        choices(arrayPairs(_military_skills, [
          "Crossbow",
          "Hand Weapon",
          "Pistol", "Rifle",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Intimidation",
          "Rope Use",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Brigand": [],
      "Bushwhacker": [],
      "Cataphract": [],
      "Chieftain": [],
      "Chirurgeon": [],
      "Chymist": [],
      "Crucible Guard": [],
      "Cutthroat": [
        listItem(_careers, "Cutthroat"),
        list(_abilities, ["Anatomical Precision", "Backstab", "Prowl"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Crossbow",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 1"),
        list(_occupational_skills, ["Intimidation", "Sneak", "Streetwise"]),
        number(_gold, 75)
      ],
      "Cygnaran Warcaster": [],
      "Deathstalker": [],
      "Doom Reaver": [],
      "Duelist": [
        listItem(_careers, "Duelist"),
        list(_abilities, ["Parry", "Riposte"]),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Gambling", "Intimidation", "Jumping"]),
        number(_gold, 75)
      ],
      "Exemplar": [],
      "Exemplar Errant": [],
      "Exemplar Vengar": [],
      "Explorer": [
        listItem(_careers, "Explorer"),
        list(_abilities, ["Big Game Hunter", "Port of Call"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_connections, "patron"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Hand Weapon",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Detection",
          "Medicine",
          "Navigation",
          "Survival"]),
        listItem(_notes, "20gc each month from a patron"),
        number(_gold, 150),
        list(_gear, ["map case", "spyglass"])
      ],
      "Extoller": [],
      "Fell Caller": [
        listItem(_careers, "Fell Caller"),
        list(_abilities, ["Fell Call: Signal Call", "Fell Call: Sonic Blast"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Great Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Fell Calling",
          "Fell Calling",
          "Lore (Trollkin)",
          "Oratory"]),
        number(_gold, 75)
      ],
      "Fennblade": [],
      "Ferox Rider": [],
      "Field Mechanik": [
        listItem(_careers, "Field Mechanik"),
        list(_abilities, ["'Jack Marshal", "Bodge", "Hit the Deck!"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Craft (metalworking)",
          "Mechanikal Engineering"]),
        number(_gold, 25),
        list(_gear, [
          "mechanik's tool kit",
          "light laborjack with up to 200gc of weapons"])
      ],
      "Flame Bringers": [],
      "Greylord": [],
      "Greylord Outrider": [],
      "Gun Mage": [
        listItem(_careers, "Gun Mage"),
        list(_abilities, ["Craft Rune Shot", "Fast Reload"]),
        choices(arrayPairs(_military_skills, ["Pistol", "Rifle"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Intimidation"]),
        list(_spells, [
          "Rune Shot: Accuracy",
          "Rune Shot: Brutal",
          "Rune Shot: Thunderbolt"]),
        number(_gold, 25),
        list(_gear, [
          "ammo bandolier",
          "rune shot casting kit",
          "powder and ten rounds of ammunition"]),
        choices(arrayPairs(_ranged_weapons, [
          "Pistol, Magelock",
          "Rifle, Magelock"]), "Choose 1")
      ],
      "Gun Mage of the Amethyst Rose": [],
      "Guttersnipe": [
        listItem(_careers, "Guttersnipe"),
        list(_abilities, ["Lost in the Crowd", "Low Breeding", "Perfect Timing"]),
        listItem(_connections, "Black Market"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol",
          "Sling",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 1"),
        list(_occupational_skills, [
          "Deception",
          "Escape Artist",
          "Sneak",
          "Streetwise"]),
        number(_gold, 50)
      ],
      "Highwayman": [
        listItem(_careers, "Highwayman"),
        list(_abilities, ["Ambush", "Saddle Shot"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, [
          "Animal Handling",
          "Detection",
          "Intimidation",
          "Riding"]),
        number(_gold, 75),
        list(_gear, ["mask", "riding horse", "tack"]) // TODO: horse widget
      ],
      "Horseman": [],
      "Illuminated Arcanist": [],
      "Investigator": [
        listItem(_careers, "Investigator"),
        listItem(_abilities, "Astute"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, [
          "Detection",
          "Forensic Science",
          "Interrogation",
          "Law",
          "Medicine",
          "Sneak"]),
        listItem(_benefits, "Hyper Perception"),
        number(_gold, 100)
      ],
      "Iron Fang": [
        listItem(_careers, "Iron Fang"),
        listItem(_notes, "Must choose between Aristocrat, Military Officer, Soldier, or Warcaster as second career"),
        list(_abilities, [
          "Fast Rearm (Blasting Pike)",
          "Specialization (Blasting Pike)"]),
        listItem(_connections, "Khadoran military"),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, ["Command", "Survival"]),
        number(_gold, 25),
        list(_gear, [
          "spear head",
          "ten blasting heads",
          "Iron Fang full plate",
          "shield"]),
        listItem(_melee_weapons, "Blasting Pike")
      ],
      "Iron Fang Uhlan": [],
      "Ironhead": [],
      "Khadoran Warcaster": [],
      "Knight": [
        listItem(_careers, "Knight"),
        list(_abilities, ["Cleave", "Defender"]),
        listItem(_connections, "knightly order"),
        list(_military_skills, ["Great Weapon", "Hand Weapon", "Shield"]),
        list(_occupational_skills, [
          "Command",
          "Etiquette",
          "Lore (knightly order)"]),
        number(_gold, 100)
      ],
      "Kriel Champion": [],
      "Labor Korune": [
        listItem(_careers, "Labor Korune"),
        list(_abilities, ["Iron Will", "Low Breeding"]),
        listItem(_connections, "Workers Union (Ogrun)"),
        listItem(_military_skills, "Unarmed Combat"),
        choices(arrayPairs(_occupational_skills, [
          "Craft (metalworking)",
          "Craft (stoneworking)",
          "Craft (carpentry)"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Negotiation",
          "Streetwise"]),
        number(_gold, 75)
      ],
      "Llaelese Warcaster": [],
      "Long Rider": [],
      "Mage Hunter": [
        listItem(_careers, "Mage Hunter"),
        list(_abilities, ["Arcane Assassin", "Iron Will"]),
        listItem(_connections, "Retribution of Scyrah"),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow"]), "Choose 1"),
        list(_occupational_skills, [
          "Climbing",
          "Jumping",
          "Sneak",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Man-at-Arms": [
        listItem(_careers, "Man-at-Arms"),
        list(_abilities, ["Defensive Line", "Shield Guard"]),
        list(_military_skills, ["Great Weapon", "Shield"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, ["Command", "Detection"]),
        number(_gold, 100)
      ],
      "Man-O-War": [],
      "Man-O-War Drakhun": [],
      "Marine": [],
      "Maritime Order of the Trident Arcanist": [],
      "Military Officer": [
        listItem(_careers, "Military Officer"),
        list(_abilities, [
          "Battle Plan: Call to Action",
          "Natural Leader",
          "Team Leader"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, ["Command", "Medicine", "Navigation"]),
        number(_gold, 100),
        listItem(_gear, "officer's uniform")
      ],
      "Mist Speaker": [],
      "Monster Hunter": [],
      "Mortitheurge": [],
      "Nihilator": [],
      "Nomad": [],
      "Ordic Warcaster": [],
      "Paladin": [],
      "Pirate": [
        listItem(_careers, "Pirate"),
        list(_abilities, ["Gang", "Steady", "Specialization (Cutlass)"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Pistol",
          "Thrown Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Climbing",
          "Intimidation",
          "Sailing",
          "Swimming"]),
        number(_gold, 75)
      ],
      "Pistoleer": [
        listItem(_careers, "Pistoleer"),
        list(_abilities, ["Fast Draw", "Gunfighter", "Return Fire"]),
        listItem(_military_skills, "Pistol"),
        list(_occupational_skills, ["Detection", "Intimidation", "Sneak"]),
        number(_gold, 50),
        listItem(_gear, "ammo bandolier"),
        choices(arrayPairs(_ranged_weapons, [
          "Hand Cannon",
          "Pistol, Repeating",
          "Pistol, Repeating"]), "Choose either the hand cannon<br />or both repeating pistols"),
        choices(arrayPairs(_gear, [
          "ammunition for ten shots",
          "2 ammo wheels with ammunition for ten shots"]), "Choose 1")
      ],
      "Praetorian": [],
      "Priest of Cyriss": [],
      "Priest of Menoth": [
        listItem(_careers, "Priest of Menoth"),
        listItem(_abilities, "Dispel"),
        listItem(_connections, "Menite temple"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Lore (Menite faith)", "Oratory"]),
        list(_spells, ["Guided Blade", "Ignite", "Immolation"]),
        number(_gold, 75)
      ],
      "Priest of Morrow": [
        listItem(_careers, "Priest of Morrow"),
        listItem(_abilities, "Empower"),
        listItem(_connections, "Morrowan temple"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Lore (Morrowan faith)", "Medicine"]),
        list(_spells, ["Blade of Radiance", "Solovin's Boon", "True Sight"]),
        number(_gold, 75)
      ],
      "Priest of Nyssor": [],
      "Protectorate Warcaster": [],
      "Pugilist": [
        listItem(_careers, "Pugilist"),
        list(_abilities, ["Brawler", "Hulking Presence"]),
        list(_military_skills, ["Unarmed Combat", "Hand Weapon"]),
        list(_occupational_skills, ["Detection", "Intimidation", "Streetwise"]),
        choices([ numberPair("PHY", 1), numberPair("STR", 1) ], "Choose 1"),
        number(_gold, 100)
      ],
      "Raider": [],
      "Ranger": [
        listItem(_careers, "Ranger"),
        list(_abilities, ["Camouflage", "Pathfinder"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Detection",
          "Sneak",
          "Survival",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Raptor": [],
      "Ravager": [],
      "Reclaimer": [],
      "Rhulic 'Jack Marshal": [],
      "Rhulic Field Mechanik": [],
      "Rhulic Warcaster": [],
      "Rifleman": [
        listItem(_careers, "Rifleman"),
        list(_abilities, ["Crackshot", "Dual Shot", "Marksman"]),
        listItem(_military_skills, "Rifle"),
        list(_occupational_skills, ["Climbing", "Detection", "Survival"]),
        number(_gold, 50),
        list(_gear, ["ammo bandolier", "powder and ammunition for ten shots"]),
        choices(arrayPairs(_ranged_weapons, [
          "Rifle, Heavy",
          "Rifle, Repeating"]))
      ],
      "Ryssovass": [],
      "Scout": [],
      "Scrutator": [],
      "Searforge Trader": [
        listItem(_careers, "Searforge Trader"),
        list(_abilities, ["Appraise", "Counter Offer"]),
        listItem(_connections, "Searforge Commission"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, ["Bribery", "Law", "Negotiation"]),
        listItem(_notes, "Gains 50 gc each month from business investments"),
        number(_gold, 150)
      ],
      "Seeker": [
        listItem(_careers, "Seeker"),
        list(_abilities, ["Cover Identity", "Team Player", "University Education"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, [
          "Deception",
          "Disguise",
          "Etiquette",
          "Negotiation",
          "Lore (any)",
          "Research"]),
        number(_gold, 100)
      ],
      "Shaman (Devourer Wurm)": [],
      "Shaman (Dhunia)": [],
      "Slaughterhouser": [],
      "Soldier": [
        listItem(_careers, "Soldier"),
        list(_abilities, ["Find Cover", "Sentry"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol",
          "Crossbow",
          "Great Weapon",
          "Rifle",
          "Thrown Weapon"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Driving",
          "Medicine",
          "Survival"]),
        number(_gold, 100)
      ],
      "Sorcerer (Fire) (FMF)": [
        listItem(_careers, "Sorcerer (Fire)"),
        listItem(_abilities, "Immunity: Fire"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Survival"]),
        list(_spells, ["Fire Starter", "Howling Flames", "Wall of Fire"]),
        number(_gold, 75)
      ],
      "Sorcerer (Fire) (IKU)": [],
      "Sorcerer (Ice) (FMF)": [
        listItem(_careers, "Sorcerer (Ice)"),
        listItem(_abilities, "Immunity: Cold"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Survival"]),
        list(_spells, ["Blizzard", "Chiller", "Ice Bolt"]),
        number(_gold, 75)
      ],
      "Sorcerer (Ice) (IKU)": [],
      "Sorcerer (Stone) (FMF)": [
        listItem(_careers, "Sorcerer (Stone)"),
        number(_PHY, 1),
        number(_PHY_max, 1),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Survival"]),
        list(_spells, ["Battering Ram", "Solid Ground", "Stone Stance"]),
        number(_gold, 75)
      ],
      "Sorcerer (Stone) (IKU)": [],
      "Sorcerer (Storm) (FMF)": [
        listItem(_careers, "Sorcerer (Storm)"),
        number(_SPD, 1),
        number(_SPD_max, 1),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Survival"]),
        list(_spells, ["Razor Wind", "Storm Tossed", "Wind Blast"]),
        number(_gold, 75)
      ],
      "Sorcerer (Storm) (IKU)": [],
      "Spy": [
        listItem(_careers, "Spy"),
        list(_abilities, ["Battle Plan: Shadow", "Cover Identity"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_connections, "intelligence network"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol",
          "Thrown Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Deception",
          "Detection",
          "Disguise",
          "Sneak"]),
        number(_gold, 100),
        listItem(_gear, "forged identity papers")
      ],
      "Storm Lance": [],
      "Stormblade": [
        listItem(_careers, "Stormblade"),
        listItem(_notes, "Must choose between Aristocrat, Knight, Man-at-Arms, Military Officer, Soldier, or Warcaster for second career"),
        list(_abilities, ["Blaster", "Specialization (Storm Glaive)"]),
        listItem(_connections, "Cygnaran military"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Command", "Detection", "Etiquette"]),
        listItem(_melee_weapons, "Storm Glaive"), // TODO: mechanikal weapon
        listItem(_armors, "Storm Knight Armor")
      ],
      "Stormguard": [],
      "Stormsmith": [],
      "Tempest Blazer": [],
      "Thamarite Advocate": [
        listItem(_careers, "Thamarite Advocate"),
        list(_abilities, ["Corruptor", "Imbue Weapon"]),
        listItem(_languages, "Telgesh"),
        choices(arrayPairs(_military_skills, ["Hand Weapon", "Pistol"]), "Choose 1"),
        list(_occupational_skills, ["Lore (Thamarite)", "Survival"]),
        choices(arrayPairs(_occupational_skills, [
          "Deception",
          "Etiquette",
          "Lore (any)",
          "Research",
          "Seduction",
          "Thrall Crafting"]), "Choose 2"),
        list(_spells, ["Bleed", "Ashen Cloud"]),
        number(_gold, 100)
      ],
      "Thief": [
        listItem(_careers, "Thief"),
        list(_abilities, ["Conniver", "Dodge"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Thrown Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Bribery",
          "Deception",
          "Escape Artist",
          "Lock Picking",
          "Lock Picking",
          "Pickpocket",
          "Pickpocket",
          "Sneak",
          "Streetwise"]),
        number(_gold, 75),
        listItem(_gear, "thief's tools")
      ],
      "Tormentor": [],
      "Trencher": [
        listItem(_careers, "Trencher"),
        listItem(_notes, "Must choose between Military Officer, Ranger, Rifleman, Soldier, or Warcaster for second career"),
        list(_abilities, ["Bayonet Charge", "Dig In"]),
        listItem(_connections, "Cygnaran military"),
        list(_military_skills, ["Great Weapon", "Rifle", "Thrown Weapon"]),
        list(_occupational_skills, ["Command", "Detection"]),
        number(_gold, 25),
        list(_gear, [
          "ammo bandolier",
          "bayonet",
          "entrenching spade",
          "smoke grenate",
          "smoke grenate",
          "smoke grenate"]),
        listItem(_ranged_weapons, "Rifle, Military"),
        listItem(_armors, "Infantry Armor")
      ],
      "Trencher Commando": [],
      "Tyrant": [],
      "Urban Nomad": [
        listItem(_careers, "Urban Nomad"),
        listItem(_abilities, "Adaptable [Urban]"),
        list(_military_skills, [
          "Archery",
          "Great Weapon"]),
        list(_occupational_skills, [
          "Climbing",
          "Jumping",
          "Sneak",
          "Survival"]),
        listItem(_benefits, "Preternatural Awareness"),
        listItem(_melee_weapons, "Nyss Claymore (FMF)"),
        listItem(_ranged_weapons, "Bow, Nyss")
      ],
      "Vassal of Menoth": [],
      "Venator": [],
      "Warcaster": [
        listItem(_careers, "Warcaster"),
        listItem(_abilities, "Bond"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Boundless Charge", "Convection"]),
        choices([arrayPair(_armors, "Warcaster Armor, light"),
          arrayPair(_armors, "Warcaster Armor, medium"),
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: mechanikal weapon
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1")
      ],
      "Warcaster, Cyriss": [],
      "Warlock, Circle": [],
      "Warlock, Farrow": [],
      "Warlock, Legion": [],
      "Warlock, Swamp": [],
      "Warlock, Trollkin": [],
      "Warlock: Skorne": [],
      "Warmonger": [],
      "Warrior": [],
      "Wolf of Orboros": [],
      "Wolf Rider": [],
      "Wyrmwall Bruiser": [],
      "Wyrmwall Rider": [],
      "Wyrmwall Veteran": []
    };
    var adventuringCompanies = {
      "Agents of the Crucible": [],
      "Arcane Order": [
        listItem(_notes, "Arcane Order"),
        listItem(_notes, "At least one of the characters must be Gifted"),
        listItem(_occupational_skills, "Lore (Arcane)"),
        choices(arrayPairs(_abilities, ["Arcane Scholar", "Shield Guard"]), "Choose 1")
      ],
      "Army of the Western Reaches": [],
      "Beast Hunters": [],
      "Bonded Porters": [],
      "Bone Grinder Hunting Party": [],
      "Caspian Cortex Smugglers": [
        listItem(_notes, "Caspian Cortex Smugglers"),
        list(_notes, [
          "All characters must either be an Arcane Mechanik, Cutthroat, Field Mechanik, Military Officer, Soldier, Spy, or Thief",
          "One is the lead smuggler"])
      ],
      "Circle Orboros Conclave": [],
      "Crusaders": [],
      "Farrow Tribe": [],
      "Five Fingers Transporters": [
        listItem(_notes, "Five Fingers Transporters"),
        list(_notes, [
          "All characters must either be an Bounty Hunter, Explorer, Highwayman, Investigator, Man-at-Arms, Ranger, or Spy",
          "One is the boss"]),
        listItem(_languages, "Five Cant"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_occupational_skills, "Disguise"),
        listItem(_abilities, "Cover Identity")
      ],
      "Fringe Cultists": [],
      "Gatorman Tribe": [],
      "Greylords": [],
      "Heroes of the Resistance": [],
      "House Taberna": [],
      "Idrian Tribe": [],
      "Illuminated Ones": [],
      "Intrepid Investigators": [
        listItem(_notes, "Intrepid Investigators"),
        list(_notes, [
          "All characters must either be an Alchemist, Arcane Mechanik, Arcanist, Aristocrat, Explorer, Investigator, Military Officer, Priest, or Spy",
          "All characters can benefit from the Intellectual archetype benefit twice" ]),
      ],
      "Khadoran Military Detail": [],
      "Korsk Stanzynat Mustyn": [
        listItem(_notes, "Korsk Stanzynat Mustyn"),
        list(_notes, [
          "All characters must either be an Cutthroat, Pirate, or Thief",
          "One is the boss"]),
        listItem(_abilities, "Cover Identity"),
        choices(arrayPairs(_abilities, [
          "Appraise",
          "Backstab",
          "Iron Will"]), "Choose 1")
      ],
      "Law Dogs": [
        listItem(_notes, "Law Dogs"),
        listItem(_notes, [
          "All characters must either be a Bounty Hunter, Highwayman, Investigator, Military Officer, Ranger, or Soldier",
          "While pursuing a bounty, character gain boni on skill and attack rolls" ])
      ],
      "Mercenary Charter": [
        listItem(_notes, "Mercenary Charter"),
        listItem(_notes, "One character is the captain"),
        choices([ arrayPair(_abilities, "Natural Leader") ], "The leader gets the Natural Leader ability"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Command",
          "Driving",
          "Gambling",
          "Interrogation",
          "Medicine",
          "Negotiation",
          "Riding"]), "Choose 1")
      ],
      "Mystics": [],
      "Nobile Exiles": [],
      "Nomads": [],
      "Northkin Kriel": [],
      "Nyss Refugees": [],
      "Ordic Naval Expedition": [],
      "Outlaws": [
        listItem(_notes, "Outlaws"),
        list(_notes, [
          "All characters must either be an Alchemist, Cutthroat, Duelist, Highwayman, Pistoleer, Rifleman, Sorcerer, Spy, or Thief",
          "One character is the boss" ]),
        listItem(_languages, "Five Cant"),
        listItem(_abilities, "Gang")
      ],
      "Pirates of the Broken Cost": [
        listItem(_notes, "Pirates of the Broken Cost"),
        listItem(_notes, "All characters must either be a Cutthroat, Explorer, Military Officer, Pirate, or Thief"),
        listItem(_notes, "One character is the captain"),
        choices([ arrayPair(_abilities, "Natural Leader") ], "The captain gets the Natural Leader ability"),
        listItem(_abilities, "Hit the Deck!")
      ],
      "Raiders": [],
      "Renegades": [],
      "Soldiers of Fortune": [],
      "Spy Ring": [
        listItem(_notes, "Spy Ring"),
        list(_notes, [
          "All characters must either be an Aristocrat, Investigator, Ranger, Spy, or Thief",
          "One character is the captain" ]),
        choices($.merge(arrayPairs(_languages, languages), arrayPairs(_occupational_skills, [
          "Bribery",
          "Climbing",
          "Cryptography",
          "Deception",
          "Detection",
          "Disguise",
          "Escape Artist",
          "Etiquette",
          "Forensic Science",
          "Forgery",
          "Gambling",
          "Interrogation",
          "Intimidation",
          "Jumping",
          "Lock Picking",
          "Negotiation",
          "Pickpocket",
          "Research",
          "Riding",
          "Rope Use",
          "Seduction",
          "Sneak",
          "Streetwise"])), "Choose 1")
      ],
      "Thamarite Sept": [
        listItem(_notes, "Thamarite Sept"),
        list(_notes, [
          "All characters must either be a Thamarite Advocate, follow Thamar or be irreligious",
          "One Thamarite Advocate is the leader",
          "Thamarite Advocates gain a free spell"]),
        listItem(_occupational_skills, "Lore (Thamarite)"),
        choices(arrayPairs(_occupational_skills, [
          "Lock Picking",
          "Rope Use",
          "Sneak"]), "Choose all if not Thamarite Advocate")
      ],
      "Tharn Tuath": [],
      "The Inner Circle": [],
      "United Kriels": [],
      "Unlikely Heroes": [],
      "Unorthodox Engagement Team": [],
      "Wilderness Expedition": [],
      "Wilderness Kriel": []
    }
    
    
    // ## Character Generator Variables ## \\
  
    var generator = ikrpg.generator;
    generator.races = races;
    generator.castes = castes;
    generator.archetypes = archetypes;
    generator.careers = careers;
    generator.adventuringCompanies = adventuringCompanies;
    
  })();
  
  
  // # Add Option Tags to Character Generator Select Tags # \\
  (function() {
    
    function addOption(selector) {
      return function(key, value) {
        if(value.length > 0) {
          var html = $(selector).html();
          $(selector).html(html+'\n<option value="'+key+'">'+key+'</option>');
        }
      }
    }
    
    $.each(ikrpg.generator.races, addOption("#race-select"));
    $.each(ikrpg.generator.castes, addOption("#caste-select"));
    $.each(ikrpg.generator.archetypes, addOption("#archetype-select"));
    $.each(ikrpg.generator.careers, addOption("#career1-select"));
    $.each(ikrpg.generator.careers, addOption("#career2-select"));
    $.each(ikrpg.generator.adventuringCompanies, addOption("#adventuring-company-select"));
      
  })();
  
  
  function mkString(array, between, before, after) {
    var str = "";
    
    if(before) str += before;
    if(array.length > 0) {
      str += array.slice(0, 1);
      $.each(array.slice(1, array.length), function(index, entry) {
        if(between) str += between;
        str += entry;
      });
    }
    if(after) str += after;
    
    return str;
  }
  
  
  // # Read in Choices from input and select tags and fill out character sheet # \\
  (function() {
    
    function hero() {
      return {
        "race": "",
        "PHY": 0,
        "SPD": 0,
        "STR": 0,
        "AGL": 0,
        "PRW": 0,
        "POI": 0,
        "INT": 0,
        "PER": 0,
        "DEF racial modifier": 0,
        "languages": [],
        "height": 0,
        "weight": 0,
        "archetype": "",
        "benefits": [],
        "careers": [],
        "abilities": [],
        "connections": [],
        "military skills": [],
        "occupational skills": [],
        "spells": [],
        "gear": [],
        "gold": 0,
        "notes": [],
        "ranged weapons": [],
        "melee weapons": [],
        "armors": []
      };
    }
    
    // ## Fill out values on Select box change ## \\
    (function() {
      
      function lookupAndFillOut(selectSelector, dataSelector, data) {
        return function(event) {
          $(dataSelector).html("");
        
          var option = $(selectSelector).val();
          if(data[option]) {
            var stuff = data[option];
            $(dataSelector).html("");
            $.each(stuff, function(index, entry) {
              var html = $(dataSelector).html();
              $(dataSelector).html(html+"\n"+entry.html());
            });
          } else {
            // TODO: option does not exist!
          }
        };
      }
    
      $("#race-select").change(lookupAndFillOut("#race-select", "#race-data", ikrpg.generator.races));
      $("#caste-select").change(lookupAndFillOut("#caste-select", "#caste-data", ikrpg.generator.castes));
      $("#archetype-select").change(lookupAndFillOut("#archetype-select", "#archetype-data", ikrpg.generator.archetypes));
      $("#career1-select").change(lookupAndFillOut("#career1-select", "#career1-data", ikrpg.generator.careers));
      $("#career2-select").change(lookupAndFillOut("#career2-select", "#career2-data", ikrpg.generator.careers));
      $("#adventuring-company-select").change(lookupAndFillOut("#adventuring-company-select", "#adventuring-company-data", ikrpg.generator.adventuringCompanies));
            
    })();
    
    function histogram(array) {
      var o = {};
      $.each(array, function(index, item) {
        o[item] = o[item] || 0;
        o[item] += 1;
      });
      return o;
    }
    
    // ## Read user choices from html and fill out character sheet ## \\
    (function() {
      
      function fillCharacterSheet() {
        ikrpg.cards.cleanData();
        ikrpg.cards.data["hero-name"] = "Hero's name";
        
        var data = hero();
        
        // ### Read in data from generator user input tags ### \\
        (function() {
          
          $(".character-generator-data input, .character-generator-data option:selected").each(function(index, entry) {
            var elem = $(entry);
            var clazz = elem.attr("class");
            var value = elem.val();
            var type = elem.attr("data-type");
            
            switch(type) {
              case "number":
                if(!data[clazz]) data[clazz] = parseInt(value);
                else data[clazz] += parseInt(value);
                break;
              case "array":
                if(!data[clazz]) data[clazz] = [value];
                else data[clazz].push(value);
                break;
              default:
                data[clazz] = value;
            }
          });
          
        })();
        
        var character = {
          "weight": data["weight"],
          "archetype": data["archetype"],
          "race": data["race"],
          "level": "Hero",
          "careers": mkString(data["careers"], ", "),
          "height": data["height"],
          "phy": data["PHY"],
          "phymax": data["PHY max"],
          "spd": data["SPD"],
          "computed-spd": 0,
          "spdmax": data["SPD max"],
          "str": data["STR"],
          "strmax": data["STR max"],
          "agl": data["AGL"],
          "aglmax": data["AGL max"],
          "poi": data["POI"],
          "poimax": data["POI max"],
          "prw": data["PRW"],
          "prwmax": data["PRW max"],
          "int": data["INT"],
          "intmax": data["INT max"],
          "arc": data["ARC"],
          "arcmax": data["ARC max"],
          "per": data["PER"],
          "permax": data["PER max"],
          "wil": parseInt(data["PHY"]) + parseInt(data["INT"]),
          "defracialmodifier": data["DEF racial modifier"],
          "gold": data["gold"],
          "xp": 0,
          "feats": 3
        };
        
        // ### Fill character based on read in data ### \\
        (function() {
          
          // #### Abilities #### \\
          (function() {
            
            var abilities = $.merge(data["benefits"], data["abilities"]) || [];
            
            $.each(abilities.sort(), function(index, ability) {
              character["ability"+(index+1)] = character["ability"+(index+1)] || {};
              character["ability"+(index+1)]["title"] = ability;
              
              var db = ikrpg.index.data;
      
              var entry = $.grep(db, function(e) { return e["name"] == ability; });
              if(entry && entry.length > 0) {
                var page = entry[0]["page"];
                character["ability"+(index+1)]["page"] = page;
              }
            });
            
          })();
          
          // #### Skills #### \\
          (function() {
            
            var db = ikrpg.generator.db.skill;
            
            var skills = histogram($.merge(data["military skills"], data["occupational skills"]));
            
            var skillsKeys = Object.keys(skills) || [];
            var index = 0;
            $.each(skillsKeys.sort(), function(i, skill) {
              var value = skills[skill];
              
              character["s"+(index+1)] = character["s"+(index+1)] || {};
              character["s"+(index+1)]["title"] = skill;
              character["s"+(index+1)]["lvl"] = value;
              
              var skillBaseName = skill.replace(/(\(.*\))+/g, "").replace(/\s+$/, "");
              
              var stats = db[skillBaseName];
              if(stats && stats.length > 0) {
                var stat = stats[0];
                var lowerStat = stat.toLowerCase();
                character["s"+(index+1)]["stat"] = lowerStat;
                if(stat == "SOC") {
                  character["s"+(index+1)]["base"] = "*";
                  character["s"+(index+1)]["sum"] = "*";
                } else {
                  var statValue = parseInt(data[stat]);
                  character["s"+(index+1)]["base"] = statValue;
                  character["s"+(index+1)]["sum"] = statValue + value;
                }
              }
              if(stats.length > 1) {
                var stat = stats[1];
                var lowerStat = stat.toLowerCase();
                index += 1;
                
                character["s"+(index+1)] = character["s"+(index+1)] || {};
                character["s"+(index+1)]["title"] = skill;
                character["s"+(index+1)]["stat"] = lowerStat;
                character["s"+(index+1)]["lvl"] = value;
                if(stat == "SOC") {
                  character["s"+(index+1)]["base"] = "*";
                  character["s"+(index+1)]["sum"] = "*";
                } else {
                  var statValue = parseInt(data[stat]);
                  character["s"+(index+1)]["base"] = statValue;
                  character["s"+(index+1)]["sum"] = statValue + value;
                }
              }
              index += 1;
            });
            
          })();
          
          // #### Spells #### \\
          (function() {
            
            var db = ikrpg.generator.db.spell;
            
            var spells = data["spells"] || [];
            
            $.each(spells.sort(), function(index, spell) {
              character["spell"+(index+1)] = character["spell"+(index+1)] || {};
              character["spell"+(index+1)]["title"] = spell;
              
              var spellData = db[spell];
              if(spellData) {
                character["spell"+(index+1)]["cost"] = spellData["cost"];
                character["spell"+(index+1)]["rng"] = spellData["rng"];
                character["spell"+(index+1)]["aoe"] = spellData["aoe"];
                character["spell"+(index+1)]["pow"] = spellData["pow"];
                character["spell"+(index+1)]["up"] = spellData["up"];
                character["spell"+(index+1)]["off"] = spellData["off"];
                character["spell"+(index+1)]["description"] = spellData["description"];
              }
            });
            
          })();
          
          // #### Gear #### \\
          (function() {
            
            var gears = data["gear"] || [];
            
            $.each(gears.sort(), function(index, gear) {
              character["gear"+(index+1)] = character["gear"+(index+1)] || {};
              character["gear"+(index+1)]["title"] = gear;
            });
            
          })();
          
          // #### Ranged Weapons #### \\
          (function() {
            
            var db = ikrpg.generator.db.rangedWeapon;
            
            var rangedWeapons = data["ranged weapons"] || [];
            
            $.each(rangedWeapons.sort(), function(index, name) {
              var rat = "rat"+(index+1);
              
              character[rat] = character[rat] || {};
              character[rat]["name"] = name;
              
              var weapon = db[name];
              if(weapon) {
                var skill = weapon["skill"];
                var ratMod = parseInt(weapon["rat-mod"]) || 0;
                
                character[rat]["skill"] = skill;
                character[rat]["ratmod"] = ratMod;
                character[rat]["rng"] = weapon["rng"];
                character[rat]["pow"] = weapon["pow"];
                character[rat]["notes"] = weapon["notes"];
                character[rat]["ammo"] = weapon["ammo"];
                
                var mskills = histogram(data["military skills"]);
                var lvl = mskills[skill];
                
                var skillDB = ikrpg.generator.db.skill;
                var mskill = skillDB[skill];
                
                if(mskill) {
                  var stat = mskill[0];
                  var base = parseInt(character[stat.toLowerCase()]) || 0;
                  
                  character[rat]["rat"] = base + lvl + ratMod;
                } else {
                  character[rat]["rat"] = "";
                }
              }
            });
            
          })();
          
          // #### Melee Weapons #### \\
          (function() {
            
            var db = ikrpg.generator.db.meleeWeapon;
            
            var meleeWeapons = data["melee weapons"] || [];
            
            $.each(meleeWeapons.sort(), function(index, name) {
              var mat = "mat"+(index+1);
              
              character[mat] = character[mat] || {};
              character[mat]["name"] = name;
              
              var weapon = db[name];
              if(weapon) {
                var skill = weapon["skill"];
                var matMod = parseInt(weapon["mat-mod"]) || 0;
                
                character[mat]["skill"] = skill;
                character[mat]["matmod"] = matMod;
                character[mat]["pow"] = weapon["pow"];
                character[mat]["notes"] = weapon["notes"];
                
                var str = parseInt(character["str"]) || 0;
                var pow = parseInt(weapon["pow"]) || 0;
                character[mat]["ps"] = pow + str;
                
                var mskills = histogram(data["military skills"]);
                var lvl = mskills[skill];
                
                var skillDB = ikrpg.generator.db.skill;
                var mskill = skillDB[skill];
                
                if(mskill) {
                  var stat = mskill[0];
                  var base = parseInt(character[stat.toLowerCase()]) || 0;
                  
                  character[mat]["mat"] = base + lvl + matMod;
                } else {
                  character[mat]["mat"] = "";
                }
              }
            });
            
          })();
          
          // #### Worn Armor #### \\
          (function() {
            
            var db = ikrpg.generator.db.wornArmor;
            
            var armors = data["armors"] || [];
            
            $.each(armors.sort(), function(index, armor) {
              character["wornarmor"+(index+1)] = character["wornarmor"+(index+1)] || {};
              character["wornarmor"+(index+1)]["name"] = armor;
                            
              var wornArmorData = db[armor];
              if(wornArmorData) {
                character["wornarmor"+(index+1)]["description"] = wornArmorData["description"];
                character["wornarmor"+(index+1)]["spd"] = wornArmorData["spd"];
                character["wornarmor"+(index+1)]["def"] = wornArmorData["def"];
                character["wornarmor"+(index+1)]["arm"] = wornArmorData["arm"];
              }
            });
            
          })();
          
          // #### Notes #### \\
          (function() {
            
            var notes = data["notes"] || [];
            
            $.each(notes.sort(), function(index, note) {
              character["note"+(index+1)] = character["note"+(index+1)] || {};
              character["note"+(index+1)]["text"] = note;
            });
            
          })();
          
          // #### Languages #### \\
          (function() {
            
            var languages = data["languages"] || [];
            
            $.each(languages.sort(), function(index, language) {
              if(index < 3) character["spokenlanguage"+(index+1)] = language;
              else character["spokenlanguage"+((index % 3)+1)] += ", "+language;
            });
            
          })();
          
          // #### Connections #### \\
          (function() {
            
            var connections = data["connections"] || [];
            
            $.each(connections.sort(), function(index, connection) {
              character["connection"+(index+1)] = character["connection"+(index+1)] || {};
              character["connection"+(index+1)]["name"] = connection;
            });
            
          })();
          
          // #### Computed SPD #### \\
          (function() {
            // SPD base stat minus SPD malus from first worn armor
            
            var spd = parseInt(character["spd"]);
            var wornArmor1 = character["wornarmor1"];
            
            if(wornArmor1) {
              var spdMalus = parseInt(wornArmor1["spd"]);
              
              if(spdMalus) {
                character["computed-spd"] = spd + spdMalus;
              } else {
                character["computed-spd"] = spd;
              }
            } else {
              character["computed-spd"] = spd;
            }
            
          })();
          
          // #### ARM, DEF, INI, CMD #### \\
          (function() {
            
            var wornarmor1 = character["wornarmor1"];
            
            if(wornarmor1) {
              var def = wornarmor1["def"];
              var arm = wornarmor1["arm"];
              character["defequipmentmodifiers"] = def;
              character["armarmormodifiers"] = arm;
            }
            
            var mskills = histogram(data["military skills"]);
                        
            if(mskills["Shield"]) {
              var shield = parseInt(mskills["Shield"]);
              character["armshieldmodifier"] = shield;
            } else {
              character["armshieldmodifier"] = 0;
            }
            
            var oskills = histogram(data["occupational skills"]);
            
            if(oskills["Command"]) {
              var command = parseInt(oskills["Command"]);
              character["cmdcommandskill"] = command;
            } else {
              character["cmdcommandskill"] = 0;
            }
            
            var spd = character["computed-spd"] || 0;
            var agl = character["agl"] || 0;
            var per = character["per"] || 0;
            var defracialmodifier = character["defracialmodifier"] || 0;
            var defequipmentmodifiers = character["defequipmentmodifiers"] || 0;
            var phy = character["phy"] || 0;
            var armshieldmodifier = character["armshieldmodifier"] || 0;
            var armarmormodifiers = character["armarmormodifiers"] || 0;
            var armothermodifiers = character["armothermodifiers"] || 0;
            var prw = character["prw"] || 0;
            var iniequipmentmodifiers = character["iniequipmentmodifiers"] || 0;
            var iniadditionalmodifiers = character["iniadditionalmodifiers"] || 0;
            var int = character["int"] || 0;
            var cmdcommandskill = character["cmdcommandskill"] || 0;
            var cmdabilitymodifier = character["cmdabilitymodifier"] || 0;
            
            character["def"] = spd + agl + per + defracialmodifier + defequipmentmodifiers;
            character["arm"] = phy + armshieldmodifier + armarmormodifiers + armothermodifiers;
            character["ini"] = spd + prw + per + iniequipmentmodifiers + iniadditionalmodifiers;
            character["cmd"] = int + cmdcommandskill + cmdabilitymodifier;
            
          })();
          
        })();
        
        // ### Fill character sheet with the data stored in character ### \\
        ikrpg.sheet.fill(null, character);
        
        window.location.hash = "";
        window.location.hash = "character-sheet-page1";
        
      }
      
      ikrpg.generator.fillCharacterSheet = fillCharacterSheet;
      
    })();
      
  })();
  
  
  // # Bind character generation to submit button # \\
  (function() {
    $("#generator-submit").click(ikrpg.generator.fillCharacterSheet);
  })();
  
})();