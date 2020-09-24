'use strict';
function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove;
Unit.prototype.isReadyToFight;
Unit.prototype.restore;
Unit.prototype.clone;

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove;
Army.prototype.isReadyToFight;
Army.prototype.restore;
Army.prototype.getReadyToMoveUnits;
Army.prototype.combineUnits;
Army.prototype.cloneUnit;


class Unit {
    constructor(type, health, maxHealth, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    }

    isReadyToFight () {
        if (this.health >= this.maxHealth / 2) {
            console.log("Unit is ready to fight");
        } else {
            console.log("Unit is not ready to fight");
        }
    }

    isReadyToMove() {

    }

    restore() {
        if (this.health < this.maxHealth) {
            this.health = this.maxHealth;
        }
    }

    clone() {

    }
}
