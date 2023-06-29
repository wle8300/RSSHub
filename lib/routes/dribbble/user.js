const utils = require('./utils');

module.exports = async (ctx) => {
    const name = ctx.params.name;
    const url = `https://dribbble.com/${name}`;

    const title = `${name} | Dribbble`;

    ctx.state.data = await utils.getData(ctx, url, title);
};
