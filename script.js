// actual energy rate
const energyRateKWh = 1.05;

// appliances array
const appliances = [];

function Appliance (
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

// efficiency tip function

function definedEfficiencyTip (appliances) {
    
    const tipsMap = new Map();

    for (const appliance of appliances) {
    
        if (appliance.category === "Elevação")
        {
            if (!tipsMap.has(efficiencyTips.maintainence))
            {
                tipsMap.set(efficiencyTips.maintainence, []);
            }
            
            tipsMap.get(efficiencyTips.maintainence)
                   .push(appliance.name);
        }

        else if (appliance.category === "Suporte")
        {
            if (!tipsMap.has(efficiencyTips.idle))
            {
                tipsMap.set(efficiencyTips.idle, []);
            }
            
            tipsMap.get(efficiencyTips.idle)
                   .push(appliance.name);
        }

        else
        {
            if (!tipsMap.has(efficiencyTips.lighting))
            {
                tipsMap.set(efficiencyTips.lighting, []);
            }
            
            tipsMap.get(efficiencyTips.lighting)
                   .push(appliance.name);
        }
    }

    return tipsMap;
}

function displayTips(tipsMap) {

    const textTip1 = document.getElementById("textTip1");
    const textTip2 = document.getElementById("textTip2");
    const textTip3 = document.getElementById("textTip3");

    const appliances1 = document.getElementById("appliances1");
    const appliances2 = document.getElementById("appliances2");
    const appliances3 = document.getElementById("appliances3");

    let counter = 0;

    for (const [tip, appliances] of tipsMap)
    {
       if (counter == 0)
        {
            // show idle tip and appliances
            textTip1.textContent = tip;
            appliances1.textContent = appliances.join(", ");
        }

        else if (counter == 1)
        {
            // show maintainence tip and appliances
            textTip2.textContent = tip;
            appliances2.textContent = appliances.join(", ");
        }

        else
        {
            // show lighting tip and appliances
            textTip3.textContent = tip;
            appliances3.textContent = appliances.join(", ")
        }

        counter++;
    }
}

// efficiency tips
const efficiencyTips = {
    idle : "Tire da tomada quando não estiver em uso.",
    maintainence : "Faça as devidas manutenções preventivas para manter a eficiência e o bom funcionamento.",
    lighting : "Recomenda-se lâmpadas de LED e buscar alternativas de aproveitamento de luz solar.",
};

// refresh screen
function updateScreen() {
    
    const totalConsumption = calculateTotalConsumption(appliances);

    const cost = calculateCost(totalConsumption);

    const tips = definedEfficiencyTip(appliances);

    document.getElementById("consumption").textContent = totalConsumption.toFixed(2);

    document.getElementById("energyRate").textContent = energyRateKWh.toFixed(2);

    document.getElementById("cost").textContent = cost.toFixed(2);

    displayTips(tips);

    console.log(tips);


}

// results
// const totalConsumption = calculateTotalConsumption(appliances);
// const cost = calculateCost(totalConsumption);

// // display the results related to kWh and cost
// console.log(`Consumo de kWh: ${totalConsumption.toFixed(2)}.`);
// console.log(`Custo: R$ ${cost.toFixed(2)}.`);

// // efficiency tips
// const tips = definedEfficiencyTip(appliances);
// console.log(tips);

const form = document.getElementById("input");

form.addEventListener("submit", function(event) {

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

    console.log(appliances);
});

