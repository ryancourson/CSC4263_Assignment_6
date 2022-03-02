

const synth = new Tone.PolySynth();

let notes = {
  '1': 'F#3',
  '2': 'G#3',
  '3': 'C#4',
  '4': 'B3',
  '5': 'D#4',
  '6': 'F#4',
  'a': 'F#4',
  's': 'G#4',
  'd': 'A#4',
  'f': 'C#5',
  'g': 'D#5',
  'h': 'F#5',
  'j': 'G#5',
  'k': 'A#5',
  'l': 'C#6',
  'i': 'D#6'

}

let slider;

const now = Tone.now();

const delay = new Tone.FeedbackDelay("5n", 0.5);
const tremolo = new Tone.Tremolo(5, 0.75);



function setup(){
  createCanvas(400,400);

  synth.connect(tremolo);
  tremolo.toDestination().start();

  slider = createSlider(0., 20., 10., .25);
  slider.mouseReleased( () =>{
    tremolo.frequency.value = slider.value();
  })
  
  
}

function draw(){
  background(220);
  text("Tremolo Frequency: " + slider.value(), 2, 390);
  text("D#4 - D#6 mapped a - i.", 120, 200);
  text("F# Major Chord: 123, B Major: 456", 120, 220);
}

function keyPressed(){

  let toPlay = notes[key];
  console.log(toPlay);
  if( notes[key] === "1" || notes[key] === "2" ||
      notes[key] === "3" || notes[key] === "4" ||
      notes[key] === "5" || notes[key] === "6"){
        synth.triggerAttackRelease(toPlay, .2);
      }
  else{
    synth.triggerAttackRelease(toPlay, '4n');
  }
  

}