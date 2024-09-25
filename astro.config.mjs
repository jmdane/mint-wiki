import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {enabled: true}
    }),
    integrations: [
        starlight({
            title: 'Mint Client',
            social: {
                github: 'https://github.com/jmdane/mint-wiki',
                discord: 'https://discord.originmint.com',
            },
            sidebar: [
                {
                    label: 'Getting started',
                    items: [
                        {label: 'Install Mint Client', slug: 'getting-started/installation'},
                        {label: 'Create Replay', slug: 'getting-started/create-replay'},
                    ],
                },
                {
                    label: 'Plugins',
                    items: [
                        {label: 'Install CLI', slug: 'plugins/install-cli'},
                        {label: 'Folder Structure', slug: 'plugins/plugin-folder'},
                        {label: 'Create plugin', slug: 'plugins/create-plugin'},
                        {
                            label: 'API', items: [
                                {label: 'Plugin Manager', slug: 'plugins/api/plugin-manager'},
                                {label: 'Replay Manager', slug: 'plugins/api/replay-manager'},
                                {label: 'Logging Manager', slug: 'plugins/api/logging-manager'},
                                {label: 'Events', slug: 'plugins/api/events'},
                                {label: 'Settings', slug: 'plugins/api/settings'},
                            ],
                        },
                        {
                            label: 'Examples', items: [
                                {label: 'Out of Sync Delay', slug: 'plugins/examples/out-of-sync-delay'},
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});