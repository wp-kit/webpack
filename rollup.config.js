import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default () => {

    const plugins = [
        babel({
            exclude: [
                'node_modules/**',
                './scripts/parties/**'
            ],
            include: [
                'node_modules/spark/**'
            ],
            presets: [[
                '@babel/env', {
                    shippedProposals: true,
                    useBuiltIns: 'usage'
                }
            ]]
        }),
        commonjs(),
        resolve(),
        terser({ sourcemap: true })
    ];

    const application = {
        input: './scripts/application.js',
        external: ['jquery'],
        output: {
            file: './scripts/application.min.js',
            format: 'iife',
            name: 'Application',
            globals: {
		        'jquery': 'jQuery'
	        },
	        sourcemap: true,
        },
        plugins
    };

    return [application];
};
