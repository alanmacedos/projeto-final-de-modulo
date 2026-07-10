// energy rate
let energyRate = 1.02;

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

        else if (appliance.category === "Iluminação") {
            if (!tipsMap.has(efficiencyTips.lighting)) {
                tipsMap.set(efficiencyTips.lighting, []);
            }

            tipsMap.get(efficiencyTips.lighting)
                .push(appliance.name);
        }

        else if (appliance.category === "Torno") {
            if (!tipsMap.has(efficiencyTips.lathe)) {
                tipsMap.set(efficiencyTips.lathe, []);
            }

            tipsMap.get(efficiencyTips.lathe)
                .push(appliance.name);
        }

        else if (appliance.category === "CNC") {
            if (!tipsMap.has(efficiencyTips.cnc)) {
                tipsMap.set(efficiencyTips.cnc, []);
            }

            tipsMap.get(efficiencyTips.cnc)
                .push(appliance.name);
        }

        else if (appliance.category === "Eletroerosão por Penetração") {
            if (!tipsMap.has(efficiencyTips.sinkerEdm)) {
                tipsMap.set(efficiencyTips.sinkerEdm, []);
            }

            tipsMap.get(efficiencyTips.sinkerEdm)
                .push(appliance.name);
        }

        else if (appliance.category === "Eletroerosão a Fio") {
            if (!tipsMap.has(efficiencyTips.wireEdm)) {
                tipsMap.set(efficiencyTips.wireEdm, []);
            }

            tipsMap.get(efficiencyTips.wireEdm)
                .push(appliance.name);
        }

        else if (appliance.category === "Fresadora") {
            if (!tipsMap.has(efficiencyTips.millingMachine)) {
                tipsMap.set(efficiencyTips.millingMachine, []);
            }

            tipsMap.get(efficiencyTips.millingMachine)
                .push(appliance.name);
        }

        else {
            if (!tipsMap.has(efficiencyTips.press)) {
                tipsMap.set(efficiencyTips.press, []);
            }

            tipsMap.get(efficiencyTips.press)
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
    lathe: `• Evite deixar o motor ligado durante longos períodos sem usinagem.

    • Faça a lubrificação e manutenção preventiva regularmente.
    
    • Utilize ferramentas de corte afiadas para reduzir o esforço do motor.`,
    
    cnc: `• Agrupe operações para reduzir ciclos de partida e parada da máquina.
    
    • Mantenha o sistema de refrigeração e lubrificação em boas condições.
    
    • Planeje programas eficientes para diminuir o tempo de usinagem.`,

    // edm = Electrical Discharge Machining - Eletroerosão
    
    sinkerEdm: `• Desligue a máquina quando houver longos intervalos entre operações.
    
    • Faça a manutenção do sistema dielétrico e dos filtros.
    
    • Utilize parâmetros de usinagem adequados para evitar consumo excessivo.`,
    
    wireEdm: `• Mantenha a água deionizada e os filtros em boas condições.
    
    • Utilize parâmetros compatíveis com o material da peça.
    
    • Evite deixar a máquina energizada sem programação ativa.`,
    
    millingMachine: `• Utilize ferramentas afiadas e corretamente balanceadas.
    
    • Desligue a máquina durante pausas prolongadas.
    
    • Realize manutenção preventiva nos componentes mecânicos.`,
    
    press: `• Evite manter o sistema hidráulico acionado sem necessidade.
    
    • Faça inspeções periódicas para evitar perdas de eficiência.
    
    • Planeje a produção em lotes para reduzir partidas frequentes.`
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