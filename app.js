// Simple demo data and UI logic.
// Open index.html in a browser to see it work.
const spotters = [
  { name: "Alex (Spotter)", phone: "555-0101", notes: "Comfortable staying nearby." },
  { name: "Jamie (Spotter)", phone: "555-0102", notes: "Can bring naloxone." }
];

const resources = [
  { name: "Local Syringe Service", phone: "555-0201", address: "123 Safety St." },
  { name: "Harm Reduction Hotline", phone: "555-0202", address: "Call for help" }
];

function show(elementId){
  document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
  document.getElementById(elementId).classList.remove('hidden');
}

function renderSpotters(){
  const ul = document.getElementById('spotter-list');
  ul.innerHTML = '';
  spotters.forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s.name}</strong> — ${s.notes} <br><button class="call" data-phone="${s.phone}">Call ${s.phone}</button>`;
    ul.appendChild(li);
  });
  document.querySelectorAll('#spotter-list .call').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const phone = e.target.getAttribute('data-phone');
      alert('Pretend calling ' + phone + '. In a real app this would initiate a phone call.');
    });
  });
}

function renderResources(){
  const ul = document.getElementById('resource-list');
  ul.innerHTML = '';
  resources.forEach(r => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${r.name}</strong> — ${r.address} <br>Phone: ${r.phone}`;
    ul.appendChild(li);
  });
}

document.getElementById('show-spotters').addEventListener('click', ()=>{
  renderSpotters();
  show('spotters');
});
document.getElementById('show-resources').addEventListener('click', ()=>{
  renderResources();
  show('resources');
});
document.getElementById('back-from-spotters').addEventListener('click', ()=> show('home'));
document.getElementById('back-from-resources').addEventListener('click', ()=> show('home'));
document.getElementById('back-from-education').addEventListener('click', ()=> show('home'));

// Start on home
show('home');
