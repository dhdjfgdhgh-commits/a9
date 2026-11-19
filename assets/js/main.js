(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var F=[['Silk charmeuse',0.95,'Liquid, close to the body. Ideal for cowls, bias-cut slips and evening drapes.'],['Viscose crepe',0.82,'Heavy, fluid and matte. Wraps and wide trousers hang beautifully.'],['Cotton jersey',0.7,'Soft and stretchy. Good for twist fronts and casual wraps.'],['Linen',0.45,'Falls in loose, airy folds and creases with character.'],['Cotton poplin',0.25,'Crisp and structured. Holds shape rather than draping.'],['Wool felt',0.08,'Stiff and dense. Stands away from the body; not for draping.']];
var rs=[].slice.call(document.querySelectorAll('input[name=fab]'));if(rs.length){var p=$('dm-p');function draw(){var i=0;rs.forEach(function(r){if(r.checked)i=+r.value;});var f=F[i],d=f[1],w=40+(1-d)*90,n=Math.round(4+d*6),path='M30 20 L270 20 ';var bx=150+w,ax=150-w;
 path='M30 20 L270 20 C'+(270-d*20)+' 120 '+bx+' 220 '+bx+' 300 ';for(var k=n;k>=0;k--){var x=ax+(bx-ax)*k/n;path+='L'+x.toFixed(1)+' '+(300+(k%2?14*d:0)).toFixed(1)+' ';}path+='L'+ax+' 300 C'+ax+' 220 '+(30+d*20)+' 120 30 20 Z';p.setAttribute('d',path);
 $('dm-o').innerHTML='<strong>'+f[0]+' &middot; '+Math.round(d*10)+'/10</strong><p>'+f[2]+'</p>';}
 rs.forEach(function(r){r.addEventListener('change',draw);});draw();}
var mh=$('mf-h');if(mh){var ms=$('mf-s');function calc(){var h=parseFloat(mh.value)||165,s=ms.value,r;if(s==='scarf')r=[Math.round(h*1.1/10)*10,'cm long, 50&ndash;70 cm wide','Long enough to loop once and leave both ends free.'];else if(s==='shawl')r=[Math.round(h*0.85/10)*10,'cm square or longer','Large enough to cover the shoulders and cross at the front.'];else if(s==='sarong')r=[Math.round((h*0.6+60)/10)*10,'cm wide, '+Math.round(h*0.55/5)*5+' cm deep','Wraps once and a half around the hips with a good overlap.'];else r=[Math.round((h*3.4)/10)*10,'cm (about '+(Math.round(h*3.4/10)/10)+' m)','A standard saree is 5.5&ndash;6 m; taller wearers may prefer the longer end.'];
 $('mf-o').innerHTML='<strong>'+r[0]+' '+r[1]+'</strong><p>'+r[2]+'</p>';}mh.addEventListener('input',calc);ms.addEventListener('change',calc);calc();}
})();
