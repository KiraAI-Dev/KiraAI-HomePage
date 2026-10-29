export default {
  meta: {
    title: 'KiraAI — モジュール式マルチプラットフォームAIデジタルライフ',
    description:
      'KiraAI — モジュール式・マルチプラットフォームのAIデジタルライフプロジェクト。様々なAIモデルとチャットプラットフォームをつなぎ、あなただけのデジタルライフを。',
  },
  docs_url: 'https://docs.kira-ai.top/',
  nav: {
    features: '特徴',
    adapters: 'アダプター',
    quickstart: 'クイックスタート',
    community: 'コミュニティ',
    docs: 'ドキュメント',
    plugins: 'プラグイン',
  },
  hero: {
    badge: 'オープンソース · AGPL-3.0 · 活発に開発中',
    title1: 'あなただけの',
    title2: 'AIデジタルライフ',
    subtitle:
      'KiraAI はモジュール式・マルチプラットフォームのAIデジタルライフプロジェクト。デジタルライフハブを中心に、様々なAIモデルとチャットプラットフォームをつなぎ、人間らしいAIパートナーをあなたの身近なあらゆる場所へ。',
    ctaStart: 'はじめる',
    ctaDocs: 'ドキュメントを読む',
    metaBackend: 'バックエンドエンジン',
    metaWebui: 'Web管理画面',
    metaOsValue: 'Win / macOS / Linux',
    metaOs: '全プラットフォーム対応',
  },
  features: {
    title: '「デジタルライフ」のためのアーキテクチャ',
    desc: 'デジタルライフハブ（Digital Life Hub）を中心に、モデル・プラットフォーム・能力はすべて着脱可能なモジュール。自由に組み合わせて、理想のAIパートナーを。',
    items: {
      webui: {
        title: '使いやすいWeb UI',
        desc: 'すぐに使えるモダンな管理画面。プロバイダー、アダプター、キャラクター設定をすべてGUIで設定でき、設定ファイルの編集は不要。',
      },
      llm: {
        title: '柔軟なLLMサポート',
        desc: '各種言語モデルプロバイダーを自由に接続。モデルも自由に切り替えでき、特定ベンダーにロックインされません。',
      },
      message: {
        title: '豊富なメッセージ機能',
        desc: '多彩なメッセージ要素と柔軟な送信メカニズムに対応。テキスト、画像、音声などを自由に組み合わせられます。',
      },
      plugin: {
        title: 'プラグイン拡張システム',
        desc: 'プラグイン／アドオンで機能を拡張。あなたのデジタルライフは成長し続け、新しいスキルを獲得します。',
      },
      adapter: {
        title: 'マルチプラットフォーム',
        desc: '一度のデプロイで QQ、Telegram、WeChat、Discord、Bilibili など複数のプラットフォームで同時に活動。',
      },
      multimodal: {
        title: 'マルチモーダルAI能力',
        desc: '会話だけではなく、TTS音声合成、STT音声認識、画像などのマルチモーダル能力を統合。',
      },
    },
  },
  adapters: {
    title: '一つのデジタルライフが、すべてのプラットフォームで',
    desc: 'アダプターはデジタルライフハブと各チャットプラットフォームをつなぎます。複数のアダプターを接続すれば、AIパートナーは異なるプラットフォームで同時に、様々な人と会話できます。',
    soon: 'Coming',
    items: {
      qq: '中国で最も活発なSNS',
      telegram: 'グローバルなメッセージング',
      wechat: 'WeChatエコシステム連携',
      discord: 'コミュニティ＆ゲームボイス',
      bilibili: 'コメントとプライベートメッセージ',
      more: 'さらなるアダプターを開発中',
    },
    abilitiesLabel: 'AI能力',
    abilities: {
      llm: 'LLM対話',
      tts: 'TTS音声合成',
      stt: 'STT音声認識',
      image: '画像生成',
      selfie: 'セルフィー',
    },
  },
  quickstart: {
    title: 'ランチャーでデプロイ',
    desc: 'KiraAI ランチャーのグラフィカルな画面で、デジタルライフを簡単にデプロイ・起動できます。',
    steps: {
      s1: {
        title: 'ランチャーをダウンロード',
        desc: 'ランチャーのデプロイガイドから、お使いのシステムに合うインストーラー版またはポータブル版を選びます。',
      },
      s2: {
        title: 'インストールして起動',
        desc: 'インストーラーの案内に従ってインストールするか、ポータブル版を必要に応じて展開し、そのまま実行します。',
      },
      s3: {
        title: '設定を完了',
        desc: 'ランチャーで KiraAI をデプロイ・起動し、Web管理画面でモデル、アダプター、キャラクターを設定します。',
      },
    },
    download: 'ランチャーをダウンロード',
    installerTitle: 'インストーラー版（推奨）',
    installerDesc: '案内に従ってインストール。自動更新に対応しています。',
    portableTitle: 'ポータブル版',
    portableDesc: '必要に応じて展開し、そのまま実行。インストールは不要です。',
    guide: '詳しいデプロイガイドを見る →',
  },
  community: {
    title: 'KiraAI コミュニティに参加しよう',
    desc: 'KiraAI は活発に開発が進行中で、機能も急速に進化しています。ユーザーも開発者も大歓迎。デジタルライフの成長を一緒に見守りましょう。',
    channels: {
      github: {
        title: 'GitHub',
        desc: 'ソースコードを読み、Issue や PR で開発に参加。Star も歓迎です ⭐',
        action: 'xxynet/KiraAI',
      },
      docs: {
        title: '公式ドキュメント',
        desc: 'デプロイガイド、設定リファレンス、プラグイン開発ドキュメントを完備。',
        action: 'docs.kira-ai.top',
      },
      chat: {
        title: 'QQグループ & Discord',
        desc: 'コミュニティに参加して、開発者やユーザーと交流したり、助けを得られます。',
        action: 'コミュニティに参加',
      },
    },
  },
  footer: {
    tagline: 'モジュール式・マルチプラットフォームのAIデジタルライフプロジェクト。',
    product: 'プロダクト',
    resources: 'リソース',
    opensource: 'オープンソース',
    docs: '公式ドキュメント',
    license: 'AGPL-3.0 ライセンス',
    copyright: '© {year} KiraAI. AGPL-3.0 ライセンスの下で公開。',
    made: 'Made with ♥ for digital life',
  },
}
