module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.purs$/,
            loader: 'purs-loader',
            exclude: /node_modules/,
            query: {
                spago: true,
                pscIde: true,
                src: ['src/**/*.purs', 'pages/**/*.purs'],
                bundle: !dev
            }
        })

        // Important: return the modified config
        return config
    },
}