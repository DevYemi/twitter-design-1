const datas = [
    {
        text: 'Blob sofa',
        url: '/img/sofa.png',
        size: '100 x 100',
        decor: '/img/ball2Blur.png'
    }, {
        text: 'Herbs pobs',
        url: '/img/plant.png',
        size: '120 x 100',
        decor: '/img/ballBlur.png'

    }, {
        text: 'Sofa cake',
        url: '/img/chair.png',
        size: '130 x 100',
        decor: '/img/pillow.png'
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