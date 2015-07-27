
//＊＊＊背景地図を設定＊＊＊
//地理院地図
ver m_Chiriin = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>" });

//OpenStreetMap
ver m_Osm = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });

//地図を表示し、羊蹄山を中心に表示
var map = L.map('map' , {
  center: [42.827639, 140.811768], zoom: 11,
  layers: [m_Chiriin] });

//背景レイヤの作成
ver Map_BaseLayer = {
  "地理院地図　標準": m_Chiriin,
  "OpenStreetMap　標準": m_Osm };

// レイヤコントロールの表示
L.control.layers(Map_BaseLayer, null, null).addTo(map);


