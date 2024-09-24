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
                                {
                                    label: 'Events', collapsed: true, items: [
                                        {label: 'Client Tick Event', slug: 'plugins/api/events/client-tick-event'},
                                        {label: 'Key Input Event', slug: 'plugins/api/events/key-input-event'},
                                        {label: 'Packet Event', slug: 'plugins/api/events/packet-event'},
                                        {label: 'Replay Event', slug: 'plugins/api/events/replay-event'},
                                        {label: 'Sync Event', slug: 'plugins/api/events/sync-event'},
                                    ]
                                },
                                {
                                    label: 'Settings', collapsed: true, items: [
                                        {label: 'Boolean', slug: 'plugins/api/settings/boolean'},
                                        {label: 'Number', slug: 'plugins/api/settings/number'},
                                        {label: 'Text/String', slug: 'plugins/api/settings/text'},
                                        {label: 'Text/String List', slug: 'plugins/api/settings/text-list'},
                                        {label: 'Float Slider', slug: 'plugins/api/settings/float-slider'},
                                        {label: 'Integer Slider', slug: 'plugins/api/settings/int-slider'},
                                        {label: 'Coords', slug: 'plugins/api/settings/coords'},
                                        {label: 'Coords List', slug: 'plugins/api/settings/coords-list'},
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});