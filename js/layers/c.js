addLayer("c", {
    name: "cookies", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        };
    },
    color: "#472512",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "cookies", // Name of prestige currency
    baseResource: "crumbs", // Name of resource prestige is based on
    baseAmount() {
        return player.points;
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
        return mult;
    },
    gainExp() {
        // Calculate the exponent on main currency from bonuses
        return new Decimal(1);
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {
            key: "c",
            description: "C: Reset for cookies",
            onPress() {
                if (canReset(this.layer)) doReset(this.layer);
            },
        },
    ],
    layerShown() {
        return true;
    },
    upgrades: {
        11: {
            title: "Crumble",
            description: "The way the cookie crumbles. Gain 1 crumb/sec.",
            cost: new Decimal(1),
        },
        12: {
            title: "Double Crumble",
            description:
                "Oh my, this cookie really does crumble! Double crumbs/sec.",
            cost: new Decimal(2),
        },
        13: {
            title: "Scalable Crumbling",
            description: "Crumb gain is affected by cookies.",
            cost: new Decimal(3),
            effect() {
                return player[this.layer].points.add(1).pow(0.3);
            },
            effectDisplay: () => {
                return format(upgradeEffect("c", 13)) + "x";
            },
        },
        14: {
            title: "Carpal tunnel prevention cream",
            description: "Unlock cursors (new layer)",
            cost: new Decimal(10),
        },
    },
});
