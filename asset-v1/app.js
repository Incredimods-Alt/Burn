/* I'm A Naked Bird */ 
// Key: G# Minor
//                                                                                                                                                                                                                                                                                                                                                                                                                                   Text Color           Button Color       menu color     Active Button color                                                                   
var app=new function(){this.name="Burn",this.version="1",this.date="2023",this.folder="asset-v1/",this.looptime=6e3,this.bpm=80,this.totalframe=360,this.nbpolo=7,this.nbloopbonus=8,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=30,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#a43dbf",this.col0="#BF00FF",this.col1="#BF00FF",this.col2="#a43dbf",this.col3="#000000",this.col4="#232323",this.animearray=[
    {name:"1_Kikaz",color:"094B9D",uniqsnd:!1},
    {name:"2_snarez",color:"094B9D",uniqsnd:!0},
    {name:"3_hitaz",color:"094B9D",uniqsnd:!0},
    {name:"4_buzz",color:"EFB028",uniqsnd:!1},
    {name:"5_burn",color:"A43bdf",uniqsnd:!1},
    {name:"6_puoha",color:"094B9D",uniqsnd:!0},
    {name:"7_boombox",color:"EFB028",uniqsnd:!1},
    {name:"8_coco",color:"21DF01",uniqsnd:!1},
    {name:"9_Aye",color:"A43bdf",uniqsnd:!0},
    {name:"10_chao",color:"EFB028",uniqsnd:!1},
    {name:"11_teung",color:"21DF01",uniqsnd:!1},
    {name:"12_biker",color:"21DF01",uniqsnd:!0},
    {name:"13_gas",color:"A43bdf",uniqsnd:!0},
    {name:"14_ooh",color:"21DF01",uniqsnd:!0},
    {name:"15_siffle",color:"EFB028",uniqsnd:!0},
    {name:"16_hmmm",color:"A43bdf",uniqsnd:!1},
    {name:"17_set",color:"A43bdf",uniqsnd:!1},
    {name:"18_tichu",color:"094B9D",uniqsnd:!0},
    {name:"19_error",color:"21DF01",uniqsnd:!0},
    {name:"20_16bit",color:"EFB028",uniqsnd:!0},
    {name:"21_beatboxer",color:"094b9d",uniqsnd:!1},
    {name:"22_letit",color:"a43bdf",uniqsnd:!1}]
    ,this.bonusarray=[{name:"Urban", src:"b1-Urban-hb.mp4", code:"1,2,7,10,12",sound:"bonus-Urban", aspire:"aspire"},{name:"Set", src:"b2-Set-hb.mp4", code:"1,7,9,6,17", sound:"bonus-Set", aspire:"aspire_b"},];for(var n=0,o=this.animearray.length;n<o;n++)
    {var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
    