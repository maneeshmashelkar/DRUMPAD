var text = new Map();
text.set('49', "crash-minor");
text.set('50', "ride");
text.set('51', "hihat");
text.set('52', "openhat");
text.set('81', "clap-1");
text.set('87', "clap-2");
text.set('69', "closed-hat");
text.set('82', "snare");
text.set('65', "snare-minor");
text.set('83', "crisp-snare");
text.set('68', "tom-1");
text.set('70', "kick");
text.set('90', "tambourine");
text.set('88', "tink");
text.set('67', "tom-2");
text.set('86', "boom");

  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

    console.log(text.get(audio.getAttribute("data-key")));
    document.getElementById('screen').innerHTML = text.get(audio.getAttribute("data-key"));
 
  }
  function clicks(e){
    const key = document.querySelector(`.key[data-key="${e}"]`);
    key.classList.add('playing');
    const audio = document.querySelector(`audio[data-key="${e}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setTimeout(remove,90);

    console.log(text.get(audio.getAttribute("data-key")));
    document.getElementById('screen').innerHTML = text.get(audio.getAttribute("data-key"));
  }

  function remove(){
    var elements = document.getElementsByClassName('key');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('playing');
  }
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    remove() 
  }
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);


function powerbutton(){
  const pb = document.querySelector('.power');
  if (pb.classList[1] == 'on'){
    pb.classList.replace('on','off');
    document.getElementById('power').innerHTML = "OFF";
    document.querySelector('.main').classList.remove('mainon');
    document.querySelector('.heading').classList.remove('headingon');
    document.querySelector('.screen').classList.remove('screenon');
    document.querySelector('.slider').classList.remove('slideron');
    document.querySelector('.keys').classList.remove('keyson');
    document.getElementById('screen').innerHTML = '';
    let data = document.getElementsByClassName('key');
    for (let i = 0; i < data.length; i++) {
      data[i].removeAttribute("data-key");
    }
  }
  else{
    pb.classList.replace('off','on')
    document.getElementById('power').innerHTML = "ON";
    document.querySelector('.main').classList.add('mainon');
    document.querySelector('.heading').classList.add('headingon');
    document.querySelector('.screen').classList.add('screenon');
    document.querySelector('.slider').classList.add('slideron');
    document.querySelector('.keys').classList.add('keyson');
    
    keylist=[49,50,51,52,81,87,69,82,65,83,68,70,90,88,67,86]
    let data = document.getElementsByClassName('key');
    for (let i = 0; i < data.length; i++) {
      data[i].setAttribute("data-key", `${keylist[i]}`); 
    }
  }

}

function setvolume(val){
  var slider = document.getElementsByTagName('audio');
  for(let i=0;i<=slider.length;i++){
  slider[i].volume = (val / 100);
  }       
      
}


