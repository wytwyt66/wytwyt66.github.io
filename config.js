var config = {
    style: 'mapbox://styles/senbei666/clj8b3s6g000p01nufulp2yyj',
    accessToken: 'pk.eyJ1Ijoic2VuYmVpNjY2IiwiYSI6ImNsZ3hhcm1wcjAwNXYzZWxsZHg4Znc4a3EifQ.JOTZJXycw3C9YvwAFX2bhQ',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: '探秘北纬30度',
    subtitle: 'The Charm of Thirty Degrees North',
    byline: '',
    footer: 'Source: Story text from the Internet, June 2023. Data from <a href="https://whc.unesco.org/en/list/">UNESCO</a>',
    chapters: [
        {//项目综述done
            id: 'storytelling',
            alignment: 'full',
            title: '',
            image: '',
            description: '<h3 style="text-indent:2em;">北纬三十度是一个令人着迷的地理线，横跨多个国家和地区，拥有丰富多样的文化遗产和令人惊叹的自然景观。<br /><p style="text-indent:2em;">多彩文化的璀璨舞台——从埃及金字塔的古埃及文明到佩特拉古城的纳巴泰文化，您可以深入了解不同古代文明的历史、建筑和生活方式。在洛杉矶，您可以感受到现代娱乐产业的繁荣和好莱坞的魅力。而玛雅文明的遗址将带您穿越时空，探索这个古老文明的谜团。<br /><p style="text-indent:2em;">大自然的魔幻画卷——神农架的原始森林、富士山的壮丽景色以及埃及沙漠中的金字塔周围的沙丘，都展现了大自然的力量和美丽。在这些地方，您可以进行徒步探险、观赏野生动物、参观温泉等活动，与自然亲密接触，体验大自然的奇妙之处。<br /><p style="text-indent:2em;">亲子旅行殿堂——在洛杉矶，您可以参观主题公园、博物馆和电影摄影场地，享受无尽的娱乐乐趣。在埃及和约旦，您可以参加骑骆驼和乘坐马车的旅行，体验独特的交通方式。在富士山，您可以进行登山挑战，感受身心的极限与自我突破。<br /><p style="text-indent:2em;">总的来说，无论是放松身心还是教育研学，北纬三十度都是一个极具科普意义值得我们挖掘的地带，因此本项目从儿童视角出发，运用卡通风格地图，展示北纬三十度的人文、自然、气候等基本信息，同时设计相关经典景观亲子游路线。',
            location: {
                center: [94.25423, 25.45851],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '30n latitude',
                    opacity: 1
                },    
                  
                {
                    layer: 'range',
                    opacity: 0
                },      
                {
                    layer: 'country all 1',
                    opacity: 0
                },      
                {
                    layer: 'country all 2',
                    opacity: 0
                },
                {
                    layer: 'number',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '30n latitude',
                    opacity: 0
                },
            ]
        },
        {//北纬三十度简介done
            id: '北纬三十度介绍',
            alignment: 'right',
            title: '北纬三十度',
            description: '<h4 style="text-indent:2em;">北纬30度，主要是指北纬三十度上下波动五度所覆盖的范围。30纬度周边地区作为最适合人类居住的地方可以说是天堂和地狱集于一体。沿地球北纬30°线前行，既有许多奇妙的自然景观，又存在着许多令人难解的神秘、怪异现象，存在着许多地球文明信息。',
            location: {
                center: [94.25423, 29.45851],
                zoom: 1.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'range',
                    opacity: 0.6
                },
                {
                    layer: 'number',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'range',
                    opacity: 0
                },
                {
                    layer: 'countries-included',
                    opacity: 0
                }
            ]
        },
        {//涉及的国家done
            id: '国家总览',
            alignment: 'left',
            title: '跨越时光的多国之旅',
            description: '<h4 style="text-indent:2em;">这是一片神奇的土地，26个国家，浓厚的历史气息与多样的自然风貌并存：<br /><p style="text-indent:2em;">埃及，尼罗河畔的国度，金字塔耸立、红海闪耀，古老文明的遗迹犹如沉睡的宝藏； 摩洛哥，千年古城的迷人魅力，麦地那与卡萨布兰卡的文明在这里碰撞，印度的泰姬陵、红堡诉说着辉煌的过往，恒河与喜马拉雅雄伟屹立； 中国，举世瞩目的长城、秦始皇兵马俑，桂林山水的仙境般美景，华夏文明历久弥新；突尼斯，卡尔塔吉纳的古罗马遗址、斯塔克尔的蓝白色小镇，撒哈拉沙漠的浩瀚壮丽；伊朗，伊斯法罕的宏伟广场、设拉子的玛丽姆清真寺，波斯古迹的辉煌绽放；美国，大峡谷的壮丽深邃、圣菲的文化氛围，西部风光的广袤与辽阔。<br /><p style="text-indent:2em;">这些国家，如同一本奇幻的历史宝典，展示着千年辉煌与多样的地理风貌： 埃及的尼罗河与沙漠，摩洛哥的撒哈拉黄金，中国的江河与高山； 突尼斯的地中海与撒哈拉伊朗的大沙漠与山脉，美国的峡谷与大平原。<br /><p style="text-indent:2em;">无论是沉浸在历史的长河中，还是沐浴在大自然的壮丽之中，这些国家都为我们带来绝妙而难以忘怀的记忆。',
            location: {
                center: [10, 30],
                zoom: 1.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'country all 1',
                    opacity: 0.6
                },
                {
                    layer: 'country all 2',
                    opacity: 0.4
                },
                {
                    layer: 'range',
                    opacity: 0
                },
                {
                    layer: '30n latitude',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'country all 1',
                    opacity: 0
                },
                {
                    layer: 'country all 2',
                    opacity: 0
                }
            ]
        },
        {//自然气候
            id: '气候分布',
            alignment: 'right',
            title: '北纬三十度',
            description: '北纬30度，主要是指北纬三十度上下波动五度所覆盖的范围。30纬度周边地区作为最适合人类居住的地方可以说是天堂和地狱集于一体。沿地球北纬30°线前行，既有许多奇妙的自然景观，又存在着许多令人难解的神秘、怪异现象，存在着许多地球文明信息。',
            location: {
                center: [120, 29.45851],
                zoom: 2,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'terrain',
                    opacity: 1
                },
                {
                    layer: 'number',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'countries-included',
                    opacity: 0
                }
            ]
        },
        {//世界遗产点数目
            id: '世界遗产点',
            alignment: 'right',
            title: '北纬三十度',
            description: '北纬30度，主要是指北纬三十度上下波动五度所覆盖的范围。30纬度周边地区作为最适合人类居住的地方可以说是天堂和地狱集于一体。沿地球北纬30°线前行，既有许多奇妙的自然景观，又存在着许多令人难解的神秘、怪异现象，存在着许多地球文明信息。',
            location: {
                center: [94.25423, 29.45851],
                zoom: 1.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: '30n latitude',
                    opacity: 0
                },  
                {
                    layer: 'range',
                    opacity: 0
                },
                {
                    layer: 'number',
                    opacity: 0.6
                },
            ],
            onChapterExit: [
            ]
        },
        {//亲子之旅线路总览
            id: '北纬三十度介绍',
            alignment: 'right',
            title: '北纬三十度',
            description: '北纬30度，主要是指北纬三十度上下波动五度所覆盖的范围。30纬度周边地区作为最适合人类居住的地方可以说是天堂和地狱集于一体。沿地球北纬30°线前行，既有许多奇妙的自然景观，又存在着许多令人难解的神秘、怪异现象，存在着许多地球文明信息。',
            location: {
                center: [94.25423, 29.45851],
                zoom: 1.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {//埃及金字塔done
            id: '埃及金字塔',
            alignment: 'left',
            title: '金字塔——追溯古埃及文明',
            image: 'https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/cefc1e178a82b901ea88a0747e8da9773912ef54.jpg',
            description: '胡夫金字塔是位于埃及吉萨的一座古老建筑，也被称为大金字塔。是世界七大奇迹之一，以其宏伟的规模和精确的工艺而闻名于世。胡夫金字塔建于约公元前2600年左右，是埃及法老胡夫的陵墓。金字塔正面朝向北方，由数百万块巨大的花岗岩方块构成。每个方块都被准确地切割和摆放在一起，形成了金字塔的外形。胡夫金字塔的内部包含了许多房间和走廊，其中最著名的是法老的陵墓和王后的陵墓。胡夫金字塔的建造令人惊叹不已。历史学家和考古学家至今仍在研究其如何建造的方法。这座金字塔是古埃及文明的杰作，展示了古代人类的技术和工程能力。它也是埃及文化的象征。参观胡夫金字塔时，您可以进入金字塔内部，探索其神秘的走廊和房间。您还可以欣赏到令人叹为观止的视角，俯瞰整个吉萨高原和周围的金字塔群。',
            location: {
                center: [30.773,30.028],
                zoom: 7.5,
                pitch: 22.48,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: '30n',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '30n',
                    opacity: 0
                }
            ]
        },
        {//佩特拉done
            id: '佩特拉',
            alignment: 'left',
            title: '佩特拉古城——探访古老红玫瑰',
            image: 'https://pic1.zhimg.com/v2-edddaa93ca1aae5a51924de61f4c6b60_1200x500.jpg',
            description: '佩特拉古城是约旦的一个古老遗址，位于亚喀巴河谷的岩石峡谷中。它是世界上最著名的古代遗址之一，也是世界遗产和世界奇迹之一。佩特拉古城建于公元前1世纪，是纳巴泰人的首都。它的建筑风格融合了希腊、罗马、埃及和阿拉伯的元素，展现了多种文化的交融与融合。最著名的建筑是阿尔-哈桑神庙被认为是佩特拉的象征。在这座古老的城市里，隐藏着精美的建筑、神秘的宗教遗迹，以及悠久的历史文化遗产。漫步在狭窄的峡谷中，穿过一段段曲折的隧道，探索这个古老城市的奥秘，仿佛进入了一个神秘的世界。',
            location: {
                center: [35.44436, 30.32687],
                zoom: 12,
                pitch: 22.48,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: '30n',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '30n',
                    opacity: 0
                }
            ]
        },
        {//泰姬陵done
            id: 'agassiz1998',
            alignment: 'left',
            title: '泰姬陵——欣赏建筑之美',
            image: 'https://ts1.cn.mm.bing.net/th/id/R-C.dc96f046083e47b2070d4856fd3c7900?rik=IX1Wu%2bk4DJevyw&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fphotoblog%2f7%2f2%2f9%2f4%2f7294554%2f20088%2f6%2f1218036688694.jpg&ehk=DuoV0WEdVXWTFbY4IfIeKtRwj2p%2fDVFeISPk%2bkamlfg%3d&risl=&pid=ImgRaw&r=0',
            description: '印度知名度最高的古迹之一，在今印度距新德里200多公里外的北方邦的阿格拉城内，亚穆纳河右侧。是莫卧儿王朝第5代皇帝沙·贾汗为了纪念他已故皇后阿姬曼·芭奴，即泰姬·玛哈尔而建立的陵墓，被誉为“完美建筑”。作为莫卧儿王朝最伟大的陵寝，它既是印度建筑中最著名的，也是印度文化融合不同传统影响的体现。泰姬陵是印度穆斯林艺术最完美的瑰宝，是世界遗产中令世人赞叹的经典杰作之一。',
            location: {
                center: [78.29443, 27.35066],
                zoom: 10,
                pitch: 56.99,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {//神农架done
            id: '恩施',
            alignment: 'left',
            title: '神农架——自然探索之旅',
            image: 'https://www.hubei.gov.cn/jmct/hbms/snjlq_9047/201509/W020150916344549148492.jpg',
            description: '神农架是中国湖北省的一个自然保护区，也是中国最大的原始森林生态系统之一。它以其丰富的生物多样性和独特的自然景观而闻名于世。这里有茂密的森林、壮丽的山峦、清澈的湖泊和瀑布，以及各种野生动植物。这里还有大熊猫基地，是中国重要的大熊猫保护研究基地之一。这里有大片的竹林和丰富的野生动植物，为大熊猫提供了一个理想的生活环境。游客可以参观基地，近距离观察大熊猫的生活，了解它们的习性和保护工作。在这里，您可以与大自然亲密接触，欣赏宏伟壮丽的景色，感受珍稀动植物的魅力，同时也了解到保护和可持续发展的重要性。',
            location: {
                center: [109.962,30.252],
                zoom: 9,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {//富士山done
            id: '富士山',
            alignment: 'left',
            title: '富士山——火山奇观与自然之美',
            image: 'https://youimg1.c-ctrip.com/target/100q12000000t7cex5339.jpg',
            description: '富士山位于日本本州岛中南部，东距东京约80千米，海拔3776米，横跨日本静冈县与山梨县，占地面积约1200平方千米，是日本最高峰，世界上最大的活火山之一。作为一个重要的朝圣地和登山胜地，每年夏天，成千上万的人涌向富士山，挑战自己攀登其顶峰。富士山不仅是一座令人惊叹的自然奇观，还承载着丰富的文化和宗教意义，被视为山岳信仰的圣地。其周围还有美丽的富士五湖，提供了观赏富士山美景的理想场所。富士山的壮丽景色和独特的生态系统吸引着游客和探险家，使其成为日本不可或缺的一部分。',
            location: {
                center: [138.639, 35.428],
                zoom: 9,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {//洛杉矶done
            id: '迪士尼乐园',
            alignment: 'left',
            title: '洛杉矶——巡礼艺术之都',
            image: 'https://img1.qunarzz.com/travel/poi/1603/2c/78cf30add65ff9f7.jpg',
            description: '洛杉矶是美国加利福尼亚州最大的城市，也是世界上最知名的国际都市之一。这里有繁华的购物街区，如比佛利山庄和洛杉矶市中心。洛杉矶还以其丰富的娱乐产业而著名。迪士尼乐园是洛杉矶最著名的旅游景点之一，吸引了无数的游客。游客可以在这里享受刺激的游乐设施、观看精彩的表演和遇见迪士尼的经典角色。此外，洛杉矶还有许多其他的旅游景点，如环球影城、格里菲斯天文台、好莱坞星光大道等。好莱坞是全球最著名的电影产业中心，游客可以参观影视制作场地、观赏明星的手印和脚印，感受电影的魅力。无论你是文化爱好者、购物狂还是娱乐迷，都可以在这里找到自己感兴趣的活动和景点。',
            location: {
                center: [-117.91999, 33.81320],
                zoom: 9,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {//玛雅文明done
            id: '玛雅文明',
            alignment: 'left',
            title: '奇琴伊察——寻找失落文明',
            image: 'https://youimg1.c-ctrip.com/target/100o0j000000ad4hmE6C1.jpg',
            description: '玛雅文明是古代美洲最辉煌的文明之一，起源于公元前2000年左右，盛于公元250年至公元900年间。玛雅人在今天的墨西哥、危地马拉、洪都拉斯、伯利兹和萨尔瓦多等地建立了许多城市和城邦。他们以其复杂的文字系统、准确的历法、宏伟的建筑和高度发达的农业、数学和天文学等科学成就而闻名于世。奇琴伊察是玛雅文明的一个重要分支，他们居住在危地马拉高地地区。奇琴伊察人以其丰富的口头文学和神话传说而著名。玛雅文明的遗址包括神庙、宫殿、广场和球场等建筑，吸引着来自世界各地的游客前来探索和了解这个古老而神秘的文明。这些遗址展示了玛雅人的建筑技术、宗教信仰和日常生活的方方面面。',
            location: {
                center: [-88.40356, 20.40589],
                zoom: 9,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0.25
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {//结语
            id: '迪士尼乐园',
            alignment: 'left',
            title: '迪士尼——探索自然奥义',
            image: 'https://img1.qunarzz.com/travel/poi/1603/2c/78cf30add65ff9f7.jpg',
            description: '洛杉矶是美国加利福尼亚州最大的城市，也是世界上最知名的国际都市之一。这里有繁华的购物街区，如比佛利山庄和洛杉矶市中心。洛杉矶还以其丰富的娱乐产业而著名。迪士尼乐园是洛杉矶最著名的旅游景点之一，吸引了无数的游客。游客可以在这里享受刺激的游乐设施、观看精彩的表演和遇见迪士尼的经典角色。此外，洛杉矶还有许多其他的旅游景点，如环球影城、格里菲斯天文台、好莱坞星光大道等。好莱坞是全球最著名的电影产业中心，游客可以参观影视制作场地、观赏明星的手印和脚印，感受电影的魅力。无论你是文化爱好者、购物狂还是娱乐迷，都可以在这里找到自己感兴趣的活动和景点。',
            location: {
                center: [94.25423, 25.45851],
                zoom: 2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};