
document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav-links');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
  // simple contact form (no backend)
  const f=document.querySelector('form[data-static]');
  if(f){f.addEventListener('submit',e=>{e.preventDefault();
    const m=f.querySelector('.form-msg'); if(m)m.textContent='Cảm ơn bạn! Tin nhắn đã được ghi nhận (demo tĩnh).';
    f.reset();});}
});
