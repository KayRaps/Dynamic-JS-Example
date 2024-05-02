const greeting = document.getElementById('greeting');
const nameInput =  document.getElementById('name');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(){
    const name = nameInput.ariaValueMax.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}!`;
    }
});



const data = [
    {
      id: 1,
      pic: "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/13-flat-twist-with-twist-out-2.jpg?w=500&ssl=1",
      name: "Flat-Twist With Twist Out",
      difficulty: "Medium",
      info: "https://therighthairstyles.com/20-most-inspiring-natural-hairstyles-for-short-hair/"
    },
  ];
  
  const buildHairstyleCard = (hairstyle) => {
    // Create elements needed to build a card
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const a = document.createElement('a')
    const img = document.createElement('img')
  
    // Append newly created elements into the DOM
    const body = document.querySelector('body');
    body.append(div)
    h3.append(a)
    div.append(h3)
    div.append(img)
  
    // Set content and attributes
    a.innerHTML = hairstyle.name
    a.setAttribute('href', hairstyle.info)
    img.setAttribute('src', hairstyle.pic)
    div.setAttribute('class', 'card')
  }
  
  data.forEach(hairstyle => buildHairstyleCard(hairstyle))