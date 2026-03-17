async function renderHistoryEreignisse() {
    let text = document.getElementById("History");

    text.innerHTML = "<h2><u>Historische Ereignisse am <span class=\"currently_day\">" + currentDate.toLocaleDateString("de-DE", { day: "numeric", month: "long" }) + "</span></u></h2><p>Lade Ereignisse...</p>";

    try {
        const response = await fetch("https://proxy.corsfix.com/?" + 'http://history.muffinlabs.com/date/'+ currentDate.getMonth() + "/" + currentDate.getDate());
        if (!response.ok) {
            throw new Error("API-Fehler: " + response.status);
        }
        const data = await response.json();
        console.log(data)
        let html = "<h2><u>Historische Ereignisse am <span class=\"currently_day\">" + currentDate.toLocaleDateString("de-DE", { day: "numeric", month: "long" }) + "</span></u></h2><ul>";

        if (data.data && data.data.Events) {
            for (let i = 0; i < 3; i++) {
                html += "<li><strong>" + data.data.Events[i].year + ":</strong> " + data.data.Events[i].text + "</li>";
                
            }
            // data.data.Events.forEach(event => {
            //     html += "<li><strong>" + event.year + ":</strong> " + event.text + "</li>";
            // });
        } else {
            html += "<li>Keine Ereignisse gefunden.</li>";
        }

        html += "</ul>";
        text.innerHTML = html;
    } catch (error) {
        text.innerHTML = "<h2><u>Historische Ereignisse am <span class=\"currently_day\">" + currentDate.toLocaleDateString("de-DE", { day: "numeric", month: "long" }) + "</span></u></h2><p>Fehler beim Laden der Ereignisse: " + error.message + "</p>";
    }
}


    
   


    