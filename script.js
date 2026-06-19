const elevacar = {
    name : "Elevacar",
    watts : 3000,
    hoursPerDay : 1,
    daysPerMonth : 20,
    quantity : 3,
};

const ventiladorSolaster = {
    name : "Ventilador Solaster",
    watts : 270,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
};

const ventiladorTron = {
    name : "Ventilador Tron",
    watts : 140,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
};

const ventiladorArge = {
    name : "Ventilador Arge MAX",
    watts : 150,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
};

const filtroDeAgua = {
    name : "Filtro de Água",
    watts : 9,
    hoursPerDay : 24,
    daysPerMonth : 20,
    quantity : 1,
};

const calibradorDePneu = {
    name : "Calibrador de Pneu",
    watts : 8,
    hoursPerDay : 2,
    daysPerMonth : 20,
    quantity : 2,

};

const lampadas = {
    name : "Lâmpadas",
    watts : 72,
    hoursPerDay : 12,
    daysPerMonth : 20,
    quantity : 58,
};

const carregadorDeBateria = {
    name : "Carregador de bateria",
    watts : 120,
    hoursPerDay : 0.5,
    daysPerMonth : 7,
    quantity : 1,
};

const balanceadorDeRoda = {
    name : "Balanceador de roda",
    watts : 370,
    hoursPerDay : 1,
    daysPerMonth : 5,
    quantity : 1,
};

function calculateConsumption (appliance) {
    return (appliance.watts * appliance.hoursPerDay * appliance.daysPerMonth * appliance.quantity) / 1000;
}

const variable = calculateConsumption(elevacar);
console.log(variable);