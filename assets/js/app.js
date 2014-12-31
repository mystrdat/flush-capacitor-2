$(function() {

  // Elements
  var bgSound = $('#bgsound');  
  var elGrid = $('#grid');
  var elMsg1 = $('#msg-1');
  var elMsg2 = $('#msg-2');
  var elLogo = $('#logo');
  var elVideo = $('#lights');

  // Main timeline script
  var flushCapacitorTimeline = new TimelineMax();  
  
  flushCapacitorTimeline
      .set(elGrid, {opacity: 0.1})
      .to(elMsg1, 0.5, {autoAlpha: 1, onComplete: bgSound.get(0).play()})
      .to(elMsg1, 0.5, {autoAlpha: 0}, "+=5")
      .to(elMsg2, 0.5, {autoAlpha: 1}, "+=1")
      .to(elMsg2, 0.5, {autoAlpha: 0}, "+=5")
      .to(elGrid, 3, {rotationX:"75deg", height: "60%", bottom: "-100px", scale: 1,  opacity: 1, ease:Back.easeInOut})
      .to(elVideo, 0.5, {autoAlpha: 0.6}, "-=.8")
      .to(elLogo, 0.5, {autoAlpha: 1, y: "-=100px", scale: 1.1}, "-=.8");
  
    
});