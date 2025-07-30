
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById("title").innerText = document.querySelector('li[onclick="showSection(\'' + id + '\')"]').innerText;
}

document.getElementById('form-boutique').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const nom = inputs[0].value;
  const prix = inputs[1].value;
  const item = document.createElement('li');
  item.innerText = nom + " - " + prix + "€";
  document.getElementById('liste-boutique').appendChild(item);
  this.reset();
});

document.getElementById('form-staff').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const pseudo = inputs[0].value;
  const role = inputs[1].value;
  const item = document.createElement('li');
  item.innerHTML = '<img src="https://mc-heads.net/avatar/' + pseudo + '" width="24"/> <b>' + pseudo + '</b> - ' + role;
  document.getElementById('liste-staff').appendChild(item);
  this.reset();
});
