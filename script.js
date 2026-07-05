// energy rate
let energyRate = 1.05;

// appliances array
const appliances = [];

function Appliance(
    name,
    watts,
    hoursPerDay,
    daysPerMonth,
    quantity,
    category,
) {
    this.name = name;
    this.watts = watts;
    this.hoursPerDay = hoursPerDay;
    this.daysPerMonth = daysPerMonth;
    this.quantity = quantity;
    this.category = category;
}

// consumption functions
function calculateConsumption(appliance) {
    return (appliance.watts * appliance.hoursPerDay * appliance.daysPerMonth * appliance.quantity) / 1000;
}

function calculateTotalConsumption(appliances) {
    let totalConsumption = 0;

    for (const appliance of appliances) {
        totalConsumption += calculateConsumption(appliance);
    }

    return totalConsumption;
}

// cost function
function calculateCost(totalConsumption) {

    const totalCost = energyRate * totalConsumption;

    return totalCost;
}

// efficiency tip function

function definedEfficiencyTip(appliances) {

    const tipsMap = new Map();

    for (const appliance of appliances) {

        if (appliance.category === "Elevação") {
            if (!tipsMap.has(efficiencyTips.maintainence)) {
                tipsMap.set(efficiencyTips.maintainence, []);
            }

            tipsMap.get(efficiencyTips.maintainence)
                .push(appliance.name);
        }

        else if (appliance.category === "Suporte") {
            if (!tipsMap.has(efficiencyTips.idle)) {
                tipsMap.set(efficiencyTips.idle, []);
            }

            tipsMap.get(efficiencyTips.idle)
                .push(appliance.name);
        }

        else {
            if (!tipsMap.has(efficiencyTips.lighting)) {
                tipsMap.set(efficiencyTips.lighting, []);
            }

            tipsMap.get(efficiencyTips.lighting)
                .push(appliance.name);
        }
    }

    return tipsMap;
}

function displayTips(tipsMap) {

    const container = document.getElementById("tipsContainer");

    container.innerHTML = "";

    for (const [tip, appliances] of tipsMap) {

        const card = document.createElement("div");
        card.classList.add("tipCard");

        const applianceBox = document.createElement("div");
        applianceBox.classList.add("tipAppliances");
        applianceBox.textContent = appliances.join(", ");

        const text = document.createElement("div");
        text.classList.add("tipText");
        text.textContent = tip;

        card.appendChild(applianceBox);
        card.appendChild(text);

        container.appendChild(card);

    }
}

// efficiency tips
const efficiencyTips = {
    idle: "Tire da tomada quando não estiver em uso.",
    maintainence: "Faça as devidas manutenções preventivas para manter a eficiência e o bom funcionamento.",
    lighting: "Recomenda-se lâmpadas de LED e buscar alternativas de aproveitamento de luz solar.",
};

// refresh screen
function updateScreen() {

    const totalConsumption = calculateTotalConsumption(appliances);

    const cost = calculateCost(totalConsumption);

    const tips = definedEfficiencyTip(appliances);

    document.getElementById("consumption").textContent = totalConsumption.toFixed(2);

    document.getElementById("cost").textContent = cost.toFixed(2);

    displayTips(tips);

    console.log(tips);
}

function saveEnergyRate() {

    energyRate = Number(energyRateInput.value);
    energyRateText.textContent = energyRate.toFixed(2);

    energyRateInput.style.display = "none";
    energyRateText.style.display = "block";

    updateScreen();
}

const form = document.getElementById("input");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const appliance = new Appliance(
        document.getElementById("name").value,
        Number(document.getElementById("watts").value),
        Number(document.getElementById("hoursPerDay").value),
        Number(document.getElementById("daysPerMonth").value),
        Number(document.getElementById("quantity").value),
        document.getElementById("category").value
    );

    appliances.push(appliance);

    updateScreen();

    form.reset();

    console.log(appliances);
});

const energyRateText = document.getElementById("energyRateText");
const energyRateInput = document.getElementById("energyRateInput");

energyRateText.addEventListener("click", () => {

    energyRateText.style.display = "none";
    energyRateInput.style.display = "block";

    energyRateInput.focus();
    energyRateInput.select();
});

energyRateInput.addEventListener("blur", saveEnergyRate);

energyRateInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        saveEnergyRate();
    }
});