'use strict';
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
        for (let unit of this.units) {
            return unit.isReadyToMove(distance);
        }
    }

    isReadyToFight () {
        for (let unit of this.units) {
            return unit.isReadyToFight();
        }
    }

    restore() {
        for (let unit of this.units) {
            unit.restore();
        }
    }

    getReadyToMoveUnits(distance) {
        const unitsReadyToMove = [];
        for (let unit of this.units) {
            if (unit.isReadyToMove(distance)) {
                unitsReadyToMove.push(unit);
            }
        }
        return unitsReadyToMove;
    }

    combineUnits(units) {
        return this.units = this.units.concat(units);
    }

    cloneUnit(number) {
        if (this.units[number - 1]) {
            const unit = new Unit(this.units[number - 1].type, this.units[number - 1].health, this.units[number - 1].maxHealth, this.units[number - 1].maxDistance);
            return unit;
        } else {
            throw new Error("Invalid number of unit");
        }
    }
}

const army = new Army(unitsArray, unitsArray2);