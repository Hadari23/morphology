// src : testwords/set1/t1.wav
let i = 0;
const exp = 1; // 1 for set 1, 2 for set 2.
let set1 = [],set2 = [];

function makeSets(){
  const femInstruction = "הטי/הטה לצורת הנקבה";
  const femPlurInstruction = "הטי/הטה לצורת הרבות";
  const mascPlurInstruction = "הטי/הטה לצורת הרבים";
  for(let i = 1; i < 11; i++){
    set1.push(
      {
        path: "testwords/set1/t"+i+".wav",
        instruction: femInstruction
      }
    );
    set1.push(
      {
        path: "testwords/fillers/f"+i+".aac",
        instruction: femPlurInstruction
      }
    );
    set1.push(
      {
        path: "testwords/fillers/m"+i+".aac",
        instruction: mascPlurInstruction
      }
    );
    set2.push(
      {
        path: "testwords/set2/t"+i+".wav",
        instruction: femInstruction
      }
    );
    set2.push(
      {
        path: "testwords/fillers/f"+i+".aac",
        instruction: femPlurInstruction
      }
    );
    set2.push(
      {
        path: "testwords/fillers/m"+i+".aac",
        instruction: mascPlurInstruction
      }
    );
  }
  set1 = shuffle(set1);
  set2 = shuffle(set2);

}

function next(){
  i++;
  if(i > set1.length){
    alert("Experiment Finished");
    return;
  }
  document.getElementById("counter").innerHTML = i;
  setInstruction();
}

function prev(){
  if(i === 0 || i < 0){
    return;
  }
  i--;
  document.getElementById("counter").innerHTML = i;
  setInstruction();
}

function setInstruction(){
  if(exp === 1){
    document.getElementById("instructions").innerHTML = set1[i-1].instruction;
  } else {
    document.getElementById("instructions").innerHTML = set2[i-1].instruction;
  }
}

function playNextSound(){
  if(exp === 1){
    /* EXPERIMENT 1 */
    let audio = new Audio(set1[i-1].path);
    audio.play().then(null);
  } else {
    /* EXPERIMENT 2 */
    let audio = new Audio(set2[i-1].path);
    audio.play().then(null);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

makeSets();
