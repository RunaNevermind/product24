"use strict"

$(document).ready(function(){
    $(".slider").bxSlider();
});

window.onload = function(){
    const paralax = document.querySelector('.container__main')
    if(paralax){
        const container = document.querySelector('.paralax__container')
        const ballsLeft = document.querySelector('.balls__left');
        const ballsRight = document.querySelector('.balls__right');

        const forBalls=30

        const speed = 0.08;

        let positionX= 0;
        let positionY = 0;

        let coordXpercent=0;
        let coordYpercent=0;

        function setMouseParalaxStyle(){
            const distX= coordXpercent - positionX;
            const distY= coordYpercent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            ballsLeft.style.cssText = `transform: translate(${positionX / forBalls}%,${positionY / forBalls}%);`;
            ballsRight.style.cssText = `transform: translate(${positionX / forBalls}%,${positionY / forBalls}%);`;

            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle()

        paralax.addEventListener('mousemove', function (e){
            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;

            const coordX = e.pageX - paralaxWidth/2;
            const coordY = e.pageY - paralaxHeight/2;

            coordXpercent= coordX / paralaxWidth * 100;
            coordYpercent= coordY / paralaxHeight * 100;
        })
    }



}