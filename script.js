function page5Animation(){ 
    const text = document.querySelector(" #text-circle p");
  text.innerHTML = text.innerText.split("").map(
    (char, i) =>
      `<span style="transform:rotate(${i*12}deg)">${char}</span>`
  ).join("")
  }
  
  page5Animation()