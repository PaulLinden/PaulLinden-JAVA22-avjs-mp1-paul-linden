function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire2b18;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequire2b18=r),r.register("27Lyk",(function(t,o){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var c={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)c[t[o]]=e[t[o]]},r=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("27Lyk").register(JSON.parse('{"jaqnt":"index.de55cdc2.js","hTbNP":"rock.76aa5461.png","iXEgO":"paper.6668c1b3.png","kuWW7":"scissors.a85c5b73.png"}'));const c=new class{#e;#t;constructor(e,t){this.#e=e,this.#t=t}getName(){return this.#e}getScore(){return this.#t}setName(e){this.#e=e}setScore(e){this.#t=e}}("Player",0);function l(){document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("#playerName");""!=t.value?c.setName(t.value):c.setName("buffoon"),document.querySelector("#menu").className="hidden"}))}const a=[],s=[],i=document.querySelector("ol");async function u(){try{const e="https://r-p-s-2c0f0-default-rtdb.europe-west1.firebasedatabase.app/high-score.json",t=await fetch(e);console.log(t);const o=await t.json();return console.log(o),o}catch(e){throw console.error(e),new Error("Failed to fetch high score data")}}async function d(e,t){try{const o=await u();for(let n=1;n<=5;n++)if(t>o[n].score){m(e,t,n);break}}catch(e){console.log(e)}}async function m(e,t,o){try{const n=`https://r-p-s-2c0f0-default-rtdb.europe-west1.firebasedatabase.app/high-score/${o}.json`,r={name:e,score:t},c={method:"PUT",body:JSON.stringify(r),headers:{"Content-type":"application/json; charset=UTF-8"}},l=await fetch(n,c),u=await l.json();console.log(u),a.splice(o-1,0,e),s.splice(o-1,0,t),a.pop(),s.pop();const d=document.createElement("li");d.textContent=`${e}: ${t}`;const m=i.querySelectorAll("li");m.length>=o?i.insertBefore(d,m[o-1]):i.appendChild(d),m.length>4&&i.removeChild(m[m.length-1])}catch(e){console.log(e)}}const f=["rock","paper","scissors"],p=document.querySelector("#result");let h=0;function y(){const e=document.querySelector("#game");setTimeout((function(){u().then((e=>{!function(e){try{for(let t=1;t<=5;t++)a.push(e[t].name),s.push(e[t].score);i.replaceChildren();for(let e=0;e<5;e++){const t=document.createElement("li");t.textContent=`${a[e]} : ${s[e]}`,i.appendChild(t)}}catch(e){console.log(e)}}(e)})),function(){const e=document.querySelectorAll("img"),t=[new URL(g),new URL(S),new URL(b)];e.forEach(((e,o)=>{e.src=t[o].href}))}(),function(){const e=document.querySelectorAll("img"),t=1500;let o;e.forEach(((e,n)=>{e.addEventListener("click",(()=>{if(o)return;e.className="playerImg";let r=f[n];o=setTimeout((()=>{let e=f[0];document.querySelector(`#${e}`).className="compImg",function(e,t){e===f[1]&&t==f[0]||e===f[2]&&t==f[1]||e===f[0]&&t==f[2]?(h++,p.textContent="You win!"):e===t?p.textContent="Tie!":(d(c.getName(),c.getScore()),h=0,p.textContent="You Lose!");console.log(h),c.setScore(h),v(h)}(r,e),setTimeout((()=>{!function(){const e=document.querySelectorAll("img");e.forEach((e=>{e.className=""}))}(),p.textContent="",o=null}),t)}),t)}))}))}(),document.querySelector("#player").textContent=c.getName(),e.className="fadeIn"}),1e3),document.querySelector("#quit").addEventListener("click",(()=>{v(0),document.querySelector("#game").className="hidden",document.querySelector("#menu").className=""}))}var g={};g=new URL(r("27Lyk").resolve("hTbNP"),import.meta.url).toString();var S={};S=new URL(r("27Lyk").resolve("iXEgO"),import.meta.url).toString();var b={};function v(e){document.querySelector("h3").textContent=`score: ${e}`}b=new URL(r("27Lyk").resolve("kuWW7"),import.meta.url).toString(),document.addEventListener("DOMContentLoaded",(()=>{l()}));document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>{"submit"===e.value&&y(),"quit"===e.value&&l()}))}));
//# sourceMappingURL=index.de55cdc2.js.map
