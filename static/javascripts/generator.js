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
      
      var spellDB = { // { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" }
        "Abuse": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Admonition": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Aerial Coordination": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Affliction": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Aggravator": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Agitation": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Annihilation": { "cost": 4, "rng": 10, "aoe": 3, "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Arcane Blast": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Arcane Bolt": { "cost": 2, "rng": 12, "aoe": "–", "pow": 11, "up": "NO", "off": "YES", "description": "" },
        "Arcane Bonds": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Arcane Static": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Arcane Strike": { "cost": 1, "rng": 8, "aoe": "–", "pow": 8, "up": "NO", "off": "YES", "description": "" },
        "Arcantrik Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ashen Cloud": { "cost": 2, "rng": "CTRL", "aoe": 3, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ashen Veil": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ashes to Ashes": { "cost": 4, "rng": 8, "aoe": "*", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Aura of Protection": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Awakened Spirit": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Awareness": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Ayisla's Rebuke": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Backlash": { "cost": 3, "rng": 8, "aoe": "–", "pow": 12, "up": "YES", "off": "YES", "description": "" },
        "Bad Blood": { "cost": 2, "rng": 10, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Banishing Ward": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Barrier of Flames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Battering Ram": { "cost": 2, "rng": 6, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Batten Down the Hatches": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Battle Charged": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Battle Rage": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Bestial": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Beyond Death": { "cost": 4, "rng": "B2B", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Black Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blade of Radiance": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blaze of Glory": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blazing Effigy": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 14, "up": "NO", "off": "NO", "description": "" },
        "Bleed": { "cost": 2, "rng": 8, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blessing of Health": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessing of Morrow": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessing of the Devourer": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blessings of War": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blight Blast": { "cost": 3, "rng": 8, "aoe": 4, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Blight Bringer": { "cost": 4, "rng": 10, "aoe": 5, "pow": 12, "up": "NO", "off": "NO", "description": "" },
        "Blight Field": { "cost": 2, "rng": "CTRL", "aoe": 4, "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blight Storm": { "cost": 4, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blight Strike": { "cost": 2, "rng": 8, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Blind Spot": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Blizzard": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Feast": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Accurate Strike": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Black Poison": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Bleeder": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Blood Burst": { "cost": 2, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Brain Damage": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Brutal Strike": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Dispel": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Grievous Strike": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Heart Stopper": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Hobbler": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Invigoration": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Magic: Weekness": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Blood Mark": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Blood Rain": { "cost": 3, "rng": 8, "aoe": 3, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Blow the Man Down": { "cost": 3, "rng": 8, "aoe": "–", "pow": 15, "up": "NO", "off": "YES", "description": "" },
        "Blur": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Bone Shaker": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Brittle Frost": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Boundless Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Broadside": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Bullet Dodger": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Buoyancy": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Carnage": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Carnivore": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Celerity": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Chain Lightning": { "cost": 3, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Chasten": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Chiller": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Cleansing Fire": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Cloak of Fear": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Cloak of the Predator": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Cold-Blooded": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Convection": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Crevasse": { "cost": 3, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Cross-Country": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Crusader's Call": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Curse of Shadows": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Dark Fire": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Dark Guidance": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Dark Persuader": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Dark Water": { "cost": 3, "rng": "CTRL", "aoe": "4", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Dash": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Daylight": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deadeye": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Deadweight": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Death Field": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Death Pact": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Deathly Slumber": { "cost": 4, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deceleration": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Deep Freeze": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Devil's Tongue": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Dirge of Mists": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Disruptor": { "cost": 2, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Dissolution Bolt": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Dog Pile": { "cost": 2, "rng": 10, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Dominate Undead": { "cost": 3, "rng": 10, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Domination": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Draconic Blessing": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Dragon's Blood": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Dragonsight": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Earthquake": { "cost": 3, "rng": 10, "aoe": 5, "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Earth's Cradle": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Earthsplitter": { "cost": 4, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Electrical Blast": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Electrical Charge": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Electrify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Electrodynamics": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Elemental Protection": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Eliminator": { "cost": 3, "rng": 8, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Entangle": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Enthrall Spirit": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Entropic Force": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Eruption of Life": { "cost": 3, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Eruption of Spines": { "cost": 3, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Essence Blast": { "cost": 3, "rng": "CTRL", "aoe": "*", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Exorcism": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Explosivo": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Extinguisher": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Eye of Menoth": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Eyes of Truth": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fail Safe": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fair Winds": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Feast of Worms": { "cost": 4, "rng": 10, "aoe": 4, "pow": 12, "up": "YES", "off": "YES", "description": "" },
        "Fire for Effect": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fire Group": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fire Starter": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Flames of Wrath": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Flare": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Flesh Eater": { "cost": 3, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Fog of War": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Force Field": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Force Hammer": { "cost": 4, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Force of Faith": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Forced Evolution": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fortify": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Fortune": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Foxhole": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Freezing Grip": { "cost": 4, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Freezing Mist": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frozen Ground": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Frostbite": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Fuel the Flames": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Full Throttle": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Fury": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Gallows": { "cost": 3, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Ghost Shroud": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ghost Walk": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Grave Whispers": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Grind": { "cost": 3, "rng": 10, "aoe": "–", "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Grip of Death": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ground Zero": { "cost": 3, "rng": "SELF", "aoe": 5, "pow": 13, "up": "NO", "off": "NO", "description": "" },
        "Guidance": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Guided Blade": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Guilded Fire": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hallowed Avenger": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hallowed Guardian": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hand of Fate": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hardened Flesh": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Harvest": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Heal": { "cost": 4, "rng": "*", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Heightened Reflexes": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hellfire": { "cost": 3, "rng": 10, "aoe": "–", "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Hellmouth": { "cost": 4, "rng": 8, "aoe": "*", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Hex Blast": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Hex Bolt": { "cost": 2, "rng": 6, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Hex Hammer": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hidden Path": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hoarfrost": { "cost": 3, "rng": 8, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Hollow": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Holy Ward": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Hot Shot": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Howling Flames": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Howling Wind": { "cost": 1, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hunter's Mark": { "cost": 4, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Battle": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Passage": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hymn of Shielding": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Hyper Awareness": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ice Bolt": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Ice Cage": { "cost": 3, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Ice Shield": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Icy Grip": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Ignite": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Illusion of Vitality": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Immolation": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Incite": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Infernal Machine": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Inferno": { "cost": 3, "rng": 10, "aoe": 3, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Influence": { "cost": 1, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Inhospitable Ground": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Instigate": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Inviolable Resolve": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Iron Aggression": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Iron Flesh": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Jackhammer": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Jaws of Death": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Jump Start": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Killing Ground": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Killing Tide": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Lamentation": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Leash": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Light in the Darkness": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Light of Nyrro": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Lightning Shroud": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Lightning Storm": { "cost": 3, "rng": 8, "aoe": 3, "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Lightning Tendrils": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Lightning Tongue": { "cost": 3, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Locomotion": { "cost": "1+", "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Mage Sight": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Magnetic Hold": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Mark of Lyliss": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Marked for Death": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Medicate": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Mindblow": { "cost": 2, "rng": 8, "aoe": "–", "pow": 11, "up": "NO", "off": "YES", "description": "" },
        "Mindlock": { "cost": 4, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Mirage": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Mist Shroud": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Mobility": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Mockery of Life": { "cost": 2, "rng": "CTRL", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Molten Metal": { "cost": 2, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Mortality": { "cost": 3, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Murder of Crows": { "cost": 3, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Muzzle": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Mystic Wards": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Obliteration": { "cost": 4, "rng": 10, "aoe": 4, "pow": 15, "up": "NO", "off": "YES", "description": "" },
        "Occultation": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Overmind": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Parasite": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Parasitic Invigoration": { "cost": 1, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Perdition": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Phantasm": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Phantom Hunter": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Pig Pen": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Playing God": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Polarity Shield": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Positive Charge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Powder Keg": { "cost": 4, "rng": 10, "aoe": 5, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Power Booster": { "cost": 1, "rng": 5, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Prayer of Guidance": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Primal Shock": { "cost": 2, "rng": "CTRL", "aoe": "–", "pow": "*", "up": "NO", "off": "YES", "description": "" },
        "Protection from Cold": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Corrosion": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Electricity": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protection from Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Protector's Mark": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Prowess of Lurynsar": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Psi Blast": { "cost": 2, "rng": 8, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "SP8" },
        "Psychic Vampire": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Psychophage": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Purification": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Quagmire": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Quickened": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Raging Winds": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Raise Dead": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Rampager": { "cost": 3, "rng": 10, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Rapid Growth": { "cost": 2, "rng": "CTRL", "aoe": 4, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Ravager": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rawhide": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Razor Wall": { "cost": 2, "rng": "CTRL", "aoe": "WALL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Razor Wind": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Realignment": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Reconstruction": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Redline": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Refuge": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Respawn": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Restoration": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Return Fire": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rift": { "cost": 3, "rng": 8, "aoe": 4, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Righteous Flames": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rime": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rise in Death": { "cost": 3, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Rising Tide": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rock Hammer": { "cost": 3, "rng": 10, "aoe": 3, "pow": 14, "up": "NO", "off": "YES", "description": "" },
        "Rock Wall": { "cost": 2, "rng": "CTRL", "aoe": "*", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Roots of the Earth": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Accuracy": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Black Penny": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Brutal": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Detonator": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Disruption": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Earth Shaker": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Electro Leap": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Fire Beacon": { "cost": 2, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Freeze Fire": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Heart Stopper": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Iron Rot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Molten Shot": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Momentum": { "cost": 4, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Phantom Seeker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Piercer": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Shadow Fire": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Silencer": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spell Cracker": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Spontaneous Combustion": { "cost": 1, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Thunderbolt": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Rune Shot: Trick Shot": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Sacraficial Pawn": { "cost": 3, "rng": "SELF", "aoe": "*", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sanguine Blessing": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Savagery": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sea Legs": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sea of Fire": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Shadow Pack": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shadow Sight": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shatter Storm": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shield of Faith": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Shock Wave": { "cost": 4, "rng": "SELF", "aoe": "*", "pow": 13, "up": "NO", "off": "NO", "description": "" },
        "Short Out": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Shrapnel Swarm": { "cost": 3, "rng": 8, "aoe": "*", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Snipe": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solid Ground": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Solovin's Boon": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Somnambulist": { "cost": 3, "rng": "CTRL", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Soothing Song": { "cost": 1, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Soul Mark": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Soul Slave": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Soulfire": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Spirit Fang": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Spirit Lash": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Star Crossed": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Star Fire": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Star-Crossed": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Staying Winter's Hand": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Stone Form": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Stone Hold": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Stone Skin": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Stone Spray": { "cost": 3, "rng": "SP8", "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Stone Stance": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Stone Strength": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Storm Tossed": { "cost": 1, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Storm Wall": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Stranglehold": { "cost": 2, "rng": 10, "aoe": "–", "pow": 11, "up": "NO", "off": "YES", "description": "" },
        "Stygian Abyss": { "cost": 3, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Summon Vortex": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Sunburst": { "cost": 3, "rng": 10, "aoe": 3, "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Sunder Spirit": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Sunhammer": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Superiority": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Sure Foot": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Synergy": { "cost": 2, "rng": 10, "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Telekinesis": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "*", "description": "" },
        "Telgesh Mark": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Temper Metal": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Tempest": { "cost": 4, "rng": 8, "aoe": 4, "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Tide of Steel": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Torment": { "cost": 2, "rng": 10, "aoe": "–", "pow": 12, "up": "NO", "off": "YES", "description": "" },
        "Tornado": { "cost": 4, "rng": 10, "aoe": "–", "pow": 13, "up": "NO", "off": "YES", "description": "" },
        "Total Domination": { "cost": 4, "rng": 8, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Total Spectrum": { "cost": 1, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Transference": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Triage": { "cost": 2, "rng": "B2B", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Path": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "True Sight": { "cost": 2, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Twister": { "cost": 2, "rng": 10, "aoe": 3, "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Unease": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Unminding": { "cost": 3, "rng": 10, "aoe": "–", "pow": "–", "up": "YES", "off": "YES", "description": "" },
        "Unnatural Aggression": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Unstoppable Force": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Veil of Mists": { "cost": 3, "rng": "CTRL", "aoe": 4, "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Venom": { "cost": 2, "rng": "SP8", "aoe": "–", "pow": 10, "up": "NO", "off": "YES", "description": "" },
        "Vision": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Void Curse": { "cost": 4, "rng": "–", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Voltaic Lock": { "cost": 4, "rng": 10, "aoe": "*", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Voodoo Doll": { "cost": 2, "rng": 8, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Wall of Fire": { "cost": 2, "rng": "CTRL", "aoe": "*", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Warpath": { "cost": 2, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Watcher": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Wave of Vivification": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Weald Hunter": { "cost": 2, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "White Out": { "cost": 4, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Wild Aggression": { "cost": 3, "rng": 6, "aoe": "–", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Will Breaker": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "YES", "off": "NO", "description": "" },
        "Wind Blast": { "cost": 2, "rng": "CTRL", "aoe": 5, "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Wind Ravager": { "cost": 3, "rng": "SELF", "aoe": "CTRL", "pow": "–", "up": "NO", "off": "NO", "description": "" },
        "Wind Strike": { "cost": 1, "rng": 6, "aoe": "–", "pow": "–", "up": "NO", "off": "YES", "description": "" },
        "Wind Wall": { "cost": 3, "rng": "SELF", "aoe": "–", "pow": "–", "up": "NO", "off": "NO", "description": "" },
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
    
    // ## Melee Weapon DB ## \\
    (function() {
      
      var meleeWeaponDB = {
        "Ancestral Guardian Stone Weapon": { "skill": "Great Weapon", "mat-mod": 0, "pow": 7, "notes": "reach, no guardian: -3 at mod" },
        "Annihilator Blade": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach" },
        "Assassin's Blade": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "+2 backstrike" },
        "Axe": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 3, "notes": "" },
        "Axe, Great": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "Crit: +1 die dmg" },
        "Axe, Horseman's": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "reach, mounted: at-mod 0, POW 5, +2 charge at" },
        "Axe, Ice": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 2, "notes": "+1 to Climbing rolls" },
        "Axe, Riding": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, charge: +2 dmg rolls, foot: -1 at mod, POW 3" },
        "Axe, Tharn": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "reach, charge: +2 charge at rolls, 1-H: POW 4" },
        "Az'Tal": { "skill": "Great Weapon", "mat-mod": 0, "pow": 4, "notes": "reach, charge: +2 dmg, foot: -1 at mod" },
        "Barbed Whip": { "skill": "Hand Weapon", "mat-mod": -2, "pow": 3, "notes": "reach" },
        "Battle Hammer": { "skill": "Great Weapon", "mat-mod": -1, "pow": 6, "notes": "reach, 1-H: -2 at mod, POW 5" },
        "Bayonet": { "skill": "Great Weapon", "mat-mod": -1, "pow": 3, "notes": "reach, for Rifles, +2 charge at" },
        "Blackclad Voulge": { "skill": "Great Weapon", "mat-mod": -2, "pow": 4, "notes": "reach, blackclad: at mod 0, magical weapon" },
        "Blast Shield": { "skill": "Shield", "mat-mod": -1, "pow": 1, "notes": "-2 DEF, no blast dmg" },
        "Blasting Lance": { "skill": "Lance", "mat-mod": 0, "pow": 10, "notes": "reach, Crit: knockdown, no charge: at mod -2, POW 4" },
        "Blasting Pike": { "skill": "Great Weapon", "mat-mod": -2, "pow": 7, "notes": "reach, Crit: Knockdown" },
        "Blazing Sword": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": 'magical weapon, 1" AOE if enemy incapacitated' },
        "Blessed Lance": { "skill": "Lance", "mat-mod": 0, "pow": 8, "notes": "ignore ARM/DEF spell effects, only charge at, can dmg incorporeal" },
        "Blighted Blade": { "skill": "Hand Weapon", "mat-mod": 2, "pow": 3, "notes": "crit: no tough, p.92" },
        "Bloodtracker Fighting Claw": { "skill": "Hand Weapon", "mat-mod": -2, "pow": 3, "notes": "" },
        "Caspian Battleblade": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "1-H: mat-mod -1, POW 4" },
        "Cat's Paw": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 2, "notes": "Crit: Knockout" },
        "Cleft Spear": { "skill": "Great Weapon", "mat-mod": -2, "pow": 5, "notes": "reach, charge: +2 at rolls, Crit: 1 feat for +1 dmg die, 1-H: POW 4" },
        "Cleft Sword": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "harge: +2 at rolls, Crit: 1 feat for +1 dmg die, 1-H: POW 5" },
        "Clockwork Injector": { "skill": "Hand Weapon", "mat-mod": -2, "pow": "–", "notes": "1 dmg, injection" },
        "Club": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "Crit: Knockout chance" },
        "Club, Banded": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "Crit: Knockout chance" },
        "Consecrated Halbert": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, magical weapon" },
        "Cutlass": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "" },
        "Dagger": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 1, "notes": "" },
        "Dagger, Poisoner's": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 1, "notes": "holds 3 doses of poison" },
        "Deadblow Hammer": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "1 feat: +1 dmg die against knockdown" },
        "Dueling Buckler": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 0, "notes": "" },
        "Durkin Bar": { "skill": "Great Weapon", "mat-mod": -2, "pow": 5, "notes": "" },
        "Electro Lance": { "skill": "Great Weapon", "mat-mod": 0, "pow": 7, "notes": "reach, charge +2 POW, foot: at mod -4" },
        "Entrenching Tool, Military": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "" },
        "Fellblade": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach, magical weapon, 1-H: at mod -2" },
        "Fighting Claws, Pair": { "skill": "Unarmed Combat", "mat-mod": -2, "pow": 1, "notes": "Crit: lower at" },
        "Firebrand": { "skill": "Great Weapon", "mat-mod": -2, "pow": 7, "notes": "maical weapon, Crit: fire cont. eff." },
        "Flail": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "ignore shields" },
        "Flail, Two-Handed": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "reach, ignore shields, Crit: p.255" },
        "Flame Spear": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "reach, +1 fire dmg" },
        "Gaff Spear": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "reach, feat: knockdown, 1-H: POW 3" },
        "Gaff, Hand": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "" },
        "Gaff, Pole": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "reach, Crit: Knockdown on dmg" },
        "Garrote": { "skill": "Unarmed Weapon", "mat-mod": 0, "pow": "–", "notes": "srangle the victim" },
        "Garrote, Clockwork": { "skill": "Unarmed Weapon", "mat-mod": 0, "pow": "–", "notes": "strangles the victim" },
        "Halbert": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, +2 charge at, 1-H: at-mod -1, POW 4" },
        "Hand Pick": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 2, "notes": "1 feat: additional dmg die against knocked down targets" },
        "Hooked Great Sword": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "reach, 1-H: POW 5" },
        "Ice Axe": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "+1 on climbing" },
        "Ice Maul": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, dmg boosted unless immunity cold" },
        "Ilena's Chain-Axe": { "skill": "Hand Weapon", "mat-mod": -3, "pow": 4, "notes": "reach, ignores shields, can be thrown" },
        "Katara, Pair": { "skill": "Unarmed Combat", "mat-mod": -1, "pow": 4, "notes": "" },
        "Knuckledriver": { "skill": "Unarmed Combat", "mat-mod": -1, "pow": 3, "notes": "Beat Back, Crit: slam d3" },
        "Knuckledusters": { "skill": "Unarmed Combat", "mat-mod": 0, "pow": 1, "notes": "better knockouts" },
        "Kolas Club": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "Crit: 1 feat +1 die" },
        "Kopis": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 3, "notes": "+2 charge at, Crit: 1 feat for +1 die dmg" },
        "Lacerator": { "skill": "Hand Weapon", "mat-mod": -3, "pow": 4, "notes": "reach, Crit: Knockdown, ignore shields" },
        "Lance": { "skill": "Lance", "mat-mod": 0, "pow": 8, "notes": "reach" },
        "Mace": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "Crit: Knockout chance" },
        "Man Catcher": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "reach" },
        "Maul": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "Crit: 1 feat slam d3" },
        "Mechanoflail": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 5, "notes": "ignores shields, feat: additional at" },
        "Nyss Claymore": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "1 feat: boost at" },
        "Nyss Great Sword": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "reach, 1 feat: boost at" },
        "Ogrun Warcleaver": { "skill": "Great Weapon", "mat-mod": -1, "pow": 6, "notes": "reach, +2 charge at" },
        "Orgoth Staff": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach, magical weapon, 1-H: at mod -2" },
        "Pen, Blade": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 1, "notes": "" },
        "Pen, Poison": { "skill": "Hand Weapon", "mat-mod": 0, "pow": -2, "notes": "injects poison" },
        "Pickaxe": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "special: p. 257" },
        "Pike": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "reach, charge: +2 at, 1-H: -1 at mod, POW 4" },
        "Railman's Adze": { "skill": "Great Weapon", "mat-mod": -2, "pow": 7, "notes": "" },
        "Rapier": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "1 feat boost at and dmg" },
        "Reclaimant Torch": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "reach, +1 fire dmg, fire cont. eff." },
        "Relic Blade": { "skill": "Great Weapon", "mat-mod": 0, "pow": 5, "notes": "magical weapon" },
        "Retractable Lance": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "reach, NQ#50, p. 52" },
        "Rynnish Fan": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 1, "notes": "" },
        "Sacral Blade": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 3, "notes": "POW 1 if not empowered" },
        "Satyxis Horns": { "skill": "Unarmed Combat", "mat-mod": 0, "pow": 3, "notes": "Crit: Knockout strike" },
        "Shepherd's Crook": { "skill": "Great Weapon", "mat-mod": -1, "pow": 4, "notes": "reach, +2 Animal Handling" },
        "Shield": { "skill": "Shield", "mat-mod": 0, "pow": 0, "notes": "" },
        "Shield, Combat": { "skill": "Shield", "mat-mod": -1, "pow": 3, "notes": "" },
        "Shield, Karax": { "skill": "Shield", "mat-mod": -2, "pow": 0, "notes": "" },
        "Spear": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "reach, +2 charge at, 1-H: POW 4" },
        "Spear, Cavalry": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "charge: +2 dmg, 1-H or foot: -2 at mod, POW 4" },
        "Spear, War": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach, charge: +2 dmg, 1-H: -1 at mod, POW 5" },
        "Spike Maul": { "skill": "Great Weapon", "mat-mod": -2, "pow": 6, "notes": "Crit: Knock down" },
        "Springblade": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 1, "notes": "draw without quick action" },
        "Staff": { "skill": "Great Weapon", "mat-mod": 0, "pow": 3, "notes": "reach, 1 feat: trip at" },
        "Staff, Battle": { "skill": "Great Weapon", "mat-mod": 0, "pow": 4, "notes": "reach, 1 feat: trip at, Crit: Knockout chance" },
        "Stone Great Sword": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach, no stone vessel: -2 at mod" },
        "Stormcaller and Lightning Rod": { "skill": "Great Weapon", "mat-mod": -2, "pow": 3, "notes": "reach, 2-H: -1" },
        "Sword": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 3, "notes": "" },
        "Sword Cane": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 0, "notes": "drawn POW 2" },
        "Sword, Dress": { "skill": "Hand Weapon", "mat-mod": 1, "pow": 1, "notes": "Feat: boost at and dmg" },
        "Sword, Great": { "skill": "Great Weapon", "mat-mod": 0, "pow": 6, "notes": "reach" },
        "Sword, Praetorian": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 3, "notes": "" },
        "Telescoping Staff": { "skill": "Great Weapon", "mat-mod": 0, "pow": 4, "notes": "reach, feat: Knockdown no dmg, 1-H: POW 3" },
        "Tobresh": { "skill": "Great Weapon", "mat-mod": -2, "pow": 4, "notes": "reach" },
        "Tournament Foil": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 0, "notes": "" },
        "Trench Knife": { "skill": "Hand Weapon", "mat-mod": 0, "pow": 2, "notes": "alt. Unarmed Combat" },
        "Trench Sword": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "alt. Unarmed Combat" },
        "Trollkin Rune Axe": { "skill": "Hand Weapon", "mat-mod": -1, "pow": 4, "notes": "magical, Connection (Trollkin Kriel): at mod 0" },
        "Voltaic Halbert": { "skill": "Great Weapon", "mat-mod": 1, "pow": 6, "notes": "lightning arc to nearest character" },
        "War Hammer": { "skill": "Great Weapon", "mat-mod": -1, "pow": 5, "notes": "Crit: Knockout chance" }
      };
      
      ikrpg.generator.db.meleeWeapon = meleeWeaponDB;
      
    })();
    
    // ## Ranged Weapon DB ## \\
    (function() {
      
      var rangedWeaponDB = {
        "Arcus": { "rng": 8, "skill": "Crossbow", "pow": 12, "rat-mod": -2, "notes": "push", "ammo": "1" },
        "Assault Kommando Flamethrower": { "rng": 8, "skill": "Light Artillery", "pow": 12, "rat-mod": 0, "notes": "SP 8, -1 SPD and DEF, fire dmg, fire cont. eff.", "ammo": "10" },
        "Axe, Throwing": { "rng": 6, "skill": "Thrown Weapon", "pow": 3, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Blowtorch": { "rng": 0.5, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "fire dmg, Crit: Fire cont eff", "ammo": "10" },
        "Blunderbuss": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "1-H: RAT -2", "ammo": "1" },
        "Bola": { "rng": 8, "skill": "Thrown Weapon", "pow": 0, "rat-mod": -2, "notes": "add STR to POW", "ammo": "" },
        "Bomb Lance": { "rng": 8, "skill": "Light Artillery", "pow": 12, "rat-mod": -2, "notes": 'on hit 3" AOE with POW 6', "ammo": "1" },
        "Bombardier Grenade Cannon": { "rng": 10, "skill": "Light Artillery", "pow": 14, "rat-mod": -1, "notes": "AOE 3", "ammo": "1" },
        "Bow": { "rng": 10, "skill": "Archery", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Bow, Great": { "rng": 10, "skill": "Archery", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Bow, Nyss": { "rng": 12, "skill": "Archery", "pow": 10, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Bow, Tharn": { "rng": 12, "skill": "Archery", "pow": 13, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Cannon, Royal Weight": { "rng": 20, "skill": "Heavy Artillery", "pow": "*", "rat-mod": "*", "notes": "see KNG p. 308", "ammo": "1" },
        "Cannon-Shield": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Carbine": { "rng": 10, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Chain Gun": { "rng": 10, "skill": "Light Artillery", "pow": 10, "rat-mod": 0, "notes": "fire burst: d3 attacks", "ammo": "30" },
        "Crossbow": { "rng": 10, "skill": "Crossbow", "pow": 12, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Crossbow, Dual": { "rng": 12, "skill": "Crossbow", "pow": 10, "rat-mod": 0, "notes": "1-H: at mod -2", "ammo": "2" },
        "Crossbow, Lawbringer": { "rng": 10, "skill": "Crossbow", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "10" },
        "Crossbow, Repeating": { "rng": 10, "skill": "Crossbow", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "6" },
        "Crucible Arms Model 603": { "rng": 10, "skill": "Rifle", "pow": 11, "rat-mod": 0, "notes": "", "ammo": "8" },
        "Deck Gun": { "rng": 14, "skill": "Light Artillery", "pow": 13, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Dual Magelock": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "both barrels: at mod -2, POW 13", "ammo": "2" },
        "Dueling Pistols": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": 1, "notes": "standard round: at mod 0", "ammo": "1" },
        "Efaarit Hunting Rifle": { "rng": 12, "skill": "Rifle", "pow": 7, "rat-mod": 0, "notes": "once per turn Piercer at", "ammo": "1" },
        "Execrator Pistol": { "rng": 8, "skill": "Pistol", "pow": 11, "rat-mod": 0, "notes": "magical, +1 die against infernal and undead", "ammo": "2" },
        "Explosive Cufflinks": { "rng": 6, "skill": "Thrown Weapon", "pow": 14, "rat-mod": -3, "notes": "POW 14 blast dmg", "ammo": "–" },
        "Farrow Pig Iron": { "rng": 10, "skill": "Rifle", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Farrow Razorback": { "rng": 14, "skill": "Light Artillery", "pow": 15, "rat-mod": -2, "notes": "AOE 3", "ammo": "1" },
        "Field Gun": { "rng": 16, "skill": "Light Artillery", "pow": 14, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Fire Bomb": { "rng": 5, "skill": "Thrown Weapon", "pow": 12, "rat-mod": -2, "notes": "fire dmg, Crit: fire cont. eff.", "ammo": "–" },
        "Flare Pistol": { "rng": 6, "skill": "Pistol", "pow": "*", "rat-mod": -3, "notes": "Signal Flare or Smoke Signal", "ammo": "1" },
        "Flayer Cannon": { "rng": 14, "skill": "Reiver", "pow": 12, "rat-mod": 0, "notes": "bigger bases: more dmg", "ammo": "18" },
        "Grenade, Concussion": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Explosive": { "rng": 8, "skill": "Thrown Weapon", "pow": 12, "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Smoke": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Grenade, Strangle Gas": { "rng": 8, "skill": "Thrown Weapon", "pow": "", "rat-mod": 0, "notes": "AOE 3", "ammo": "" },
        "Gun Axe": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "", "ammo": "1" },
        "Hand Cannon": { "rng": 12, "skill": "Pistol", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Hand Cannon, Dual": { "rng": 12, "skill": "Pistol", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "2" },
        "Harpoon Gun": { "rng": 10, "skill": "Rifle", "pow": 12, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Incindus": { "rng": 10, "skill": "Light Artillery", "pow": 12, "rat-mod": -2, "notes": "fire dmg, fire cont. eff.", "ammo": "1" },
        "Injection Pistol": { "rng": 4, "skill": "Pistol", "pow": 8, "rat-mod": -2, "notes": "injects alchemical compound", "ammo": "1" },
        "Javelin": { "rng": 8, "skill": "Thrown Weapon", "pow": 3, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Knife, Throwing": { "rng": 6, "skill": "Thrown Weapon", "pow": 2, "rat-mod": 0, "notes": "add STR to POW", "ammo": "" },
        "Light Cannon": { "rng": 15, "skill": "Light Artillery", "pow": 13, "rat-mod": 0, "notes": "AOE 3", "ammo": "1" },
        "Linethrower": { "rng": 4, "skill": "Light Artillery", "pow": 10, "rat-mod": -2, "notes": 'pull 3"', "ammo": "1" },
        "Man-O-War Axe Cannon": { "rng": 8, "skill": "Light Artillery", "pow": 14, "rat-mod": -1, "notes": "", "ammo": "1" },
        "Man-O-War Shield Cannon": { "rng": 6, "skill": "Light Artillery", "pow": 14, "rat-mod": -1, "notes": "melee: at mod -1, POW 1", "ammo": "1" },
        "Mini-Slugger": { "rng": 10, "skill": "Light Artillery", "pow": 11, "rat-mod": 0, "notes": "fired standing: at mod -1", "ammo": "30" },
        "Mortar": { "rng": 20, "skill": "Light Artillery", "pow": 16, "rat-mod": -4, "notes": 'AOE 4, -2 SPD and DEF, min rng 8"', "ammo": "1" },
        "Ogrun Battle Cannon": { "rng": 12, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "AOE 3, 1-H: RAT -2", "ammo": "1" },
        "Pen, Grenade": { "rng": 5, "skill": "Thrown Weapon", "pow": "*", "rat-mod": -2, "notes": "several grenates, KNG p. 244", "ammo": "–" },
        "Pen, Shot": { "rng": 2, "skill": "Pistol", "pow": 8, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Pistol": { "rng": 8, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Pistol, Collapsible": { "rng": 7, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "easy to hide", "ammo": "1" },
        "Pistol, Holdout": { "rng": 4, "skill": "Pistol", "pow": 8, "rat-mod": 1, "notes": "", "ammo": "1" },
        "Pistol, Magelock": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Pistol, Repeating": { "rng": 8, "skill": "Pistol", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Purifier": { "rng": 8, "skill": "Light Artillery", "pow": 12, "rat-mod": 0, "notes": "Spray", "ammo": "8" },
        "Quad-Iron": { "rng": 10, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "4" },
        "Radcliffe Carbine": { "rng": 13, "skill": "Rifle", "pow": 11, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "5" },
        "Radcliffe Firestorm": { "rng": 8, "skill": "Pistol", "pow": 12, "rat-mod": -1, "notes": "", "ammo": "5" },
        "Reiver": { "rng": 12, "skill": "Reiver", "pow": 10, "rat-mod": -2, "notes": "bigger bases: additional dmg", "ammo": "1" },
        "Rifle": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Collapsible": { "rng": 10, "skill": "Rifle", "pow": 11, "rat-mod": -1, "notes": "easy to hide", "ammo": "1" },
        "Rifle, Heavy": { "rng": 14, "skill": "Rifle", "pow": 12, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Long": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Magelock": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Rifle, Military": { "rng": 10, "skill": "Rifle", "pow": 11, "rat-mod": 0, "notes": "", "ammo": "1" },
        "Rifle, Repeating": { "rng": 14, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "Rockbreaker Spray": { "rng": 6, "skill": "Light Artillery", "pow": 10, "rat-mod": -2, "notes": "SP6, corrosion dmg, corrosion cont effect, stone/brick add dmg die", "ammo": "6" },
        "Rocket Tube": { "rng": 14, "skill": "Light Artillery", "pow": 12, "rat-mod": 0, "notes": "AOE 3, not crouching: at mod -2", "ammo": "1" },
        "Rynnish Walking Stick": { "rng": 8, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "1-H: RAT -2", "ammo": "1" },
        "Scattergun": { "rng": 8, "skill": "Rifle", "pow": 12, "rat-mod": 0, "notes": "SP8, 1-H: RAT -2", "ammo": "1" },
        "Skyhammer": { "rng": 16, "skill": "Light Artillery", "pow": 12, "rat-mod": -4, "notes": "AOE 3", "ammo": "1" },
        "Sling": { "rng": 10, "skill": "Thrown Weapon", "pow": 8, "rat-mod": -2, "notes": "", "ammo": "1" },
        "Slug Gun": { "rng": 4, "skill": "Pistol", "pow": 14, "rat-mod": -1, "notes": "1-H: RAT -2", "ammo": "1" },
        "Slugger": { "rng": 10, "skill": "Light Artillery", "pow": 13, "rat-mod": -1, "notes": "-2 SPD and DEF", "ammo": "30" },
        "Snare Gun": { "rng": 8, "skill": "Pistol", "pow": 10, "rat-mod": -1, "notes": "Crit: Knockdown", "ammo": "1" },
        "Sword-Cannon, Heavy": { "rng": 10, "skill": "Rifle", "pow": 12, "rat-mod": -1, "notes": "", "ammo": "1" },
        "Sword-Cannon, Repeating": { "rng": 10, "skill": "Rifle", "pow": 10, "rat-mod": -1, "notes": "", "ammo": "5" },
        "Vislovski Carbine": { "rng": 10, "skill": "Rifle", "pow": 10, "rat-mod": 0, "notes": "", "ammo": "5" },
        "War Spear": { "rng": 8, "skill": "Thrown Weapon", "pow": 4, "rat-mod": 0, "notes": "melee: reach, Great Weapon", "ammo": "1" }
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
        "Animal Mastery": undefined,
        "Appraise": undefined,
        "Arcane Assassin": undefined,
        "Arcane Consumption": undefined,
        "Arcane Craftsmanship": undefined,
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
        "Balance Out": undefined,
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
        "Beast Manipulation: Caretaker": undefined,
        "Beast Manipulation: Dominator": undefined,
        "Beast Manipulation: Enrage": undefined,
        "Beast Manipulation: Medicate": undefined,
        "Beast Manipulation: Toughen": undefined,
        "Beast Master": undefined,
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
        "Combo Strike (Nyss Claymore)": undefined,
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
        "Divine Might": undefined,
        "Dodger": undefined,
        "Dominating Presence": undefined,
        "Doom Gaze": undefined,
        "Double Powder Ration": undefined,
        "Draconic Eminence": undefined,
        "Drain Essence": undefined,
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
        "Feat: Hit-and-Run": undefined,
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
        "Perfect Form": undefined,
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
        "Privilege": undefined,
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
        "Shadow Steel": undefined,
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
        "Spawn Whisperer": undefined,
        "Spawning Savant": undefined,
        "Specialization": undefined,
        "Spirit Eater": undefined,
        "Spirit Guide": undefined,
        "Spirit Tap": undefined,
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
        "Targeted Strike": undefined,
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
        "Wall of Flesh": undefined,
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
        });
        
      })();
      
      // ### Update computed SPD (on load) ### \\ HACK!
      (function() {
        
        setTimeout(function() {
          $("#characters > tbody > tr > td:nth-of-type(5) > a").click(function(event) {
            event.preventDefault();
          
            var a = $(event.target);
            var tr = a.parent().parent();
            var name = tr.find("td:nth-of-type(1)").text();
          
            ikrpg.sheet.showCharacter(name);
            
            setTimeout(function() { // HACK! (problem seems to be that pouch db is async loading)
              var spd = $(".character-sheet #spd").val() || 0;
              $(".character-sheet #computed-spd").val(spd);
            }, 500);
          });
        }, 500);
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
          var abilityBaseName = title.replace(/(\(.*\))+/g, "").replace(/\s+$/, "");
          var ability = input.parent();
          var entry = $.grep(data, function(e) { return e["name"] == abilityBaseName; });
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
          buildAutocomplete(".character-sheet #"+$(capacitor).attr("id"), ".title");
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
      "Blaati",
      "Caspian",
      "Cygnaran",
      "Five Cant",
      "Gobberish",
      "Grun",
      "Havaati",
      "Idrian",
      "Kadesh",
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
      "Soresh",
      "Sulese",
      "Telgesh",
      "Thrallspeak",
      "Thurian",
      "Umbrean"
    ];
    var races = {
      "Blighted Ogrun": [
        string(_race, "Blighted Ogrun"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 7),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 2),
        number(_PER, 2),
        number(_PHY_max, 7),
        number(_SPD_max, 6),
        number(_STR_max, 8),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 5),
        number(_PER_max, 4),
        list(_languages, ["Molgur-Og", "Aeric"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 82, 105),
        range(_weight, 330, 500),
        list(_abilities, ["Blight Gifts", "Blood Mad", "Huge Stature"])
      ],
      "Bog Trog": [
        string(_race, "Bog Trog"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 2),
        number(_INT, 2),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 6),
        number(_STR_max, 7),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 3),
        number(_INT_max, 4),
        number(_ARC_max, 4),
        number(_PER_max, 4),
        listItem(_languages, "Quor-Og"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 66, 80),
        range(_weight, 196, 340),
        list(_abilities, ["Amphibious", "Blending", "Natatorial"])
      ],
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
      "Efaarit": [
        string(_race, "Efaarit"),
        number(_PHY, 6),
        number(_SPD, 6),
        number(_STR, 4),
        number(_AGL, 3),
        number(_PRW, 3),
        number(_POI, 4),
        number(_INT, 2),
        number(_PER, 4),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Blaati"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 38, 54),
        range(_weight, 48, 90),
        list(_abilities, [
          "Adapted (Desert)",
          "Shallow Breathing",
          "Trained Rider (bletcher)"])
      ],
      "Farrow": [
        string(_race, "Farrow"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
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
        listItem(_languages, "Grun"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 55, 75),
        range(_weight, 100, 260),
        list(_abilities, [
          "Go to Ground",
          "Disease Resistance",
          "Hightened Olfactory Senses"])
      ],
      "Gatorman": [
        string(_race, "Gatorman"),
        number(_PHY, 6),
        number(_SPD, 5),
        number(_STR, 6),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 2),
        number(_INT, 3),
        number(_PER, 2),
        number(_PHY_max, 8),
        number(_SPD_max, 6),
        number(_STR_max, 8),
        number(_AGL_max, 4),
        number(_PRW_max, 5),
        number(_POI_max, 3),
        number(_INT_max, 5),
        number(_ARC_max, 4),
        number(_PER_max, 4),
        listItem(_languages, "Quor-Gar"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 76, 96),
        range(_weight, 450, 800),
        list(_abilities, [
          "Amphibious",
          "Bite",
          "Flesh of Steel",
          "Gnawing Hunger",
          "Imitative Power"])
      ],
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
      "Human (IKU)": [
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
          numberPair(_INT, 1) ], "Choose 1"),
        listItem(_abilities, "Distrusted")
      ],
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
      "Nyss (IKU)": [
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
          "Gains +1 on Initiative and PER rolls",
          "Gains +3 ARM against cold damage",
          "Gains -3 ARM against fire damage"]),
        list(_abilities, [
          "Specialization (Nyss Claymore)",
          "Specialization (Nyss Bow)"])
      ],
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
      "Pygmy Troll": [
        string(_race, "Pygmy Troll"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 4),
        number(_AGL, 3),
        number(_PRW, 3),
        number(_POI, 4),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Molgur-Trul"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 40, 55),
        range(_weight, 105, 190),
        list(_abilities, [
          "Poison Resistance",
          "Spawn Whelps",
          "Troll Resilience"]),
        listItem(_benefits, "Tough")
      ],
      "Satyxis": [
        string(_race, "Satyxis"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 5),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        list(_languages, ["Satyxi", "Sharde"]),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 55, 69),
        range(_weight, 100, 160),
        list(_notes, [
          "Satyxis cannot be Arcane Mechanik or Arcanist",
          "A satyxis must be female"]),
        listItem(_melee_weapons, "Satyxis Horns")
      ],
      "Skorne": [
        string(_race, "Skorne"),
        number(_PHY, 5),
        number(_SPD, 6),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 4),
        number(_INT, 3),
        number(_ARC, 1),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 7),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 5),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        choices(arrayPairs(_languages, ["Havaati", "Kadesh", "Soresh"]), "Choose 2"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 61, 83),
        range(_weight, 90, 200),
        list(_abilities, ["Arcane Potential", "Limited Arcane Tradition"])
      ],
      "Strider": [
        string(_race, "Strider"),
        number(_PHY, 5),
        number(_SPD, 7),
        number(_STR, 4),
        number(_AGL, 4),
        number(_PRW, 4),
        number(_POI, 4),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 8),
        number(_STR_max, 6),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 5),
        number(_INT_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Aeric"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 61, 79),
        range(_weight, 95, 195),
        list(_abilities, ["Blight Gifts"]),
        list(_notes, [
          "Gains +3 ARM against cold damage",
          "Gains -3 ARM against fire damage"]),
        list(_abilities, [
          "Blight Gifts",
          "Pathfinder",
          "Specialization (Nyss Claymore)",
          "Specialization (Nyss Bow)"])
      ],
      "Tharn": [
        string(_race, "Tharn"),
        number(_PHY, 6),
        number(_SPD, 6),
        number(_STR, 5),
        number(_AGL, 3),
        number(_PRW, 4),
        number(_POI, 3),
        number(_INT, 3),
        number(_PER, 3),
        number(_PHY_max, 7),
        number(_SPD_max, 7),
        number(_STR_max, 7),
        number(_AGL_max, 5),
        number(_PRW_max, 5),
        number(_POI_max, 4),
        number(_INT_max, 4),
        number(_ARC_max, 4),
        number(_PER_max, 5),
        listItem(_languages, "Molgur-Tharn"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        range(_height, 62, 85),
        range(_weight, 110, 300),
        listItem(_benefits, "Feat: Transformation")
      ],
      "Trollkin": [
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
      ]
    };
    var castes = {
      "Extoller": [
        listItem(_notes, "Extoller Caste"),
        listItem(_ARC, 1),
        listItem(_abilities, "Exalted Dialogue")
      ],
      "Outcast": [
        listItem(_notes, "Outcast Caste"),
        listItem(_notes, "Outcasts roll one less non-Intimidation social skill die")
      ],
      "Paingiver": [
        listItem(_notes, "Paingiver Caste"),
        listItem(_AGL, 1),
        listItem(_abilities, "Anatomical Precision")
      ],
      "Slave": [
        listItem(_notes, "Slave Caste"),
        listItem(_PHY, 1),
        listItem(_benefits, "Tough")
      ],
      "Warrior": [
        listItem(_notes, "Warrior Caste"),
        choices([ numberPair(_PRW, 1), numberPair(_POI, 1) ], "Choose 1"),
        listItem(_occupational_skills, "Lore (hoksune code)")
      ],
      "Worker": [
        listItem(_notes, "Worker Caste"),
        choices([ numberPair(_STR, 1), numberPair(_INT, 1) ], "Choose 1"),
        listItem(_notes, "Workers gain boosted Craft rolls")
      ]
    };
    var archetypes = {
      "Cunning": [
        string(_archetype, "Cunning"),
        choices(arrayPairs(_benefits, [
          "Battlefield Coordination",
          "Feat: Flawless Timing",
          "Feat: Influence",
          "Feat: Prescient",
          "Feat: Perfect Plot",
          "Feat: Plan of Action",
          "Feat: Quick Thinking",
          "Genius",
          "Hyper Perception",
          "Savant"]), "Choose 1"),
        listItem(_notes, "friendly models gain +1 on attack and damage rolls if within command range")
      ],
      "Gifted (FMF)": [
        string(_archetype, "Gifted"),
        choices(numberPairs(_ARC, [2, 3]), "Focusers start with ARC 2,<br />Will Weavers with ARC 3"),
        choices(arrayPairs(_benefits, [
          "Additional Study",
          "Combat Caster",
          "Fast Caster",
          "Feat: Dominator",
          "Feat: Powerful Caster",
          "Feat: Quick Cast",
          "Feat: Strength of Will",
          "Magic Sensitivity",
          "Rune Reader",
          "Warding Circle"]), "Choose 1")
      ],
      "Gifted (IKU)": [
        string(_archetype, "Gifted"),
        choices(numberPairs(_ARC, [2, 3]), "Harnessers start with ARC 2,<br />Will Weavers with ARC 3"),
        choices(arrayPairs(_benefits, [
          "Blood Boon",
          "Combat Caster",
          "Fast Caster",
          "Feat: Dominator",
          "Feat: Powerful Caster",
          "Feat: Quick Cast",
          "Feat: Strength of Will",
          "Magic Sensitivity",
          "Occult Secrets",
          "Rune Reader"]), "Choose 1")
      ],
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
      "Mighty": [
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
      "Skilled": [
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
      ]
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
      "Allegiant": [
        listItem(_careers, "Allegiant"),
        listItem(_notes, "Must choose between Cutthroat, Investigator, Priest (Menoth), Ranger, Scrutator, Spy, or Warcaster"),
        list(_abilities, ["Flesh of Steel", "Hardened Strike", "Shifting Sands Stance"]),
        listItem(_connections, "Order of the Fist"),
        listItem(_military_skills, "Unarmed Combat"),
        list(_occupational_skills, ["Detection", "Jumping", "Sneak"])
      ],
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
      "Arcane Tempest Gun Mage": [
        listItem(_careers, "Arcane Tempest Gun Mage"),
        list(_abilities, ["Craft Rune Shot", "Fast Reload"]),
        listItem(_connections, "Cygnaran military"),
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
          "Rifle, Magelock"]), "Choose 1"),
        listItem(_armors, "Armored Great Coat")
      ],
      "Arcanist": [
        listItem(_careers, "Arcanist"),
        listItem(_abilities, "Great Power"),
        list(_occupational_skills, ["Lore (Arcane)", "Research"]),
        list(_spells, ["Arcane Bolt", "Aura of Protection", "Light in the Darkness"]),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
      "Archer": [
        listItem(_careers, "Archer"),
        list(_abilities, ["Adjust Aim", "Blur of Motion", "Dual Shot (Archery)"]),
        listItem(_military_skills, "Archery"),
        list(_occupational_skills, ["Detection", "Sneak", "Survival"]),
        number(_gold, 25),
        listItem(_ranged_weapons, "Bow"),
        list(_gear, ["Quiver", "10 arrows of any type"])
      ],
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
      "Artillerist": [
        listItem(_careers, "Artillerist"),
        list(_abilities, ["Battle Plan: Close Fire", "Scorched Earth"]),
        list(_military_skills, ["Heavy Artillery", "Light Artillery", "Pistol", "Rifle"]),
        list(_occupational_skills, ["Command", "Detection", "Driving"]),
        number(_gold, 75),
        listItem(_ranged_weapons, "Deck Gun"),
        listItem(_gear, "powder and ten rounds of ammunition")
      ],
      "Ascetic": [
        listItem(_careers, "Ascetic"),
        list(_abilities, ["Flesh of Steel", "Long Lived", "Pain Monger"]),
        listItem(_military_skills, "Unarmed Combat"),
        list(_occupational_skills, ["Climbing", "Detection", "Jumping", "Lore (philosophy of Morkaash)"]),
        listItem(_gear, "10 sl worth of equipment")
      ],
      "Assault Kommando": [
        listItem(_careers, "Assault Kommando"),
        listItem(_notes, "Must choose between Military Officer, Ranger, Rifleman, Soldier, or Warcaster"),
        list(_abilities, ["Defensive Line", "Onslaught"]),
        listItem(_connections, "Khadoran Military"),
        list(_military_skills, ["Hand Weapon", "Rifle", "Shield"]),
        list(_occupational_skills, ["Command", "Detection"]),
        listItem(_armors, "Assault Kommando Armor"),
        listItem(_ranged_weapons, "Vislovski Carbine"),
        listItem(_melee_weapons, "Shield, Combat"),
        list(_gear, [
          "Powder and ten rounds of ammunition",
          "three strangle gas grenate launcher rounds"])
      ],
      "Beast Handler": [
        listItem(_careers, "Beast Handler"),
        listItem(_notes, "Must choose between Bloodrunner, Chirurgeon, Chymist, Monster Hunter, Mortitheurge, Scout, Tormentor, or Warlock: Skorne"),
        list(_abilities, [
          "Animal Control",
          "Beast Manipulation: Enrage",
          "Specialization (Barbed Whip)"]),
        listItem(_connections, "Paingivers"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, [
          "Animal Handling",
          "Lore (extraordinary zoology)",
          "Lore (philosophy of Morkaash)",
          "Medicine",
          "Tracking"]),
        listItem(_gear, "paingiver mask"),
        listItem(_melee_weapons, "Barbed Whip"),
        listItem(_armors, "Paingiver Armor")
      ],
      "Blackclad": [
        listItem(_careers, "Blackclad"),
        list(_abilities, ["Aegis", "Long-Lived"]),
        listItem(_connections, "Circle Orboros"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Lore (Orboros)", "Negotiation", "Survival"]),
        list(_spells, ["Force Bolt", "Summon Vortex"]),
        listItem(_armors, "Custom Battle Armor"),
        listItem(_melee_weapons, "Druid Voulge"), // TODO: Add this to melee weapons
        listItem(_gear, "cloak and robes of a blackclad"),
        number(_gold, 75)
      ],
      "Blightblade": [
        listItem(_careers, "Blightblade"),
        list(_abilities, ["Ambush", "Camouflage", "Specialization (Blighted Blade)"]),
        listItem(_connections, "Legion of Everblight"),
        list(_military_skills, ["Hand Weapon", "Unarmed Combat"]),
        list(_occupational_skills, [
          "Detection",
          "Jumping",
          "Sneak"]),
        listItem(_melee_weapons, "Blighted Blade"),
        listItem(_armors, "Nyss Leather Armor"),
        number(_gold, 25)
      ],
      "Blighted Sorcerer": [
        listItem(_careers, "Blighted Sorcerer"),
        listItem(_abilities, "Arcane Craftsmanship"),
        list(_occupational_skills, ["Craft (metalworking)", "Lore (Everblight)"]),
        listItem(_connections, "Legion of Everblight"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Hand Weapon"]), "Choose 1"),
        list(_spells, ["Blizzard", "Howling Wind", "Ice Bolt"]),
        number(_ARC, 1), // Sorcerous Blessing blight gift
        number(_ARC_max, 1), // Sorcerous Blessing blight gift
        number(_gold, 25)
      ],
      "Blighted Swordsman": [
        listItem(_careers, "Blighted Swordsman"),
        list(_abilities, ["Fearless", "Flesh of Steel"]),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Command", "Intimidation", "Survival"]),
        listItem(_notes, "+1 bonus to ARM from Bone Spurs blight gift"),
        listItem(_melee_weapons, "Nyss Claymore")
      ],
      "Bloodrunner": [
        listItem(_careers, "Bloodrunner"),
        listItem(_notes, "Must choose between Beast Handler, Brigand, Mortitheurge, Scout, Tormentor, or Warlock: Skorne"),
        list(_abilities, ["Prowl", "Specialization (Assassin's Blade)"]),
        listItem(_connections, "Paingivers"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, [
          "Detection",
          "Lore (philosophy of Morkaash)",
          "Sneak"]),
        listItem(_gear, "paingiver mask"),
        listItem(_melee_weapons, "Assassin's Blade"),
        listItem(_armors, "Paingiver Armor")
      ],
      "Bloodtracker": [
        listItem(_careers, "Bloodtracker"),
        list(_abilities, ["Ambush", "Specialization (Fighting Claw)"]),
        listItem(_connections, "Tharn tribe"),
        list(_military_skills, ["Hand Weapon", "Thrown Weapon"]),
        list(_occupational_skills, ["Detection", "Sneak", "Tracking"]),
        listItem(_benefits, "Feat: Vendetta"),
        listItem(_melee_weapons, "Bloodtracker Fighting Claw"),
        listItem(_ranged_weapons, "Javelin"),
        listItem(_armors, "Tharn Leathers"),
        list(_gear, ["4 Javelins more", "Javelin Quiver"])
      ],
      "Bloodweaver": [
        listItem(_careers, "Bloodweaver"),
        list(_abilities, ["Blood Rites", "Empower Weapon"]),
        listItem(_connections, "Tharn tribe"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, ["Detection", "Lore (Devourer Wurm)", "Sneak"]),
        list(_spells, [
          "Blood Magic: Accurate Strike",
          "Blood Magic: Bleeder",
          "Blood Magic: Brutal Strike"]),
        listItem(_melee_weapons, "Sacral Blade"),
        listItem(_armors, "Tharn Leathers")
      ],
      "Bokor": [
        listItem(_careers, "Bokor"),
        listItem(_abilities, "Great Power"),
        choices(arrayPairs(_connections, [
          "Blindwater Congregation",
          "Gatorman tribe"]), "Choose 1"),
        listItem(_military_skills, "Unarmed Combat"),
        list(_occupational_skills, [
          "Detection",
          "Intimidation",
          "Lore (Kossk)",
          "Lore (Undead)"]),
        list(_spells, ["Bone Shaker", "Grave Whispers"]),
        number(_gold, 50)
      ],
      "Bone Grinder": [
        listItem(_careers, "Bone Grinder"),
        list(_abilities, ["Bone Grinder", "Disease Resistance"]),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Alchemy",
          "Craft (skinner)",
          "Lore (extraordinary zoology)",
          "Medicine"]),
        list(_spells, ["Arcane Bonds", "Marked for Death"]),
        number(_gold, 25),
        list(_gear, ["apothecary kit", "skinning tools", "bone grinder fetish (any)"])
      ],
      "Bounty Hunter": [
        listItem(_careers, "Bounty Hunter"),
        list(_abilities, ["Binding", "Take Down"]),
        choices(arrayPairs(_military_skills, [
          "Crossbow",
          "Hand Weapon",
          "Pistol",
          "Rifle",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Intimidation",
          "Rope Use",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Brigand": [
        listItem(_careers, "Brigand"),
        list(_abilities, ["Find Cover", "Onslaught"]),
        choices(arrayPairs(_connections, [
          "Criminal Gang",
          "Character's Tribe"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Great Weapon",
          "Hand Weapon",
          "Pistol",
          "Rifle",
          "Thrown Weapon"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Driving",
          "Intimidation",
          "Sneak"]),
        number(_gold, 75)
      ],
      "Bushwhacker": [
        listItem(_careers, "Bushwhacker"),
        list(_abilities, ["Crackshot", "Fast Reload"]),
        list(_military_skills, ["Hand Weapon", "Rifle"]),
        list(_occupational_skills, [
          "Climbing",
          "Detection",
          "Sneak",
          "Survival"]),
        number(_gold, 50),
        list(_gear, ["ammo bandolier", "powder and ammunition for 10 shots"]),
        choices(arrayPairs(_melee_weapons, [
          "Rifle, Heavy",
          "Rifle, Repeating"]), "Choose 1")
      ],
      "Cataphract": [
        listItem(_careers, "Cataphract"),
        listItem(_notes, "Must choose between Monster Hunter, Mortitheurge, Praetorian, Tyrant, Worlock: Skorne, or Warrior"),
        list(_abilities, ["Cataphract", "Defensive Line", "Load Bearing"]),
        listItem(_connections, "Skorne House"),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, [
          "Command",
          "Lore (hoksune code)"]),
        list(_melee_weapons, ["Shield", "Spear, War"]),
        listItem(_armors, "Cataphract Armor")
      ],
      "Chieftain": [
        listItem(_careers, "Chieftain"),
        list(_abilities, [
          "Battle Plan: Take Cover",
          "Natural Leader",
          "Team Leader"]),
        choices(arrayPairs(_connections, ["Tribe", "Trollkin Kriel"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Great Weapon",
          "Hand Weapon",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Command",
          "Lore (tribal)",
          "Oratory",
          "Survival"]),
        number(_gold, 100),
        listItem(_gear, "symbol of office")
      ],
      "Chirurgeon": [
        listItem(_careers, "Chirurgeon"),
        list(_abilities, ["Pain Flow", "Remedy"]),
        listItem(_connections, "Corpsuleum"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, [
          "Lore (philosophy of Kexorus)",
          "Lore (philosophy of Morkaash)",
          "Medicine",
          "Research"]),
        list(_gear, ["Chirurgeon's Toolkit", "25 sl"])
      ],
      "Chymist": [
        listItem(_careers, "Chymist"),
        list(_abilities, ["Distiller", "Poison Resistance"]),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, [
          "Chymistry",
          "Lore (philosophy of Kexorus)",
          "Research"]),
        list(_gear, [
          "Chymist's Kit",
          "10 sl",
          "10 sl of chymical items and ingredients"])
      ],
      "Crucible Guard": [
        listItem(_careers, "Crucible Guard"),
        listItem(_notes, "Must choose between Artillerist, Field Mechanik, Horseman, Investigator, Man-at-Arms, Military Officer, Rifleman, or Warcaster"),
        list(_abilities, ["Find Cover", "Sentry"]),
        listItem(_connections, "Golden Crucible"),
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
        listItem(_armors, "Crucible Armor"),
        listItem(_notes, "250 gc of grenates and Crucible Arms weapons with ammunition"),
      ],
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
      "Cygnaran Warcaster": [
        listItem(_careers, "Cygnaran Warcaster"),
        listItem(_notes, "Must choose between Arcane Mechanik, Arcanist, Aristocrat, Field Mechanik, Gun Mage, Horseman, Knight, Man-at-Arms, Military Officer, Pistoleer, Ranger, Rifleman, Soldier, Sorcerer (any), Stormblade, or Trencher"),
        listItem(_abilities, "Bond"),
        listItem(_connections, "Cygnaran military"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Arcane Bolt", "Blur"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1") // TODO: Not in db
      ],
      "Deathstalker": [
        listItem(_careers, "Deathstalker"),
        list(_abilities, ["Ambush", "Prowl", "Signal Language"]),
        list(_military_skills, ["Archery", "Great Weapon"]),
        list(_occupational_skills, [
          "Sneak",
          "Survival",
          "Tracking"]),
        listItem(_melee_weapons, "Nyss Claymore"),
        listItem(_ranged_weapons, "Bow, Nyss"),
        list(_gear, ["quiver", "20 arrows"]),
        listItem(_gold, 25)
      ],
      "Doom Reaver": [
        listItem(_careers, "Doom Reaver"),
        listItem(_notes, "Must choose between Cutthroat, Horseman, Pirate, Ranger, Soldier, or Thief"),
        list(_abilities, ["Abomination", "Berserk", "Bloodlust", "Fearless"]),
        list(_military_skills, ["Great Weapon"]),
        list(_occupational_skills, ["Detection", "Intimidation"]),
        listItem(_melee_weapons, "Fellblade")
      ],
      "Duelist": [
        listItem(_careers, "Duelist"),
        list(_abilities, ["Parry", "Riposte"]),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Gambling", "Intimidation", "Jumping"]),
        number(_gold, 75)
      ],
      "Exemplar": [
        listItem(_careers, "Exemplar"),
        listItem(_notes, "Must choose between Horseman, Man-at-Arms, Military Officer, Ranger, Soldier, or Warcaster"),
        listItem(_abilities, "Aegis"),
        listItem(_connections, "Exemplar Order"),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, ["Command", "Lore (Menite Faith)"]),
        listItem(_benefits, "Righteous Anger"),
        listItem(_armors, "Exemplar Plate"),
        choices(arrayPairs(_melee_weapons, [
          "Blazing Sword",
          "Consecrated Halberd", // TODO: Not in db
          "Relic Blade"]), "Choose 1")
      ],
      "Exemplar Errant": [
        listItem(_notes, "If you choose Exemplar Errant do not choose a second career!"),
        listItem(_careers, "Exemplar Errant"),
        list(_abilities, [
          "Aegis",
          "Camouflage",
          "Pathfinder",
          "Sanguine Bond",
          "Specialization (Lawbringer Crossbow)"]),
        listItem(_connections, "Exemplar Order"),
        list(_military_skills, ["Crossbow", "Hand Weapon", "Hand Weapon", "Shield"]),
        listItem(_armors, "Exemplar Plate"),
        listItem(_ranged_weapons, "Crossbow, Lawbringer"),
        listItem(_gear, "ten blessed bolts"),
        list(_melee_weapons, ["Shield", "Sword"]),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Lore (Menite Faith)",
          "Sneak",
          "Survival",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Exemplar Venger": [
        listItem(_notes, "If you choose Exemplar Venger do not choose a second career!"),
        listItem(_careers, "Exemplar Venger"),
        list(_abilities, ["Aegis", "Cavalry Charge", "Combat Rider"]),
        listItem(_connections, "Exemplar Order"),
        list(_military_skills, [
          "Hand Weapon",
          "Hand Weapon",
          "Lance",
          "Lance",
          "Shield"]),
        list(_occupational_skills, ["Command", "Lore (Menite Faith)", "Riding"]),
        listItem(_benefits, "Righteous Anger"),
        listItem(_armors, "Exemplar Plate"),
        list(_melee_weapons, [
          "Blessed Lance",
          "Shield",
          "Sword"]), // TODO: What happens if all melee weapon slots are full?!
        number(_gold, 25),
        list(_gear, ["Warhorse", "Tack and Heavy Barding"])
      ],
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
      "Extoller": [
        listItem(_careers, "Extoller"),
        listItem(_abilities, "Extoller"),
        list(_occupational_skills, [
          "Detection",
          "Lore (extoller)",
          "Lore (philosophy of Voksune)",
          "Negotiation",
          "Oratory"]),
        list(_spells, [
          "Banishing Ward",
          "Grave Whispers",
          "Shadow Sight"]),
        list(_gear, [
          "Oculus",
          "14 sl"])
      ],
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
      "Fennblade": [
        listItem(_careers, "Fennblade"),
        list(_abilities, [
          "Hard",
          "Relentless Advance",
          "Specialization (Hooked Great Sword)"]),
        listItem(_connections, "Trollkin Kriel"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Command", "Detection", "Survival"]),
        number(_gold, 75),
        listItem(_melee_weapons, "Hooked Great Sword")
      ],
      "Ferox Rider": [
        listItem(_careers, "Ferox Rider"),
        listItem(_notes, "Must choose between Monster Hunter, Mortitheurge, Praetorian, Scout, Tyrant, Venator, Warlock: Skorne, or Warrior"),
        list(_abilities, [
          "Cavalry Charge",
          "Specialization (Cavalry Spear)",
          "Trained Rider (Ferox)"]),
        listItem(_connections, "Skorne House"),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, [
          "Animal Handling",
          "Lore (hoksune code)",
          "Riding"]),
        list(_gear, ["Ferox", "Tack"]),
        list(_melee_weapons, ["Shield", "Spear, Cavalry"]),
        listItem(_armors, "Praetorian Armor")
      ],
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
      "Flame Bringers": [
        listItem(_notes, "If you choose Flame Bringers do not choose a second career!"),
        listItem(_careers, "Flame Bringers"),
        list(_abilities, [
          "Ambush",
          "Anatomical Precision",
          "Prowl",
          "Trick Rider",
          "Two-Weapon Fighting"]),
        listItem(_connections, "Daughters of the Flame"),
        list(_military_skills, [
          "Crossbow",
          "Crossbow",
          "Hand Weapon",
          "Hand Weapon"]),
        list(_occupational_skills, [
          "Animal Handling",
          "Detection",
          "Detection",
          "Intimidation",
          "Intimidation",
          "Riding",
          "Riding",
          "Survival",
          "Survival"]),
        listItem(_benefits, "Sidestep"),
        number(_gold, 75),
        list(_melee_weapons, ["Sword", "Sword"]),
        listItem(_armors, "Custom Battle Armor"),
        list(_gear, ["riding horse", "tack", "light barding"]) // TODO: horse widget
      ],
      "Greylord": [
        listItem(_careers, "Greylord"),
        listItem(_notes, "Must choose between Alchemist, Arcane Mechanik, Aristocrat, Explorer, Horseman, Investigator, Military Officer, Sorcerer (any), Spy, or Warcaster"),
        listItem(_abilities, "Great Power"),
        listItem(_connections, "Greylords Covenant"),
        list(_occupational_skills, ["Lore (Arcane)", "Research"]),
        list(_spells, ["Blizzard", "Frostbite", "Protection from Cold"]),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
      "Greylord Outrider": [
        listItem(_notes, "If you choose Greylord Outrider do not choose a second career!"),
        listItem(_careers, "Greylord Outrider"),
        list(_abilities, ["Great Power", "Snow Wreathed", "Trick Rider"]),
        listItem(_connections, "Greylords"),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Cryptography",
          "Detection",
          "Hand Weapon",
          "Hand Weapon",
          "Lore (Arcane)",
          "Riding",
          "Riding",
          "Survival",
          "Survival"]),
        choices([
          arrayPair(_spells, "Frostbite"),
          arrayPair(_spells, "Rime"),
          arrayPair(_spells, "Wind Strike"),
          arrayPair(_melee_weapons, "Greylords Rune Axe") // TODO: Add me!
        ], "Choose 3"),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
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
      "Gun Mage of the Amethyst Rose": [
        listItem(_careers, "Gun Mage of the Amethyst Rose"),
        list(_abilities, ["Craft Rune Shot", "Fast Reload"]),
        listItem(_connections, "Loyal Order of the Amethyst Rose"),
        choices(arrayPairs(_military_skills, ["Pistol", "Rifle"]), "Choose 1"),
        list(_occupational_skills, ["Detection", "Intimidation"]),
        list(_spells, [
          "Rune Shot: Accuracy",
          "Rune Shot: Brutal",
          "Occultation"]),
        number(_gold, 25),
        list(_gear, [
          "ammo bandolier",
          "rune shot casting kit",
          "powder and ten rounds of ammunition"]),
        listItem(_ranged_weapons, "Dual Magelock")
      ],
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
      "Hex Hunter": [
        listItem(_careers, "Hex Hunter"),
        list(_abilities, ["Pathfinder", "Specialization (Hex Razor)"]),
        list(_occupational_skills, ["Lore (Morrdh)", "Sneak", "Survival"]),
        listItem(_connections, "Legion of Everblight"),
        listItem(_military_skills, "Hand Weapon"),
        list(_spells, ["Blind Spot", "Hex Bolt", "Hidden Path"]),
        number(_ARC, 1), // Sorcerous Blessing blight gift
        number(_ARC_max, 1), // Sorcerous Blessing blight gift
        listItem(_melee_weapons, "Hex Razor"), // TODO: add me
        listItem(_armors, "Nyss Leather Armor")
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
      "Horseman": [
        listItem(_careers, "Horseman"),
        list(_abilities, ["Cavalry Charge", "Combat Rider"]),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Lance",
          "Pistol"]), "Choose 3"),
        listItem(_occupational_skills, "Riding"),
        number(_gold, 25),
        list(_gear, ["Warhorse", "Tack and Heavy Barding"])
      ],
      "Illuminated Arcanist": [
        listItem(_careers, "Illuminated Arcanist"),
        listItem(_abilities, "Great Power"),
        listItem(_connections, "Order of Illumination"),
        list(_occupational_skills, ["Lore (Arcane)", "Research"]),
        list(_spells, ["Eye of Truth", "Guided Blade", "Occultation"]),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
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
          "ten blasting heads"]),
        listItem(_armors, "Iron Fang Full Plate"), // TODO: Add this to armors
        list(_melee_weapons, ["Blasting Pike", "Shield"])
      ],
      "Iron Fang Uhlan": [
        listItem(_careers, "Iron Fang Uhlan"),
        listItem(_notes,
          "If you choose Iron Fang Uhlan do not choose a second career!"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Lance",
          "Pistol"]), "Choose 3"),
        list(_abilities, [
          "Cavalry Charge",
          "Combat Rider",
          "Fast Rearm (Blasting Lance)",
          "Specialization (Blasting Pike)"]),
        listItem(_connections, "Khadoran military"),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, ["Command", "Riding", "Survival"]),
        number(_gold, 50),
        list(_gear, [
          "spear head",
          "ten blasting heads",
          "Pozdyov Warhorse",
          "Tack and Heavy Barding"]),
        listItem(_armors, "Iron Fang Full Plate"), // TODO: Not in db
        list(_melee_weapons, ["Blasting Lance", "Shield"])
      ],
      "Ironhead": [
        listItem(_careers, "Ironhead"),
        list(_abilities, ["Ironhead", "Tinkerer"]),
        listItem(_connections, "Mechaniks Association"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Light Artillery"]), "Choose 1"),
        list(_occupational_skills, [
          "Craft (metalworking)",
          "Mechanikal Engineering"]),
        list(_gear, [
          "a suit of Ironhead Armor",
          "one equipment upgrade"])
      ],
      "Khadoran Warcaster": [
        listItem(_careers, "Khadoran Warcaster"),
        listItem(_notes, "Must choose between Arcane Mechanik, Arcanist, Aristocrat, Assault Kommando, Horseman, Investigator, Iron Fang, Military Officer, Pistoleer, Ranger, Rifleman, Soldier, Sorcerer (any), or Spy"),
        listItem(_abilities, "Bond"),
        listItem(_connections, "Khadoran military"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Boundless Charge", "Jump Start", "Razor Wind"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)") ], "Choose 1") // TODO: Not in db
      ],
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
      "Kriel Champion": [
        listItem(_careers, "Kriel Champion"),
        list(_abilities, [
          "Defensive Line",
          "Iron Will",
          "Load Bearing"]),
        choices(arrayPairs(_connections, [
          "Trollkin Kriel",
          "United Kriels"]), "Choose 1"),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, ["Command", "Detection"]),
        number(_gold, 100)
      ],
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
      "Llaelese Warcaster": [
        listItem(_careers, "Llaelese Warcaster"),
        listItem(_notes, "Must choose between Aristocrat, Duelist, Field Mechanik, Gun Mage, Highwayman, Horseman, Military Officer, Pistoleer, Sorcerer (any), or Spy"),
        listItem(_abilities, "Bond"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Blur", "Twister"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)") ], "Choose 1") // TODO: Not in db
      ],
      "Long Rider": [
        listItem(_careers, "Long Rider"),
        list(_abilities, [
          "Bull Rush",
          "Cavalry Charge",
          "Trained Rider (Bison)"]),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, ["Animal Handling", "Lore (Trollkin)", "Riding"]),
        number(_gold, 75),
        list(_gear, ["Bison", "tack"])
      ],
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
      "Man-O-War": [
        listItem(_careers, "Man-O-War"),
        listItem(_notes, "Must choose between Aristocrat, Field Mechanik, Horseman, Man-at-Arms, Military Officer, or Soldier"),
        list(_abilities, ["Ironhead", "Load Bearing"]),
        listItem(_connections, "Khadoran Military"),
        list(_military_skills, [
          "Great Weapon",
          "Light Artillery",
          "Shield"]),
        list(_occupational_skills, ["Command", "Mechanikal Engineering"]),
        listItem(_gear, "Man-O-War Armor"),
        choices([
          arrayPair(_melee_weapons, "Annihilator Blade"),
          arrayPair(_ranged_weapons, "Man-O-War Shield Cannon"),
          arrayPair(_gear, "powder and ammunition for ten shots"),
          arrayPair(_ranged_weapons, "Bombardier Grenade Cannon"),
          arrayPair(_gear, "Man-O-War ammo bandolier"),
          arrayPair(_gear, "four cannon grenades"),
          arrayPair(_melee_weapons, "Ice Maul") ], "Choose either<br />blade + shield cannon + ammunition or<br />grenate cannon + ammo bandolier + grenates or<br />Ice maul")
      ],
      "Man-O-War Drakhun": [
        listItem(_careers, "Man-O-War Drakhun"),
        listItem(_notes,
          "If you choose Man-O-War Drakhun do not choose a second career!"),
        list(_abilities, [
          "Cavalry Charge",
          "Ironhead",
          "Load Bearing",
          "Trained Rider (Karpathan Destrier)"]),
        listItem(_connections, "Khadoran Military"),
        list(_military_skills, [
          "Great Weapon",
          "Light Artillery",
          "Shield"]),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Lance",
          "Pistol"]), "Choose 3"),
        list(_occupational_skills, ["Command", "Mechanikal Engineering", "Riding"]),
        listItem(_gear, "Man-O-War Armor"),
        choices([
          arrayPair(_melee_weapons, "Annihilator Blade"),
          arrayPair(_ranged_weapons, "Man-O-War Shield Cannon"),
          arrayPair(_gear, "powder and ammunition for ten shots"),
          arrayPair(_ranged_weapons, "Bombardier Grenade Cannon"),
          arrayPair(_gear, "Man-O-War ammo bandolier"),
          arrayPair(_gear, "four cannon grenades"),
          arrayPair(_melee_weapons, "Ice Maul") ], "Choose either<br />blade + shield cannon + ammunition or<br />grenate cannon + ammo bandolier + grenates or<br />Ice maul"),
        number(_gold, 25),
        list(_gear, ["Karpathan Destrier Warhorse", "Tack and Heavy Barding"])
      ],
      "Marine": [
        listItem(_careers, "Marine"),
        listItem(_abilities, "Boarding Action"),
        choices(arrayPairs(_abilities, [
          "Specialization (Cutlass)",
          "Specialization (Gaff Spear)"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol",
          "Crossbow",
          "Great Weapon",
          "Rifle",
          "Thrown Weapon"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Jumping",
          "Medicine",
          "Sailing",
          "Swimming"]),
        number(_gold, 100)
      ],
      "Maritime Order of the Trident Arcanist": [
        listItem(_careers, "Maritime Order of the Trident Arcanist"),
        listItem(_abilities, "Great Power"),
        listItem(_connections, "Ordic Military"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_spells, ["Deadeye", "Extinguisher", "Triage"]),
        listItem(_benefits, "Rune Reader"),
        number(_gold, 75)
      ],
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
      "Mist Speaker": [
        listItem(_careers, "Mist Speaker"),
        listItem(_abilities, "Conniver"),
        choices(arrayPairs(_connections, [
          "Bog Trog Tribe",
          "Blindwater Congregation"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Bribery", "Deception", "Detection", "Sneak"]),
        list(_spells, ["Cloak of Fear", "Phantasm"]),
        number(_INT, 1),
        number(_INT_max, 1),
        number(_gold, 50)
      ],
      "Monster Hunter": [
        listItem(_careers, "Monster Hunter"),
        list(_abilities, ["Big Game Hunter", "Hunting Ground", "Precision Strike"]),
        listItem(_military_skills, "Hand Weapon"),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Lore (extraordinary zoology)",
          "Survival",
          "Tracking"]),
        number(_gold, 100)
      ],
      "Mortitheurge": [
        listItem(_careers, "Mortitheurge"),
        listItem(_abilities, "Iron Will"),
        list(_occupational_skills, ["Lore (philosophy of Voskune)", "Medicine"]),
        list(_spells, [
          "Influence",
          "Inviolable Resolve",
          "Stranglehold"]),
        listItem(_gear, "25 sl"),
        listItem(_benefits, "Feat: Revitalize")
      ],
      "Nihilator": [
        listItem(_careers, "Nihilator"),
        list(_abilities, ["Berserk", "Fearless"]),
        listItem(_connections, "Nihilator Cult"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, [
          "Intimidation",
          "Lore (hoksune code)",
          "Lore (philosophy of Morkaash)"]),
        listItem(_benefits, "Tough"),
        listItem(_gear, "12 sl"),
        listItem(_melee_weapons, "Sword, Great")
      ],
      "Nomad": [
        listItem(_careers, "Nomad"),
        list(_abilities, ["Saddle Shot", "Traceless Path"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Great Weapon",
          "Hand Weapon",
          "Reiver",
          "Rifle",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Navigation",
          "Riding",
          "Survival"]),
        number(_gold, 25),
        list(_notes, ["Mount worth of 80 gc", "tack"])
      ],
      "Ordic Warcaster": [
        listItem(_careers, "Ordic Warcaster"),
        listItem(_notes, "Must choose between Arcane Mechanik, Arcanist, Aristocrat, Artillerist, Duelist, Explorer, Field Mechanik, Horseman, Man-at-Arms, Military Officer, Pirate, Priest (Morrowan), Soldier, or Sorcerer"),
        listItem(_abilities, "Bond"),
        listItem(_connections, "Ordic Military"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Convection", "Fortune"]),
        choices([
          arrayPair(_armors, "Naval Warcaster Armor"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1") // TODO: Not in db
      ],
      "Paladin": [
        listItem(_careers, "Paladin"),
        listItem(_notes, "Must choose between Aristocrat, Horseman, Investigator, Man-at-Arms, Military Officer, Priest (Menite), Ranger, Soldier, or Warcaster"),
        list(_abilities, ["Specialization (Firebrand)", "Stone-and-Mortars Stance"]),
        listItem(_connections, "Order of the Wall"),
        list(_military_skills, ["Great Weapon", "Shield"]),
        list(_occupational_skills, ["Command", "Etiquette", "Lore (Menite Faith)"]),
        listItem(_armors, "Full Plate"),
        list(_melee_weapons, ["Firebrand", "Shield"])
      ],
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
      "Praetorian": [
        listItem(_careers, "Praetorian"),
        listItem(_notes, "Must choose between Cataphract, Ferox Rider, Monster Hunter, Mortitheurge, Nihilator, Scout, Tyrant, Warlock: Skorne, or Warrior"),
        listItem(_abilities, "First to Fight"),
        choices(arrayPairs(_abilities, [
          "Specialization (Karax Shield)",
          "Specialization (Toboresh)",
          "Two-Weapon Fighting"]), "Choose 1"),
        listItem(_connections, "Skorne House"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Shield",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Intimidation",
          "Lore (hoksune code)"]),
        listItem(_armors, "Praetorian Armor"),
        choices([
          arrayPair(_melee_weapons, "Toboresh"),
          arrayPair(_melee_weapons, "Shield, Karax"),
          arrayPair(_melee_weapons, "Pike"),
          arrayPair(_melee_weapons, "Sword, Praetorian"),
          arrayPair(_melee_weapons, "Sword, Praetorian") ], "Choose Toboresh,<br />Shield and Pike, or<br />both Praetorian Swords")
      ],
      "Priest of Cyriss": [
        listItem(_careers, "Priest of Cyriss"),
        listItem(_abilities, "Enigma Cipher"),
        listItem(_connections, "Convergence of Cyriss"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, ["Lore (Cyriss)", "Mechanikal Engineering"]),
        listItem(_benefits, "Genius"),
        list(_spells, ["Guided Blade", "Dissolution Bolt"]),
        listItem(_gear, "Tuning Kit"),
        listItem(_armors, "Opifex Armor") // TODO: Not in db
      ],
      "Priest of Menoth": [
        listItem(_careers, "Priest of Menoth"),
        listItem(_abilities, "Dispel"),
        listItem(_connections, "Menite temple"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Lore (Menite Faith)", "Oratory"]),
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
      "Priest of Nyssor": [
        listItem(_careers, "Priest of Nyssor"),
        listItem(_abilities, "Empower Weapon"),
        listItem(_connections, "Fane of Nyssor"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, [
          "Craft (metalworking)",
          "Lore (Fane of Nyssor)",
          "Lore (Nyss)",
          "Survival"]),
        list(_spells, ["Hand of Fate", "Hidden Path", "Staying Winter's Hand"]),
        number(_gold, 50),
        listItem(_melee_weapons, "Nyss Claymore"),
        listItem(_armors, "Nyss Leather Armor")
      ],
      "Protectorate Warcaster": [
        listItem(_careers, "Protectorate Warcaster"),
        listItem(_notes, "Must choose between Allegiant, Cutthroat, Duelist, Exemplar, Field Mechanik, Paladin, Priest (Menite), Reclaimer, or Scrutator"),
        listItem(_abilities, "Bond"),
        listItem(_connections, "Protectorate military"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Ashen Veil", "Immolation"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1") // TODO: Not in db
      ],
      "Pugilist": [
        listItem(_careers, "Pugilist"),
        list(_abilities, ["Brawler", "Hulking Presence"]),
        list(_military_skills, ["Unarmed Combat", "Hand Weapon"]),
        list(_occupational_skills, ["Detection", "Intimidation", "Streetwise"]),
        choices([ numberPair("PHY", 1), numberPair("STR", 1) ], "Choose 1"),
        number(_gold, 100)
      ],
      "Raider": [
        listItem(_careers, "Raider"),
        listItem(_notes, "Must choose between Cutthroat, Duelist, Gun Mage, Military Officer, Pirate, Pistoleer, Ranger, Sorcerer, or Warcaster"),
        listItem(_abilities, "Specialization (Lacerator)"),
        listItem(_connections, "Black Fleet"),
        list(_military_skills, ["Hand Weapon", "Unarmed Combat"]),
        list(_occupational_skills, [
          "Intimidation",
          "Jumping",
          "Sailing",
          "Swimming"]),
        listItem(_melee_weapons, "Lacerator"),
        listItem(_armors, "Leather Armor")
      ],
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
      "Raptor": [
        listItem(_careers, "Raptor"),
        list(_abilities, ["Saddle Shot", "Trained Rider (Ulk)"]),
        listItem(_connections, "Nyss Shard"),
        list(_military_skills, ["Archery", "Great Weapon"]),
        list(_occupational_skills, [
          "Animal Handling",
          "Riding",
          "Survival"]),
        number(_gold, 50),
        listItem(_armors, "Nyss Leather Armor"),
        list(_gear, ["Ulk", "Tack and Harness"])
      ],
      "Ravager": [
        listItem(_careers, "Ravager"),
        list(_abilities, ["Heart Eater", "Treewalker"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Great Weapon",
          "Hand Weapon",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Climbing",
          "Detection",
          "Jumping",
          "Survival"]),
        choices([
          arrayPair(_melee_weapons, "Axe, Tharn"),
          arrayPair(_ranged_weapons, "Bow, Tharn"),
          arrayPair(_gear, "Quiver of ten arrows")
        ], "Choose Axe or<br />Bow and Quiver"),
        listItem(_armors, "Tharn Leathers")
      ],
      "Reclaimer": [
        listItem(_careers, "Reclaimer"),
        listItem(_notes, "Must choose between Arcanist, Field Mechanik, Investigator, Priest (Menite), Soldier, or Warcaster"),
        list(_abilities, [
          "Oath of Silence",
          "Reclaim",
          "Signal Language",
          "Whispers of the Creator"]),
        listItem(_connections, "Reclaimant Order"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, [
          "Cryptography",
          "Lore (Menite Faith)",
          "Lore (Urcaen)"]),
        list(_gear, ["Reclaimant's Mask", "ten grave markers"]),
        listItem(_melee_weapons, "Reclaimant Torch")
      ],
      "Rhulic Field Mechanik": [
        listItem(_careers, "Rhulic Field Mechanik"),
        list(_abilities, ["Rhulic 'Jack Marshal", "Bodge", "Hit the Deck!"]),
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
          "Grundback Runner light warjack with either a Grundback light cannon or hail shot cannon"])
      ],
      "Rhulic Warcaster": [
        listItem(_careers, "Rhulic Warcaster"),
        list(_abilities, ["Bond", "Rhulic Warcaster"]),
        listItem(_connections, "Dwarven Clan"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Pistol",
          "Rifle"]), "Choose 2"),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Battering Ram", "Molten Metal"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Great Weapon"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1") // TODO: Not in db
      ],
      "Rifleman": [
        listItem(_careers, "Rifleman"),
        list(_abilities, ["Crackshot", "Dual Shot", "Marksman"]),
        listItem(_military_skills, "Rifle"),
        list(_occupational_skills, ["Climbing", "Detection", "Survival"]),
        number(_gold, 50),
        list(_gear, ["ammo bandolier", "powder and ammunition for ten shots"]),
        choices(arrayPairs(_ranged_weapons, [
          "Rifle, Heavy",
          "Rifle, Repeating"]), "Choose 1")
      ],
      "Ryssovass": [
        listItem(_careers, "Ryssovass"),
        list(_abilities, ["Defender", "Specialization (Nyss Great Sword)"]),
        listItem(_connections, "Nyss Shard"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Intimidation",
          "Survival"]),
        listItem(_melee_weapons, "Nyss Great Sword"),
        listItem(_armors, "Ryssovass Plate")
      ],
      "Scout": [
        listItem(_careers, "Scout"),
        list(_abilities, ["Pathfinder", "Survivalist"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Hand Weapon",
          "Pistol",
          "Rifle",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, [
          "Detection",
          "Sneak",
          "Survival",
          "Tracking"]),
        number(_gold, 75)
      ],
      "Scrutator": [
        listItem(_careers, "Scrutator"),
        listItem(_notes, "Must choose between Allegiant, Investigator, Military Officer, Priest (Menite), or Warcaster"),
        list(_abilities, ["Authority", "Torture"]),
        listItem(_connections, "Temple of Menoth"),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, [
          "Detection",
          "Interrogation",
          "Intimidation",
          "Law",
          "Lore (Menite Faith)"]),
        list(_spells, ["Chasten", "Influence"]),
        number(_gold, 100),
        list(_gear, ["Scrutator's Masked Helm", "Wrack"])
      ],
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
      "Shaman (Devourer Wurm)": [
        listItem(_careers, "Shaman (Devourer Wurm)"),
        listItem(_abilities, "Blood Trade"),
        choices(arrayPairs(_connections, ["Devourer Cult", "Tharn Tribe"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Lore (Devourer)",
          "Survival"]),
        list(_spells, ["Bleed", "Blessing of the Devourer", "Cloak of the Predator"]),
        number(_gold, 75)
      ],
      "Shaman (Dhunia)": [
        listItem(_careers, "Shaman (Dhunia)"),
        listItem(_abilities, "Balm of Dhunia"),
        choices(arrayPairs(_connections, [
          "Farrow Tribe",
          "Trollkin Tribe"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Animal Handling",
          "Command",
          "Lore (Dhunia)",
          "Oratory"]),
        list(_spells, ["Earth's Cradle", "Inviolable Resolve", "Triage"]),
        number(_gold, 75)
      ],
      "Shepherd": [
        listItem(_careers, "Shepherd"),
        list(_abilities, ["Animal Mastery", "Specialization (Shepherd's Crook)"]),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Animal Handling", "Survival", "Tracking"]),
        listItem(_melee_weapons, "Shepherd's Crook"),
        number(_gold, 50)
      ],
      "Slaughterhouser": [
        listItem(_careers, "Slaughterhouser"),
        list(_abilities, ["Fearless", "Specialization (Halbert)"]),
        listItem(_connections, "Thornfall Alliance"),
        list(_military_skills, ["Great Weapon", "Unarmed Combat"]),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Intimidation"]),
        number(_gold, 25),
        listItem(_melee_weapons, "Halbert"),
        listItem(_armors, "Full Plate")
      ],
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
      "Sorcerer (Fire)": [
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
      "Sorcerer (Ice)": [
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
      "Sorcerer (Stone)": [
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
      "Sorcerer (Storm)": [
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
      "Storm Lance": [
        listItem(_notes, "If you choose Storm Lance do not choose a second career!"),
        listItem(_careers, "Storm Lance"),
        list(_abilities, [
          "Blaster",
          "Cavalry Charge",
          "Specialization (Storm Glaive)"]),
        list(_connections, ["Cygnaran military", "knightly order"]),
        list(_military_skills, ["Great Weapon", "Great Weapon", "Hand Weapon", "Shield"]),
        list(_occupational_skills, [
          "Command",
          "Command",
          "Detection",
          "Etiquette",
          "Etiquette",
          "Lore (knightly order)",
          "Riding"]),
        number(_gold, 100),
        list(_melee_weapons, ["Electro Lance", "Shield"]),
        listItem(_armors, "Storm Knight Armor"),
        list(_gear, ["Warhorse", "Tack and Storm Knight Barding"])
      ],
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
      "Stormguard": [
        listItem(_notes, "If you choose Stormguard do not choose a second career!"),
        listItem(_careers, "Stormguard"),
        list(_abilities, [
          "Set Defense",
          "Shield Guard",
          "Specialization (Voltaic Halbert)"]),
        listItem(_connections, "Cygnaran military"),
        list(_military_skills, ["Great Weapon", "Great Weapon", "Shield"]),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Pistol"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Command",
          "Detection",
          "Detection",
          "Etiquette"]),
        number(_gold, 100),
        listItem(_melee_weapons, "Voltaic Halbert"),
        listItem(_armors, "Storm Knight Armor")
      ],
      "Stormsmith": [
        listItem(_careers, "Stormsmith"),
        list(_abilities, ["Specialization (Stormcaller and Lightning Rod)", "Weatherman", "Weather Vane"]),
        listItem(_connections, "Cygnaran military"),
        listItem(_military_skills, "Great Weapon"),
        list(_occupational_skills, ["Mechanikal Engineering", "Stormsmithing"]),
        listItem(_melee_weapons, "Stormcaller and Lightning Rod"),
        listItem(_armors, "Stormsmith Armor")
      ],
      "Tempest Blazer": [
        listItem(_notes,
          "If you choose Tempest Blazer do not choose a second career!"),
        
        listItem(_careers, "Tempest Blazer"),
        list(_abilities, [
          "Craft Rune Shot",
          "Fast Reload",
          "Gunfighter",
          "Saddle Shot"]),
        listItem(_connections, "Cygnaran military"),
        list(_military_skills, [
          "Pistol",
          "Pistol"]),
        list(_occupational_skills, [
          "Detection",
          "Detection",
          "Riding",
          "Riding",
          "Survival",
          "Tracking"]),
        list(_spells, [
          "Rune Shot: Accuracy",
          "Rune Shot: Brutal",
          "Rune Shot: Electro Leap"]),
        list(_gear, [
          "ammo bandolier",
          "rune shot casting kit",
          "riding horse",
          "tack",
          "light barding",
          "powder and ten rounds of ammunition"]),
        listItem(_ranged_weapons, "Pistol, Magelock"),
        listItem(_armors, "Armored Great Coat"),
        number(_gold, 25)
      ],
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
        list(_abilities, ["Conniver", "Dodger"]),
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
      "Tormentor": [
        listItem(_careers, "Tormentor"),
        listItem(_notes, "Must choose between Beast Handler, Bloodrunner, Chirurgeon, Chymist, Mortitheurge, or Warlock: Skorne"),
        list(_abilities, ["Take Down", "Torture"]),
        listItem(_connections, "Paingivers"),
        listItem(_military_skills, "Hand Weapon"),
        list(_occupational_skills, [
          "Detection",
          "Interrogation",
          "Investigation",
          "Lore (philosophy of Morkaash)",
          "Medicine"]),
        listItem(_armors, "Paingiver Armor"),
        listItem(_gear, "Paingiver Mask")
      ],
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
      "Trencher Commando": [
        listItem(_notes,
          "If you choose Trencher Commando do not choose a second career!"),
        listItem(_careers, "Trencher"),
        list(_abilities, [
          "Anatomical Precision",
          "Camouflage",
          "Pathfinder",
          "Prowl"]),
        listItem(_connections, "Cygnaran military"),
        list(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Rifle",
          "Thrown Weapon"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Pistol",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Detection",
          "Sneak",
          "Survival",
          "Tracking"]),
        number(_gold, 100),
        list(_gear, [
          "ammo bandolier",
          "smoke grenate",
          "smoke grenate",
          "smoke grenate",
          "explosive grenate",
          "explosive grenate",
          "explosive grenate"]),
        listItem(_ranged_weapons, "Carbine"),
        listItem(_melee_weapons, "Trench Knife"),
        listItem(_armors, "Infantry Armor")
      ],
      "Tyrant": [
        listItem(_careers, "Tyrant"),
        listItem(_notes, "Must choose between Cataphract, Ferox Rider, Monster Hunter, Mortitheurge, Praetorian, Scout, Warlock: Skorne, or Warrior"),
        list(_abilities, ["Battle Plan: Call to Action", "Natural Leader"]),
        listItem(_connections, "Skorne House"),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, [
          "Command",
          "Intimidation",
          "Lore (hoksune code)",
          "Lore (household)"]),
        listItem(_gear, "100 sl")
      ],
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
        listItem(_melee_weapons, "Nyss Claymore"),
        listItem(_ranged_weapons, "Bow, Nyss")
      ],
      "Vassal of Menoth": [
        listItem(_careers, "Vassal of Menoth"),
        listItem(_notes, "Must choose between Alchemist, Arcanist, Field Mechanik, Priest (Menite), or Sorcerer (any)"),
        listItem(_abilities, "Inscribe Formulae"),
        listItem(_connections, "Vassal of Menoth"),
        choices(arrayPairs(_military_skills, [
          "Hand Weapon",
          "Rifle"]), "Choose 1"),
        list(_occupational_skills, [
          "Craft (gunsmithing)",
          "Craft (metalworking)",
          "Mechanikal Engineering"]),
        list(_spells, ["Arcane Bolt", "Ashen Veil", "Short Out"]),
        number(_gold, 50),
        listItem(_gear, "rune etching kit"),
        listItem(_armors, "Vassal Armor"),
        listItem(_notes, "A Vassal/Field Mechanik can start with a Protectorate light warjack with up to 200 gc in weapons")
      ],
      "Venator": [
        listItem(_careers, "Venator"),
        list(_abilities, ["Fast Reload", "Sentry", "Specialization (Reiver)"]),
        list(_military_skills, ["Hand Weapon", "Reiver", "Thrown Weapon"]),
        list(_occupational_skills, [
          "Detection",
          "Survival"]),
        listItem(_armors, "Skorne Infantry Armor"),
        listItem(_ranged_weapons, "Reiver"),
        list(_gear, ["4 ammo cones", "2 gas canisters", "Reiver ammo", "12 sl"])
      ],
      "Warcaster": [
        listItem(_careers, "Warcaster"),
        listItem(_abilities, "Bond"),
        list(_military_skills, ["Hand Weapon", "Pistol"]),
        list(_occupational_skills, ["Command", "Detection"]),
        list(_spells, ["Boundless Charge", "Convection"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_ranged_weapons, "Mechanika Hand Cannon (with 10 rounds of ammunition)")], "Choose 1") // TODO: Not in db
      ],
      "Warcaster, Cyriss": [
        listItem(_careers, "Warcaster, Cyriss"),
        listItem(_notes, "Must choose between Alchemist, Arkane Mechanik, Arcanist, Aristocrat, Explorer, Field Mechanik, Gun Mage, Investigator, Man-at-Arms, Military Officer, or Priest of Cyriss"),
        list(_abilities, ["Bond", "Convergence Warcaster"]),
        listItem(_connections, "Convergence of Cyriss"),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, ["Detection", "Mechanikal Engineering"]),
        list(_spells, ["Arcane Strike", "Jump Start", "Temper Metal"]),
        choices([
          arrayPair(_armors, "Warcaster Armor, light"), // TODO: Not in db
          arrayPair(_armors, "Warcaster Armor, medium"), // TODO: Not in db
          arrayPair(_melee_weapons, "Mechanika Hand Weapon"), // TODO: Not in db
          arrayPair(_gear, "Light Vector")], "Choose 1")
      ],
      "Warlock, Circle": [
        listItem(_careers, "Warlock, Circle"),
        listItem(_abilities, "Warlock Bond"),
        choices(arrayPairs(_abilities, [
          "Resonance: Devourer Warbeast",
          "Resonance: Wold"]), "Choose 1"),
        choices(arrayPairs(_connections, [
          "Circle Orboros",
          "Tharn Tribe",
          "Wolf of Orboros Tribe"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Animal Handling", "Command"]),
        choices(arrayPairs(_occupational_skills, [
          "Lore (Devourer Wurm)",
          "Lore (Orboros)"]), "Choose 1"),
        list(_spells, ["Roots of the Earth", "Spirit Fang"]),
        number(_gold, 25),
        choices(arrayPairs(_gear, [
          "medium-based Devourer Warbeast",
          "medium-based Wold"]), "Choose 1")
      ],
      "Warlock, Farrow": [
        listItem(_careers, "Warlock, Farrow"),
        list(_abilities, ["Resonance: Farrow Warbeast", "Warlock Bond"]),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon",
          "Pistol",
          "Rifle",
          "Unarmed Combat"]), "Choose 2"),
        list(_occupational_skills, ["Animal Handling", "Command", "Survival"]),
        list(_spells, ["Perdition", "Quagmire"]),
        number(_gold, 25),
        choices(arrayPairs(_gear, [
          "medium-based Farrow Warbeast",
          "Razor Boar Warbeast",
          "Razor Boar Warbeast"]), "Choose either the Farrow Warbeast or<br />both Razor Boars")
      ],
      "Warlock, Legion": [
        listItem(_careers, "Warlock, Legion"),
        list(_abilities, ["Athanc Shard", "Resonance: Everblight Warbeast", "Warlock Bond"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Command", "Detection", "Lore (dragons)"]),
        list(_spells, ["Draconic Blessing", "Razor Wind"]),
        number(_gold, 25),
        choices(arrayPairs(_gear, [
          "medium-based Everblight Warbeast",
          "Lesser Warbeast",
          "Lesser Warbeast"]), "Choose either the Everblight Warbeast or<br />both Lesser Warbeasts")
      ],
      "Warlock, Swamp": [
        listItem(_careers, "Warlock, Swamp"),
        list(_abilities, ["Resonance: Swamp Warbeast", "Warlock Bond"]),
        listItem(_military_skills, "Unarmed Combat"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Animal Handling", "Detection"]),
        list(_spells, ["Carnivore", "Sunder Spirit"]),
        number(_gold, 25),
        listItem(_gear, "medium-based Swamp Warbeast")
      ],
      "Warlock: Skorne": [
        listItem(_careers, "Warlock: Skorne"),
        list(_abilities, ["Resonance: Skorne Warbeast", "Warlock Bond"]),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Lore (philosophy of Morkaash)"]),
        list(_spells, ["Medicate", "Muzzle"]),
        list(_gear, ["medium-based Skorne Warbeast", "12 sl"])
      ],
      "Warlock, Trollkin": [
        listItem(_careers, "Warlock, Trollkin"),
        list(_abilities, ["Resonance: Trollblood Warbeast", "Warlock Bond"]),
        choices(arrayPairs(_connections, [
          "Trollkin Kriel",
          "United Kriels"]), "Choose 1"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Hand Weapon"]), "Choose 1"),
        list(_occupational_skills, ["Animal Handling", "Command", "Detection"]),
        list(_spells, ["Stone Strength", "Stranglehold"]),
        number(_gold, 25),
        listItem(_gear, "medium-based Trollblood Warbeast")
      ],
      "Warmonger": [
        listItem(_careers, "Warmonger"),
        list(_abilities, ["Berserk", "Fearless", "Onslaught"]),
        listItem(_military_skills, "Unarmed Combat"),
        choices(arrayPairs(_military_skills, [
          "Great Weapon",
          "Thrown Weapon"]), "Choose 1"),
        list(_occupational_skills, [
          "Detection",
          "Intimidation",
          "Survival"]),
        choices([
          arrayPair(_armors, "Infantry Armor"),
          arrayPair(_melee_weapons, "Ogrun Warcleaver"),
          arrayPair(_ranged_weapons, "War Spear"),
          arrayPair(_ranged_weapons, "War Spear"),
          arrayPair(_ranged_weapons, "War Spear"),
          arrayPair(_ranged_weapons, "War Spear"),
          arrayPair(_ranged_weapons, "War Spear"),
          arrayPair(_gear, "quiver")], "Choose armor and cleaver or<br />all spears and quiver")
      ],
      "Warrior": [
        listItem(_careers, "Warrior"),
        list(_abilities, ["Fast Draw", "Roll with It"]),
        choices(arrayPairs(_military_skills, [
          "Archery",
          "Crossbow",
          "Great Weapon",
          "Hand Weapon",
          "Light Artillery",
          "Rifle",
          "Shield",
          "Thrown Weapon",
          "Unarmed Combat"]), "Choose 3"),
        list(_occupational_skills, [
          "Command",
          "Detection",
          "Gambling",
          "Riding"]),
        number(_gold, 100)
      ],
      "Wolf of Orboros": [
        listItem(_careers, "Wolf of Orboros"),
        listItem(_notes, "Must choose between Bone Grinder, Brigand, Chieftain, Monster Hunter, Scout, Devourer Shaman, Sorcerer (any), Circle Warlock, or Wolf Rider"),
        list(_abilities, ["Dual Shot (Crossbow)", "Specialization (Cleft Weapon)"]),
        listItem(_connections, "Wolves of Orboros"),
        list(_military_skills, ["Crossbow", "Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, [
          "Detection",
          "Survival",
          "Tracking"]),
        listItem(_armors, "Full Plate"),
        listItem(_gear, "Wolf Pelt"),
        choices([
          arrayPair(_melee_weapons, "Cleft Spear"),
          arrayPair(_ranged_weapons, "Crossbow, Dual"),
          arrayPair(_gear, "Quiver of 10 bolts")
        ], "Choose either Spear or<br />Crossbow and Quiver")
      ],
      "Wolf Rider": [
        listItem(_careers, "Wolf Rider"),
        list(_abilities, ["Scent", "Trained Rider (Duskwolf)"]),
        list(_military_skills, ["Great Weapon", "Hand Weapon"]),
        list(_occupational_skills, [
          "Animal Handling",
          "Navigation",
          "Riding",
          "Survival",
          "Tracking"]),
        number(_gold, 75),
        list(_gear, ["Duskwolf", "tack"])
      ]
    };
    var adventuringCompanies = {
      "Agents of the Crucible": [
        listItem(_notes, "Adventuring Company: Agents of the Crucible"),
        listItem(_notes, "All characters must either be an Alchemist, Arcane Mechanik, Arcanist, Crucible Guard, Field Mechanik, or Warcaster"),
        listItem(_notes, "Each character gains 25 gc per month")
      ],
      "Arcane Order": [
        listItem(_notes, "Adventuring Company: Arcane Order"),
        listItem(_notes, "At least one of the characters must be Gifted"),
        listItem(_occupational_skills, "Lore (Arcane)"),
        choices(arrayPairs(_abilities, ["Arcane Scholar", "Shield Guard"]), "Choose 1")
      ],
      "Army of the Western Reaches": [
        listItem(_notes, "Adventuring Company: Army of the Western Reaches"),
        list(_notes, [
          "A member of the Warrior caste is the leader",
          "Can requisition 100 sl in skorne arms, ammo, and gear per month"]),
        choices([
          arrayPair(_benefits, "Battlefield Coordination") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Climbing",
          "Command",
          "Detection",
          "Intimidation",
          "Medicine",
          "Navigation",
          "Riding",
          "Sneak",
          "Survival"]), "Choose 1")
      ],
      "Beast Hunters": [
        listItem(_notes, "Adventuring Company: Beast Hunters"),
        list(_notes, [
          "A member of the Warrior caste is the leader",
          "Can requisition 100 sl in skorne arms, ammo, and gear per month"]),
        choices([
          arrayPair(_benefits, "Battle Field Coordination") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Climbing",
          "Command",
          "Detection",
          "Intimidation",
          "Medicine",
          "Navigation",
          "Riding",
          "Sneak",
          "Survival"]), "Choose 1")
      ],
      "Bonded Porters": [
        listItem(_notes, "Adventuring Company: Bonded Porters"),
        listItem(_notes, "One is the leader"),
        choices([
          arrayPair(_benefits, "Battle Field Coordination") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Driving",
          "Medicine",
          "Navigation",
          "Survival"]), "Choose 1")
      ],
      "Bone Grinder Hunting Party": [
        listItem(_notes, "Adventuring Company: Bone Grinder Hunting Party"),
        list(_notes, [
          "All characters must either be a Bone Grinder, Brigand, Bushwhacker, Monster Hunter, Scout, or Warrior",
          "One Bone Grinder leads the party",
          "Bone Grinders begin the game with an additional fetish"]),
        choices(arrayPairs(_abilities, [
          "Craft (skinner)",
          "Craft (tanner)",
          "Lore (extraordinary zoology)"]), "Choose 1 if<br />not Bone Grinder")
      ],
      "Caspian Cortex Smugglers": [
        listItem(_notes, "Adventuring Company: Caspian Cortex Smugglers"),
        list(_notes, [
          "All characters must either be an Arcane Mechanik, Cutthroat, Field Mechanik, Military Officer, Soldier, Spy, or Thief",
          "One is the lead smuggler"])
      ],
      "Circle Orboros Conclave": [
        listItem(_notes, "Adventuring Company: Circle Orboros Conclave"),
        list(_notes, [
          "All characters must either be a Blackclad, Circle Warlock, or Wolf of Orboros",
          "One Blackclad is the leader"]),
        choices(arrayPairs(_occupational_skills, [
          "Command",
          "Deception",
          "Lore (any)",
          "Negotiation"]), "Choose 1 if Blackclad"),
        listItem(_notes, "All non-Blackclad members of the party gain one additional rank in the general skill of their choice"),
      ],
      "Crusaders": [
        listItem(_notes, "Adventuring Company: Crusaders"),
        list(_notes, [
          "All characters must either be an Allegiant, Cutthroat, Exemplar, Man-at-Arms, Paladin, Priest (Menite), Protectorate Warcaster, Reclaimer, Scritator, Soldier, or Vassal of Menoth",
          "One Priest, Protectorate Warcaster, or Scrutator leads the party",
          "Each character gains a Protectorate melee or ranged weapon (p. 264)"]),
        choices([ arrayPair(_abilities, "Natural Leader") ], "For the leader")
      ],
      "Farrow Tribe": [
        listItem(_notes, "Adventuring Company: Farrow Tribe"),
        list(_notes, [
          "One Chieftain is the leader"]),
        choices(arrayPairs(_occupational_skills, [
          "Deception",
          "Escape Artist",
          "Gambling",
          "Intimidation",
          "Sneak",
          "Survival"]), "Choose 1"),
        listItem(_notes, "All mighty characters as well as the leader gain an additional might archetype benefit")
      ],
      "Five Fingers Transporters": [
        listItem(_notes, "Adventuring Company: Five Fingers Transporters"),
        list(_notes, [
          "All characters must either be an Bounty Hunter, Explorer, Highwayman, Investigator, Man-at-Arms, Ranger, or Spy",
          "One is the boss"]),
        listItem(_languages, "Five Cant"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_occupational_skills, "Disguise"),
        listItem(_abilities, "Cover Identity")
      ],
      "Fringe Cultists": [
        listItem(_notes, "Adventuring Company: Fringe Cultists"),
        list(_notes, [
          "All characters must be worshippers of Cyriss, and at least one must be Intellectual or a Priest of Cyriss",
          "One Priest or Intellectual is the leader"]),
          choices([
            arrayPair(_abilities, "Team Leader"),
            arrayPair(_notes, "+2 social skill rolls against other members") ], "Choose all if leader"),
          choices(arrayPairs(_occupational_skills, [
            "Craft (metalworking)",
            "Craft (stoneworking)",
            "Forensic Science",
            "Lore (Cyriss)",
            "Mechanikal Engineering",
            "Research"]), "Choose 1 if not leader")
      ],
      "Gatorman Tribe": [
        listItem(_notes, "Adventuring Company: Gatorman Tribe"),
        list(_notes, [
          "One Bokor or Chieftain is the leader"]),
        choices(arrayPairs(_occupational_skills, [
          "Deception",
          "Intimidation",
          "Survival",
          "Swimming",
          "Tracking"]), "Choose 1 if not Swamp Warlock"),
        listItem(_notes,
          "All Swamp Warlocks may begin the game with a large-base Swamp Warbeast")
      ],
      "Greylords": [
        listItem(_notes, "Adventuring Company: Greylords"),
        list(_notes, [
          "All characters must either be an Arcane Mechanik, Greylord Arcanist, Doom Reaver, Explorer, Investigator, Man-at-Arms, Military Officer, Soldier, Spy, or Khadoran Warcaster",
          "One Arcane Mechanik, Greylord Arcanist, or Khadoran Warcaster is the magziev",
          "Each gifted character gains an additional cost 2 spell"]),
        listItem(_languages, "Five Cant"),
        choices([ arrayPair(_abilities, "Iron Will") ], "Choose if not gifted"),
        choices([ arrayPair(_melee_weapons,
          "Orgoth Staff") ], "Choose if magziev and<br />commpany includes a Doom Reaver")
      ],
      "Heroes of the Resistance": [
        listItem(_notes, "Adventuring Company: Heroes of the Resistance"),
        listItem(_connections, "Llaelese Resistance"),
        choices(_occupational_skills, [
          "Bribery",
          "Cryptography",
          "Deception",
          "Detection",
          "Disguise",
          "Escape Artist",
          "Forgery",
          "Interrogation",
          "Intimidation",
          "Sneak"], "Choose 1")
      ],
      "House Taberna": [
        listItem(_notes, "Adventuring Company: House Taberna"),
        list(_notes, [
          "One is the leader",
          "All characters must either be a Cataphract, Ferox Rider, Praetorian, Tyrant, or Venator",
          "Each month the characters gain 300 sl from their house"])
      ],
      "Idrian Tribe": [
        listItem(_notes, "Adventuring Company: Idrian Tribe"),
        list(_notes, [
          "All characters must either be an Highwayman, Horseman, Priest (Menite), Ranger, Rifleman, or Sorcerer",
          "One Idrian is the chieftain"]),
        listItem(_abilities, "Expert Rider"),
        listItem(_notes, "Riding Horse")
      ],
      "Illuminated Ones": [
        listItem(_notes, "Adventuring Company: Illuminated Ones"),
        listItem(_notes,
          "All characters must either be an Illuminated Arcanist, Investigator, Knight, or Priest (Morrowan)"),
        listItem(_abilities, "Iron Will"),
        choices([
          arrayPair(_melee_weapons, "Flail"),
          arrayPair(_melee_weapons, "Mace"),
          arrayPair(_melee_weapons, "Spear"),
          arrayPair(_melee_weapons, "Sword"),
          arrayPair(_ranged_weapons, "Execrator Pistol")], "Choose 1 blessed weapon")
      ],
      "Intrepid Investigators": [
        listItem(_notes, "Adventuring Company: Intrepid Investigators"),
        list(_notes, [
          "All characters must either be an Alchemist, Arcane Mechanik, Arcanist, Aristocrat, Explorer, Investigator, Military Officer, Priest, or Spy",
          "All characters can benefit from the Intellectual archetype benefit twice" ]),
      ],
      "Khadoran Military Detail": [
        listItem(_notes, "Adventuring Company: Khadoran Military Detail"),
        list(_notes, [
          "All characters must either be an Assault Kommando, Field Mechanik, Greylord Arcanist, Iron Fang, Man-O-War, Ranger, Rifleman, Soldier, or Khadoran Warcaster",
          "One member is the lieutenant",
          "The group receives 100 gc in Khadoran arms, ammunition, and gear each month",
          "Field Mechaniks can begin with a Kolstot laborjack with up to 200 gc in weapons"]),
        choices([ arrayPair(_abilities, "Natural Leader") ], "Choose if lieutenant")
      ],
      "Korsk Stanzynat Mustyn": [
        listItem(_notes, "Adventuring Company: Korsk Stanzynat Mustyn"),
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
        listItem(_notes, "Adventuring Company: Law Dogs"),
        listItem(_notes, [
          "All characters must either be a Bounty Hunter, Highwayman, Investigator, Military Officer, Ranger, or Soldier",
          "While pursuing a bounty, character gain boni on skill and attack rolls" ])
      ],
      "Mercenary Charter": [
        listItem(_notes, "Adventuring Company: Mercenary Charter"),
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
      "Mystics": [
        listItem(_notes, "Adventuring Company: Mystics"),
        list(_notes, [
          "All characters must either be an Ascetic, Extoller, Mortitheurge, Nihilator, or Worlock: Skorne",
          "One is the leader"]),
        choices([
          arrayPair(_abilities, "Team leader"),
          arrayPair(_notes, "+2 on social rolls against other members") ], "Choose all if leader"),
        choices([
          arrayPair(_benefits, "Occult Secrets") ], "Choose if Gifted"),
        choices([
          arrayPair(_abilities, "Shield Guard") ], "Choose if not Gifted")
      ],
      "Nobile Exiles": [
        listItem(_notes, "Adventuring Company: Nobile Exiles"),
        listItem(_notes, "One Aristocrat is a baron"),
        listItem(_connections, "exiled Llaelese aristocracy"),
        choices([
          arrayPair(_abilities, "Natural Leader"),
          arrayPair(_notes, "Gain +2 on all social skill rolls against other party characters") ], "The baron chooses all"),
        number(_gold, 50)
      ],
      "Nomads": [
        listItem(_notes, "Adventuring Company: Nomads"),
        list(_notes, [
          "All characters must either be a Beast Handler, Bushwhacker, Chieftain, Guide, Monster Hunter, Raptor, Scout, Warrior, or Wolf Rider",
          "One is the chief"]),
        choices([
          arrayPair(_abilities, "Battle Plan: Shadow") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Driving",
          "Negotiation",
          "Riding",
          "Survival",
          "Tracking"]), "Choose 1")
      ],
      "Northkin Kriel": [
        listItem(_notes, "Adventuring Company: Northkin Kriel"),
        list(_notes, ["One Chieftain or Shaman is the warband leader"]),
        choices([
          arrayPair(_abilities, "Immunity: Cold") ], "Choose if Trollkin or Pyg"),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if warband leader"),
        listItem(_notes,
          "Every character gains one rank in any general skill or in Unarmed Combat")
      ],
      "Nyss Refugees": [
        listItem(_notes, "Adventuring Company: Nyss Refugees"),
        list(_notes, ["he eldest Nyss is the leader"]),
        choices($.merge(arrayPairs(_abilities, [
          "Astute",
          "Camouflage",
          "Prowl",
          "Trained Rider (Ulk)"]), arrayPairs(_languages, languages)), "Choose 1 if Nyss"),
        choices([ arrayPair(_languages, "Aeric") ], "Choose if non-Nyss")
      ],
      "Ordic Naval Expedition": [
        listItem(_notes, "Adventuring Company: Ordic Naval Expedition"),
        list(_notes, [
          "All characters must either be an Artillerist, Explorer, Marine, Maritime Order of the Trident Arcanist, or Ordic Warcaster",
          "One character with Military Officer is the captain" ]),
        list(_occupational_skills, ["Climbing", "Rope Use", "Sailing", "Swimming"])
      ],
      "Outlaws": [
        listItem(_notes, "Adventuring Company: Outlaws"),
        list(_notes, [
          "All characters must either be an Alchemist, Cutthroat, Duelist, Highwayman, Pistoleer, Rifleman, Sorcerer, Spy, or Thief",
          "One character is the boss" ]),
        listItem(_languages, "Five Cant"),
        listItem(_abilities, "Gang")
      ],
      "Pirates of the Broken Cost": [
        listItem(_notes, "Adventuring Company: Pirates of the Broken Cost"),
        listItem(_notes, "All characters must either be a Cutthroat, Explorer, Military Officer, Pirate, or Thief"),
        listItem(_notes, "One character is the captain"),
        choices([ arrayPair(_abilities, "Natural Leader") ], "The captain gets the Natural Leader ability"),
        listItem(_abilities, "Hit the Deck!")
      ],
      "Raiders": [
        listItem(_notes, "Adventuring Company: Raiders"),
        list(_notes, ["One member is the captain"]),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if captain"),
        choices(arrayPairs(_occupational_skills, [
          "Detection",
          "Driving",
          "Escape Artist",
          "Gambling",
          "Intimidation",
          "Riding",
          "Sneak",
          "Streetwise",
          "Survival"]), "Choose 1")
      ],
      "Renegades": [
        listItem(_notes, "Adventuring Company: Renegades"),
        listItem(_notes, "One is the leader"),
        list(_abilities, [
          "Ambush",
          "Traceless Path"])
      ],
      "Soldiers of Fortune": [
        listItem(_notes, "Adventuring Company: Soldiers of Fortune"),
        list(_notes, ["One member is the captain"]),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if captain"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Driving",
          "Gambling",
          "Negotiation",
          "Riding",
          "Survival"]), "Choose 1")
      ],
      "Spy Ring": [
        listItem(_notes, "Adventuring Company: Spy Ring"),
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
        listItem(_notes, "Adventuring Company: Thamarite Sept"),
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
      "Tharn Tuath": [
        listItem(_notes, "Adventuring Company: Tharn Tuath"),
        list(_notes, ["One Chieftain or Circle Warlock leads the party"]),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Climbing",
          "Detection",
          "Intimidation",
          "Jumping",
          "Lore (Devourer)",
          "Medicine",
          "Riding",
          "Sneak",
          "Survival"]), "Choose 1")
      ],
      "The Inner Circle": [
        listItem(_notes, "Adventuring Company: The Inner Circle"),
        list(_notes, [
          "All characters must be Intellectual and either be a Priest of Cyriss, or a Cyrissist Warcaster",
          "One Priest is the leader"]),
        listItem(_abilities, "University Education")
      ],
      "United Kriels": [
        listItem(_notes, "Adventuring Company: United Kriels"),
        list(_notes, ["One Trollkin is the captain"]),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if captain"),
        choices($.merge(arrayPairs(_occupational_skills, [
          "Command",
          "Detection",
          "Navigation",
          "Sneak",
          "Survival"]), arrayPairs(_military_skills, [
          "Light Artillery",
          "Pistol",
          "Rifle"])), "Choose 1"),
        listItem(_notes, "gain 50 gc in weapons or gear")
      ],
      "Unlikely Heroes": [
        listItem(_notes, "Adventuring Company: Unlikely Heroes"),
        choices(arrayPairs(_languages, languages), "Choose 1"),
        listItem(_notes, "gain an additional rank in one of your careers' occupational skills")
      ],
      "Unorthodox Engagement Team": [
        listItem(_notes, "Adventuring Company: Unorthodox Engagement Team"),
        list(_notes, [
          "All characters must either be an Arcane Mechanik, Arcane Tempest Gun Mage, Field Mechanik, Ranger, Rifleman, Stormblade, Stormsmith, Trencher, or Cygnaran Warcaster",
          "One member is the lieutenant",
          "The characters can expect to be resupplied with ammunition, grenates, and alchemical accumulators"]),
        choices([arrayPair(_abilities, "Natural Leader")], "For the lieutenant"),
        listItem(_abilities, "Find Cover")  
      ],
      "Wilderness Expedition": [
        listItem(_notes, "Adventuring Company: Wilderness Expedition"),
        list(_notes, [
          "All characters must either be an Aristocrat, Explorer, Highwayman, Horseman, Man-at-Arms, Pistoleer, Ranger, Rifleman, or an non-Cunning IKU character",
          "One member is the leader, typically an Explorer"]),
        choices(arrayPairs(_occupational_skills, [
          "Climbing",
          "Driving",
          "Medicine",
          "Riding",
          "Navigation",
          "Survival",
          "Tracking"]), "Choose 1")
      ],
      "Wilderness Kriel": [
        listItem(_notes, "Adventuring Company: Wilderness Kriel"),
        list(_notes, ["One Chieftain or Shaman is the warband leader"]),
        choices([
          arrayPair(_abilities, "Natural Leader") ], "Choose if leader"),
        choices(arrayPairs(_occupational_skills, [
          "Animal Handling",
          "Command",
          "Craft (stoneworking)",
          "Detection",
          "Driving",
          "Lore (Dhunia)",
          "Lore (Trollkin)",
          "Negotiation",
          "Riding",
          "Survival",
          "Tracking"]), "Choose 1")
      ]
    };
    
    
    // ## Character Generator Variables ## \\
    
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
    
    
    var index = ikrpg.index.data;
    
    function addOptionsGroupedByPublication(selector, data, publications, category, subcategories) {
      
      var groups = { "Other Publications": [] };
      
      $.each(publications, function(i, publication) {
        groups[publication] = [];
      });
      
      $.each(index, function(i, entry) {
        if(entry.category == category && $.inArray(entry.subcategory, subcategories) > -1 && data.hasOwnProperty(entry.name)) {
          if(groups.hasOwnProperty(entry.publication)) {
            groups[entry.publication].push(entry.name);
          } else {
            groups["Other Publications"].push(entry.name);
          }
        }
      });
            
      var html = "";
      
      $.each($.merge(publications, ["Other Publications"]), function(i, publication) {
        if(groups[publication]) {
          html += '\n<optgroup label="'+publication+':">';
          $.each(groups[publication].sort(), function(key, entry) {
            html += '\n<option value="'+entry+'">'+entry+'</option>';
          });
          html += '\n</optgroup>';
        }
      });
      
      var old = $(selector).html();
      $(selector).html(old + html);
    }
    
    addOptionsGroupedByPublication(
      "#adventuring-company-select",
      ikrpg.generator.adventuringCompanies,
      ["Core Rules", "Urban Adventure", "Kings, Nations, and Gods", "Unleashed Core Rules", "Skorne Empire"],
      "Character Creation",
      ["Adventuring Company"]
    );
    addOptionsGroupedByPublication(
      "#career1-select",
      ikrpg.generator.careers,
      ["Core Rules", "Urban Adventure", "Kings, Nations, and Gods", "Unleashed Core Rules", "Skorne Empire"],
      "Character Creation",
      ["Career", "Career Option"]
    );
    addOptionsGroupedByPublication(
      "#career2-select",
      ikrpg.generator.careers,
      ["Core Rules", "Urban Adventure", "Kings, Nations, and Gods", "Unleashed Core Rules", "Skorne Empire"],
      "Character Creation",
      ["Career", "Career Option"]
    );
      
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
              var identifier = "ability"+(index+1);
              
              character[identifier] = character[identifier] || { "title": "", "description": "", "page": "" };
              character[identifier]["title"] = ability;
              
              var db = ikrpg.index.data;
              
              var abilityBaseName = ability.replace(/(\(.*\))+/g, "").replace(/\s+$/, "");
              var entry = $.grep(db, function(e) { return e["name"] == abilityBaseName; });
              if(entry && entry.length > 0) {
                var page = entry[0]["page"];
                character[identifier]["page"] = page;
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
              
              character["s"+(index+1)] = character["s"+(index+1)] || { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" };
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
              if(stats && stats.length > 1) {
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
              character["spell"+(index+1)] = character["spell"+(index+1)] || { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" };
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
              character["gear"+(index+1)] = character["gear"+(index+1)] || { "title": "", "benefit": "" };
              character["gear"+(index+1)]["title"] = gear;
            });
            
          })();
          
          // #### Ranged Weapons #### \\
          (function() {
            
            var db = ikrpg.generator.db.rangedWeapon;
            
            var rangedWeapons = data["ranged weapons"] || [];
            
            $.each(rangedWeapons.sort(), function(index, name) {
              var rat = "rat"+(index+1);
              
              character[rat] = character[rat] || { "name": "", "rat": "", "rng": "", "aoe": "", "pow": "", "notes": "", "ammo": "" };
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
              
              character[mat] = character[mat] || { "name": "", "mat": "", "pow": "", "ps": "", "notes": "" };
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
              character["wornarmor"+(index+1)] = character["wornarmor"+(index+1)] || { "name": "", "notes": "", "spd": "", "def": "", "arm": "" };
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
              character["note"+(index+1)] = character["note"+(index+1)] || { "title": "", "text": "" };
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
              character["connection"+(index+1)] = character["connection"+(index+1)] || { "name": "", "notes": "", "page": "" };
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