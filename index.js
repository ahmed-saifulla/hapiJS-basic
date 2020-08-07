'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    // Different Route 
    server.route({
        method: 'GET',
        path: '/dashboard',         // e.g: http://localhost:8000/dashboard
        handler: (request, h) => {
            return '<h2> Dashboard </h2>';
        }
    });

    // Dynamic Route 
    server.route({
        method: 'GET',
        path: '/dashboard/{username}',  // e.g: http://localhost:8000/dashboard/saif
        handler: (request, h) => {
            return `<h2> Hello, ${request.params.username} </h2>`;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();