import{z as C,J as V,K as H,o as N,i as B,f as _,L as F,k as J,w as Oe,M as Se,F as be,N as ve,A as m,C as w,D as W,E as b,O as X,P,Q as y,R as A,S as x,T as ge,U as T,_ as Pe,r as oe,g as Ie}from"./index-55dc587a.js";let I=Symbol("map"),L=Symbol("api"),fe=Symbol("marker"),ye=Symbol("markerCluster"),Z=Symbol("CustomMarker"),ke=Symbol("mapTilesLoaded"),S="click dblclick drag dragend dragstart mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");var Le=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var o=e.length;if(o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(o=s.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=o;r--!==0;)if(o=s[r],!i(e[o],t[o]))return!1;return!0}return e!==e&&t!==t};class M{constructor({apiKey:e,channel:t,client:r,id:o="__googleMapsScriptId",libraries:s=[],language:l,region:n,version:d,mapIds:a,nonce:u,retries:p=3,url:h="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.loading=this.done=!1,this.errors=[],this.version=d,this.apiKey=e,this.channel=t,this.client=r,this.id=o||"__googleMapsScriptId",this.libraries=s,this.language=l,this.region=n,this.mapIds=a,this.nonce=u,this.retries=p,this.url=h,M.instance){if(!Le(this.options,M.instance.options))throw Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(M.instance.options)}`);return M.instance}M.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),e}deleteScript(){let e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(r=>{r?t(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))this.callback();else{var e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}}reset(){this.deleteScript(),this.loading=this.done=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){this.errors.push(e),this.errors.length<=this.retries?(e=this.errors.length*Math.pow(2,this.errors.length),console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)):(this.onerrorEvent=e,this.callback())}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){this.resetIfRetryingFailed(),this.done?this.callback():window.google&&window.google.maps&&window.google.maps.version?(console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback()):this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}function Ee(i){return class extends i.OverlayView{constructor(e){super();let{element:t,...r}=e;this.element=t,this.opts=r,this.opts.map&&this.setMap(this.opts.map)}getPosition(){return this.opts.position?this.opts.position instanceof i.LatLng?this.opts.position:new i.LatLng(this.opts.position):null}getVisible(){if(!this.element)return!1;let e=this.element;return e.style.display!=="none"&&e.style.visibility!=="hidden"&&(e.style.opacity===""||.01<Number(e.style.opacity))}onAdd(){if(this.element){var e=this.getPanes();e&&e.overlayMouseTarget.appendChild(this.element)}}draw(){if(this.element){var e=this.getProjection().fromLatLngToDivPixel(this.getPosition());if(e){this.element.style.position="absolute";let r=this.element.offsetHeight;var t=this.element.offsetWidth;switch(this.opts.anchorPoint){case"TOP_CENTER":t=e.x-t/2,e=e.y;break;case"BOTTOM_CENTER":t=e.x-t/2,e=e.y-r;break;case"LEFT_CENTER":t=e.x,e=e.y-r/2;break;case"RIGHT_CENTER":t=e.x-t,e=e.y-r/2;break;case"TOP_LEFT":t=e.x,e=e.y;break;case"TOP_RIGHT":t=e.x-t,e=e.y;break;case"BOTTOM_LEFT":t=e.x,e=e.y-r;break;case"BOTTOM_RIGHT":t=e.x-t,e=e.y-r;break;default:t=e.x-t/2,e=e.y-r/2}this.element.style.left=t+"px",this.element.style.top=e+"px",this.element.style.transform=`translateX(${this.opts.offsetX||0}px) translateY(${this.opts.offsetY||0}px)`,this.opts.zIndex&&(this.element.style.zIndex=this.opts.zIndex.toString())}}}onRemove(){this.element&&this.element.remove()}setOptions(e){this.opts=e,this.draw()}}}let ie,se="bounds_changed center_changed click dblclick drag dragend dragstart heading_changed idle maptypeid_changed mousemove mouseout mouseover projection_changed resize rightclick tilesloaded tilt_changed zoom_changed".split(" ");var Y=C({props:{apiPromise:{type:Promise},apiKey:{type:String,default:""},version:{type:String,default:"weekly"},libraries:{type:Array,default:()=>["places"]},region:{type:String,required:!1},language:{type:String,required:!1},backgroundColor:{type:String,required:!1},center:{type:Object,default:()=>({lat:0,lng:0})},clickableIcons:{type:Boolean,required:!1,default:void 0},controlSize:{type:Number,required:!1},disableDefaultUi:{type:Boolean,required:!1,default:void 0},disableDoubleClickZoom:{type:Boolean,required:!1,default:void 0},draggable:{type:Boolean,required:!1,default:void 0},draggableCursor:{type:String,required:!1},draggingCursor:{type:String,required:!1},fullscreenControl:{type:Boolean,required:!1,default:void 0},fullscreenControlPosition:{type:String,required:!1},gestureHandling:{type:String,required:!1},heading:{type:Number,required:!1},keyboardShortcuts:{type:Boolean,required:!1,default:void 0},mapTypeControl:{type:Boolean,required:!1,default:void 0},mapTypeControlOptions:{type:Object,required:!1},mapTypeId:{type:[Number,String],required:!1},mapId:{type:String,required:!1},maxZoom:{type:Number,required:!1},minZoom:{type:Number,required:!1},noClear:{type:Boolean,required:!1,default:void 0},panControl:{type:Boolean,required:!1,default:void 0},panControlPosition:{type:String,required:!1},restriction:{type:Object,required:!1},rotateControl:{type:Boolean,required:!1,default:void 0},rotateControlPosition:{type:String,required:!1},scaleControl:{type:Boolean,required:!1,default:void 0},scaleControlStyle:{type:Number,required:!1},scrollwheel:{type:Boolean,required:!1,default:void 0},streetView:{type:Object,required:!1},streetViewControl:{type:Boolean,required:!1,default:void 0},streetViewControlPosition:{type:String,required:!1},styles:{type:Array,required:!1},tilt:{type:Number,required:!1},zoom:{type:Number,required:!1},zoomControl:{type:Boolean,required:!1,default:void 0},zoomControlPosition:{type:String,required:!1}},emits:se,setup(i,{emit:e}){let t=m(),r=m(!1),o=m(),s=m(),l=m(!1);T(I,o),T(L,s),T(ke,l);let n=()=>{const u={...i};Object.keys(u).forEach(h=>{u[h]===void 0&&delete u[h]});var p=h=>{var c;return h?{position:(c=s.value)===null||c===void 0?void 0:c.ControlPosition[h]}:{}};return p={scaleControlOptions:i.scaleControlStyle?{style:i.scaleControlStyle}:{},panControlOptions:p(i.panControlPosition),zoomControlOptions:p(i.zoomControlPosition),rotateControlOptions:p(i.rotateControlPosition),streetViewControlOptions:p(i.streetViewControlPosition),fullscreenControlOptions:p(i.fullscreenControlPosition),disableDefaultUI:i.disableDefaultUi},{...u,...p}},d=w([s,o],([u,p])=>{u&&p&&(u.event.addListenerOnce(p,"tilesloaded",()=>{l.value=!0}),setTimeout(d,0))},{immediate:!0}),a=u=>{s.value=x(u.maps),o.value=x(new u.maps.Map(t.value,n())),u=Ee(s.value),s.value[Z]=u,se.forEach(p=>{var h;(h=o.value)===null||h===void 0||h.addListener(p,c=>e(p,c))}),r.value=!0,u=Object.keys(i).filter(p=>!"apiPromise apiKey version libraries region language center zoom".split(" ").includes(p)).map(p=>P(i,p)),w([()=>i.center,()=>i.zoom,...u],([p,h],[c,v])=>{var g,f,k;const{center:re,zoom:U,..._e}=n();(g=o.value)===null||g===void 0||g.setOptions(_e),h!==void 0&&h!==v&&((f=o.value)===null||f===void 0||f.setZoom(h)),h=!c||p.lng!==c.lng||p.lat!==c.lat,p&&h&&((k=o.value)===null||k===void 0||k.panTo(p))})};return W(()=>{if(i.apiPromise&&i.apiPromise instanceof Promise)i.apiPromise.then(a);else{try{const{apiKey:u,region:p,version:h,language:c,libraries:v}=i;ie=new M({apiKey:u,region:p,version:h,language:c,libraries:v})}catch(u){console.error(u)}ie.load().then(a)}}),b(()=>{var u;l.value=!1,o.value&&((u=s.value)===null||u===void 0||u.event.clearInstanceListeners(o.value))}),{mapRef:t,ready:r,map:o,api:s,mapTilesLoaded:l}}});function Q(i,e){if(e===void 0&&(e={}),e=e.insertAt,i&&typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}Q(`
.mapdiv[data-v-177d06e3] {
  width: 100%;
  height: 100%;
}
`);let qe=X();V("data-v-177d06e3");let Te={ref:"mapRef",class:"mapdiv"};H();let ze=qe(i=>(N(),B("div",null,[_("div",Te,null,512),F(i.$slots,"default",{ready:i.ready,map:i.map,api:i.api,mapTilesLoaded:i.mapTilesLoaded},void 0,!0)])));Y.render=ze;Y.__scopeId="data-v-177d06e3";var j=function i(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r;if(Array.isArray(e)){var o=e.length;if(o!=t.length)return!1;for(r=o;r--!==0;)if(!i(e[r],t[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();var s=Object.keys(e);if(o=s.length,o!==Object.keys(t).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;for(r=o;r--!==0;)if(o=s[r],!i(e[o],t[o]))return!1;return!0}return e!==e&&t!==t};let E=(i,e,t,r)=>{const o=m(),s=y(I,m()),l=y(L,m()),n=y(ye,m()),d=A(()=>!!(n.value&&l.value&&(o.value instanceof l.value.Marker||o.value instanceof l.value[Z])));return w([s,t],(a,[u,p])=>{var h,c,v;a=!j(t.value,p)||s.value!==u,s.value&&l.value&&a&&(o.value?(o.value.setOptions(t.value),d.value&&((h=n.value)===null||h===void 0||h.removeMarker(o.value),(c=n.value)===null||c===void 0||c.addMarker(o.value))):(o.value=i==="Marker"?x(new l.value[i](t.value)):i===Z?x(new l.value[i](t.value)):x(new l.value[i]({...t.value,map:s.value})),d.value?(v=n.value)===null||v===void 0||v.addMarker(o.value):o.value.setMap(s.value),e.forEach(g=>{var f;(f=o.value)===null||f===void 0||f.addListener(g,k=>r(g,k))})))},{immediate:!0}),b(()=>{var a,u;o.value&&((a=l.value)===null||a===void 0||a.event.clearInstanceListeners(o.value),d.value?(u=n.value)===null||u===void 0||u.removeMarker(o.value):o.value.setMap(null))}),o},ne="animation_changed click dblclick rightclick dragstart dragend drag mouseover mousedown mouseout mouseup draggable_changed clickable_changed contextmenu cursor_changed flat_changed rightclick zindex_changed icon_changed position_changed shape_changed title_changed visible_changed".split(" ");var je=C({name:"Marker",props:{options:{type:Object,required:!0}},emits:ne,setup(i,{emit:e,expose:t,slots:r}){return i=P(i,"options"),e=E("Marker",ne,i,e),T(fe,e),t({marker:e}),()=>{var o;return(o=r.default)===null||o===void 0?void 0:o.call(r)}}});C({name:"Polyline",props:{options:{type:Object,required:!0}},emits:S,setup(i,{emit:e}){return i=P(i,"options"),{polyline:E("Polyline",S,i,e)}},render:()=>null});C({name:"Polygon",props:{options:{type:Object,required:!0}},emits:S,setup(i,{emit:e}){return i=P(i,"options"),{polygon:E("Polygon",S,i,e)}},render:()=>null});let le=S.concat(["bounds_changed"]);C({name:"Rectangle",props:{options:{type:Object,required:!0}},emits:le,setup(i,{emit:e}){return i=P(i,"options"),{rectangle:E("Rectangle",le,i,e)}},render:()=>null});let ae=S.concat(["center_changed","radius_changed"]);C({name:"Circle",props:{options:{type:Object,required:!0}},emits:ae,setup(i,{emit:e}){return i=P(i,"options"),{circle:E("Circle",ae,i,e)}},render:()=>null});var Ne=C({props:{position:{type:String,required:!0},index:{type:Number,default:1}},emits:["content:loaded"],setup(i,{emit:e}){let t=m(null),r=y(I,m()),o=y(L,m()),s=y(ke,m(!1)),l=m(!1),n=w([s,o,t],([u,p,h])=>{p&&u&&h&&(d(i.position),l.value=!0,e("content:loaded"),setTimeout(n,0))},{immediate:!0}),d=u=>{r.value&&o.value&&t.value&&r.value.controls[o.value.ControlPosition[u]].push(t.value)},a=u=>{if(r.value&&o.value){let p=null;u=o.value.ControlPosition[u],r.value.controls[u].forEach((h,c)=>{h===t.value&&(p=c)}),p!==null&&r.value.controls[u].removeAt(p)}};return b(()=>a(i.position)),w(()=>i.position,(u,p)=>{a(p),d(u)}),w(()=>i.index,u=>{u&&t.value&&(t.value.index=i.index)}),{controlRef:t,showContent:l}}});let Be={ref:"controlRef"};Ne.render=function(i){return N(),B(be,null,[J(`
    v-show must be used instead of v-if otherwise there
    would be no rendered content pushed to the map controls
  `),Oe(_("div",Be,[F(i.$slots,"default")],512),[[Se,i.showContent]])],2112)};let ue="closeclick content_changed domready position_changed visible zindex_changed".split(" ");var Ce=C({inheritAttrs:!1,props:{options:{type:Object,default:()=>({})}},emits:ue,setup(i,{slots:e,emit:t}){let r=m(),o=m(),s=y(I,m()),l=y(L,m()),n=y(fe,m()),d,a=A(()=>{var u;return(u=e.default)===null||u===void 0?void 0:u.call(e).some(p=>p.type!==ge)});return W(()=>{w([s,()=>i.options],([,u],[p,h])=>{p=!j(u,h)||s.value!==p,s.value&&l.value&&p&&(r.value?(r.value.setOptions({...u,content:a.value?o.value:u.content}),n.value||r.value.open({map:s.value})):(r.value=x(new l.value.InfoWindow({...u,content:a.value?o.value:u.content})),n.value?d=n.value.addListener("click",()=>{r.value&&r.value.open({map:s.value,anchor:n.value})}):r.value.open({map:s.value}),ue.forEach(c=>{var v;(v=r.value)===null||v===void 0||v.addListener(c,g=>t(c,g))})))},{immediate:!0})}),b(()=>{var u;d&&d.remove(),r.value&&((u=l.value)===null||u===void 0||u.event.clearInstanceListeners(r.value),r.value.close())}),{infoWindow:r,infoWindowRef:o,hasSlotContent:a}}});Q(`
.info-window-wrapper[data-v-5b373d6e] {
  display: none;
}
.mapdiv .info-window-wrapper[data-v-5b373d6e] {
  display: inline-block;
}
`);let Re=X();V("data-v-5b373d6e");let Ae={key:0,class:"info-window-wrapper"};H();let Ze=Re(i=>i.hasSlotContent?(N(),B("div",Ae,[_("div",ve({ref:"infoWindowRef"},i.$attrs),[F(i.$slots,"default",{},void 0,!0)],16)])):J("v-if",!0));Ce.render=Ze;Ce.__scopeId="data-v-5b373d6e";function K(i,e,t,r,o,s){if(!(o-r<=t)){var l=r+o>>1;we(i,e,l,r,o,s%2),K(i,e,t,r,l-1,s+1),K(i,e,t,l+1,o,s+1)}}function we(i,e,t,r,o,s){for(;o>r;){if(600<o-r){var l=o-r+1,n=t-r+1,d=Math.log(l),a=.5*Math.exp(2*d/3);d=.5*Math.sqrt(d*a*(l-a)/l)*(0>n-l/2?-1:1),we(i,e,t,Math.max(r,Math.floor(t-n*a/l+d)),Math.min(o,Math.floor(t+(l-n)*a/l+d)),s)}for(l=e[2*t+s],n=r,a=o,q(i,e,r,t),e[2*o+s]>l&&q(i,e,r,o);n<a;){for(q(i,e,n,a),n++,a--;e[2*n+s]<l;)n++;for(;e[2*a+s]>l;)a--}e[2*r+s]===l?q(i,e,r,a):(a++,q(i,e,a,o)),a<=t&&(r=a+1),t<=a&&(o=a-1)}}function q(i,e,t,r){G(i,t,r),G(e,2*t,2*r),G(e,2*t+1,2*r+1)}function G(i,e,t){let r=i[e];i[e]=i[t],i[t]=r}let $e=i=>i[0],Fe=i=>i[1];class pe{constructor(e,t=$e,r=Fe,o=64,s=Float64Array){this.nodeSize=o,this.points=e;let l=this.ids=new(65536>e.length?Uint16Array:Uint32Array)(e.length);s=this.coords=new s(2*e.length);for(let n=0;n<e.length;n++)l[n]=n,s[2*n]=t(e[n]),s[2*n+1]=r(e[n]);K(l,s,o,0,l.length-1,0)}range(e,t,r,o){{var s=this.ids,l=this.coords,n=this.nodeSize;let a=[0,s.length-1,0],u=[],p,h;for(;a.length;){var d=a.pop();let c=a.pop(),v=a.pop();if(c-v<=n){for(d=v;d<=c;d++)p=l[2*d],h=l[2*d+1],p>=e&&p<=r&&h>=t&&h<=o&&u.push(s[d]);continue}let g=Math.floor((v+c)/2);p=l[2*g],h=l[2*g+1],p>=e&&p<=r&&h>=t&&h<=o&&u.push(s[g]);let f=(d+1)%2;(d===0?e<=p:t<=h)&&(a.push(v),a.push(g-1),a.push(f)),(d===0?r>=p:o>=h)&&(a.push(g+1),a.push(c),a.push(f))}e=u}return e}within(e,t,r){{var o=this.ids,s=this.coords,l=this.nodeSize;let p=[0,o.length-1,0],h=[],c=r*r;for(;p.length;){var n=p.pop();let v=p.pop();var d=p.pop();if(v-d<=l){for(n=d;n<=v;n++){d=s[2*n]-e;var a=s[2*n+1]-t;d=d*d+a*a,d<=c&&h.push(o[n])}continue}a=Math.floor((d+v)/2);let g=s[2*a],f=s[2*a+1];{var u=g-e;let k=f-t;u=u*u+k*k}u<=c&&h.push(o[a]),u=(n+1)%2,(n===0?e-r<=g:t-r<=f)&&(p.push(d),p.push(a-1),p.push(u)),(n===0?e+r>=g:t+r>=f)&&(p.push(a+1),p.push(v),p.push(u))}e=h}return e}}let Ue={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:i=>i},$=Math.fround||(i=>e=>(i[0]=+e,i[0]))(new Float32Array(1));class Ge{constructor(e){this.options=z(Object.create(Ue),e),this.trees=Array(this.options.maxZoom+1)}load(e){let{log:t,minZoom:r,maxZoom:o,nodeSize:s}=this.options;t&&console.time("total time");var l=`prepare ${e.length} points`;t&&console.time(l),this.points=e;let n=[];for(let d=0;d<e.length;d++)e[d].geometry&&n.push(De(e[d],d));for(this.trees[o+1]=new pe(n,he,ce,s,Float32Array),t&&console.timeEnd(l),e=o;e>=r;e--)l=+Date.now(),n=this._cluster(n,e),this.trees[e]=new pe(n,he,ce,s,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,n.length,+Date.now()-l);return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;var o=Math.max(-90,Math.min(90,e[1])),s=e[2]===180?180:((e[2]+180)%360+360)%360-180;let l=Math.max(-90,Math.min(90,e[3]));if(360<=e[2]-e[0])r=-180,s=180;else if(r>s){var n=this.getClusters([r,o,180,l],t);return o=this.getClusters([-180,o,s,l],t),n.concat(o)}t=this.trees[this._limitZoom(t)],s=t.range(r/360+.5,R(l),s/360+.5,R(o)),o=[];for(n of s)s=t.points[n],o.push(s.numPoints?de(s):this.points[s.index]);return o}getChildren(e){var t=this._getOriginId(e),r=this._getOriginZoom(e);let o=this.trees[r];if(!o||(t=o.points[t],!t))throw Error("No cluster with the specified id.");t=o.within(t.x,t.y,this.options.radius/(this.options.extent*Math.pow(2,r-1))),r=[];for(let s of t)t=o.points[s],t.parentId===e&&r.push(t.numPoints?de(t):this.points[t.index]);if(r.length===0)throw Error("No cluster with the specified id.");return r}getLeaves(e,t,r){let o=[];return this._appendLeaves(o,e,t||10,r||0,0),o}getTile(e,t,r){let o=this.trees[this._limitZoom(e)];e=Math.pow(2,e);let{extent:s,radius:l}=this.options,n=l/s,d=(r-n)/e,a=(r+1+n)/e,u={features:[]};return this._addTileFeatures(o.range((t-n)/e,d,(t+1+n)/e,a),o.points,t,r,e,u),t===0&&this._addTileFeatures(o.range(1-n/e,d,1,a),o.points,e,r,e,u),t===e-1&&this._addTileFeatures(o.range(0,d,n/e,a),o.points,-1,r,e,u),u.features.length?u:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom&&(e=this.getChildren(e),t++,e.length===1);)e=e[0].properties.cluster_id;return t}_appendLeaves(e,t,r,o,s){t=this.getChildren(t);for(let l of t)if((t=l.properties)&&t.cluster?s=s+t.point_count<=o?s+t.point_count:this._appendLeaves(e,t.cluster_id,r,o,s):s<o?s++:e.push(l),e.length===r)break;return s}_addTileFeatures(e,t,r,o,s,l){for(let a of e){e=t[a];let u=e.numPoints;var n=void 0;let p;var d=void 0;u?(n=xe(e),p=e.x,d=e.y):(d=this.points[e.index],n=d.properties,p=d.geometry.coordinates[0]/360+.5,d=R(d.geometry.coordinates[1])),n={type:1,geometry:[[Math.round(this.options.extent*(p*s-r)),Math.round(this.options.extent*(d*s-o))]],tags:n};let h;u?h=e.id:this.options.generateId?h=e.index:this.points[e.index].id&&(h=this.points[e.index].id),h!==void 0&&(n.id=h),l.features.push(n)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(Math.floor(+e),this.options.maxZoom+1))}_cluster(e,t){let r=[],{radius:o,extent:s,reduce:l,minPoints:n}=this.options,d=o/(s*Math.pow(2,t));for(let c=0;c<e.length;c++){var a=e[c];if(a.zoom<=t)continue;a.zoom=t;let v=this.trees[t+1];var u=v.within(a.x,a.y,d),p=a.numPoints||1;let g=p;for(let f of u){var h=v.points[f];h.zoom>t&&(g+=h.numPoints||1)}if(g>p&&g>=n){h=a.x*p;let f=a.y*p;p=l&&1<p?this._map(a,!0):null;let k=(c<<5)+(t+1)+this.points.length;for(let re of u){if(u=v.points[re],u.zoom<=t)continue;u.zoom=t;let U=u.numPoints||1;h+=u.x*U,f+=u.y*U,u.parentId=k,l&&(p||(p=this._map(a,!0)),l(p,this._map(u)))}a.parentId=k,r.push(Ke(h/g,f/g,k,g,p))}else if(r.push(a),1<g)for(let f of u)a=v.points[f],a.zoom<=t||(a.zoom=t,r.push(a))}return r}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?z({},e.properties):e.properties;e=this.points[e.index].properties;let r=this.options.map(e);return t&&r===e?z({},r):r}}function Ke(i,e,t,r,o){return{x:$(i),y:$(e),zoom:1/0,id:t,parentId:-1,numPoints:r,properties:o}}function De(i,e){let[t,r]=i.geometry.coordinates;return{x:$(t/360+.5),y:$(R(r)),zoom:1/0,index:e,parentId:-1}}function de(i){var e=i.id,t=xe(i);return{type:"Feature",id:e,properties:t,geometry:{type:"Point",coordinates:[360*(i.x-.5),360*Math.atan(Math.exp((180-360*i.y)*Math.PI/180))/Math.PI-90]}}}function xe(i){let e=i.numPoints,t=1e4<=e?`${Math.round(e/1e3)}k`:1e3<=e?`${Math.round(e/100)/10}k`:e;return z(z({},i.properties),{cluster:!0,cluster_id:i.id,point_count:e,point_count_abbreviated:t})}function R(i){return i=Math.sin(i*Math.PI/180),i=.5-.25*Math.log((1+i)/(1-i))/Math.PI,0>i?0:1<i?1:i}function z(i,e){for(let t in e)i[t]=e[t];return i}function he(i){return i.x}function ce(i){return i.y}class D{constructor({markers:e,position:t}){this.markers=e,t&&(this._position=t instanceof google.maps.LatLng?t:new google.maps.LatLng(t))}get bounds(){if(this.markers.length!==0||this._position)return this.markers.reduce((e,t)=>e.extend(t.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class Ve{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return He(e)}}let He=i=>i.map(e=>new D({position:e.getPosition(),markers:[e]}));class Je extends Ve{constructor(e){var{maxZoom:t,radius:r=60}=e,o=["maxZoom","radius"],s={},l;for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>o.indexOf(l)&&(s[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>o.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(s[l[n]]=e[l[n]])}super({maxZoom:t}),this.superCluster=new Ge(Object.assign({maxZoom:this.maxZoom,radius:r},s)),this.state={zoom:null}}calculate(e){let t=!1;if(!j(e.markers,this.markers)){t=!0,this.markers=[...e.markers];var r=this.markers.map(o=>({type:"Feature",geometry:{type:"Point",coordinates:[o.getPosition().lng(),o.getPosition().lat()]},properties:{marker:o}}));this.superCluster.load(r)}return r={zoom:e.map.getZoom()},t||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(t=t||!j(this.state,r)),this.state=r,t&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:t}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,t]},properties:r}){return r.cluster?new D({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(o=>o.properties.marker),position:new google.maps.LatLng({lat:t,lng:e})}):(e=r.marker,new D({markers:[e],position:e.getPosition()}))}}class We{constructor(e,t){this.markers={sum:e.length},e=t.map(o=>o.count);let r=e.reduce((o,s)=>o+s,0);this.clusters={count:t.length,markers:{mean:r/t.length,sum:r,min:Math.min(...e),max:Math.max(...e)}}}}class Xe{render({count:e,position:t},r){return r=window.btoa(`
  <svg fill="${e>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`),new google.maps.Marker({position:t,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}class ee{constructor(){var e=ee,t=google.maps.OverlayView;for(let r in t.prototype)e.prototype[r]=t.prototype[r]}}var O,te=O||(O={});te.CLUSTERING_BEGIN="clusteringbegin";te.CLUSTERING_END="clusteringend";te.CLUSTER_CLICK="click";let Ye=(i,e,t)=>{t.fitBounds(e.bounds)};class Qe extends ee{constructor({map:e,markers:t=[],algorithm:r=new Je({}),renderer:o=new Xe,onClusterClick:s=Ye}){super(),this.markers=[...t],this.clusters=[],this.algorithm=r,this.renderer=o,this.onClusterClick=s,e&&this.setMap(e)}addMarker(e,t){this.markers.includes(e)||(this.markers.push(e),t||this.render())}addMarkers(e,t){e.forEach(r=>{this.addMarker(r,!0)}),t||this.render()}removeMarker(e,t){let r=this.markers.indexOf(e);return r===-1?!1:(e.setMap(null),this.markers.splice(r,1),t||this.render(),!0)}removeMarkers(e,t){let r=!1;return e.forEach(o=>{r=this.removeMarker(o,!0)||r}),r&&!t&&this.render(),r}clearMarkers(e){this.markers.length=0,e||this.render()}render(){let e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,O.CLUSTERING_BEGIN,this);let{clusters:t,changed:r}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=t,this.renderClusters()),google.maps.event.trigger(this,O.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){let e=new We(this.markers,this.clusters),t=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,e),this.onClusterClick&&r.marker.addListener("click",o=>{google.maps.event.trigger(this,O.CLUSTER_CLICK,r),this.onClusterClick(o,r,t)})),r.marker.setMap(t)})}}let me=Object.values(O);C({name:"MarkerCluster",props:{options:{type:Object,default:()=>({})}},emits:me,setup(i,{emit:e,expose:t,slots:r}){let o=m(),s=y(I,m()),l=y(L,m());return T(ye,o),w(s,()=>{s.value&&(o.value=x(new Qe({map:s.value,...i.options})),me.forEach(n=>{var d;(d=o.value)===null||d===void 0||d.addListener(n,a=>e(n,a))}))},{immediate:!0}),b(()=>{var n;o.value&&((n=l.value)===null||n===void 0||n.event.clearInstanceListeners(o.value),o.value.clearMarkers(),o.value.setMap(null))}),t({markerCluster:o}),()=>{var n;return(n=r.default)===null||n===void 0?void 0:n.call(r)}}});var Me=C({inheritAttrs:!1,props:{options:{type:Object,required:!0}},setup(i,{slots:e,emit:t}){let r=m(),o=m(),s=A(()=>{var n;return(n=e.default)===null||n===void 0?void 0:n.call(e).some(d=>d.type!==ge)}),l=A(()=>({...i.options,element:r.value}));return W(()=>{o=E(Z,[],l,t)}),{customMarkerRef:r,customMarker:o,hasSlotContent:s}}});Q(`
.custom-marker-wrapper[data-v-b9d5ec8a] {
  display: none;
}
.mapdiv .custom-marker-wrapper[data-v-b9d5ec8a] {
  display: inline-block;
}
`);let et=X();V("data-v-b9d5ec8a");let tt={key:0,class:"custom-marker-wrapper"};H();let rt=et(i=>i.hasSlotContent?(N(),B("div",tt,[_("div",ve({ref:"customMarkerRef",style:{cursor:i.$attrs.onClick?"pointer":void 0}},i.$attrs),[F(i.$slots,"default",{},void 0,!0)],16)])):J("v-if",!0));Me.render=rt;Me.__scopeId="data-v-b9d5ec8a";C({name:"HeatmapLayer",props:{options:{type:Object,default:()=>({})}},setup(i){let e=m(),t=y(I,m()),r=y(L,m());return w([t,()=>i.options],([,o],[s,l])=>{var n;if(s=!j(o,l)||t.value!==s,t.value&&r.value&&s){if(o=structuredClone(o),o.data&&!(o.data instanceof r.value.MVCArray)){let d=r.value.LatLng;o.data=(n=o.data)===null||n===void 0?void 0:n.map(a=>a instanceof d||"location"in a&&(a.location instanceof d||a.location===null)?a:"location"in a?{...a,location:new d(a.location)}:new d(a))}e.value?e.value.setOptions(o):e.value=x(new r.value.visualization.HeatmapLayer({...o,map:t.value}))}},{immediate:!0}),b(()=>{e.value&&e.value.setMap(null)}),{heatmapLayer:e}},render:()=>null});const ot={components:{GoogleMap:Y,Marker:je},data(){return{pos1:{lat:31.76162,lng:35.18551},pos2:{lat:48.856613,lng:2.352222},pos3:{lat:40.689247,lng:-74.148502},center:this.pos1,zoom:2}},methods:{onClick(i){this.center=i,this.zoom=15}}};function it(i,e,t,r,o,s){const l=oe("Marker"),n=oe("GoogleMap",!0);return N(),B(n,{"api-key":"AIzaSyAAHogqTp-LUiANQDWTtyu46dyC730w1Eg",style:{width:"100%",height:"500px"},center:o.center,zoom:o.zoom},{default:Ie(()=>[_(l,{options:{position:o.pos1,label:"J",title:"Jerusalem"},onClick:e[0]||(e[0]=d=>s.onClick(this.pos1))},null,8,["options"]),_(l,{options:{position:o.pos2,label:"P",title:"Paris"},onClick:e[1]||(e[1]=d=>s.onClick(this.pos2))},null,8,["options"]),_(l,{options:{position:o.pos3,label:"NY",title:"New York"},onClick:e[2]||(e[2]=d=>s.onClick(this.pos3))},null,8,["options"])]),_:1},8,["center","zoom"])}const nt=Pe(ot,[["render",it]]);export{nt as default};