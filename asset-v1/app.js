/* 0.5.7 2020-12-27 16:37:09 */
var app=new function(){this.name="Vibin",this.version="1",this.date="2020",this.folder="asset-v1/",this.looptime=6857,this.bpm=140,this.totalframe=328,this.nbpolo=7,this.nbloopbonus=4,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=27,this.recminloop=3,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#868686",this.col1="#333333",this.col2="#161618",this.col3="#333333",this.col4="#2C1A67",this.animearray=[{name:"1_cap",color:"386CB8",uniqsnd:!0},{name:"2_glassesdrip",color:"386CB8",uniqsnd:!0},{name:"3_brerre",color:"386CB8",uniqsnd:!0},{name:"4_larry",color:"386CB8",uniqsnd:!0},{name:"5_sharkguy",color:"386CB8",uniqsnd:!1},{name:"6_steff",color:"EC6200",uniqsnd:!1},{name:"7_rapper",color:"EC6200",uniqsnd:!0},{name:"8_priean",color:"EC6200",uniqsnd:!0},{name:"9_lucas",color:"EC6200",uniqsnd:!0},{name:"10_coolkid",color:"EC6200",uniqsnd:!1},{name:"11_emo",color:"69365C",uniqsnd:!1},{name:"12_Michael-rap",color:"69365C",uniqsnd:!0},{name:"13_doodo",color:"69365C",uniqsnd:!0},{name:"14_louie",color:"69365C",uniqsnd:!0},{name:"15_talkbox",color:"69365C",uniqsnd:!1},{name:"16_flain",color:"D92800",uniqsnd:!1},{name:"17_solo",color:"D92800",uniqsnd:!1},{name:"18_waroomhousewoman",color:"D92800",uniqsnd:!0},{name:"19_tanaka",color:"D92800",uniqsnd:!0},{name:"20_Headscarf",color:"D92800",uniqsnd:!0}],this.bonusarray=[{name:"Mechanic",src:"v1-b1-sky-hb.mp4",code:"1,7,11,14,18",sound:"bonus-sky",aspire:"aspire-sky"}],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var i=this.animearray[n].name;this.animearray[n].soundA=i+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?i+"_a":i+"_b",this.animearray[n].anime=i+"-sprite.png",this.animearray[n].animeData=i+".json"}};