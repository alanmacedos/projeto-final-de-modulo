// actual energy rate
const energyRateKWh = 1.05;

// fixed objects
const elevacar = {
    name : "Elevacar",
    watts : 3000,
    hoursPerDay : 1,
    daysPerMonth : 20,
    quantity : 3,
    category : "Elevação",
};

const ventiladorSolaster = {
    name : "Ventilador Solaster",
    watts : 270,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
    category : "Ventilação",
};

const ventiladorTron = {
    name : "Ventilador Tron",
    watts : 140,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
    category : "Ventilação",
};

const ventiladorArge = {
    name : "Ventilador Arge MAX",
    watts : 150,
    hoursPerDay : 8,
    daysPerMonth : 10,
    quantity : 1,
    category : "Ventilação",
};

const filtroDeAgua = {
    name : "Filtro de Água",
    watts : 9,
    hoursPerDay : 24,
    daysPerMonth : 20,
    quantity : 1,
    category : "Suporte",
};

const calibradorDePneu = {
    name : "Calibrador de Pneu",
    watts : 8,
    hoursPerDay : 2,
    daysPerMonth : 20,
    quantity : 2,
    category : "Suporte",

};

const lampadas = {
    name : "Lâmpadas",
    watts : 72,
    hoursPerDay : 12,
    daysPerMonth : 20,
    quantity : 58,
    category : "Iluminação",
};

const carregadorDeBateria = {
    name : "Carregador de bateria",
    watts : 120,
    hoursPerDay : 0.5,
    daysPerMonth : 7,
    quantity : 1,
    category : "Suporte",
};

const balanceadorDeRoda = {
    name : "Balanceador de roda",
    watts : 370,
    hoursPerDay : 1,
    daysPerMonth : 5,
    quantity : 1,
    category : "Suporte",
};

// consumption functions
function calculateConsumption (appliance) {
    return (appliance.watts * appliance.hoursPerDay * appliance.daysPerMonth * appliance.quantity) / 1000;
}

function calculateTotalConsumption (appliances) {
    let totalConsumption = 0;

    for (const appliance of appliances) {
        totalConsumption += calculateConsumption(appliance);
    }

    return totalConsumption;
}

// cost function
function calculateCost (totalConsumption) {
    const totalCost =  energyRateKWh * totalConsumption;

    return totalCost;
}

// efficiency tips
const efficiencyTips = {
    idle : "Tire da tomada quando não estiver em uso.",
    maintainence : "Faça as devidas manutenções preventivas para manter a eficiência e o bom funcionamento.",
    lighting : "Recomenda-se lâmpadas de LED e buscar alternativas de aproveita mento de luz solar.",
}

// appliances array
const appliances = [
    elevacar, 
    ventiladorSolaster,
    ventiladorTron,
    ventiladorArge,
    filtroDeAgua, 
    calibradorDePneu,
    lampadas,
    carregadorDeBateria,
    balanceadorDeRoda,
];

// results
const totalConsumption = calculateTotalConsumption(appliances);
const cost = calculateCost(totalConsumption);

// display the results
console.log(`Consumo de kWh: ${totalConsumption.toFixed(2)}.`);
console.log(`Custo: R$ ${cost.toFixed(2)}.`);

