import gsap from 'gsap';
import { datas } from './data';


export function animation() {
    // get all animation values
    const textAnimation = document.querySelectorAll('[data-type="ANIMATION-TEXT"]');
    const blobTextAnimation = document.querySelectorAll('[data-type="ANIMATION-BLOBTEXT"]');
    const blobAnimation = document.querySelectorAll('[data-type="ANIMATION-BLOB"]');

    /**
     * Animation limit base on the data length with provision for the added first value that was added twice in the dom
     */
    const limit = datas.length + 1;

    // get the width to know the offset value
    const textAnimationWidth = textAnimation[0].offsetWidth;
    const blobTextAnimationWidth = blobTextAnimation[0].offsetWidth;
    let animationIndex = 0;
    function animate(textValue, blobTextValue, duration) {
        const tl = gsap.timeline({
            defaults: { duration, ease: 'power4' },
            onComplete: incrementAnimate
        });
        let bgColor = datas[animationIndex]?.bgColor ? datas[animationIndex].bgColor : '#2E2E47'

        tl.to(textAnimation, { right: `${textValue}` }, 'same')
            .to(blobTextAnimation, { right: blobTextValue }, 'same')
            .to(blobAnimation, { rotate: `+=${'100%'}`, fill: bgColor }, 'same')
    }

    function incrementAnimate() {
        ++animationIndex;
        let textValue = textAnimationWidth * animationIndex;
        let blobTextValue = blobTextAnimationWidth * animationIndex;
        console.log()
        if (limit === animationIndex) {
            console.log('ran')
            animationIndex = 0;
            animate(0, 0, 0);
        }
        else animate(textValue, blobTextValue, 2);

    }

    animate(0, 0, 2);
};
