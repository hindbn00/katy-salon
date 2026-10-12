var t=document.querySelector('.menu-toggle'),n=document.getElementById('nav');
if(t){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)})}
var f=document.getElementById('bookForm');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='Name: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nService: '+d.get('service')+'\nPreferred time: '+(d.get('when')||'Flexible')+'\nNotes: '+(d.get('notes')||'');
document.getElementById('note').textContent='Opening your email app to send the request. You can also call us.';
location.href='mailto:'+f.dataset.email+'?subject='+encodeURIComponent('Appointment request')+'&body='+encodeURIComponent(body)})}
