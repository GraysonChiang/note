module.exports = {
    title: '企業管理碩士班筆記',
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'}],
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}],
    ],
    base: '/note/',
    description: '臺北大學 商學院碩士班 107',
    markdown: {
        config: md => {
            md.use(require('markdown-it-katex'));
        }
    },
    themeConfig: {
        nav: [
            {text: 'Github', link: 'https://github.com/GraysonChiang/note'}
        ],
        sidebar: [
            '/src/SPSS/SPSS',
            {
                title: '會計',
                children: [
                    'src/account/ch08',
                    'src/account/ch09',
                    'src/account/ch10',
                    'src/account/ch11',
                    'src/account/ch12',
                    'src/account/ch13',
                    'src/account/ch15',
                    'src/account/ch16',
                    'src/account/ch17',
                ]
            },
            {
                title: '管理學',
                children: [
                    'src/management/ch1',
                    'src/management/ch2',
                    'src/management/ch3',
                ]
            },
            {
                title: '行銷管理',
                children: [
                    '/src/marketing/',
                    'src/marketing/CH1',
                    'src/marketing/CH2',
                    'src/marketing/CH5',
                    'src/marketing/CH6',
                    'src/marketing/CH7',
                    'src/marketing/CH9',
                ]
            },
            {
                title: '經濟學',
                children: [
                    'src/economic/economic',
                ]
            },
        ]
    }
};