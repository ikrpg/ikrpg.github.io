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
    
    // ## Spell DB ## \\
    (function() {
      
      var spellDB = {
        "Arcane Bolt": { "cost": 2, "rng": 12, "aoe": "–", "pow": 11, "up": "NO", "off": "YES", "description": "" },
        "Arcane Strike": { "cost": 1, "rng": 8, "aoe": "–", "pow": 8, "up": "NO", "off": "YES", "description": "" },
        "Arcantrik Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ashen Cloud": { "cost": 2, "rng": "CTRL", "aoe": 3, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ashes to Ashes": { "cost": 4, "rng": 8, "aoe": "*", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Aura of Protection": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Awareness": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Banishing Ward": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Barrier of FLames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Battering Ram": { "cost": 2, "rng": 6, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Batten Down the Hatches": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Black Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blade of Radiance": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blazing Effigy": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 14, "up": "NO", "off": "NO", "description": "" },
        "Blessing of Health": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessing of Morrow": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessings of War": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blizzard": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Brittle Frost": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Boundless Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Broadside": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Celerity": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Chain Lightning": { "cost": 3, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Chiller": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Cleansing Fire": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Convection": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Crevasse": { "cost": 3, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Crusader's Call": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Daylight": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deceleration": { "cost": 3, "rng": "SELF", "aoe": "DTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deep Freeze": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Earthquake": { "cost": 3, "rng": 10, "aoe": 5, "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Earth's Cradle": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Earthsplitter": { "cost": 4, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Electrical Blast": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Electrify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Eliminator": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Entangle": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Eyes of Truth": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Extinguisher": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fail Safe": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fair Winds": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fire Group": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fire Starter": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Flames of Wrath": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Flare": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fog of War": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Field": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Hammer": { "cost": 4, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Force of Faith": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fortify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Foxhole": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Freezing Grip": { "cost": 4, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Freezing Mist": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frozen Ground": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frostbite": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Fuel the Flames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Full Throttle": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Grind": { "cost": 3, "rng": 10, "aoe": "–", "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Guided Blade": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Guilded Fire": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hand of Fate": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Heal": { "cost": 4, "rng": "*", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Heightened Reflexes": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hex Blast": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Hoarfrost": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Howling Flames": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Hymn of Battle": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Passage": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Shielding": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Ice Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ice Shield": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Icy Grip": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Ignite": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Immolation": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Inferno": { "cost": 3, "rng": 10, "aoe": 3, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Influence": { "cost": 1, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Inhospitable Ground": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Iron Aggression": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Jackhammer": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Jump Start": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Lamentation": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Light in the Darkness": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Lightning Tendrils": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Locomotion": { "cost": "1+", "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Mirage": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Obliteration": { "cost": 4, "rng": 10, "aoe": 4, "pow": 15, "up": "NO", "off": "YES", "description": "" },
        "Occultation": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Overmind": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Polarity Shield": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Positive Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Power Booster": { "cost": 1, "rng": 5, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Prayer of Guidance": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Protection from Cold": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Corrosion": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Electricity": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Purification": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Raging Winds": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Razor Wind": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Redline": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Refuge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Return Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rift": { "cost": 3, "rng": 8, "aoe": 4, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Righteous Flames": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rime": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rock Hammer": { "cost": 3, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Rock Wall": { "cost": 2, "rng": "CTRL", "aoe": "WALL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Rune Shot: Accuracy": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Black Penny": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Brutal": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Detonator": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Earth Shaker": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Freeze Fire": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Heart Stopper": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Iron Rot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Molten Shot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Momentum": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Phantom Seeker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Shadow Fire": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Silencer": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spell Cracker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spontaneous Combustion": { "cost": 1, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Thunderbolt": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Trick Shot": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Sanguine Blessing": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sea of Fire": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Shatter Storm": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shield of Faith": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shock Wave": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 13, "up": "NO", "off": "NO", "description": "" },
        "Short Out": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Snipe": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solid Ground": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solovin's Boon": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Star Fire": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Staying Winter's Hand": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Stone Stance": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Stone Strength": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Storm Tossed": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Sunburst": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Superiority": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Telekinesis": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Temper Metal": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Tempest": { "cost": 4, "rng": 8, "aoe": 4, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Tide of Steel": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Tornado": { "cost": 4, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Transference": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Triage": { "cost": 2, "rng": "B2B", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Path": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Sight": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Vision": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Voltaic Lock": { "cost": 4, "rng": 10, "aoe": "*", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Wall of Fire": { "cost": 2, "rng": "CTRL", "aoe": "WALL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "White Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Wind Blast": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Wind Strike": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Wings of Air": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Winter Storm": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Zephyr": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" }
      };
      
      ikrpg.generator.db.spell = spellDB;
      
    })();
    
  })();
  
  
  // # Fill character sheet input fields with DB data # \\
  (function() {
    
    // ## Fill spell data on title change ## \\
    (function() {
      
      var db = ikrpg.generator.db.spell;
      
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
            skill.find(".sum").val(lvlValue + baseValue);
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
            skill.find(".sum").val(lvlValue + baseValue);
          }
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
          console.log(phy)
          console.log(int)
          if((phy || phy == 0) && (int || int == 0)) {
            $(".character-sheet #wil").val(phy + int);
          }
        });
        
      })();
      
    })();
    
    // ## Update page value on ability change ## \\
    (function() {
      
      var db = ikrpg.index.data;
      
      $(".character-sheet .ability").change(function(event) {
        var input = $(event.target);
        var title = input.val();
        var ability = input.parent();
        var entry = $.grep(db, function(e) { return e["name"] == title; });
        if(entry && entry.length > 0) {
          var page = entry[0]["page"];
          ability.find(".page").val(page);
        }
      });
      
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
        list(_gear, ["alchemist's leather",
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
      "Guttersnipe": [],
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
      "Labor Korune": [],
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
      "Pugilist": [],
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
      "Searforge Trader": [],
      "Seeker": [],
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
      "Thamarite Advocate": [],
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
      "Urban Nomad": [],
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
      "Caspian Cortex Smugglers": [],
      "Circle Orboros Conclave": [],
      "Crusaders": [],
      "Farrow Tribe": [],
      "Five Fingers Transporters": [],
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
      "Korsk Stanzynat Mustyn": [],
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
        list(_languages, ["Gang", "Five Cant"])
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
      "Thamarite Sept": [],
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
        
        // ### Read in data from html user input ### \\
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
          "note1": {"text": "Adventuring company: "+data["adventuring company"]},
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
            
            var rangedWeapons = data["ranged weapons"] || [];
            
            $.each(rangedWeapons.sort(), function(index, weapon) {
              character["rat"+(index+1)] = character["rat"+(index+1)] || {};
              character["rat"+(index+1)]["name"] = weapon;
            });
            
          })();
          
          // #### Melee Weapons #### \\
          (function() {
            
            var meleeWeapons = data["melee weapons"] || [];
            
            $.each(meleeWeapons.sort(), function(index, weapon) {
              character["mat"+(index+1)] = character["mat"+(index+1)] || {};
              character["mat"+(index+1)]["name"] = weapon;
            });
            
          })();
          
          // #### Armor #### \\
          (function() {
            
            var armors = data["armor"] || [];
            
            $.each(armors.sort(), function(index, armor) {
              character["wornarmor"+(index+1)] = character["wornarmor"+(index+1)] || {};
              character["wornarmor"+(index+1)]["name"] = armor;
            });
            
          })();
          
          // #### Notes #### \\
          (function() {
            
            var notes = data["notes"] || [];
            
            $.each(notes.sort(), function(index, note) {
              character["note"+(index+2)] = character["note"+(index+2)] || {};
              character["note"+(index+2)]["text"] = note;
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