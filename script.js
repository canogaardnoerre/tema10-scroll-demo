let frame = 0;

orderButton = document.querySelector('.button');

window.addEventListener('wheel', (event) => {
    // event.deltaY;
    let prodElement = document.querySelector('.demo-prod');
    prodElement.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -605px);";
    frame += 0.1;
    if(frame > 3) frame = 0;

});

orderButton.addEventListener('click', (event) => {
    console.log('Bestilt kaffe');
    gtag('event', 'Order Click', {
        'event_category': 'order test',
        'event_label': 'order event happened',
      });
});






