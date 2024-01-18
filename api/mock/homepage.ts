const widgetsBlocks = [
    {
        type: 'hero',
        code: 'homepage-hero',
        data: {
            type: 'video-player', // 'images-slider', 'video-player'
            video: {
                url: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/videos/210328_01_Rugby%2520Ball_4k_011.mp4',
                hero_logo:
                    'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage/Group 1.png',
                hero_title: [
                    {
                        locale: 'en',
                        message: 'Olympic Qualifiers',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'Olympic Qualifiers',
                    },
                ],
                hero_subtitle: [
                    {
                        locale: 'en',
                        message: '18-19 NOV 2023',
                    },
                    {
                        locale: 'zh-hk',
                        message: '18-19 NOV 2023',
                    },
                ],
                cta_text: [
                    {
                        locale: 'en',
                        message: 'Link to Stream',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'Link to Stream',
                    },
                ],
                cta_url: '#',
            },
            slides: [
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-slide/jiachen-lin-oTvup-rOLEE-unsplash.jpg',
                    title: [
                        {
                            locale: 'en',
                            message: 'NEWS',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'NEWS',
                        },
                    ],
                    subtitle: [
                        {
                            locale: 'en',
                            message: 'Hong Kong Sevens Long Lunch',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Hong Kong Sevens Long Lunch',
                        },
                    ],
                    cta_url: '#',
                },
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-slide/Frame 427322306.png',
                    title: [
                        {
                            locale: 'en',
                            message: 'DOMESTIC',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'DOMESTIC',
                        },
                    ],
                    subtitle: [
                        {
                            locale: 'en',
                            message: 'HK7s Kicks Off in 5 Days!',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'HK7s Kicks Off in 5 Days!',
                        },
                    ],
                    cta_url: '#',
                },
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-slide/image 2.png',
                    title: [
                        {
                            locale: 'en',
                            message: 'DOMESTIC',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'DOMESTIC',
                        },
                    ],
                    subtitle: [
                        {
                            locale: 'en',
                            message: 'Hong Kong China V Germany - Men’s XV',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Hong Kong China V Germany - Men’s XV',
                        },
                    ],
                    cta_url: '#',
                },
            ],
        },
    },
    {
        type: 'homepage-match-center',
        code: 'homepage-match-center',
        data: {
            title: [
                {
                    locale: 'en',
                    message: 'MATCH CENTER',
                },
                {
                    locale: 'zh-hk',
                    message: 'MATCH CENTER',
                },
            ],
            highlighted_match: {
                upcoming_text: [
                    {
                        locale: 'en',
                        message: 'UPCOMING MATCH',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'UPCOMING MATCH',
                    },
                ],
                view_match_cta: [
                    {
                        locale: 'en',
                        message: 'View Match',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'View Match',
                    },
                ],
                match: {
                    start_time: '2024-03-09T18:00:00+08:00',
                    end_time: '2024-03-09T19:20:00+08:00',
                    name: [
                        {
                            locale: 'en',
                            message: "Nan Fung Sewit Women's Premiership",
                        },
                        {
                            locale: 'zh-hk',
                            message: "Nan Fung Sewit Women's Premiership",
                        },
                    ],
                    round: [
                        {
                            locale: 'en',
                            message: 'Round 15',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Round 15',
                        },
                    ],
                    venue: {
                        name: [
                            {
                                locale: 'en',
                                message: "King's Park Sports Ground Pitch 1",
                            },
                            {
                                locale: 'zh-hk',
                                message: "King's Park Sports Ground Pitch 1",
                            },
                        ],
                        address: [
                            {
                                locale: 'en',
                                message: '11 Wylie Path',
                            },
                            {
                                locale: 'zh-hk',
                                message: '11 Wylie Path',
                            },
                        ],
                        latitude: 22.3089317,
                        longitude: 114.1778174,
                    },
                    home_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/852-kroll-usrc-tigers-rfc.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Kroll USRC Tigers RFC',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Kroll USRC Tigers RFC',
                            },
                        ],
                    },
                    away_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/850-societe-generale-valley-rfc.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Societe Generale Valley RFC',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Societe Generale Valley RFC',
                            },
                        ],
                    },
                },
            },
            upcoming_matches: [
                {
                    start_time: '2024-01-12T19:30:00+08:00',
                    end_time: '2024-01-12T19:55:00+08:00',
                    name: [
                        {
                            locale: 'en',
                            message: 'Touch Winter League 2023 - Community Competition',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Touch Winter League 2023 - Community Competition',
                        },
                    ],
                    round: [
                        {
                            locale: 'en',
                            message: 'Quarter Finals',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Quarter Finals',
                        },
                    ],
                    venue: {
                        name: [
                            {
                                locale: 'en',
                                message: 'Happy Valley - Pitch 6A',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Happy Valley - Pitch 6A',
                            },
                        ],
                        address: [
                            {
                                locale: 'en',
                                message: '',
                            },
                            {
                                locale: 'zh-hk',
                                message: '',
                            },
                        ],
                        latitude: 22.2731007,
                        longitude: 114.1892659,
                    },
                    home_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/390-padel.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Padel+',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Padel+',
                            },
                        ],
                    },
                    away_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/381-neo-touch-beta.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Neo Touch Beta',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Neo Touch Beta',
                            },
                        ],
                    },
                },
                {
                    start_time: '2024-01-12T19:30:00+08:00',
                    end_time: '2024-01-12T19:55:00+08:00',
                    name: [
                        {
                            locale: 'en',
                            message: 'Touch Winter League 2023 - Community Competition',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Touch Winter League 2023 - Community Competition',
                        },
                    ],
                    round: [
                        {
                            locale: 'en',
                            message: 'Quarter Finals',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Quarter Finals',
                        },
                    ],
                    venue: {
                        name: [
                            {
                                locale: 'en',
                                message: 'Happy Valley - Pitch 6B',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Happy Valley - Pitch 6B',
                            },
                        ],
                        address: [
                            {
                                locale: 'en',
                                message: '',
                            },
                            {
                                locale: 'zh-hk',
                                message: '',
                            },
                        ],
                        latitude: 22.2731007,
                        longitude: 114.1892659,
                    },
                    home_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/400-thunder-mixed.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'THUNDER MIXED',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'THUNDER MIXED',
                            },
                        ],
                    },
                    away_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/410-astro.jpeg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Astro',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Astro',
                            },
                        ],
                    },
                },
                {
                    start_time: '2024-01-12T19:55:00+08:00',
                    end_time: '2024-01-12T20:20:00+08:00',
                    name: [
                        {
                            locale: 'en',
                            message: 'Touch Winter League 2023 - Championship League',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Touch Winter League 2023 - Championship League',
                        },
                    ],
                    round: [
                        {
                            locale: 'en',
                            message: 'Round 5',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Round 5',
                        },
                    ],
                    venue: {
                        name: [
                            {
                                locale: 'en',
                                message: 'Happy Valley - Pitch 4',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Happy Valley - Pitch 4',
                            },
                        ],
                        address: [
                            {
                                locale: 'en',
                                message: 'happy valley recreation ground',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'happy valley recreation ground',
                            },
                        ],
                        latitude: 22.271161,
                        longitude: 114.183639,
                    },
                    home_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/373-zion-development.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Zion Development',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Zion Development',
                            },
                        ],
                    },
                    away_team: {
                        logo: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/teams/370-raven-ii.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Raven II',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Raven II',
                            },
                        ],
                    },
                },
            ],
            view_match_center_cta: [
                {
                    locale: 'en',
                    message: 'View Match Center',
                },
                {
                    locale: 'zh-hk',
                    message: 'View Match Center',
                },
            ],
        },
    },
    {
        type: 'homepage-event',
        code: 'homepage-event',
        data: {
            background_text: {
                dark: 'HONG KONG CHINA RUGBY',
                light: 'A GAME FOR ALL',
            },
            title: [
                {
                    locale: 'en',
                    message: "WHAT'S ON",
                },
                {
                    locale: 'zh-hk',
                    message: "WHAT'S ON",
                },
            ],
            content: [
                {
                    locale: 'en',
                    message:
                        "From thrilling matches and intense training sessions to engaging community events, we've got it all. Stay informed and involved in the pulsating world of rugby in Hong Kong. Mark your calendar and join the excitement. Explore now!",
                },
                {
                    locale: 'zh-hk',
                    message:
                        "From thrilling matches and intense training sessions to engaging community events, we've got it all. Stay informed and involved in the pulsating world of rugby in Hong Kong. Mark your calendar and join the excitement. Explore now!",
                },
            ],
            cta_text: [
                {
                    locale: 'en',
                    message: 'View More',
                },
                {
                    locale: 'zh-hk',
                    message: 'View More',
                },
            ],
            items: [
                {
                    slug: 'hong-kong-sevens-long-lunch',
                    start_at: '2024-02-17T14:00:00+08:00',
                    end_at: '2024-02-17T20:30:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/event/image 41.png',
                    name: [
                        {
                            locale: 'en',
                            message: 'Hong Kong Sevens Long Lunch',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'Hong Kong Sevens Long Lunch',
                        },
                    ],
                    location: [
                        {
                            locale: 'en',
                            message: "King's Park Sports Ground",
                        },
                        {
                            locale: 'zh-hk',
                            message: "King's Park Sports Ground",
                        },
                    ],
                },
            ],
        },
    },
    {
        type: 'homepage-countdown',
        code: 'homepage-countdown',
        data: {
            image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage/Group 48095643.png',
            title: [
                {
                    locale: 'en',
                    message: '#HK7S',
                },
                {
                    locale: 'zh-hk',
                    message: '#HK7S',
                },
            ],
            subtitle: {
                first: [
                    {
                        locale: 'en',
                        message: 'WHERE THE WORLD',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'WHERE THE WORLD',
                    },
                ],
                second: [
                    {
                        locale: 'en',
                        message: 'COMES TO PLAY',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'COMES TO PLAY',
                    },
                ],
            },
            content: [
                {
                    locale: 'en',
                    message:
                        'At the #HK7s, you can expect 3 days of action, entertainment and electric energy. Whether you’re a rugby head or here for the ride, this weekend whirlwind of a tournament has something for everyone.',
                },
                {
                    locale: 'zh-hk',
                    message:
                        'At the #HK7s, you can expect 3 days of action, entertainment and electric energy. Whether you’re a rugby head or here for the ride, this weekend whirlwind of a tournament has something for everyone.',
                },
            ],
            countdown_message: [
                {
                    locale: 'en',
                    message: 'TICKETS GO LIVE IN:',
                },
                {
                    locale: 'zh-hk',
                    message: 'TICKETS GO LIVE IN:',
                },
            ],
            units: {
                day: [
                    {
                        locale: 'en',
                        message: 'DAYS',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'DAYS',
                    },
                ],
                hour: [
                    {
                        locale: 'en',
                        message: 'HOURS',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'HOURS',
                    },
                ],
                min: [
                    {
                        locale: 'en',
                        message: 'MINUTES',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'MINUTES',
                    },
                ],
                sec: [
                    {
                        locale: 'en',
                        message: 'SECONDS',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'SECONDS',
                    },
                ],
            },
            target_time: '2024-07-05T17:30:00+08:00',
            button: {
                text: [
                    {
                        locale: 'en',
                        message: 'Visit HK7s Website',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'Visit HK7s Website',
                    },
                ],
                url: '#',
            },
        },
    },
    {
        type: 'homepage-news',
        code: 'homepage-news',
        data: {
            items: [
                {
                    slug: 'hkcr-new-years-day-youth-rugby-tournament-kicks-off-2024',
                    category_name: [
                        {
                            locale: 'en',
                            message: 'HK China 15s National Men',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'HK China 15s National Men',
                        },
                    ],
                    time: '2024-01-03T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/HKCR-20240101-IL-3932-1_240103_104646.jpg',
                    title: [
                        {
                            locale: 'en',
                            message: 'HKCR NEW YEAR’S DAY YOUTH RUGBY TOURNAMENT KICKS-OFF 2024',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'HKCR NEW YEAR’S DAY YOUTH RUGBY TOURNAMENT KICKS-OFF 2024',
                        },
                    ],
                },
                {
                    slug: '2024-new-years-day-youth-rugby-tournament-set-to-thrill-with-showcasing-rising-young-talent',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-22T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/9e804b28-1173-49d0-8321-48bb73176aa5.jpeg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                "2024 NEW YEAR'S DAY YOUTH RUGBY TOURNAMENT SET TO THRILL WITH SHOWCASING RISING YOUNG TALENT",
                        },
                        {
                            locale: 'zh-hk',
                            message: '蓄勢待發！「2024年元旦青少年欖球錦標賽」期待見證新秀誕生',
                        },
                    ],
                },
                {
                    slug: 'hong-kong-china-clinch-8th-asia-rugby-mens-u19-championship',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-18T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/HKCR-20231216-CW-0243.jpg',
                    title: [
                        {
                            locale: 'en',
                            message: 'HONG KONG CHINA CLINCH 8TH ASIA RUGBY MEN’S U19 CHAMPIONSHIP',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'HONG KONG CHINA CLINCH 8TH ASIA RUGBY MEN’S U19 CHAMPIONSHIP',
                        },
                    ],
                },
                {
                    slug: 'hkcr-launches-womens-leadership-programme-lift',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-08T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/1.jpeg',
                    title: [
                        {
                            locale: 'en',
                            message: 'HKCR LAUNCHES WOMEN’S LEADERSHIP PROGRAMME “LIFT”',
                        },
                        {
                            locale: 'zh-hk',
                            message: '中國香港欖球總會開展女性領導力計劃「提升LIFT」',
                        },
                    ],
                },
                {
                    slug: 'u19-asia-rugby-championship-everything-you-need-to-know',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-05T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/HKCR-20231202-IL-0001.jpg',
                    title: [
                        {
                            locale: 'en',
                            message: 'U19 ASIA RUGBY CHAMPIONSHIP: EVERYTHING YOU NEED TO KNOW',
                        },
                        {
                            locale: 'zh-hk',
                            message: '亞洲U19男子十五人欖球錦標賽賽前擇要',
                        },
                    ],
                },
                {
                    slug: 'rosaryhill-secondary-school-and-ymca-of-hong-kong-christian-college-claimed-mens-and-womens-grade-a-titles-of-2023-24-hkssf-all-hong-kong-inter-secondary-school-rugby-sevens-competition-respectively',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-04T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/BJ6I8659.jpg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                "ROSARYHILL SECONDARY SCHOOL AND YMCA OF HONG KONG CHRISTIAN COLLEGE CLAIMED MEN'S AND WOMEN'S GRADE A TITLES OF 2023-24 HKSSF ALL HONG KONG INTER-SECONDARY SCHOOL RUGBY SEVENS COMPETITION RESPECTIVELY",
                        },
                        {
                            locale: 'zh-hk',
                            message:
                                "ROSARYHILL SECONDARY SCHOOL AND YMCA OF HONG KONG CHRISTIAN COLLEGE CLAIMED MEN'S AND WOMEN'S GRADE A TITLES OF 2023-24 HKSSF ALL HONG KONG INTER-SECONDARY SCHOOL RUGBY SEVENS COMPETITION RESPECTIVELY",
                        },
                    ],
                },
                {
                    slug: 'ticketing-details-announced-for-2024-cathay-hsbc-hong-kong-sevens',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-12-01T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/photo_231201_120249.jpg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                'TICKETING DETAILS ANNOUNCED FOR 2024 CATHAY/HSBC HONG KONG SEVENS',
                        },
                        {
                            locale: 'zh-hk',
                            message: '「國泰/滙豐香港國際七人欖球賽2024」門票現已公開發售',
                        },
                    ],
                },
                {
                    slug: 'hong-kong-china-rugby-ceo-robbie-mcrobbie-to-step-down-in-mid-2024',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-11-28T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/Robbie-McRobbie-Sevens_231128_124059.jpg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                'HONG KONG CHINA RUGBY CEO ROBBIE MCROBBIE TO STEP DOWN IN MID-2024',
                        },
                        {
                            locale: 'zh-hk',
                            message: '中國香港欖球總會行政總裁麥偉彬計劃2024年中卸任',
                        },
                    ],
                },
                {
                    slug: 'finishing-off-the-first-training-block-of-hysan-hkcr-academy-strong',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-11-27T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/LY301572.jpg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                'FINISHING OFF THE FIRST TRAINING BLOCK OF HYSAN HKCR ACADEMY STRONG',
                        },
                        {
                            locale: 'zh-hk',
                            message: '「希慎—中國香港欖球總會青少年欖球學院」首階段集訓圓滿結束',
                        },
                    ],
                },
                {
                    slug: 'germany-test-2',
                    category_name: [
                        {
                            locale: 'en',
                            message: null,
                        },
                        {
                            locale: 'zh-hk',
                            message: null,
                        },
                    ],
                    time: '2023-11-23T00:00:00+08:00',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/news/thumbnail/HKCR-20231118-IL-2743.jpg',
                    title: [
                        {
                            locale: 'en',
                            message:
                                'HONG KONG CHINA MEN SECURE THE NOVEMBER FEST INTERNATIONAL TROPHY',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'GERMANY TEST 2',
                        },
                    ],
                },
            ],
            title: [
                {
                    locale: 'en',
                    message: 'LATEST NEWS',
                },
                {
                    locale: 'zh-hk',
                    message: 'LATEST NEWS',
                },
            ],
            all_news_text: [
                {
                    locale: 'en',
                    message: 'View More',
                },
                {
                    locale: 'zh-hk',
                    message: 'View More',
                },
            ],
        },
    },
    {
        type: 'homepage-impact',
        code: 'homepage-impact',
        data: {
            background_text: {
                dark: 'GAME-CHANGING',
                light: 'GAME-CHANGING',
            },
            title: [
                {
                    locale: 'en',
                    message: 'IMPACT',
                },
                {
                    locale: 'zh-hk',
                    message: 'IMPACT',
                },
            ],
            content: [
                {
                    locale: 'en',
                    message:
                        'To give back to the community, we engage in many social initiatives that aim to bring the value-added benefits of the game.',
                },
                {
                    locale: 'zh-hk',
                    message:
                        'To give back to the community, we engage in many social initiatives that aim to bring the value-added benefits of the game.',
                },
            ],
            cta_text: [
                {
                    locale: 'en',
                    message: 'View More',
                },
                {
                    locale: 'zh-hk',
                    message: 'View More',
                },
            ],
            cta_url: '#',
            items: [
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-impact/Rectangle.png',
                    title: [
                        {
                            locale: 'en',
                            message: 'RUGBY FOR GOOD',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'RUGBY FOR GOOD',
                        },
                    ],
                    content: [
                        {
                            locale: 'en',
                            message:
                                'To empower young people with social and emotional skills, and for them to actualise their potential through the power of sport and education',
                        },
                        {
                            locale: 'zh-hk',
                            message:
                                'To empower young people with social and emotional skills, and for them to actualise their potential through the power of sport and education',
                        },
                    ],
                    cta_url: '#',
                },
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-impact/Rectangle (1).png',
                    title: [
                        {
                            locale: 'en',
                            message: 'HSBC TRY RUGBY',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'HSBC TRY RUGBY',
                        },
                    ],
                    content: [
                        {
                            locale: 'en',
                            message:
                                "HSBC Try Rugby Programme partners with HKCR and HKeDU to bring the fun and values of rugby to Hong Kong's kids, promoting health and skills.",
                        },
                        {
                            locale: 'zh-hk',
                            message:
                                "HSBC Try Rugby Programme partners with HKCR and HKeDU to bring the fun and values of rugby to Hong Kong's kids, promoting health and skills.",
                        },
                    ],
                    cta_url: '#',
                },
                {
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-impact/Rectangle (2).png',
                    title: [
                        {
                            locale: 'en',
                            message: 'ALL ABOUT RUGBY',
                        },
                        {
                            locale: 'zh-hk',
                            message: 'ALL ABOUT RUGBY',
                        },
                    ],
                    content: [
                        {
                            locale: 'en',
                            message:
                                'Join the Jockey Club "All About Rugby"/"Rugby Spirit" program. Learn, experience teamwork, and ignite your passion for rugby today!',
                        },
                        {
                            locale: 'zh-hk',
                            message:
                                'Join the Jockey Club "All About Rugby"/"Rugby Spirit" program. Learn, experience teamwork, and ignite your passion for rugby today!',
                        },
                    ],
                    cta_url: '#',
                },
            ],
        },
    },
    {
        type: 'gallery',
        code: 'homepage-gallery',
        data: {
            photos: [
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/2.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/2.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/3.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/3.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/4.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/4.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/5.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/5.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/6.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/6.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/7.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/7.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/9.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/9.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/8.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/8.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/10.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/10.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/15.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/15.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/13.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/13.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/12.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/12.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/11.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/11.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/14.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/14.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/16.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/16.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/17.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/17.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/18.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/18.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/19.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/19.jpg',
                    type: 'image',
                    url: '#',
                },
                {
                    thumbnail:
                        'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/thumbnail/1.jpg',
                    image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/homepage-photo/1.jpg',
                    type: 'video',
                    url: '#',
                },
            ],
        },
    },
    {
        type: 'homepage-sponsor',
        code: 'homepage-sponsor',
        data: {
            title: [
                {
                    locale: 'en',
                    message: 'OUR SPONSORS & PARTNERS',
                },
                {
                    locale: 'zh-hk',
                    message: 'OUR SPONSORS & PARTNERS',
                },
            ],
            sponsors: {
                title: [
                    {
                        locale: 'en',
                        message: 'MAJOR SPONSORS AND PARTNERS',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'MAJOR SPONSORS AND PARTNERS',
                    },
                ],
                items: [
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Cathay-Logo.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Cathay',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Cathay',
                            },
                        ],
                        url: 'https://www.cathaypacific.com/cx/en_HK.html',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Asphodel-logo-color.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Asphodel',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Asphodel',
                            },
                        ],
                        url: 'https://asphodel.fit/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Bupa-HK-logo-hrz-2-lines.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Bupa',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Bupa',
                            },
                        ],
                        url: 'https://www.bupa.com.hk/en/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Dettol-Master-Logo-resize.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Dettol',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Dettol',
                            },
                        ],
                        url: 'https://www.dettol.com.hk/en/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/First-Point-USA-with-frame-2.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'FirstPoint',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'FirstPoint',
                            },
                        ],
                        url: 'https://www.firstpointusa.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/220420-HKRU-Websit-logos-02.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'HSBC',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'HSBC',
                            },
                        ],
                        url: 'https://www.hsbc.com.hk/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/hysan-logo.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Hysan',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Hysan',
                            },
                        ],
                        url: 'https://www.hysan.com.hk/zh-hant/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/kukri12.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Kukri',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Kukri',
                            },
                        ],
                        url: 'https://www.kukrisports.hk/teamshop/hk7sonlineshop/landingPageNg.action',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/SEWIT_logo_final_rgb-112.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Nan Fung Group',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Nan Fung Group',
                            },
                        ],
                        url: 'https://www.hkrugby.com/about/partners-sponsors',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/QHC-logo.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Quality HealthCare',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Quality HealthCare',
                            },
                        ],
                        url: 'https://www.qhms.com/en/services',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/220420-HKRU-Websit-logos-01.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Rhino',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Rhino',
                            },
                        ],
                        url: 'https://www.rhinoasiadirect.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/tdw-2.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Tanner De Witt',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Tanner De Witt',
                            },
                        ],
                        url: 'https://www.tannerdewitt.com/',
                    },
                ],
            },
            suppliers: {
                title: [
                    {
                        locale: 'en',
                        message: 'PARTNERS AND SUPPLIERS',
                    },
                    {
                        locale: 'zh-hk',
                        message: 'PARTNERS AND SUPPLIERS',
                    },
                ],
                items: [
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/sponsor/17-laureus.jpg',
                        name: [
                            {
                                locale: 'en',
                                message: 'Laureus',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Laureus',
                            },
                        ],
                        url: 'https://www.laureus.com/sport-for-good',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/sponsor/technogym.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Technogym',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Technogym',
                            },
                        ],
                        url: 'https://www.technogym.com/hk/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Black-Isle_CMYK-01-002.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Black Isle Global',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Black Isle Global',
                            },
                        ],
                        url: 'https://blackisleglobal.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Rentokil-Initial-logo.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Rentokil',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Rentokil',
                            },
                        ],
                        url: 'https://www.rentokil.com/hk/en/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Active_Brand_Logo.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Active Brands Asia',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Active Brands Asia',
                            },
                        ],
                        url: 'https://www.ab-asia.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/Maxwells-edit.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Maxwell’s Clothiers',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Maxwell’s Clothiers',
                            },
                        ],
                        url: 'http://www.maxwellsclothiers.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/DiligentLogo_Horiz_RGBblack1-2.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Diligent',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Diligent',
                            },
                        ],
                        url: 'https://diligent.com/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/mypｒotein.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'Myprotein',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'Myprotein',
                            },
                        ],
                        url: 'https://www.myprotein.com.hk/',
                    },
                    {
                        image: 'https://hkrugby-public-dev.s3.ap-east-1.amazonaws.com/partner/redbox-sm.png',
                        name: [
                            {
                                locale: 'en',
                                message: 'RedBox Storage',
                            },
                            {
                                locale: 'zh-hk',
                                message: 'RedBox Storage',
                            },
                        ],
                        url: 'https://www.redboxstorage.com.hk/',
                    },
                ],
            },
        },
    },
] as any

export default widgetsBlocks
