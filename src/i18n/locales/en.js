export default {
  meta: {
    title: 'KiraAI — Modular Multi-Platform AI Digital Life',
    description:
      'KiraAI — a modular, multi-platform AI digital life project. Connect AI models with chat platforms and build a digital life of your own.',
  },
  nav: {
    features: 'Features',
    adapters: 'Adapters',
    quickstart: 'Quick Start',
    community: 'Community',
    docs: 'Docs',
  },
  hero: {
    badge: 'Open Source · AGPL-3.0 · In Active Development',
    title1: 'Build Your Own',
    title2: 'AI Digital Life',
    subtitle:
      'KiraAI is a modular, multi-platform AI digital life project. Built around a Digital Life Hub, it connects AI models with chat platforms — bringing a lifelike AI companion to every corner of your daily life.',
    ctaStart: 'Get Started',
    ctaDocs: 'Read the Docs',
    metaBackend: 'Backend engine',
    metaWebui: 'Web admin UI',
    metaOsValue: 'Win / macOS / Linux',
    metaOs: 'Runs everywhere',
  },
  features: {
    title: 'An Architecture Born for Digital Life',
    desc: 'With the Digital Life Hub at its core, models, platforms and abilities are all pluggable modules — mix and match to shape the AI companion you want.',
    items: {
      webui: {
        title: 'Friendly Web UI',
        desc: 'A modern admin panel that works out of the box. Configure providers, adapters and personas visually — no config files to edit.',
      },
      llm: {
        title: 'Flexible LLM Support',
        desc: 'Plug in any language model provider and switch models freely. Never locked into a single vendor.',
      },
      message: {
        title: 'Rich Messaging',
        desc: 'Multiple message elements and flexible delivery mechanisms — combine text, images, voice and more at will.',
      },
      plugin: {
        title: 'Plugin System',
        desc: 'Extend capabilities through plugins and add-ons, letting your digital life keep growing and learning new skills.',
      },
      adapter: {
        title: 'Multi-Platform Adapters',
        desc: 'Deploy once and stay active on QQ, Telegram, WeChat, Discord, Bilibili and more — all at the same time.',
      },
      multimodal: {
        title: 'Multimodal AI Abilities',
        desc: 'Beyond chat — integrated TTS, STT, image generation and video generation for a truly multimodal companion.',
      },
    },
  },
  adapters: {
    title: 'One Digital Life, Active on Every Platform',
    desc: 'Adapters connect the Digital Life Hub to major chat platforms. Mount several of them and your AI companion can talk with different people on different platforms — simultaneously.',
    soon: 'Coming',
    items: {
      qq: "China's most active social platform",
      telegram: 'Global instant messaging',
      wechat: 'WeChat ecosystem integration',
      discord: 'Communities & game voice chat',
      bilibili: 'Live streaming & bullet chats',
      more: 'More adapters in development',
    },
    abilitiesLabel: 'AI Abilities',
    abilities: {
      llm: 'LLM Chat',
      tts: 'Text to Speech',
      stt: 'Speech to Text',
      image: 'Image Generation',
      video: 'Video Generation',
      roleplay: 'Role Play',
    },
  },
  quickstart: {
    title: 'Three Steps to Wake Up Your Digital Life',
    desc: 'No complex deployment — all you need is Python 3.10+ and Node.js 18+.',
    steps: {
      s1: {
        title: 'Download the Source',
        desc: 'Grab the latest source code from the GitHub Releases page and extract it.',
      },
      s2: {
        title: 'One-Click Launch',
        desc: 'Run scripts/run.bat on Windows, or scripts/run.sh on Linux / macOS. The script sets up the environment automatically.',
      },
      s3: {
        title: 'Configure via Web UI',
        desc: 'Open the web admin panel, set up your model provider, platform adapters and persona — your digital life goes live instantly.',
      },
    },
    download: 'Get the Latest Release',
    copy: 'Copy',
    copied: 'Copied ✓',
    commentExtract: '# Extract the source, then enter the project directory',
    commentRun: '# One-click launch',
    hint: 'Then open the Web UI to finish setup →',
  },
  community: {
    title: 'Join the KiraAI Community',
    desc: 'KiraAI is under active development and evolving fast. Whether you are a user or a developer, you are welcome to join us and watch this digital life grow.',
    channels: {
      github: {
        title: 'GitHub',
        desc: 'Read the source, file issues and PRs, and help build the project. Stars welcome ⭐',
        action: 'xxynet/KiraAI',
      },
      docs: {
        title: 'Documentation',
        desc: 'Complete deployment guides, configuration references and plugin development docs.',
        action: 'docs.kira-ai.top',
      },
      chat: {
        title: 'QQ Group & Discord',
        desc: 'Join the community to chat with developers and users, and get help when you need it.',
        action: 'Join the Community',
      },
    },
  },
  footer: {
    tagline: 'A modular, multi-platform AI digital life project.',
    product: 'Product',
    resources: 'Resources',
    opensource: 'Open Source',
    docs: 'Documentation',
    license: 'AGPL-3.0 License',
    copyright: '© {year} KiraAI. Open-sourced under the AGPL-3.0 license.',
    made: 'Made with ♥ for digital life',
  },
}
