// DATASTRUKTUR FOR MASKINER OG NØGLEORD
const searchKeywords = {
    "Laserskærer": [
        "gravering", "graver", "graveringer",
        "navneskilt", "navneskilte", "skilte",
        "puslespil", "puzlespil", "puzzle",
        "dekoration", "deko", "udsmykning",
        "modellering", "model", "modeller",
        "trægravering", "træ", "træ-dekoration",
        "akrylskæring", "akryl", "akryldesign"
    ],
    "3D-printer": [
        "3d print", "3dprint", "3d printning",
        "prototyper", "proto", "prototype",
        "model", "modeller", "modellering",
        "nøglering", "nøgleringe", "nøgle",
        "reservedele", "reservedel", "knapper", "beslag",
        "figurer", "figur", "figurer",
        "miniaturer", "miniature", "småting",
        "mekaniske dele", "mekanik", "komponenter"
    ],
    "Vinylskærer": [
        "klistermærker", "klistermærke", "klistremærker", "stickers", "klister",
        "vinduesdeko", "vinduer", "folie",
        "skilte", "skilt", "vinylskilte",
        "laptop cover", "cover", "computer-deko",
        "biludsmykning", "bil", "foliering", "bilvinyl",
        "scrapbooking", "scrap", "scrapbog",
        "airbrush skabelon", "airbrush", "skabeloner"
    ],
    "T-shirt Print": [
        "t-shirt", "t-shirttryk", "tshirttryk", "tekstil",
        "tekstiltryk", "stoftryk", "tekstiler",
        "tasker", "tasketryk", "forklæde",
        "merchandise", "merch", "tryk",
        "begivenheds-tøj", "eventtryk", "events",
        "sportstøj", "sports-tryk", "teamtøj",
        "logo", "logotryk", "logo på tøj"
    ],
    "Plakat Print": [
        "plakat", "posters", "print", "stor plakat", "Storformatprint",
        "reklame", "reklameplakat", "storformat",
        "planche", "undervisningsplanche", "læringsmaterialer",
        "kunstprint", "grafik", "dekoration",
        "kort", "landkort", "mapper",
        "informationsbanner", "info-banner", "banner",
        "messeprint", "messe", "udstilling", "udstillingsmaterialer"
    ]
};

// EVENT LISTENER FOR ENTER-TASTEN
document.querySelector("#machine-search").addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // Tjekker, om brugeren trykker på Enter
        event.preventDefault(); // Forhindrer standard formular-opførsel
        performSearch(); // Kalder søgefunktionen
    }
});

// EVENT LISTENER FOR SØGEKNAPPEN
document.querySelector(".search-button").addEventListener("click", () => {
    performSearch(); // Kalder søgefunktionen
});

// SØGEFUNKTION
function performSearch() {
    const searchInput = document.querySelector("#machine-search").value.toLowerCase().trim(); // Brugerinput
    let found = false; // Variabel til at spore, om der findes et match

    // LOOP GENNEM MASKINER OG NØGLEORD
    for (const [machine, keywords] of Object.entries(searchKeywords)) {
        if (keywords.includes(searchInput)) { // Tjekker, om input matcher et nøgleord
            found = true;

            // FIND OG SCROLL TIL MASKINENS SEKTION
            const machineSection = Array.from(document.querySelectorAll("h4"))
                .find(section => section.textContent.toLowerCase() === machine.toLowerCase());
            if (machineSection) {
                machineSection.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            break;
        }
    }

    // HVIS INGEN MATCH ER FUNDET
    if (!found) {
        displayMessage("Ingen maskine matchede din søgning. Prøv igen!");
    }
}

// FUNKTION TIL FEJLBESKEDER
function displayMessage(message) {
    const messageBox = document.querySelector(".search-message"); // Find beskedboksen
    if (!messageBox) {
        // Hvis boksen ikke findes, opret en ny
        const newMessageBox = document.createElement("div");
        newMessageBox.classList.add("search-message");
        newMessageBox.style.color = "blue"
        newMessageBox.style.marginTop = "10px";
        newMessageBox.style.fontSize = "16px";
        newMessageBox.textContent = message;
        document.querySelector(".search-bar").appendChild(newMessageBox);
    } else {
        // Hvis boksen findes, opdater dens tekst
        messageBox.textContent = message;
        messageBox.style.display = "block";
    }

    // Skjul beskeden efter 3 sekunder
    setTimeout(() => {
        const messageBox = document.querySelector(".search-message");
        if (messageBox) {
            messageBox.style.display = "none";
        }
    }, 3000);
}


