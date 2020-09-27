'use strict';
class Unit {
    constructor(type, health, maxHealth, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    }

    isReadyToMove(distance) {
        return distance <= this.maxDistance;
    }

    isReadyToFight () {
        return this.health >= this.maxHealth / 2;
    }

    restore() {
        if (this.health < this.maxHealth) {
            this.health = this.maxHealth;
        }
    }

    clone() {
        const unit = new Unit(this.type, this.health, this.maxHealth, this.maxDistance);
        return unit;
    }
}

class Army {
    constructor(units, unitsAdded) {
        this.units = units;
        if (unitsAdded) this.units = this.units.concat(unitsAdded);
    }

    isReadyToMove(distance) {
        return this.units.every(unit => unit.isReadyToMove(distance));
    }

    isReadyToFight () {
        return this.units.every(unit => unit.isReadyToFight());
    }

    restore() {
        for (let unit of this.units) {
            unit.restore();
        }
    }

    getReadyToMoveUnits(distance) {
        const unitsReadyToMove = this.units.filter(unit => unit.isReadyToMove(distance));
        return unitsReadyToMove;
    }

    combineUnits(units) {
        return this.units = this.units.concat(units);
    }

    cloneUnit(number) {
        const unit = this.units[number];
        return unit !== undefined ? unit.clone() : undefined;
    }
}

const unit = new Unit("paladin", 900, 1300, 9);

const unitsArray = [
    new Unit("archer", 300, 900, 5),
    new Unit("swordsman", 1000, 1200, 7),
    new Unit("griffin", 1400, 1500, 20),
    new Unit("archangel", 3000, 3000, 15)
];

const unitsArray2 = [
    new Unit("archer", 800, 900, 5),
    new Unit("swordsman", 1000, 1200, 7),
    new Unit("griffin", 1400, 1500, 20),
    new Unit("archangel", 3000, 3000, 15)
];

const army = new Army(unitsArray, unitsArray2);
