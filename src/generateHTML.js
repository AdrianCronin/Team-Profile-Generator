// TODO: ADD EMAIL LINKS
// Template HTML code for Manager object
const managerTemplate =
    `
    <!-- new manager card -->
        <div class="column is-3">
            <div class="card">
                <header class="card-header has-background-info">
                    <p class="card-header-title has-text-white">
                        [NAMEREPLACE]
                    </p>
                </header>
                <header class="card-header has-background-info">
                    <p class="card-header-title has-text-white">
                        [ROLEREPLACE]
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <nav class="panel">
                            <a class="panel-block">
                                ID: [IDREPLACE]
                            </a>
                            <a class="panel-block">
                                Email: [EMAILREPLACE]
                            </a>
                            <a class="panel-block">
                                Office Number: [OFFICENUMBERREPLACE]
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    <!-- end manager card -->
    `;

// Template HTML code for Engineer objects
const engineerTemplate =
    `
    <!-- new engineer card -->
    <div class="column is-3">
        <div class="card">
            <header class="card-header has-background-info">
                <p class="card-header-title has-text-white">
                    [NAMEREPLACE]
                </p>
            </header>
            <header class="card-header has-background-info">
                <p class="card-header-title has-text-white">
                    [ROLEREPLACE]
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <nav class="panel">
                        <a class="panel-block">
                            ID: [IDREPLACE]
                        </a>
                        <a class="panel-block">
                            Email: [EMAILREPLACE]
                        </a>
                        <a class="panel-block" href="https://github.com/[GITHUBREPLACE]" target="_blank">
                            GitHub: &nbsp<span class="has-text-link">[GITHUBREPLACE]</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- end engineer card -->
    `;

// Template HTML code for Intern objects
const internTemplate =
    `
    <!-- new intern card -->
    <div class="column is-3">
        <div class="card">
            <header class="card-header has-background-info">
                <p class="card-header-title has-text-white">
                    [NAMEREPLACE]
                </p>
            </header>
            <header class="card-header has-background-info">
                <p class="card-header-title has-text-white">
                    [ROLEREPLACE]
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <nav class="panel">
                        <a class="panel-block">
                            ID: [IDREPLACE]
                        </a>
                        <a class="panel-block">
                            Email: [EMAILREPLACE]
                        </a>
                        <a class="panel-block">
                            School: [SCHOOLREPLACE]
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- end intern card -->
    `;

// Template HTML code for index.html 
const outputTemplate = 
    `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bulma CSS-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <!-- Local CSS -->
        <link rel="stylesheet" href="./style.css">
        <title>Software Dev Team</title>
    </head>

    <body>
        <section class="hero is-danger">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Software Dev Team
                </p>
            </div>
        </section>

        <main class="section">
            <div class="columns is-multiline is-justify-content-center">
                [OUTPUTREPLACE]
            </div>
        </main>
    </body>

    </html>
    `;

// Regex variables to use with string.replace()
const nameReplace = /\[NAMEREPLACE\]/;
const idReplace = /\[IDREPLACE\]/;
const emailReplace = /\[EMAILREPLACE\]/;
const roleReplace = /\[ROLEREPLACE\]/;
const officeNumberReplace = /\[OFFICENUMBERREPLACE\]/;
const githubReplace = /\[GITHUBREPLACE\]/g;
const schoolReplace = /\[SCHOOLREPLACE\]/;

// accepts an employee object as an argument and depending on which role property it has generates the corresponding html string and returns it
const createElements = (employee) => {
    let output = ``;

    switch(employee.role) {
        case 'Manager':
            output = managerTemplate;
            output = output.replace(nameReplace, employee.name);
            output = output.replace(roleReplace, employee.role);
            output = output.replace(idReplace, employee.id);
            output = output.replace(emailReplace, employee.email);
            output = output.replace(officeNumberReplace, employee.officeNumber);

            return output;

        case 'Engineer':
            output = engineerTemplate;
            output = output.replace(nameReplace, employee.name);
            output = output.replace(roleReplace, employee.role);
            output = output.replace(idReplace, employee.id);
            output = output.replace(emailReplace, employee.email);
            output = output.replace(githubReplace, employee.github);

            return output;

        case 'Intern':
            output = internTemplate;
            output = output.replace(nameReplace, employee.name);
            output = output.replace(roleReplace, employee.role);
            output = output.replace(idReplace, employee.id);
            output = output.replace(emailReplace, employee.email);
            output = output.replace(schoolReplace, employee.school);

            return output;
    }
}

// Takes the elements generated by createElements() and puts them in the outputTemplate string and returns the string
const generateHTML = (employees) => {

    let elementArray = []; // storing the generated html elements in this array

    let elementString = ``; // string built from each index in elementArray[]

    // iterates over each employee object passed to this function and generates an html block for each object
    for (let i = 0; i < employees.length; i++) {
        elementArray.push(createElements(employees[i]));
    };
    
    // takes each generated block and adds it to the elementString
    for (let i = 0; i < elementArray.length; i++) {
        elementString += elementArray[i]
    };

    // uses a regex expression to replace a string in the outputTemplate string with the generated elementString and return it
    return outputTemplate.replace(/\[OUTPUTREPLACE\]/, elementString);
};

module.exports = generateHTML; 