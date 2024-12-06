document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("date-picker");
    const timePicker = document.getElementById("time-picker");

    // Funktion til at generere hverdage fra start til slut
    function generateWeekdays(startDate, endDate) {
        const weekdays = [];
        const currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Ekskluder weekender
                weekdays.push(new Date(currentDate)); // Gem kun hverdage
            }
            currentDate.setDate(currentDate.getDate() + 1); // Gå til næste dag
        }

        return weekdays;
    }

    // Generer datoer for hverdage i 2025
    const firstDay2025 = new Date("2025-01-01");
    const lastDay2025 = new Date("2025-12-31");
    const weekdays = generateWeekdays(firstDay2025, lastDay2025);

    // Populer datePicker med hverdage
    weekdays.forEach((date) => {
        const option = document.createElement("option");
        option.value = date.toISOString().split("T")[0]; // ISO-format (YYYY-MM-DD)
        option.textContent = date.toLocaleDateString("da-DK", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        datePicker.appendChild(option);
    });

    // Opdater tidsvælger, når en dato vælges
    datePicker.addEventListener("change", () => {
        updateTimePicker();
    });

    // Funktion til at opdatere tidsvælgeren
    function updateTimePicker() {
        const timeIntervals = [
            "08:00 - 10:00",
            "10:00 - 12:00",
            "12:00 - 14:00",
            "14:00 - 16:00",
        ];

        // Ryd eksisterende muligheder
        timePicker.innerHTML = '<option value="" disabled selected>Vælg et tidspunkt</option>';

        // Tilføj tidspunkter
        timeIntervals.forEach((interval) => {
            const option = document.createElement("option");
            option.value = interval;
            option.textContent = interval;
            timePicker.appendChild(option);
        });
    }
});
