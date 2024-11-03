// 模拟图片数据
const imageUrls = [
    'https://img2.baidu.com/it/u=3169048302,2787891113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625',
    'https://img2.baidu.com/it/u=3674349610,1960622159&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=593',
    'https://img0.baidu.com/it/u=2723832896,1473402773&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img0.baidu.com/it/u=2073799768,3850318005&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=606',
    'https://img1.baidu.com/it/u=827932756,1768776838&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1000',
    'https://img2.baidu.com/it/u=999623729,4078096090&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=1198170989,3202591628&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=666',
    'https://img0.baidu.com/it/u=2303170124,2740113181&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=837117229,3689116873&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=2458254181,2114108202&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=651',
    'https://img0.baidu.com/it/u=1110173229,3658022788&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=875',
    'https://img1.baidu.com/it/u=3696143537,2084419986&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=751',
    'https://img0.baidu.com/it/u=1944145274,2595422069&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img1.baidu.com/it/u=3644071348,701245431&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img2.baidu.com/it/u=418119941,992761924&fm=253&fmt=auto&app=138&f=JPEG?w=744&h=500',
    'https://img2.baidu.com/it/u=2998222652,2464470751&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img1.baidu.com/it/u=1987248179,3946191840&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=560',
    'https://img0.baidu.com/it/u=3119677497,2799204532&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img2.baidu.com/it/u=2558608618,1764111409&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=625',
    'https://img0.baidu.com/it/u=3476162236,2067063427&fm=253&fmt=auto&app=138&f=JPEG?w=1003&h=500',
    'https://img1.baidu.com/it/u=1491386082,1325616957&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img1.baidu.com/it/u=4125122225,2368761217&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=102850621,4119990433&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    'https://img0.baidu.com/it/u=1215082843,58451841&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    'https://img1.baidu.com/it/u=1007244775,1420219620&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img1.baidu.com/it/u=1995972917,731399878&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img2.baidu.com/it/u=1365396451,3372829082&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img0.baidu.com/it/u=2090451452,3115296392&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img1.baidu.com/it/u=959202072,3510928410&fm=253&fmt=auto&app=120&f=JPEG?w=700&h=500',
    'https://img2.baidu.com/it/u=4286128727,195488589&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=593',
    'https://img2.baidu.com/it/u=2580992419,2239566559&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img1.baidu.com/it/u=3339131508,3330995275&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=3115280703,1849248758&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=646',
    'https://img2.baidu.com/it/u=2024270362,2238085198&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=810',
    'https://img2.baidu.com/it/u=1522343437,2365548171&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
    'https://img2.baidu.com/it/u=1347373067,913476026&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=4219086871,3281300153&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=3225008975,2444942651&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=639',
    'https://img2.baidu.com/it/u=2082291136,212505086&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img1.baidu.com/it/u=3416175441,3673830412&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
    'https://img2.baidu.com/it/u=1190888755,147224116&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=653',
];

const mockPins = imageUrls.slice(0, 3).map((url, index) => ({
    id: index + 1,
    imageUrl: url,
    title: `美丽图片 ${index + 1}`,
    description: `精选图片 ${index + 1}`
}));

// 修改生成更多数据的函数
function generateMorePins(count) {
    const startIndex = mockPins.length;
    const newPins = [];

    for (let i = 0; i < count && (startIndex + i) < imageUrls.length; i++) {
        newPins.push({
            id: startIndex + i + 1,
            imageUrl: imageUrls[startIndex + i],
            title: `美丽图片 ${startIndex + i + 1}`,
            description: `精选图片 ${startIndex + i + 1}`
        });
    }
    return newPins;
}

// 渲染图片卡片
function renderPins(pins) {
    const container = document.getElementById('pinContainer');
    pins.forEach(pin => {
        const pinElement = document.createElement('div');
        pinElement.className = 'pin';
        pinElement.innerHTML = `
            <img src="${pin.imageUrl}" alt="${pin.title}">
            <div class="pin-content">
                <div class="pin-title">${pin.title}</div>
                <div class="pin-description">${pin.description}</div>
            </div>
        `;

        // 添加点击事件
        pinElement.addEventListener('click', () => {
            console.log('点击的图片数据:', pin);

            // 存储当前图片数据
            localStorage.setItem('currentPin', JSON.stringify(pin));

            // 获取并更新所有图片数据
            const existingPins = JSON.parse(localStorage.getItem('allPins')) || [];
            console.log('已存在的图片数据:', existingPins);

            // 检查是否已存在相同ID的图片
            const existingPinIndex = existingPins.findIndex(p => p.id === pin.id);
            if (existingPinIndex === -1) {
                existingPins.push(pin);
            } else {
                existingPins[existingPinIndex] = pin;
            }

            console.log('更新后的图片数据:', existingPins);
            localStorage.setItem('allPins', JSON.stringify(existingPins));

            // 跳转到详情页
            window.location.href = `detail.html?id=${pin.id}`;
        });

        container.appendChild(pinElement);
    });
}

// 初始化
function init() {
    // 渲染初始数据
    renderPins(mockPins);
    // 生成并渲染更多数据
    const morePins = generateMorePins(20);
    renderPins(morePins);

    // 实现无限滚动
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
            const newPins = generateMorePins(10);
            renderPins(newPins);
        }
    });
}

// 启动应用
init(); 