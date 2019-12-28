module.exports = {
    title: '企業管理碩士班筆記',
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'}],
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}],
    ],
    base: '/note/',
    description: '臺北大學 商學院企業管理碩士班 107',
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
            '/src/researchMethod/researchMethod',
            {
                title: '會計',
                children: [
                    'src/accounting/ch08',
                    'src/accounting/ch09',
                    'src/accounting/ch10',
                    'src/accounting/ch11',
                    'src/accounting/ch12',
                    'src/accounting/ch13',
                    'src/accounting/ch15',
                    'src/accounting/ch16',
                    'src/accounting/ch17',
                ]
            },
            {
                title: '管理學',
                children: [
                    'src/management/ch1',
                    'src/management/ch2',
                    'src/management/ch3',
                    'src/management/ch6',
                    'src/management/ch7',
                    'src/management/ch8'
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