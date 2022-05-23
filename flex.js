var nav = document.getElementById('navbar'),
    hiddenn = document.getElementById('hidden');

nav.onclick = function(){
    hiddenn.classList.toggle('active');
};