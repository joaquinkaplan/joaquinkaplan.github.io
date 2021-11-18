const prev = document.getElementById('prev');
const next = document.getElementById('next');
const mapa = document.getElementById('mapa');

let srcs = [ 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.39708339685!2d-58.573385956577006!3d-34.61546111318893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1636837176655!5m2!1ses!2sar', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.3844016111!2d-3.8196242124333035!3d40.43813108273819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses!2sar!4v1637101815095!5m2!1ses!2sar', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109136.80134709766!2d34.72084585348289!3d31.261569053489346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026640029f8777%3A0x8dee8012deb5dd8!2sBeerseba%2C%20Israel!5e0!3m2!1ses!2sar!4v1637101853054!5m2!1ses!2sar'];


prev.disabled = true;

next.addEventListener('click', function() {
    let current = srcs.lastIndexOf(mapa.src)

    prev.disabled = false;
    
    if (!srcs[current + 2]) {
    next.disabled = true;
}
mapa.src = srcs[current + 1];
});



prev.addEventListener('click', function() {
    let current = srcs.lastIndexOf(mapa.src)

    next.disabled = false;
    
    if (!srcs[current - 2]) {
    prev.disabled = true;
}
mapa.src = srcs[current - 1];
})
