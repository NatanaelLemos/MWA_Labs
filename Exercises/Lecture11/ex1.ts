/*
Re-write the following code using TypeScript Try to be as explicit as possible and 
add Types to everything you can! 
*/

interface BankAccount {
    money: number
}

interface Person {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

const bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

const myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);

console.log(myself); 