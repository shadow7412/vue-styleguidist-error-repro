const path = require('path');

// Parts of this config were inspired by the following link;
// https://github.com/vue-styleguidist/vue-styleguidist/tree/dev/examples/vuetify

module.exports = {
    copyCodeButton: true,
    usageMode: 'expand',
    exampleMode: 'expand',
    locallyRegisterComponents: true,
    displayOrigins: true,
    version: process.env.NODE_ENV,
    template: {
        head: {
            links: [
                {
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
                    rel: 'stylesheet',
                },
            ],
        },
    },
    validExtends: fullFilePath => !/(?=node_modules)(?!node_modules\/vuetify)/.test(fullFilePath),
    sortProps: props => {
        props.sort(function (a, b) {
            // v-model should always be displayed first.
            if (a.name === "v-model") {
                return -1;
            }
            if (b.name === "v-model") {
                return 1;
            }
            // Followed by required fields
            if (a.required && !b.required) {
                return -1;
            }
            if (!a.required && b.required) {
                return 1;
            }
            // After that, just make them alphabetical.
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return props;
    },
    ignore: ["**/*Abstract.vue"],
    sections: [
        {
            name: "Vue Documentation",
            content: "Readme.md",
        },
        {
            name: "Apps",
            components: 'src/*.vue',
        },
    ],
};
