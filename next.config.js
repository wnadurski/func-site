module.exports = {
    pageExtensions: ["js", "jsx", "purs"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
            test: /\.purs$/,
            loader: 'purs-loader',
            exclude: /node_modules/,
            query: {
                spago: true,
                pscIde: true,
                src: ['src/**/*.purs'],
                bundle: !dev
            }
        }, {
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        })

        // Important: return the modified config
        return config
    },
}