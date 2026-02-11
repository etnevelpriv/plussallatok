import './style.css';
import { Plussallat } from './Plussallat.ts';

const plussallatFeltoltes = function (e: SubmitEvent) {
  e.preventDefault();
  const nameElement = document.getElementById('name') as HTMLFormElement;
  const name:string = nameElement.value;
  console.log(name);

  const heightElement = document.getElementById('height') as HTMLFormElement;
  const height:number = Number(heightElement.value);
  console.log(height);

  const colorElement = document.getElementById('color') as HTMLFormElement;
  const color:string = colorElement.value;
  console.log(color);

  const colors:string[] = [];
  const colorElements= document.getElementsByClassName('colorOption');

  for ( let i = 0; i < colorElements.length; i++ ) {
    const element = colorElements[i] as HTMLFormElement
    colors.push(element.value);
  };
  console.log(colors);

  const pluss = new Plussallat(name, height, color, colors);
  console.log(pluss.toString());
};


document.getElementById("plussallatForm")?.addEventListener("submit", plussallatFeltoltes);