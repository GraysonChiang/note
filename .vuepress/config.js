module.exports = {
    title: '企業管理碩士班筆記',
    head: [
        ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}],
    ],
    base: '/note/',
    description: '臺北大學 商學院企業管理碩士班 107',
    plugins: ['mathjax','flowchart'],
    themeConfig: {
        nav: [
            {text: 'Github', link: 'https://github.com/GraysonChiang/note'}
        ],
        sidebar: [
            {
                title: '會計學',
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
            // {
            //     title: '行銷管理',
            //     children: [
            //         '/src/marketing/README.md',
            //         'src/marketing/ch1.md',
            //         'src/marketing/ch2.md',
            //         'src/marketing/ch5.md',
            //         'src/marketing/ch6.md',
            //         'src/marketing/ch7.md',
            //         'src/marketing/ch9.md',
            //     ]
            // },
            {
                title: '經濟學',
                children: [
                    'src/economic/economic',
                ]
            },
            {
                title: '統計學',
                children: [
                    'src/statistics/ch4',
                    'src/statistics/ch5',
                    'src/statistics/ch6',
                ]
            },
            {
                title: '研究方法',
                children: [
                    '/src/researchMethod/researchMethod'
                ]
            }
        ]
    }
};