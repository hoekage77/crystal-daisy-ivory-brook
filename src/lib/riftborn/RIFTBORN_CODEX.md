# Riftborn — Design bible

Solo Leveling’s Gates welded to Tower of God’s climb. Mixamo stick figures as the only body. The Forge generates as many Riftborn as you want from one skeleton.

## World

Gates do not open onto scattered dungeons — they stack. Each Gate is a floor. The floors are a tower. The tower is the Spire.

## People

We do not call them hunters. They are **Riftborn**. The interface only they can see is **the Ledger**. Guilds are **Banners**. Mana / shinsoo is **Drift**. Shadows are **Afterimages**. Monarchs / Irregulars are **Sovereigns**.

## Positions (classes)

| Position | Analog | Role |
|---|---|---|
| Breaker | Fisherman / Fighter | Melee pressure |
| Lance | Spear Bearer | Long reach |
| Lumen | Light Bearer / Healer | Sight & sustain |
| Shade | Scout / Assassin | Recon & delete |
| Weaver | Wave Controller / Mage | Drift control |
| Aegis | Tank | Wall |
| Wraith | Shadow / Irregular | Forbidden path |

## Ranks

Ember → Iron → Bronze → Silver → Gold → Platinum → Void → Sovereign.

Readable on the stick: denser gear, joint glow, aura. Ember is tape. Void is noticed by the Spire. Sovereign is not a promotion.

## Stickman doctrine

Every Riftborn is the Mixamo stick: spherical joints, cylindrical bones, Mixamo bone names (`mixamorigHips`, `mixamorigRightHand`, …). Identity lives in wear — palette, thickness, stance, helmet, cloak, weapon, aura. Later Mixamo clips retarget onto this rig.

## Generator

A character is a seed (`RB-00a11e55`). Forge rolls Position, Rank, Banner, build, palette, loadout, cosmetics, name, origin. Locks freeze a layer. Canon eight are authored seeds that prove the system can hold a party.

## Gear slots

head, face, torso, back, arms, legs, waist, main hand, off hand.

## Cosmetics

aura, markings, trail.

## Phase 2 — sprites

When a look is frozen for combat: capture turnarounds from the rig, then a sprite-gen style pipeline (row-per-state, real alpha, frame manifest, recolor maps). Imagine video is for FX, not bodies.

## Phase 3 — combat

Mixamo locomotion, then Position attacks, Ledger UI ticks, Drift VFX, Afterimage meshes. Roguelike floors sit on top of a roster you can already tell apart.
