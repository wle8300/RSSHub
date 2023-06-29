const utils = require('./utils');

module.exports = async (ctx) => {
    const timeframe = ctx.params.timeframe;
    const url = `https://dribbble.com/shots/popular${timeframe ? `?timeframe=${timeframe}` : ''}`;

    const title = 'Popular Shots | Dribbble';

    ctx.state.data = await utils.getData(ctx, url, title);
};
