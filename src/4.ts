class Key {
    private readonly signature: string = Math.random().toString();

    getSignature(): string{
        return this.signature;
    }
}

class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey() {
      return this.key;
    }
  }

abstract class House {

    protected door: boolean = false;
    protected tenants: Person[] = []

    constructor(protected key: Key){}

    comeIn(person: Person): void{
        if(this.door){
            this.tenants.push(person)
        }
    }

    abstract openDoor(key: Key):void;
}

class MyHouse extends House{
    openDoor(key: Key): void {
        if(key.getSignature() === this.key.getSignature()){
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};