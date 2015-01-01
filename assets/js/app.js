$(function() {

  // Elements
  var bgSound = $('#bgsound');  
  var fakeMesh = $('#fake-mesh');
  var badParts = $('#bad-parts');
  var hopeHasRisen = $('#hope-has-risen');
  var flushCapacitor = $('#flush-capacitor');
  var lights = $('#lights');
  var mute = $('#mute');

  // Main timeline script
  var flushCapacitorTimeline = new TimelineMax();  
  
  flushCapacitorTimeline
      .to(mute, 2, {scale: 0.5, right: "60px", top: "-10px", opacity: 0.15, delay: 2}, "start")
      .set(fakeMesh, {opacity: 0.1}, "start")
      .to(badParts, 0.5, {autoAlpha: 1, onComplete: bgSound.get(0).play()}, "start")
      .to(badParts, 0.5, {autoAlpha: 0}, "+=2")
      .to(hopeHasRisen, 0.5, {autoAlpha: 1}, "+=1")
      .to(hopeHasRisen.find('disappear-early'), 1, {autoAlpha: 0, ease: Bounce.easeInOut}, "+=4")
      .to(hopeHasRisen, 0.5, {autoAlpha: 0}, "+=0.5")
      .to(fakeMesh, 3, {rotationX: "75deg", height: "60%", bottom: "-100px", scale: 1,  opacity: 1, ease:Back.easeInOut}, "-=.5")
      .to(lights, 0.5, {autoAlpha: 0.8, scale: 6}, "-=.8")
      .to(flushCapacitor, 0.5, {autoAlpha: 1, 'margin-top': "-=100px", scale: 1.3, ease: Strong.easeOut}, "-=.8");
    
  // Mute toggle
  
  mute.on('click', function(){
      bgSound.get(0).muted = !bgSound.get(0).muted;
  })
  
});