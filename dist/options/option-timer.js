"use strict";(function(){function a(a,b,c){const d=document.createElement("div"),e=document.createElement("label");e.innerHTML="<a href=\"https://www.acmicpc.net/problem/"+a+"\">"+a+"\uBC88 "+b+"</a>",d.appendChild(e);const f=progressTimer();return d.appendChild(f.element()),f.start(c.startTime,c.endTime,()=>{}),d}Array.from(document.getElementsByClassName("btn-close-window")).forEach(a=>{a.addEventListener("click",a=>{a.preventDefault(),window.close("","_parent","")})});const b=document.getElementById("problem-timer-list");Config.load("problem-timers",c=>{const d=Object.keys(c||{});if(d.length)for(let e=0;e<d.length;++e){const f=d[e],g=c[f],h=PROVISIONED_DB.problems[f];b.appendChild(a(f,h,g))}else{const a=document.createElement("p");a.innerText="\uD45C\uC2DC\uD560 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.",b.appendChild(a)}})})();