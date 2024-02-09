const http = require('http');
const express = require('express');
const app = express();
const slow = require('connect-slow');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./api/data');

app.use(slow({
    delay: 2000
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.get("/news", async (request, response) => {
    const res = {
        status: "ok",
        data: data.generatorPosts()
    };
    response.status(200).send(JSON.stringify(res)).end();
});

const server = http.createServer(app);

const port = process.env.PORT || 3000;
const bootstrap = async () => {
    try {
        server.listen(port, () =>
            console.log(`Server has been started on http://localhost:${port}`)
        );
    } catch (error) {
        console.error(error);
    }
};

bootstrap();
