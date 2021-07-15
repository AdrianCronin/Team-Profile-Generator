const managerTemplate =
    `
    <!-- new manager card -->
        <div class="column is-3">
            <div class="card">
                <header class="card-header has-background-link">
                    <p class="card-header-title">
                        [NAMEREPLACE]
                    </p>
                </header>
                <header class="card-header has-background-link">
                    <p class="card-header-title">
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

const engineerTemplate =
    `
    <!-- new engineer card -->
    <div class="column is-3">
        <div class="card">
            <header class="card-header has-background-link">
                <p class="card-header-title">
                    [NAMEREPLACE]
                </p>
            </header>
            <header class="card-header has-background-link">
                <p class="card-header-title">
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
                            GitHub: [GITHUBREPLACE]
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- end engineer card -->
    `;

const internTemplate =
    `
    <!-- new intern card -->
    <div class="column is-3">
        <div class="card">
            <header class="card-header has-background-link">
                <p class="card-header-title">
                    [NAMEREPLACE]
                </p>
            </header>
            <header class="card-header has-background-link">
                <p class="card-header-title">
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

// for each 
    // check each element role
        // if Manager
            // replace manager template with variables
            // save new template string to array
        // if Engineer
            // replace manager template with variables
            // save new template string to array
        // if Intern
            // replace manager template with variables
            // save new template string to array
// loop over template array and add each element to the html file

const createElements = (employee) => {

    console.log(JSON.stringify(employee)); // testing - delete

    const nameReplace = /\[NAMEREPLACE\]/;
    const idReplace = /\[IDREPLACE\]/;
    const emailReplace = /\[EMAILREPLACE\]/;
    const roleReplace = /\[ROLEREPLACE\]/;
    const officeNumberReplace = /\[OFFICENUMBERREPLACE\]/;
    const githubReplace = /\[GITHUBREPLACE\]/;
    const schoolReplace = /\[SCHOOLREPLACE\]/;

    let output = ``;

    switch(employee.role) {
        case 'Manager':
            output = managerTemplate;
            output = output.replace(nameReplace, employee.name)
            output = output.replace(roleReplace, employee.role)
            output = output.replace(idReplace, employee.id)
            output = output.replace(emailReplace, employee.email)
            output = output.replace(officeNumberReplace, employee.officeNumber)

            return output;

        case 'Engineer':
            output = engineerTemplate;
            output = output.replace(nameReplace, employee.name)
            output = output.replace(roleReplace, employee.role)
            output = output.replace(idReplace, employee.id)
            output = output.replace(emailReplace, employee.email)
            output = output.replace(githubReplace, employee.github)

            return output;

        case 'Intern':
            output = internTemplate;
            output = output.replace(nameReplace, employee.name)
            output = output.replace(roleReplace, employee.role)
            output = output.replace(idReplace, employee.id)
            output = output.replace(emailReplace, employee.email)
            output = output.replace(schoolReplace, employee.school)

            return output;
    }
}

// return a string of HTML
const generateHTML = (employees) => {

    let elementArray = [];

    for (let i = 0; i < employees.length; i++) {
        elementArray.push(createElements(employees[i]));
    }
    
    console.log(elementArray);
    // console.log(`This is from genereate HTML ${JSON.stringify(employees)}`); // testing delete

    return `
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
                <p class="subtitle has-text-centered">
                    They are cool!
                </p>
            </div>
        </section>

        <div class="columns is-multiline">
            [OUTPUTREPLACE]
        </div>

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </body>

    </html>
    `
};

module.exports = generateHTML;