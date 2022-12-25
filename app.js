const x = document.getElementById('changeTheme');
const textCheck = x.innerText;
const heroDiv = document.querySelector('.heroDiv');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');
const attributions = document.querySelector('.attributions');

let timesClicked = 1;

x.onclick = () => {
  x.style.transitionDuration = '0.5s';
  if (textCheck == 'Dark') {
    x.innerHTML = 'Light';
    timesClicked += 1;
    document.body.style.backgroundColor = 'hsl(218, 44%, 25%)';
    heroDiv.style.backgroundColor = 'hsl(218, 44%, 30%)';
    heading.style.color = 'white';
    paragraph.style.color = 'white';
    attributions.style.color = 'white';
    x.style.backgroundColor = 'hsl(219, 45%, 33%)';
    x.style.color = 'white';
    // x.style.transitionDuration = '0.5s';
    x.onmouseover = () => {
      x.style.backgroundColor = 'white';
      x.style.color = 'black';
    }
    x.onmouseout = () => {
      x.style.backgroundColor = 'hsl(219, 45%, 33%)';
      x.style.color = 'white';

    }
  }
  if (timesClicked % 2 != 0) {
    x.innerHTML = 'Dark';
    document.body.style.backgroundColor = 'var(--Light-gray)';
    heroDiv.style.backgroundColor = 'white';
    heading.style.color = 'var(--Dark-blue)';
    paragraph.style.color = 'var(--Grayish-blue)';
    attributions.style.color = 'black';
    x.style.backgroundColor = 'white';
    x.style.color = 'black';
    // x.style.transitionDuration = '0.5s';
    x.onmouseover = () => {
      x.style.backgroundColor = 'hsl(219, 45%, 33%)';
      x.style.color = 'white';
    }
    x.onmouseout = () => {
      x.style.backgroundColor = 'white';
      x.style.color = 'black';
    }
  }
}