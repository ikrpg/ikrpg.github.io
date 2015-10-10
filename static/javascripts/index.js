// global
// var ikrpg

var ikrpg = ikrpg || {};

(function () {
	'use strict';
	
	ikrpg.index = ikrpg.index || {};
	
  // Ability
  // Adventure
  //     Scenario, Encounter, Scenario Setting, Hazard
  // Alchemy
  //     Alchemical Ingredient, Alchemical Item, Field Alchemy, Grenate
  // Character Creation
  //     Adventuring Company, Archetype, Career, Career Option, Race, Scorne Caste
  // Armory
  //     Armor, Melee Weapon, Improvised Melee Weapon, Ranged Weapon, Ammunition,
  //     Ranged Weapon Accessory, Improvised Ranged Weapon, Magical Ranged Weapon, Trap
  // Benefit
  // Disease
  //     Disease Type, Disease Classification, Contraction Method, Symptom, Disease
  // Equipment
  //     Clothing, Equipment, Mount, Riding Equipment, Food
  // Geography
  //     Nation, Culture, Political Region, City/Fortress, Geographic Region
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
  //     Military Skill, Occupational Skill, Dueling Maneuver, Trick Riding, Group Tactics
  // Spell
  // Steamjack
  //     Steamjack/Vector, Chassis, Cortex, Melee Weapon, Ranged Weapon, Gear/Upgrade, Tune-Up
  // Survival
  //     Shelter, Trap
  // Thrall
  //     Thrall Type, Thrall Upgrade
  // Vehicle
  // Warbeast
  //     Devourer Warbeast, Farrow Warbeast, Legion Warbeast, Swamp Warbeast, Trollblood Warbeast, Wold, Animus, Warbeast Armor
  //     Warbeast Melee Weapon, Warbeast Ranged Weapon, Warbeast Gear, Warbeast Mechanikal Component
	ikrpg.index.data = [
    // ##### Ability ##### \\
    {
      name:        "'Jack Marshal",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Abomination",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Abomination",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Abomination",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ace Commander",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Acrobatics",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Acrobatics",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Adaptable [Urban]",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Adjust Aim",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Advisor",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Advisor",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Advisor",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Aegis",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Aegis",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Always a Deal to be Made",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ambush",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ambush",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ambush",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Amphibious",
      publication: "Unleashed Core Rules",
      page:        "102",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Anatomical Precision",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Anatomical Precision",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Anatomical Precision",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Anatomist",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Anestetize",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Animal Control",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Appraise",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Appraise",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Assassin",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Craftsmanship",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Consumption",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Defenses",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Engineer",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Potential",
      publication: "Skorne Empire",
      page:        "43",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Limited Arcane Tradition",
      publication: "Skorne Empire",
      page:        "43",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Precision",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Scholar",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Archer",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcing Shot",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Artificer",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Astute",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Astute",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Athanc Shard",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Authority",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Awe Inspiring",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Backstab",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Backstab",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Backstab",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Balance Out",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Balm of Dhunia",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Commander",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Commander",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Battlefield Coordination",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Battlefield Coordination",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Brutal Charge",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Call to Action",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Call to Action",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Call to Action",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Close Fire",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Coordinated Strike",
      publication: "Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Coordinated Strike",
      publication: "Unleashed Core Rules",
      page:        "155",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Coordinated Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Desperate Pace",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Go to Ground",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Go to Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "7",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Orchestrate Fire",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Press Forward",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Reconnaissance",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Reconnaissance",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Relentless Charge",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Shadow",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Plan: Shadow",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Shadow",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Take Cover",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Plan: Take Cover",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bayonet Charge",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bayonet Charge",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beast Handler",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beast Manipulation: Dominator",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beast Manipulation: Enrage",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beast Manipulation: Medicate",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beast Manipulation: Toughen",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Berserk",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Berserk",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Berserk",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Big Game Hunter",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Big Game Hunter",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Big Game Hunter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Binding",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Binding",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Binding",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bite",
      publication: "Unleashed Core Rules",
      page:        "104",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Black Tongue",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blade Shield",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blaster",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blending",
      publication: "Unleashed Core Rules",
      page:        "102",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Gifts",
      publication: "No Quarter #61",
      page:        "97",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Gifts",
      publication: "No Quarter #61",
      page:        "98",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Drinker",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Frenzy",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Mad",
      publication: "No Quarter #61",
      page:        "98",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Rites",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Rites",
      publication: "Unleashed Core Rules",
      page:        "156",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Spiller",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blood Spiller",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Trade",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Trade",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bloodletting",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bloodlust",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bloodlust",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blur of Motion",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Boarding Action",
      publication: "Full Metal Fridays 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Boarding Action",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bodge",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Body Slam",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bodyguard",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bodyguard",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bomber",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bond",
      publication: "Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bone Grinder",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bone Grinder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Brawler",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Brew Master",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Brew Master",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Brew Master",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Broad Stroke",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bull Rush",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bull Rush",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Calm",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Camouflage",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Camouflage",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Camouflage",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Card Sharp",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cataphract",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cautious Advance",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cautious Advance",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cavalry Charge",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cavalry Charge",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cavalry Fighter",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Chain Attack: Bleed Out",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chain Attack: Body Slam",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chain Attack: Pin Down",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chain Attack: Smite",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Charmer",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Choir",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Circular Vision",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Circular Vision",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cleave",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cleave",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Clockwork Transcendence",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Close Shot",
      publication: "Errata",
      page:        "1",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cold Steel",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Combat Rider",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Combat Rider",
      publication: "Unleashed Core Rules",
      page:        "157",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Combo Strike (Praetorian Sword)",
      publication: "Skorne Empire",
      page:        "62",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Communion",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Conditioning",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Conniver",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Conniver",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Conniver",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Consume Essence",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Convergence Warcaster",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Corruptor",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Counter Offer",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cover Identity",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Covering Fire",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Crackshot",
      publication: "Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Crackshot",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Craft Rune Shot",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Crossbowman",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Crossbowman",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dark Dominion",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dark Scribe",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deadly Skill",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deadly Skill",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Death Mastery",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Defender",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Defender",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Defender",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Defensive Line",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Defensive Line",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dig In",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Disease Resistance",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Disease Resistance",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Disease Resistance",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dismember",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dispel",
      publication: "Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dispel",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Distiller",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Distrusted",
      publication: "Unleashed Core Rules",
      page:        "105",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Divine Fortitude",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dodger",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dodger",
      publication: "Unleashed Core Rules",
      page:        "158",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dodger",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dominating Presence",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dominating Presence",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Doom Gaze",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Double Powder Ration",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Draconic Eminence",
      publication: "No Quarter #60",
      page:        "108",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Drain Essence",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Drive: Ancillary Attack",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Drive: Assault",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Drive: Off Road",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Drive: Pronto",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dual Fighter",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dual Shot",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dual Shot",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dual Shot",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Earth Magic",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Electromancer",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Elemental Master",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Elusive Rider",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Empower",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Empower Weapon",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Energy Siphon",
      publication: "No Quarter #60",
      page:        "108",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Enigma Cipher",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Evasive Rider",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Evasive Rider",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Exalted",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Exalted Dialogue",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Excruciator",
      publication: "Skorne Empire",
      page:        "63",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Expert Rider",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Expert Rider",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Exterminator",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Exterminator",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Extoller",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Eye of the Storm",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fabricator",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fall Back",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fall Back",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Cook",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fast Draw",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fast Draw",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Draw",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "8",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Rearm",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fast Rearm",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Reload",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fast Reload",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Reload",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Reload",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fate Blessed",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fearless",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fearless",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fearless",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fearsome Howl",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fearsome Howl",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fearsome Howl",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat of Regeneration",
      publication: "Unleashed Core Rules",
      page:        "159",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Cacophony",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Cacophony",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Call of Defiance",
      publication: "Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Call of Defiance",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Ground Shaker",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Ground Shaker",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Heroic Ballad",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Heroic Ballad",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Reverberation",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Reverberation",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Signal Call",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Signal Call",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fell Call: Sonic Blast",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fell Call: Sonic Blast",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Alchemist",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Field Marshal: Counter Charge",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Celestial Harmony",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Field Marshal: Hog Wild",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Magical Attack",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Field Marshal: Magical Attack",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Poltergeist",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Regenerate",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Relentless Charge",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Field Marshal: Relentless Charge",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Shield Guard",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Field Marshal: Sprint",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Field Marshal: Unyielding",
      publication: "Unleashed Core Rules",
      page:        "160",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Find Cover",
      publication: "Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Find Cover",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Find Cover",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Finisher",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fire in the Hole!",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "First to Fight",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fist of God",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Flash Thief",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fleet Foot",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fleet Food",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flesh of Steel",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Flesh of Steel",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flesh of Steel",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fleshcrafting",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flying Fists",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Flying Fists",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flying Fists",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Follow Up",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Follow Up",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Foresight",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Free Style",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gang",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gang",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gang",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gatekeeper",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Get Away",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ghost Shield",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ghost Shield",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ghost Sight",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gift of the Beast",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Girded",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Go to Ground",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Go to Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Goad",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Good Breeding",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Grappler",
      publication: "Urban Adventure",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Grave Man",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Grave Man",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Great Power",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Great Power",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Grenadier",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Grenadier",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gunfighter",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gunfighter",
      publication: "Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gunfighter",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gunfighter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gunner",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hack",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hard",
      publication: "Unleashed Core Rules",
      page:        "161",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hardened Strike",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hardened Strike",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Haruspex",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Haruspex",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Haruspex",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Head-Butt",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Head-Butt",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Head-Butt",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Heart Eater",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "High-Pressure Fire",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hightened Olfactory Senses",
      publication: "Unleashed Core Rules",
      page:        "103",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hit em' Low",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hit em' Low",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hit the Deck!",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hit the Deck!",
      publication: "Skorne Empire",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Huge Stature",
      publication: "No Quarter #61",
      page:        "98",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hulking Presence",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hunter",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hunting Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hunting Ground",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hyper Awareness",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hyper Awareness",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Imbue Weapon",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Imitative Power",
      publication: "Unleashed Core Rules",
      page:        "104",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Immunity: Cold",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Immunity: Cold",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Immunity: Corrosion",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Immunity: Corrosion",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Immunity: Electricity",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Immunity: Electricity",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Immunity: Fire",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Immunity: Fire",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Impelled Companions",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Imperishable Conviction",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Impervious Wall Stance",
      publication: "Kings, Nations, and Gods",
      page:        "361",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Improvised Formula",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Inflict Pain",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Inflict Pain",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Inscribe Formulae",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inscribe Thrall Rune",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Instructor",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Iron Sentinel",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Iron Will",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Iron Will",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ironhead",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Keen Eyed",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Keen Eyed",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Knife Thrower",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Language",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Language",
      publication: "Unleashed Core Rules",
      page:        "162",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Language",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Legacy of Bragg",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Legecy of Bragg",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Light Cavalry",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Light Cavalry",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Line Breaker",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Line Breaker",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Live Drinker",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Load Bearing",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Load Bearing",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Load Bearing",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "9",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Long-Lived",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Lost in the Crowd",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Low Breeding",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Maestro",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mage Killer",
      publication: "Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Makeshift Engineering",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Maltreatment",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Man of Iron",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Marksman",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Marksman",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Marksman",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Master Chymist",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Maul",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Meat Alchemy",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mend Flesh",
      publication: "No Quarter #60",
      page:        "108",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mount Attack",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mounted: Bounding Leap",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mounted: Counter Charge",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mounted: Counter Charge",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mounted: Outride",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Natatorial",
      publication: "Unleashed Core Rules",
      page:        "102",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Natural Leader",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Natural Leader",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Natural Leader",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Necromancer",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Night Fighter",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Night Fighter",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Night Fighter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Oath of Silence",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Onslaught",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Onslaught",
      publication: "Unleashed Core Rules",
      page:        "163",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Onslaught",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Opening Salvo",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ossify",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Overpower",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Overtake",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Pack Hunter",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Pain Flow",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Pain Monger",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Parry",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Patch Up",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Pathfinder",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Pathfinder",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Pathfinder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Perfect Timing",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Poison Glaze",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Poison Resistance",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Poison Resistance",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Poison Resistance",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Poisoner",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Poltergeist",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Port of Call",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Possession",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Power of Truth",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Powerstrain",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Precision Strike",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Precision Strike",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Precision Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Press the Attack",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Previlege",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Prowl",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Prowl",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Prowl",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Pursuit",
      publication: "Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Pursuit",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quick Chymist",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quick Work",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Quick Work",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quick Work",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rallying Cry",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rallying Cry",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Range Amplifier",
      publication: "No Quarter #60",
      page:        "108",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Reclaim",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Reed in the Wind",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Relentless Advance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Relentless Advance",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Relentless Charge",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Relentless Charge",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Relentless Charge",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ram",
      publication: "Full Metal Fridays 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Remedy",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Renowned",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Devourer Warbeast",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Farrow Warbeast",
      publication: "Unleashed Core Rules",
      page:        "164",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Skorne Warbeast",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Swamp Warbeast",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Trollblood Warbeast",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resonance: Wold",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Resourceful",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Restoration",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Retaliatory Strike",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Retaliatory Strike",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Return Fire",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Return Fire",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Return Fire",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rhulic Warcaster",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ride-by Attack",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ride-by Attack",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Riposte",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Riposte",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rock Solid",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rock Solid",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rock Steady",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Roll with It",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Roll with It",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Roll with It",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Runesmith",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Saddle Shot",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Saddle Shot",
      publication: "Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Saddle Shot",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sanguine Bond",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Scent",
      publication: "Unleashed Core Rules",
      page:        "165",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Scoping it Out",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Scorched Earth",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Scrounge",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sentry",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sentry",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sentry",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Serenity",
      publication: "No Quarter #60",
      page:        "108",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Serpent Strike",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Serpent Strike",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Set Defense",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Set Defence",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shadow Magic",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shadow Magic",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shadow Magic",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shadow Steel",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shallow Breathing",
      publication: "No QUarter #61",
      page:        "75",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shield Guard",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shield Guard",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shield Guard",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shield Slam",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shield Slam",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shifting Sands Stance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shootist",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shootist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Signal Howls",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Signal Language",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Signal Language",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Signal Language",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Silence",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Silence",
      publication: "No Quarter #46",
      page:        "29",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Silence",
      publication: "Skorne Empire",
      page:        "65",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Silver Tongued",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Skilled Trapper",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Skilled Trapper",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Snacking",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Snag & Slash",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Snap Fire",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sniper",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sniper",
      publication: "Unleashed Core Rules",
      page:        "166",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Snow Wreathed",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Snow Wreathed",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Souie!",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soul Guard",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soul Taker",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soul Taker",
      publication: "Urban Adventure",
      page:        "68",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Soul Thief",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Soulstorm",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Spawn Whelps",
      publication: "Unleashed Core Rules",
      page:        "107",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spawning Savant",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Specialization",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Specialization",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Eater",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Guide",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Tap",
      publication: "No Quarter #62",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Vision",
      publication: "Skorne Empire",
      page:        "99",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spiritual Harmony",
      publication: "No Quarter #60",
      page:        "109",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sprint",
      publication: "Full Metal Fridays 1/1/2",
      page:        "2",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sprint",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Staredown",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Staredown",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stay Death",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Steady",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Steam Jockey",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Steam Savant",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Steamo",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stone Scavenger",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Warder",
      publication: "Unleashed Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone-and-Mortars Stance",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stonecutter",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Storm Booster",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Strangler",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Street Survivor",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Street Sweeper",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Strength of Arms",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Student of Kexorus",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Studious",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sucker!",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sucker!",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Suppressing Fire",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Survivalist",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Survivalist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "10",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Swift Hunter",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Swift Hunter",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Swift Hunter",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Swift Rider",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Swift Rider",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tactical Coordination",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Take Down",
      publication: "Core Rules",
      page:        "167",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Take Down",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tap Fury",
      publication: "No Quarter #60",
      page:        "109",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Targeteer",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Targeteer",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Team Leader",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Team Leader",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Team Leader",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Team Player",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Test the Wind",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Thick Skin",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tinkerer",
      publication: "No Quarter #52",
      page:        "34",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Torture",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Torture",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Traceless Path",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Traceless Path",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Traceless Path",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tracker",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tracker",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Trained Rider",
      publication: "Kings, Nations, and Gods",
      page:        "181",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Trained Rider",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Trained Rider",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Transcend the Flesh",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Treewalker",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Trick Rider",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Trip",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Trip",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Trip",
      publication: "Urban Adventure",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Troll Resilience",
      publication: "Unleashed Core Rules",
      page:        "107",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Troll Speaker",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Truth Reader",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Truth Reader",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tune Up",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Two-Weapon Fighting",
      publication: "Bitter Medicine",
      page:        "54",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Two-Weapon Fighting",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Two-Weapon Fighting",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Unhallowed",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "University Education",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Urcaen's Gate",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vampiric Harvest",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Vessel Upgrade",
      publication: "No Quarter #48",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vivisectionist",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Vivisectionist",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Warlock Bond",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Waylay",
      publication: "Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Waylay",
      publication: "Unleashed Core Rules",
      page:        "168",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Waylay",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Weapon Master (Javelin)",
      publication: "Unleashed Core Rules",
      page:        "169",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Weapon Master (Praetorian Sword)",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Weatherman",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Weather Vane",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Whelp Companion",
      publication: "Unleashed Core Rules",
      page:        "169",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Whirlwind",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Whirlwind",
      publication: "Skorne Empire",
      page:        "66",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Whispers of the Creator",
      publication: "Kings, Nations, and Gods",
      page:        "362",
      category:    "Ability",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wold Mastery",
      publication: "Unleashed Core Rules",
      page:        "169",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wolf Protector",
      publication: "Unleashed Core Rules",
      page:        "169",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    // ##### Adventure > Scenario ##### \\
    {
      name:        "1 AR: The Synthesis of Rebellion",
      publication: "No Quarter #60",
      page:        "82",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "A Walk in the Park",
      publication: "No Quarter #62",
      page:        "82",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "IKU"
    },
    {
      name:        "Bad Moon Rising",
      publication: "Bad Moon Rising",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Bitter Medicine",
      publication: "Bitter Medicine",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Fools Rush In",
      publication: "Fools Rush In",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Friends in High Places",
      publication: "Urban Adventure",
      page:        "80",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Hogwash",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 1: Undeath Metal",
      publication: "No Quarter #53",
      page:        "100",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 2: Act of Murder",
      publication: "No Quarter #54",
      page:        "97",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 3: Mercilessly Alive",
      publication: "No Quarter #55",
      page:        "94",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 4: Many Deaths, One Life",
      publication: "No Quarter #56",
      page:        "90",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 5: Stone Cold",
      publication: "No Quarter #57",
      page:        "90",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Immortality Part 6: The Death and Life of Vladislav Abrosim",
      publication: "No Quarter #58",
      page:        "92",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "Spirit in Steel",
      publication: "No Quarter #44",
      page:        "62",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "The Lost Chamber",
      publication: "Full Metal Fridays 1/3/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    {
      name:        "The Noble's Tournament",
      publication: "Full Metal Fridays 1/5/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Scenario",
      game:        "FMF"
    },
    // ##### Adventure > Encounter ##### \\
    {
      name:        "Alchemical Imbalance",
      publication: "Full Metal Fridays 1/2/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Blood and Circuses",
      publication: "No Quarter #52",
      page:        "94",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Dark Water",
      publication: "Path of Devastation Season 2",
      page:        "20",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Dead End",
      publication: "Full Metal Fridays 1/4/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Dirty Deeds",
      publication: "No Quarter #52",
      page:        "97",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Disturbing the Dead",
      publication: "Urban Adventure",
      page:        "52",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Explosive Yield",
      publication: "Urban Adventure",
      page:        "62",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Hogshead",
      publication: "Fridays Unleashed 2/20/2015",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "IKU"
    },
    {
      name:        "Sailor take Warning",
      publication: "Full Metal Fridays 1/1/4",
      page:        "1",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Sewer Surprise",
      publication: "Urban Adventure",
      page:        "56",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Talons in the Dark",
      publication: "Urban Adventure",
      page:        "59",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "The Tale of Ol'Mudfoot",
      publication: "Path of Devastation Season 3",
      page:        "20",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    {
      name:        "Twisted Steel",
      publication: "Path of Devastation Season 1",
      page:        "20",
      category:    "Adventure",
      subcategory: "Encounter",
      game:        "FMF"
    },
    // ##### Adventure > Scenario Setting ##### \\
    {
      name:        "Bexlyfe",
      publication: "No Quarter #53",
      page:        "64",
      category:    "Adventure",
      subcategory: "Scenario Setting",
      game:        "FMF"
    },
    {
      name:        "Five Fingers",
      publication: "Urban Adventure",
      page:        "32",
      category:    "Adventure",
      subcategory: "Scenario Setting",
      game:        "FMF"
    },
    {
      name:        "Lhen",
      publication: "No Quarter #56",
      page:        "39",
      category:    "Adventure",
      subcategory: "Scenario Setting",
      game:        "FMF"
    },
    {
      name:        "Novokorska",
      publication: "No Quarter #51",
      page:        "48",
      category:    "Adventure",
      subcategory: "Scenario Setting",
      game:        "FMF"
    },
    {
      name:        "Wexmere",
      publication: "No Quarter #46",
      page:        "56",
      category:    "Adventure",
      subcategory: "Scenario Setting",
      game:        "FMF"
    },
    // ##### Adventure > Hazard ##### \\
    {
      name:        "Avalanche",
      publication: "Unleashed Core Rules",
      page:        "227",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Blizzard",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Bogs",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Cane Leeches",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Cave-Ins",
      publication: "Unleashed Core Rules",
      page:        "227",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Dense Undergrowth",
      publication: "Unleashed Core Rules",
      page:        "225",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Flooded River",
      publication: "Unleashed Core Rules",
      page:        "226",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Fog",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Forest Fires",
      publication: "Unleashed Core Rules",
      page:        "226",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Heat Wave",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Heavy Rain",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Ice Sheets",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Marsh Gas",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Pit Traps",
      publication: "Fridays Unleashed 1/30/2015",
      page:        "1",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Poisonous Plants",
      publication: "Fridays Unleashed 1/16/2014",
      page:        "1",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Quicksand",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Scree",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Severe Winds",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Snowdrifts",
      publication: "Unleashed Core Rules",
      page:        "229",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Thin Air",
      publication: "Unleashed Core Rules",
      page:        "228",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Tree Deadfall",
      publication: "Unleashed Core Rules",
      page:        "225",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    {
      name:        "Wounded Razor Boar",
      publication: "Fridays Unleashed 1/30/2015",
      page:        "1",
      category:    "Adventure",
      subcategory: "Hazard",
      game:        "IKU"
    },
    // ##### Alchemy > Alchemical Ingredient ##### \\
    {
      name:        "Alchemical Explosive",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Alchemical Stone",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Alchemical Waste, Crystal",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Alchemical Waste, Crystal",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Alchemical Waste, Liquid",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Alchemical Waste, Liquid",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Alchemical Waste, Organic",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Alchemist's Stone",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Animal Fat",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Aradus Bile",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Arcane Extract",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Arcane Extract",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Arcane Minerals",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Arcane Minerals",
      publication: "Unleashed Core Rules",
      page:        "341",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Alkalic Fluid",
      publication: "Full Metal Fridays 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Bioluminescent Extract",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Bioluminescent Extract",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Blackbond",
      publication: "Full Metal Fridays 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Burrow Mawg Adrenal Gland",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Burrow-Mawg Adrenal Gland",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Chymical Waste, Crystal",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Chymical Waste, Liquid",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Crypt Spider Brain",
      publication: "No Quarter #43",
      page:        "46",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Cyclops Brain Tissue",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Ectoplasm",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Ectoplasm",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Firestifle",
      publication: "Full Metal Fridays 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Glasseater",
      publication: "Full Metal Fridays 1/2/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Heavy Metals",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Heavy Metals",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Jevisha Extract",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Laughing Gas",
      publication: "Full Metal Fridays 1/2/2",
      page:        "1",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Menoth's Fury",
      publication: "Core Rules",
      page:        "292",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Menoth's Fury",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Mineral Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Mineral Acid",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Mineral Crystals",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Mineral Crystals",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Mutagenic Extract",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Mutagenic Extract",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Organic Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Organic Acid",
      publication: "Unleashed Core Rules",
      page:        "342",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Organic Oil",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Organic Toxin",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Organic Toxin",
      publication: "Unleashed Core Rules",
      page:        "343",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Sacral Shards",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    {
      name:        "Umbroculant Drops",
      publication: "Full Metal Fridays 1/2/2",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "FMF"
    },
    {
      name:        "Vitriol",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Ingredient",
      game:        "IKU"
    },
    // ##### Alchemy > Alchemical Item ##### \\
    {
      name:        "Alchemical Acid",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Alchemical Acid",
      publication: "Unleashed Core Rules",
      page:        "343",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Alchemical Restorative",
      publication: "Core Rules",
      page:        "293",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Alchemical Restorative",
      publication: "No Quarter #53",
      page:        "103",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Alchemical Restorative",
      publication: "Unleashed Core Rules",
      page:        "343",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Amkrashaar",
      publication: "Skorne Empire",
      page:        "82",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Antitoxin",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Antitoxin",
      publication: "Unleashed Core Rules",
      page:        "343",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Ashes of Urcaen",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Ashes of Urcaen",
      publication: "Unleashed Core Rules",
      page:        "344",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Assassin's Venom",
      publication: "Unleashed Core Rules",
      page:        "344",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Beshtal",
      publication: "Skorne Empire",
      page:        "83",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Bloodhearth",
      publication: "No Quarter #61",
      page:        "91",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Bottled Light",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Bottled Light",
      publication: "Unleashed Core Rules",
      page:        "344",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Cryptospector",
      publication: "Monsternomicon",
      page:        "23",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Cryptospector",
      publication: "Unleashed Core Rules",
      page:        "345",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Cryptospector Potion",
      publication: "No Quarter #43",
      page:        "47",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Crucible Rounds",
      publication: "Kings, Nations, and Gods",
      page:        "310",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Demxaat",
      publication: "Skorne Empire",
      page:        "83",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Fear Gas",
      publication: "Urban Adventure",
      page:        "16",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Firebane Salve",
      publication: "Urban Adventure",
      page:        "16",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Firefat",
      publication: "No Quarter #61",
      page:        "91",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Fortemorphic Elixier",
      publication: "Core Rules",
      page:        "294",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Fortemorphic Elixier",
      publication: "Unleashed Core Rules",
      page:        "345",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Gas Candles",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Healing Liniment",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Healing Liniment",
      publication: "Unleashed Core Rules",
      page:        "345",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Hokar",
      publication: "Skorne Empire",
      page:        "83",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Invisible Ink",
      publication: "Urban Adventure",
      page:        "17",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Iskiir",
      publication: "Skorne Empire",
      page:        "84",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Jakkamsar",
      publication: "Skorne Empire",
      page:        "84",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Jevisha",
      publication: "Skorne Empire",
      page:        "84",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Jikkar",
      publication: "Skorne Empire",
      page:        "84",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Kand",
      publication: "Skorne Empire",
      page:        "85",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Knorva's Kiss",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Night's Black",
      publication: "Urban Adventure",
      page:        "17",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Persuasion Elixier",
      publication: "Urban Adventure",
      page:        "18",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Poisonkeeper",
      publication: "Skorne Empire",
      page:        "85",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Preservation of Corben Pendant",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Pyrophoric Crystals",
      publication: "No Quarter #61",
      page:        "91",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Remel's Embrace",
      publication: "Kings, Nations, and Gods",
      page:        "247",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Restorative Oinment",
      publication: "Urban Adventure",
      page:        "18",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Revitalizer Tonic",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Rousing Vapors",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Rust Agent",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Rust Agent",
      publication: "Unleashed Core Rules",
      page:        "346",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Scent Mask",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "12",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Scent Mask",
      publication: "Unleashed Core Rules",
      page:        "346",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Shakkara",
      publication: "Skorne Empire",
      page:        "85",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Shiiraskar",
      publication: "Skorne Empire",
      page:        "86",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Somnolence Elixier",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Somnolence Elixier",
      publication: "Unleashed Core Rules",
      page:        "346",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Spirit Salts",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Spirit Salts",
      publication: "Unleashed Core Rules",
      page:        "346",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Suntallow",
      publication: "Unleashed Core Rules",
      page:        "346",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Tarnish",
      publication: "Urban Adventure",
      page:        "19",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Venhokar",
      publication: "Skorne Empire",
      page:        "86",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Vitriolic Fire",
      publication: "Core Rules",
      page:        "295",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    {
      name:        "Vitriolic Fire",
      publication: "Unleashed Core Rules",
      page:        "347",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Whispers of Lukas",
      publication: "Kings, Nations, and Gods",
      page:        "247",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "FMF"
    },
    // ##### Alchemy > Field Alchemy ##### \\
    {
      name:        "Simple Acid",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "FMF"
    },
    {
      name:        "Simple Acid",
      publication: "Unleashed Core Rules",
      page:        "347",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Simple Acid",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "30",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "IKU"
    },
    {
      name:        "Simple Stimulant",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "FMF"
    },
    {
      name:        "Simple Stimulant",
      publication: "Unleashed Core Rules",
      page:        "348",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Simple Stimulant",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "IKU"
    },
    {
      name:        "Simple Stink Gas",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "FMF"
    },
    {
      name:        "Simple Stink Gas",
      publication: "Unleashed Core Rules",
      page:        "348",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Simple Stink Gas",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "IKU"
    },
    {
      name:        "Simple Smoke",
      publication: "Core Rules",
      page:        "296",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "FMF"
    },
    {
      name:        "Simple Smoke",
      publication: "Unleashed Core Rules",
      page:        "347",
      category:    "Alchemy",
      subcategory: "Alchemical Item",
      game:        "IKU"
    },
    {
      name:        "Simple Smoke",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "31",
      category:    "Alchemy",
      subcategory: "Field Alchemy",
      game:        "IKU"
    },
    // ##### Alchemy > Natural Remedy ##### \\
    {
      name:        "Arrato Seeds",
      publication: "Unleashed Core Rules",
      page:        "338",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Blackroot Balm",
      publication: "Unleashed Core Rules",
      page:        "338",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Dvrydal Root",
      publication: "Unleashed Core Rules",
      page:        "339",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Heron's Maw",
      publication: "Unleashed Core Rules",
      page:        "339",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Horn Moss",
      publication: "Unleashed Core Rules",
      page:        "339",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Knitbone",
      publication: "Unleashed Core Rules",
      page:        "339",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    {
      name:        "Ratwort",
      publication: "Unleashed Core Rules",
      page:        "339",
      category:    "Alchemy",
      subcategory: "Natural Remedy",
      game:        "IKU"
    },
    // ##### Alchemy > Grenate ##### \\
    {
      name:        "Acid Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Ashes of Urcaen",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Bomb, Large",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Bomb, Small",
      publication: "Kings, Nations, and Gods",
      page:        "246",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Cinder Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Knockout Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    {
      name:        "Rust Bomb",
      publication: "Core Rules",
      page:        "297",
      category:    "Alchemy",
      subcategory: "Grenate",
      game:        "FMF"
    },
    // ##### Alchemy > Bone Grinder Fetish ##### \\
    {
      name:        "Alexipharmic Ointment",
      publication: "Unleashed Core Rules",
      page:        "348",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Arcane Relic",
      publication: "Unleashed Core Rules",
      page:        "348",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Bone Fetish",
      publication: "Fridays Unleashed 2/20/2015",
      page:        "1",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Bone Fetish",
      publication: "Unleashed Core Rules",
      page:        "349",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Feral Charm",
      publication: "Unleashed Core Rules",
      page:        "349",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Hand of Glory",
      publication: "Unleashed Core Rules",
      page:        "350",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Nightgaze",
      publication: "No Quarter #61",
      page:        "92",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Phylactery of Venom",
      publication: "Unleashed Core Rules",
      page:        "350",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Purulent Totem",
      publication: "Unleashed Core Rules",
      page:        "350",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Speaker's Tongue",
      publication: "Unleashed Core Rules",
      page:        "351",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Theriac of Health",
      publication: "Unleashed Core Rules",
      page:        "351",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Treewalker's Path",
      publication: "No Quarter #61",
      page:        "92",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Vermin Bag",
      publication: "No Quarter #61",
      page:        "92",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    {
      name:        "Warding Flesh",
      publication: "Unleashed Core Rules",
      page:        "351",
      category:    "Alchemy",
      subcategory: "Bone Grinder Fetish",
      game:        "IKU"
    },
    // ##### Alchemy > Chymical Ammunition ##### \\
    {
      name:        "Chymical Sling Shell",
      publication: "Skorne Empire",
      page:        "86",
      category:    "Alchemy",
      subcategory: "Chymical Ammunition",
      game:        "IKU"
    },
    // ##### Character Creation > Adventuring Company ##### \\
    {
      name:        "Agents of the Crucible",
      publication: "Kings, Nations, and Gods",
      page:        "306",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Arcane Order",
      publication: "Core Rules",
      page:        "151",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Army of the Western Reaches",
      publication: "Skorne Empire",
      page:        "60",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Beast Hunters",
      publication: "Skorne Empire",
      page:        "60",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Bonded Porters",
      publication: "Skorne Empire",
      page:        "60",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Bone Grinder Hunting Party",
      publication: "Unleashed Core Rules",
      page:        "147",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Caspian Cortex Smugglers",
      publication: "Urban Adventure",
      page:        "76",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Circle Orboros Conclave",
      publication: "Unleashed Core Rules",
      page:        "147",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Crusaders",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Farrow Tribe",
      publication: "Unleashed Core Rules",
      page:        "148",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Five Fingers Transporters",
      publication: "Urban Adventure",
      page:        "77",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Fringe Cultists",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Gatorman Tribe",
      publication: "Unleashed Core Rules",
      page:        "148",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Greylords",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Heroes of the Resistance",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "House Taberna",
      publication: "Skorne Empire",
      page:        "60",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Idrian Tribe",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Illuminated Ones",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Intrepid Investigators",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Khadoran Military Detail",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Korsk Stanzynat Mustyn",
      publication: "Urban Adventure",
      page:        "78",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Law Dogs",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Mercenary Charter",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Mystics",
      publication: "Skorne Empire",
      page:        "61",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Nobile Exiles",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Nomads",
      publication: "Skorne Empire",
      page:        "61",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Northkin Kriel",
      publication: "Unleashed Core Rules",
      page:        "149",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Nyss Refugees",
      publication: "Unleashed Core Rules",
      page:        "149",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Ordic Naval Expedition",
      publication: "Kings, Nations, and Gods",
      page:        "306",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Outlaws",
      publication: "Core Rules",
      page:        "152",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Pirates of the Broken Cost",
      publication: "Core Rules",
      page:        "153",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Raiders",
      publication: "Unleashed Core Rules",
      page:        "149",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Renegades",
      publication: "Skorne Empire",
      page:        "61",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Soldiers of Fortune",
      publication: "Unleashed Core Rules",
      page:        "150",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Spy Ring",
      publication: "Core Rules",
      page:        "153",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Thamarite Sept",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Tharn Tuath",
      publication: "Unleashed Core Rules",
      page:        "150",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "The Inner Circle",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "United Kriels",
      publication: "Unleashed Core Rules",
      page:        "150",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Unlikely Heroes",
      publication: "Unleashed Core Rules",
      page:        "151",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Unorthodox Engagement Team",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "FMF"
    },
    {
      name:        "Wilderness Expedition",
      publication: "Fridays Unleashed 1/9/2105",
      page:        "1",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    {
      name:        "Wilderness Kriel",
      publication: "Unleashed Core Rules",
      page:        "151",
      category:    "Character Creation",
      subcategory: "Adventuring Company",
      game:        "IKU"
    },
    // ##### Character Creation > Archetype ##### \\
    {
      name:        "Cunning",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Gifted",
      publication: "Core Rules",
      page:        "115",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "FMF"
    },
    {
      name:        "Gifted",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Gifted",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Intellectual",
      publication: "Core Rules",
      page:        "115",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "FMF"
    },
    {
      name:        "Mighty",
      publication: "Core Rules",
      page:        "116",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "FMF"
    },
    {
      name:        "Mighty",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Mighty",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Skilled",
      publication: "Core Rules",
      page:        "116",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "FMF"
    },
    {
      name:        "Skilled",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    {
      name:        "Skilled",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Archetype",
      game:        "IKU"
    },
    // ##### Character Creation > Career ##### \\
    {
      name:        "Ascetic",
      publication: "Skorne Empire",
      page:        "45",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Alchemist",
      publication: "Core Rules",
      page:        "120",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Allegiant",
      publication: "Kings, Nations, and Gods",
      page:        "356",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Arcane Mechanik",
      publication: "Core Rules",
      page:        "121",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Arcanist",
      publication: "Core Rules",
      page:        "122",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Archer",
      publication: "Unleashed Core Rules",
      page:        "115",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Aristocrat",
      publication: "Core Rules",
      page:        "123",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Artillerist",
      publication: "Kings, Nations, and Gods",
      page:        "304",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Assault Kommando",
      publication: "Kings, Nations, and Gods",
      page:        "177",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Beast Handler",
      publication: "Skorne Empire",
      page:        "46",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Blackclad",
      publication: "Unleashed Core Rules",
      page:        "116",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Blighted Sorcerer",
      publication: "No Quarter #62",
      page:        "100",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bloodrunner",
      publication: "Skorne Empire",
      page:        "47",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bloodtracker",
      publication: "Unleashed Core Rules",
      page:        "117",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bloodweaver",
      publication: "Unleashed Core Rules",
      page:        "118",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bokor",
      publication: "Unleashed Core Rules",
      page:        "119",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bone Grinder",
      publication: "Unleashed Core Rules",
      page:        "120",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bounty Hunter",
      publication: "Core Rules",
      page:        "124",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Brigand",
      publication: "Unleashed Core Rules",
      page:        "121",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Bushwhacker",
      publication: "Unleashed Core Rules",
      page:        "122",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Cataphract",
      publication: "Skorne Empire",
      page:        "48",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Chieftain",
      publication: "Unleashed Core Rules",
      page:        "123",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Chirurgeon",
      publication: "Skorne Empire",
      page:        "49",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Chymist",
      publication: "Skorne Empire",
      page:        "50",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Cutthroat",
      publication: "Core Rules",
      page:        "125",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Deathstalker",
      publication: "No Quarter #61",
      page:        "99",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Doom Reaver",
      publication: "Kings, Nations, and Gods",
      page:        "178",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Doom Reaver",
      publication: "No Quarter #46",
      page:        "28",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Duelist",
      publication: "Core Rules",
      page:        "126",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "357",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Explorer",
      publication: "Core Rules",
      page:        "127",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Extoller",
      publication: "Skorne Empire",
      page:        "51",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Fell Caller",
      publication: "Core Rules",
      page:        "128",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Fell Caller",
      publication: "Unleashed Core Rules",
      page:        "124",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Fennblade",
      publication: "Unleashed Core Rules",
      page:        "125",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Ferox Rider",
      publication: "Skorne Empire",
      page:        "52",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Field Mechanik",
      publication: "Core Rules",
      page:        "129",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Gun Mage",
      publication: "Core Rules",
      page:        "130",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Guttersnipe",
      publication: "Urban Adventure",
      page:        "4",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Hex Hunter",
      publication: "No Quarter #62",
      page:        "99",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Highwayman",
      publication: "Core Rules",
      page:        "131",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Horseman",
      publication: "Kings, Nations, and Gods",
      page:        "179",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Investigator",
      publication: "Core Rules",
      page:        "132",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Iron Fang",
      publication: "Core Rules",
      page:        "133",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Ironhead",
      publication: "No Quarter #52",
      page:        "33",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Knight",
      publication: "Core Rules",
      page:        "134",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Kriel Champion",
      publication: "Unleashed Core Rules",
      page:        "126",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Labor Korune",
      publication: "Urban Adventure",
      page:        "5",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Long Rider",
      publication: "No Quarter #45",
      page:        "31",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Long Rider",
      publication: "Unleashed Core Rules",
      page:        "127",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Mage Hunter",
      publication: "Core Rules",
      page:        "135",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Man-at-Arms",
      publication: "Core Rules",
      page:        "136",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Man-O-War",
      publication: "Kings, Nations, and Gods",
      page:        "180",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Military Officer",
      publication: "Core Rules",
      page:        "137",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Mist Speaker",
      publication: "Unleashed Core Rules",
      page:        "128",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Monster Hunter",
      publication: "Unleashed Core Rules",
      page:        "129",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Mortitheurge",
      publication: "Skorne Empire",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Nihilator",
      publication: "Skorne Empire",
      page:        "54",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Nomad",
      publication: "No Quarter #61",
      page:        "76",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Paladin",
      publication: "Kings, Nations, and Gods",
      page:        "358",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Pirate",
      publication: "Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Pistoleer",
      publication: "Core Rules",
      page:        "139",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Praetorian",
      publication: "Skorne Empire",
      page:        "55",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Priest of Cyriss",
      publication: "No Quarter #48",
      page:        "64",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Priest of Cyriss",
      publication: "No Quarter #48 Plus",
      page:        "64",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Priest of Menoth",
      publication: "Core Rules",
      page:        "140",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Priest of Morrow",
      publication: "Core Rules",
      page:        "140",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Priest of Nyssor",
      publication: "Unleashed Core Rules",
      page:        "130",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Pugilist",
      publication: "Urban Adventure",
      page:        "6",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Raider",
      publication: "Full Metal Fridays 1/1/2",
      page:        "2",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Ranger",
      publication: "Core Rules",
      page:        "141",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Raptor",
      publication: "Unleashed Core Rules",
      page:        "131",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Ravager",
      publication: "Unleashed Core Rules",
      page:        "132",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Ryssovass",
      publication: "Unleashed Core Rules",
      page:        "133",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Reclaimer",
      publication: "Kings, Nations, and Gods",
      page:        "359",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Rifleman",
      publication: "Core Rules",
      page:        "142",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Scout",
      publication: "Unleashed Core Rules",
      page:        "134",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Scrutator",
      publication: "Kings, Nations, and Gods",
      page:        "360",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Searforge Trader",
      publication: "Urban Adventure",
      page:        "7",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Seeker",
      publication: "Urban Adventure",
      page:        "8",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Shaman (Devourer Wurm)",
      publication: "Unleashed Core Rules",
      page:        "135",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Shaman (Dhunia)",
      publication: "Unleashed Core Rules",
      page:        "136",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Slaughterhouser",
      publication: "Unleashed Core Rules",
      page:        "137",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Soldier",
      publication: "Core Rules",
      page:        "143",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Sorcerer (Fire)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Sorcerer (Fire)",
      publication: "Unleashed Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Sorcerer (Ice)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Sorcerer (Ice)",
      publication: "Unleashed Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Sorcerer (Stone)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Sorcerer (Stone)",
      publication: "Unleashed Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Sorcerer (Storm)",
      publication: "Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Sorcerer (Storm)",
      publication: "Unleashed Core Rules",
      page:        "138",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Spy",
      publication: "Core Rules",
      page:        "145",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Stormblade",
      publication: "Core Rules",
      page:        "146",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Stormsmith",
      publication: "Kings, Nations, and Gods",
      page:        "89",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Thamarite Advocate",
      publication: "Urban Adventure",
      page:        "66",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Thief",
      publication: "Core Rules",
      page:        "147",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Tormentor",
      publication: "Skorne Empire",
      page:        "56",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Trencher",
      publication: "Core Rules",
      page:        "148",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Tyrant",
      publication: "Skorne Empire",
      page:        "57",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Urban Nomad",
      publication: "Urban Adventure",
      page:        "9",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Venator",
      publication: "Skorne Empire",
      page:        "58",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warcaster",
      publication: "Core Rules",
      page:        "149",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Warcaster, Cyriss",
      publication: "No Quarter #48",
      page:        "65",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "FMF"
    },
    {
      name:        "Warlock, Circle",
      publication: "Unleashed Core Rules",
      page:        "139",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warlock, Farrow",
      publication: "Unleashed Core Rules",
      page:        "140",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warlock, Legion",
      publication: "No Quarter #60",
      page:        "105",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warlock: Skorne",
      publication: "Skorne Empire",
      page:        "59",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warlock, Swamp",
      publication: "Unleashed Core Rules",
      page:        "141",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warlock, Trollkin",
      publication: "Unleashed Core Rules",
      page:        "142",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warmonger",
      publication: "No Quarter #61",
      page:        "100",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Warrior",
      publication: "Unleashed Core Rules",
      page:        "143",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Wolf of Orboros",
      publication: "Unleashed Core Rules",
      page:        "144",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    {
      name:        "Wolf Rider",
      publication: "Unleashed Core Rules",
      page:        "145",
      category:    "Character Creation",
      subcategory: "Career",
      game:        "IKU"
    },
    // ##### Character Creation > Career Option ##### \\
    {
      name:        "Arcane Tempest Gun Mage",
      publication: "Kings, Nations, and Gods",
      page:        "87",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Crucible Guard",
      publication: "Kings, Nations, and Gods",
      page:        "301",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Cygnaran Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "87",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Exemplar Errant",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Exemplar Venger",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Flame Bringers",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Greylord",
      publication: "Kings, Nations, and Gods",
      page:        "175",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Greylord Outrider",
      publication: "No Quarter #55",
      page:        "86",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Gun Mage of the Amethyst Rose",
      publication: "Kings, Nations, and Gods",
      page:        "239",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Illuminated Arcanist",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Iron Fang Uhlan",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Khadoran Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Llaelese Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Man-O-War Drakhun",
      publication: "Kings, Nations, and Gods",
      page:        "176",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Marine",
      publication: "Kings, Nations, and Gods",
      page:        "301",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Maritime Order of the Trident Arcanist",
      publication: "Kings, Nations, and Gods",
      page:        "302",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Ordic Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "303",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Protectorate Warcaster",
      publication: "Kings, Nations, and Gods",
      page:        "355",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Rhulic Field Mechanik",
      publication: "No Quarter #49",
      page:        "63",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Rhulic Warcaster",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Stormguard",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Storm Lance",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Tempest Blazer",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Trencher Commando",
      publication: "Kings, Nations, and Gods",
      page:        "88",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Vassal of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "354",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Bruiser",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Rider",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Veteran",
      publication: "Bitter Medicine",
      page:        "53",
      category:    "Character Creation",
      subcategory: "Career Option",
      game:        "FMF"
    },
    // ##### Character Creation > Race ##### \\
    {
      name:        "Blighted Ogrun",
      publication: "No Quarter #61",
      page:        "98",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Bog Trog",
      publication: "No Quarter #58",
      page:        "69",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Bog Trog",
      publication: "Unleashed Core Rules",
      page:        "102",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Dwarf",
      publication: "Core Rules",
      page:        "109",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Efaarit",
      publication: "No Quarter #61",
      page:        "75",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Farrow",
      publication: "Unleashed Core Rules",
      page:        "103",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Gatorman",
      publication: "Unleashed Core Rules",
      page:        "104",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Gobber",
      publication: "Core Rules",
      page:        "110",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Human",
      publication: "Core Rules",
      page:        "108",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Human",
      publication: "Unleashed Core Rules",
      page:        "105",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Iosan",
      publication: "Core Rules",
      page:        "111",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Nyss",
      publication: "Core Rules",
      page:        "112",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Nyss",
      publication: "Unleashed Core Rules",
      page:        "106",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Ogrun",
      publication: "Core Rules",
      page:        "113",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Pygmy Troll (Pyg)",
      publication: "Unleashed Core Rules",
      page:        "107",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Satyxis",
      publication: "Full Metal Fridays 1/1/1",
      page:        "2",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Skorne",
      publication: "Skorne Empire",
      page:        "42",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Strider",
      publication: "No Quarter #61",
      page:        "97",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Tharn",
      publication: "Unleashed Core Rules",
      page:        "108",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    {
      name:        "Trollkin",
      publication: "Core Rules",
      page:        "114",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "FMF"
    },
    {
      name:        "Trollkin",
      publication: "Unleashed Core Rules",
      page:        "109",
      category:    "Character Creation",
      subcategory: "Race",
      game:        "IKU"
    },
    // ##### Character Creation > Skorne Caste ##### \\
    {
      name:        "Extoller",
      publication: "Skorne Empire",
      page:        "43",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    {
      name:        "Outcast",
      publication: "Skorne Empire",
      page:        "44",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    {
      name:        "Paingiver",
      publication: "Skorne Empire",
      page:        "43",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    {
      name:        "Slave",
      publication: "Skorne Empire",
      page:        "44",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    {
      name:        "Warrior",
      publication: "Skorne Empire",
      page:        "43",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    {
      name:        "Worker",
      publication: "Skorne Empire",
      page:        "44",
      category:    "Character Creation",
      subcategory: "Skorne Caste",
      game:        "IKU"
    },
    // ##### Armory > Armor ##### \\
    {
      name:        "Alchemist's Leather",
      publication: "Core Rules",
      page:        "251",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Armored Great Coat",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Armored Great Coat",
      publication: "Unleashed Core Rules",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Assault Kommando Armor",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Bastion Heavy Plate",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Bog Trog Armor",
      publication: "No Quarter #58",
      page:        "69",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Bog Trog Armor",
      publication: "Unleashed Core Rules",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Cataphract Armor",
      publication: "Skorne Empire",
      page:        "71",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Chain Mail",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Chain Mail",
      publication: "Unleashed Core Rules",
      page:        "309",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Cleanser Armor",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Crucible Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Custom Battle Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Custom Battle Armor",
      publication: "Unleashed Core Rules",
      page:        "308",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Exemplar Plate",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Full Plate",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Full Plate",
      publication: "Unleashed Core Rules",
      page:        "309",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Infantry Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Infantry Armor",
      publication: "Unleashed Core Rules",
      page:        "309",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Leather Armor",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Leather Armor",
      publication: "Unleashed Core Rules",
      page:        "308",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Man-O-War Armor",
      publication: "Kings, Nations, and Gods",
      page:        "183",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Nyss Leather Armor",
      publication: "Unleashed Core Rules",
      page:        "308",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Ordic Royal Marine Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Paingiver Armor",
      publication: "Skorne Empire",
      page:        "72",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Plastron",
      publication: "Full Metal Fridays 1/5/1",
      page:        "3",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Praetorian Armor",
      publication: "Skorne Empire",
      page:        "72",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Ryssovass Plate",
      publication: "Unleashed Core Rules",
      page:        "309",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Skorne Infantry Armor",
      publication: "Skorne Empire",
      page:        "72",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Storm Knight Armor",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Stormsmith Armor",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Tailored Plate",
      publication: "Core Rules",
      page:        "252",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Temple Flameguard Armor",
      publication: "Kings, Nations, and Gods",
      page:        "364",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Tharn Leathers",
      publication: "Unleashed Core Rules",
      page:        "308",
      category:    "Armory",
      subcategory: "Armor",
      game:        "IKU"
    },
    {
      name:        "Vassal Armor",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    {
      name:        "Winter Guard Armor",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Armor",
      game:        "FMF"
    },
    // ##### Armory > Melee Weapon ##### \\
    {
      name:        "Ancestral Guardian Stone Weapon",
      publication: "Skorne Empire",
      page:        "102",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Annihilator Blade",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Assassin's Blade",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Assassin's Blade",
      publication: "Unleashed Core Rules",
      page:        "310",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Axe",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Axe",
      publication: "Unleashed Core Rules",
      page:        "310",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Axe, Great",
      publication: "Core Rules",
      page:        "253",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Axe, Great",
      publication: "Unleashed Core Rules",
      page:        "310",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Axe, Horseman's",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Axe, Ice",
      publication: "Unleashed Core Rules",
      page:        "310",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Axe, Riding",
      publication: "Unleashed Core Rules",
      page:        "310",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Axe, Tharn",
      publication: "Unleashed Core Rules",
      page:        "311",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Az'Tal",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Barbed Whip",
      publication: "Skorne Empire",
      page:        "72",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Battle Hammer",
      publication: "Unleashed Core Rules",
      page:        "311",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Bayonet",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Bayonet",
      publication: "Unleashed Core Rules",
      page:        "311",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Blackclad Voulge",
      publication: "Unleashed Core Rules",
      page:        "312",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Blast Shield",
      publication: "Urban Adventure",
      page:        "12",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Blasting Lance",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Blasting Pike",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Blazing Sword",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Blessed Lance",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Bloodtracker Fighting Claw",
      publication: "Unleashed Core Rules",
      page:        "312",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Caspian Battleblade",
      publication: "Core Rules",
      page:        "254",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Cat's Paw",
      publication: "No Quarter #45",
      page:        "61",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Cleft Spear",
      publication: "Unleashed Core Rules",
      page:        "312",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Cleft Sword",
      publication: "Unleashed Core Rules",
      page:        "312",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Clockwork Injector",
      publication: "Urban Adventure",
      page:        "12",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Club",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Club",
      publication: "Unleashed Core Rules",
      page:        "312",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Club, Banded",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Club, Banded",
      publication: "Unleashed Core Rules",
      page:        "313",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Consecrated Halberd",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Cutlass",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Dagger",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Dagger",
      publication: "Unleashed Core Rules",
      page:        "313",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Dagger, Poisoner's",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Deadblow Hammer",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Dueling Buckler",
      publication: "Full Metal Fridays 1/5/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Durkin Bar",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Electro Lance",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Entrenching Tool, Military",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Fellblade",
      publication: "Kings, Nations, and Gods",
      page:        "184",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Fellblade",
      publication: "No Quarter #46",
      page:        "30",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Fighting Claws, Pair",
      publication: "Skorne Empire",
      page:        "73",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Firebrand",
      publication: "Kings, Nations, and Gods",
      page:        "365",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flail",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flail",
      publication: "Unleashed Core Rules",
      page:        "313",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Flail, Two-Handed",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flail, Two-Handed",
      publication: "Unleashed Core Rules",
      page:        "314",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Flame Spear",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Gaff, Hand",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Gaff, Pole",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Gaff Spear",
      publication: "Kings, Nations, and Gods",
      page:        "308",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Garrote",
      publication: "Full Metal Fridays 1/4/3",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Garrote",
      publication: "Kings, Nations, and Gods",
      page:        "241",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Garrote, Clockwork",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Halbert",
      publication: "Core Rules",
      page:        "255",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Halbert",
      publication: "Unleashed Core Rules",
      page:        "314",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Hand Pick",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Hooked Great Sword",
      publication: "Unleashed Core Rules",
      page:        "314",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Ice Axe",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Ice Maul",
      publication: "Kings, Nations, and Gods",
      page:        "185",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Ilena's Chain-Axe",
      publication: "No Quarter #58",
      page:        "91",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Katara, Pair",
      publication: "Skorne Empire",
      page:        "73",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Knuckledriver",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Knuckledusters",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Knuckledusters",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Kolas Club",
      publication: "Skorne Empire",
      page:        "73",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Kopis",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Lacerator",
      publication: "Full Metal Fridays 1/1/2",
      page:        "2",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Lance",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Mace",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Mace",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Man Catcher",
      publication: "Skorne Empire",
      page:        "73",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Maul",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Maul",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Mechanoflail",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Mechanoflail",
      publication: "No Quarter #53",
      page:        "107",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Nyss Claymore",
      publication: "Core Rules",
      page:        "256",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Nyss Claymore",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Nyss Great Sword",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Ogrun Warcleaver",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Ogrun Warcleaver",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Orgoth Staff",
      publication: "Kings, Nations, and Gods",
      page:        "185",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pen, Blade",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pen, Poison",
      publication: "Kings, Nations, and Gods",
      page:        "242",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pickaxe",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pickaxe",
      publication: "Unleashed Core Rules",
      page:        "315",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Pike",
      publication: "Skorne Empire",
      page:        "73",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Railman's Adze",
      publication: "No Quarter #45",
      page:        "64",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rapier",
      publication: "Core Rules",
      page:        "257",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Reclaimant Torch",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Relic Blade",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Retractable Lance",
      publication: "No Quarter #50",
      page:        "52",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rynnish Fan",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sacral Blade",
      publication: "Unleashed Core Rules",
      page:        "316",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield",
      publication: "Unleashed Core Rules",
      page:        "316",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Shield, Combat",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield, Karax",
      publication: "Skorne Empire",
      page:        "74",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Spear",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Spear",
      publication: "Unleashed Core Rules",
      page:        "316",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Spear, Cavalry",
      publication: "Skorne Empire",
      page:        "74",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Spear, War",
      publication: "Skorne Empire",
      page:        "74",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Spike Maul",
      publication: "No Quarter #45",
      page:        "65",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Springblade",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Staff",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Staff",
      publication: "Unleashed Core Rules",
      page:        "316",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Staff, Battle",
      publication: "Core Rules",
      page:        "258",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Staff, Battle",
      publication: "Unleashed Core Rules",
      page:        "316",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Stone Great Sword",
      publication: "Skorne Empire",
      page:        "102",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Stormcaller and Lightning Rod",
      publication: "Kings, Nations, and Gods",
      page:        "93",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword",
      publication: "Unleashed Core Rules",
      page:        "317",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Sword, Dress",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword Cane",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword, Great",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword, Great",
      publication: "Unleashed Core Rules",
      page:        "317",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Sword, Praetorian, Pair",
      publication: "Skorne Empire",
      page:        "74",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Telescoping Staff",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Toboresh",
      publication: "Skorne Empire",
      page:        "75",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Tournament Foil",
      publication: "Full Metal Fridays 1/5/1",
      page:        "3",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Trench Knife",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Trench Sword",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Trollkin Rune Axe",
      publication: "Unleashed Core Rules",
      page:        "317",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Voltaic Halbert",
      publication: "Kings, Nations, and Gods",
      page:        "94",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "War Hammer",
      publication: "Core Rules",
      page:        "259",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "War Hammer",
      publication: "Unleashed Core Rules",
      page:        "318",
      category:    "Armory",
      subcategory: "Melee Weapon",
      game:        "IKU"
    },
    // ##### Armory > Improvised Melee Weapon ##### \\
    {
      name:        "Bottle",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Broken Bottle",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Chain",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Large Object, Improvised",
      publication: "Urban Adventure",
      page:        "23",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Sap",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Small Object, Improvised",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Railroad Spike",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Melee Weapon",
      game:        "FMF"
    },
    // ##### Armory > Ranged Weapon ##### \\
    {
      name:        "Arcus",
      publication: "Skorne Empire",
      page:        "75",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Assault Kommando Flamethrower",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Axe, Throwing",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Axe, Throwing",
      publication: "Unleashed Core Rules",
      page:        "319",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Blowtorch",
      publication: "No Quarter #45",
      page:        "60",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Blunderbuss",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Blunderbuss",
      publication: "Unleashed Core Rules",
      page:        "319",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Bola",
      publication: "Core Rules",
      page:        "261",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bola",
      publication: "Unleashed Core Rules",
      page:        "319",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Bomb Lance",
      publication: "No Quarter #45",
      page:        "61",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bombardier Grenade Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bow",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bow",
      publication: "Unleashed Core Rules",
      page:        "319",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Bow, Great",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bow, Great",
      publication: "Unleashed Core Rules",
      page:        "320",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Bow, Nyss",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bow, Nyss",
      publication: "Unleashed Core Rules",
      page:        "320",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Bow, Tharn",
      publication: "Unleashed Core Rules",
      page:        "320",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Cannon, Royal Weight",
      publication: "Kings, Nations, and Gods",
      page:        "308",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Cannon-Shield",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Carbine",
      publication: "Core Rules",
      page:        "262",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Chain Gun",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Chain Gun",
      publication: "Kings, Nations, and Gods",
      page:        "94",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Crossbow",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Crossbow",
      publication: "Unleashed Core Rules",
      page:        "320",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Crossbow, Dual",
      publication: "Unleashed Core Rules",
      page:        "321",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Crossbow, Lawbringer",
      publication: "Kings, Nations, and Gods",
      page:        "366",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Crossbow, Repeating",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Crossbow, Repeating",
      publication: "Unleashed Core Rules",
      page:        "321",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Crucible Arms Model 603",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Deck Gun",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Dual Magelock",
      publication: "Kings, Nations, and Gods",
      page:        "244",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Dueling Pistols",
      publication: "Full Metal Fridays 1/5/1",
      page:        "2",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Dueling Pistols",
      publication: "Kings, Nations, and Gods",
      page:        "243",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Efaarit Hunting Rifle",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Execrator Pistol",
      publication: "Kings, Nations, and Gods",
      page:        "95",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Explosive Cufflinks",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Farrow Pig Iron",
      publication: "No Quarter #58",
      page:        "21",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Farrow Pig Iron",
      publication: "Unleashed Core Rules",
      page:        "321",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Farrow Razorback",
      publication: "Unleashed Core Rules",
      page:        "321",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Flare Pistol",
      publication: "No Quarter #45",
      page:        "62",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Flayer Cannon",
      publication: "Skorne Empire",
      page:        "76",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Field Gun",
      publication: "Kings, Nations, and Gods",
      page:        "186",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Fire Bomb",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade, Concussion",
      publication: "Core Rules",
      page:        "263",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade, Explosive",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade, Smoke",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade, Strangle Gas",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Gun Axe",
      publication: "Core Rules",
      page:        "264",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Hand Cannon",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Hand Cannon",
      publication: "Unleashed Core Rules",
      page:        "322",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Hand Cannon, Dual",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Hand Cannon, Dual",
      publication: "Unleashed Core Rules",
      page:        "322",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Harpoon Gun",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Harpoon Gun",
      publication: "Unleashed Core Rules",
      page:        "322",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Incindus",
      publication: "Skorne Empire",
      page:        "77",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Injection Pistol",
      publication: "Full Metal Fridays 1/2/2",
      page:        "2",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Javelin",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Javelin",
      publication: "Unleashed Core Rules",
      page:        "322",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Knife, Throwing",
      publication: "Core Rules",
      page:        "265",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Knife, Throwing",
      publication: "Unleashed Core Rules",
      page:        "322",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Light Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "95",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Linethrower",
      publication: "No Quarter #45",
      page:        "63",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Man-O-War Axe Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Man-O-War Shield Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "187",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Mini-Slugger",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Mortar",
      publication: "Kings, Nations, and Gods",
      page:        "187",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Ogrun Battle Cannon",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pen, Grenade",
      publication: "Kings, Nations, and Gods",
      page:        "244",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pen, Shot",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol",
      publication: "Unleashed Core Rules",
      page:        "323",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Pistol, Collapsible",
      publication: "Urban Adventure",
      page:        "13",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol, Holdout",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol, Magelock",
      publication: "Core Rules",
      page:        "266",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol, Repeating",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Pistol, Repeating",
      publication: "Unleashed Core Rules",
      page:        "323",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Purifier",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Quad-Iron",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Radcliffe Carbine",
      publication: "Core Rules",
      page:        "267",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Radcliffe Firestorm",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Reiver",
      publication: "Skorne Empire",
      page:        "77",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Rifle",
      publication: "Unleashed Core Rules",
      page:        "323",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Rifle, Collapsible",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rifle, Long",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rifle, Heavy",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rifle, Heavy",
      publication: "Unleashed Core Rules",
      page:        "323",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Rifle, Magelock",
      publication: "Core Rules",
      page:        "268",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rifle, Military",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rifle, Military",
      publication: "Unleashed Core Rules",
      page:        "323",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Rifle, Repeating",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rilfe, Repeating",
      publication: "Unleashed Core Rules",
      page:        "324",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Rockbreaker Spray",
      publication: "No Quarter #45",
      page:        "65",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rocket Tube",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rynnish Walking Stick",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Scattergun",
      publication: "Core Rules",
      page:        "269",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Scattergun",
      publication: "Unleashed Core Rules",
      page:        "324",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Skyhammer",
      publication: "Kings, Nations, and Gods",
      page:        "367",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Sling",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Sling",
      publication: "Skorne Empire",
      page:        "77",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Sling",
      publication: "Unleashed Core Rules",
      page:        "324",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Slug Gun",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Slug Gun",
      publication: "Unleashed Core Rules",
      page:        "324",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Slugger",
      publication: "Kings, Nations, and Gods",
      page:        "96",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Slugger",
      publication: "Unleashed Core Rules",
      page:        "324",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Snare Gun",
      publication: "Unleashed Core Rules",
      page:        "325",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Sword-Cannon, Repeating",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Sword-Cannon, Heavy",
      publication: "Core Rules",
      page:        "270",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Vislovski Carbine",
      publication: "Kings, Nations, and Gods",
      page:        "188",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "War Spear",
      publication: "No Quarter #61",
      page:        "101",
      category:    "Armory",
      subcategory: "Ranged Weapon",
      game:        "IKU"
    },
    // ##### Armory > Ammunition ##### \\
    {
      name:        "Arrows, Explosive",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "FMF"
    },
    {
      name:        "Arrows, Grappling",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "FMF"
    },
    {
      name:        "Arrows or Bolts, Barbed",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "IKU"
    },
    {
      name:        "Arrows or Bolts, Concussion",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "IKU"
    },
    {
      name:        "Arrows or Bolts, Fire",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "IKU"
    },
    {
      name:        "Arrows or Bolts, Grappling",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "IKU"
    },
    {
      name:        "Arrows or Bolts, Signal",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "IKU"
    },
    {
      name:        "Blunderbuss Ammunition, Grapeshot",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "FMF"
    },
    {
      name:        "Bolts, Explosive",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "FMF"
    },
    {
      name:        "Bolts, Grappling",
      publication: "Core Rules",
      page:        "271",
      category:    "Armory",
      subcategory: "Ammunition",
      game:        "FMF"
    },
    // ##### Armory > Ranged Weapon Accessory ##### \\
    {
      name:        "Bandolier, Ammo",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Bandolier, Ammo",
      publication: "Unleashed Core Rules",
      page:        "326",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Bandolier, Grenadier's",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Bipod",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Bipod",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Firearm Ammunition",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Gun Brace",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Gun Brace",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Gunsmith's Kit",
      publication: "Core Rules",
      page:        "272",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Gunsmith's Kit",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Harpoon Gun Blasting Powder",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Holster, Wrist-Spring",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Quiver",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Quiver",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Quiver, Javelin",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Scope",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "IKU"
    },
    {
      name:        "Scope, Pistol",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    {
      name:        "Scope, Rifle",
      publication: "Core Rules",
      page:        "273",
      category:    "Armory",
      subcategory: "Ranged Weapon Accessory",
      game:        "FMF"
    },
    // ##### Armory > Improvised Ranged Weapon ##### \\
    {
      name:        "Handful of Dirt",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Large Thrown Object",
      publication: "Urban Adventure",
      page:        "24",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Massive Thrown Object",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Small Thrown Object, Blunt",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Small Thrown Object, Sharp",
      publication: "Urban Adventure",
      page:        "25",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Tar Candle",
      publication: "Full Metal Fridays 1/2/3",
      page:        "2",
      category:    "Armory",
      subcategory: "Improvised Ranged Weapon",
      game:        "FMF"
    },
    // ##### Armory > Magical Weapon ##### \\
    {
      name:        "Article 1185",
      publication: "No Quarter #47",
      page:        "59",
      category:    "Armory",
      subcategory: "Magical Weapon",
      game:        "FMF"
    },
    {
      name:        "Fang of Urcaen",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Magical Weapon",
      game:        "FMF"
    },
    {
      name:        "Greylords Rune Axe",
      publication: "No Quarter #50",
      page:        "50",
      category:    "Armory",
      subcategory: "Magical Weapon",
      game:        "FMF"
    },
    {
      name:        "Greylords Rune Axe",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Armory",
      subcategory: "Magical Weapon",
      game:        "FMF"
    },
    {
      name:        "Imprecator",
      publication: "No Quarter #47",
      page:        "60",
      category:    "Armory",
      subcategory: "Magical Weapon",
      game:        "FMF"
    },
    // ##### Benefit ##### \\
    {
      name:        "Additional Study",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ambidextrous",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ambidextrous",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battlefield Coordination",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battlefield Coordination",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beat Back",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Beat Back",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Boon",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cagey",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cagey",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Combat Caster",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Combat Caster",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Deft",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deft",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fast Caster",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fast Caster",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Back Swing",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Back Swing",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Back Swing",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Bounding Leap",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Bounding Leap",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Counter Charge",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Counter Charge",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Defensive Strike",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Defensive Strike",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Disarm",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Disarm",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Dominator",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Dominator",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Flawless Timing",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Flawless Timing",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Influence",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Invulnerable",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Invulnerable",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Perfect Plot",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Perfect Plot",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Plan of Action",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Plan of Action",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Powerful Caster",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Powerful Caster",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Prescient",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Prescient",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Revitalize",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Revitalize",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Shield Breaker",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Swashbuckler",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Swashbuckler",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Transformation",
      publication: "Unleashed Core Rules",
      page:        "108",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Quick Cast",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Quick Cast",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Quick Cast",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Quick Thinking",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Quick Thinking",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Shield Breaker",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Strength of Will",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Strength of Will",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Strength of Will",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Unconventional Warfare",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Untouchable",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Untouchable",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feat: Vendetta",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feat: Vendetta",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Genius",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Genius",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hyper Perception",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hyper Perception",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Magic Sensitivity",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Magic Sensitivity",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Occult Secrets",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Occult Secrets",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Photographic Memory",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Righteous Anger",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Righteous Anger",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Righteous Anger",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rune Reader",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Reader",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Savant",
      publication: "Unleashed Core Rules",
      page:        "110",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sidestep",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sidestep",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tough",
      publication: "Core Rules",
      page:        "116",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Tough",
      publication: "Unleashed Core Rules",
      page:        "111",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Virtuoso",
      publication: "Core Rules",
      page:        "117",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Virtuoso",
      publication: "Unleashed Core Rules",
      page:        "112",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Virtuoso",
      publication: "Urban Adventure Kit Rulebook",
      page:        "6",
      category:    "Benefit",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Warding Circle",
      publication: "Core Rules",
      page:        "115",
      category:    "Benefit",
      subcategory: "",
      game:        "FMF"
    },
    // ##### Disease > Disease Type ##### \\
    {
      name:        "Bacterial",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type",
      game:        "FMF"
    },
    {
      name:        "Fungal",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type",
      game:        "FMF"
    },
    {
      name:        "Parasitic",
      publication: "No Quarter #52",
      page:        "41",
      category:    "Disease",
      subcategory: "Disease Type",
      game:        "FMF"
    },
    {
      name:        "Toxic",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Type",
      game:        "FMF"
    },
    // ##### Disease > Disease Classification ##### \\
    {
      name:        "Fever",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification",
      game:        "FMF"
    },
    {
      name:        "Pox",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification",
      game:        "FMF"
    },
    {
      name:        "Miasma",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Disease Classification",
      game:        "FMF"
    },
    // ##### Disease > Contraction Method ##### \\
    {
      name:        "Inhalation",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method",
      game:        "FMF"
    },
    {
      name:        "Cutaneous",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method",
      game:        "FMF"
    },
    {
      name:        "Ingestion",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Contraction Method",
      game:        "FMF"
    },
    // ##### Disease > Symptom ##### \\
    {
      name:        "Ablepsy",
      publication: "No Quarter #52",
      page:        "42",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Acute Anger",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Aphasia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Boils",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Catalepsy",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Delirium",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Dyspnea",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Dystaxia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Epistaxis",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Gangrene",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Hallucinations",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Insomnia",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Lesions",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Light Sensitivity",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Lockjaw",
      publication: "No Quarter #52",
      page:        "43",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Mania",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Melancholia",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Nausea and Vomiting",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Paresis",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Paroxysm",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Pockmarks",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    {
      name:        "Uveitis",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Symptom",
      game:        "FMF"
    },
    // ##### Disease > Disease ##### \\
    {
      name:        "Bogrin Blight",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    {
      name:        "Black Tongue",
      publication: "No Quarter #52",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    {
      name:        "Bloody Sweat",
      publication: "Bitter Medicine",
      page:        "44",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    {
      name:        "Stone Sickness",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    {
      name:        "Mechanik's Dementia",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    {
      name:        "Mawg Rabies",
      publication: "No Quarter #52",
      page:        "45",
      category:    "Disease",
      subcategory: "Disease",
      game:        "FMF"
    },
    // ##### Equipment > Clothing ##### \\
    {
      name:        "Boots, Mechanik's",
      publication: "Core Rules",
      page:        "273",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "FMF"
    },
    {
      name:        "Cloak, Weighted",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "FMF"
    },
    {
      name:        "Cloak, Winter",
      publication: "Unleashed Core Rules",
      page:        "327",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "IKU"
    },
    {
      name:        "Coat, Great",
      publication: "Core Rules",
      page:        "273",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "FMF"
    },
    {
      name:        "Coat, Great",
      publication: "Unleashed Core Rules",
      page:        "328",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "IKU"
    },
    {
      name:        "False Cloaks",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "FMF"
    },
    {
      name:        "Reversible Clothing",
      publication: "No Quarter #59",
      page:        "68",
      category:    "Equipment",
      subcategory: "Clothing",
      game:        "FMF"
    },
    // ##### Equipment > Equipment ##### \\
    {
      name:        "'Jack Wrench",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Adventuring Scholar's Tools",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Alchemical Lab",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Alchemist's Apron",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Alchemist's Kit, Traveling",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "All-Weather Notebook",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Apothecary's Kit",
      publication: "Unleashed Core Rules",
      page:        "328",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Blessed Bolts",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Bottled Light",
      publication: "Full Metal Fridays 1/3/1",
      page:        "2",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Camouflage Netting",
      publication: "Unleashed Core Rules",
      page:        "328",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Char Cloth",
      publication: "Unleashed Core Rules",
      page:        "328",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Chirurgeon's Kit",
      publication: "Skorne Empire",
      page:        "78",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Chymistry Kit",
      publication: "Skorne Empire",
      page:        "78",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Clockwork Detonator",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Compass",
      publication: "No Quarter #61",
      page:        "90",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Disguise Kit",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Double-Down Deck of Cards",
      publication: "No Quarter #59",
      page:        "69",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Dry Rations",
      publication: "Unleashed Core Rules",
      page:        "328",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Eavesdropper",
      publication: "Urban Adventure",
      page:        "14",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Entrenching Spade",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Entrenching Spade",
      publication: "Unleashed Core Rules",
      page:        "329",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "False Ammunition Cartridges",
      publication: "No Quarter #59",
      page:        "70",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Fell Caller Torch",
      publication: "Unleashed Core Rules",
      page:        "329",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Flare",
      publication: "Unleashed Core Rules",
      page:        "329",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Forgery Kit",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Game Call Whistle",
      publication: "Unleashed Core Rules",
      page:        "329",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Gas Mask",
      publication: "Core Rules",
      page:        "274",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Gas Mask",
      publication: "Unleashed Core Rules",
      page:        "329",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Goggles",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Goggles",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Goggles, Snow",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Grave Marker",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Heat-Responsive Inks",
      publication: "No Quarter #59",
      page:        "70",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Lightning Rod",
      publication: "Skorne Empire",
      page:        "78",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Man-O-War Ammo Bandolier",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Manacles",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Manacles",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Mechanik's Tool Kit",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Mechanik's Workshop",
      publication: "Core Rules",
      page:        "275",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Mountain Climbing Gear",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Necromancer's Kit",
      publication: "Urban Adventure",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Oculus",
      publication: "Skorne Empire",
      page:        "94",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Paingiver Mask",
      publication: "Skorne Empire",
      page:        "78",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Pocket Watch",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Pocket Watch",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Poison Ring",
      publication: "Kings, Nations, and Gods",
      page:        "245",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Portable Steam Engine",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Pulley Hoist",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Reclaimant's Iron Mask",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Reiver Ammo Bandolier",
      publication: "Skorne Empire",
      page:        "79",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Rhulic Climbing Hammer",
      publication: "No Quarter #61",
      page:        "90",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Rivet Gun",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Rune Etching Kit",
      publication: "Core Rules",
      page:        "276",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Rune Shot Casting Kit",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Sabotage Munitions",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Skinning Tools",
      publication: "Unleashed Core Rules",
      page:        "330",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Sling Bullet Pouch",
      publication: "Skorne Empire",
      page:        "79",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Snowshoes",
      publication: "No Quarter #61",
      page:        "91",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Spawning Vessel",
      publication: "No Quarter #60",
      page:        "110",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Spider Harness",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Spyglass",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Spyglass",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Stone Scroll",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Stoneworking Kit",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Surgeon's Suite",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Surgical Kit",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Surgical Kit",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Symbol of Faith",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Symbol of Faith",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "The Enkheiridion Cipher",
      publication: "No Quarter #59",
      page:        "71",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Thief's Tools",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Thief's Tools",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Torture Implements",
      publication: "Skorne Empire",
      page:        "79",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Trapper's Kit",
      publication: "Unleashed Core Rules",
      page:        "338",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Travois",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Weatherometer",
      publication: "Urban Adventure",
      page:        "15",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    {
      name:        "Wire Saw",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Woodworking Kit",
      publication: "Unleashed Core Rules",
      page:        "331",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "IKU"
    },
    {
      name:        "Wrack",
      publication: "Kings, Nations, and Gods",
      page:        "368",
      category:    "Equipment",
      subcategory: "Equipment",
      game:        "FMF"
    },
    // ##### Equipment > Mount ##### \\
    {
      name:        "Bison",
      publication: "No Quarter #45",
      page:        "32",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Bison",
      publication: "Unleashed Core Rules",
      page:        "332",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Bletcher",
      publication: "No Quarter #61",
      page:        "77",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Duskwolf",
      publication: "Unleashed Core Rules",
      page:        "332",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Ferox",
      publication: "Skorne Empire",
      page:        "79",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Hellion",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Horse, Draft",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Horse, Draft",
      publication: "Unleashed Core Rules",
      page:        "332",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Horse, Riding",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Horse, Riding",
      publication: "Unleashed Core Rules",
      page:        "333",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Horse, War",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Horse, War",
      publication: "Unleashed Core Rules",
      page:        "333",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Riding Horse, Cardovar",
      publication: "Kings, Nations, and Gods",
      page:        "309",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Skirovik Mountain Goat",
      publication: "Unleashed Core Rules",
      page:        "333",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Ulk",
      publication: "Unleashed Core Rules",
      page:        "333",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Warhorse, Karpathan Destrier",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    {
      name:        "Warhorse, Pozdyov",
      publication: "Kings, Nations, and Gods",
      page:        "189",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "FMF"
    },
    // ##### Equipment > Riding Equipment ##### \\
    {
      name:        "Barding, Light",
      publication: "Core Rules",
      page:        "277",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Barding, Light",
      publication: "Unleashed Core Rules",
      page:        "334",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "IKU"
    },
    {
      name:        "Barding, Medium",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Barding, Medium",
      publication: "Unleashed Core Rules",
      page:        "334",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "IKU"
    },
    {
      name:        "Barding, Heavy",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Barding, Heavy",
      publication: "Unleashed Core Rules",
      page:        "334",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "IKU"
    },
    {
      name:        "Gas Mask, Equestrian",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Hellion Tack",
      publication: "No Quarter #62",
      page:        "103",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Storm Knight Barding",
      publication: "Kings, Nations, and Gods",
      page:        "92",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Tack",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "FMF"
    },
    {
      name:        "Tack",
      publication: "Unleashed Core Rules",
      page:        "334",
      category:    "Equipment",
      subcategory: "Riding Equipment",
      game:        "IKU"
    },
    // ##### Equipment > Food ##### \\
    {
      name:        "Dry Rations",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Military Rations",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Meal, Basic",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Meal, Quality",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Meal, Luxurious Feast",
      publication: "Core Rules",
      page:        "278",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Beer",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Wine",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Distilled Spirits",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Lodging, Basic",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Lodging, Standard",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    {
      name:        "Lodging, Exquisite",
      publication: "Core Rules",
      page:        "279",
      category:    "Equipment",
      subcategory: "Food",
      game:        "FMF"
    },
    // ##### Geography > Nation ##### \\
    {
      name:        "Cryx",
      publication: "Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Cygnar",
      publication: "Core Rules",
      page:        "51",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Cygnar",
      publication: "Kings, Nations, and Gods",
      page:        "7",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Divided Llael",
      publication: "Core Rules",
      page:        "53",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Ios",
      publication: "Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Khador",
      publication: "Kings, Nations, and Gods",
      page:        "113",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Khadoran Empire",
      publication: "Core Rules",
      page:        "52",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Llael",
      publication: "Kings, Nations, and Gods",
      page:        "201",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Ord",
      publication: "Core Rules",
      page:        "55",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Ord",
      publication: "Kings, Nations, and Gods",
      page:        "251",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Protectorate of Menoth",
      publication: "Core Rules",
      page:        "57",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Protectorate of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "317",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    {
      name:        "Rhul",
      publication: "Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Nation",
      game:        "FMF"
    },
    // ##### Geography > Culture ##### \\
    {
      name:        "Arjun",
      publication: "Unleashed Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Baldavan",
      publication: "Unleashed Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Bog Trogs",
      publication: "No Quarter #58",
      page:        "64",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Bog Trogs",
      publication: "Unleashed Core Rules",
      page:        "68",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Bogrin",
      publication: "No Quarter #52",
      page:        "109",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Bogrin",
      publication: "Unleashed Core Rules",
      page:        "68",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Bolotov",
      publication: "Unleashed Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Caspians",
      publication: "Kings, Nations, and Gods",
      page:        "39",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Circle Orboros",
      publication: "Unleashed Core Rules",
      page:        "29",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Clamorgan",
      publication: "Unleashed Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Efaarit",
      publication: "No Quarter #61",
      page:        "69",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Farrow",
      publication: "Unleashed Core Rules",
      page:        "50",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Gatorman",
      publication: "Unleashed Core Rules",
      page:        "54",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Gnasir",
      publication: "Unleashed Core Rules",
      page:        "60",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Gnawing Hunger",
      publication: "Unleashed Core Rules",
      page:        "104",
      category:    "Ability",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gobbers",
      publication: "No Quarter #52",
      page:        "106",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Gobbers",
      publication: "Unleashed Core Rules",
      page:        "68",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Idrians",
      publication: "Kings, Nations, and Gods",
      page:        "343",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Idrians",
      publication: "Unleashed Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Khards",
      publication: "Kings, Nations, and Gods",
      page:        "142",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Kossites",
      publication: "Kings, Nations, and Gods",
      page:        "143",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Midlunders",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Morridanes",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Nyss Refugees",
      publication: "Unleashed Core Rules",
      page:        "62",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Ogrun",
      publication: "No Quarter #59",
      page:        "79",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Olgar",
      publication: "Unleashed Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Pygmy Trolls",
      publication: "Unleashed Core Rules",
      page:        "69",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Radiz",
      publication: "Unleashed Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Ruscar",
      publication: "Unleashed Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Ryn",
      publication: "Kings, Nations, and Gods",
      page:        "217",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Sinari",
      publication: "Unleashed Core Rules",
      page:        "61",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Skirov",
      publication: "Kings, Nations, and Gods",
      page:        "143",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Sulese",
      publication: "Kings, Nations, and Gods",
      page:        "344",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Tharn",
      publication: "Unleashed Core Rules",
      page:        "65",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Thurians (Cygnar)",
      publication: "Kings, Nations, and Gods",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Thurians (Ord)",
      publication: "Kings, Nations, and Gods",
      page:        "276",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Tordorans",
      publication: "Kings, Nations, and Gods",
      page:        "276",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Trollkin",
      publication: "No Quarter #56",
      page:        "75",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Trollkin",
      publication: "Unleashed Core Rules",
      page:        "40",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Umbreans (Khador)",
      publication: "Kings, Nations, and Gods",
      page:        "144",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Umbreans (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "218",
      category:    "Geography",
      subcategory: "Culture",
      game:        "FMF"
    },
    {
      name:        "Vindol",
      publication: "Unleashed Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Vorgoi",
      publication: "Unleashed Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    {
      name:        "Yhari-Umbreans",
      publication: "Unleashed Core Rules",
      page:        "59",
      category:    "Geography",
      subcategory: "Culture",
      game:        "IKU"
    },
    // ##### Geography > Political Region ##### \\
    {
      name:        "Almare (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "278",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Bloodsbane (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "65",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Borstoi (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Bournworth (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "66",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Caspia (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "47",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Caspia (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "45",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Cloutsdowns (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Cosetio (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "282",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Dorognia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "149",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Duwurkyn (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "151",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Eastern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "54",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Fennmar (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "71",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Feodoska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "152",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Gedorra (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "346",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Gorzytska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "153",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Hetha (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "285",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Icthosa (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "348",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Khadoran Territory (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "225",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Khadorstred (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "154",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Khardoska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Kos (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "159",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Mansgrave (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "51",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Murio (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "290",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Northern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Northforest (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Noveskyev (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Oxmeath (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Razokov (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "161",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Resistance Holdings (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Rimmocksdale (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "80",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Rustoknia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "162",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Sargetstea (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "163",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Shieldpoint (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "72",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Skirovnya (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "164",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Southern Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Southpoint (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Sulonmarch (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "351",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Tamanskaia (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "166",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Territory of the Northern Crusade (Llael)",
      publication: "Kings, Nations, and Gods",
      page:        "233",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "The Northern Marches",
      publication: "Skorne Empire",
      page:        "39",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Thornwood (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "67",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Thuria (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Tor-Halaak",
      publication: "Skorne Empire",
      page:        "31",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tor-Kademe",
      publication: "Skorne Empire",
      page:        "34",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tor-Malphas",
      publication: "Skorne Empire",
      page:        "35",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tor-Sharikaan",
      publication: "Skorne Empire",
      page:        "37",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tor-Sortan",
      publication: "Skorne Empire",
      page:        "37",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tor of the Western Reaches",
      publication: "Skorne Empire",
      page:        "38",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "IKU"
    },
    {
      name:        "Tordoro (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Tverkatka (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "166",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Umbrey (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "168",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Vardenska (Volozk)",
      publication: "Kings, Nations, and Gods",
      page:        "170",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Varhdan (Protectorate)",
      publication: "Kings, Nations, and Gods",
      page:        "353",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Western Midlunds (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "56",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Westinmarsh (Province)",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Westshore (Duchy)",
      publication: "Kings, Nations, and Gods",
      page:        "79",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    {
      name:        "Wythmoor (Grav)",
      publication: "Kings, Nations, and Gods",
      page:        "295",
      category:    "Geography",
      subcategory: "Political Region",
      game:        "FMF"
    },
    // ##### Geography > City/Fortress ##### \\
    {
      name:        "Armandor",
      publication: "Kings, Nations, and Gods",
      page:        "280",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ancient Icthier",
      publication: "Kings, Nations, and Gods",
      page:        "349",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Bainsmarket",
      publication: "Kings, Nations, and Gods",
      page:        "57",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Berck",
      publication: "Kings, Nations, and Gods",
      page:        "282",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Boarsgate",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Carre Dova",
      publication: "Kings, Nations, and Gods",
      page:        "286",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Caspia, The City of Walls",
      publication: "Kings, Nations, and Gods",
      page:        "48",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ceryl",
      publication: "Kings, Nations, and Gods",
      page:        "77",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Cherov-On-Dron",
      publication: "Kings, Nations, and Gods",
      page:        "155",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Clockers Cove",
      publication: "Kings, Nations, and Gods",
      page:        "50",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Corbhen",
      publication: "Kings, Nations, and Gods",
      page:        "284",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Corvis, The City of Ghosts",
      publication: "Kings, Nations, and Gods",
      page:        "58",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Elsinberg",
      publication: "Kings, Nations, and Gods",
      page:        "229",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Fellig",
      publication: "Kings, Nations, and Gods",
      page:        "68",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Fharin",
      publication: "Kings, Nations, and Gods",
      page:        "55",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Five Fingers",
      publication: "Kings, Nations, and Gods",
      page:        "287",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Fort Bolovan",
      publication: "Bad Moon Rising",
      page:        "6",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Fort Brunzig",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Fort Falk",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Greywind Tower",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Halaak",
      publication: "Skorne Empire",
      page:        "32",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Hearthstone",
      publication: "Kings, Nations, and Gods",
      page:        "281",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Hellspass",
      publication: "Kings, Nations, and Gods",
      page:        "154",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Highgate",
      publication: "Kings, Nations, and Gods",
      page:        "73",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Imer",
      publication: "Kings, Nations, and Gods",
      page:        "347",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ironhead Station",
      publication: "Kings, Nations, and Gods",
      page:        "52",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Kademe",
      publication: "Skorne Empire",
      page:        "34",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Kajim",
      publication: "Skorne Empire",
      page:        "37",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Kaleed",
      publication: "Skorne Empire",
      page:        "33",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Kalos",
      publication: "Skorne Empire",
      page:        "38",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Kalvat",
      publication: "Skorne Empire",
      page:        "35",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Khardov",
      publication: "Kings, Nations, and Gods",
      page:        "158",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "King's Vine",
      publication: "Kings, Nations, and Gods",
      page:        "62",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Konesaan",
      publication: "Skorne Empire",
      page:        "35",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Korsk",
      publication: "Kings, Nations, and Gods",
      page:        "155",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Kotaan",
      publication: "Skorne Empire",
      page:        "39",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Laedry",
      publication: "Kings, Nations, and Gods",
      page:        "230",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Leryn",
      publication: "Kings, Nations, and Gods",
      page:        "235",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Malphas",
      publication: "Skorne Empire",
      page:        "36",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Mercir",
      publication: "Kings, Nations, and Gods",
      page:        "71",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Merin",
      publication: "Kings, Nations, and Gods",
      page:        "294",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Merywyn",
      publication: "Kings, Nations, and Gods",
      page:        "230",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Midfast",
      publication: "Kings, Nations, and Gods",
      page:        "290",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "New Larkholm",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "New Vroggen",
      publication: "Kings, Nations, and Gods",
      page:        "157",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Nine Stone",
      publication: "Unleashed Core Rules",
      page:        "97",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Ohk",
      publication: "Kings, Nations, and Gods",
      page:        "160",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Orven",
      publication: "Kings, Nations, and Gods",
      page:        "80",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Point Bourne",
      publication: "Kings, Nations, and Gods",
      page:        "66",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Porsk",
      publication: "Kings, Nations, and Gods",
      page:        "164",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Port Vladovar",
      publication: "Kings, Nations, and Gods",
      page:        "148",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ramarck",
      publication: "Kings, Nations, and Gods",
      page:        "81",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ravensgard",
      publication: "Kings, Nations, and Gods",
      page:        "169",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Rhydden",
      publication: "Kings, Nations, and Gods",
      page:        "224",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Riversmet",
      publication: "Kings, Nations, and Gods",
      page:        "231",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Rorschik",
      publication: "Kings, Nations, and Gods",
      page:        "150",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Rynyr",
      publication: "Kings, Nations, and Gods",
      page:        "231",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Scarswall",
      publication: "Kings, Nations, and Gods",
      page:        "292",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Skirov",
      publication: "Kings, Nations, and Gods",
      page:        "165",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Skrovenberg",
      publication: "Kings, Nations, and Gods",
      page:        "149",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Steelwater Flats",
      publication: "Kings, Nations, and Gods",
      page:        "52",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Sul",
      publication: "Kings, Nations, and Gods",
      page:        "352",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Tarna",
      publication: "Kings, Nations, and Gods",
      page:        "296",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Ternon Crag",
      publication: "Unleashed Core Rules",
      page:        "75",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Tokraas",
      publication: "Skorne Empire",
      page:        "38",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Tverkutsk",
      publication: "Kings, Nations, and Gods",
      page:        "167",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Uldenfrost",
      publication: "Kings, Nations, and Gods",
      page:        "170",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Verskone",
      publication: "Skorne Empire",
      page:        "33",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "IKU"
    },
    {
      name:        "Volningrad",
      publication: "Kings, Nations, and Gods",
      page:        "151",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    {
      name:        "Westwatch",
      publication: "Kings, Nations, and Gods",
      page:        "82",
      category:    "Geography",
      subcategory: "City/Fortress",
      game:        "FMF"
    },
    // ##### Geography > Geographic Region ##### \\
    {
      name:        "Arman Moors",
      publication: "Unleashed Core Rules",
      page:        "93",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Blackroot Wood",
      publication: "Unleashed Core Rules",
      page:        "78",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Blindwater",
      publication: "Unleashed Core Rules",
      page:        "93",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Bloodsmeath Marsh",
      publication: "Unleashed Core Rules",
      page:        "94",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Bloodstone Desert",
      publication: "Unleashed Core Rules",
      page:        "72",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Bloodstone Marches",
      publication: "Unleashed Core Rules",
      page:        "73",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Burningfrost Plains",
      publication: "Unleashed Core Rules",
      page:        "96",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Cloutsdown Fen",
      publication: "Unleashed Core Rules",
      page:        "95",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Dragonspine Peaks",
      publication: "Unleashed Core Rules",
      page:        "87",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Erud Hills",
      publication: "Unleashed Core Rules",
      page:        "87",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Fenn Marsh",
      publication: "Unleashed Core Rules",
      page:        "95",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Gallowswood",
      publication: "Unleashed Core Rules",
      page:        "79",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Glimmerwood",
      publication: "Unleashed Core Rules",
      page:        "79",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Greybranch Mountains",
      publication: "Unleashed Core Rules",
      page:        "88",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Helkan's Reward",
      publication: "Skorne Empire",
      page:        "39",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Helmsreach",
      publication: "Unleashed Core Rules",
      page:        "88",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Howling Wastes",
      publication: "Unleashed Core Rules",
      page:        "97",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Kovosk Hills",
      publication: "Unleashed Core Rules",
      page:        "88",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Malgur Forest",
      publication: "Unleashed Core Rules",
      page:        "81",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Mirketh Lake",
      publication: "Skorne Empire",
      page:        "33",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Murata Hills",
      publication: "Unleashed Core Rules",
      page:        "88",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "North Berck Moors",
      publication: "Unleashed Core Rules",
      page:        "96",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Nyschatha Mountains",
      publication: "Unleashed Core Rules",
      page:        "88",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Ocean of Gras",
      publication: "Skorne Empire",
      page:        "35",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Ravenswood",
      publication: "Unleashed Core Rules",
      page:        "81",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Scarleforth Lake",
      publication: "Unleashed Core Rules",
      page:        "74",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Scarsfell Forest",
      publication: "Unleashed Core Rules",
      page:        "82",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Shard Spires",
      publication: "Unleashed Core Rules",
      page:        "89",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Targoss Forest",
      publication: "Unleashed Core Rules",
      page:        "83",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Gnarls",
      publication: "Unleashed Core Rules",
      page:        "79",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Guardians",
      publication: "Unleashed Core Rules",
      page:        "97",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Marck",
      publication: "Unleashed Core Rules",
      page:        "96",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Mokkar",
      publication: "Skorne Empire",
      page:        "33",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Olgunholt",
      publication: "Unleashed Core Rules",
      page:        "81",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Rimeshaws",
      publication: "Unleashed Core Rules",
      page:        "82",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Rotterhorn",
      publication: "Unleashed Core Rules",
      page:        "73",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Sand Narrows",
      publication: "Unleashed Core Rules",
      page:        "97",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Shadoweald",
      publication: "Unleashed Core Rules",
      page:        "83",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "The Stormlands",
      publication: "Unleashed Core Rules",
      page:        "76",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Thelborn",
      publication: "Unleashed Core Rules",
      page:        "97",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Thornwood Forest",
      publication: "Unleashed Core Rules",
      page:        "83",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Trembling Waste",
      publication: "Skorne Empire",
      page:        "37",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Thundercliff Peaks",
      publication: "Unleashed Core Rules",
      page:        "90",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Upper Wyrmwall Mountains",
      publication: "Unleashed Core Rules",
      page:        "91",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Watcher Peaks",
      publication: "Unleashed Core Rules",
      page:        "91",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Widower's Wood",
      publication: "Unleashed Core Rules",
      page:        "85",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Wyrmwall Mountains",
      publication: "Unleashed Core Rules",
      page:        "91",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    {
      name:        "Wythmoor",
      publication: "Unleashed Core Rules",
      page:        "96",
      category:    "Geography",
      subcategory: "Geographic Region",
      game:        "IKU"
    },
    // ##### Individual ##### \\
    {
      name:        "Aleksandra Zerkova",
      publication: "No Quarter #61",
      page:        "37",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Alma Barlow",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Andari Gratza, Tordoran Merchant",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arius, Primarch",
      publication: "Kings, Nations, and Gods",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arkadius, Dr.",
      publication: "No Quarter #51",
      page:        "27",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arland Calster, High Magus",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ayn Vanar, Empress",
      publication: "Kings, Nations, and Gods",
      page:        "124",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Baird Cathor II, King",
      publication: "Kings, Nations, and Gods",
      page:        "201",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Balukar Rageborn",
      publication: "No Quarter #55",
      page:        "88",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bayton Rookwood",
      publication: "Bitter Medicine",
      page:        "4",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bloody Barnabas",
      publication: "No Quarter #45",
      page:        "39",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bolden Rebald, Scout General",
      publication: "Kings, Nations, and Gods",
      page:        "34",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bors Gately, General",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Coleman Stryker, Cygnaran Warcaster",
      publication: "No Quarter #50",
      page:        "39",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Conor Roan, Guard Captain",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dargus Mathern, General",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deyar Glabryn, Archduke",
      publication: "Kings, Nations, and Gods",
      page:        "211",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Directrix, Iron Mother",
      publication: "No Quarter #48",
      page:        "35",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Draegyn, The Black Bastard",
      publication: "No Quarter #60",
      page:        "80",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Drake MacBain, Warcaster",
      publication: "No Quarter #47",
      page:        "39",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Druce Halstead, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "34",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Evelin Turpin, Senior Commander",
      publication: "Kings, Nations, and Gods",
      page:        "74",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Everblight, Dragon",
      publication: "No Quarter #53",
      page:        "43",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Feora, Priestess of the Flame",
      publication: "Kings, Nations, and Gods",
      page:        "336",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fedor Rachlavsky, Obavnik",
      publication: "Kings, Nations, and Gods",
      page:        "174",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fiona the Black",
      publication: "No Quarter #58",
      page:        "47",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Galt Langworth, General",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gavyn Kyle",
      publication: "No Quarter #54",
      page:        "75",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Govan Trent, Navarch",
      publication: "Kings, Nations, and Gods",
      page:        "30",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gregore Delryv IV, Duke",
      publication: "Kings, Nations, and Gods",
      page:        "221",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gullin Oakbreaker",
      publication: "Fridays Unleashed 3/20/2015",
      page:        "1",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gunnbjorn, Captain",
      publication: "No Quarter #43",
      page:        "53",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gurvaldt Irusk, Supreme Kommandant",
      publication: "Kings, Nations, and Gods",
      page:        "132",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Harbinger of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "330",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Harlan Mosley, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "76",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Helt Langworth, Aurum Magnus",
      publication: "Kings, Nations, and Gods",
      page:        "299",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Henry Gateu, Dr.",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ilena, the Beast of the North",
      publication: "No Quarter #58",
      page:        "88",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Izabella Mateu, Castellan",
      publication: "Kings, Nations, and Gods",
      page:        "279",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Jarok Shaw, Scrutator Sovereign",
      publication: "Kings, Nations, and Gods",
      page:        "350",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Jasek Donekev, Viscount",
      publication: "Kings, Nations, and Gods",
      page:        "136",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Jeris Gnarlstone",
      publication: "No Quarter #55",
      page:        "91",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Karloff the Relentless, Scrutator",
      publication: "No Quarter #53",
      page:        "75",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Kasparovik, Optifex",
      publication: "No Quarter #53",
      page:        "105",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Knor",
      publication: "Fridays Unleashed 3/27/2015",
      page:        "1",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Leto Raelthorne, King",
      publication: "Kings, Nations, and Gods",
      page:        "21",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Longchops",
      publication: "Fridays Unleashed 2/13/2015",
      page:        "1",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Lorimer Kex, The Mad Arcanist",
      publication: "No Quarter #60",
      page:        "85",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lorio Casini, Leader of the Long Shot Society",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Luan Bray, Thurian Woodsman",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lurk",
      publication: "Fridays Unleashed 3/6/2015",
      page:        "1",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Magda McCallahan, Pirate Captain",
      publication: "No Quarter #54",
      page:        "69",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mhikol Horscze, Premier",
      publication: "Kings, Nations, and Gods",
      page:        "131",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mikael Kreoss, Grand Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "337",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Morrg, Warlord",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "4",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Oleg Strakhov, Kommander",
      publication: "Kings, Nations, and Gods",
      page:        "137",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Olson Turpin, Warmaster General",
      publication: "Kings, Nations, and Gods",
      page:        "29",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Olyado Caetan, Castellan",
      publication: "Kings, Nations, and Gods",
      page:        "284",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rosa Petry, Owner of Petry's Firearms and Supplies",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ruskin Borga, Visgoth",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Quinlan Rathleagh, Earl",
      publication: "Kings, Nations, and Gods",
      page:        "69",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sebastian Nemo, General",
      publication: "Kings, Nations, and Gods",
      page:        "60",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Servath Reznik, High Executioner",
      publication: "No Quarter #57",
      page:        "47",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Seth Alkost, Monster Hunter",
      publication: "No Quarter #60",
      page:        "83",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Severius, Hierarch",
      publication: "Kings, Nations, and Gods",
      page:        "329",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Simonyev Blaustavya, Great Vizier",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Skarre Ravenmane",
      publication: "No Quarter #56",
      page:        "25",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Supreme Aptimus Zaal",
      publication: "No Quarter #62",
      page:        "43",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tara Florys, Long Shot Lieutenant",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Thagrosh",
      publication: "No Quarter #59",
      page:        "73",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Thalen Malvyss (Mage Hunter)",
      publication: "No Quarter #56",
      page:        "104",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Thane Nivin Roan, Ruler of Lhen",
      publication: "No Quarter #56",
      page:        "41",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "The Lord of the Feast",
      publication: "Unleashed Core Rules",
      page:        "13",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "The Old Witch",
      publication: "Unleashed Core Rules",
      page:        "13",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Trenton Bouridor, Grand Paladin",
      publication: "Kings, Nations, and Gods",
      page:        "339",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Valoria Breno, Tordoran Landholder",
      publication: "No Quarter #56",
      page:        "42",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vasily Dmitrilosk, High Obavnik",
      publication: "Kings, Nations, and Gods",
      page:        "173",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vayne di Brascio, Amethyst Rose Gun Mage",
      publication: "No Quarter #52",
      page:        "103",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Victor Pendrake, Professor",
      publication: "Kings, Nations, and Gods",
      page:        "28",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vinter Raelthorne IV",
      publication: "Kings, Nations, and Gods",
      page:        "22",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vinter Raelthorne IV",
      publication: "No Quarter #60",
      page:        "57",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vladislav Abrosim",
      publication: "No Quarter #44",
      page:        "63",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vladislav Abrosim",
      publication: "No Quarter #53",
      page:        "101",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vorath the Exile",
      publication: "No Quarter #62",
      page:        "78",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Vyros Narr, Dawnlord",
      publication: "No Quarter #44",
      page:        "37",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wurmwood, Tree of Fate",
      publication: "No Quarter #49",
      page:        "31",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wurmwood, Tree of Fate",
      publication: "Unleashed Core Rules",
      page:        "14",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Zevanna Agha, Old Witch of Khador",
      publication: "Kings, Nations, and Gods",
      page:        "114",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Zocha the Outcast",
      publication: "Fridays Unleashed 1/23/2105",
      page:        "1",
      category:    "Individual",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Zolor Kurang",
      publication: "No Quarter #57",
      page:        "86",
      category:    "Individual",
      subcategory: "",
      game:        "FMF"
    },
    // ##### Mechanika > Capacitor ##### \\
    {
      name:        "Alchemical Capacitor",
      publication: "Core Rules",
      page:        "282",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Ambient Accumulator",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Arcane Interval Generator",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Arcane Turbine",
      publication: "Core Rules",
      page:        "282",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Arcanodynamic Accumulator",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Clockwork Capacitor",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Parasitic Generator",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Runelock Capacitor",
      publication: "No Quarter #51",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    {
      name:        "Storm Chamber",
      publication: "Core Rules",
      page:        "283",
      category:    "Mechanika",
      subcategory: "Capacitor",
      game:        "FMF"
    },
    // ##### Mechanika > Runeplate ##### \\
    {
      name:        "Accuracy",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Aegis",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Arcane Disruptor",
      publication: "No Quarter #51",
      page:        "34",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Arcane Force",
      publication: "Core Rules",
      page:        "284",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Arcane Warding",
      publication: "No Quarter #51",
      page:        "34",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Backfire",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Balefire",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Blast",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Blessed",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Bond Plate",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Bounding",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Cold",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Compensator",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Corruption",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Detonate",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Disbinder",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Electrocutioner",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Flame",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Fleet",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Fogbank",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Grievous Wounds",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Halo of Fire",
      publication: "Core Rules",
      page:        "285",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Headtaker",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Heightened Strength",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Incendiary",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Light",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Light Eater",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Lockout",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Magnetism",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Mechanikal Seizure",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Natation",
      publication: "No Quarter #51",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Obscuration",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Quicken",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Reciprocity",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Repulsor",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Silencer",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Spell Ward",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Stall",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Steady",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Vitriol",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    {
      name:        "Whiplash",
      publication: "No Quarter #51",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Runeplate",
      game:        "FMF"
    },
    // ##### Mechanika > Mechanikal Weapon ##### \\
    {
      name:        "Andrei's Pistol",
      publication: "No Quarter #53",
      page:        "107",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Charged Spear",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Dominance",
      publication: "Bitter Medicine",
      page:        "30",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Fettershot",
      publication: "No Quarter #47",
      page:        "59",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Final Word (Mechanika Hand Cannon)",
      publication: "Urban Adventure",
      page:        "93",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Northwind",
      publication: "No Quarter #47",
      page:        "61",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Reconciler",
      publication: "No Quarter #47",
      page:        "62",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Storm Glaive",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Trammel Shortarm",
      publication: "No Quarter #47",
      page:        "63",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Tuning Kit",
      publication: "No Quarter #48",
      page:        "70",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    {
      name:        "Tuning Staff",
      publication: "No Quarter #48",
      page:        "71",
      category:    "Mechanika",
      subcategory: "Mechanikal Weapon",
      game:        "FMF"
    },
    // ##### Mechanika > Mechanikal Armor ##### \\
    {
      name:        "Naval Warcaster Armor",
      publication: "Kings, Nations, and Gods",
      page:        "307",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor",
      game:        "FMF"
    },
    {
      name:        "Opifex Armor",
      publication: "No Quarter #48",
      page:        "69",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor",
      game:        "FMF"
    },
    {
      name:        "Warcaster Armor, heavy",
      publication: "Core Rules",
      page:        "290",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor",
      game:        "FMF"
    },
    {
      name:        "Warcaster Armor, light",
      publication: "Core Rules",
      page:        "289",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor",
      game:        "FMF"
    },
    {
      name:        "Warcaster Armor, medium",
      publication: "Core Rules",
      page:        "289",
      category:    "Mechanika",
      subcategory: "Mechanikal Armor",
      game:        "FMF"
    },
    // ##### Mechanika > Ironhead Armor ##### \\
    {
      name:        "Ablative Armor",
      publication: "No Quarter #52",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Amphibious Construction",
      publication: "No Quarter #52",
      page:        "36",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Artillery Mount",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Cargo Crane",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Corrosive Shielding",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Ejection Rig",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Electrical Shielding",
      publication: "No Quarter #52",
      page:        "37",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Failsafes",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Fire Shiedling",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Force Amplifier",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Hardened Case",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Heavy Boiler",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Ironhead Armor",
      publication: "No Quarter #52",
      page:        "35",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Recoil Compensator",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Steam Venting",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Temperature Regulators",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    {
      name:        "Weight Compensators",
      publication: "No Quarter #52",
      page:        "38",
      category:    "Mechanika",
      subcategory: "Ironhead Armor",
      game:        "FMF"
    },
    // ##### Mechanika > Vessel ##### \\
    {
      name:        "Ancestral Guardian",
      publication: "Skorne Empire",
      page:        "101",
      category:    "Mechanika",
      subcategory: "Vessel",
      game:        "IKU"
    },
    {
      name:        "Clockwork Priest Vessel",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Vessel",
      game:        "FMF"
    },
    {
      name:        "Immortal",
      publication: "Skorne Empire",
      page:        "102",
      category:    "Mechanika",
      subcategory: "Vessel",
      game:        "IKU"
    },
    // ##### Mechanika > Clockwork Vessel Upgrade ##### \\
    {
      name:        "Aperture Beam",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Arcane Field",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Circular Vision",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Displacement Field Drive",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Electrical Insulation",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Hardened",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased AGL",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased ARM",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased POI",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased PRW",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased SPD",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Increased STR",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Improved Stability",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    {
      name:        "Optical Array",
      publication: "No Quarter #48",
      page:        "68",
      category:    "Mechanika",
      subcategory: "Clockwork Vessel Upgrade",
      game:        "FMF"
    },
    // ##### Mechanika > Mechanikal Device ##### \\
    {
      name:        "Akinetic Javelin",
      publication: "No Quarter #50",
      page:        "48",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Arcantrik Scope",
      publication: "Core Rules",
      page:        "286",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Deprecator",
      publication: "No Quarter #50",
      page:        "49",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Farsight Googles",
      publication: "Core Rules",
      page:        "287",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Mechanikal Prosthetic, Arm",
      publication: "Core Rules",
      page:        "287",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Mechanikal Prosthetic, Eye",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Mechanikal Prosthetic, Hand",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Mechanikal Prosthetic, Leg",
      publication: "Core Rules",
      page:        "288",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Neutralizer",
      publication: "No Quarter #50",
      page:        "51",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    {
      name:        "Tempest Shield",
      publication: "No Quarter #50",
      page:        "52",
      category:    "Mechanika",
      subcategory: "Mechanikal Device",
      game:        "FMF"
    },
    // ##### Monsternomicon > Deathly Burdens ##### \\
    {
      name:        "Afraid",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Bane",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Barriers",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Bound",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Fragmented Mind",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Mad",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Obsession",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Semi-corporeal",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Sunlight Powerlessness",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    {
      name:        "Temporal Existence",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Burden",
      game:        "FMF"
    },
    // ##### Monsternomicon > Deathly Endowments ##### \\
    {
      name:        "Black Gifts",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Black Harvest",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Blind Fear",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Corpse Lord",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Corrosive Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Dark Influence",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Dark Resurrection",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Disruptor",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Dominator",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Dread Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Ectoplasmic Field",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Eldritch Touch",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Fear Master",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Fear Monger",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Ghost in the Machine",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Grave Chill",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Grave Resilience",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Grave Summons",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Keening Howl",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Lamentations of the Grave",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Malignant Presence",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Phase",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Possession",
      publication: "Monsternomicon",
      page:        "78",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Power Drain",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Psychokinesis",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Regeneration",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Shroud of Death",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Silence",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Spectral Illusion",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Spectral Talons",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Speed of the Dead",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    {
      name:        "Unholy Genesis",
      publication: "Monsternomicon",
      page:        "79",
      category:    "Monsternomicon",
      subcategory: "Deathly Endowment",
      game:        "FMF"
    },
    // ##### Monsternomicon > Monster/Opponent ##### \\
    {
      name:        "Animantrax",
      publication: "Skorne Empire",
      page:        "120",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Aradus",
      publication: "Skorne Empire",
      page:        "122",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Argus, Common",
      publication: "Monsternomicon",
      page:        "6",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Argus, Common",
      publication: "Unleashed Core Rules",
      page:        "354",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Argus, Winter",
      publication: "Unleashed Core Rules",
      page:        "358",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Argus Moonhound",
      publication: "Unleashed Core Rules",
      page:        "356",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Basilisk",
      publication: "Skorne Empire",
      page:        "124",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Blackhide",
      publication: "Unleashed Core Rules",
      page:        "360",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Bogrin",
      publication: "Unleashed Core Rules",
      page:        "362",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Boneswarm",
      publication: "Unleashed Core Rules",
      page:        "364",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Brute Boar",
      publication: "Unleashed Core Rules",
      page:        "366",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Burrow-Mawg",
      publication: "Monsternomicon",
      page:        "8",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Carnivean",
      publication: "No Quarter #60",
      page:        "116",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Cataphract Beetle",
      publication: "Monsternomicon",
      page:        "10",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx",
      publication: "Monsternomicon",
      page:        "12",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Drudge",
      publication: "Monsternomicon",
      page:        "16",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Monstrosity",
      publication: "Monsternomicon",
      page:        "18",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Croak",
      publication: "Monsternomicon",
      page:        "20",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Croak Raider",
      publication: "No Quarter #62",
      page:        "87",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Crypt Spider",
      publication: "Monsternomicon",
      page:        "22",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cyclops",
      publication: "Skorne Empire",
      page:        "126",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Deathless",
      publication: "Monsternomicon",
      page:        "24",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Desert Hydra",
      publication: "Skorne Empire",
      page:        "128",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Devil Rat",
      publication: "Monsternomicon",
      page:        "26",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dracodile",
      publication: "Monsternomicon",
      page:        "28",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dragonspawn",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dragonspawn Small",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dragonspawn Medium",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dragonspawn Large",
      publication: "Monsternomicon",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Drake, Fog",
      publication: "Unleashed Core Rules",
      page:        "368",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Drake, Frost",
      publication: "Unleashed Core Rules",
      page:        "370",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Drake, Deep",
      publication: "Skorne Empire",
      page:        "130",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Drake, Sea",
      publication: "Unleashed Core Rules",
      page:        "372",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Dread",
      publication: "Monsternomicon",
      page:        "34",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dregg",
      publication: "Monsternomicon",
      page:        "36",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Duelist Wrath",
      publication: "No Quarter #59",
      page:        "54",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dune Prowler",
      publication: "Skorne Empire",
      page:        "132",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Duskwolf",
      publication: "Monsternomicon",
      page:        "38",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Eldritch",
      publication: "Monsternomicon",
      page:        "40",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Entombed",
      publication: "No Quarter #57",
      page:        "84",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Excruciator",
      publication: "Monsternomicon",
      page:        "42",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Farrow Brigands",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "31",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Feralgeist",
      publication: "Unleashed Core Rules",
      page:        "374",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Gallows Grove",
      publication: "Unleashed Core Rules",
      page:        "376",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Genzoul",
      publication: "Skorne Empire",
      page:        "134",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Giant Hog",
      publication: "Unleashed Core Rules",
      page:        "378",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Gorax",
      publication: "Monsternomicon",
      page:        "44",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gorax",
      publication: "Unleashed Core Rules",
      page:        "380",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Griffon, Rotterhorn",
      publication: "Unleashed Core Rules",
      page:        "382",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Griffon, Scarsfell",
      publication: "Unleashed Core Rules",
      page:        "384",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Grymkin, Gremlin",
      publication: "Monsternomicon",
      page:        "46",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Hollowed",
      publication: "No Quarter #51",
      page:        "56",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Hollowed",
      publication: "Monsternomicon",
      page:        "48",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Hornbeak Trask",
      publication: "Monsternomicon",
      page:        "50",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Incubus",
      publication: "No Quarter #61",
      page:        "102",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Iron Maiden",
      publication: "No Quarter #51",
      page:        "58",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Iron Maiden",
      publication: "Monsternomicon",
      page:        "52",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ironback Spitter",
      publication: "Unleashed Core Rules",
      page:        "386",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Kovaas",
      publication: "Skorne Empire",
      page:        "136",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Lethean",
      publication: "Monsternomicon",
      page:        "54",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Mammoth",
      publication: "Skorne Empire",
      page:        "138",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Pistol Wraith",
      publication: "Monsternomicon",
      page:        "56",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Raek",
      publication: "No Quarter #60",
      page:        "114",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Raevhan Buffalo",
      publication: "Monsternomicon",
      page:        "58",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Razor Boar",
      publication: "Unleashed Core Rules",
      page:        "388",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Razor Boar",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "28",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Razor Worm",
      publication: "Skorne Empire",
      page:        "140",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Razorbat",
      publication: "Monsternomicon",
      page:        "60",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Reptile Hound",
      publication: "Skorne Empire",
      page:        "142",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Rhinodon",
      publication: "Skorne Empire",
      page:        "144",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Riven",
      publication: "Monsternomicon",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Satyr, Gnarlhorn",
      publication: "Unleashed Core Rules",
      page:        "390",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Satyr, Rip Horn",
      publication: "Unleashed Core Rules",
      page:        "392",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Satyr, Shadowhorn",
      publication: "Unleashed Core Rules",
      page:        "394",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Scylla Flock",
      publication: "Monsternomicon",
      page:        "64",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Sepulchral Lurker",
      publication: "Monsternomicon",
      page:        "66",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Shade",
      publication: "Monsternomicon",
      page:        "68",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Shaft Wight",
      publication: "Monsternomicon",
      page:        "70",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Shaft Wight",
      publication: "No Quarter #51",
      page:        "60",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Shredder",
      publication: "No Quarter #60",
      page:        "112",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Skigg",
      publication: "Monsternomicon",
      page:        "72",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Slaughterhousers",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "30",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Snapper",
      publication: "Unleashed Core Rules",
      page:        "396",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Soul Stalker (Infernal)",
      publication: "Monsternomicon",
      page:        "74",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Specter",
      publication: "Monsternomicon",
      page:        "76",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Spell Martyr",
      publication: "No Quarter #62",
      page:        "104",
      category:    "Equipment",
      subcategory: "Mount",
      game:        "IKU"
    },
    {
      name:        "Spine Ripper",
      publication: "Unleashed Core Rules",
      page:        "398",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Swamp Horror",
      publication: "Unleashed Core Rules",
      page:        "400",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Swamp Shambler",
      publication: "Unleashed Core Rules",
      page:        "402",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Tatzylwurm, Black",
      publication: "Monsternomicon",
      page:        "80",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tatzylwurm, Painted",
      publication: "Unleashed Core Rules",
      page:        "404",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Tatzylwurm, Pale",
      publication: "Unleashed Core Rules",
      page:        "406",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Tatzylwurm, Viper",
      publication: "Unleashed Core Rules",
      page:        "408",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Thornwood Mauler",
      publication: "Unleashed Core Rules",
      page:        "410",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Throatfish",
      publication: "No Quarter #62",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Titan",
      publication: "Skorne Empire",
      page:        "146",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Totem Hunter",
      publication: "Monsternomicon",
      page:        "82",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll Whelp",
      publication: "Monsternomicon",
      page:        "84",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll Whelp",
      publication: "Unleashed Core Rules",
      page:        "428",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Common",
      publication: "Monsternomicon",
      page:        "86",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll, Common",
      publication: "Unleashed Core Rules",
      page:        "412",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Dire",
      publication: "Monsternomicon",
      page:        "88",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll, Dire",
      publication: "Unleashed Core Rules",
      page:        "414",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Earthborn Dire",
      publication: "Unleashed Core Rules",
      page:        "416",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Night",
      publication: "Unleashed Core Rules",
      page:        "418",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Pyre",
      publication: "Unleashed Core Rules",
      page:        "420",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Slag",
      publication: "Unleashed Core Rules",
      page:        "422",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Storm",
      publication: "Unleashed Core Rules",
      page:        "424",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Swamp",
      publication: "Unleashed Core Rules",
      page:        "426",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Troll, Winter",
      publication: "Unleashed Core Rules",
      page:        "430",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Vektiss",
      publication: "Monsternomicon",
      page:        "90",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Void Spirit",
      publication: "Skorne Empire",
      page:        "148",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Warpwolf, Feral",
      publication: "Unleashed Core Rules",
      page:        "430",
      category:    "Monsternomicon",
      subcategory: "Monster/Opponent",
      game:        "IKU"
    },
    // ##### Monsternomicon > Spawn Gifts ##### \\
    {
      name:        "Agile",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Ash and Embers",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Barbed Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Blackscale",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Blight Aura",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Blood Thirst",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Burning Acid",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Camouflage Coloration",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Carapace",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Climber",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Club Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Corrosive Blood",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Deathdust",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Fleet",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Hellshroud",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Impervious Flesh",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Long Neck",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Lurker",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Muscular",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Nimble",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Pathfinder",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Ravenous",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Regeneration",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Ripping Jaws",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Robust",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Roiling Death",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Ruinbringer",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Searing Aura",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Seether",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Serpentine",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Snacking",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Spines",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Tail",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Talons",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Tusks",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Venomous",
      publication: "Monsternomicon",
      page:        "32",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    {
      name:        "Wyrmfire",
      publication: "Monsternomicon",
      page:        "33",
      category:    "Monsternomicon",
      subcategory: "Spawn Gift",
      game:        "FMF"
    },
    // ##### Monsternomicon > Template ##### \\
    {
      name:        "Adapted (Environment)",
      publication: "Monsternomicon",
      page:        "92",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Adapted (Environment)",
      publication: "Unleashed Core Rules",
      page:        "458",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Alert",
      publication: "Unleashed Core Rules",
      page:        "459",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Alpha",
      publication: "Monsternomicon",
      page:        "92",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Alpha",
      publication: "Unleashed Core Rules",
      page:        "459",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Aquatic",
      publication: "Unleashed Core Rules",
      page:        "459",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Backbiter",
      publication: "Unleashed Core Rules",
      page:        "459",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Blighted",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Blighted",
      publication: "Unleashed Core Rules",
      page:        "459",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Bogrin Trapper",
      publication: "Unleashed Core Rules",
      page:        "460",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Bogrin War Chief",
      publication: "Unleashed Core Rules",
      page:        "460",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Cephalyx Monstrosity Subduer",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Monstrosity Warden",
      publication: "Monsternomicon",
      page:        "93",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Monstrosity Wrecker",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Chieftain",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Chieftain",
      publication: "Unleashed Core Rules",
      page:        "460",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Croak Conjoined Twin",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Degenerate Warpwolf",
      publication: "Unleashed Core Rules",
      page:        "460",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Devil Rat Matron",
      publication: "Monsternomicon",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Diseased",
      publication: "Unleashed Core Rules",
      page:        "461",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Dregg Pain Monger",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Dregg Raid Master",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Duskwolf Male",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Gluttonous",
      publication: "Unleashed Core Rules",
      page:        "461",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Graveswarm",
      publication: "Unleashed Core Rules",
      page:        "461",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Hunter",
      publication: "Monsternomicon",
      page:        "95",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Hunter",
      publication: "Unleashed Core Rules",
      page:        "462",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Ill-Tempered",
      publication: "Unleashed Core Rules",
      page:        "462",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Juvenile",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Juvenile",
      publication: "Unleashed Core Rules",
      page:        "462",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Large Specimen",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Large Specimen",
      publication: "No Quarter #51",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Large Specimen",
      publication: "Unleashed Core Rules",
      page:        "462",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Lone Wolf",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Lone Wolf",
      publication: "Unleashed Core Rules",
      page:        "462",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Man-Eater",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Man-Eater",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Nesting Drake",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Nimble",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Pack Hunter",
      publication: "Monsternomicon",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Pack Hunter",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Pestilent Hollowed",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Pestilent Hollowed",
      publication: "No Quarter #51",
      page:        "62",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Pistol Wraith Spellslinger",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Predator",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Predator",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Predator",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Protector",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Protector",
      publication: "Unleashed Core Rules",
      page:        "463",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Razorbat King",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Resilient",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Runt",
      publication: "Monsternomicon",
      page:        "98",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Runt",
      publication: "Unleashed Core Rules",
      page:        "464",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Satyr Elder",
      publication: "Unleashed Core Rules",
      page:        "464",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Skittish",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Skittish",
      publication: "Unleashed Core Rules",
      page:        "464",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Spector, Epic",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Specter, Veteran",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Starving",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Starving",
      publication: "Unleashed Core Rules",
      page:        "464",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Stealthy",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Stealthy",
      publication: "Unleashed Core Rules",
      page:        "464",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Swarm",
      publication: "Monsternomicon",
      page:        "99",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Swarm",
      publication: "Unleashed Core Rules",
      page:        "465",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Swift",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Swift",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Swift",
      publication: "Unleashed Core Rules",
      page:        "465",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Trained",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Trained",
      publication: "Unleashed Core Rules",
      page:        "465",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "IKU"
    },
    {
      name:        "Vektiss Queen",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Wild Iron Maiden",
      publication: "Monsternomicon",
      page:        "100",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    {
      name:        "Wild Iron Maiden",
      publication: "No Quarter #51",
      page:        "63",
      category:    "Monsternomicon",
      subcategory: "Template",
      game:        "FMF"
    },
    // ##### Monster > Monster/Opponent ##### \\
    {
      name:        "Alpha Burrow-Mawg",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Argus",
      publication: "No Quarter #47",
      page:        "52",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Black Ogrun Boarder",
      publication: "Full Metal Fridays 1/1/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Blackclad Druid",
      publication: "Bad Moon Rising",
      page:        "70",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Blighted Nyss Archer",
      publication: "Core Rules Bestiary Expanded",
      page:        "2",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Blighted Nyss Sorcerer",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Blighted Nyss Strider",
      publication: "Core Rules Bestiary Expanded",
      page:        "2",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Blighted Nyss Swordsman",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bloat Thrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "4",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bog Trog Ambusher",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bog Trog Angler",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        'Bog Trog "Big Fish"',
      publication: "No Quarter #43",
      page:        "45",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bog Trog Mist Speaker",
      publication: "No Quarter #43",
      page:        "44",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bowden's Guards",
      publication: "No Quarter #44",
      page:        "68",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Brute Thrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Burrow-Mawg",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cataphract Beetle Drone",
      publication: "No Quarter #44",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cataphract Beetle Soldier",
      publication: "No Quarter #44",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Drudge",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Mind Slaver",
      publication: "Core Rules Bestiary Expanded",
      page:        "5",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Cephalyx Overlord",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Crucible Guards (Duelist/Man-at-Arms)",
      publication: "Fools Rush In",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Crypt Spider",
      publication: "No Quarter #43",
      page:        "46",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Crypt Spider",
      publication: "No Quarter #57",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Deck Hands",
      publication: "Fools Rush In",
      page:        "17",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Devil Rat Matron",
      publication: "No Quarter #46",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Devil Rat Swarm",
      publication: "No Quarter #46",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Devourer Cultist",
      publication: "Bad Moon Rising",
      page:        "69",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dire Troll",
      publication: "No Quarter #47",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dread Tomb Guard",
      publication: "Full Metal Fridays 1/3/4",
      page:        "4",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dregg Pain Monger",
      publication: "Core Rules",
      page:        "342",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dregg Raid Master",
      publication: "Core Rules",
      page:        "342",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Dregg Scavenger",
      publication: "Core Rules",
      page:        "341",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Duskwolf Female",
      publication: "No Quarter #44",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Duskwolf Male",
      publication: "No Quarter #44",
      page:        "59",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Elimination Servitor",
      publication: "No Quarter #53",
      page:        "105",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Farrow Brigand",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Farrow Shaman",
      publication: "Core Rules",
      page:        "344",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Farrow Slaughterhouser",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Farrow Warlord",
      publication: "Core Rules",
      page:        "343",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Feral Argus",
      publication: "Bad Moon Rising",
      page:        "71",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Fort Bolovan Winter Guard",
      publication: "Bad Moon Rising",
      page:        "73",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gatorman Bokor",
      publication: "No Quarter #44",
      page:        "61",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gatorman Chieftain",
      publication: "No Quarter #44",
      page:        "61",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gatorman Warrior",
      publication: "No Quarter #44",
      page:        "60",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gorax",
      publication: "No Quarter #47",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gravedigger Thugs",
      publication: "Urban Adventure",
      page:        "54",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Guards of Fort Veknost",
      publication: "No Quarter #57",
      page:        "101",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "House Kabalis Commander",
      publication: "No Quarter #54",
      page:        "109",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "House Kabalis Guard",
      publication: "No Quarter #54",
      page:        "109",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "House Kabalis Mercenary",
      publication: "No Quarter #54",
      page:        "108",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Arcanist",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Duelist",
      publication: "Full Metal Fridays 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Thief",
      publication: "Core Rules",
      page:        "344",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Thief",
      publication: "Full Metal Fridays 1/4/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Thug",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Thug",
      publication: "Full Metal Fridays 1/4/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Watchman 1",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Human Watchman 2",
      publication: "Core Rules",
      page:        "345",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Machine Wrath",
      publication: "Core Rules Bestiary Expanded",
      page:        "7",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Mechanithrall",
      publication: "Core Rules Bestiary Expanded",
      page:        "8",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ogrun Bodyguard",
      publication: "Core Rules Bestiary Expanded",
      page:        "9",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ogrun Marauder",
      publication: "Core Rules Bestiary Expanded",
      page:        "9",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Paulson Street Rover Gangsters",
      publication: "Urban Adventure",
      page:        "82",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Pistol Wrath",
      publication: "No Quarter #43",
      page:        "50",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Progeny",
      publication: "Path of Devastation Season 3",
      page:        "29",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Radiz Warrior",
      publication: "Path of Devastation Season 2",
      page:        "26",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Raevhan Buffalo",
      publication: "No Quarter #46",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Razorbat King",
      publication: "No Quarter #46",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Razorbat Swarm",
      publication: "No Quarter #46",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Reeve Hunter",
      publication: "Bad Moon Rising",
      page:        "68",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Reeves of Orboros",
      publication: "Bad Moon Rising",
      page:        "67",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Risen Thrall",
      publication: "Core Rules",
      page:        "346",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Risen Thrall",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Riven",
      publication: "No Quarter #45",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Robbers",
      publication: "No Quarter #53",
      page:        "103",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Satyxis Blood Witch",
      publication: "Core Rules Bestiary Expanded",
      page:        "11",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Satyxis Raider",
      publication: "Full Metal Fridays 1/1/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Satyxis Raider",
      publication: "Core Rules Bestiary Expanded",
      page:        "10",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Satyxis Raider Captain",
      publication: "Core Rules Bestiary Expanded",
      page:        "10",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Sewer Gatorman Brood Mother",
      publication: "Urban Adventure",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Sewer Gatorman Nestling",
      publication: "Urban Adventure",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Sewer Gatorman Warrior",
      publication: "Urban Adventure",
      page:        "58",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Shade",
      publication: "No Quarter #45",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skigg",
      publication: "Urban Adventure",
      page:        "63",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skigg Alpha",
      publication: "Urban Adventure",
      page:        "63",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skorne Mortitheurge",
      publication: "Core Rules Bestiary Expanded",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skorne Praetorian",
      publication: "Core Rules Bestiary Expanded",
      page:        "12",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skorne Tyrant",
      publication: "Core Rules Bestiary Expanded",
      page:        "13",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Skorne Venator",
      publication: "Core Rules Bestiary Expanded",
      page:        "12",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Soulhunter",
      publication: "Core Rules Bestiary Expanded",
      page:        "14",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Specter",
      publication: "No Quarter #45",
      page:        "55",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tarn Thrullgs",
      publication: "No Quarter #55",
      page:        "105",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thamarite Guard",
      publication: "Urban Adventure",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thamarite Acolyte",
      publication: "Urban Adventure",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tharn Ravager",
      publication: "Core Rules Bestiary Expanded",
      page:        "15",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tharn Ravager Chieftain",
      publication: "Core Rules Bestiary Expanded",
      page:        "16",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tharn Witch",
      publication: "Core Rules Bestiary Expanded",
      page:        "16",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thrall Guard",
      publication: "No Quarter #56",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thrall Warrior",
      publication: "Core Rules",
      page:        "346",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thrullg Warrior",
      publication: "Core Rules",
      page:        "347",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Totem Hunter",
      publication: "Core Rules Bestiary Expanded",
      page:        "17",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tower Ambusher",
      publication: "No Quarter #55",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tower Guard",
      publication: "No Quarter #55",
      page:        "99",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tower Guard",
      publication: "No Quarter #56",
      page:        "95",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll",
      publication: "No Quarter #47",
      page:        "56",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Troll Whelp",
      publication: "No Quarter #47",
      page:        "57",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Trollkin Champion",
      publication: "Core Rules Bestiary Expanded",
      page:        "19",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Trollkin Fell Caller",
      publication: "Core Rules Bestiary Expanded",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Trollkin Warrior",
      publication: "Core Rules Bestiary Expanded",
      page:        "18",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Twin Bridge Blade Knifer",
      publication: "Urban Adventure",
      page:        "88",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Unkillable",
      publication: "No Quarter #56",
      page:        "101",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Warpwolf, Feral",
      publication: "Bad Moon Rising",
      page:        "74",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Winter Argus",
      publication: "No Quarter #47",
      page:        "53",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Wolves of Orboros",
      publication: "Bad Moon Rising",
      page:        "66",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Bruiser",
      publication: "Bitter Medicine",
      page:        "49",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Rider",
      publication: "Bitter Medicine",
      page:        "50",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Veteran",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Monster",
      subcategory: "Monster/Opponent",
      game:        "FMF"
    },
    // ##### Monster > Solo Monster/Opponent ##### \\
    {
      name:        "Abrosim, the Man",
      publication: "No Quarter #58",
      page:        "107",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Abrosim, the Monster",
      publication: "No Quarter #58",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Amadaz Volovsky",
      publication: "Bad Moon Rising",
      page:        "60",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Anacia Myetrova",
      publication: "Bad Moon Rising",
      page:        "65",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Antone Pytorevich, Rifleman",
      publication: "No Quarter #57",
      page:        "95",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bairn Cammol (Skilled Human Duelist)",
      publication: "Urban Adventure",
      page:        "83",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Balukar Rageborn",
      publication: "No Quarter #55",
      page:        "90",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bayton Rookwood",
      publication: "Bitter Medicine",
      page:        "45",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bevoul",
      publication: "Path of Devastation Season 2",
      page:        "26",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Borbor Gulk",
      publication: "Bad Moon Rising",
      page:        "63",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Bowden Haightly (Posessed Talon Warjack)",
      publication: "No Quarter #44",
      page:        "70",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Brak Seabreaker (Mighty Ogrun Warrior)",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Brun Whiddle",
      publication: "Bitter Medicine",
      page:        "47",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Captain Meara Brinebight",
      publication: "Full Metal Fridays 1/1/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Darvon Shanke",
      publication: "Bitter Medicine",
      page:        "46",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Davon Barlett, Man-at-Arms",
      publication: "No Quarter #57",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Denys Manet",
      publication: "Full Metal Fridays 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Draegyn",
      publication: "No Quarter #60",
      page:        "82",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Errigan (Specter)",
      publication: "No Quarter #47",
      page:        "61",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Fynne di Vinianni",
      publication: "Full Metal Fridays 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gallo Morado, the Crimson Man",
      publication: "No Quarter #55",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gallo Morado, the Crimson Thrall",
      publication: "No Quarter #58",
      page:        "103",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Garrow, Dead",
      publication: "No Quarter #58",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Garrow, Warcaster",
      publication: "No Quarter #57",
      page:        "94",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gavriel di Maro (Veteran Human Cutthroat/Investigator)",
      publication: "Urban Adventure",
      page:        "61",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Gerrock Scarmaker, Ranger",
      publication: "No Quarter #57",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Grot (Skilled Gobber Cutthroat/Field Mechanik)",
      publication: "Urban Adventure",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ilena, Beast of the North",
      publication: "No Quarter #58",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Jeris Gnarlstone",
      publication: "No Quarter #55",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Jig (Prospector Laborjack)",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Karloff the Relentless, Scrutator",
      publication: "No Quarter #53",
      page:        "77",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Knor",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "29",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Kroll Berok (Mighty Ogrun Pugilist)",
      publication: "Urban Adventure",
      page:        "83",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Kwaak, Croak Sorcerer",
      publication: "No Quarter #62",
      page:        "96",
      category:    "Monsternomicon",
      subcategory: "Solo Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Liyr",
      publication: "Bad Moon Rising",
      page:        "59",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Lorimer Kex",
      publication: "No Quarter #60",
      page:        "87",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Loyalist Guards",
      publication: "No Quarter #58",
      page:        "106",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        'Luka "Left Fist" Istori',
      publication: "Full Metal Fridays 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Magda McCallahan (Pirate Captain)",
      publication: "No Quarter #54",
      page:        "71",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Makar Iokav",
      publication: "No Quarter #54",
      page:        "110",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Makar Iokav, Wraith",
      publication: "No Quarter #58",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Martinho Cardozo",
      publication: "Path of Devastation Season 2",
      page:        "27",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Mirek Orlov",
      publication: "Full Metal Fridays 1/5/4",
      page:        "5",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Morna Petrork",
      publication: "Full Metal Fridays 1/4/4",
      page:        "2",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Morrg, Warlord",
      publication: "Unleashed Adventure Kit Scenario",
      page:        "27",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Myrus Rathborne",
      publication: "No Quarter #59",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Myrus Rathborne (Gifted Human Fire Sorcerer)",
      publication: "Urban Adventure",
      page:        "55",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Nerys",
      publication: "Bad Moon Rising",
      page:        "64",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ol'Mudfoot",
      publication: "Path of Devastation Season 3",
      page:        "28",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Orran Vaine",
      publication: "No Quarter #59",
      page:        "100",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Orran Vaine (Skilled Human Rifleman)",
      publication: "Urban Adventure",
      page:        "54",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Pavor Rostifenko",
      publication: "No Quarter #58",
      page:        "102",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Qurak Swampfather, Croak Chieftain",
      publication: "No Quarter #62",
      page:        "94",
      category:    "Monsternomicon",
      subcategory: "Solo Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Rina Zavor, Bounty Hunter",
      publication: "No Quarter #57",
      page:        "95",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Ruus Kuragin, Kapitan",
      publication: "Bad Moon Rising",
      page:        "58",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Seth Alkot",
      publication: "No Quarter #60",
      page:        "84",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Sivto the Vild, Necromancer (Human Will Weaver)",
      publication: "Fools Rush In",
      page:        "18",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Stazi Vietzen",
      publication: "Bad Moon Rising",
      page:        "62",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Stevan Igoris",
      publication: "No Quarter #54",
      page:        "102",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tantock Meryl (Gifted Human Spy/Thamarite Advocate)",
      publication: "Urban Adventure",
      page:        "96",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Taza Kozloz",
      publication: "Bad Moon Rising",
      page:        "61",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Thalen Malvyss (Mage Hunter)",
      publication: "No Quarter #56",
      page:        "107",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Tobin Marconi",
      publication: "No Quarter #56",
      page:        "101",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Valeria Karpov, Steelsoul Protector",
      publication: "No Quarter #53",
      page:        "108",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Vasa, Blackclad Overseer",
      publication: "Bad Moon Rising",
      page:        "72",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Vayne di Brascio (Amethyst Rose Gun Mage)",
      publication: "No Quarter #52",
      page:        "105",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Vessos Ironjaw",
      publication: "No Quarter #59",
      page:        "100",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Vessos Ironjaw (Mighty Trollkin Soldier)",
      publication: "Urban Adventure",
      page:        "55",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Victor di Cavour (Specter)",
      publication: "Full Metal Fridays 1/2/4",
      page:        "3",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Vorath the Exile",
      publication: "No Quarter #62",
      page:        "81",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "IKU"
    },
    {
      name:        "Willem 'Three-Fingers' Abershawe",
      publication: "Bitter Medicine",
      page:        "48",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Zabrak Stoneshield (Mighty Trollkin Duelist)",
      publication: "Urban Adventure",
      page:        "91",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    {
      name:        "Zolor Kurang",
      publication: "No Quarter #57",
      page:        "89",
      category:    "Monster",
      subcategory: "Solo Monster/Opponent",
      game:        "FMF"
    },
    // ##### Organization > Criminal Enterprise ##### \\
    {
      name:        "Bratyas",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Caspian Cortex Smugglers",
      publication: "Urban Adventure",
      page:        "76",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Five Fingers Transporters",
      publication: "Urban Adventure",
      page:        "77",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Grand Stevedore Union",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Korsk Stanzynat Mustyn",
      publication: "Urban Adventure",
      page:        "78",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Order of the Rat",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Red Kings",
      publication: "Full Metal Fridays 1/4/3",
      page:        "1",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Riverrose Syndicate",
      publication: "Urban Adventure",
      page:        "40",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "The Black Triangle",
      publication: "No Quarter #59",
      page:        "97",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Wake Isles Syndicate",
      publication: "Urban Adventure",
      page:        "41",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    {
      name:        "Wyrmwall Riders",
      publication: "Bitter Medicine",
      page:        "5",
      category:    "Organization",
      subcategory: "Criminal Enterprise",
      game:        "FMF"
    },
    // ##### Organization > Military Organization ##### \\
    {
      name:        "Crucible Guard",
      publication: "Kings, Nations, and Gods",
      page:        "300",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Emerald Watch",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Fingers Watch",
      publication: "Urban Adventure",
      page:        "38",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Gnarls Kriels",
      publication: "Unleashed Core Rules",
      page:        "46",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "Jenner's Arsenal",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Knightly Order of Precursors",
      publication: "No Quarter #55",
      page:        "60",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Knights Exemplar",
      publication: "Kings, Nations, and Gods",
      page:        "337",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Knights of the Highgate Vigil",
      publication: "Kings, Nations, and Gods",
      page:        "72",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Llaelese Resistance",
      publication: "Core Rules",
      page:        "54",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Llaelese Resistance",
      publication: "Kings, Nations, and Gods",
      page:        "221",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Loyal Order of the Amethyst Rose",
      publication: "Kings, Nations, and Gods",
      page:        "223",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Northern Crusade",
      publication: "Kings, Nations, and Gods",
      page:        "334",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Order of the Fist",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Paladins of the Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "338",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Protectors of the Temple",
      publication: "No Quarter #52",
      page:        "20",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Red Shields",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Royal High Guard",
      publication: "Kings, Nations, and Gods",
      page:        "213",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Scarsfell Kriels",
      publication: "Unleashed Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "Steelheads",
      publication: "No Quarter #47",
      page:        "26",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Sons of Thuria",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Storm Divison",
      publication: "Kings, Nations, and Gods",
      page:        "32",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "Temple Flameguard",
      publication: "Kings, Nations, and Gods",
      page:        "334",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "The Blindwater Congregation",
      publication: "Unleashed Core Rules",
      page:        "57",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "The Legion of Everblight",
      publication: "Unleashed Core Rules",
      page:        "90",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "The Thornfall Alliance",
      publication: "Unleashed Core Rules",
      page:        "53",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "The United Kriels",
      publication: "No Quarter #56",
      page:        "76",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    {
      name:        "United Kriels",
      publication: "Unleashed Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "IKU"
    },
    {
      name:        "Unorthodox Engagement Teams",
      publication: "Kings, Nations, and Gods",
      page:        "37",
      category:    "Organization",
      subcategory: "Military Organization",
      game:        "FMF"
    },
    // ##### Organization > Enterprise ##### \\
    {
      name:        "Blaustavya Shipping & Rail",
      publication: "Core Rules",
      page:        "74",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Blaustavya Shipping & Rail",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "House Mateu",
      publication: "Core Rules",
      page:        "57",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "House Mateu",
      publication: "Kings, Nations, and Gods",
      page:        "296",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Kayazy",
      publication: "Kings, Nations, and Gods",
      page:        "127",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Mercarian League",
      publication: "Core Rules",
      page:        "75",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Mercarian League",
      publication: "Kings, Nations, and Gods",
      page:        "85",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Steam & Iron Workers Union",
      publication: "Kings, Nations, and Gods",
      page:        "86",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Steelwater Surveying",
      publication: "No Quarter #46",
      page:        "63",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    {
      name:        "Wexmere Lumber and Copper Company",
      publication: "No Quarter #46",
      page:        "64",
      category:    "Organization",
      subcategory: "Enterprise",
      game:        "FMF"
    },
    // ##### Organization > Arcane Order ##### \\
    {
      name:        "Fraternal Order of Wizardry",
      publication: "Core Rules",
      page:        "83",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Fraternal Order of Wizardry",
      publication: "Kings, Nations, and Gods",
      page:        "83",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Greylords Covenant",
      publication: "Kings, Nations, and Gods",
      page:        "137",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Greylords Covenant",
      publication: "Kings, Nations, and Gods",
      page:        "171",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Order of the Golden Crucible",
      publication: "Core Rules",
      page:        "84",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Order of the Golden Crucible",
      publication: "Kings, Nations, and Gods",
      page:        "297",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Prikaz Chancellery",
      publication: "Kings, Nations, and Gods",
      page:        "174",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    {
      name:        "Strangelight Workshop",
      publication: "Kings, Nations, and Gods",
      page:        "78",
      category:    "Organization",
      subcategory: "Arcane Order",
      game:        "FMF"
    },
    // ##### Organization > Religious Group ##### \\
    {
      name:        "Blackclads of the Circle Orboros",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Chapel of the Dark Twin",
      publication: "Urban Adventure",
      page:        "42",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Church of the Great Fathers",
      publication: "Core Rules",
      page:        "103",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Church of Morrow",
      publication: "Core Rules",
      page:        "89",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Church of Morrow, Khador",
      publication: "Kings, Nations, and Gods",
      page:        "145",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Council",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cult of Cyriss",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cult of Cyriss (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cult of the Despoiler",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cult of Toruk (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cult of the Devourer (Five Fingers)",
      publication: "Urban Adventure",
      page:        "44",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Cults of the Devourer Wurm",
      publication: "Core Rules",
      page:        "100",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Dhunian Faiths",
      publication: "Core Rules",
      page:        "101",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Fane of Nyssor",
      publication: "Core Rules",
      page:        "103",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Fane of Nyssor",
      publication: "Unleashed Core Rules",
      page:        "63",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "IKU"
    },
    {
      name:        "Fane of Scyrah",
      publication: "Core Rules",
      page:        "104",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Fingers Buccaneers",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Gambler's Sons (and Daughters)",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Knights of the Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Menite Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Menite Temple",
      publication: "Core Rules",
      page:        "98",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Scrutators of the Old Faith",
      publication: "Kings, Nations, and Gods",
      page:        "146",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Seekers",
      publication: "Core Rules",
      page:        "61",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Shroud",
      publication: "Urban Adventure",
      page:        "43",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "Thamarite Cults",
      publication: "Core Rules",
      page:        "95",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    {
      name:        "The Order of the Wall",
      publication: "Kings, Nations, and Gods",
      page:        "147",
      category:    "Organization",
      subcategory: "Religious Group",
      game:        "FMF"
    },
    // ##### Organization > Dynasty ##### \\
    {
      name:        "Cathors of Ord",
      publication: "Core Rules",
      page:        "46",
      category:    "Organization",
      subcategory: "Dynasty",
      game:        "FMF"
    },
    {
      name:        "Hierarchs of the Protectorate of Menoth",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty",
      game:        "FMF"
    },
    {
      name:        "Martyns of Llael",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty",
      game:        "FMF"
    },
    {
      name:        "Raelthornes of Cygnar",
      publication: "Core Rules",
      page:        "47",
      category:    "Organization",
      subcategory: "Dynasty",
      game:        "FMF"
    },
    {
      name:        "Vanars of Khador",
      publication: "Core Rules",
      page:        "46",
      category:    "Organization",
      subcategory: "Dynasty",
      game:        "FMF"
    },
    // ##### Orgoth Relic > Boon ##### \\
    {
      name:        "Black Fire",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Black Tongue",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Dark Sight",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Deathdealer",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Impervious",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Long Lived",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Phantom Shift",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Spell Reach",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Spell Ward",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Stormweaver",
      publication: "No Quarter #57",
      page:        "80",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Thirsty Blade",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    {
      name:        "Unwavering Commander",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Boon",
      game:        "FMF"
    },
    // ##### Orgoth Relic > Curse ##### \\
    {
      name:        "Air of Death",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Appetite",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Arcane Obstruction",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Blindness",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Blood Hungry",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Doom",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Haunted",
      publication: "No Quarter #57",
      page:        "81",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Homeward Bound",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Misfortune",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Night Walker",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Precious",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    {
      name:        "Virality Leech",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Curse",
      game:        "FMF"
    },
    // ##### Orgoth Relic > Relic ##### \\
    {
      name:        "Golthana's Masthead",
      publication: "No Quarter #57",
      page:        "82",
      category:    "Orgoth Relic",
      subcategory: "Relic",
      game:        "FMF"
    },
    // ##### Skill > Military Skill ##### \\
    {
      name:        "Archery",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Archery",
      publication: "Unleashed Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Crossbow",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Crossbow",
      publication: "Unleashed Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Great Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Great Weapon",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Great Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Hand Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Hand Weapon",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Hand Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Heavy Artillery",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Lance",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Light Artillery",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Light Artillery",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Pistol",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Pistol",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Reiver",
      publication: "Skorne Empire",
      page:        "68",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Rifle",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Rifle",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Rifle",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Shield",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Thrown Weapon",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Thrown Weapon",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Thrown Weapon",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Unarmed Combat",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "FMF"
    },
    {
      name:        "Unarmed Combat",
      publication: "Unleashed Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    {
      name:        "Unarmed Combat",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "11",
      category:    "Skill",
      subcategory: "Military Skill",
      game:        "IKU"
    },
    // ##### Skill > Occupational Skill ##### \\
    {
      name:        "Alchemy",
      publication: "Core Rules",
      page:        "172",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Alchemy",
      publication: "Unleashed Core Rules",
      page:        "176",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Alchemy",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Animal Handling",
      publication: "Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Animal Handling",
      publication: "Unleashed Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Animal Handling",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Bribery",
      publication: "Core Rules",
      page:        "174",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Bribery",
      publication: "Unleashed Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Chymistry",
      publication: "Skorne Empire",
      page:        "68",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Climbing",
      publication: "Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Climbing",
      publication: "Unleashed Core Rules",
      page:        "178",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Climbing",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Command",
      publication: "Core Rules",
      page:        "175",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Command",
      publication: "Unleashed Core Rules",
      page:        "178",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Command",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Craft",
      publication: "Core Rules",
      page:        "176",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Craft",
      publication: "Unleashed Core Rules",
      page:        "179",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Cryptography",
      publication: "Core Rules",
      page:        "176",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Cryptography",
      publication: "Unleashed Core Rules",
      page:        "180",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Cryptography",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Deception",
      publication: "Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Deception",
      publication: "Unleashed Core Rules",
      page:        "180",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Deception",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "12",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Detection",
      publication: "Core Rules",
      page:        "177",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Detection",
      publication: "Unleashed Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Detection",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Disguise",
      publication: "Core Rules",
      page:        "178",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Disguise",
      publication: "Unleashed Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Driving",
      publication: "Core Rules",
      page:        "179",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Driving",
      publication: "Unleashed Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Escape Artist",
      publication: "Core Rules",
      page:        "179",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Escape Artist",
      publication: "Unleashed Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Etiquette",
      publication: "Core Rules",
      page:        "180",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Fell Calling",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Fell Calling",
      publication: "Unleashed Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Forensic Science",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Forgery",
      publication: "Core Rules",
      page:        "181",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Gambling",
      publication: "Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Gambling",
      publication: "Unleashed Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Interrogation",
      publication: "Core Rules",
      page:        "182",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Interrogation",
      publication: "Unleashed Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Interrogation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Intimidation",
      publication: "Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Intimidation",
      publication: "Unleashed Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Intimidation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Investigation",
      publication: "Unleashed Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Investigation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Jumping",
      publication: "Core Rules",
      page:        "183",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Jumping",
      publication: "Unleashed Core Rules",
      page:        "185",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Law",
      publication: "Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Lock Picking",
      publication: "Core Rules",
      page:        "184",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Lock Picking",
      publication: "Unleashed Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Lore",
      publication: "Core Rules",
      page:        "185",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Lore",
      publication: "Unleashed Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Lore",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Mechanikal Engineering",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Medicine",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Medicine",
      publication: "Unleashed Core Rules",
      page:        "187",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Medicine",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Navigation",
      publication: "Core Rules",
      page:        "186",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Navigation",
      publication: "Unleashed Core Rules",
      page:        "187",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Navigation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "13",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Negotiation",
      publication: "Core Rules",
      page:        "187",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Negotiation",
      publication: "Unleashed Core Rules",
      page:        "188",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Oratory",
      publication: "Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Oratory",
      publication: "Unleashed Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Oratory",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Pickpocket",
      publication: "Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Pickpocket",
      publication: "Unleashed Core Rules",
      page:        "189",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Research",
      publication: "Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Research",
      publication: "Unleashed Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Riding",
      publication: "Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Riding",
      publication: "Unleashed Core Rules",
      page:        "190",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Rope Use",
      publication: "Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Rope Use",
      publication: "Unleashed Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Sailing",
      publication: "Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Seduction",
      publication: "Core Rules",
      page:        "192",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Seduction",
      publication: "Unleashed Core Rules",
      page:        "191",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Sneak",
      publication: "Core Rules",
      page:        "193",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Sneak",
      publication: "Unleashed Core Rules",
      page:        "192",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Sneak",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Stormsmithing",
      publication: "Kings, Nations, and Gods",
      page:        "90",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Streetwise",
      publication: "Core Rules",
      page:        "193",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Streetwise",
      publication: "Unleashed Core Rules",
      page:        "192",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Survival",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Survival",
      publication: "Unleashed Core Rules",
      page:        "193",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Survival",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Swimming",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Swimming",
      publication: "Unleashed Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Swimming",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Thrall Crafting",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Tracking",
      publication: "Core Rules",
      page:        "194",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "FMF"
    },
    {
      name:        "Tracking",
      publication: "Unleashed Core Rules",
      page:        "195",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    {
      name:        "Tracking",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "14",
      category:    "Skill",
      subcategory: "Occupational Skill",
      game:        "IKU"
    },
    // ##### Skill > Dueling Maneuver ##### \\
    {
      name:        "Deflecting Strike",
      publication: "Full Metal Fridays 1/5/3",
      page:        "1",
      category:    "Skill",
      subcategory: "Dueling Maneuver",
      game:        "FMF"
    },
    {
      name:        "Feint",
      publication: "Full Metal Fridays 1/5/3",
      page:        "1",
      category:    "Skill",
      subcategory: "Dueling Maneuver",
      game:        "FMF"
    },
    {
      name:        "Hidden Guard",
      publication: "Full Metal Fridays 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Dueling Maneuver",
      game:        "FMF"
    },
    {
      name:        "Lashing Strike",
      publication: "Full Metal Fridays 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Dueling Maneuver",
      game:        "FMF"
    },
    {
      name:        "Turning Riposte",
      publication: "Full Metal Fridays 1/5/3",
      page:        "2",
      category:    "Skill",
      subcategory: "Dueling Maneuver",
      game:        "FMF"
    },
    // ##### Skill > Trick Riding ##### //
    {
      name:        "Capriole",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    {
      name:        "Fast Remount",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    {
      name:        "Leaping Dismount",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    {
      name:        "Saddle Cover",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    {
      name:        "Steeplechase",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    {
      name:        "Stirrup Stand",
      publication: "No Quarter #55",
      page:        "87",
      category:    "Skill",
      subcategory: "Trick Riding",
      game:        "FMF"
    },
    // ##### Skill > Group Tactic ##### //
    {
      name:        "Tactics: Clear!",
      publication: "Bad Moon Rising",
      page:        "75",
      category:    "Skill",
      subcategory: "Group Tactic",
      game:        "FMF"
    },
    {
      name:        "Tactics: Fall Back!",
      publication: "Bad Moon Rising",
      page:        "75",
      category:    "Skill",
      subcategory: "Group Tactic",
      game:        "FMF"
    },
    {
      name:        "Tactics: Hit the Deck!",
      publication: "Bad Moon Rising",
      page:        "75",
      category:    "Skill",
      subcategory: "Group Tactic",
      game:        "FMF"
    },
    {
      name:        "Tactics: Serpentine!",
      publication: "Bad Moon Rising",
      page:        "75",
      category:    "Skill",
      subcategory: "Group Tactic",
      game:        "FMF"
    },
    // ##### Spell ##### \\
    {
      name:        "Abuse",
      publication: "Skorne Empire",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Admonition",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Admonition",
      publication: "Unleashed Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Admonition",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Aerial Coordination",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Affliction",
      publication: "Unleashed Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Affliction",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Aggravator",
      publication: "Unleashed Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Agitation",
      publication: "Unleashed Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Annihilation",
      publication: "Unleashed Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Annihilation",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Blast",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Bolt",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Bolt",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Bolt",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Bolt",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Bonds",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Static",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Strike",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Arcane Strike",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcane Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Arcantrik Bolt",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ashen Cloud",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ashen Cloud",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ashen Veil",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ashes to Ashes",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ashes to Ashes",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Aura of Protection",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Awakened Spirit",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Awareness",
      publication: "Core Rules",
      page:        "236",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Awareness",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ayisla's Rebuke",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Backlash",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bad Blood",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bad Blood",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Banishing Ward",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Banishing Ward",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Banishing Ward",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Barrier of Flames",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Barrier of Flames",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Batten Down the Hatches",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Batten Down the Hatches",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battering Ram",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battering Ram",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battering Ram",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Charged",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Battle Rage",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Rage",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bestial",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Beyond Death",
      publication: "Skorne Empire",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Black Out",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Black Out",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blade of Radiance",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blaze of Glory",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blazing Effigy",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blazing Effigy",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bleed",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bleed",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bleed",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blessing of Health",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blessing of Health",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blessing of Morrow",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blessing of the Devourer",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blessings of War",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blessings of War",
      publication: "Unleashed Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Blast",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blight Bringer",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Field",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Storm",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blight Strike",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blind Spot",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blizzard",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blizzard",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Feast",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blood Feast",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Accurate Strike",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Black Poison",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Bleeder",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Blood Burst",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Brain Damage",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Brutal Strike",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Dispel",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Grievous Strike",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Heart Stopper",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Hobbler",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Invigoration",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Weakness",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Accurate Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Bleeder",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Blood Burst",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Brain Damage",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Brutal Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Dispel",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Grievous Strike",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Hobbler",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Invigoration",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Magic: Weakness",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Mark",
      publication: "Skorne Empire",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blood Rain",
      publication: "Core Rules Bestiary Expanded",
      page:        "11",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blood Rain",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Blow the Man Down",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Blur",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Battle Frost",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bone Shaker",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Bone Shaker",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Boundless Charge",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Boundless Charge",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Boundless Charge",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "27",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Brittle Frost",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Broadside",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bullet Dodger",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bullet Dodger",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Bullet Dodger",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Buoyancy",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Carnage",
      publication: "Skorne Empire",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Carnivore",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Celerity",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Celerity",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Celerity",
      publication: "Unleashed Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Chain Lightning",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chain Lightning",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Chasten",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chiller",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Chiller",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cleansing Fire",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cleansing Fire",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cloak of Fear",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cloak of Fear",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cloak of Fear",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cloak of Fear",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cloak of Fear",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Cloak of the Predator",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cold-Blooded",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cold Blooded",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Convection",
      publication: "Core Rules",
      page:        "237",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Crevasse",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Crevasse",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Cross-Country",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Crusader's Call",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Curse of Shadows",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Curse of Shadows",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dark Fire",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dark Fire",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dark Persuader",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dark Water",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dark Water",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dash",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Daylight",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deadeye",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deadweight",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Death Field",
      publication: "Skorne Empire",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Death Field",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Death Pact",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Deathly Slumber",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Deceleration",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deceleration",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deceleration",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Deep Freeze",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Deep Freeze",
      publication: "Unleashed Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Devil's Tongue",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Devil's Tongue",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Devil's Tongue",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Devil's Tongue",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dirge of Mists",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Disruptor",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dissolution Bolt",
      publication: "No Quarter #48",
      page:        "72",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Dog Pile",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dominate Undead",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dominate Undead",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Domination",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Draconic Blessing",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dragon's Blood",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Dragonsight",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Earthquake",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Earthquake",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Earth's Cradle",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Earth's Cradle",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Earthsplitter",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Earthsplitter",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Electrical Blast",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Electrical Charge",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Electrify",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Electrodynamics",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Elemental Protection",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Eliminator",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Eliminator",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Entangle",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Entangle",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Enthrall Spirit",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Entropic Force",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Entropic Force",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Eruption of Life",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Eruption of Spines",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Essence Blast",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Exorcism",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Exorcism",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Explosivo",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Extinguisher",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Extinguisher",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Eye of Menoth",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Eyes of Truth",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Eyes of Truth",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fail Safe",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fair Winds",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fair Winds",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Feast of Worms",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fire for Effect",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fire Group",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fire Starter",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fire Starter",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flames of Wrath",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Flames of Wrath",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flare",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Flare",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flesh Eater",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Flesh Eater",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fog of War",
      publication: "Core Rules",
      page:        "238",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fog of War",
      publication: "Unleashed Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fog of War",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Force Bolt",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Force Field",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Force Field",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Force Hammer",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Force of Faith",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Force of Faith",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Forced Evolution",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fortify",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fortify",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fortune",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fortune",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Foxhole",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Foxhole",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Freezing Grip",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Freezing Grip",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Freezing Mist",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Freezing Mist",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Frostbite",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Frostbite",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Frozen Ground",
      publication: "Core Rules",
      page:        "239",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Frozen Ground",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Fuel the Flames",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fuel the Flames",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Full Throttle",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Fury",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Gallows",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Gallows",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ghost Shroud",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ghost Shroud",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ghost Walk",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Grave Whispers",
      publication: "Unleashed Core Rules",
      page:        "246",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Grave Whispers",
      publication: "Urban Adventure",
      page:        "69",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Grind",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Grind",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Grip of Death",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ground Zero",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Guidance",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Guided Blade",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Guided Blade",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Guided Blade",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Guided Fire",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Guided Fire",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hallowed Avenger",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hallowed Guardian",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hand of Fate",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hand of Fate",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hand of Fate",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hardened Flesh",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Harvest",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Heal",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Heal",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Heightened Reflexes",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hellfire",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hellmouth",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hex Blast",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hex Blast",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hex Blast",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hex Blast",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hex Blast",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hex Bolt",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hex Hammer",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hex Hammer",
      publication: "Unleashed Core Rules",
      page:        "247",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hidden Path",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hoarfrost",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hoarfrost",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hollow",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Holy Ward",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hot Shot",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hot Shot",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Howling Flames",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Howling Flames",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Howling Wind",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hunter's Mark",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Hymn of Battle",
      publication: "Core Rules",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hymn of Passage",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hymn of Shielding",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Hyper Awareness",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ice Bolt",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ice Bolt",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ice Cage",
      publication: "No Quarter #62",
      page:        "102",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ice Shield",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ice Shield",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Icy Grip",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Icy Grip",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ignite",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ignite",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Illusion of Vitality",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Immolation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Immolation",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Incite",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Infernal Machine",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inferno",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inferno",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Influence",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Influence",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Influence",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Influence",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Inhospitable Ground",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inhospitable Ground",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Inhospitable Ground",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Instigate",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inviolable Resolve",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Inviolable Resolve",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Iron Aggression",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Iron Flesh",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Iron Flesh",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Jackhammer",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Jaws of Death",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Jump Start",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Jump Start",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Killing Ground",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Killing Tide",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Lamentation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lamentation",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lamentation",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Leash",
      publication: "Unleashed Core Rules",
      page:        "248",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Light in the Darkness",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Light in the Darkness",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Light of Nyrro",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lightning Shroud",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lightning Storm",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Lightning Tendrils",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Lightning Tendrils",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Lightning Tongue",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Locomotion",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mage Sight",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Magnetic Hold",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mark of Lyliss",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Marked for Death",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Marked for Death",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Medicate",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mindblow",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mindlock",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mindlock",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mirage",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mirage",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mist Shroud",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mist Shroud",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mobility",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mockery of Life",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Molten Metal",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Mortality",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Murder of Crows",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Muzzle",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mystic Wards",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Mystic Wards",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Obliteration",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Obliteration",
      publication: "Unleashed Core Rules",
      page:        "249",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Occultation",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Occultation",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Occultation",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Occultation",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Occultation",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Overmind",
      publication: "Core Rules",
      page:        "241",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Overmind",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Overmind",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Parasite",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Parasite",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Parasitic Invigoration",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Perdition",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Perdition",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Phantasm",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Phantasm",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Phantasm",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Phantasm",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Phantom Hunter",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Pig Pen",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Playing God",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Polarity Shield",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Positive Charge",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Powder Keg",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Powder Keg",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Power Booster",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Prayer of Guidance",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Prayer of Guidance",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Primal Shock",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Protection from Cold",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Protection from Cold",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Protection from Corrosion",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Protection from Corrosion",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Protection from Electricity",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Protection from Electricity",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Protection from Fire",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Protection from Fire",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Protector's Mark",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Prowess of Lurynsar",
      publication: "Monsternomicon",
      page:        "63",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Psi Blast",
      publication: "Core Rules Bestiary Expanded",
      page:        "6",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Psi Blast",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Psychic Vampire",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Psychophage",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Purification",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Purification",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quagmire",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quagmire",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Quickened",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Quickend",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Raging Winds",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Raging Winds",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Raise Dead",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rampager",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rapid Growth",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Ravager",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Ravager",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rawhide",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Razor Wall",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Razor Wind",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Razor Wind",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Realignment",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Reconstruction",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Redline",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Refuge",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Refuge",
      publication: "Unleashed Core Rules",
      page:        "250",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Respawn",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Restoration",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Return Fire",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Return Fire",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rift",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rift",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rift",
      publication: "Unleashed Adventure Kit Rulebook",
      page:        "28",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Righteous Flames",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rime",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rime",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rise in Death",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rising Tide",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rock Hammer",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rock Hammer",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rock Wall",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rock Wall",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Roots of the Earth",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Rune Shot: Accuracy",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Accuracy",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Black Penny",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Brutal",
      publication: "Core Rules",
      page:        "242",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Brutal",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Detonator",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Disruption",
      publication: "Kings, Nations, and Gods",
      page:        "91",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Earth Shaker",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Electro Leap",
      publication: "No Quarter #55",
      page:        "85",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune SHot: Fire Beacon",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Freeze Fire",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Heart Stopper",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Iron Rot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Molten Shot",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Molten Shot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Momentum",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Phantom Seeker",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Piercer",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Shadow Fire",
      publication: "Core Rules",
      page:        "243",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Shadow Fire",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Silencer",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Silencer",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Spell Cracker",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Spontaneous Combustion",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Spontaneous Combustion",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Thunderbolt",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Thunderbolt",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Trick Shot",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Rune Shot: Trick Shot",
      publication: "Monsternomicon",
      page:        "97",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sacraficial Pawn",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sanguine Blessing",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Savagery",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sea Legs",
      publication: "Kings, Nations, and Gods",
      page:        "305",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sea of Fire",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sea of Fire",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shadow Pack",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shadow Sight",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shatter Storm",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shatter Storm",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Shield of Faith",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shock Wave",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shock Wave",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shock Wave",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Short Out",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Shrapnel Swarm",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Snipe",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Snipe",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Solid Ground",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Solid Ground",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Solovin's Boon",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Somnambulist",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soothing Song",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soul Mark",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Soul Slave",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Soulfire",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Fang",
      publication: "Unleashed Core Rules",
      page:        "251",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Spirit Lash",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Star-Crossed",
      publication: "Monsternomicon",
      page:        "41",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Star-Crossed",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Star Crossed",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Star Fire",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Staying Winter's Hand",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Staying Winter's Hand",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Form",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Hold",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Skin",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Spray",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stone Spray",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Stance",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stone Stance",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stone Strength",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stone Strength",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Storm Tossed",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Storm Tossed",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Storm Wall",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stranglehold",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Stranglehold",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Stygian Abyss",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Summon Vortex",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sunburst",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sunder Spirit",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Sunhammer",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Superiority",
      publication: "Core Rules",
      page:        "244",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Sure Foot",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Synergy",
      publication: "Kings, Nations, and Gods",
      page:        "363",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Synergy",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Telekinesis",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Telekinesis",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Telekinesis",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Telgesh Mark",
      publication: "Urban Adventure",
      page:        "70",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Temper Metal",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Tempest",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Tempest",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tide of Steel",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Torment",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Tornado",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Tornado",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Total Domination",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Total Spectrum",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Transference",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Transference",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Triage",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Triage",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Triage",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "True Path",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "True Path",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "True Sight",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "True Sight",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "True Sight",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Twister",
      publication: "Kings, Nations, and Gods",
      page:        "240",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Twister",
      publication: "Unleashed Core Rules",
      page:        "252",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Unease",
      publication: "Skorne Empire",
      page:        "92",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Unminding",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Unnatural Aggression",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Unstoppable Force",
      publication: "No Quarter #49",
      page:        "64",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Unstoppable Force",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Veil of Mists",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Venom",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Vision",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Vision",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Voltaic Lock",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Void Curse",
      publication: "Skorne Empire",
      page:        "93",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Voodoo Doll",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wall of Fire",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wall of Fire",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Warpath",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Watcher",
      publication: "Kings, Nations, and Gods",
      page:        "182",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Watcher",
      publication: "No Quarter #48",
      page:        "73",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Watcher",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wave of Vivification",
      publication: "Skorne Empire",
      page:        "93",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Weald Hunter",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "White Out",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "White Out",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wild Aggression",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Will Breaker",
      publication: "Monsternomicon",
      page:        "14",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wind Blast",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wind Blast",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wind Ravager",
      publication: "Core Rules Bestiary Expanded",
      page:        "3",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wind Strike",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wind Strike",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wind Wall",
      publication: "No Quarter #60",
      page:        "106",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Wings of Air",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Wings of Air",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Winter Storm",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Winter Storm",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    {
      name:        "Zephyr",
      publication: "Core Rules",
      page:        "245",
      category:    "Spell",
      subcategory: "",
      game:        "FMF"
    },
    {
      name:        "Zephyr",
      publication: "Unleashed Core Rules",
      page:        "253",
      category:    "Spell",
      subcategory: "",
      game:        "IKU"
    },
    // ##### Steamjack > Steamjack/Vector ##### \\
    {
      name:        "Angler Laborjack",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Artificer Laborjack",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Avenger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Berserker Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "192",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Buccaneer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Castigator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Centurion Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Charger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Crusader Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Cyclone Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "108",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Decimator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "196",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Defender Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Demolisher Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "194",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Dervish Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Destroyer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Devastator Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Devout Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Diffuser Vector",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Firefly Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Freebooter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Galvanizer Vector",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Ghordson Avalancher Warjack",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Ghordson Driller Warjack",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Grenadier Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Guardian Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Hammersmith Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Hunter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Inverter Vector",
      publication: "No Quarter #48 Plus",
      page:        "2",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Ironclad Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Juggernaut Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Kodiak Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Kolstot Steamjack",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Laika Steamjack",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Lancer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Marauder Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Mariner Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Miner Laborjack",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Minuteman Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Mitigator Vector",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Monitor Heavy Vector",
      publication: "No Quarter #48 Plus",
      page:        "3",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Prospector Laborjack",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Reckoner Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Redeemer Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Repenter Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Revenger Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Riveter Laborjack",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Sanctifier Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Scrappler Laborjack",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Seafarer Laborjack",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Sentinel Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Spriggan Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "194",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Stormclad Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Templar Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Toro Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Vanguard Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "249",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Vanquisher Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Vigilant Warjack",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Welder Laborjack",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Whaler Laborjack",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    {
      name:        "Wroughthammer Rockram Warjack",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Steamjack/Vector",
      game:        "FMF"
    },
    // ##### Steamjack > Chassis ##### \\
    {
      name:        "Artificer Heavy Laborjack Chassis",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Berserker Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Bulldog Light Laborjack Chassis",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Centurion Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Charger Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Crusader Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Devastator Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "192",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Devout Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Docker Heavy Laborjack Chassis",
      publication: "Core Rules",
      page:        "301",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Docker Heavy Laborjack Chassis",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Forager Light Laborjack Chassis",
      publication: "Core Rules",
      page:        "301",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Galvanizer Light Vector Chassis",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Ghordson Driller Chassis",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Grundback Runner Chassis",
      publication: "No Quarter #49",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Hunter Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Inverter Heavy Vector Chassis",
      publication: "No Quarter #48 Plus",
      page:        "2",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Ironclad Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Juggernaut Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Kolstot Heavy Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "191",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Laika Heavy Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "190",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Mariner Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Nomad Heavy Warjack Chassis",
      publication: "Core Rules",
      page:        "302",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Reckoner Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Repenter Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Seafarer Light Laborjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Talon Light Warjack Chassis",
      publication: "Core Rules",
      page:        "302",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Toro Heavy Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    {
      name:        "Vanguard Light Warjack Chassis",
      publication: "Kings, Nations, and Gods",
      page:        "248",
      category:    "Steamjack",
      subcategory: "Chassis",
      game:        "FMF"
    },
    // ##### Steamjack > Cortex ##### \\
    {
      name:        "Arcanum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex",
      game:        "FMF"
    },
    {
      name:        "Aurum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex",
      game:        "FMF"
    },
    {
      name:        "Cupernium-Grade Cortex",
      publication: "Core Rules",
      page:        "303",
      category:    "Steamjack",
      subcategory: "Cortex",
      game:        "FMF"
    },
    {
      name:        "Ferrum-Grade Cortex",
      publication: "Core Rules",
      page:        "304",
      category:    "Steamjack",
      subcategory: "Cortex",
      game:        "FMF"
    },
    // ##### Steamjack > Melee Weapon ##### \\
    {
      name:        "'Jack Lantern (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Anchor (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Armored Fist (Heavy Steamjack)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Assault Shield",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Battle Axe",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Battle Blade (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Battle Hammer (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Battle Mace (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Battle Mace (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Blazing Star (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Cargo Claw (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Clamps (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "314",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Consecrator (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Dervish Swords (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Drill Rig",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Drill Rig",
      publication: "Bitter Medicine",
      page:        "51",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Electro Glaive (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "99",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Executioner Axe (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Fist Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flail",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flame Fist (Reckoner Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "377",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flame Pike (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Flensing Blade (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Generator Blade (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Grappler",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Grave Marker (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Great Shield (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Halberd",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Hand-Weapon",
      publication: "Core Rules",
      page:        "307",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Hydraulic Clamp Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Ice Axe (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Industrial Torch Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "28",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Inferno Mace (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Macropummeler",
      publication: "No Quarter #48 Plus",
      page:        "2",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Magno Shield (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Mattlock (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Metal Saw",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Meteor Hammer",
      publication: "No Quarter #48 Plus",
      page:        "2",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Piston Spear (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pole Axe (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Pulverizer",
      publication: "No Quarter #49",
      page:        "70",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Punching Pike",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Quake Hammer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "107",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Ram Piston (Heavy Steamjack)",
      publication: "Kings, Nations, and Gods",
      page:        "198",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Repulsor Shield",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rip Saw (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rock Drill",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rock Pick",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Rock Pick (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Scrap Saw (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "29",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield Fist (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield Fist (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "373",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shield System",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shock Hammer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Shock Shield (Light Warjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Smith Hammers (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Spear",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Spring-Spike Fist",
      publication: "No Quarter #48 Plus",
      page:        "3",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Steam Riveteer Attachment (Industrial Arm Mount Attachment)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Steamjack Fist (Heavy Steamjack)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Steamjack Fist (Light Steamjack)",
      publication: "Core Rules",
      page:        "306",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Stun Blade (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "106",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Stun Lance (Light Steamjack Only)",
      publication: "Core Rules",
      page:        "308",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "Templar's Flail (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "374",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "War Flail (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "War Lance (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "195",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    {
      name:        "War Spear",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Melee Weapon",
      game:        "FMF"
    },
    // ##### Steamjack > Ranged Weapon ##### \\
    {
      name:        "Avalanche Cannon",
      publication: "No Quarter #49",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Bombard (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "197",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Cannon (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Condemner (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "376",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Dozer (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "196",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Dual Cannon (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "98",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Ellipsaw Flinger",
      publication: "No Quarter #48 Plus",
      page:        "3",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Flame Belcher (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "375",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Flamethrower",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Gaff (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Gaff Hook (Light Steamjack Only)",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade Launcher (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grenade Launcher (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "103",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Grundback Light Cannon",
      publication: "No Quarter #49",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Hail Shot Cannon",
      publication: "No Quarter #49",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Harpoon",
      publication: "Core Rules",
      page:        "309",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Heavy Barrel (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "109",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Heavy Harpoon Cannon (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "30",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Homing Ripspike Launcher",
      publication: "No Quarter #48",
      page:        "75",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Light Gun (Light Steamjack Only)",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Long Arm (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "102",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Metal Storm (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "108",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Net (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "312",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Rain of Death (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Razor Bola",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Scattergun Cannon",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Seismic Cannon (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "105",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Sentinel Chain Gun (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "101",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Ship's Gun (Heavy Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "313",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Shoulder Cannons (Devastator Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "193",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Skyhammer Rocket Pod (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "372",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Sledge Cannon",
      publication: "No Quarter #49",
      page:        "69",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Steam Lobber (Heavy Steamjack Only)",
      publication: "Core Rules",
      page:        "310",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Storm Blaster (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "100",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Tower Shield-Cannon",
      publication: "Kings, Nations, and Gods",
      page:        "249",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    {
      name:        "Underarm Slug Gun (Light Steamjack Only)",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Ranged Weapon",
      game:        "FMF"
    },
    // ##### Steamjack > Gear/Upgrade ##### \\
    {
      name:        "Alchemical Coating",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Alchemical Optic Treatment",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "All-Terrain Compensator",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Ammo Hopper",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Arc Node",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Augmented Cortex Receiver (ACR)",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Ballast Tanks",
      publication: "No Quarter #54",
      page:        "67",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Battle Driver",
      publication: "Kings, Nations, and Gods",
      page:        "371",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Buckler",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Bulwark",
      publication: "No Quarter #53",
      page:        "73",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Cargo Rigging",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Cenopath",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Combat Reflex Array",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Corrosive Shielding",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Defensive Reflex Array (DRA)",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Efficient Boiler",
      publication: "Urban Adventure",
      page:        "31",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Electrical Shielding",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Field Repair Array",
      publication: "No Quarter #48",
      page:        "76",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Fire Shielding",
      publication: "Kings, Nations, and Gods",
      page:        "378",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Grenade Field",
      publication: "Kings, Nations, and Gods",
      page:        "110",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Gyroscopic Array",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Hardened Armor",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Head Spike",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Heavy Boiler",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Hull Reinforcement",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Hydraulic Crane",
      publication: "Core Rules",
      page:        "311",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Industrial Arm Mount (Heavy Steamjack Only)",
      publication: "Urban Adventure",
      page:        "27",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Jury-Rigged Boiler",
      publication: "Kings, Nations, and Gods",
      page:        "315",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Massive Boiler (Juggernaut Chassis Only)",
      publication: "Kings, Nations, and Gods",
      page:        "199",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Neural Agitator",
      publication: "Kings, Nations, and Gods",
      page:        "370",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Optical Array",
      publication: "No Quarter #48 Plus",
      page:        "3",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Propulsion Pack",
      publication: "Kings, Nations, and Gods",
      page:        "104",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Storm Accumulator",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Storm Relay",
      publication: "Kings, Nations, and Gods",
      page:        "111",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    {
      name:        "Trench Rig",
      publication: "No Quarter #54",
      page:        "68",
      category:    "Steamjack",
      subcategory: "Gear/Upgrade",
      game:        "FMF"
    },
    // ##### Steamjack > Tune-Up ##### \\
    {
      name:        "Airflow Optimization",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Aural Sensor Recalibration",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Boiler Overpressure",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Leg Piston Lubrication",
      publication: "No Quarter #54",
      page:        "65",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Optic Recalibration",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Slow Burn",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Torque Tuning",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Weapon Alignment",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    {
      name:        "Weigh Distribution",
      publication: "No Quarter #54",
      page:        "66",
      category:    "Steamjack",
      subcategory: "Tune-Up",
      game:        "FMF"
    },
    // ##### Survival > Shelter ##### \\
    {
      name:        "Sand Canopy",
      publication: "No Quarter #61",
      page:        "93",
      category:    "Survival",
      subcategory: "Shelter",
      game:        "IKU"
    },
    {
      name:        "Wolf of Orboros Lodge",
      publication: "No Quarter #61",
      page:        "93",
      category:    "Survival",
      subcategory: "Shelter",
      game:        "IKU"
    },
    // ##### Survival > Survival Item ##### \\
    {
      name:        "Needle and Bowl Compass",
      publication: "No Quarter #61",
      page:        "95",
      category:    "Survival",
      subcategory: "Survival Item",
      game:        "IKU"
    },
    // ##### Survival > Trap ##### \\
    {
      name:        "Animal Bait",
      publication: "Unleashed Core Rules",
      page:        "335",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Caltrops",
      publication: "Unleashed Core Rules",
      page:        "335",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Deadfall Trap",
      publication: "Unleashed Core Rules",
      page:        "335",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Fixed-Weapon Trap",
      publication: "Unleashed Core Rules",
      page:        "336",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Gas Bag Trap",
      publication: "No Quarter #61",
      page:        "93",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Hornet's Nest Trap",
      publication: "No Quarter #61",
      page:        "94",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Lasso Trap",
      publication: "Unleashed Core Rules",
      page:        "336",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Mandible Trap",
      publication: "No Quarter #61",
      page:        "94",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Net Trap",
      publication: "Unleashed Core Rules",
      page:        "336",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Pendulum Trap",
      publication: "Unleashed Core Rules",
      page:        "337",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Pit Trap",
      publication: "Unleashed Core Rules",
      page:        "337",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Spring Spike Trap",
      publication: "Unleashed Core Rules",
      page:        "337",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Steel-Jawed Trap",
      publication: "Unleashed Core Rules",
      page:        "337",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    {
      name:        "Whip Trap",
      publication: "Unleashed Core Rules",
      page:        "337",
      category:    "Survival",
      subcategory: "Trap",
      game:        "IKU"
    },
    // ##### Thrall > Thrall Type ##### \\
    {
      name:        "Lieutenant",
      publication: "Urban Adventure",
      page:        "72",
      category:    "Thrall",
      subcategory: "Thrall Type",
      game:        "FMF"
    },
    {
      name:        "Risen",
      publication: "Urban Adventure",
      page:        "73",
      category:    "Thrall",
      subcategory: "Thrall Type",
      game:        "FMF"
    },
    {
      name:        "Warrior",
      publication: "Urban Adventure",
      page:        "73",
      category:    "Thrall",
      subcategory: "Thrall Type",
      game:        "FMF"
    },
    // ##### Thrall > Thrall Upgrade ##### \\
    {
      name:        "Artificial Intellect",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Dark Power",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Ghostly",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Grave Chill",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Guardian",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Killer",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Language",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Lock Step",
      publication: "Urban Adventure",
      page:        "74",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Preternatural Awareness",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Rune Hardened",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Rune Powered",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Speed in Death",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    {
      name:        "Watch Thrall",
      publication: "Urban Adventure",
      page:        "75",
      category:    "Thrall",
      subcategory: "Thrall Upgrade",
      game:        "FMF"
    },
    // ##### Vehicle > Vehicle ##### \\
    {
      name:        "The Roller",
      publication: "Bitter Medicine",
      page:        "52",
      category:    "Vehicle",
      subcategory: "Vehicle",
      game:        "FMF"
    },
    // ##### Vehicle > Vehicle Type ##### \\
    {
      name:        "Carriage",
      publication: "Bitter Medicine",
      page:        "36",
      category:    "Vehicle",
      subcategory: "Vehicle Type",
      game:        "FMF"
    },
    {
      name:        "Riverboat",
      publication: "Bitter Medicine",
      page:        "37",
      category:    "Vehicle",
      subcategory: "Vehicle Type",
      game:        "FMF"
    },
    {
      name:        "Sloop",
      publication: "Bitter Medicine",
      page:        "38",
      category:    "Vehicle",
      subcategory: "Vehicle Type",
      game:        "FMF"
    },
    {
      name:        "Wagon, Large",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Type",
      game:        "FMF"
    },
    {
      name:        "Wagon, Small",
      publication: "Bitter Medicine",
      page:        "38",
      category:    "Vehicle",
      subcategory: "Vehicle Type",
      game:        "FMF"
    },
    // ##### Vehicle > Vehicle Upgrade ##### \\
    {
      name:        "Armored Panels",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    {
      name:        "Enclosed Body",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    {
      name:        "Enclosed Controls",
      publication: "Bitter Medicine",
      page:        "39",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    {
      name:        "Enlarged Body",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    {
      name:        "Patrol Wagon",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    {
      name:        "Weapon Mount",
      publication: "Bitter Medicine",
      page:        "40",
      category:    "Vehicle",
      subcategory: "Vehicle Upgrade",
      game:        "FMF"
    },
    // ##### Warbeast > Devourer Warbeast ##### \\
    {
      name:        "Argus, Common",
      publication: "Unleashed Core Rules",
      page:        "275",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Argus, Winter",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Argus Moonhound",
      publication: "Unleashed Core Rules",
      page:        "275",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Gorax",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Griffon, Rotterhorn",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Griffon, Scarsfell",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Satyr, Gnarlhorn",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Satyr, Rip Horn",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Satyr, Shadowhorn",
      publication: "Unleashed Core Rules",
      page:        "278",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Warpwolf, Feral",
      publication: "Unleashed Core Rules",
      page:        "278",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    {
      name:        "Warpwolf Stalker",
      publication: "Unleashed Core Rules",
      page:        "279",
      category:    "Warbeast",
      subcategory: "Devourer Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Farrow Warbeast ##### \\
    {
      name:        "Battle Boar",
      publication: "Unleashed Core Rules",
      page:        "281",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    {
      name:        "Giant Hog Tusker",
      publication: "Unleashed Core Rules",
      page:        "282",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    {
      name:        "Gun Boar",
      publication: "Unleashed Core Rules",
      page:        "281",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    {
      name:        "Razor Boar",
      publication: "Unleashed Core Rules",
      page:        "283",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    {
      name:        "Road Hog",
      publication: "Unleashed Core Rules",
      page:        "284",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    {
      name:        "War Hog",
      publication: "Unleashed Core Rules",
      page:        "285",
      category:    "Warbeast",
      subcategory: "Farrow Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Legion Warbeast ##### \\
    {
      name:        "Carnivean",
      publication: "No Quarter #60",
      page:        "116",
      category:    "Warbeast",
      subcategory: "Legion Warbeast",
      game:        "IKU"
    },
    {
      name:        "Raek",
      publication: "No Quarter #60",
      page:        "114",
      category:    "Warbeast",
      subcategory: "Legion Warbeast",
      game:        "IKU"
    },
    {
      name:        "Shredder",
      publication: "No Quarter #60",
      page:        "112",
      category:    "Warbeast",
      subcategory: "Legion Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Skorne Warbeast ##### \\
    {
      name:        "Aradus Soldier",
      publication: "Skorne Empire",
      page:        "104",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Basilsk Drake",
      publication: "Skorne Empire",
      page:        "105",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Basilsk Krea",
      publication: "Skorne Empire",
      page:        "105",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Bronzeback Titan",
      publication: "Skorne Empire",
      page:        "112",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Cyclops Brute",
      publication: "Skorne Empire",
      page:        "106",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Cyclops Raider",
      publication: "Skorne Empire",
      page:        "107",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Cyclops Savage",
      publication: "Skorne Empire",
      page:        "108",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Desert Hydra",
      publication: "Skorne Empire",
      page:        "109",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Mammoth",
      publication: "Skorne Empire",
      page:        "110",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Razor Worm",
      publication: "Skorne Empire",
      page:        "111",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Reptile Hound",
      publication: "Skorne Empire",
      page:        "111",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Rhinodon",
      publication: "Skorne Empire",
      page:        "112",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Titan Gladiator",
      publication: "Skorne Empire",
      page:        "114",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Titan Cannoneer",
      publication: "Skorne Empire",
      page:        "114",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    {
      name:        "Titan Sentry",
      publication: "Skorne Empire",
      page:        "115",
      category:    "Warbeast",
      subcategory: "Skorne Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Swamp Warbeast ##### \\
    {
      name:        "Blackhide",
      publication: "Unleashed Core Rules",
      page:        "287",
      category:    "Warbeast",
      subcategory: "Swamp Warbeast",
      game:        "IKU"
    },
    {
      name:        "Boneswarm",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Swamp Warbeast",
      game:        "IKU"
    },
    {
      name:        "Bull Snapper",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Swamp Warbeast",
      game:        "IKU"
    },
    {
      name:        "Ironback Spitter",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Swamp Warbeast",
      game:        "IKU"
    },
    {
      name:        "Swamp Horror",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Swamp Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Trollblood Warbeast ##### \\
    {
      name:        "Dire Troll, Earthborn",
      publication: "Unleashed Core Rules",
      page:        "293",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Dire Troll Mauler",
      publication: "Unleashed Core Rules",
      page:        "291",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Dire Troll Blitzer",
      publication: "Unleashed Core Rules",
      page:        "291",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Dire Troll Bomber",
      publication: "Unleashed Core Rules",
      page:        "292",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Night Troll",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Pyre Troll",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Slag Troll",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Storm Troll",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Swamp Troll",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Troll Axer",
      publication: "Unleashed Core Rules",
      page:        "289",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Troll Boucer",
      publication: "Unleashed Core Rules",
      page:        "290",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Troll Impaler",
      publication: "Unleashed Core Rules",
      page:        "290",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    {
      name:        "Winter Troll",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Trollblood Warbeast",
      game:        "IKU"
    },
    // ##### Warbeast > Wold ##### \\
    {
      name:        "Wold Guardian",
      publication: "Unleashed Core Rules",
      page:        "257",
      category:    "Warbeast",
      subcategory: "Wold",
      game:        "IKU"
    },
    {
      name:        "Woldstalker",
      publication: "Unleashed Core Rules",
      page:        "257",
      category:    "Warbeast",
      subcategory: "Wold",
      game:        "IKU"
    },
    {
      name:        "Woldwarden",
      publication: "Unleashed Core Rules",
      page:        "257",
      category:    "Warbeast",
      subcategory: "Wold",
      game:        "IKU"
    },
    {
      name:        "Woldwatcher",
      publication: "Unleashed Core Rules",
      page:        "257",
      category:    "Warbeast",
      subcategory: "Wold",
      game:        "IKU"
    },
    {
      name:        "Woldwyrd",
      publication: "Unleashed Core Rules",
      page:        "257",
      category:    "Warbeast",
      subcategory: "Wold",
      game:        "IKU"
    },
    // ##### Warbeast > Animus ##### \\
    {
      name:        "Acceleration",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Acidic Touch",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Amuck",
      publication: "Skorne Empire",
      page:        "112",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Arcane Suppression",
      publication: "Unleashed Core Rules",
      page:        "258",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Baying of Chaos",
      publication: "Unleashed Core Rules",
      page:        "279",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Beguile",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Bomb Shelter",
      publication: "Skorne Empire",
      page:        "111",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Bomb Shelter",
      publication: "Unleashed Core Rules",
      page:        "293",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Bounding",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Bump",
      publication: "Unleashed Core Rules",
      page:        "290",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Counterblast",
      publication: "Skorne Empire",
      page:        "110",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Counterblast",
      publication: "Unleashed Core Rules",
      page:        "282",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Diminish",
      publication: "Skorne Empire",
      page:        "115",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Earth's Blessing",
      publication: "Unleashed Core Rules",
      page:        "259",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Elasticity",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Far Strike",
      publication: "Skorne Empire",
      page:        "108",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Far Strike",
      publication: "Unleashed Core Rules",
      page:        "291",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Flaming Fists",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Flesh of Clay",
      publication: "Unleashed Core Rules",
      page:        "261",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Freezer",
      publication: "Unleashed Core Rules",
      page:        "296",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Heightened Metabolism",
      publication: "Skorne Empire",
      page:        "105",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Heightened Metabolism",
      publication: "Unleashed Core Rules",
      page:        "281",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Hound",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Irresistible Force",
      publication: "Unleashed Core Rules",
      page:        "278",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Lightning Fists",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Lightning Strike",
      publication: "Unleashed Core Rules",
      page:        "280",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Lightning Strike",
      publication: "Unleashed Core Rules",
      page:        "285",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Locker",
      publication: "Skorne Empire",
      page:        "116",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Massacre",
      publication: "Unleashed Core Rules",
      page:        "285",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Ornery",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Paralytic Aura",
      publication: "Skorne Empire",
      page:        "106",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Pig Farm",
      publication: "Unleashed Core Rules",
      page:        "283",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Prescience",
      publication: "Skorne Empire",
      page:        "108",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Primal",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Rage",
      publication: "Unleashed Core Rules",
      page:        "291",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Repulsion",
      publication: "Unleashed Core Rules",
      page:        "292",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Rise",
      publication: "Unleashed Core Rules",
      page:        "287",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Rush",
      publication: "Skorne Empire",
      page:        "114",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Rush",
      publication: "Unleashed Core Rules",
      page:        "289",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Safeguard",
      publication: "Skorne Empire",
      page:        "107",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Sand Storm",
      publication: "Skorne Empire",
      page:        "109",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Shadow Shift",
      publication: "Unleashed Core Rules",
      page:        "277",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Slaughterhouse",
      publication: "Skorne Empire",
      page:        "111",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Spiny Growth",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Swarm",
      publication: "Unleashed Core Rules",
      page:        "288",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Swarm",
      publication: "Unleashed Core Rules",
      page:        "295",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Tracker",
      publication: "Unleashed Core Rules",
      page:        "275",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Train Wreck",
      publication: "Skorne Empire",
      page:        "114",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Transmute",
      publication: "Unleashed Core Rules",
      page:        "294",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Vicious",
      publication: "Unleashed Core Rules",
      page:        "283",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Virility",
      publication: "Unleashed Core Rules",
      page:        "278",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Wild Growth",
      publication: "Unleashed Core Rules",
      page:        "260",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Winter Coat",
      publication: "Unleashed Core Rules",
      page:        "276",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    {
      name:        "Wraithbane",
      publication: "Skorne Empire",
      page:        "105",
      category:    "Warbeast",
      subcategory: "Animus",
      game:        "IKU"
    },
    // ##### Warbeast > Warbeast Armor ##### \\
    {
      name:        "Custom Battle Warbeast Armor",
      publication: "Unleashed Core Rules",
      page:        "298",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Dire Troll Harness",
      publication: "Unleashed Core Rules",
      page:        "293",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Full Plate Warbeast Armor",
      publication: "Unleashed Core Rules",
      page:        "299",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Gun Boar Harness",
      publication: "Unleashed Core Rules",
      page:        "282",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Leather Warbeast Armor",
      publication: "Unleashed Core Rules",
      page:        "298",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Medium Plate Warbeast Armor",
      publication: "Unleashed Core Rules",
      page:        "298",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Partial Plate Warbeast Armor",
      publication: "Unleashed Core Rules",
      page:        "298",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Reptile Hound Carapace",
      publication: "Skorne Empire",
      page:        "111",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    {
      name:        "Tusked Helmet",
      publication: "Unleashed Core Rules",
      page:        "283",
      category:    "Warbeast",
      subcategory: "Warbeast Armor",
      game:        "IKU"
    },
    // ##### Warbeast > Warbeast Melee Weapon ##### \\
    {
      name:        "Ball and Chain",
      publication: "Unleashed Core Rules",
      page:        "299",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Battle Axe",
      publication: "Unleashed Core Rules",
      page:        "299",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Battle Blade",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Battle Hammer",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Battle Spear",
      publication: "Unleashed Core Rules",
      page:        "299",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Bladed Gauntlet",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Falchion",
      publication: "Skorne Empire",
      page:        "116",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Halbert",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Hand Weapon",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Heavy Shield",
      publication: "Unleashed Core Rules",
      page:        "300",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "Punching Spike",
      publication: "Unleashed Core Rules",
      page:        "301",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "War Cleaver",
      publication: "Unleashed Core Rules",
      page:        "301",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    {
      name:        "War Mace",
      publication: "Skorne Empire",
      page:        "117",
      category:    "Warbeast",
      subcategory: "Warbeast Melee Weapon",
      game:        "IKU"
    },
    // ##### Warbeast > Warbeast Ranged Weapon ##### \\
    {
      name:        "Big Gun",
      publication: "Unleashed Core Rules",
      page:        "281",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Heavy Reiver",
      publication: "Skorne Empire",
      page:        "117",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Powder Bomb",
      publication: "Unleashed Core Rules",
      page:        "293",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Siege Battery and Harness",
      publication: "Skorne Empire",
      page:        "110",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Siege Gun",
      publication: "Skorne Empire",
      page:        "117",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    // ##### Warbeast > Warbeast Gear ##### \\
    {
      name:        "Barbed Harness",
      publication: "Skorne Empire",
      page:        "117",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    {
      name:        "Beast Restraint",
      publication: "Unleashed Core Rules",
      page:        "301",
      category:    "Warbeast",
      subcategory: "Warbeast Gear",
      game:        "IKU"
    },
    {
      name:        "Gear Straps",
      publication: "Unleashed Core Rules",
      page:        "301",
      category:    "Warbeast",
      subcategory: "Warbeast Gear",
      game:        "IKU"
    },
    {
      name:        "Spear Quiver",
      publication: "Unleashed Core Rules",
      page:        "291",
      category:    "Warbeast",
      subcategory: "Warbeast Gear",
      game:        "IKU"
    },
    {
      name:        "War Spikes",
      publication: "Skorne Empire",
      page:        "117",
      category:    "Warbeast",
      subcategory: "Warbeast Ranged Weapon",
      game:        "IKU"
    },
    // ##### Warbeast > Warbeast Mechanikal Component ##### \\
    {
      name:        "Aggression Dial",
      publication: "Unleashed Core Rules",
      page:        "286",
      category:    "Warbeast",
      subcategory: "Warbeast Mechanikal Component",
      game:        "IKU"
    },
    {
      name:        "Mechano-Claw",
      publication: "Unleashed Core Rules",
      page:        "286",
      category:    "Warbeast",
      subcategory: "Warbeast Mechanikal Component",
      game:        "IKU"
    },
    {
      name:        "Mechano-Fist",
      publication: "Unleashed Core Rules",
      page:        "286",
      category:    "Warbeast",
      subcategory: "Warbeast Mechanikal Component",
      game:        "IKU"
    },
    {
      name:        "Road Hog Flamethrower",
      publication: "Unleashed Core Rules",
      page:        "286",
      category:    "Warbeast",
      subcategory: "Warbeast Mechanikal Component",
      game:        "IKU"
    },
    {
      name:        "Speed Dial",
      publication: "Unleashed Core Rules",
      page:        "286",
      category:    "Warbeast",
      subcategory: "Warbeast Mechanikal Component",
      game:        "IKU"
    },
  ];
})();
