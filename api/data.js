const { faker } = require('@faker-js/faker');
class Data {
    constructor() {
        this.post = null;
    }
    getListPost() {
        return {
            id: faker.string.uuid(),
            title: faker.hacker.phrase(),
            image: faker.image.image(),
            date: Date.now(),
        };

    }
    generatorPosts() {
        this.post = [];
        for (let i = 0; i <= 3; i += 1) {
            this.post.push(this.getListPost());
        }
        return this.post;
    }
}

const data = new Data();

module.exports = data;

