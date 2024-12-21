addLayer("cl", {
    name: "Clickers",
    symbol: "Cl",
    position: 0,
    startData() {
        return {
            unlocked: false,
            points: new Decimal(0),
        };
    },
    color: "#FFFFFF",
    row: 1,
    resource: "clickers",
    // TODO: milestone on 1st clicker to autoget cookies.
    layerShown() {
        if (hasUpgrade("c", 14)) return true;
        else return false;
    },
    type: "static",
    baseResource: "cookies",
    baseAmount() {
        return player["c"].points;
    },
    requires: new Decimal(20),
    exponent: 0.5,
    base: 2,
    canBuyMax() {
        return true;
    },
});
