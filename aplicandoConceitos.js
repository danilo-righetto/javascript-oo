/* Aplicando os conceitos aprendidos no curso */
function Bank() {
    var name = '';
    var account = '';
    var amount = 0;

    this.setName = function(_name) {
        name = _name;
    };

    this.getName = function() {
        return name;
    };

    this.setAccount = function(_account) {
        account = _account;
    };

    this.getAccount = function() {
        return account;
    };

    this.setAmount = function(_amount) {
        amount = _amount;
    };

    this.getAmount = function() {
        return amount;
    };
}

var bank = Bank();
bank.setName("itau");
bank.setAccount("12982-9");
bank.setAmount(500);

console.log(bank.getName(), bank.getAccount(), bank.getAmount());

// vamos trabalhar com transação

function BankStrategy(strategy, bank) {
    this.strategy = strategy;
    this.bank = bank;
}

BankStrategy.prototype.doStrategy = function() {
    return this.strategy;
}

// deposito e saque
var deposito = function(bank, value) {
    var amount = bank.getAmount() + value;

    console.log("Deposito: ", amount);
}

var saque = function(bank, value) {
        var amount = bank.getAmount() - value;

        console.log("Saque: ", amount);
    }
    // Vamos pedir para o usuario digitar os dados do banco

function Main() {
    var name = windows.prompt('What is your bank?');
    var account = windows.prompt('What is your account?');
    var amount = parseInt(windows.prompt('How much you have?'));

    var bank = new Bank();
    bank.setName(name);
    bank.setAccount(account);
    bank.setAmount(amount);

    var option = parseInt(windows.prompt('1 - Deposito \n 2 - Saque'));
    var value = 0;

    while (option != 0) {
        value = parseInt(windows.prompt('Digite o seu saldo: '))
        if (option === 1) {
            new BankStrategy(deposito(bank, value));
        }

        if (option === 2) {
            new BankStrategy(saque(bank, value));
        }
    }

    console.log(bank.getName(), bank.getAccount(), bank.getAmount());
}

Main();