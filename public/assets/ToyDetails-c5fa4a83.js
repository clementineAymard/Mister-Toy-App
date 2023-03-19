import{_ as i,r as l,o as d,c as u,b as _,w as m,a as t,f as e,t as s}from"./index-922a364f.js";const y={data(){return{toy:{}}},async created(){try{await this.$store.dispatch({type:"setCurrToy",toyId:this.$route.params.toyId}),this.toy={...this.$store.getters.currToy}}catch(o){throw console.log("Failed to get toy by ID"),o}},methods:{},computed:{date(){var o=new Date(this.toy.createdAt);console.log(o);const a={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Intl.DateTimeFormat("en-GB",a).format(o)},stock(){return this.toy.inStock?"Available":"Out of stock"}}},h={class:"toy-details flex"},p=["src"],f={class:"details flex-column gap"},k=t("span",null,"Name: ",-1),v=t("span",null,"Date created: ",-1),g=t("span",null,"Price : $",-1),x=t("span",null,"In Stock : ",-1),D=t("span",null,"Labels : ",-1);function w(o,a,b,B,n,r){const c=l("RouterLink");return d(),u("section",h,[_(c,{to:"/toys"},{default:m(()=>[e("Back")]),_:1}),t("img",{src:n.toy.imageUrl},null,8,p),t("div",f,[t("div",null,[k,e(s(n.toy.name),1)]),t("div",null,[v,e(s(r.date),1)]),t("div",null,[g,e(s(n.toy.price),1)]),t("div",null,[x,e(s(r.stock),1)]),t("div",null,[D,e(s(n.toy.labels.join(", ")),1)])])])}const T=i(y,[["render",w]]);export{T as default};
