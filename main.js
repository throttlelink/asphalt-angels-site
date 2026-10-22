document.getElementById('y').textContent=new Date().getFullYear();
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('form').addEventListener('submit',e=>e.preventDefault());
