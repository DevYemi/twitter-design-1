const datas = [
    {
        text: 'Blob sofa',
        url: '/img/sofa.png',
        size: '100 x 100',
        decor: '/img/ballBlur.png',
        bgColor: '#2E2E47'
    }, {
        text: 'Herbs pobs',
        url: '/img/plant.png',
        size: '120 x 100',
        decor: ['/img/ballBlur.png', '/img/pillow.png'],
        bgColor: 'green'

    }, {
        text: 'Sofa cake',
        url: '/img/chair.png',
        size: '130 x 100',
        decor: ['/img/pillow.png', '/img/pillow.png'],
        bgColor: 'orange'
    }
];
const decor = [
    '/img/ball2Blur.png',
    '/img/ballBlur.png',
    '/img/pillow.png',
    '/img/bean.png'
]
const animatedImages = [];
function mergeImgDataWithDecor() {
    for (let i = 0; i < datas.length; i++) {
        const dataImg = datas[i];
        const decorImg = decor[i];
        animatedImages.push({ isDecor: true, url: decorImg })
        animatedImages.push({ isDecor: false, url: dataImg.url });


    }
}
mergeImgDataWithDecor();

export { datas, animatedImages }