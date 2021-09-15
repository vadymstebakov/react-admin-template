const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@configs': path.resolve(__dirname, 'src/app/configs'),
            '@context': path.resolve(__dirname, 'src/app/context'),
            '@components': path.resolve(__dirname, 'src/app/components'),
            '@pages': path.resolve(__dirname, 'src/app/pages'),
            '@parts': path.resolve(__dirname, 'src/app/parts'),
            '@layouts': path.resolve(__dirname, 'src/app/layouts'),
            '@store': path.resolve(__dirname, 'src/app/store'),
            '@services': path.resolve(__dirname, 'src/app/services'),
        },
    },
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
