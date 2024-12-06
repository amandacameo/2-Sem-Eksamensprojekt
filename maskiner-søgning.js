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

// event listener
document.querySelector("#machine-search").addEventListener("keydown", (event) => {
    if (event.key === "Enter") { /
        event.preventDefault();
        performSearch();
    });




// event listener
document.querySelector(".search-button").addEventListener("click", () => {
    performSearch(); // alder søgefunktiion
});

// SØGEFUNKTION
function performSearch() {
    const searchInput = document.querySelector("#machine-search").value.toLowerCase().trim(); // Brugerinput
    let found = false; // variabel til at spore match


}