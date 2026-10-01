"use strict";

/*
  FROG FRENZY
  EXACTLY 500 MECHANICS
  50 categories × 10 mechanics
*/

const MECHANIC_CATEGORIES = [

{
 name:"🐸 Clicking",
 effects:[
  ["Combo","combo",.08],
  ["Critical Clicks","crit",.002],
  ["Perfect Clicks","perfect",.015],
  ["Charged Clicks","charged",.05],
  ["Golden Clicks","golden",.002],
  ["Jump Clicks","jump",.03],
  ["Rapid Click Bonus","rapid",.02],
  ["Chain Clicks","chain",.015],
  ["Lucky Clicks","lucky",.01],
  ["Mega Ribbit","mega",.0002]
 ]
},

{
 name:"💰 Economy",
 effects:[
  ["Coin Generation","coins",.02],
  ["Gem Generation","gems",.01],
  ["Interest","interest",.001],
  ["Coin Multiplier","coinMult",.01],
  ["Gem Multiplier","gemMult",.01],
  ["Treasure Chance","treasure",.002],
  ["Coin Streak","streak",.01],
  ["Market Power","market",.01],
  ["Shop Discount","discount",.005],
  ["Wealth Power","wealth",.01]
 ]
},

{
 name:"🐾 Pets",
 effects:[
  ["Pet Collecting","petCollect",1],
  ["Pet Leveling","petLevel",.05],
  ["Pet XP","petXP",.05],
  ["Pet Rarity","petRare",.01],
  ["Pet Abilities","petAbility",.02],
  ["Pet Fusion","petFusion",.02],
  ["Pet Evolution","petEvolution",.02],
  ["Pet Teams","petTeam",.02],
  ["Pet Bonuses","petBonus",.03],
  ["Pet Quests","petQuest",1]
 ]
},

{
 name:"🎨 Skins",
 effects:[
  ["Skin Collecting","skinCollect",1],
  ["Skin Rarity","skinRare",.01],
  ["Skin Levels","skinLevel",.02],
  ["Skin Bonuses","skinBonus",.02],
  ["Animated Skins","animated",.01],
  ["Seasonal Skins","seasonal",1],
  ["Secret Skins","secret",1],
  ["Skin Crafting","skinCraft",.02],
  ["Skin Sets","skinSet",.03],
  ["Skin Mastery","skinMastery",.02]
 ]
},

{
 name:"🧬 Evolution",
 effects:[
  ["Evolution Power","evolution",.05],
  ["Mutations","mutation",.02],
  ["Mutation Branches","mutationBranch",.02],
  ["Frog Forms","forms",.05],
  ["Stat Upgrades","stats",.02],
  ["Evolution XP","evolutionXP",.03],
  ["Evolution Abilities","evolutionAbility",.02],
  ["Rare Mutations","rareMutation",.005],
  ["Evolution Challenges","evolutionChallenge",1],
  ["Evolution Mastery","evolutionMastery",.02]
 ]
},

{
 name:"🌎 Worlds",
 effects:[
  ["World Unlocking","worldUnlock",1],
  ["World Multipliers","worldMult",.05],
  ["Exploration","explore",.03],
  ["Hidden Areas","hiddenArea",.01],
  ["World Events","worldEvent",.01],
  ["Treasure Locations","worldTreasure",.01],
  ["World Bosses","worldBoss",.02],
  ["World Quests","worldQuest",1],
  ["World Collectibles","worldCollect",1],
  ["World Mastery","worldMastery",.02]
 ]
},

{
 name:"👹 Bosses",
 effects:[
  ["Bosses","boss",1],
  ["Boss Health","bossHealth",.01],
  ["Boss Damage","bossDamage",.05],
  ["Critical Damage","bossCrit",.05],
  ["Boss Phases","bossPhase",.02],
  ["Boss Rewards","bossReward",.03],
  ["Mini Bosses","miniBoss",1],
  ["Boss Streaks","bossStreak",.02],
  ["Boss Achievements","bossAchievement",1],
  ["Boss Difficulty","bossDifficulty",.01]
 ]
},

{
 name:"⚔️ Combat",
 effects:[
  ["Attack Speed","attackSpeed",.02],
  ["Defense","defense",.02],
  ["Armor","armor",.02],
  ["Dodge","dodge",.005],
  ["Lifesteal","lifesteal",.005],
  ["Combo Damage","combatCombo",.02],
  ["Battle Rage","rage",.01],
  ["Victory Bonus","victory",.02],
  ["Battle XP","battleXP",.03],
  ["Combat Mastery","combatMastery",.02]
 ]
},

{
 name:"🔨 Crafting",
 effects:[
  ["Materials","materials",.03],
  ["Recipes","recipes",1],
  ["Equipment","equipment",.02],
  ["Equipment Levels","equipmentLevel",.03],
  ["Equipment Rarity","equipmentRare",.01],
  ["Equipment Upgrades","equipmentUpgrade",.02],
  ["Potions","potions",1],
  ["Crafting Mastery","craftMastery",.02],
  ["Salvaging","salvage",.02],
  ["Legendary Crafting","legendaryCraft",.01]
 ]
},

{
 name:"👥 Friends",
 effects:[
  ["Friend Collection","friendCollect",1],
  ["Friend Power","friendPower",.02],
  ["Friend Gifts","friendGift",.02],
  ["Friend XP","friendXP",.02],
  ["Friend Streaks","friendStreak",.02],
  ["Friend Quests","friendQuest",1],
  ["Friend Events","friendEvent",.02],
  ["Friend Bonuses","friendBonus",.02],
  ["Friend Milestones","friendMilestone",1],
  ["Friend Mastery","friendMastery",.02]
 ]
},

{
 name:"🏰 Clans",
 effects:[
  ["Clan Creation","clanCreate",1],
  ["Clan XP","clanXP",.03],
  ["Clan Levels","clanLevel",.02],
  ["Clan Upgrades","clanUpgrade",.02],
  ["Clan Challenges","clanChallenge",1],
  ["Clan Quests","clanQuest",1],
  ["Clan Donations","clanDonation",.02],
  ["Clan Rewards","clanReward",.03],
  ["Clan Raids","clanRaid",.02],
  ["Clan Mastery","clanMastery",.02]
 ]
},

{
 name:"🏆 Achievements",
 effects:[
  ["Achievement Points","achievement",1],
  ["Milestone Rewards","milestone",.01],
  ["Click Achievements","clickAchievement",1],
  ["Coin Achievements","coinAchievement",1],
  ["Pet Achievements","petAchievement",1],
  ["Skin Achievements","skinAchievement",1],
  ["World Achievements","worldAchievement",1],
  ["Boss Achievements II","bossAchievement2",1],
  ["Social Achievements","socialAchievement",1],
  ["Achievement Mastery","achievementMastery",.02]
 ]
},

{
 name:"📜 Quests",
 effects:[
  ["Daily Quests","dailyQuest",1],
  ["Weekly Quests","weeklyQuest",1],
  ["Click Quests","clickQuest",1],
  ["Coin Quests","coinQuest",1],
  ["Pet Quests II","petQuest2",1],
  ["Skin Quests","skinQuest",1],
  ["World Quests II","worldQuest2",1],
  ["Boss Quests","bossQuest",1],
  ["Craft Quests","craftQuest",1],
  ["Quest Mastery","questMastery",.02]
 ]
},

{
 name:"⭐ Levels",
 effects:[
  ["Level XP","levelXP",.03],
  ["Level Rewards","levelReward",.02],
  ["Level Multipliers","levelMult",.01],
  ["Level Streaks","levelStreak",.01],
  ["Level Milestones","levelMilestone",1],
  ["Level Challenges","levelChallenge",1],
  ["Level Boosts","levelBoost",.02],
  ["Level Luck","levelLuck",.01],
  ["Level Mastery","levelMastery",.02],
  ["Maximum Levels","maxLevel",100]
 ]
},

{
 name:"🔥 Combos",
 effects:[
  ["Combo Duration","comboDuration",.03],
  ["Combo Power","comboPower",.03],
  ["Combo Crits","comboCrit",.01],
  ["Combo Rewards","comboReward",.02],
  ["Combo Chains","comboChain",.02],
  ["Combo Streaks","comboStreak",.02],
  ["Combo Luck","comboLuck",.01],
  ["Combo Speed","comboSpeed",.02],
  ["Combo Mastery","comboMastery",.02],
  ["Ultimate Combo","ultimateCombo",.01]
 ]
},

{
 name:"💎 Gems",
 effects:[
  ["Gem Drops","gemDrop",.02],
  ["Gem Chests","gemChest",.02],
  ["Gem Luck","gemLuck",.01],
  ["Gem Multiplier II","gemMult2",.02],
  ["Gem Streaks","gemStreak",.02],
  ["Gem Mining","gemMining",.02],
  ["Gem Treasure","gemTreasure",.02],
  ["Gem Events","gemEvent",.02],
  ["Gem Mastery","gemMastery",.02],
  ["Infinite Gems","infiniteGem",.01]
 ]
},

{
 name:"🎁 Rewards",
 effects:[
  ["Reward Luck","rewardLuck",.02],
  ["Reward Size","rewardSize",.03],
  ["Reward Chains","rewardChain",.02],
  ["Reward Streaks","rewardStreak",.02],
  ["Reward Chests","rewardChest",.01],
  ["Reward Keys","rewardKey",1],
  ["Reward Tickets","rewardTicket",1],
  ["Reward Multipliers","rewardMult",.02],
  ["Reward Events","rewardEvent",.02],
  ["Reward Mastery","rewardMastery",.02]
 ]
},

{
 name:"🎲 Random Events",
 effects:[
  ["Event Luck","eventLuck",.02],
  ["Event Duration","eventDuration",.02],
  ["Event Power","eventPower",.03],
  ["Event Rewards","eventReward",.03],
  ["Rare Events","rareEvent",.005],
  ["Secret Events","secretEvent",.002],
  ["Event Chains","eventChain",.02],
  ["Event Streaks","eventStreak",.02],
  ["Event Tickets","eventTicket",1],
  ["Event Mastery","eventMastery",.02]
 ]
},

{
 name:"🗺️ Exploration",
 effects:[
  ["Explore Rewards","exploreReward",.03],
  ["Explore Luck","exploreLuck",.02],
  ["Explore Speed","exploreSpeed",.02],
  ["Explore XP","exploreXP",.03],
  ["Explore Chests","exploreChest",.02],
  ["Explore Maps","exploreMap",1],
  ["Explore Secrets","exploreSecret",.01],
  ["Explore Events","exploreEvent",.02],
  ["Explore Streaks","exploreStreak",.02],
  ["Explore Mastery","exploreMastery",.02]
 ]
},

{
 name:"🏪 Shops",
 effects:[
  ["Shop Slots","shopSlots",1],
  ["Shop Luck","shopLuck",.02],
  ["Shop Discounts","shopDiscount",.005],
  ["Shop Refresh","shopRefresh",.02],
  ["Shop Rarity","shopRare",.01],
  ["Shop Treasure","shopTreasure",.02],
  ["Shop Events","shopEvent",.02],
  ["Shop Tickets","shopTicket",1],
  ["Shop Multipliers","shopMult",.02],
  ["Shop Mastery","shopMastery",.02]
 ]
},

{
 name:"📈 Upgrades",
 effects:[
  ["Upgrade Power","upgradePower",.03],
  ["Upgrade Cost","upgradeCost",-.005],
  ["Upgrade Luck","upgradeLuck",.01],
  ["Upgrade Speed","upgradeSpeed",.02],
  ["Upgrade Crits","upgradeCrit",.01],
  ["Upgrade Chains","upgradeChain",.02],
  ["Upgrade Rewards","upgradeReward",.03],
  ["Upgrade Slots","upgradeSlots",1],
  ["Upgrade Tiers","upgradeTier",1],
  ["Upgrade Mastery","upgradeMastery",.02]
 ]
},

{
 name:"♻️ Prestige",
 effects:[
  ["Prestige Power","prestigePower",.03],
  ["Prestige Coins","prestigeCoins",.03],
  ["Prestige Gems","prestigeGems",.02],
  ["Prestige Luck","prestigeLuck",.01],
  ["Prestige Rewards","prestigeReward",.03],
  ["Prestige XP","prestigeXP",.03],
  ["Prestige Speed","prestigeSpeed",.02],
  ["Prestige Slots","prestigeSlots",1],
  ["Prestige Mastery","prestigeMastery",.02],
  ["Prestige Infinity","prestigeInfinity",.01]
 ]
},

{
 name:"🌌 Ascension",
 effects:[
  ["Ascension Power","ascensionPower",.05],
  ["Ascension Coins","ascensionCoins",.05],
  ["Ascension Gems","ascensionGems",.03],
  ["Ascension Luck","ascensionLuck",.02],
  ["Ascension Rewards","ascensionReward",.05],
  ["Ascension XP","ascensionXP",.04],
  ["Ascension Speed","ascensionSpeed",.03],
  ["Ascension Slots","ascensionSlots",1],
  ["Ascension Mastery","ascensionMastery",.03],
  ["Cosmic Power","cosmicPower",.05]
 ]
},

{
 name:"♾️ Rebirth",
 effects:[
  ["Rebirth Power","rebirthPower",.1],
  ["Rebirth Coins","rebirthCoins",.1],
  ["Rebirth Gems","rebirthGems",.05],
  ["Rebirth Luck","rebirthLuck",.03],
  ["Rebirth Rewards","rebirthReward",.1],
  ["Rebirth XP","rebirthXP",.08],
  ["Rebirth Speed","rebirthSpeed",.05],
  ["Rebirth Slots","rebirthSlots",1],
  ["Rebirth Mastery","rebirthMastery",.05],
  ["Infinite Rebirth","infiniteRebirth",.02]
 ]
},

{
 name:"🧪 Potions",
 effects:[
  ["Coin Potion","coinPotion",.03],
  ["Gem Potion","gemPotion",.02],
  ["Luck Potion","luckPotion",.02],
  ["Speed Potion","speedPotion",.02],
  ["Crit Potion","critPotion",.02],
  ["Combo Potion","comboPotion",.02],
  ["XP Potion","xpPotion",.03],
  ["Boss Potion","bossPotion",.03],
  ["Mega Potion","megaPotion",.05],
  ["Potion Mastery","potionMastery",.02]
 ]
},

{
 name:"🪄 Magic",
 effects:[
  ["Magic Power","magicPower",.03],
  ["Magic Luck","magicLuck",.02],
  ["Magic Coins","magicCoins",.03],
  ["Magic Gems","magicGems",.02],
  ["Magic Crits","magicCrit",.01],
  ["Magic XP","magicXP",.03],
  ["Magic Events","magicEvent",.02],
  ["Magic Chests","magicChest",.02],
  ["Magic Spells","magicSpell",1],
  ["Magic Mastery","magicMastery",.02]
 ]
},

{
 name:"🏠 Frog Houses",
 effects:[
  ["House Level","houseLevel",.02],
  ["House Coins","houseCoins",.02],
  ["House Gems","houseGems",.02],
  ["House Luck","houseLuck",.01],
  ["House Energy","houseEnergy",.03],
  ["House Pets","housePets",.02],
  ["House Storage","houseStorage",10],
  ["House Rooms","houseRooms",1],
  ["House Decoration","houseDecor",.02],
  ["House Mastery","houseMastery",.02]
 ]
},

{
 name:"🌳 Farming",
 effects:[
  ["Seed Drops","seedDrop",.02],
  ["Crop Growth","cropGrowth",.03],
  ["Crop Value","cropValue",.03],
  ["Rare Crops","rareCrop",.01],
  ["Golden Crops","goldCrop",.005],
  ["Farm Luck","farmLuck",.02],
  ["Farm XP","farmXP",.03],
  ["Farm Slots","farmSlots",1],
  ["Farm Events","farmEvent",.02],
  ["Farm Mastery","farmMastery",.02]
 ]
},

{
 name:"🌱 Gardening",
 effects:[
  ["Plant Growth","plantGrowth",.03],
  ["Plant Value","plantValue",.03],
  ["Flower Luck","flowerLuck",.01],
  ["Flower Rarity","flowerRare",.01],
  ["Garden XP","gardenXP",.03],
  ["Garden Coins","gardenCoins",.03],
  ["Garden Gems","gardenGems",.02],
  ["Garden Slots","gardenSlots",1],
  ["Garden Events","gardenEvent",.02],
  ["Garden Mastery","gardenMastery",.02]
 ]
},

{
 name:"🎣 Fishing",
 effects:[
  ["Fish Chance","fishChance",.03],
  ["Rare Fish","rareFish",.01],
  ["Golden Fish","goldFish",.005],
  ["Fish Value","fishValue",.03],
  ["Fishing Speed","fishSpeed",.03],
  ["Fishing XP","fishXP",.03],
  ["Fishing Luck","fishLuck",.02],
  ["Fishing Chests","fishChest",.02],
  ["Fishing Events","fishEvent",.02],
  ["Fishing Mastery","fishMastery",.02]
 ]
},

{
 name:"🏗️ Building",
 effects:[
  ["Building Speed","buildSpeed",.03],
  ["Building Cost","buildCost",-.005],
  ["Building Power","buildPower",.03],
  ["Building XP","buildXP",.03],
  ["Building Slots","buildSlots",1],
  ["Building Luck","buildLuck",.01],
  ["Building Rewards","buildReward",.03],
  ["Building Events","buildEvent",.02],
  ["Building Levels","buildLevel",.02],
  ["Building Mastery","buildMastery",.02]
 ]
},

{
 name:"🚂 Transportation",
 effects:[
  ["Travel Speed","travelSpeed",.03],
  ["Travel Cost","travelCost",-.005],
  ["Travel Rewards","travelReward",.03],
  ["Vehicle Luck","vehicleLuck",.02],
  ["Vehicle Power","vehiclePower",.03],
  ["Vehicle XP","vehicleXP",.03],
  ["Vehicle Slots","vehicleSlots",1],
  ["Vehicle Rarity","vehicleRare",.01],
  ["Vehicle Events","vehicleEvent",.02],
  ["Vehicle Mastery","vehicleMastery",.02]
 ]
},

{
 name:"🏝️ Islands",
 effects:[
  ["Island Unlocks","islandUnlock",1],
  ["Island Power","islandPower",.04],
  ["Island Coins","islandCoins",.03],
  ["Island Gems","islandGems",.02],
  ["Island Luck","islandLuck",.02],
  ["Island Chests","islandChest",.02],
  ["Island Events","islandEvent",.02],
  ["Island Secrets","islandSecret",.01],
  ["Island Quests","islandQuest",1],
  ["Island Mastery","islandMastery",.02]
 ]
},

{
 name:"🌋 Dungeons",
 effects:[
  ["Dungeon Damage","dungeonDamage",.04],
  ["Dungeon Health","dungeonHealth",.03],
  ["Dungeon Rewards","dungeonReward",.04],
  ["Dungeon Keys","dungeonKey",1],
  ["Dungeon Luck","dungeonLuck",.02],
  ["Dungeon Chests","dungeonChest",.02],
  ["Dungeon Rooms","dungeonRoom",1],
  ["Dungeon Bosses","dungeonBoss",.03],
  ["Dungeon Streaks","dungeonStreak",.02],
  ["Dungeon Mastery","dungeonMastery",.02]
 ]
},

{
 name:"🏟️ Challenges",
 effects:[
  ["Challenge Power","challengePower",.03],
  ["Challenge Rewards","challengeReward",.03],
  ["Challenge XP","challengeXP",.03],
  ["Challenge Luck","challengeLuck",.02],
  ["Challenge Speed","challengeSpeed",.02],
  ["Challenge Streaks","challengeStreak",.02],
  ["Challenge Tiers","challengeTier",1],
  ["Challenge Keys","challengeKey",1],
  ["Challenge Events","challengeEvent",.02],
  ["Challenge Mastery","challengeMastery",.02]
 ]
},

{
 name:"🏁 Races",
 effects:[
  ["Race Speed","raceSpeed",.04],
  ["Race Acceleration","raceAccel",.03],
  ["Race Rewards","raceReward",.03],
  ["Race XP","raceXP",.03],
  ["Race Luck","raceLuck",.02],
  ["Race Streaks","raceStreak",.02],
  ["Race Tickets","raceTicket",1],
  ["Race Classes","raceClass",1],
  ["Race Events","raceEvent",.02],
  ["Race Mastery","raceMastery",.02]
 ]
},

{
 name:"🥇 Tournaments",
 effects:[
  ["Tournament Power","tournamentPower",.04],
  ["Tournament Rewards","tournamentReward",.04],
  ["Tournament XP","tournamentXP",.03],
  ["Tournament Luck","tournamentLuck",.02],
  ["Tournament Tickets","tournamentTicket",1],
  ["Tournament Ranks","tournamentRank",1],
  ["Tournament Streaks","tournamentStreak",.02],
  ["Tournament Events","tournamentEvent",.02],
  ["Tournament Chests","tournamentChest",.02],
  ["Tournament Mastery","tournamentMastery",.02]
 ]
},

{
 name:"🎰 Minigames",
 effects:[
  ["Minigame Luck","miniLuck",.02],
  ["Minigame Rewards","miniReward",.04],
  ["Minigame XP","miniXP",.03],
  ["Minigame Speed","miniSpeed",.03],
  ["Minigame Tickets","miniTicket",1],
  ["Minigame Streaks","miniStreak",.02],
  ["Minigame Secrets","miniSecret",.01],
  ["Minigame Events","miniEvent",.02],
  ["Minigame Keys","miniKey",1],
  ["Minigame Mastery","miniMastery",.02]
 ]
},

{
 name:"🎵 Music",
 effects:[
  ["Music Power","musicPower",.02],
  ["Music Luck","musicLuck",.01],
  ["Music Coins","musicCoins",.02],
  ["Music Gems","musicGems",.02],
  ["Music XP","musicXP",.02],
  ["Music Combo","musicCombo",.02],
  ["Music Energy","musicEnergy",.02],
  ["Music Events","musicEvent",.02],
  ["Music Songs","musicSongs",1],
  ["Music Mastery","musicMastery",.02]
 ]
},

{
 name:"🐸 Frog Collection",
 effects:[
  ["Frog Count","frogCount",1],
  ["Frog Rarity","frogRare",.01],
  ["Frog Power","frogPower",.03],
  ["Frog Luck","frogLuck",.02],
  ["Frog XP","frogXP",.03],
  ["Frog Coins","frogCoins",.03],
  ["Frog Gems","frogGems",.02],
  ["Frog Sets","frogSet",1],
  ["Frog Secrets","frogSecret",.01],
  ["Frog Mastery","frogMastery",.02]
 ]
},

{
 name:"🥚 Eggs",
 effects:[
  ["Egg Luck","eggLuck",.02],
  ["Egg Speed","eggSpeed",.03],
  ["Egg Rarity","eggRare",.01],
  ["Egg Slots","eggSlots",1],
  ["Egg Hatch Power","hatchPower",.03],
  ["Egg XP","eggXP",.03],
  ["Egg Coins","eggCoins",.03],
  ["Egg Gems","eggGems",.02],
  ["Egg Events","eggEvent",.02],
  ["Egg Mastery","eggMastery",.02]
 ]
},

{
 name:"💍 Equipment",
 effects:[
  ["Equipment Power","equipPower",.04],
  ["Equipment Luck","equipLuck",.02],
  ["Equipment XP","equipXP",.03],
  ["Equipment Slots","equipSlots",1],
  ["Equipment Crit","equipCrit",.02],
  ["Equipment Speed","equipSpeed",.02],
  ["Equipment Coins","equipCoins",.03],
  ["Equipment Gems","equipGems",.02],
  ["Equipment Sets","equipSet",1],
  ["Equipment Mastery","equipMastery",.02]
 ]
},

{
 name:"🛡️ Gear",
 effects:[
  ["Gear Damage","gearDamage",.04],
  ["Gear Defense","gearDefense",.03],
  ["Gear Health","gearHealth",.03],
  ["Gear Crit","gearCrit",.02],
  ["Gear Luck","gearLuck",.02],
  ["Gear Speed","gearSpeed",.02],
  ["Gear Rarity","gearRare",.01],
  ["Gear XP","gearXP",.03],
  ["Gear Sets","gearSet",1],
  ["Gear Mastery","gearMastery",.02]
 ]
},

{
 name:"🔮 Artifacts",
 effects:[
  ["Artifact Power","artifactPower",.05],
  ["Artifact Luck","artifactLuck",.03],
  ["Artifact Coins","artifactCoins",.04],
  ["Artifact Gems","artifactGems",.03],
  ["Artifact XP","artifactXP",.04],
  ["Artifact Slots","artifactSlots",1],
  ["Artifact Rarity","artifactRare",.01],
  ["Artifact Fusion","artifactFusion",.02],
  ["Artifact Secrets","artifactSecret",.01],
  ["Artifact Mastery","artifactMastery",.03]
 ]
},

{
 name:"🌦️ Weather",
 effects:[
  ["Rain Bonus","rainBonus",.03],
  ["Sun Bonus","sunBonus",.03],
  ["Storm Bonus","stormBonus",.05],
  ["Snow Bonus","snowBonus",.03],
  ["Fog Luck","fogLuck",.02],
  ["Rainbow Bonus","rainbowBonus",.05],
  ["Weather Duration","weatherDuration",.02],
  ["Weather Luck","weatherLuck",.02],
  ["Weather Events","weatherEvent",.02],
  ["Weather Mastery","weatherMastery",.02]
 ]
},

{
 name:"🕐 Time Events",
 effects:[
  ["Hour Bonus","hourBonus",.02],
  ["Minute Bonus","minuteBonus",.01],
  ["Night Bonus","nightBonus",.03],
  ["Day Bonus","dayBonus",.03],
  ["Weekend Bonus","weekendBonus",.05],
  ["Time Luck","timeLuck",.02],
  ["Time Rewards","timeReward",.03],
  ["Time Streaks","timeStreak",.02],
  ["Time Events","timeEvent",.02],
  ["Time Mastery","timeMastery",.02]
 ]
},

{
 name:"📅 Seasons",
 effects:[
  ["Season Power","seasonPower",.03],
  ["Season Rewards","seasonReward",.03],
  ["Season XP","seasonXP",.03],
  ["Season Luck","seasonLuck",.02],
  ["Season Tokens","seasonToken",1],
  ["Season Levels","seasonLevel",1],
  ["Season Quests","seasonQuest",1],
  ["Season Skins","seasonSkin",1],
  ["Season Events","seasonEvent",.02],
  ["Season Mastery","seasonMastery",.02]
 ]
},

{
 name:"🎃 Festivals",
 effects:[
  ["Festival Coins","festivalCoins",.04],
  ["Festival Gems","festivalGems",.03],
  ["Festival Luck","festivalLuck",.02],
  ["Festival XP","festivalXP",.03],
  ["Festival Tickets","festivalTicket",1],
  ["Festival Skins","festivalSkin",1],
  ["Festival Pets","festivalPet",1],
  ["Festival Chests","festivalChest",.02],
  ["Festival Events","festivalEvent",.02],
  ["Festival Mastery","festivalMastery",.02]
 ]
},

{
 name:"🏅 Mastery",
 effects:[
  ["Click Mastery","clickMastery",.02],
  ["Economy Mastery","economyMastery",.02],
  ["Pet Mastery","petMastery",.02],
  ["Skin Mastery II","skinMastery2",.02],
  ["World Mastery II","worldMastery2",.02],
  ["Combat Mastery II","combatMastery2",.02],
  ["Craft Mastery II","craftMastery2",.02],
  ["Social Mastery","socialMastery",.02],
  ["Progression Mastery","progressMastery",.02],
  ["Grand Mastery","grandMastery",.03]
 ]
},

{
 name:"🌟 Secrets",
 effects:[
  ["Secret Coins","secretCoins",.05],
  ["Secret Gems","secretGems",.03],
  ["Secret Luck","secretLuck",.03],
  ["Secret Power","secretPower",.05],
  ["Secret XP","secretXP",.04],
  ["Secret Chests","secretChest",.02],
  ["Secret Pets","secretPet",1],
  ["Secret Skins","secretSkin",1],
  ["Secret Worlds","secretWorld",1],
  ["Ultimate Secret","ultimateSecret",.05]
 ]

}

];

/*
  Convert the compact database into 500 individual mechanics.
*/

const MECHANICS = [];

for(const category of MECHANIC_CATEGORIES){

  for(const item of category.effects){

    MECHANICS.push({
      id:MECHANICS.length + 1,
      category:category.name,
      name:item[0],
      type:item[1],
      value:item[2]
    });

  }

}

if(MECHANICS.length !== 500){
  throw new Error(
    "FATAL: Expected 500 mechanics, found "+MECHANICS.length
  );
}
