const generateHTML = (team) => {
    const html = [];

    const managerCards = manager => {
        let managerHTML =
            `<div class="column">
            <div class="card col-4" style="width:18rem;">
        <div class="card-header">
            ${manager.name} <br/>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                </div>
                <div class="card-body">
                    <p class="card-text">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a> </p>
                    <p class="card-text">Office Number: ${manager.officeNum}</p>
                </div>
                </div>
            </div>
        </div>`

            ; html.push(managerHTML);
    }

    const engineerCards = engineer => {
        let engineerHTML =
            `<div class="column">
            <div class="card col-4" style="width:18rem;">
        <div class="card-header">
            ${engineer.name} <br/>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a> </p>
                <p class="github">GitHub Username: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a> </p>
                </div>
            </div>
        </div>
    </div>`

            ; html.push(engineerHTML);
    }

    const internCards = intern => {
        let internHTML =
            `<div class="column">
            <div class="card col-4" style="width:18rem;">
        <div class="card-header">
            ${intern.name} <br/>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a> </p>
                <p class="card-text">School: ${intern.school}</p>
            </div>
            </div>
        </div>
    </div>`

            ; html.push(internHTML);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managerCards(team[i]);
        }
        else if (team[i].getRole() === "Engineer") {
            engineerCards(team[i]);
        }
        else if (team[i].getRole() === "Intern") {
            internCards(team[i]);
        }


    }
    return html.join('');
}


module.exports = html => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css"/>
        <title> Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <h1 class="header">
            Team Profile Generator
            </h1>
        </header>
        <main>
            <div class='row'>
            ${generateHTML(html)}
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
}