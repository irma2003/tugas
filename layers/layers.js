var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JumlahWisatawan_1 = new ol.format.GeoJSON();
var features_JumlahWisatawan_1 = format_JumlahWisatawan_1.readFeatures(json_JumlahWisatawan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahWisatawan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JumlahWisatawan_1.addFeatures(features_JumlahWisatawan_1);
var lyr_JumlahWisatawan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JumlahWisatawan_1, 
                style: style_JumlahWisatawan_1,
                popuplayertitle: 'Jumlah Wisatawan',
                interactive: true,
    title: 'Jumlah Wisatawan<br />\
    <img src="styles/legend/JumlahWisatawan_1_0.png" /> 0<br />\
    <img src="styles/legend/JumlahWisatawan_1_1.png" /> 108,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_2.png" /> 274,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_3.png" /> 410,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_4.png" /> 568,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_5.png" /> 601,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_6.png" /> 989,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_7.png" /> 1200,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_8.png" /> 2113,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_9.png" /> 2795,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_10.png" /> 2888,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_11.png" /> 3114,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_12.png" /> 3910,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_13.png" /> 3996,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_14.png" /> 4050,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_15.png" /> 4324,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_16.png" /> 5443,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_17.png" /> 5458,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_18.png" /> 5986,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_19.png" /> 6174,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_20.png" /> 7916,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_21.png" /> 8764,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_22.png" /> 8805,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_23.png" /> 9215,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_24.png" /> 10086,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_25.png" /> 14297,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_26.png" /> 14968,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_27.png" /> 19329,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_28.png" /> 20513,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_29.png" /> 21756,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_30.png" /> 31183,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_31.png" /> 38348,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_32.png" /> 48257,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_33.png" /> 55361,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_34.png" /> 57048,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_35.png" /> 61813,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_36.png" /> 66729,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_37.png" /> 71741,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_38.png" /> 75825,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_39.png" /> 85650,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_40.png" /> 85782,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_41.png" /> 90903,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_42.png" /> 105867,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_43.png" /> 162611,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_44.png" /> 168047,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_45.png" /> 211272,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_46.png" /> 218970,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_47.png" /> 247237,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_48.png" /> 254767,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_49.png" /> 444725,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_50.png" /> 771377,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_51.png" /> 876482,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_52.png" /> 1285225,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_53.png" /> 2584996,000000000000000<br />\
    <img src="styles/legend/JumlahWisatawan_1_54.png" /> <br />' });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_0.png" /> 0<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_1.png" /> Ambarketawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_2.png" /> Argomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_3.png" /> Argosari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_4.png" /> Baciro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_5.png" /> Balecatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_6.png" /> Balerante<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_7.png" /> Banguncipto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_8.png" /> Bangunjiwo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_9.png" /> Bangunkerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_10.png" /> Banguntapan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_11.png" /> Banjararum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_12.png" /> Banjarharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_13.png" /> Banjarsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_14.png" /> Banyuraden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_15.png" /> Banyurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_16.png" /> Baturetno<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_17.png" /> Bawukan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_18.png" /> Bener<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_19.png" /> Bimomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_20.png" /> Bligo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_21.png" /> Bokoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_22.png" /> Bugisan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_23.png" /> Candibinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_24.png" /> Caturharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_25.png" /> Caturtunggal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_26.png" /> Cokrodiningratan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_27.png" /> Condongcatur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_28.png" /> Demangan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_29.png" /> Donoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_30.png" /> Donokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_31.png" /> Gayamharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_32.png" /> Girikerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_33.png" /> Glagaharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_34.png" /> Hargobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_35.png" /> Harjobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_36.png" /> Jatisarono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_37.png" /> Jogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_38.png" /> Kalitirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_39.png" /> Kaliurang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_40.png" /> Karangwaru<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_41.png" /> Katekan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_42.png" /> Kebondalem Kidul<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_43.png" /> Kembang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_44.png" /> Kemiren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_45.png" /> Kepuharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_46.png" /> Kepurun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_47.png" /> Kerten<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_48.png" /> Klitren<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_49.png" /> Kokosan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_50.png" /> Kotesan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_51.png" /> Kranggan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_52.png" /> Kricak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_53.png" /> Leses<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_54.png" /> Lumbungrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_55.png" /> Madurejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_56.png" /> Maguwoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_57.png" /> Margoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_58.png" /> Margodadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_59.png" /> Margokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_60.png" /> Margoluwih<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_61.png" /> Margomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_62.png" /> Margorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_63.png" /> Merdikorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_64.png" /> Minomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_65.png" /> Mororejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_66.png" /> Mujamuju<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_67.png" /> Ngablak<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_68.png" /> Ngestiharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_69.png" /> Nglumut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_70.png" /> Ngoro-Oro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_71.png" /> Nogotirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_72.png" /> Pakembinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_73.png" /> Pakunden<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_74.png" /> Pandowoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_75.png" /> Panggang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_76.png" /> Pereng<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_77.png" /> Pondokrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_78.png" /> Potorono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_79.png" /> Purwobinangun<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_80.png" /> Purwomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_81.png" /> Salam<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_82.png" /> Sambirejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_83.png" /> Sardonoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_84.png" /> Sariharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_85.png" /> Selomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_86.png" /> Sendangadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_87.png" /> Sendangagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_88.png" /> Sendangarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_89.png" /> Sendangmulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_90.png" /> Sendangrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_91.png" /> Sendangsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_92.png" /> Sendangtirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_93.png" /> Sengon<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_94.png" /> Serut<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_95.png" /> Sidoagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_96.png" /> Sidoarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_97.png" /> Sidokarto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_98.png" /> Sidoluhur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_99.png" /> Sidomoyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_100.png" /> Sidomulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_101.png" /> Sidorejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_102.png" /> Sinduadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_103.png" /> Sinduharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_104.png" /> Sindumartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_105.png" /> Sitimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_106.png" /> Somokaton<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_107.png" /> Srimartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_108.png" /> Srimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_109.png" /> Sudimoro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_110.png" /> Sukoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_111.png" /> Sumberadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_112.png" /> Sumberagung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_113.png" /> Sumberarum<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_114.png" /> Sumberharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_115.png" /> Sumberrahayu<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_116.png" /> Sumberrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_117.png" /> Sumbersari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_118.png" /> Tamanmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_119.png" /> Tamantirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_120.png" /> Tambakrejo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_121.png" /> Taskombang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_122.png" /> Tegaltirto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_123.png" /> Terban<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_124.png" /> Tirtoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_125.png" /> Tirtomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_126.png" /> Tlogo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_127.png" /> Tlogoadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_128.png" /> Tridadi<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_129.png" /> Trihanggo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_130.png" /> Triharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_131.png" /> Trimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_132.png" /> Umbulharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_133.png" /> Umbulmartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_134.png" /> Wedomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_135.png" /> Widodomartani<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_136.png" /> Wijimulyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_137.png" /> Wonokerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_138.png" /> Wukirharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_139.png" /> Wukirsari<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_2_140.png" /> <br />' });
var format_ADMINISTRASI_LN_25K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_3 = format_ADMINISTRASI_LN_25K_3.readFeatures(json_ADMINISTRASI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_3.addFeatures(features_ADMINISTRASI_LN_25K_3);
var lyr_ADMINISTRASI_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_3, 
                style: style_ADMINISTRASI_LN_25K_3,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_3.png" /> ADMINISTRASI_LN_25K'
            });
var format_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_4 = format_SUNGAI_LN_25K_4.readFeatures(json_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_4.addFeatures(features_SUNGAI_LN_25K_4);
var lyr_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_4, 
                style: style_SUNGAI_LN_25K_4,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_4.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_5 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_5 = format_JALAN_LN_25K_5.readFeatures(json_JALAN_LN_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_5.addFeatures(features_JALAN_LN_25K_5);
var lyr_JALAN_LN_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_5, 
                style: style_JALAN_LN_25K_5,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_5.png" /> JALAN_LN_25K'
            });
var format_PEMERINTAHAN_PT_25K_6 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_6 = format_PEMERINTAHAN_PT_25K_6.readFeatures(json_PEMERINTAHAN_PT_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_6.addFeatures(features_PEMERINTAHAN_PT_25K_6);
var lyr_PEMERINTAHAN_PT_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_6, 
                style: style_PEMERINTAHAN_PT_25K_6,
                popuplayertitle: 'PEMERINTAHAN_PT_25K',
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_0.png" /> Kantor Bupati<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_1.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_2.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_3.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_6_4.png" /> <br />' });
var format_PersebaranWisata_7 = new ol.format.GeoJSON();
var features_PersebaranWisata_7 = format_PersebaranWisata_7.readFeatures(json_PersebaranWisata_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PersebaranWisata_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PersebaranWisata_7.addFeatures(features_PersebaranWisata_7);
var lyr_PersebaranWisata_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PersebaranWisata_7, 
                style: style_PersebaranWisata_7,
                popuplayertitle: 'Persebaran Wisata',
                interactive: true,
    title: 'Persebaran Wisata<br />\
    <img src="styles/legend/PersebaranWisata_7_0.png" /> Agrowisata Bhumi Merapi<br />\
    <img src="styles/legend/PersebaranWisata_7_1.png" /> Blue Lagoon<br />\
    <img src="styles/legend/PersebaranWisata_7_2.png" /> Bukit Teletubbies<br />\
    <img src="styles/legend/PersebaranWisata_7_3.png" /> Candi Banyunibo<br />\
    <img src="styles/legend/PersebaranWisata_7_4.png" /> Candi Barong<br />\
    <img src="styles/legend/PersebaranWisata_7_5.png" /> Candi Gebang<br />\
    <img src="styles/legend/PersebaranWisata_7_6.png" /> Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_7_7.png" /> Candi Kalasan<br />\
    <img src="styles/legend/PersebaranWisata_7_8.png" /> Candi Prambanan<br />\
    <img src="styles/legend/PersebaranWisata_7_9.png" /> Candi Sambisari<br />\
    <img src="styles/legend/PersebaranWisata_7_10.png" /> Candi Sari<br />\
    <img src="styles/legend/PersebaranWisata_7_11.png" /> Citra Grand Mutiara Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_7_12.png" /> Desa Wisata Bokesan<br />\
    <img src="styles/legend/PersebaranWisata_7_13.png" /> Desa Wisata Brajan<br />\
    <img src="styles/legend/PersebaranWisata_7_14.png" /> Desa Wisata Brayut<br />\
    <img src="styles/legend/PersebaranWisata_7_15.png" /> Desa Wisata Candi Abang<br />\
    <img src="styles/legend/PersebaranWisata_7_16.png" /> Desa Wisata Dukuh<br />\
    <img src="styles/legend/PersebaranWisata_7_17.png" /> Desa Wisata Gabugan (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_7_18.png" /> Desa Wisata Gamplong (termasuk Studio Alam Gamplong)<br />\
    <img src="styles/legend/PersebaranWisata_7_19.png" /> Desa Wisata Garongan (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_7_20.png" /> Desa Wisata Grogol<br />\
    <img src="styles/legend/PersebaranWisata_7_21.png" /> Desa Wisata Jetak<br />\
    <img src="styles/legend/PersebaranWisata_7_22.png" /> Desa Wisata Kadisobo II<br />\
    <img src="styles/legend/PersebaranWisata_7_23.png" /> Desa Wisata Kedung Nganten (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_7_24.png" /> Desa Wisata Kelor (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_7_25.png" /> Desa Wisata Kembangarum<br />\
    <img src="styles/legend/PersebaranWisata_7_26.png" /> Desa Wisata Ketingan<br />\
    <img src="styles/legend/PersebaranWisata_7_27.png" /> Desa Wisata Kinahrejo<br />\
    <img src="styles/legend/PersebaranWisata_7_28.png" /> Desa Wisata Ledok Nongko (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_7_29.png" /> Desa Wisata Malangan<br />\
    <img src="styles/legend/PersebaranWisata_7_30.png" /> Desa Wisata Mlangi<br />\
    <img src="styles/legend/PersebaranWisata_7_31.png" /> Desa Wisata Nawung<br />\
    <img src="styles/legend/PersebaranWisata_7_32.png" /> Desa Wisata Ngaggring (Peternakan)<br />\
    <img src="styles/legend/PersebaranWisata_7_33.png" /> Desa Wisata Pajangan<br />\
    <img src="styles/legend/PersebaranWisata_7_34.png" /> Desa Wisata Pancoh<br />\
    <img src="styles/legend/PersebaranWisata_7_35.png" /> Desa Wisata Pentingsari<br />\
    <img src="styles/legend/PersebaranWisata_7_36.png" /> Desa Wisata Plempoh<br />\
    <img src="styles/legend/PersebaranWisata_7_37.png" /> Desa Wisata Pulesari (Alam)<br />\
    <img src="styles/legend/PersebaranWisata_7_38.png" /> Desa Wisata Pulewulung<br />\
    <img src="styles/legend/PersebaranWisata_7_39.png" /> Desa Wisata Rejosari<br />\
    <img src="styles/legend/PersebaranWisata_7_40.png" /> Desa Wisata Rumah Domes<br />\
    <img src="styles/legend/PersebaranWisata_7_41.png" /> Desa Wisata Sendari<br />\
    <img src="styles/legend/PersebaranWisata_7_42.png" /> Desa Wisata Srowolan<br />\
    <img src="styles/legend/PersebaranWisata_7_43.png" /> Desa Wisata Sukunan<br />\
    <img src="styles/legend/PersebaranWisata_7_44.png" /> Desa Wisata Tanjung<br />\
    <img src="styles/legend/PersebaranWisata_7_45.png" /> Desa Wisata Tlatar Seneng<br />\
    <img src="styles/legend/PersebaranWisata_7_46.png" /> Desa Wisata Trumpon (Agro)<br />\
    <img src="styles/legend/PersebaranWisata_7_47.png" /> Desa Wisata Tunggularum<br />\
    <img src="styles/legend/PersebaranWisata_7_48.png" /> Eksotika Krasak Jolontoro<br />\
    <img src="styles/legend/PersebaranWisata_7_49.png" /> Endapan Gunung Api Purba Candi Ijo<br />\
    <img src="styles/legend/PersebaranWisata_7_50.png" /> Geoheritage Lava Bantal<br />\
    <img src="styles/legend/PersebaranWisata_7_51.png" /> Geoheritage Tebing breksi candi ijo<br />\
    <img src="styles/legend/PersebaranWisata_7_52.png" /> Grojogan Watu Purbo<br />\
    <img src="styles/legend/PersebaranWisata_7_53.png" /> Jalan Kaliurang, Damai, Palagan<br />\
    <img src="styles/legend/PersebaranWisata_7_54.png" /> Jogja Bay Pirates Adventure Waterpark<br />\
    <img src="styles/legend/PersebaranWisata_7_55.png" /> Jogja Mini Zoo Exotarium<br />\
    <img src="styles/legend/PersebaranWisata_7_56.png" /> Kaliadem (Minat Khusus)<br />\
    <img src="styles/legend/PersebaranWisata_7_57.png" /> Kaliurang (Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_7_58.png" /> Kawasan Barek<br />\
    <img src="styles/legend/PersebaranWisata_7_59.png" /> Kawasan Jalan Magelang (Belanja dan Rekreatif)<br />\
    <img src="styles/legend/PersebaranWisata_7_60.png" /> Kawasan Kalasan (Ayam Goreng)<br />\
    <img src="styles/legend/PersebaranWisata_7_61.png" /> Kawasan Lapangan Denggung (keluarga)<br />\
    <img src="styles/legend/PersebaranWisata_7_62.png" /> Kawasan Minapolis Berbah<br />\
    <img src="styles/legend/PersebaranWisata_7_63.png" /> Kawasan Minggir<br />\
    <img src="styles/legend/PersebaranWisata_7_64.png" /> Kawasan Minomartani (kuliner Bakpia)<br />\
    <img src="styles/legend/PersebaranWisata_7_65.png" /> Kawasan Moyudan<br />\
    <img src="styles/legend/PersebaranWisata_7_66.png" /> Kawasan Pendukung Monjali<br />\
    <img src="styles/legend/PersebaranWisata_7_67.png" /> Kawasan Pendukung Prambanan dan Situs Boko<br />\
    <img src="styles/legend/PersebaranWisata_7_68.png" /> Kawasan Seturan<br />\
    <img src="styles/legend/PersebaranWisata_7_69.png" /> Kawasan Seyegan dan Godean<br />\
    <img src="styles/legend/PersebaranWisata_7_70.png" /> Kawasan Stadion Maguwoharjo-Candi Gebang-Embung Tambakboyo<br />\
    <img src="styles/legend/PersebaranWisata_7_71.png" /> Kawasan Volcano Tour<br />\
    <img src="styles/legend/PersebaranWisata_7_72.png" /> Kraton Ratu Boko<br />\
    <img src="styles/legend/PersebaranWisata_7_73.png" /> Minapolis Ngemplak (Perikanan)<br />\
    <img src="styles/legend/PersebaranWisata_7_74.png" /> Monumen Jogja Kembali<br />\
    <img src="styles/legend/PersebaranWisata_7_75.png" /> Museum Affandi, Kawasan Ambarrukmo<br />\
    <img src="styles/legend/PersebaranWisata_7_76.png" /> Museum Gempa Prof. Dr. Sarwidi<br />\
    <img src="styles/legend/PersebaranWisata_7_77.png" /> Museum Geoteknologi UPN<br />\
    <img src="styles/legend/PersebaranWisata_7_78.png" /> Museum Gunungapi Merapi (Pendidikan Kegunungapian)<br />\
    <img src="styles/legend/PersebaranWisata_7_79.png" /> Museum Pendidikan Indonesia<br />\
    <img src="styles/legend/PersebaranWisata_7_80.png" /> Museum UGM<br />\
    <img src="styles/legend/PersebaranWisata_7_81.png" /> Museum Ullen Sentalu<br />\
    <img src="styles/legend/PersebaranWisata_7_82.png" /> Saluran Van Der Wijk<br />\
    <img src="styles/legend/PersebaranWisata_7_83.png" /> Sindu Kusuma Edupark<br />\
    <img src="styles/legend/PersebaranWisata_7_84.png" /> Taman Nasional Gunung Merapi<br />\
    <img src="styles/legend/PersebaranWisata_7_85.png" /> Taman Pelangi Jogja<br />\
    <img src="styles/legend/PersebaranWisata_7_86.png" /> Taman Rekreasi Anak Kaliurang<br />\
    <img src="styles/legend/PersebaranWisata_7_87.png" /> The World Landmarks Merapi Park<br />\
    <img src="styles/legend/PersebaranWisata_7_88.png" /> Turgo (Ekowisata)<br />\
    <img src="styles/legend/PersebaranWisata_7_89.png" /> Upside Down World Jogja (Permanently closed)<br />\
    <img src="styles/legend/PersebaranWisata_7_90.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_JumlahWisatawan_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);lyr_ADMINISTRASI_LN_25K_3.setVisible(true);lyr_SUNGAI_LN_25K_4.setVisible(true);lyr_JALAN_LN_25K_5.setVisible(true);lyr_PEMERINTAHAN_PT_25K_6.setVisible(true);lyr_PersebaranWisata_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_JumlahWisatawan_1,lyr_ADMINISTRASIDESA_AR_25K_2,lyr_ADMINISTRASI_LN_25K_3,lyr_SUNGAI_LN_25K_4,lyr_JALAN_LN_25K_5,lyr_PEMERINTAHAN_PT_25K_6,lyr_PersebaranWisata_7];
lyr_JumlahWisatawan_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'namobj': 'namobj', 'srs_id': 'srs_id', 'wadmkc': 'wadmkc', 'wadmkd': 'wadmkd', 'wadmkk': 'wadmkk', 'wadmpr': 'wadmpr', 'remark': 'remark', 'metadata': 'metadata', 'jumlah': 'jumlah', 'fcode': 'fcode', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PersebaranWisata_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'metadata': 'metadata', 'srs_id': 'srs_id', 'sumber': 'sumber', 'remark': 'remark', });
lyr_JumlahWisatawan_1.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'srs_id': 'TextEdit', 'wadmkc': 'TextEdit', 'wadmkd': 'TextEdit', 'wadmkk': 'TextEdit', 'wadmpr': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'jumlah': 'TextEdit', 'fcode': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PersebaranWisata_7.set('fieldImages', {'ogc_fid': 'Range', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'sumber': 'TextEdit', 'remark': 'TextEdit', });
lyr_JumlahWisatawan_1.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'srs_id': 'no label', 'wadmkc': 'no label', 'wadmkd': 'no label', 'wadmkk': 'no label', 'wadmpr': 'no label', 'remark': 'no label', 'metadata': 'no label', 'jumlah': 'inline label - always visible', 'fcode': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'inline label - always visible', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_25K_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PersebaranWisata_7.set('fieldLabels', {'ogc_fid': 'no label', 'objectid': 'no label', 'fcode': 'no label', 'namobj': 'inline label - always visible', 'metadata': 'no label', 'srs_id': 'no label', 'sumber': 'no label', 'remark': 'no label', });
lyr_PersebaranWisata_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});