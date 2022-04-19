import gsap from 'gsap';
import { datas } from './data';


export function animation() {
    // get all animation values
    const textAnimation = document.querySelectorAll('[data-type="ANIMATION-TEXT"]');
    const blobTextAnimation = document.querySelectorAll('[data-type="ANIMATION-BLOBTEXT"]');
    const blobAnimation = document.querySelector('[data-type="ANIMATION-BLOB"]');
    const animatedImgContainer = document.querySelector('[data-type="ANIMATED-IMGS"]');
    let isMobile = window.screen.width < 760
    console.log(window.screen.width)


    /**
     * Animation limit base on the data length with provision for the added first value that was added twice in the dom
     */
    const limit = datas.length + 1;

    // get the width to know the offset value
    let textAnimationWidth = textAnimation[0].offsetWidth;
    let blobTextAnimationWidth = blobTextAnimation[0].offsetWidth;
    let animationIndex = 0;
    let tl = null
    function animate(textValue, blobTextValue, duration, delay) {
        console.log(duration)
        tl = gsap.timeline({
            defaults: { duration, ease: 'power4', delay },
            onComplete: incrementAnimate
        });
        let bgColor = datas[animationIndex]?.bgColor ? datas[animationIndex].bgColor : '#2E2E47';
        let blobRotateValue = animationIndex === 0 ? animationIndex : 70;

        tl.to(textAnimation, { right: `${textValue}` }, 'same')
            .to(blobTextAnimation, { right: blobTextValue }, 'same')
            .to(blobAnimation, { rotate: `+=${blobRotateValue}`, fill: bgColor }, 'same')
            .to(animatedImgContainer, { rotate: `+=${animationIndex === 0 ? 0 : 180}`, display: isMobile ? 'none' : 'flex' }, 'same')

    }

    function incrementAnimate() {
        // incrementAnimation Values
        ++animationIndex;
        let textValue = textAnimationWidth * animationIndex;
        let blobTextValue = blobTextAnimationWidth * animationIndex;
        console.log(animationIndex, textValue,)
        if (limit === animationIndex) {
            animationIndex = 0;
            animate(0, 0, 0, 0);
        }
        else animate(textValue, blobTextValue, 2, 0);

    }

    function resetAnimation() {
        tl && tl.kill();
        tl = null;
        animationIndex = 0;
        textAnimationWidth = textAnimation[0].offsetWidth;
        blobTextAnimationWidth = blobTextAnimation[0].offsetWidth;
        isMobile = window.screen.width < 760;
        animate(0, 0, 0, 2)
    }

    // start animation for the first time
    animate(0, 0, 0, 2);

    return resetAnimation;
};
