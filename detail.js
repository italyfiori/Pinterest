// 从 URL 获取图片 ID
const urlParams = new URLSearchParams(window.location.search);
const pinId = urlParams.get('id');
console.log('URL中的图片ID:', pinId);

// 从 localStorage 获取所有图片数据
const allPins = JSON.parse(localStorage.getItem('allPins')) || [];
console.log('localStorage中的所有图片数据:', allPins);

// 根据 ID 查找对应的图片数据
const pinData = allPins.find(pin => pin.id === Number(pinId));
console.log('找到的图片数据:', pinData);

// Mock 商品数据
function generateMockProducts(count = 5) {
    const mockProducts = [];
    const mockNames = ['连衣裙', '手提包', '太阳镜', '运动鞋', '手表', '项链', '帽子', '外套'];
    const mockShops = ['amazon.com', 'taobao.com', 'tmall.com'];

    for (let i = 0; i < count; i++) {
        mockProducts.push({
            x: Math.floor(Math.random() * 80) + 10, // 10-90之间的随机数，避免太靠边
            y: Math.floor(Math.random() * 80) + 10,
            name: mockNames[Math.floor(Math.random() * mockNames.length)],
            url: `https://${mockShops[Math.floor(Math.random() * mockShops.length)]}/product/${Math.random().toString(36).substr(2, 9)}`
        });
    }
    return mockProducts;
}

// 渲染商品标记点
function renderProductMarkers(products) {
    return products.map(product => `
        <a href="${product.url}" target="_blank" class="product-marker" style="left: ${product.x}%; top: ${product.y}%;">
            <div class="marker-dot"></div>
            <div class="marker-tooltip">${product.name}</div>
        </a>
    `).join('');
}

// 渲染详情页
function renderDetail() {
    const container = document.getElementById('detailContainer');

    if (!pinData) {
        console.error('未找到图片数据！');
        container.innerHTML = '<div class="error">图片未找到</div>';
        return;
    }

    console.log('准备渲染的图片数据:', {
        id: pinData.id,
        title: pinData.title,
        imageUrl: pinData.imageUrl
    });

    // 为 pinData 添加模拟的商品数据
    if (!pinData.products) {
        pinData.products = generateMockProducts();
        console.log('生成的商品数据:', pinData.products);
    }

    const detailHTML = `
        <div class="detail-card">
            <div class="detail-image">
                <img src="${pinData.imageUrl}" alt="${pinData.title}" style="width: auto; height: auto; object-fit: contain;">
                <div class="product-markers" style="pointer-events: none;">
                    ${renderProductMarkers(pinData.products)}
                </div>
            </div>
            <div class="detail-info">
                <h1 class="detail-title">${pinData.title}</h1>
                <p class="detail-description">${pinData.description}</p>
                <div class="detail-metadata">
                    <p>上传时间：${new Date().toLocaleDateString()}</p>
                    <p>图片 ID：${pinData.id}</p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = detailHTML;
    console.log('详情页渲染完成');
}

// 初始化详情页
function initDetail() {
    console.log('开始初始化详情页');
    renderDetail();
}

// 启动详情页
initDetail(); 