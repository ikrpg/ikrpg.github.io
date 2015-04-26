// global
// var ikrpg

var ikrpg = ikrpg || {};

(function () {
	'use strict';
	
	ikrpg.index = ikrpg.index || {};
	
  // Ability
  // Adventure
  //     Scenario, Encounter, Scenario Setting
  // Alchemy
  //     Alchemical Ingredient, Alchemical Item, Field Alchemy, Grenate
  // Character Creation
  //     Adventuring Company, Archetype, Career, Career Option, Race
  // Armory
  //     Armor, Melee Weapon, Improvised Melee Weapon, Ranged Weapon, Ammunition,
  //     Ranged Weapon Accessory, Improvised Ranged Weapon, Magical Ranged Weapon
  // Disease
  //     Disease Type, Disease Classification, Contraction Method, Symptom, Disease
  // Equipment
  //     Clothing, Equipment, Mount, Riding Equipment, Food
  // Geography
  //     Nation, Culture, Region, City/Fortress
  // Individual
  // Mechanika
  //     Capacitor, Runeplate, Mechanikal Weapon, Mechanikal Armor, Ironhead Armor,
  //     Clockwork Vessel, Clockwork Vessel Upgrade, Mechanikal Device
  // Monsternomicon
  //     Monster/Opponent, Spawn Gifts, Template
  // Monster
  //     Monster/Opponent, Solo Monster/Opponent
  // Organization
  //     Criminal Enterprise, Military Organization, Enterprise, Arcane Order,
  //     Religious Group, Dynasty
  // Orgoth Relic
  //     Boon, Curse, Relic
  // Skill
  //     Military Skill, Occupational Skill, Duelling Maneuver, Trick Riding
  // Spell
  // Steamjack
  //     Steamjack/Vector, Chassis, Cortex, Melee Weapon, Ranged Weapon, Gear/Upgrade, Tune-Up
  // Thrall
  //     Thrall Type, Thrall Upgrade
  // Vehicle
	ikrpg.index.data = [
    // ##### Ability ##### \\
    {
      name:        "'Jack Marshal",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Abomination",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Abomination",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ace Commander",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Acrobatics",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Adaptable [Urban]",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Advisor",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Advisor",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Aegis",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Always a Deal to be Made",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ambush",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ambush",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Anatomical Precision",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Anatomical Precision",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Appraise",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Arcane Assassin",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Arcane Defenses",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Arcane Engineer",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Arcane Precision",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Arcane Scholar",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Archer",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Astute",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Authority",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Backstab",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Backstab",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Commander",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Battlefield Coordination",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Call to Action",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Call to Action",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Close Fire",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Coordinated Strike",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Coordinated Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Desperate Pace",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Go to Ground",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Go to Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Orchestrate Fire",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Reconnaissance",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Shadow",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Shadow",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Battle Plan: Take Cover",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bayonet Charge",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Berserk",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Berserk",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Big Game Hunter",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Big Game Hunter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Binding",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Binding",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Black Tongue",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Blaster",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Blood Rites",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Blood Spiller",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Blood Trade",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bloodlust",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bloodlust",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Boarding Action",
      publication: "Full Metal Friday 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Boarding Action",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bodge",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bodyguard",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bomber",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bond",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bone Grinder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Brawler",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Brew Master",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Brew Master",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Bull Rush",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Camouflage",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Camouflage",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Card Sharp",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Cautious Advance",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Cavalry Charge",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Chain Attack: Bleed Out",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Chain Attack: Body Slam",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Chain Attack: Pin Down",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Chain Attack: Smite",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Choir",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Circular Vision",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Cleave",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Clockwork Transcendence",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Close Shot",
      publication: "Errata",
      page:        "1",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Combat Rider",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Communion",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Conniver",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Conniver",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Convergence Warcaster",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Corruptor",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Counter Offer",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Cover Identity",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Crackshot",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Craft Rune Shot",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Crossbowman",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dark Scribe",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Deadly Skill",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Defender",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Defender",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Defensive Line",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dig In",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Disease Resistance",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Disease Resistance",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dispel",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Divine Fortitude",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dodger",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dodger",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dominating Presence",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Double Powder Ration",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Drive: Ancillary Attack",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Drive: Assault",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Drive: Off Road",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Drive: Pronto",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dual Shot",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Dual Shot",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Electromancer",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Elemental Master",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Empower",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Enigma Cipher",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Expert Rider",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Exterminator",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Eye of the Storm",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fabricator",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fall Back",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Cook",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Draw",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Draw",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Rearm",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Reload",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Reload",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fast Reload",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fearless",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fearless",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fearsome Howl",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fearsome Howl",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Cacophony",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Call of Defiance",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Ground Shaker",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Heroic Ballad",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Reverberation",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Signal Call",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fell Call: Sonic Blast",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Field Alchemist",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Field Marshall: Celestial Harmony",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Field Marshal: Magical Attack",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Field Marshal: Relentless Charge",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Field Marshal: Shield Guard",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Find Cover",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Find Cover",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fire in the Hole!",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fist of God",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Flash Thief",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Fleet Foot",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Flesh of Steel",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Flesh of Steel",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Flying Fists",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Flying Fists",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Follow Up",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Free Style",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gang",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gang",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gatekeeper",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Get Away",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ghost Shield",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Girded",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Good Breeding",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Go to Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Grappler",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Grave Man",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Great Power",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Grenadier",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Grenadier",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gunfighter",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gunfighter",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Gunfighter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hardened Strike",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Haruspex",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Haruspex",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Head-Butt",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Head-Butt",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hit em' Low",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hit em' Low",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hit the Deck!",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hulking Presence",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hunting Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Hyper Awareness",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Imbue Weapon",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Immunity: Cold",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Immunity: Corrosion",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Immunity: Electricity",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Immunity: Fire",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Imperishable Conviction",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Impervious Wall Stance",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Inflict Pain",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Inscribe Formulae",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Inscribe Thrall Rune",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Instructor",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Iron Sentinel",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Iron Will",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ironhead",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Keen Eyed",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Language",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Language",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Legacy of Bragg",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Light Cavalry",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Line Breaker",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Load Bearing",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Load Bearing",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Lost in the Crowd",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Low Breeding",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Maestro",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Mage Killer",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Makeshift Engineering",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Man of Iron",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Marksman",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Marksman",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Mounted: Counter Charge",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Natural Leader",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Natural Leader",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Necromancer",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Night Fighter",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Night Fighter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Oath of Silence",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Onslaught",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Onslaught",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Overpower",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Parry",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Patch Up",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Pathfinder",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Pathfinder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Perfect Timing",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Poison Resistance",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Poison Resistance",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Port of Call",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Power of Truth",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Powerstrain",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Precision Strike",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Precision Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Press the Attack",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Previlege",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Prowl",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Prowl",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Pursuit",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Quick Work",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Quick Work",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Rallying Cry",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Reclaim",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Reed in the Wind",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Relentless Advance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Relentless Charge",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Relentless Charge",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ram",
      publication: "Full Metal Friday 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Resourceful",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Restoration",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Retaliatory Strike",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Return Fire",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Rhulic Warcaster",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Ride-by Attack",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Riposte",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Rock Solid",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Rock Steady",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Roll with It",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Roll with It",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Runesmith",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Saddle Shot",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Saddle Shot",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sanguine Bond",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Scoping it Out",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Scorched Earth",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Scrounge",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sentry",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sentry",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Serpent Strike",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Set Defense",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shadow Magic",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shadow Magic",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shield Guard",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shield Guard",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shield Slam",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shifting Sands Stance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Shootist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Signal Language",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Signal Language",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Silence",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Silence",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Silver Tongued",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Skilled Trapper",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sniper",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Snow Wreathed",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Soul Taker",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Soul Thief",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Soulstorm",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Specialization",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sprint",
      publication: "Full Metal Friday 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Staredown",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Steady",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Steam Jockey",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Steam Savant",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Steamo",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Stone-and-Mortars Stance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Storm Booster",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Strangler",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Street Survivor",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Sucker!",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Suppressing Fire",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Survivalist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Swift Hunter",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Swift Hunter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Swift Rider",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Take Down",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Targeteer",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Team Leader",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Team Leader",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Team Player",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Test the Wind",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Tinkerer",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Torture",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Traceless Path",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Traceless Path",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Trained Rider",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Trained Rider",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Trick Rider",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Trip",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Trip",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Truth Leader",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Tune Up",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Two-Weapon Fighting",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Two-Weapon Fighting",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "University Education",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Urcaen's Gate",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Vessel Upgrade",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Vivisectionist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Waylay",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Waylay",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Weatherman",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Weather Vane",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Whirlwind",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Ability",
      subcategory: ""
    },
    {
      name:        "Whispers of the Creator",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: ""
    },
    // ##### Adventure > Scenario ##### \\
    {
      name:        "Bitter Medicine",
      publication: "Bitter Medicine",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Fools Rush In",
      publication: "Fools Rush In",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Friends in High Places",
      publication: "Urban Adventure",
      page:        "80",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Hogwash",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 1: Undeath Metal",
      publication: "No Quarter #53",
      page:        "100",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 2: Act of Murder",
      publication: "No Quarter #54",
      page:        "97",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 3: Mercilessly Alive",
      publication: "No Quarter #55",
      page:        "94",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 4: Many Deaths, One Life",
      publication: "No Quarter #56",
      page:        "90",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 5: Stone Cold",
      publication: "No Quarter #57",
      page:        "90",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Immortality Part 6: The Death and Life of Vladislav Abrosim",
      publication: "No Quarter #58",
      page:        "92",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "Spirit in Steel",
      publication: "No Quarter #44",
      page:        "62",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "The Lost Chamber",
      publication: "Full Metal Friday 1/3/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    {
      name:        "The Noble's Tournament",
      publication: "Full Metal Friday 1/5/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario"
    },
    // ##### Adventure > Encounter ##### \\
    {
      name:        "Alchemical Imbalance",
      publication: "Full Metal Friday 1/2/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Blood and Circuses",
      publication: "No Quarter #52",
      page:        "94",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Dark Water",
      publication: "Path of Devastation Season 2",
      page:        "20",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Dead End",
      publication: "Full Metal Friday 1/4/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Dirty Deeds",
      publication: "No Quarter #52",
      page:        "97",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Disturbing the Dead",
      publication: "Urban Adventure",
      page:        "52",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Explosive Yield",
      publication: "Urban Adventure",
      page:        "62",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Sailor take Warning",
      publication: "Full Metal Friday 1/1/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Sewer Surprise",
      publication: "Urban Adventure",
      page:        "56",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Talons in the Dark",
      publication: "Urban Adventure",
      page:        "59",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    {
      name:        "Twisted Steel",
      publication: "Path of Devastation Season 1",
      page:        "20",
      category:    "Adventure",
      subcategory: "Encounter"
    },
    // ##### Adventure > Scenario Setting ##### \\
    {
      name:        "Bexlyfe",
      publication: "No Quarter #53",
      page:        "64",
      category:    "Adventure",
      subcategory: "Scenario Setting"
    },
    {
      name:        "Five Fingers",
      publication: "Urban Adventure",
      page:        "32",
      category:    "Adventure",
      subcategory: "Scenario Setting"
    },
    {
      name:        "Lhen",
      publication: "No Quarter #56",
      page:        "39",
      category:    "Adventure",
      subcategory: "Scenario Setting"
    },
    {
      name:        "Novokorska",
      publication: "No Quarter #51",
      page:        "48",
      category:    "Adventure",
      subcategory: "Scenario Setting"
    },
    {
      name:        "Wexmere",
      publication: "No Quarter #46",
      page:        "56",
      category:    "Adventure",
      subcategory: "Scenario Setting"
    },
    // ##### Alchemy > Alchemical Ingredient ##### \\
    {
      name:        "Alchemical Explosive",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Alchemical Stone",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Alchemical Waste, Crystal",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Alchemical Waste, Liquid",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Arcane Extract",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Arcane Minerals",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Alkalic Fluid",
      publication: "Full Metal Friday 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Bioluminescent Extract",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Blackbond",
      publication: "Full Metal Friday 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Burrow Mawg Adrenal Gland",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Crypt Spider Brain",
      publication: "No Quarter #43",
      page:        "46",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Ectoplasm",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Firestifle",
      publication: "Full Metal Friday 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Glasseater",
      publication: "Full Metal Friday 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Heavy Metals",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Laughing Gas",
      publication: "Full Metal Friday 1/2/2",
      page:        "1",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Menoth's Fury",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Mineral Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Mineral Crystals",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Mutagenic Extract",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Organic Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Organic Oil",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Organic Toxin",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },
    {
      name:        "Umbroculant Drops",
      publication: "Full Metal Friday 1/2/2",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient"
    },  
    // ##### Alchemy > Alchemical Item ##### \\
    {
      name:        "Alchemical Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Alchemical Restorative",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Alchemical Restorative",
      publication: "No Quarter #53",
      page:        "103",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Antitoxin",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Ashes of Urcaen",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Bottled Light",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Cryptospector",
      publication: "Monsternomicon",
      page:        "23",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Cryptospector Potion",
      publication: "No Quarter #43",
      page:        "47",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Crucible Rounds",
      publication: "Kings, Nations, and Gods",
      page:        "310",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Fear Gas",
      publication: "Urban Adventure",
      page:        "16",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Firebane Salve",
      publication: "Urban Adventure",
      page:        "16",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Fortemorphic Elixier",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Gas Candles",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Healing Liniment",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Invisible Ink",
      publication: "Urban Adventure",
      page:        "17",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Knorva's Kiss",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Night's Black",
      publication: "Urban Adventure",
      page:        "17",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Persuasion Elixier",
      publication: "Urban Adventure",
      page:        "18",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Preservation of Corben Pendant",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Remel's Embrace",
      publication: "Kings, Nations, and Gods",
      page:        "247",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Restorative Oinment",
      publication: "Urban Adventure",
      page:        "18",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Revitalizer Tonic",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Rousing Vapors",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Rust Agent",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Scent Mask",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "12",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Somnolence Elixier",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Spirit Salts",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Tarnish",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Vitriolic Fire",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    {
      name:        "Whispers of Lukas",
      publication: "Kings, Nations, and Gods",
      page:        "247",
      category:    "Alchemy",
      subcategory: "Alchemical Item"
    },
    // ##### Alchemy > Field Alchemy ##### \\
    {
      name:        "Simple Acid",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Acid",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "30",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Stimulant",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Stimulant",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Stink Gas",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Stink Gas",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Smoke",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    {
      name:        "Simple Smoke",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy"
    },
    // ##### Alchemy > Grenate ##### \\
    {
      name:        "Acid Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Ashes of Urcaen",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Bomb, Large",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Bomb, Small",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Cinder Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Knockout Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    {
      name:        "Rust Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate"
    },
    // ##### Character Creation > Adventuring Company ##### \\
    {
      name:        "Agents of the Crucible",
      publication: "Kings, Nations, and Gods",
      page:        "306",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Arcane Order",
      publication: "Core Rules",
      page:        "151",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Caspian Cortex Smugglers",
      publication: "Urban Adventure",
      page:        "76",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Crusaders",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Five Fingers Transporters",
      publication: "Urban Adventure",
      page:        "77",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Fringe Cultists",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Greylords",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Heroes of the Resistance",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Idrian Tribe",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Illuminated Ones",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Intrepid Investigators",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Khadoran Military Detail",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Korsk Stanzynat Mustyn",
      publication: "Urban Adventure",
      page:        "78",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Law Dogs",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Mercenary Charter",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Nobile Exiles",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Ordic Naval Expedition",
      publication: "Kings, Nations, and Gods",
      page:        "306",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Outlaws",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Pirates of the Broken Cost",
      publication: "Core Rules",
      page:        "153",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Spy Ring",
      publication: "Core Rules",
      page:        "153",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Thamarite Sept",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "The Inner Circle",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    {
      name:        "Unorthodox Engagement Team",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Character Creation",
      subcategory: "Adventuring Company"
    },
    // ##### Character Creation > Archetype ##### \\
    {
      name:        "Gifted",
      publication: "Core Rules",
      page:        "115",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Gifted",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Intellectual",
      publication: "Core Rules",
      page:        "115",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Mighty",
      publication: "Core Rules",
      page:        "116",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Mighty",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Skilled",
      publication: "Core Rules",
      page:        "116",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    {
      name:        "Skilled",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype"
    },
    // ##### Character Creation > Career ##### \\
    {
      name:        "Alchemist",
      publication: "Core Rules",
      page:        "120",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Allegiant",
      publication: "Kings, Nations, and Gods",
      page:        "356",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Arcane Mechanik",
      publication: "Core Rules",
      page:        "121",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Arcanist",
      publication: "Core Rules",
      page:        "122",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Aristocrat",
      publication: "Core Rules",
      page:        "123",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Artillerist",
      publication: "Kings, Nations, and Gods",
      page:        "304",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Assault Kommando",
      publication: "Kings, Nations, and Gods",
      page:        "177",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Bounty Hunter",
      publication: "Core Rules",
      page:        "124",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Cutthroat",
      publication: "Core Rules",
      page:        "125",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Doom Reaver",
      publication: "Kings, Nations, and Gods",
      page:        "178",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Doom Reaver",
      publication: "No Quarter #46",
      page:        "28",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Duelist",
      publication: "Core Rules",
      page:        "126",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "357",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Explorer",
      publication: "Core Rules",
      page:        "127",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Fell Caller",
      publication: "Core Rules",
      page:        "128",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Field Mechanik",
      publication: "Core Rules",
      page:        "129",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Gun Mage",
      publication: "Core Rules",
      page:        "130",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Guttersnipe",
      publication: "Urban Adventure",
      page:        "4",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Highwayman",
      publication: "Core Rules",
      page:        "131",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Horseman",
      publication: "Kings, Nations, and Gods",
      page:        "179",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Investigator",
      publication: "Core Rules",
      page:        "132",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Iron Fang",
      publication: "Core Rules",
      page:        "133",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Ironhead",
      publication: "No Quarter #52",
      page:        "33",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Knight",
      publication: "Core Rules",
      page:        "134",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Labor Korune",
      publication: "Urban Adventure",
      page:        "5",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Long Rider",
      publication: "No Quarter #45",
      page:        "31",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Mage Hunter",
      publication: "Core Rules",
      page:        "135",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Man-at-Arms",
      publication: "Core Rules",
      page:        "136",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Man-O-War",
      publication: "Kings, Nations, and Gods",
      page:        "180",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Military Officer",
      publication: "Core Rules",
      page:        "137",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Paladin",
      publication: "Kings, Nations, and Gods",
      page:        "358",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Pirate",
      publication: "Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Pistoleer",
      publication: "Core Rules",
      page:        "139",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Priest of Cyriss",
      publication: "No Quarter #48",
      page:        "64",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Priest of Menoth",
      publication: "Core Rules",
      page:        "140",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Priest of Morrow",
      publication: "Core Rules",
      page:        "140",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Pugilist",
      publication: "Urban Adventure",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Raider",
      publication: "Full Metal Friday 1/1/2",
      page:        "2",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Ranger",
      publication: "Core Rules",
      page:        "141",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Reclaimer",
      publication: "Kings, Nations, and Gods",
      page:        "359",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Rifleman",
      publication: "Core Rules",
      page:        "142",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Scrutator",
      publication: "Kings, Nations, and Gods",
      page:        "360",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Searforge Trader",
      publication: "Urban Adventure",
      page:        "7",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Seeker",
      publication: "Urban Adventure",
      page:        "8",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Soldier",
      publication: "Core Rules",
      page:        "143",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Sorcerer (Fire)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Sorcerer (Ice)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Sorcerer (Stone)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Sorcerer (Storm)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Spy",
      publication: "Core Rules",
      page:        "145",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Stormblade",
      publication: "Core Rules",
      page:        "146",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Stormsmith",
      publication: "Kings, Nations, and Gods",
      page:        "89",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Thamarite Advocate",
      publication: "Urban Adventure",
      page:        "66",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Thief",
      publication: "Core Rules",
      page:        "147",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Trencher",
      publication: "Core Rules",
      page:        "148",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Urban Nomad",
      publication: "Urban Adventure",
      page:        "9",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Warcaster",
      publication: "Core Rules",
      page:        "149",
      category:    "Character Creation",
      subcategory: "Career"
    },
    {
      name:        "Warcaster, Cyriss",
      publication: "No Quarter #48",
      page:        "65",
      category:    "Character Creation",
      subcategory: "Career"
    },
    // ##### Character Creation > Career Option ##### \\
    {
      name:        "Arcane Tempest Gun Mage",
      publication: "Kings, Nations, and Gods",
      page:        "87",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Crucible Guard",
      publication: "Kings, Nations, and Gods",
      page:        "301",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Cygnaran Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "87",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Exemplar Errant",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Exemplar Vengar",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Flame Bringers",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Greylord",
      publication: "Kings, Nations, and Gods",
      page:        "175",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Greylord Outrider",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Gun Mage of the Amethyst Rose",
      publication: "Kings, Nations, and Gods",
      page:        "239",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Illuminated Arcanist",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Iron Fang Uhlan",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Khadoran Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Llaelese Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Man-O-War Drakhun",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Marine",
      publication: "Kings, Nations, and Gods",
      page:        "301",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Maritime Order of the Trident Arcanist",
      publication: "Kings, Nations, and Gods",
      page:        "302",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Ordic Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "303",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Protectorate Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Rhulic 'Jack Marshal",
      publication: "No Quarter #49",
      page:        "63",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Rhulic Field Mechanik",
      publication: "No Quarter #49",
      page:        "63",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Rhulic Warcaster",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Stormguard",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Storm Lance",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Tempest Blazer",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Trencher Commando",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Vassal of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "354",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Wyrmwall Bruiser",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Wyrmwall Rider",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    {
      name:        "Wyrmwall Veteran",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option"
    },
    // ##### Character Creation > Race ##### \\
    {
      name:        "Bog Trog",
      publication: "No Quarter #58",
      page:        "69",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Dwarf",
      publication: "Core Rules",
      page:        "109",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Gobber",
      publication: "Core Rules",
      page:        "110",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Human",
      publication: "Core Rules",
      page:        "108",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Iosan",
      publication: "Core Rules",
      page:        "111",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Nyss",
      publication: "Core Rules",
      page:        "112",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Ogrun",
      publication: "Core Rules",
      page:        "113",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Satyxis",
      publication: "Full Metal Friday 1/1/1",
      page:        "2",
      category:    "Character Creation",
      subcategory: "Race"
    },
    {
      name:        "Trollkin",
      publication: "Core Rules",
      page:        "114",
      category:    "Character Creation",
      subcategory: "Race"
    },
    // ##### Armory > Armor ##### \\
    {
      name:        "Alchemist's Leather",
      publication: "Core Rules",
      page:        "251",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Armored Great Coat",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Assault Kommando Armor",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Bastion Heavy Plate",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Bog Trog Armor",
      publication: "No Quarter #58",
      page:        "69",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Chain Mail",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Cleanser Armor",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Crucible Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Custom Battle Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Exemplar Plate",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Full Plate",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Infantry Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Leather Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Man-O-War Armor",
      publication: "Kings, Nations, and Gods",
      page:        "183",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Naval Warcaster Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Ordic Royal Marine Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Plastron",
      publication: "Full Metal Friday 1/5/1",
      page:        "3",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Storm Knight Armor",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Storm Knight Barding",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Stormsmith Armor",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Tailored Plate",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Temple Flameguard Armor",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Vassal Armor",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Armor"
    },
    {
      name:        "Winter Guard Armor",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Armor"
    },
    // ##### Armory > Melee Weapon ##### \\
    {
      name:        "Annihilator Blade",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Assassin's Blade",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Axe",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Axe, Great",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Axe, Horseman's",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Bayonet",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blast Shield",
      publication: "Urban Adventure",
      page:        "12",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blasting Lance",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blasting Pike",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blazing Sword",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blessed Lance",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Caspian Battleblade",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Cat's Paw",
      publication: "No Quarter #45",
      page:        "61",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Cloak, Weighted",
      publication: "Full Metal Friday 1/5/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Clockwork Injector",
      publication: "Urban Adventure",
      page:        "12",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Club",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Club, Banded",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Consecrated Halbert",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Cutlass",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Dagger",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Dagger, Poisoner's",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Deadblow Hammer",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Dueling Buckler",
      publication: "Full Metal Friday 1/5/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Durkin Bar",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Electro Lance",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Entrenching Tool, Military",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Fellblade",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Fellblade",
      publication: "No Quarter #46",
      page:        "30",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Firebrand",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flail",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flail, Two-Handed",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flame Spear",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Gaff, Hand",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Gaff, Pole",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Gaff Spear",
      publication: "Kings, Nations, and Gods",
      page:        "308",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Garrote",
      publication: "Full Metal Friday 1/4/3",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Garrote",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Garrote, Clockwork",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Halbert",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Hand Pick",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ice Axe",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ice Maul",
      publication: "Kings, Nations, and Gods",
      page:        "185",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ilena's Chain-Axe",
      publication: "No Quarter #58",
      page:        "91",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Knuckledriver",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Knuckledusters",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Kopis",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Lacerator",
      publication: "Full Metal Friday 1/1/2",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Lance",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Mace",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Maul",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Mechanoflail",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Mechanoflail",
      publication: "No Quarter #53",
      page:        "107",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Nyss CLaymore",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ogrun Warcleaver",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Orgoth Staff",
      publication: "Kings, Nations, and Gods",
      page:        "185",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Pen, Blade",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Pen, Poison",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Pickaxe",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Railman's Adze",
      publication: "No Quarter #45",
      page:        "64",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rapier",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Reclaimant Torch",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Relic Blade",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Retractable Lance",
      publication: "No Quarter #50",
      page:        "52",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rynnish Fan",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield, Combat",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Spear",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Spike Mail",
      publication: "No Quarter #45",
      page:        "65",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Springblade",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Staff",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Staff, Battle",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Stormcaller and Lightning Rod",
      publication: "Kings, Nations, and Gods",
      page:        "93",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Sword",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Sword, Dress",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Sword Cane",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Swort, Great",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Telescoping Staff",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Tournament Foil",
      publication: "Full Metal Friday 1/5/1",
      page:        "3",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Trench Knife",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Trench Sword",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Voltaic Halbert",
      publication: "Kings, Nations, and Gods",
      page:        "94",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    {
      name:        "War Hammer",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon"
    },
    // ##### Armory > Improvised Melee Weapon ##### \\
    {
      name:        "Bottle",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Broken Bottle",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Chain",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Large Object, Improvised",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Sap",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Small Object, Improvised",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    {
      name:        "Railroad Spike",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon"
    },
    // ##### Armory > Magical Melee Weapon ##### \\
    {
      name:        "Greylords Rune Axe",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Armory",
      subcategory: "Magical Melee Weapon"
    },
    // ##### Armory > Ranged Weapon ##### \\
    {
      name:        "Assault Kommando Flamethrower",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Axe, Throwing",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Blowtorch",
      publication: "No Quarter #45",
      page:        "60",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Blunderbuss",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bola",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bomb Lance",
      publication: "No Quarter #45",
      page:        "61",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bombardier Grenade Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bow",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bow, Great",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bow, Nyss",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Cannon, Royal Weight",
      publication: "Kings, Nations, and Gods",
      page:        "308",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Cannon-Shield",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Carbine",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Chain Gun",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Chain Gun",
      publication: "Kings, Nations, and Gods",
      page:        "94",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Crossbow",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Crossbow, Lawbringer",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Crossbow, Repeating",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Crucible Arms Model 603",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Deck Gun",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Dual Magelock",
      publication: "Kings, Nations, and Gods",
      page:        "244",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Dueling Pistols",
      publication: "Full Metal Friday 1/5/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Duelling Pistols",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Execrator Pistol",
      publication: "Kings, Nations, and Gods",
      page:        "95",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Explosive Cufflinks",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Farrow Pig Iron",
      publication: "No Quarter #58",
      page:        "21",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Flare Pistol",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Field Gun",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Fire Bomb",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade, Concussion",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade, Explosive",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade, Smoke",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade, Strangle Gas",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Gun Axe",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Hand Cannon",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Hand Cannon, Dual",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Harpoon Gun",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Injection Pistol",
      publication: "Full Metal Friday 1/2/2",
      page:        "2",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Javelin",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Knife, Throwing",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Light Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "95",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Linethrower",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Man-O-War Axe Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Man-O-War Shield Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "187",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Mini-Slugger",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Mortar",
      publication: "Kings, Nations, and Gods",
      page:        "187",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Ogrun Battle Cannon",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pen, Grenade",
      publication: "Kings, Nations, and Gods",
      page:        "244",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pen, Shot",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pistol",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pistol, Collapsible",
      publication: "Urban Adventure",
      page:        "13",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pistol, Holdout",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pistol, Magelock",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Pistol, Repeating",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Purifier",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Quad-Iron",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Radcliffe Carbine",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Radcliffe Firestorm",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Collapsible",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Long",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Heavy",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Magelock",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Military",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rifle, Repeating",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rockbreaker Spray",
      publication: "No Quarter #45",
      page:        "65",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rocket Tube",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rynnish Walking Stick",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Scattergun",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Skyhammer",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Sling",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Slug Gun",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Slugger",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Sword-Cannon, Repeating",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Sword-Cannon, Heavy",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Vislovski Carbine",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon"
    },
    // ##### Armory > Ammunition ##### \\
    {
      name:        "Arrows, Explosive",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition"
    },
    {
      name:        "Arrows, Grappling",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition"
    },
    {
      name:        "Blunderbuss Ammunition, Grapeshot",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Armory",
      subcategory: "Ammunition"
    },
    {
      name:        "Bolts, Explosive",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition"
    },
    {
      name:        "Bolts, Grappling",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition"
    },
    // ##### Armory > Ranged Weapon Accessory ##### \\
    {
      name:        "Bandolier, Ammo",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Bandolier, Grenadier's",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Bipod",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Firearm Ammunition",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Gun Brace",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Gunsmith's Kit",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Harpoon Gun Blasting Powder",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Holster, Wrist-Spring",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Quiver",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Scope, Pistol",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    {
      name:        "Scope, Rifle",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory"
    },
    // ##### Armory > Improvised Ranged Weapon ##### \\
    {
      name:        "Handful of Dirt",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    {
      name:        "Large Thrown Object",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    {
      name:        "Massive Thrown Object",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    {
      name:        "Small Thrown Object, Blunt",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    {
      name:        "Small Thrown Object, Sharp",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    {
      name:        "Tar Candle",
      publication: "Full Metal Friday 1/2/3",
      page:        "2",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon"
    },
    // ##### Armory > Magical Weapon ##### \\
    {
      name:        "Article 1185",
      publication: "No Quarter #47",
      page:        "59",
      category:    "Armory",
      subcategory: "Magical Weapon"
    },
    {
      name:        "Fang of Urcaen",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Magical Weapon"
    },
    {
      name:        "Greylords Rune Axe",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Magical Weapon"
    },
    {
      name:        "Imprecator",
      publication: "No Quarter #47",
      page:        "60",
      category:    "Armory",
      subcategory: "Magical Weapon"
    },
    // ##### Disease > Disease Type ##### \\
    {
      name:        "Bacterial",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type"
    },
    {
      name:        "Fungal",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type"
    },
    {
      name:        "Parasitic",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type"
    },
    {
      name:        "Toxic",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Type"
    },
    // ##### Disease > Disease Classification ##### \\
    {
      name:        "Fever",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification"
    },
    {
      name:        "Pox",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification"
    },
    {
      name:        "Miasma",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification"
    },
    // ##### Disease > Contraction Method ##### \\
    {
      name:        "Inhalation",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method"
    },
    {
      name:        "Cutaneous",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method"
    },
    {
      name:        "Ingestion",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method"
    },
    // ##### Disease > Symptom ##### \\
    {
      name:        "Ablepsy",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Acute Anger",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Aphasia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Boils",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Catalepsy",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Delirium",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Dyspnea",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Dystaxia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Epistaxis",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Gangrene",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Hallucinations",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Insomnia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Lesions",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Light Sensitivity",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Lockjaw",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Mania",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Melancholia",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Nausea and Vomiting",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Paresis",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Paroxysm",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Pockmarks",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    {
      name:        "Uveitis",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom"
    },
    // ##### Disease > Disease ##### \\
    {
      name:        "Bogrin Blight",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease"
    },
    {
      name:        "Black Tongue",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease"
    },
    {
      name:        "Bloody Sweat",
      publication: "Bitter Medicine",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease"
    },
    {
      name:        "Stone Sickness",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease"
    },
    {
      name:        "Mechanik's Dementia",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease"
    },
    {
      name:        "Mawg Rabies",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease"
    },
    // ##### Equipment > Clothing ##### \\
    {
      name:        "Boots, Mechanik's",
      publication: "Core Rules",
      page:        "273",
      category:    "Equipment",
      subcategory: "Clothing"
    },
    {
      name:        "Cloak, Weighted",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Clothing"
    },
    {
      name:        "Coat, Great",
      publication: "Core Rules",
      page:        "273",
      category:    "Equipment",
      subcategory: "Clothing"
    },
    {
      name:        "False Cloaks",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Equipment",
      subcategory: "Clothing"
    },
    {
      name:        "Reversible Clothing",
      publication: "No Quarter #59",
      page:        "68",
      category:    "Equipment",
      subcategory: "Clothing"
    },
    // ##### Equipment > Equipment ##### \\
    {
      name:        "'Jack Wrench",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Adventuring Scholar's Tools",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Alchemical Lab",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Alchemist's Apron",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Alchemist's Kit, Traveling",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "All-Weather Notebook",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Blessed Bolts",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Bottled Light",
      publication: "Full Metal Friday 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Clockwork Detonator",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Disguise Kit",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Double-Down Deck of Cards",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Eavesdropper",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Entrenching Spade",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "False Ammunition Cartridges",
      publication: "No Quarter #59",
      page:        "70",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Forgery Kit",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Gas Mask",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Googles",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Grave Marker",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Heat-Responsive Inks",
      publication: "No Quarter #59",
      page:        "70",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Man-O-War Ammo Bandolier",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Manacles",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Mechanik's Tool Kit",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Mechanik's Workshop",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Necromancer's Kit",
      publication: "Urban Adventure",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Pocket Watch",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Poison Ring",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Portable Steam Engine",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Reclaimant's Iron Mask",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Rivet Gun",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Rune Etching Kit",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Rune Shot Casting Kit",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Sabotage Munitions",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Spider Harness",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Spyglass",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Surgeon's Suite",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Surgical Kit",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Symbol of Faith",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "The Enkheiridion Cipher",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Thief's Tools",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Weatherometer",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    {
      name:        "Wrack",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment"
    },
    // ##### Equipment > Mount ##### \\
    {
      name:        "Bison",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Horse, Draft",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Horse, Riding",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Horse, War",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Riding Horse, Cardovar",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Warhorse, Karpathan Destrier",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Mount"
    },
    {
      name:        "Warhorse, Pozdyov",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Mount"
    },
    // ##### Equipment > Riding Equipment ##### \\
    {
      name:        "Barding, Light",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Riding Equipment"
    },
    {
      name:        "Barding, Medium",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment"
    },
    {
      name:        "Barding, Heavy",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment"
    },
    {
      name:        "Gas Mask, Equestrian",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment"
    },
    {
      name:        "Tack",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment"
    },
    // ##### Equipment > Food ##### \\
    {
      name:        "Dry Rations",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Military Rations",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Meal, Basic",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Meal, Quality",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Meal, Luxurious Feast",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Beer",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Wine",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Distilled Spirits",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Lodging, Basic",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Lodging, Standard",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    {
      name:        "Lodging, Exquisite",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food"
    },
    // ##### Geography > Nation ##### \\
    {
      name:        "Cryx",
      publication: "Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Cygnar",
      publication: "Core Rules",
      page:        "51",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Cygnar",
      publication: "Kings, Nations, and Gods",
      page:        "7",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Divided Llael",
      publication: "Core Rules",
      page:        "53",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Ios",
      publication: "Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Khador",
      publication: "Kings, Nations, and Gods",
      page:        "113",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Khadoran Empire",
      publication: "Core Rules",
      page:        "52",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Llael",
      publication: "Kings, Nations, and Gods",
      page:        "201",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Ord",
      publication: "Core Rules",
      page:        "55",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Ord",
      publication: "Kings, Nations, and Gods",
      page:        "251",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Protectorate of Menoth",
      publication: "Core Rules",
      page:        "57",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Protectorate of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "317",
      category:    "Geography",
      subcategory: "Nation"
    },
    {
      name:        "Rhul",
      publication: "Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Nation"
    },
    // ##### Geography > Culture ##### \\
    {
      name:        "Bog Trogs",
      publication: "No Quarter #58",
      page:        "64",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Bogrin",
      publication: "No Quarter #52",
      page:        "109",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Caspians",
      publication: "Kings, Nations, and Gods",
      page:        "39",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Gobbers",
      publication: "No Quarter #52",
      page:        "106",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Idrians",
      publication: "Kings, Nations, and Gods",
      page:        "343",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Khards",
      publication: "Kings, Nations, and Gods",
      page:        "142",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Kossites",
      publication: "Kings, Nations, and Gods",
      page:        "143",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Midlunders",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Morridanes",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Ogrun",
      publication: "No Quarter #59",
      page:        "79",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Ryn",
      publication: "Kings, Nations, and Gods",
      page:        "217",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Skirov",
      publication: "Kings, Nations, and Gods",
      page:        "143",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Sulese",
      publication: "Kings, Nations, and Gods",
      page:        "344",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Thurians (Cygnar)",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Thurians (Ord)",
      publication: "Kings, Nations, and Gods",
      page:        "276",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Tordorans",
      publication: "Kings, Nations, and Gods",
      page:        "276",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Trollkin",
      publication: "No Quarter #56",
      page:        "75",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Umbreans (Khador)",
      publication: "Kings, Nations, and Gods",
      page:        "144",
      category:    "Geography",
      subcategory: "Culture"
    },
    {
      name:        "Umbreans (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "218",
      category:    "Geography",
      subcategory: "Culture"
    },
    // ##### Geography > Region ##### \\
    {
      name:        "Almare (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "278",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Bloodsbane (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "65",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Borstoi (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Bournworth (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "66",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Caspia (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "47",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Caspia (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "45",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Cloutsdowns (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Cosetio (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "282",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Dorognia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "149",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Duwurkyn (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "151",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Eastern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "54",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Fennmar (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "71",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Feodoska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "152",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Gedorra (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "346",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Gorzytska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "153",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Hetha (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "285",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Icthosa (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "348",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Khadoran Territory (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "225",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Khadorstred (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "154",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Khardoska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Kos (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "159",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Mansgrave (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "51",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Murio (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "290",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Northern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Northforest (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Noveskyev (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Oxmeath (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Razokov (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "161",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Resistance Holdings (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Rimmocksdale (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "80",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Rustoknia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "162",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Sargetstea (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "163",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Shieldpoint (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "72",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Skirovnya (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "164",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Southern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Southpoint (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Sulonmarch (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "351",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Tamanskaia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "166",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Territory of the Northern Crusade (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "233",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Thornwood (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "67",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Thuria (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Tordoro (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Tverkatka (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "166",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Umbrey (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "168",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Vardenska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "170",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Varhdan (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "353",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Western Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Westinmarsh (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Westshore (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "79",
      category:    "Geography",
      subcategory: "Region"
    },
    {
      name:        "Wythmoor (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "295",
      category:    "Geography",
      subcategory: "Region"
    },
    // ##### Geography > City/Fortress ##### \\
    {
      name:        "Armandor",
      publication: "Kings, Nations, and Gods",
      page:        "280",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ancient Icthier",
      publication: "Kings, Nations, and Gods",
      page:        "349",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Bainsmarket",
      publication: "Kings, Nations, and Gods",
      page:        "57",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Berck",
      publication: "Kings, Nations, and Gods",
      page:        "282",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Boarsgate",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Carre Dova",
      publication: "Kings, Nations, and Gods",
      page:        "286",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Caspia, The City of Walls",
      publication: "Kings, Nations, and Gods",
      page:        "48",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ceryl",
      publication: "Kings, Nations, and Gods",
      page:        "77",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Cherov-On-Dron",
      publication: "Kings, Nations, and Gods",
      page:        "155",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Clockers Cove",
      publication: "Kings, Nations, and Gods",
      page:        "50",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Corbhen",
      publication: "Kings, Nations, and Gods",
      page:        "284",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Corvis, The City of Ghosts",
      publication: "Kings, Nations, and Gods",
      page:        "58",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Elsinberg",
      publication: "Kings, Nations, and Gods",
      page:        "229",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Fellig",
      publication: "Kings, Nations, and Gods",
      page:        "68",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Fharin",
      publication: "Kings, Nations, and Gods",
      page:        "55",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Five Fingers",
      publication: "Kings, Nations, and Gods",
      page:        "287",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Fort Brunzig",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Fort Falk",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Greywind Tower",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Hearthstone",
      publication: "Kings, Nations, and Gods",
      page:        "281",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Hellspass",
      publication: "Kings, Nations, and Gods",
      page:        "154",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Highgate",
      publication: "Kings, Nations, and Gods",
      page:        "73",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Imer",
      publication: "Kings, Nations, and Gods",
      page:        "347",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ironhead Station",
      publication: "Kings, Nations, and Gods",
      page:        "52",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Khardov",
      publication: "Kings, Nations, and Gods",
      page:        "158",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "King's Vine",
      publication: "Kings, Nations, and Gods",
      page:        "62",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Korsk",
      publication: "Kings, Nations, and Gods",
      page:        "155",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Laedry",
      publication: "Kings, Nations, and Gods",
      page:        "230",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Leryn",
      publication: "Kings, Nations, and Gods",
      page:        "235",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Mercir",
      publication: "Kings, Nations, and Gods",
      page:        "71",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Merin",
      publication: "Kings, Nations, and Gods",
      page:        "294",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Merywyn",
      publication: "Kings, Nations, and Gods",
      page:        "230",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Midfast",
      publication: "Kings, Nations, and Gods",
      page:        "290",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "New Larkholm",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "New Vroggen",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ohk",
      publication: "Kings, Nations, and Gods",
      page:        "160",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Orven",
      publication: "Kings, Nations, and Gods",
      page:        "80",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Point Bourne",
      publication: "Kings, Nations, and Gods",
      page:        "66",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Porsk",
      publication: "Kings, Nations, and Gods",
      page:        "164",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Port Vladovar",
      publication: "Kings, Nations, and Gods",
      page:        "148",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ramarck",
      publication: "Kings, Nations, and Gods",
      page:        "81",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Ravensgard",
      publication: "Kings, Nations, and Gods",
      page:        "169",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Rhydden",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Riversmet",
      publication: "Kings, Nations, and Gods",
      page:        "231",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Rorschik",
      publication: "Kings, Nations, and Gods",
      page:        "150",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Rynyr",
      publication: "Kings, Nations, and Gods",
      page:        "231",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Scarswall",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Skirov",
      publication: "Kings, Nations, and Gods",
      page:        "165",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Skrovenberg",
      publication: "Kings, Nations, and Gods",
      page:        "149",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Steelwater Flats",
      publication: "Kings, Nations, and Gods",
      page:        "52",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Sul",
      publication: "Kings, Nations, and Gods",
      page:        "352",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Tarna",
      publication: "Kings, Nations, and Gods",
      page:        "296",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Tverkutsk",
      publication: "Kings, Nations, and Gods",
      page:        "167",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Uldenfrost",
      publication: "Kings, Nations, and Gods",
      page:        "170",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Volningrad",
      publication: "Kings, Nations, and Gods",
      page:        "151",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    {
      name:        "Westwatch",
      publication: "Kings, Nations, and Gods",
      page:        "82",
      category:    "Geography",
      subcategory: "City/Fortress"
    },
    // ##### Individual ##### \\
    {
      name:        "Alma Barlow",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Andari Gratza, Tordoran Merchant",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Arius, Primarch",
      publication: "Kings, Nations, and Gods",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Arkadius, Dr.",
      publication: "No Quarter #51",
      page:        "27",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Arland Calster, High Magus",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Ayn Vanar, Empress",
      publication: "Kings, Nations, and Gods",
      page:        "124",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Baird Cathor II, King",
      publication: "Kings, Nations, and Gods",
      page:        "201",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Balukar Rageborn",
      publication: "No Quarter #55",
      page:        "88",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Bayton Rookwood",
      publication: "Bitter Medicine",
      page:        "4",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Bloody Barnabas",
      publication: "No Quarter #45",
      page:        "39",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Bolden Rebald, Scout General",
      publication: "Kings, Nations, and Gods",
      page:        "34",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Bors Gately, General",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Coleman Stryker, Cygnaran Warcaster",
      publication: "No Quarter #50",
      page:        "39",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Conor Roan, Guard Captain",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Dargus Mathern, General",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Deyar Glabryn, Archduke",
      publication: "Kings, Nations, and Gods",
      page:        "211",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Directrix, Iron Mother",
      publication: "No Quarter #48",
      page:        "35",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Drake MacBain, Warcaster",
      publication: "No Quarter #47",
      page:        "39",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Druce Halstead, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "34",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Evelin Turpin, Senior Commander",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Everblight, Dragon",
      publication: "No Quarter #53",
      page:        "43",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Feora, Priestess of the Flame",
      publication: "Kings, Nations, and Gods",
      page:        "336",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Fedor Rachlavsky, Obavnik",
      publication: "Kings, Nations, and Gods",
      page:        "174",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Fiona the Black",
      publication: "No Quarter #58",
      page:        "47",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Galt Langworth, General",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Gavyn Kyle",
      publication: "No Quarter #54",
      page:        "75",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Govan Trent, Navarch",
      publication: "Kings, Nations, and Gods",
      page:        "30",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Gregore Delryv IV, Duke",
      publication: "Kings, Nations, and Gods",
      page:        "221",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Gunnbjorn, Captain",
      publication: "No Quarter #43",
      page:        "53",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Gurvaldt Irusk, Supreme Kommandant",
      publication: "Kings, Nations, and Gods",
      page:        "132",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Harbinger of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "330",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Harlan Mosley, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Helt Langworth, Aurum Magnus",
      publication: "Kings, Nations, and Gods",
      page:        "299",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Henry Gateu, Dr.",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Ilena, the Beast of the North",
      publication: "No Quarter #58",
      page:        "88",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Izabella Mateu, Castellan",
      publication: "Kings, Nations, and Gods",
      page:        "279",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Jarok Shaw, Scrutator Sovereign",
      publication: "Kings, Nations, and Gods",
      page:        "350",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Jasek Donekev, Viscount",
      publication: "Kings, Nations, and Gods",
      page:        "136",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Jeris Gnarlstone",
      publication: "No Quarter #55",
      page:        "91",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Karloff the Relentless, Scrutator",
      publication: "No Quarter #53",
      page:        "75",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Kasparovik, Optifex",
      publication: "No Quarter #53",
      page:        "105",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Leto Raelthorne, King",
      publication: "Kings, Nations, and Gods",
      page:        "21",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Lorio Casini, Leader of the Long Shot Society",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Luan Bray, Thurian Woodsman",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Magda McCallahan, Pirate Captain",
      publication: "No Quarter #54",
      page:        "69",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Mhikol Horscze, Premier",
      publication: "Kings, Nations, and Gods",
      page:        "131",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Mikael Kreoss, Grand Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "337",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Morrg, Warlord",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "4",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Oleg Strakhov, Kommander",
      publication: "Kings, Nations, and Gods",
      page:        "137",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Olson Turpin, Warmaster General",
      publication: "Kings, Nations, and Gods",
      page:        "29",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Olyado Caetan, Castellan",
      publication: "Kings, Nations, and Gods",
      page:        "284",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Rosa Petry, Owner of Petry's Firearms and Supplies",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Ruskin Borga, Visgoth",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Quinlan Rathleagh, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Sebastian Nemo, General",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Servath Reznik, High Executioner",
      publication: "No Quarter #57",
      page:        "47",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Severius, Hierarch",
      publication: "Kings, Nations, and Gods",
      page:        "329",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Simonyev Blaustavya, Great Vizier",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Skarre Ravenmane",
      publication: "No Quarter #56",
      page:        "25",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Tara Florys, Long Shot Lieutenant",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Thagrosh",
      publication: "No Quarter #59",
      page:        "73",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Thalen Malvyss (Mage Hunter)",
      publication: "No Quarter #56",
      page:        "104",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Thane Nivin Roan, Ruler of Lhen",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Trenton Bouridor, Grand Paladin",
      publication: "Kings, Nations, and Gods",
      page:        "339",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Valoria Breno, Tordoran Landholder",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vasily Dmitrilosk, High Obavnik",
      publication: "Kings, Nations, and Gods",
      page:        "173",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vayne di Brascio, Amethyst Rose Gun Mage",
      publication: "No Quarter #52",
      page:        "103",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Victor Pendrake, Professor",
      publication: "Kings, Nations, and Gods",
      page:        "28",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vinter Raelthorne IV",
      publication: "Kings, Nations, and Gods",
      page:        "22",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vladislav Abrosim",
      publication: "No Quarter #44",
      page:        "63",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vladislav Abrosim",
      publication: "No Quarter #53",
      page:        "101",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Vyros Narr, Dawnlord",
      publication: "No Quarter #44",
      page:        "37",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Wurmwood, Tree of Fate",
      publication: "No Quarter #49",
      page:        "31",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Zevanna Agha, Old Witch of Khador",
      publication: "Kings, Nations, and Gods",
      page:        "114",
      category:    "Individual",
      subcategory: ""
    },
    {
      name:        "Zolor Kurang",
      publication: "No Quarter #57",
      page:        "86",
      category:    "Individual",
      subcategory: ""
    },
    // ##### Mechanika > Capacitor ##### \\
    {
      name:        "Alchemical Capacitor",
      publication: "Core Rules",
      page:        "282",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Ambient Accumulator",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Arcane Interval Generator",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Arcane Turbine",
      publication: "Core Rules",
      page:        "282",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Arcanodynamic Accumulator",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Clockwork Capacitor",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Parasitic Generator",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Runelock Capacitor",
      publication: "No Quarter #51",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    {
      name:        "Storm Chamber",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor"
    },
    // ##### Mechanika > Runeplate ##### \\
    {
      name:        "Accuracy",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Aegis",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Arcane Disruptor",
      publication: "No Quarter #51",
      page:        "34",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Arcane Force",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Arcane Warding",
      publication: "No Quarter #51",
      page:        "34",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Backfire",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Balefire",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Blast",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Blessed",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Bond Plate",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Bounding",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Cold",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Compensator",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Corruption",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Detonate",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Disbinder",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Electrocutioner",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Flame",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Fleet",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Fogbank",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Grievous Wounds",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Halo of Fire",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Headtaker",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Heightened Strength",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Incendiary",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Light",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Light Eater",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Lockout",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Magnetism",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Mechanikal Seizure",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Natation",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Obscuration",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Quicken",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Reciprocity",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Repulsor",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Silencer",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Spell Ward",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Stall",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Steady",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Vitriol",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    {
      name:        "Whiplash",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate"
    },
    // ##### Mechanika > Mechanikal Weapon ##### \\
    {
      name:        "Andrei's Pistol",
      publication: "No Quarter #53",
      page:        "107",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Charged Spear",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Dominance",
      publication: "Bitter Medicine",
      page:        "30",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Fettershot",
      publication: "No Quarter #47",
      page:        "59",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Final Word (Mechanika Hand Cannon)",
      publication: "Urban Adventure",
      page:        "93",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Northwind",
      publication: "No Quarter #47",
      page:        "61",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Reconciler",
      publication: "No Quarter #47",
      page:        "62",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Storm Glaive",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Trammel Shortarm",
      publication: "No Quarter #47",
      page:        "63",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Tuning Kit",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    {
      name:        "Tuning Staff",
      publication: "No Quarter #48",
      page:        "71",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon"
    },
    // ##### Mechanika > Mechanikal Armor ##### \\
    {
      name:        "Opifex Armor",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor"
    },
    {
      name:        "Warcaster Armor, light",
      publication: "Core Rules",
      page:        "289",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor"
    },
    {
      name:        "Warcaster Armor, medium",
      publication: "Core Rules",
      page:        "289",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor"
    },
    {
      name:        "Warcaster Armor, heavy",
      publication: "Core Rules",
      page:        "290",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor"
    },
    // ##### Mechanika > Ironhead Armor ##### \\
    {
      name:        "Ablative Armor",
      publication: "No Quarter #52",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Amphibious Construction",
      publication: "No Quarter #52",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Artillery Mount",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Cargo Crane",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Corrosive Shielding",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Ejection Rig",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Electrical Shielding",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Failsafes",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Fire Shiedling",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Force Amplifier",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Hardened Case",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Heavy Boiler",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Ironhead Armor",
      publication: "No Quarter #52",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Recoil Compensator",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Steam Venting",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Temperature Regulators",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    {
      name:        "Weight Compensators",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor"
    },
    // ##### Mechanika > Clockwork Vessel ##### \\
    {
      name:        "Clockwork Priest Vessel",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel"
    },
    // ##### Mechanika > Clockwork Vessel Upgrade ##### \\
    {
      name:        "Aperture Beam",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Arcane Field",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Circular Vision",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Displacement Field Drive",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Electrical Insulation",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Hardened",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased AGL",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased ARM",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased POI",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased PRW",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased SPD",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Increased STR",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Improved Stability",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    {
      name:        "Optical Array",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade"
    },
    // ##### Mechanika > Mechanikal Device ##### \\
    {
      name:        "Akinetic Javelin",
      publication: "No Quarter #50",
      page:        "48",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Arcantrik Scope",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Deprecator",
      publication: "No Quarter #50",
      page:        "49",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Farsight Googles",
      publication: "Core Rules",
      page:        "287",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Mechanikal Prosthetic, Arm",
      publication: "Core Rules",
      page:        "287",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Mechanikal Prosthetic, Eye",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Mechanikal Prosthetic, Hand",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Mechanikal Prosthetic, Leg",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Neutralizer",
      publication: "No Quarter #50",
      page:        "51",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    {
      name:        "Tempest Shield",
      publication: "No Quarter #50",
      page:        "52",
      category:    "Mechanika",
      subcategory: "Mechanikal Device"
    },
    // ##### Monsternomicon > Deathly Burdens ##### \\
    {
      name:        "Afraid",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Bane",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Barriers",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Bound",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Fragmented Mind",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Mad",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Obsession",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Semi-corporeal",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Sunlight Powerlessness",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    {
      name:        "Temporal Existence",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden"
    },
    // ##### Monsternomicon > Deathly Endowments ##### \\
    {
      name:        "Black Gifts",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Black Harvest",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Blind Fear",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Corpse Lord",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Corrosive Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Dark Influence",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Dark Resurrection",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Disruptor",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Dominator",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Dread Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Ectoplasmic Field",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Eldritch Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Fear Master",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Fear Monger",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Ghost in the Machine",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Grave Chill",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Grave Resilience",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Grave Summons",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Keening Howl",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Lamentations of the Grave",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Malignant Presence",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Phase",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Possession",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Power Drain",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Psychokinesis",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Regeneration",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Shroud of Death",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Silence",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Spectral Illusion",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Spectral Talons",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Speed of the Dead",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    {
      name:        "Unholy Genesis",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment"
    },
    // ##### Monsternomicon > Monster/Opponent ##### \\
    {
      name:        "Argus, Common",
      publication: "Monsternomicon",
      page:        "6",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Burrow-Mawg",
      publication: "Monsternomicon",
      page:        "8",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cataphract Beetle",
      publication: "Monsternomicon",
      page:        "10",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx",
      publication: "Monsternomicon",
      page:        "12",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx Drudge",
      publication: "Monsternomicon",
      page:        "16",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx Monstrosity",
      publication: "Monsternomicon",
      page:        "18",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Croak",
      publication: "Monsternomicon",
      page:        "20",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Crypt Spider",
      publication: "Monsternomicon",
      page:        "22",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Deathless",
      publication: "Monsternomicon",
      page:        "24",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Devil Rat",
      publication: "Monsternomicon",
      page:        "26",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dracodile",
      publication: "Monsternomicon",
      page:        "28",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dragonspawn",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dragonspawn Small",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dragonspawn Medium",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dragonspawn Large",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dread",
      publication: "Monsternomicon",
      page:        "34",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dregg",
      publication: "Monsternomicon",
      page:        "36",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Duelist Wrath",
      publication: "No Quarter #59",
      page:        "54",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Duskwolf",
      publication: "Monsternomicon",
      page:        "38",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Eldritch",
      publication: "Monsternomicon",
      page:        "40",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Entombed",
      publication: "No Quarter #57",
      page:        "84",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Excruciator",
      publication: "Monsternomicon",
      page:        "42",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Farrow Brigands",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "31",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gorax",
      publication: "Monsternomicon",
      page:        "44",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Grymkin, Gremlin",
      publication: "Monsternomicon",
      page:        "46",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Hollowed",
      publication: "No Quarter #51",
      page:        "56",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Hollowed",
      publication: "Monsternomicon",
      page:        "48",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Hornbeak Trask",
      publication: "Monsternomicon",
      page:        "50",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Iron Maiden",
      publication: "No Quarter #51",
      page:        "58",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Iron Maiden",
      publication: "Monsternomicon",
      page:        "52",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Lethean",
      publication: "Monsternomicon",
      page:        "54",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Pistol Wraith",
      publication: "Monsternomicon",
      page:        "56",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Raevhan Buffalo",
      publication: "Monsternomicon",
      page:        "58",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Razor Boars",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "28",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Razorbat",
      publication: "Monsternomicon",
      page:        "60",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Riven",
      publication: "Monsternomicon",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Scylla Flock",
      publication: "Monsternomicon",
      page:        "64",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Sepulchral Lurker",
      publication: "Monsternomicon",
      page:        "66",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Shade",
      publication: "Monsternomicon",
      page:        "68",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Shaft Wight",
      publication: "Monsternomicon",
      page:        "70",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Shaft Wight",
      publication: "No Quarter #51",
      page:        "60",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skigg",
      publication: "Monsternomicon",
      page:        "72",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Slaughterhousers",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Soul Stalker (Infernal)",
      publication: "Monsternomicon",
      page:        "74",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Specter",
      publication: "Monsternomicon",
      page:        "76",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tatzylwurm, Black",
      publication: "Monsternomicon",
      page:        "80",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Totem Hunter",
      publication: "Monsternomicon",
      page:        "82",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Troll Whelp",
      publication: "Monsternomicon",
      page:        "84",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Troll, Common",
      publication: "Monsternomicon",
      page:        "86",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Troll, Dire",
      publication: "Monsternomicon",
      page:        "88",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Vektiss",
      publication: "Monsternomicon",
      page:        "90",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent"
    },
    // ##### Monsternomicon > Spawn Gifts ##### \\
    {
      name:        "Agile",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Ash and Embers",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Barbed Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Blackscale",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Blight Aura",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Blood Thirst",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Burning Acid",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Camouflage Coloration",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Carapace",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Climber",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Club Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Corrosive Blood",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Deathdust",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Fleet",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Hellshroud",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Impervious Flesh",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Long Neck",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Lurker",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Muscular",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Nimble",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Pathfinder",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Ravenous",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Regeneration",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Ripping Jaws",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Robust",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Roiling Death",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Ruinbringer",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Searing Aura",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Seether",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Serpentine",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Snacking",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Spines",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Talons",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Tusks",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Venomous",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    {
      name:        "Wyrmfire",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift"
    },
    // ##### Monsternomicon > Template ##### \\
    {
      name:        "Adapted (Environment)",
      publication: "Monsternomicon",
      page:        "92",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Alpha",
      publication: "Monsternomicon",
      page:        "92",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Blighted",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Cephalyx Monstrosity Subduer",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Cephalyx Monstrosity Warden",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Cephalyx Monstrosity Wrecker",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Chieftain",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Croak Conjoined Twin",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Devil Rat Matron",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Dregg Pain Monger",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Dregg Raid Master",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Duskwolf Male",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Hunter",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Juvenile",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Large Specimen",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Large Specimen",
      publication: "No Quarter #51",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Lone Wolf",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Man-eater",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Pack Hunter",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Pestilent Hollowed",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Pestilent Hollowed",
      publication: "No Quarter #51",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Pistol Wraith Spellslinger",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Predator",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Predator",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Protector",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Razorbat King",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Resilient",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Runt",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Skittish",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Spector, Epic",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Specter, Veteran",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Starving",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Stealthy",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Swarm",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Swift",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Swift",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Trained",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Vektiss Queen",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Wild Iron Maiden",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    {
      name:        "Wild Iron Maiden",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template"
    },
    // ##### Monster > Monster/Opponent ##### \\
    {
      name:        "Alpha Burrow-Mawg",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Argus",
      publication: "No Quarter #47",
      page:        "52",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Black Ogrun Boarder",
      publication: "Full Metal Friday 1/1/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Blighted Nyss Archer",
      publication: "Core Rules Bestiary Expanded",
      page:        "2",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Blighted Nyss Sorcerer",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Blighted Nyss Strider",
      publication: "Core Rules Bestiary Expanded",
      page:        "2",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Blighted Nyss Swordsman",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bloat Thrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "4",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bog Trog Ambusher",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bog Trog Angler",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        'Bog Trog "Big Fish"',
      publication: "No Quarter #43",
      page:        "45",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bog Trog Mist Speaker",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bowden's Guards",
      publication: "No Quarter #44",
      page:        "68",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Brute Thrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Burrow-Mawg",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cataphract Beetle Drone",
      publication: "No Quarter #44",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cataphract Beetle Soldier",
      publication: "No Quarter #44",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx Drudge",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx Mind Slaver",
      publication: "Core Rules Bestiary Expanded",
      page:        "5",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Cephalyx Overlord",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Crucible Guards (Duelist/Man-at-Arms)",
      publication: "Fools Rush In",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Crypt Spider",
      publication: "No Quarter #43",
      page:        "46",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Crypt Spider",
      publication: "No Quarter #57",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Deck Hands",
      publication: "Fools Rush In",
      page:        "17",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Devil Rat Matron",
      publication: "No Quarter #46",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Devil Rat Swarm",
      publication: "No Quarter #46",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dire Troll",
      publication: "No Quarter #47",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dread Tomb Guard",
      publication: "Full Metal Friday 1/3/4",
      page:        "4",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dregg Pain Monger",
      publication: "Core Rules",
      page:        "342",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dregg Raid Master",
      publication: "Core Rules",
      page:        "342",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Dregg Scavenger",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Duskwolf Female",
      publication: "No Quarter #44",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Duskwolf Male",
      publication: "No Quarter #44",
      page:        "59",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Elimination Servitor",
      publication: "No Quarter #53",
      page:        "105",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Farrow Brigand",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Farrow Shaman",
      publication: "Core Rules",
      page:        "344",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Farrow Slaughterhouser",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Farrow Warlord",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gatorman Bokor",
      publication: "No Quarter #44",
      page:        "61",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gatorman Chieftain",
      publication: "No Quarter #44",
      page:        "61",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gatorman Warrior",
      publication: "No Quarter #44",
      page:        "60",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gorax",
      publication: "No Quarter #47",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Gravedigger Thugs",
      publication: "Urban Adventure",
      page:        "54",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Guards of Fort Veknost",
      publication: "No Quarter #57",
      page:        "101",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "House Kabalis Commander",
      publication: "No Quarter #54",
      page:        "109",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "House Kabalis Guard",
      publication: "No Quarter #54",
      page:        "109",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "House Kabalis Mercenary",
      publication: "No Quarter #54",
      page:        "108",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Arcanist",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Duelist",
      publication: "Full Metal Friday 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Thief",
      publication: "Core Rules",
      page:        "344",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Thief",
      publication: "Full Metal Friday 1/4/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Thug",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Thug",
      publication: "Full Metal Friday 1/4/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Watchman 1",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Human Watchman 2",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Machine Wrath",
      publication: "Core Rules Bestiary Expanded",
      page:        "7",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Mechanithrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "8",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Ogrun Bodyguard",
      publication: "Core Rules Bestiary Expanded",
      page:        "9",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Ogrun Marauder",
      publication: "Core Rules Bestiary Expanded",
      page:        "9",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Paulson Street Rover Gangsters",
      publication: "Urban Adventure",
      page:        "82",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Pistol Wrath",
      publication: "No Quarter #43",
      page:        "50",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Radiz Warrior",
      publication: "Path of Devastation Season 2",
      page:        "26",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Raevhan Buffalo",
      publication: "No Quarter #46",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Razorbat King",
      publication: "No Quarter #46",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Razorbat Swarm",
      publication: "No Quarter #46",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Risen Thrall",
      publication: "Core Rules",
      page:        "346",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Risen Thrall",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Riven",
      publication: "No Quarter #45",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Robbers",
      publication: "No Quarter #53",
      page:        "103",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Satyxis Blood Witch",
      publication: "Core Rules Bestiary Expanded",
      page:        "11",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Satyxis Raider",
      publication: "Full Metal Friday 1/1/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Satyxis Raider",
      publication: "Core Rules Bestiary Expanded",
      page:        "10",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Satyxis Raider Captain",
      publication: "Core Rules Bestiary Expanded",
      page:        "10",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Sewer Gatorman Brood Mother",
      publication: "Urban Adventure",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Sewer Gatorman Nestling",
      publication: "Urban Adventure",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Sewer Gatorman Warrior",
      publication: "Urban Adventure",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Shade",
      publication: "No Quarter #45",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skigg",
      publication: "Urban Adventure",
      page:        "63",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skigg Alpha",
      publication: "Urban Adventure",
      page:        "63",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skorne Mortitheurge",
      publication: "Core Rules Bestiary Expanded",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skorne Praetorian",
      publication: "Core Rules Bestiary Expanded",
      page:        "12",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skorne Tyrant",
      publication: "Core Rules Bestiary Expanded",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Skorne Venator",
      publication: "Core Rules Bestiary Expanded",
      page:        "12",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Soulhunter",
      publication: "Core Rules Bestiary Expanded",
      page:        "14",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Specter",
      publication: "No Quarter #45",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tarn Thrullgs",
      publication: "No Quarter #55",
      page:        "105",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Thamarite Guard",
      publication: "Urban Adventure",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Thamarite Acolyte",
      publication: "Urban Adventure",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tharn Ravager",
      publication: "Core Rules Bestiary Expanded",
      page:        "15",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tharn Ravager Chieftain",
      publication: "Core Rules Bestiary Expanded",
      page:        "16",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tharn Witch",
      publication: "Core Rules Bestiary Expanded",
      page:        "16",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Thrall Guard",
      publication: "No Quarter #56",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Thrall Warrior",
      publication: "Core Rules",
      page:        "346",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Thrullg Warrior",
      publication: "Core Rules",
      page:        "347",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Totem Hunter",
      publication: "Core Rules Bestiary Expanded",
      page:        "17",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tower Ambusher",
      publication: "No Quarter #55",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tower Guard",
      publication: "No Quarter #55",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Tower Guard",
      publication: "No Quarter #56",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Troll",
      publication: "No Quarter #47",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Troll Whelp",
      publication: "No Quarter #47",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Trollkin Champion",
      publication: "Core Rules Bestiary Expanded",
      page:        "19",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Trollkin Fell Caller",
      publication: "Core Rules Bestiary Expanded",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Trollkin Warrior",
      publication: "Core Rules Bestiary Expanded",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Twin Bridge Blade Knifer",
      publication: "Urban Adventure",
      page:        "88",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Unkillable",
      publication: "No Quarter #56",
      page:        "101",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Winter Argus",
      publication: "No Quarter #47",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Wyrmwall Bruiser",
      publication: "Bitter Medicine",
      page:        "49",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Wyrmwall Rider",
      publication: "Bitter Medicine",
      page:        "50",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Wyrmwall Veteran",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    // ##### Monster > Solo Monster/Opponent ##### \\
    {
      name:        "Abrosim, the Man",
      publication: "No Quarter #58",
      page:        "107",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Abrosim, the Monster",
      publication: "No Quarter #58",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Antone Pytorevich, Rifleman",
      publication: "No Quarter #57",
      page:        "95",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Bairn Cammol (Skilled Human Duelist)",
      publication: "Urban Adventure",
      page:        "83",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Balukar Rageborn",
      publication: "No Quarter #55",
      page:        "90",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Bayton Rookwood",
      publication: "Bitter Medicine",
      page:        "45",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Bevoul",
      publication: "Path of Devastation Season 2",
      page:        "26",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Bowden Haightly (Posessed Talon Warjack)",
      publication: "No Quarter #44",
      page:        "70",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Brak Seabreaker (Mighty Ogrun Warrior)",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Brun Whiddle",
      publication: "Bitter Medicine",
      page:        "47",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Captain Meara Brinebight",
      publication: "Full Metal Friday 1/1/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Darvon Shanke",
      publication: "Bitter Medicine",
      page:        "46",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Davon Barlett, Man-at-Arms",
      publication: "No Quarter #57",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Denys Manet",
      publication: "Full Metal Friday 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Errigan (Specter)",
      publication: "No Quarter #47",
      page:        "61",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Fynne di Vinianni",
      publication: "Full Metal Friday 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Gallo Morado, the Crimson Man",
      publication: "No Quarter #55",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Gallo Morado, the Crimson Thrall",
      publication: "No Quarter #58",
      page:        "103",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Garrow, Dead",
      publication: "No Quarter #58",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Garrow, Warcaster",
      publication: "No Quarter #57",
      page:        "94",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Gavriel di Maro (Veteran Human Cutthroat/Investigator)",
      publication: "Urban Adventure",
      page:        "61",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Gerrock Scarmaker, Ranger",
      publication: "No Quarter #57",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Grot (Skilled Gobber Cutthroat/Field Mechanik)",
      publication: "Urban Adventure",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Ilena, Beast of the North",
      publication: "No Quarter #58",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Jeris Gnarlstone",
      publication: "No Quarter #55",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Jig (Prospector Laborjack)",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Karloff the Relentless, Scrutator",
      publication: "No Quarter #53",
      page:        "77",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Knor",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "29",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Kroll Berok (Mighty Ogrun Pugilist)",
      publication: "Urban Adventure",
      page:        "83",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Loyalist Guards",
      publication: "No Quarter #58",
      page:        "106",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        'Luka "Left Fist" Istori',
      publication: "Full Metal Friday 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Magda McCallahan (Pirate Captain)",
      publication: "No Quarter #54",
      page:        "71",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Makar Iokav",
      publication: "No Quarter #54",
      page:        "110",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Makar Iokav, Wraith",
      publication: "No Quarter #58",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Martinho Cardozo",
      publication: "Path of Devastation Season 2",
      page:        "27",
      category:    "Monster",
      subcategory: "Monster/Opponent"
    },
    {
      name:        "Mirek Orlov",
      publication: "Full Metal Friday 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Morna Petrork",
      publication: "Full Metal Friday 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Morrg, Warlord",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "27",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Myrus Rathborne",
      publication: "No Quarter #59",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Myrus Rathborne (Gifted Human Fire Sorcerer)",
      publication: "Urban Adventure",
      page:        "55",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Orran Vaine",
      publication: "No Quarter #59",
      page:        "100",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Orran Vaine (Skilled Human Rifleman)",
      publication: "Urban Adventure",
      page:        "54",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Pavor Rostifenko",
      publication: "No Quarter #58",
      page:        "102",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Rina Zavor, Bounty Hunter",
      publication: "No Quarter #57",
      page:        "95",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Sivto the Vild, Necromancer (Human Will Weaver)",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Stevan Igoris",
      publication: "No Quarter #54",
      page:        "102",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Tantock Meryl (Gifted Human Spy/Thamarite Advocate)",
      publication: "Urban Adventure",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Thalen Malvyss (Mage Hunter)",
      publication: "No Quarter #56",
      page:        "107",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Tobin Marconi",
      publication: "No Quarter #56",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Valeria Karpov, Steelsoul Protector",
      publication: "No Quarter #53",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Vayne di Brascio (Amethyst Rose Gun Mage)",
      publication: "No Quarter #52",
      page:        "105",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Vessos Ironjaw",
      publication: "No Quarter #59",
      page:        "100",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Vessos Ironjaw (Mighty Trollkin Soldier)",
      publication: "Urban Adventure",
      page:        "55",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Victor di Cavour (Specter)",
      publication: "Full Metal Friday 1/2/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Willem 'Three-Fingers' Abershawe",
      publication: "Bitter Medicine",
      page:        "48",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Zabrak Stoneshield (Mighty Trollkin Duelist)",
      publication: "Urban Adventure",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    {
      name:        "Zolor Kurang",
      publication: "No Quarter #57",
      page:        "89",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent"
    },
    // ##### Organization > Criminal Enterprise ##### \\
    {
      name:        "Bratyas",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Caspian Cortex Smugglers",
      publication: "Urban Adventure",
      page:        "76",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Five Fingers Transporters",
      publication: "Urban Adventure",
      page:        "77",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Grand Stevedore Union",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Korsk Stanzynat Mustyn",
      publication: "Urban Adventure",
      page:        "78",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Order of the Rat",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Red Kings",
      publication: "Full Metal Friday 1/4/3",
      page:        "1",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Riverrose Syndicate",
      publication: "Urban Adventure",
      page:        "40",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "The Black Triangle",
      publication: "No Quarter #59",
      page:        "97",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Wake Isles Syndicate",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    {
      name:        "Wyrmwall Riders",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Organization",
      subcategory: "Criminal Enterprise"
    },
    // ##### Organization > Military Organization ##### \\
    {
      name:        "Crucible Guard",
      publication: "Kings, Nations, and Gods",
      page:        "300",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Emerald Watch",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Fingers Watch",
      publication: "Urban Adventure",
      page:        "38",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Jenner's Arsenal",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Knightly Order of Precursors",
      publication: "No Quarter #55",
      page:        "60",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Knights Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "337",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Knights of the Highgate Vigil",
      publication: "Kings, Nations, and Gods",
      page:        "72",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Llaelese Resistance",
      publication: "Core Rules",
      page:        "54",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Llaelese Resistance",
      publication: "Kings, Nations, and Gods",
      page:        "221",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Loyal Order of the Amethyst Rose",
      publication: "Kings, Nations, and Gods",
      page:        "223",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Northern Crusade",
      publication: "Kings, Nations, and Gods",
      page:        "334",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Order of the Fist",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Paladins of the Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Protectors of the Temple",
      publication: "No Quarter #52",
      page:        "20",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Red Shields",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Royal High Guard",
      publication: "Kings, Nations, and Gods",
      page:        "213",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Steelheads",
      publication: "No Quarter #47",
      page:        "26",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Sons of Thuria",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Storm Divison",
      publication: "Kings, Nations, and Gods",
      page:        "32",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Temple Flameguard",
      publication: "Kings, Nations, and Gods",
      page:        "334",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "The United Kriels",
      publication: "No Quarter #56",
      page:        "76",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    {
      name:        "Unorthodox Engagement Teams",
      publication: "Kings, Nations, and Gods",
      page:        "37",
      category:    "Organization",
      subcategory: "Military Organization"
    },
    // ##### Organization > Enterprise ##### \\
    {
      name:        "Blaustavya Shipping & Rail",
      publication: "Core Rules",
      page:        "74",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Blaustavya Shipping & Rail",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "House Mateu",
      publication: "Core Rules",
      page:        "57",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "House Mateu",
      publication: "Kings, Nations, and Gods",
      page:        "296",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Kayazy",
      publication: "Kings, Nations, and Gods",
      page:        "127",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Mercarian League",
      publication: "Core Rules",
      page:        "75",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Mercarian League",
      publication: "Kings, Nations, and Gods",
      page:        "85",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Steam & Iron Workers Union",
      publication: "Kings, Nations, and Gods",
      page:        "86",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Steelwater Surveying",
      publication: "No Quarter #46",
      page:        "63",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    {
      name:        "Wexmere Lumber and Copper Company",
      publication: "No Quarter #46",
      page:        "64",
      category:    "Organization",
      subcategory: "Enterprise"
    },
    // ##### Organization > Arcane Order ##### \\
    {
      name:        "Fraternal Order of Wizardry",
      publication: "Core Rules",
      page:        "83",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Fraternal Order of Wizardry",
      publication: "Kings, Nations, and Gods",
      page:        "83",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Greylords Covenant",
      publication: "Kings, Nations, and Gods",
      page:        "137",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Greylords Covenant",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Order of the Golden Crucible",
      publication: "Core Rules",
      page:        "84",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Order of the Golden Crucible",
      publication: "Kings, Nations, and Gods",
      page:        "297",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Prikaz Chancellery",
      publication: "Kings, Nations, and Gods",
      page:        "174",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    {
      name:        "Strangelight Workshop",
      publication: "Kings, Nations, and Gods",
      page:        "78",
      category:    "Organization",
      subcategory: "Arcane Order"
    },
    // ##### Organization > Religious Group ##### \\
    {
      name:        "Blackclads of the Circle Orboros",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Chapel of the Dark Twin",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Church of the Great Fathers",
      publication: "Core Rules",
      page:        "103",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Church of Morrow",
      publication: "Core Rules",
      page:        "89",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Church of Morrow, Khador",
      publication: "Kings, Nations, and Gods",
      page:        "145",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Council",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cult of Cyriss",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cult of Cyriss (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cult of the Despoiler",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cult of Toruk (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cult of the Devourer (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Cults of the Devourer Wurm",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Dhunian Faiths",
      publication: "Core Rules",
      page:        "101",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Fane of Nyssor",
      publication: "Core Rules",
      page:        "103",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Fane of Scyrah",
      publication: "Core Rules",
      page:        "104",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Fingers Buccaneers",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Gambler's Sons (and Daughters)",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Knights of the Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Menite Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Menite Temple",
      publication: "Core Rules",
      page:        "98",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Scrutators of the Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Seekers",
      publication: "Core Rules",
      page:        "61",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Shroud",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "Thamarite Cults",
      publication: "Core Rules",
      page:        "95",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    {
      name:        "The Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Organization",
      subcategory: "Religious Group"
    },
    // ##### Organization > Dynasty ##### \\
    {
      name:        "Cathors of Ord",
      publication: "Core Rules",
      page:        "46",
      category:    "Organization",
      subcategory: "Dynasty"
    },
    {
      name:        "Hierarchs of the Protectorate of Menoth",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty"
    },
    {
      name:        "Martyns of Llael",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty"
    },
    {
      name:        "Raelthornes of Cygnar",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty"
    },
    {
      name:        "Vanars of Khador",
      publication: "Core Rules",
      page:        "46",
      category:    "Organization",
      subcategory: "Dynasty"
    },
    // ##### Orgoth Relic > Boon ##### \\
    {
      name:        "Black Fire",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Black Tongue",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Dark Sight",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Deathdealer",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Impervious",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Long Lived",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Phantom Shift",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Spell Reach",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Spell Ward",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Stormweaver",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Thirsty Blade",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    {
      name:        "Unwavering Commander",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Boon"
    },
    // ##### Orgoth Relic > Curse ##### \\
    {
      name:        "Air of Death",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Appetite",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Arcane Obstruction",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Blindness",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Blood Hungry",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Doom",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Haunted",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Homeward Bound",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Misfortune",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Night Walker",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Precious",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    {
      name:        "Virality Leech",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse"
    },
    // ##### Orgoth Relic > Relic ##### \\
    {
      name:        "Golthana's Masthead",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Relic"
    },
    // ##### Skill > Military Skill ##### \\
    {
      name:        "Archery",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Crossbow",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Great Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Great Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Hand Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Hand Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Heavy Artillery",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Lance",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Light Artillery",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Pistol",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Rifle",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Rifle",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Thrown Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Thrown Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Unarmed Combat",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    {
      name:        "Unarmed Combat",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill"
    },
    // ##### Skill > Occupational Skill ##### \\
    {
      name:        "Alchemy",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Alchemy",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Animal Handling",
      publication: "Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Animal Handling",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Bribery",
      publication: "Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Climbing",
      publication: "Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Climbing",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Command",
      publication: "Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Command",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Craft",
      publication: "Core Rules",
      page:        "176",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Cryptography",
      publication: "Core Rules",
      page:        "176",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Cryptography",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Deception",
      publication: "Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Deception",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Detection",
      publication: "Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Detection",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Disguise",
      publication: "Core Rules",
      page:        "178",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Driving",
      publication: "Core Rules",
      page:        "179",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Escape Artist",
      publication: "Core Rules",
      page:        "179",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Etiquette",
      publication: "Core Rules",
      page:        "180",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Fell Calling",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Forensic Science",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Forgery",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Gambling",
      publication: "Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Interrogation",
      publication: "Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Interrogation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Intimidation",
      publication: "Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Intimidation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Investigation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Jumping",
      publication: "Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Law",
      publication: "Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Lock Picking",
      publication: "Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Lore",
      publication: "Core Rules",
      page:        "185",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Lore",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Mechanikal Engineering",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Medicine",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Medicine",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Navigation",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Navigation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Negotiation",
      publication: "Core Rules",
      page:        "187",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Oratory",
      publication: "Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Oratory",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Pickpocket",
      publication: "Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Research",
      publication: "Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Riding",
      publication: "Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Rope Use",
      publication: "Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Sailing",
      publication: "Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Seduction",
      publication: "Core Rules",
      page:        "192",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Sneak",
      publication: "Core Rules",
      page:        "193",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Sneak",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Stormsmithing",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Streetwise",
      publication: "Core Rules",
      page:        "193",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Survival",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Survival",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Swimming",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Swimming",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Thrall Crafting",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Tracking",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    {
      name:        "Tracking",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill"
    },
    // ##### Skill > Duelling Maneuver ##### \\
    {
      name:        "Deflecting Strike",
      publication: "Full Metal Friday 1/5/3",
      page:        "1",
      category:    "Skill",
      subcategory: "Duelling Maneuver"
    },
    {
      name:        "Feint",
      publication: "Full Metal Friday 1/5/3",
      page:        "1",
      category:    "Skill",
      subcategory: "Duelling Maneuver"
    },
    {
      name:        "Hidden Guard",
      publication: "Full Metal Friday 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Duelling Maneuver"
    },
    {
      name:        "Lashing Strike",
      publication: "Full Metal Friday 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Duelling Maneuver"
    },
    {
      name:        "Turning Riposte",
      publication: "Full Metal Friday 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Duelling Maneuver"
    },
    // ##### Skill > Trick Riding ##### //
    {
      name:        "Capriole",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    {
      name:        "Fast Remount",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    {
      name:        "Leaping Dismount",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    {
      name:        "Saddle Cover",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    {
      name:        "Steeplechase",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    {
      name:        "Stirrup Stand",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding"
    },
    // ##### Spell ##### \\
    {
      name:        "Admonition",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Admonition",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Affliction",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Annihilation",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Blast",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Bolt",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Bolt",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Bolt",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Bonds",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Strike",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcane Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Arcantrik Bolt",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ashen Cloud",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ashen Veil",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ashes to Ashes",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Aura of Protection",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Awareness",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ayisla's Rebuke",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Backlash",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bad Blood",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Banishing Ward",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Banishing Ward",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Barrier of Flames",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Battering Ram",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Battering Ram",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Batten Down the Hatches",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Battle Rage",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Black Out",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blade of Radiance",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blaze of Glory",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blazing Effigy",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bleed",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bleed",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blessing of Health",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blessing of Morrow",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blessings of War",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blight Blast",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blizzard",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Feast",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Rain",
      publication: "Core Rules Bestiary Expanded",
      page:        "11",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Accurate Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Bleeder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Blood Burst",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Brain Damage",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Brutal Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Dispel",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Grievous Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Hobbler",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Invigoration",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blood Magic: Weakness",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blow the Man Down",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Blur",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Battle Frost",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bone Shaker",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Boundless Charge",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Boundless Charge",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Broadside",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bullet Dodger",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Bullet Dodger",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Buoyancy",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Celerity",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Celerity",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Chain Lightning",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Chasten",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Chiller",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cleansing Fire",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cloak of Fear",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cloak of Fear",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cloak of Fear",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cloak of Fear",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Cold Blooded",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Convection",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Crevasse",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Crusader's Call",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Curse of Shadows",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Dark Fire",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Dark Persuader",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Dark Water",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Daylight",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Deadeye",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Deadweight",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Death Field",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Deceleration",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Deceleration",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Deep Freeze",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Devil's Tongue",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Devil's Tongue",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Devil's Tongue",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Disruptor",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Dissolution Bolt",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Dominate Undead",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Domination",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Earthquake",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Earth's Cradle",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Earthsplitter",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Electrical Blast",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Electrical Charge",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Electrify",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Electrodynamics",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Eliminator",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Entangle",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Entropic Force",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Eye of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Eyes of Truth",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Exorcism",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Explosivo",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Extinguisher",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fail Safe",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fair Winds",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fire for Effect",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fire Group",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fire Starter",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Flames of Wrath",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Flare",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Flesh Eater",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fog of War",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fog of War",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Force Field",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Force Hammer",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Force of Faith",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fortify",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fortune",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Foxhole",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Freezing Grip",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Freezing Mist",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Frozen Ground",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Frostbite",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Fuel the Flames",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Full Throttle",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Gallows",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ghost Shroud",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Grave Whispers",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Grind",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ground Zero",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Guided Blade",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Guided Blade",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Guided Fire",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hallowed Avenger",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hand of Fate",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hand of Fate",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Heal",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Heightened Reflexes",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hellfire",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hex Blast",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hex Blast",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hex Blast",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hex Blast",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hex Hammer",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hoarfrost",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Holy Ward",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hot Shot",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hot Shot",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Howling FLames",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hymn of Battle",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hymn of Passage",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hymn of Shielding",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Hyper Awareness",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ice Bolt",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ice Shield",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Icy Grip",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ignite",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Immolation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Infernal Machine",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Inferno",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Influence",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Influence",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Influence",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Inhospitable Ground",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Inhospitable Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Instigate",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Inviolable Resolve",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Iron Aggression",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Iron Flesh",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Jackhammer",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Jump Start",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Lamentation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Lamentation",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Light in the Darkness",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Light of Nyrro",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Lightning Shroud",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Lightning Tendrils",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Locomotion",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Magnetic Hold",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mark of Lyliss",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Marked for Death",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mindblow",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mindlock",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mindlock",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mirage",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mist Shroud",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Mockery of Life",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Molten Metal",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Obliteration",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Occultation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Occultation",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Occultation",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Occultation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Overmind",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Overmind",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Parasite",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Perdition",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Phantasm",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Phantasm",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Phantasm",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Phantom Hunter",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Polarity Shield",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Positive Charge",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Powder Keg",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Powder Keg",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Power Booster",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Prayer for Guidance",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Protection from Cold",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Protection from Corrosion",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Protection from Electricity",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Protection from Fire",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Protector's Mark",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Prowess of Lurynsar",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Psi Blast",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Psi Blast",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Psychophage",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Purification",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Quagmire",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Quickened",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Raging Winds",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Ravager",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Razor Wall",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Razor Wind",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Realignment",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Reconstruction",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Redline",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Refuge",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Return Fire",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rift",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rift",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Righteous Flames",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rime",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rock Hammer",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rock Wall",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Accuracy",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Accuracy",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Black Penny",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Brutal",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Brutal",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Detonator",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Disruption",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Earth Shaker",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Electro Leap",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune SHot: Fire Beacon",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Freeze Fire",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Heart Stopper",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Iron Bolt",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Iron Rot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Molten Shot",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Molten Shot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Momentum",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Phantom Seeker",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Piercer",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Shadow Fire",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Shadow Fire",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Silencer",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Silencer",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Spell Cracker",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Spontaneous Combustion",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Spontaneous Combustion",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Thunderbolt",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Thunderbolt",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Trick Shot",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Rune Shot: Trick Shot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Sanguine Blessing",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Sea Legs",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Sea of Fire",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Shatter Storm",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Shield of Faith",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Shock Wave",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Shock Wave",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Short Out",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Shrapnel Swarm",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Snipe",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Solid Ground",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Solovin's Boon",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Soul Mark",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Star-Crossed",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Star Crossed",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Star Fire",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Staying Winter's Hand",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Stone Spray",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Stone Stance",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Stone Strength",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Storm Tossed",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Stranglehold",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Stygian Abyss",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Sunburst",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Superiority",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Synergy",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Synergy",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Telekinesis",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Telekinesis",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Telgesh Mark",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Temper Metal",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Tempest",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Tide of Steel",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Tornado",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Total Domination",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Total Spectrum",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Transference",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Triage",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Triage",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "True Path",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "True Sight",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "True Sight",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Twister",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Unstoppable Force",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Vision",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Voltaic Lock",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Wall of Fire",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Watcher",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Watcher",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "White Out",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Will Breaker",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Wind Blast",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Wind Ravager",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Wind Strike",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Wings of Air",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Winter Storm",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    {
      name:        "Zephyr",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: ""
    },
    // ##### Steamjack > Steamjack/Vector ##### \\
    {
      name:        "Angler Laborjack",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Artificer Laborjack",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Avenger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Berserker Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "192",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Buccaneer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Castigator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Centurion Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Charger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Crusader Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Cyclone Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "108",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Decimator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "196",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Defender Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Demolisher Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "194",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Dervish Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Destroyer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Devastator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Devout Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Diffuser Vector",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Firefly Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Freebooter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Galvanizer Vector",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Ghordson Avalancher Warjack",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Ghordson Driller Warjack",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Grenadier Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Guardian Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Hammersmith Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Hunter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Ironclad Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Juggernaut Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Kodiak Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Kolstot Steamjack",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Laika Steamjack",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Lancer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Marauder Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Mariner Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Miner Laborjack",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Minuteman Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Mitigator Vector",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Prospector Laborjack",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Reckoner Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Redeemer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Repenter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Revenger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Riveter Laborjack",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Sanctifier Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Scrappler Laborjack",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Seafarer Laborjack",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Sentinel Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Spriggan Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "194",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Stormclad Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Templar Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Toro Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Vanguard Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "249",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Vanquisher Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Vigilant Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Welder Laborjack",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Whaler Laborjack",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    {
      name:        "Wroughthammer Rockram Warjack",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector"
    },
    // ##### Steamjack > Chassis ##### \\
    {
      name:        "Artificer Heavy Laborjack Chassis",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Berserker Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Bulldog Light Laborjack Chassis",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Centurion Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Charger Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Crusader Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Devastator Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "192",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Devout Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Docker Heavy Laborjack Chassis",
      publication: "Core Rules",
      page:        "301",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Docker Heavy Laborjack Chassis",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Forager Light Laborjack Chassis",
      publication: "Core Rules",
      page:        "301",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Galvanizer Light Vector Chassis",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Ghordson Driller Chassis",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Grundback Runner Chassis",
      publication: "No Quarter #49",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Hunter Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Ironclad Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Juggernaut Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Kolstot Heavy Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Laika Heavy Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "190",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Mariner Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Nomad Heavy Warjack Chassis",
      publication: "Core Rules",
      page:        "302",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Reckoner Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Repenter Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Seafarer Light Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Talon Light Warjack Chassis",
      publication: "Core Rules",
      page:        "302",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Toro Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    {
      name:        "Vanguard Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "248",
      category:    "Steamjack",
      subcategory: "Chassis"
    },
    // ##### Steamjack > Cortex ##### \\
    {
      name:        "Arcanum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex"
    },
    {
      name:        "Aurum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex"
    },
    {
      name:        "Cupernium-Grade Cortex",
      publication: "Core Rules",
      page:        "303",
      category:    "Steamjack",
      subcategory: "Cortex"
    },
    {
      name:        "Ferrum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex"
    },
    // ##### Steamjack > Melee Weapon ##### \\
    {
      name:        "'Jack Lantern (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Anchor (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Armored Fist (Heavy Steamjack)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Assault Shield",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Battle Axe",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Battle Blade (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Battle Hammer (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Battle Mace (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Battle Mace (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Blazing Star (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Cargo Claw (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Clamps (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Consecrator (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Dervish Swords (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Drill Rig",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Drill Rig",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Electro Glaive (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "99",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Executioner Axe (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Fist Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flail",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flame Fist (Reckoner Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flame Pike (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Flensing Blade (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Generator Blade (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Grappler",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Grave Marker (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Great Shield (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Halberd",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Hand-Weapon",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Hydraulic Clamp Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ice Axe (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Industrial Torch Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Inferno Mace (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Magno Shield (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Mattlock (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Metal Saw",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Piston Spear (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Pole Axe (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Pulverizer",
      publication: "No Quarter #49",
      page:        "70",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Punching Pike",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Quake Hammer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Ram Piston (Heavy Steamjack)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Repulsor Shield",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rip Saw (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rock Drill",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rock Pick",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Rock Pick (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Scrap Saw (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield Fist (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield Fist (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shield System",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shock Hammer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Shock Shield (Light Warjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Smith Hammers (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Spear",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Steam Riveteer Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Steamjack Fist (Heavy Steamjack)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Steamjack Fist (Light Steamjack)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Stun Blade (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Stun Lance (Light Steamjack Only)",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "Templar's Flail (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "War Flail (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "War Lance (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    {
      name:        "War Spear",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Melee Weapon"
    },
    // ##### Steamjack > Ranged Weapon ##### \\
    {
      name:        "Avalanche Cannon",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Bombard (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Cannon (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Condemner (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Dozer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "196",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Dual Cannon (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Flame Belcher (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Flamethrower",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Gaff (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Gaff Hook (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade Launcher (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grenade Launcher (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Grundback Light Cannon",
      publication: "No Quarter #49",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Hail Shot Cannon",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Harpoon",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Heavy Barrel (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Heavy Harpoon Cannon (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Homing Ripspike Launcher",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Light Gun (Light Steamjack Only)",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Long Arm (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Metal Storm (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "108",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Net (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Rain of Death (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Razor Bola",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Scattergun Cannon",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Seismic Cannon (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Sentinel Chain Gun (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Ship's Gun (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Shoulder Cannons (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Skyhammer Rocket Pod (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Sledge Cannon",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Steam Lobber (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Storm Blaster (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Tower Shield-Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "249",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    {
      name:        "Underarm Slug Gun (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Ranged Weapon"
    },
    // ##### Steamjack > Gear/Upgrade ##### \\
    {
      name:        "Alchemical Coating",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Alchemical Optic Treatment",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "All-Terrain Compensator",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Ammo Hopper",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Arc Node",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Augmented Cortex Receiver (ACR)",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Ballast Tanks",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Battle Driver",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Buckler",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Bulwark",
      publication: "No Quarter #53",
      page:        "73",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Cargo Rigging",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Cenopath",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Combat Reflex Array",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Corrosive Shielding",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Defensive Reflex Array (DRA)",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Efficient Boiler",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Electrical Shielding",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Field Repair Array",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Fire Shielding",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Grenade Field",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Gyroscopic Array",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Hardened Armor",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Head Spike",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Heavy Boiler",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Hull Reinforcement",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Hydraulic Crane",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Industrial Arm Mount (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Jury-Rigged Boiler",
      publication: "Kings, Nations, and Gods",
      page:        "315",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Massive Boiler (Juggernaut Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Neural Agitator",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Propulsion Pack",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Storm Accumulator",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Storm Relay",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    {
      name:        "Trench Rig",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade"
    },
    // ##### Steamjack > Tune-Up ##### \\
    {
      name:        "Airflow Optimization",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Aural Sensor Recalibration",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Boiler Overpressure",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Leg Piston Lubrication",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Optic Recalibration",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Slow Burn",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Torque Tuning",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Weapon Alignment",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    {
      name:        "Weigh Distribution",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up"
    },
    // ##### Thrall > Thrall Type ##### \\
    {
      name:        "Lieutenant",
      publication: "Urban Adventure",
      page:        "72",
      category:    "Thrall",
      subcategory: "Thrall Type"
    },
    {
      name:        "Risen",
      publication: "Urban Adventure",
      page:        "73",
      category:    "Thrall",
      subcategory: "Thrall Type"
    },
    {
      name:        "Warrior",
      publication: "Urban Adventure",
      page:        "73",
      category:    "Thrall",
      subcategory: "Thrall Type"
    },
    // ##### Thrall > Thrall Upgrade ##### \\
    {
      name:        "Artificial Intellect",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Dark Power",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Ghostly",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Grave Chill",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Guardian",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Killer",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Language",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Lock Step",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Rune Hardened",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Rune Powered",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Speed in Death",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    {
      name:        "Watch Thrall",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade"
    },
    // ##### Vehicle > Vehicle ##### \\
    {
      name:        "The Roller",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Vehicle",
      subcategory: "Vehicle"
    },
    // ##### Vehicle > Vehicle Type ##### \\
    {
      name:        "Carriage",
      publication: "Bitter Medicine",
      page:        "36",
      category:    "Vehicle",
      subcategory: "Vehicle Type"
    },
    {
      name:        "Riverboat",
      publication: "Bitter Medicine",
      page:        "37",
      category:    "Vehicle",
      subcategory: "Vehicle Type"
    },
    {
      name:        "Sloop",
      publication: "Bitter Medicine",
      page:        "38",
      category:    "Vehicle",
      subcategory: "Vehicle Type"
    },
    {
      name:        "Wagon, Large",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Type"
    },
    {
      name:        "Wagon, Small",
      publication: "Bitter Medicine",
      page:        "38",
      category:    "Vehicle",
      subcategory: "Vehicle Type"
    },
    // ##### Vehicle > Vehicle Upgrade ##### \\
    {
      name:        "Armored Panels",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
    {
      name:        "Enclosed Body",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
    {
      name:        "Enclosed Controls",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
    {
      name:        "Enlarged Body",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
    {
      name:        "Patrol Wagon",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
    {
      name:        "Weapon Mount",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade"
    },
  ];
})();