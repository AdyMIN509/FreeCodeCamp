class BankAccount {
	constructor() {
		this.transactions = [];
		this.balance = 0;
	};

	deposit(amount) {
		if (amount > 0) {
			this.transactions.push({
				type: "deposit",
				amount: amount,
			})
			this.balance += amount;
			return `Successfully deposited $${amount}. New balance: $${this.balance}`
		} else {
			return "Deposit amount must be greater than zero.";
		}
	}

	withdraw(amount) {
		if (amount > 0 && amount <= this.balance) {
			this.transactions.push({
				type: "withdraw",
				amount: amount,
			})
			this.balance -= amount;
			return `Successfully withdrew $${amount}. New balance: $${this.balance}`
		} else {
			return "Insufficient balance or invalid amount."
		}
	}

	checkBalance() {
		return `Current balance: $${this.balance}`
	}

	listAllDeposits() {
		const out = [];
		this.transactions.forEach(t=> t.type === "deposit" ? out.push(t.amount) : "withdraw")
		return `Deposits: ${out.join(",")}`
	}

	listAllWithdrawals() {
		const out = [];
		this.transactions.forEach(t=> t.type === "withdraw" ? out.push(t.amount) : "")
		return `Withdrawals: ${out.join(",")}`
	}
}

const myAccount = new BankAccount();

myAccount.deposit(1000);
myAccount.deposit(2000);
myAccount.deposit(3000);
myAccount.deposit(4000);
myAccount.withdraw(4000);
myAccount.withdraw(4000);