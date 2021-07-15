
// return a string of HTML
const generateHTML = (data) => {
    console.log(`This is from genereate HTML ${data}`);
    console.log(`This is back into object form ${JSON.parse(data)}`)
    const employees = JSON.parse(data);

    console.log(employees[0]);

    console.log(`name => ${employees[0].name}`);
    console.log(`id => ${employees[0].id}`);
    console.log(`email => ${employees[0].email}`);
    console.log(`role => ${employees[0].role}`);
    console.log(`officeNumber => ${employees[0].officeNumber}`);


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
            <!-- new manager card -->
            <div class="column is-3">
                <div class="card">
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Name
                        </p>
                    </header>
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Role
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <nav class="panel">
                                <a class="panel-block">
                                    ID:
                                </a>
                                <a class="panel-block">
                                    Email:
                                </a>
                                <a class="panel-block">
                                    Office Number:
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end manager card -->

            <!-- new engineer card -->
            <div class="column is-3">
                <div class="card">
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Name
                        </p>
                    </header>
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Role
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <nav class="panel">
                                <a class="panel-block">
                                    ID:
                                </a>
                                <a class="panel-block">
                                    Email:
                                </a>
                                <a class="panel-block">
                                    GitHub:
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end engineer card -->

            <!-- new intern card -->
            <div class="column is-3">
                <div class="card">
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Name
                        </p>
                    </header>
                    <header class="card-header has-background-link">
                        <p class="card-header-title">
                            Role
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <nav class="panel">
                                <a class="panel-block">
                                    ID:
                                </a>
                                <a class="panel-block">
                                    Email:
                                </a>
                                <a class="panel-block">
                                    School:
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end intern card -->
        </div>

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </body>

    </html>
    `
};

module.exports = generateHTML;