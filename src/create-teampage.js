module.exports = generatePage = (team) => {

    const htmlDraft = [];

    headerHtml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../dist/css/style.css">
</head>
<body>
    <header>
    <h1>Team Profile List</h1>
    </header>
    <main>`;
    htmlDraft.push(headerHtml);

    const managerCard = manager => {
        let managerHtml = ` 
        <section class="employee-card">
            <h2>Manager: ${manager.name}</h2>
            <ul>
                <li>Employee ID Number: ${manager.id}</li>
                <li>Email Address: ${manager.email}</li>
                <li>Office Number: ${manager.officeNumber}</li>
            </ul>
        </section>
        `;
        htmlDraft.push(managerHtml);
    }

    const engineerCard = engineer => {
        let engineerHtml = ` 
        <section class="employee-card">
            <h2>Engineer: ${engineer.name}</h2>
            <ul>
                <li>Employee ID Number: ${engineer.id}</li>
                <li>Email Address: ${engineer.email}</li>
                <li>Github Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </section>
        `;
        htmlDraft.push(engineerHtml);
    }
    const internCard = intern => {
        let internHtml = ` 
        <section class="employee-card">
            <h2>Intern: ${intern.name}</h2>
            <ul>
                <li>Employee ID Number: ${intern.id}</li>
                <li>Email Address: ${intern.email}</li>
                <li>School Name: ${intern.school}</li>
            </ul>
        </section>
        `;
        htmlDraft.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            managerCard(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            engineerCard(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            internCard(team[i]);
        }
    }

    footerHtml = `
    </main>
     
</body>
</html>`;
    htmlDraft.push(footerHtml);

    return htmlDraft.join('');
}