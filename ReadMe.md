The file structure for hte models, routers, tests, and non-global middleware will be as follows:

example:

auth(dir)
        ---auth-router.js
        ---auth-router.spec.js
        ---restricted-middleware.js
products(dir)
        ---products-model.js
        ---products-router.js
        ---products-router.spec.js
        ---productdata-validation.js
users(dir)
        ---users-model.js
        ---users-router.js
        ---users-router.spec.js
        ---usersdata-validation.js
        ---usernamevalidation.js

contructions of tables:
    Tables will be constructed in migrations.  Limit the number of tables per migration to be as few as possible.  Separatio of concerns is easier to find and alter.

    Seed should follow the same idea.

    Migrations and seed files will be made with the appropriate commands:
        ---knex migrate:make migration_name
        ---knex seed:make seed_name    