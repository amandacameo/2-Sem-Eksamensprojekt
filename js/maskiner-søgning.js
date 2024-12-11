document.addEventListener("DOMContentLoaded", () => {
    //nøgleordsliste
    const searchKeywords = {
        "Laserskærer": [
            "gravering", "graver", "graveringer", "laser", "laserskærer",
            "navneskilt", "navneskilte", "skilte",
            "puslespil", "puzlespil", "puzzle",
            "dekoration", "udsmykning", "nøglering",
            "modellering", "trægravering", "træ", "træ-dekoration",
            "akrylskæring", "akryl", "akryldesign"
        ],
        "3D-printer": [
            "3d print", "3dprint", "3d printning",
            "prototyper", "proto", "prototype",
            "model", "modeller", "modellering", "nøgle",
            "reservedele", "reservedel", "knapper", "beslag",
            "figurer", "figur", "figurer",
            "miniaturer", "miniature", "småting",
            "mekaniske dele", "mekanik", "komponenter"
        ],
        "Vinyl Print/skærer": [
            "klistermærker", "klistermærke", "klistremærker", "stickers", "klister",
            "vinduesdeko", "vinduer", "folie", "vinylskilte",
            "laptop cover", "cover", "computer-deko",
            "biludsmykning", "foliering", "bilvinyl",
            "scrapbooking", "scrap", "scrapbog",
            "airbrush skabelon", "airbrush", "skabeloner",
        ],
        "T-shirt Print": [
            "t-shirt", "t-shirttryk", "tshirttryk", "tekstil", "tshirt",
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
            "kunstprint", "grafik",
            "kort", "landkort", "mapper",
            "informationsbanner", "info-banner", "banner",
            "messeprint", "messe", "udstilling", "udstillingsmaterialer"
        ]
    };


    // eventlistener
    document.querySelector("#machine-search").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });

    // eventlistener
    document.querySelector(".search-button").addEventListener("click", () => {
        performSearch();
    });

    // søg
    function performSearch() {
        const searchInput = document.querySelector("#machine-search").value.toLowerCase().trim();
        let found = false; // variable til at spore match 

        // loop
        for (const [machine, keywords] of Object.entries(searchKeywords)) {
            if (keywords.includes(searchInput)) {
                found = true;

                // finde rog scroller til maskine
                const machineSection = Array.from(document.querySelectorAll("h4"))
                    .find(section => section.textContent.toLowerCase() === machine.toLowerCase());
                if (machineSection) {
                    machineSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                break;
            }
        }

        // hvis ingen match er fundet
        if (!found) {
            displayMessage("Ingen maskine matchede din søgning. Prøv igen!");
        }
    }

    // funktion
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
});