/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import '../styles/quote.css';

const names = [
  "Aberffraw", "Amlwch", "Amlwch Port", "Beaumaris", "Belan", "Benllech", "Beudygwyn", "Bodedern", "Bodewryd", "Bodffordd", "Bodorgan", "Bodwrog", "Bont Newydd", "Bryn Du", "Bryngwran", "Brynrefail", "Brynteg", "Brynsiencyn", "Bull Bay", "Burwen", "Caergeiliog", "Cemaes Bay", "Cemlyn", "Capel Coch", "Capel Gwyn", "Capel Mawr", "Capel Parc", "Carmel", "Carreglefn", "Ceirchiog", "Cemaes Bay", "Cemlyn", "Cerrigceinwen", "Cerrig Man", "Cestyll Garden", "Church Bay", "Coedana", "Dwyran", "Dulas", "Engedi", "Elim", "Four Mile Bridge", "Gaerwen", "Garreglefn", "Gwalchmai", "Gwredog", "Holyhead", "Heneglwys", "Hermon", "Llaingoch", "Llanallgo", "Llanbabo", "Llanbadrig", "Llanbedrgoch", "Llanbeulan", "Llanddaniel", "Llanddeusant", "Llanddona", "Llanddwyn", "Llandegfan", "Llandrygarn", "Llandyfrydog", "Llandysilio", "Llanedwen", "Llaneilian", "Llanerchymedd", "Llanfachraeth", "Llanfaelog", "Llanfaes", "Llanfaethlu", "Llanfair Mathafarn Eithaf", "Llanfairpwllgwyngyllgogerychwyrndrobwyllllantysiliogogogoch", "Llanfairyneubwll", "Llanfairynghornwy", "Llanfechell", "Llanffinan", "Llanfflewyn", "Llanfihangel Tre'r Beirdd", "Llanfihangel Yn Nhywyn", "Llanfihangel Ysgeifiog", "Llanfugail", "Llanfwrog", "Llangadwaladr", "Llangaffo", "Llangefni", "Llangeinwen", "Llangoed", "Llangristiolus", "Llangwyllog", "Llanidan", "Llaniestyn [cy]", "Llanllibio", "Llanrhwydrys", "Llanrhyddlad", "Llansadwrn", "Anglesey", "Llantrisant", "Anglesey", "Llanwenllwyfo", "Llaniestyn", "Llanynghenedl", "LLechcynfarwy", "Llechylched", "Llynfaes", "Maenaddfwyn", "Malltraeth", "Marian Glas", "Mechell", "Mynydd Mechell", "Menai Bridge", "Moelfre", "Mona", "Nebo", "Anglesey", "Newborough", "Anglesey", "Paradwys", "Parc", "Pencarnisiog", "Pengraigwen", "Pengorffwysfa", "Penmon", "Anglesey", "Penmynydd", "Penrhos Lligwy", "Penrhyd", "Pentraeth", "Pentre Berw", "Pen y Garnedd", "Penygraigwen", "Penysarn", "Rhodogeidio", "Rhosbeirio", "Rhos Cefn Hir", "Rhosmeirch", "Rhoscolyn", "Rhosneigr", "Rhostrehwfa", "Rhosybol", "Rhosgoch", "Rhydwyn", "Star", "Anglesey", "Soar", "Aberffraw", "Talwrn", "Trearddur Bay", "Trefdraeth", "Trefor", "Tregaian", "Tregele", "Trewalchmai", "Tŷ Croes", "Tyn-y-Gongl", "Valley", "Anglesey", "Wern y Wylan", "Aberbargoed", "Abercarn", "Abertridwr", "Caerphilly", "Abertysswg", "Argoed", "Bargoed", "Bedwas", "Bedwellty", "Blackwood", "Blaen-carno", "Bont Pren", "Britannia", "Brithdir", "Bryn", "Bryncenydd", "Bute Town", "Caerphilly", "Caledfryn", "Castle Park", "Cefn Fforest", "Cefn Hengoed", "Cefn Mably", "Chapel of Ease", "Churchill Park", "Croespenmaen", "Crosskeys", "Crumlin", "Cwmbargoed", "Cwmcarn", "Cwmgelli", "Cwmfelinfach", "Cwmsyfiog", "Cwmnantygwynt", "Deri", "Draethen", "Eglwysilan", "Elliotstown", "Energlyn", "Fernlea", "Fleur-de-lis", "Fochriw", "Gellihaf", "Gelligaer", "Gelligroes", "Gilfach", "Gilfach Estate", "Glan-y-nant", "Graig-y-Rhacca", "Groesfaen", "Hafodyrynys", "Hendredenny", "Hengoed", "Hollybush", "Lansbury Park", "Llanbradach", "Llanfabon", "Llanfach", "Llechryd", "Caerphily", "Llwyn Gwyn", "Machen", "Maesycwmmer", "Manmoel", "Markham", "Mornington Meadows", "Mynyddislwyn", "Nelson", "Newbridge", "New Tredegar", "Oakdale", "Ochrwyth", "Pantside", "Pantyresk", "Penallta", "Pengam", "Penllwyn", "Penmaen", "Penpedairheol", "Caerphilly", "Pentwyn (near Fochriw)", "Pentwyn (near Penyrheol)", "Pentwyn (near Trinant)", "Pentwynmawr", "Penybryn", "Penyfan", "Penyrheol", "Phillipstown", "Caerphilly", "Pontllanfraith", "Pontlottyn", "Pontymister", "Pontywaun", "Princetown", "Pwllypant", "Rhymney", "Rhymney Bridge", "Risca", "Rudry", "Ruperra", "Senghenydd", "Springfield", "Tir-Phil", "Tir-y-berth", "Trecenydd", "Tredomen", "Treowen", "Caerphilly", "Trethomas", "Trinant", "Troedrhiwfwch", "Ty Sign", "Van", "Caerphilly", "Waterloo", "Watford", "Caerphilly", "Wattsville", "West End", "Wernddu", "Woodfieldside", "Wyllie", "Ynysddu", "Ystrad Mynach", "Aber-arad", "Aber-giar", "Abergorlech", "Abergwili", "Abernant", "Alltwalis", "Ammanford", "Bancffosfelen", "Bancyfelin", "Bethlehem", "Betws", "Brechfa", "Bronwydd", "Brynamman", "Burry Port", "Bynea", "Caeo or Caio", "Capel Dewi", "Carmarthen", "Carmel", "Carway", "Cefneithin", "Cenarth", "Cross Hands", "Cross Inn", "Crugybar", "Crwbin", "Cwmffrwd", "Cwmisfael", "Cwmamman", "Cwmann Cwmcarnhywel Cefncaeau", "Dafen", "Derwydd", "Dryslwyn", "Edwinsford", "Felinfoel", "Ferryside", "Fforest", "Five Roads", "Garnant", "Glanamman", "Gorslas", "Gwernogle", "Gwynfe", "Harford", "Horeb", "Idole", "Kidwelly", "Laugharne ", "Llanarthney ", "Llanboidy ", "Llandawke", "Llanddeusant", "Llanddowror", "Llandeilo", "Llandovery", "Llandybie", "Llandyfaelog", "Llandysul", "Llanelli", "Llanfihangel Aberbythych", "Llanfihangel ar Arth", "Llanfynydd", "Llangadog", "Llangain", "Llangathen", "Llangennech", "Llangunnor", "Llangyndeyrn", "Llanllwch", "Llanllwni", "Llannon", "Llanmiloe", "Llanpumsaint", "Llansadwrn", "Llansteffan", "Llanwrda", "Llandybie", "Llanybydder", "Llwynhendy", "Longmoor", "Maesybont", "Manordeilo", "Myddfai", "Mynyddcerrig", "Nantgaredig", "Nantycaws", "Newcastle Emlyn", "New Inn", "Pantyffynnon", "Parc y Rhos", "Pemberton", "Pembrey", "Pencader", "Pendine", "Peniel", "Penrhiwgoch", "Pensarn", "Pentregwenlais", "Penygroes", "Plashett", "Pontantwn", "Pontarsais", "Ponthenri", "Pontyberem", "Porthyrhyd", "Pumsaint", "Pwll", "Pontyates", "Pen-y-graig", "Quarter Bach", "Red Roses", "Rhandirmwyn", "Rhosamman", "Rhydargaeau", "Rhydcymerau", "Sandy", "St Clears", "St Ishmael", "Talley", "Talog", "Trapp", "Trelech", "Trimsaran", "Tumble", "Tycroes", "Upland Arms", "Upper Brynamman", "Upper Tumble", "Yr Hendy", "Aberaeron", "Aberarth", "Aberffrwd", "Aber-meurig", "Abermagwr", "Aberporth", "Aberystwyth", "Alltyblacca", "Banc-y-môr", "Bethania", "Betws Bledrws", "Betws Ifan", "Beulah", "Blaenplwyf", "Blaenporth", "Borth", "Bow Street", "Bronant", "Brongest", "Brynhoffnant", "Bwlchllan", "Caerwedros", "Cei Bach", "Capel Bangor", "Capel Betws Leuci", "Capel Dewi", "Aberystwyth", "Capel Dewi", "Llandysul", "Capel Seion", "Cardigan", "Cellan", "Cenarth", "Ciliau Aeron", "Chancery", "Commin Capel Betws", "Comins Coch", "Cribyn", "Cross Inn", "Llan-non", "Cross Inn", "Cei Newydd/New Quay", "Cwmbrwyno", "Cwmerfyn", "Cwm Rheidol", "Cwmsychbant", "Cwmsymlog", "Cwmtudu", "Cwm Ystwyth", "Cwrtnewydd", "Devil’s Bridge", "Dihewyd", "Dole", "Drefach", "Elerech", "Felin Fach", "Ferwig", "Y", "Ffaldybrenin", "Ffair Rhos", "Ffoshelyg", "Ffostrasol", "Ffosyffin", "Furnace", "Gilfachreda", "Glan-y-môr", "Ceredigion", "Goginan", "Gors Goch", "Gwbert", "Henllan", "Ceredigion", "Horeb", "Lampeter", "Llanarth", "Llanbadarn Fawr", "Llanddeiniol", "Llandysul", "Llanfair Clydogau", "Llanfihangel y Creuddyn", "Llangorwen", "Llangranog", "Llangwyryfon", "Llangybi", "Ceredigion", "Llanilar", "Llanon", "Llanrhystud", "Llansantffraid", "Llanddewi Brefi", "Llanwenog", "Llanwnnen", "Llanybydder", "Llechryd", "Llwyncelyn", "Ceredigion", "Monachty", "Moriah", "Ceredigion", "Mwnt", "Mydroilyn", "Nanternis", "Newcastle Emlyn", "New Quay", "Oakford", "Pen-y-wenallt", "Penrhyn-coch", "Pentregat", "Penparc", "Penparcau", "Penuwch", "Pen-y-garn", "Pisgah", "Plwmp", "Pont rhyd y groes", "Pontrhydfendigaid", "Pontsian", "Post-bach", "Post-mawr", "Rhydfelin", "Rhydlewis", "Rhydowen", "Rhyd Rosser", "Rhydypennau", "Sarnau", "Silian", "Strata Florida", "Synod Inn", "Talgarreg", "Tal-y-bont", "Temple Bar", "Trawsgoed", "Trefenter", "Tregaron", "Tresaith", "Troed y Rhiw", "Velindre", "Wallog", "Ysbyty Ystwyth", "Ystrad Aeron", "Ystrad Ffin", "Ystrad Meurig", "Ystumtuen", "Abergele", "Betws-y-Coed", "Betws yn Rhos", "Bodelwyddan", "Capel Curig", "Capel Garmon", "Cefn Brith", "Cerrig-y-drudion", "Colwyn Bay", "Conwy", "Deganwy", "Dolgarrog", "Dolwyddelan", "Dwygyfylchi", "Eglwysbach", "Glan Conwy", "Glasfryn", "Gwytherin", "Kinmel Bay", "Llanbedr-y-Cennin", "Llanddoged", "Llanddulas", "Llandudno", "Llandudno Junction", "Llanfairfechan", "Llanfair Talhaiarn", "Llangernyw", "Llanrhychwyn", "Llanrwst", "Llysfaen", "Melin-y-Coed", "Mochdre", "Old Colwyn", "Pandy Tudur", "Penmachno", "Penmaenmawr", "Penrhyn Bay", "Pentrefoelas", "Rhos-on-Sea", "Rowen", "Tal-y-bont", "Tal-y-Cafn", "Trefriw", "Ty'n-y-Groes", "Towyn", "Ysbyty Ifan", "Aberwheeler", "Berwyn", "Denbighshire", "Betws Gwerfil Goch", "Bodelwyddan", "Bodfari", "Bontuchel", "Bryneglwys", "Bylchau", "Carrog", "Castell", "Denbighshire", "Cefnmeriadog", "Cerrigydrudion", "Clocaenog", "Corwen", "Crogen", "Cwm", "Denbighshire", "Cyffylliog", "Cynwyd", "Chirk", "Denbigh", "Derwyn", "Druid", "Denbighshire", "Dyserth", "Efenechtyd", "Garth", "Denbighshire", "Gellifor", "Gellioedd", "Glasfryn", "Glyndyfrdwy", "Gronant", "Gwaenysgor", "Gwyddelwern", "Henllan", "Hirwaen", "Llanarmon-yn-Iâl", "Llanbedr-Dyffryn-Clwyd", "Llandegla", "Llandrillo", "Llandyrnog", "Llannefydd", "Llanelidan", "Llanferres", "Llanfwrog", "Llangollen", "Llangwyfan", "Llangyhafal", "Llanrhaeadr-yng-Nghinmeirch", "Llanychan", "Llanynys", "Llwynmawr", "Maerdy", "Denbighshire", "Maeshafn", "Meliden", "Nantglyn", "Rhewl (on the River Clywedog)", "Rhewl (on the River Dee)", "Rhewl (near the Nant Mawr)", "Rhuallt", "Rhuddlan", "Rhyl", "Ruthin", "Saron", "St. Asaph", "Tafarn Y Gelyn", "Trefnant", "Trelawnyd", "Tremeirchion", "Afonwen", "Alltami", "Argoed", "Aston Park", "Babell", "Bagillt", "Bretton", "Broughton", "Bryn-y-Baal", "Brynford", "Buckley", "Cadole", "Caergwrle", "Caerwys", "Carmel", "Cefn-y-Bedd", "Cilcain", "Connah's Quay", "Deeside", "Downing", "Drury", "Ewloe", "Flint", "Ffrith", "Ffynnongroyw", "Glan-y-Don", "Glyncorrwg", "Greenfield", "Gronant", "Gwaenysgor", "Gwernaffield", "Gwernymynydd", "Halkyn", "Hawarden", "Higher Kinnerton", "Holywell", "Hope", "Leeswood", "Lixwm", "Llanasa", "Llanerch-y-Mor", "Llanfynydd", "Lloc", "Mancot", "Milwr", "Mold", "Mostyn", "Mynydd Isa", "Nannerch", "Nercwys", "New Brighton", "Flintshire", "Northop", "Northop Hall", "Oakenholt", "Pantasaph", "Pantymwyn", "Pentre Halkyn", "Penyffordd", "Pentre", "Queensferry", "Rhosesmor", "Rhydymwyn", "Sealand", "Shotton", "Sychdyn", "Saltney", "Saltney Ferry", "Sandycroft", "Talacre", "Trelawnyd", "Treuddyn", "Whelston", "Whitford", "Yr Wyddgrug", "Ysceifiog", "Aberangell", "Aberdaron", "Aberdesach", "Aberdyfi", "Abererch", "Abergwyngregyn", "Abergynolwyn", "Aberllefenni", "Abersoch", "Afon Wen", "Arthog", "Bala", "Bangor", "Barmouth", "Beddgelert", "Bethania", "Bethel", "Bethesda", "Betws Garmon", "Blaenau Ffestiniog", "Boduan", "Bontddu", "Bontnewydd", "Botwnnog", "Brithdir", "Bryncroes", "Bryn-crug", "Bwlch-derwin", "Bwlchtocyn", "Caeathro", "Caerhun", "Caernarfon", "Capel Curig", "Carmel", "Chwilog", "Clynnog Fawr", "Clwt-y-bont", "Corris Uchaf", "Corris", "Criccieth", "Croesor", "Cwm-y-glo", "Deiniolen", "Dinas Dinlle", "Dinas Mawddwy", "Dinas", "Dinorwig", "Dolgellau", "Dolmelinllyn", "Edern", "Efailnewydd", "Esgairgeiliog", "Fairbourne", "Friog", "Ganllwyd", "Garndolbenmaen", "Gellilydan", "Glasinfryn", "Groeslon", "Harlech", "Llanaber", "Llanaelhaearn", "Llanbedr", "Llandbedrgoch", "Llanbedrog", "Llanberis", "Llandanwg", "Llanegryn", "Llandegwning", "Llandeiniolen", "Llandwrog", "Llanelltyd", "Llanengan", "Llanfair Llanfihangel-y-pennant", "Abergynolwyn", "Llanfihangel-y-pennant", "Cwm Pennant", "Llanfrothen", "Llangwnnadl", "Llangybi", "Llaniestyn", "Llan Ffestiniog", "Llangian", "Llanllechid", "Llanymawddwy", "Llannor", "Llanrug", "Llanystumdwy", "Llithfaen", "Llwyndyrys", "Llwyngwril", "Mallwyd", "Maentwrog", "Minffordd", "Morfa Nefyn", "Mynydd Llandegai", "Mynytho", "Nantlle", "Nantmor", "Nasareth", "Nebo", "Nefyn", "Pant Glas", "Penffridd", "Penisa'r Waun", "Penmaenpool", "Pennal", "Penrhos", "Penrhosgarnedd Penrhyndeudraeth", "Pentre Gwynfryn", "Penygroes", "Pen-y-meinl", "Pistyll", "Pontllyfni", "Pontrug", "Porth Dinllaen", "Porthmadog", "Portmeirion", "Prenteg", "Pwllheli", "Rachub", "Rhiw", "Rhiwddolion", "Rhiwlas (in Llanddeiniolen community)", "Rhiwlas (in Llandderfel community)", "Rhosgadfan", "Rhostryfan", "Rhoshirwaun", "Rhoslefair", "Rhyd Ddu", "Rhyd-y-clafdy", "Rhos-y-gwaliau", "Sarn Meyllteyrn", "Tal-y-bont (near Bangor)", "Tal-y-bont (near Barmouth)", "Talysarn", "Trawsfynydd", "Trefor Tregarth", "Tremadog", "Tudweiliog", "Tywyn", "Talsarnau", "Uwchmynydd", "Waunfawr", "Y Felinheli", "Y Ffor", "Abergavenny", "Bedwellty", "Betws Newydd", "Black Rock", "Blaenawey", "Blaina", "Bryngwyn", "Buckholt", "Botany Bay", "Catbrook", "Caer Llan", "Caerwent", "Caldicot", "Chapel Hill", "Chepstow", "Clydach", "Coed Morgan", "Coed-y-paen", "Crick", "Croes y pant", "Croes Hywel", "Cross Ash", "Crossway", "Cwmcarvan", "Cwmyoy", "Devauden", "Dingestow", "Dixton", "Earlswood", "Gaerllwyd", "Gilwern", "Glascoed", "Goytre", "Govilon", "Great Oak", "Grosmont", "Gwehelog", "Gwernesney", "Highmoor Hill", "Hoaldalbert", "Itton", "Kemeys Commander", "Kilgwrrwg Common", "Kingcoed", "Little Mill", "Llamrei", "Llanarth", "Llanbadoc", "Llancayo", "Llanddewi Rhydderch", "Llandewi Skirrid", "Llandegveth", "Llandenny", "Llandevenny", "Llandogo", "Llanellen", "Llanelly", "Llanfair Kilgeddin", "Llanfihangel Rogiet", "Llanfoist", "Llangattock-Lingoed", "Llangattock-Vibon-Avel", "Llangovan", "Llangua", "Llangwm-isaf", "Llangybi", "Llanhennock", "Llanishen", "Llanllowell", "Llanover", "Llansoy", "Llanthony", "Llantilio Crossenny", "Llantilio Pertholey", "Llantrisant", "Llanvair-Discoed", "Llanvapley", "Llanvetherine", "Llanwenarth", "Llanvihangel-Ystern-Llewern", "Llanvihangel Crucorney", "Llanvihangel Gobion", "Magor", "Mamhilad", "Maindee", "Mardy", "Maryland", "Mathern", "Maypole", "Mitchel Troy", "Mitcheltroy Common", "Monkswood", "Monmouth", "Mounton", "Mynydd-bach", "Mynyddislwyn", "Nant-y-derry", "New Inn", "New Mills", "Newbridge-on-Usk", "Newcastle", "Newchurch", "Oldcastle", "Pandy", "Panteg", "Parkhouse", "Pen-croes-oped", "Pen-how", "Pen-yr-hoel", "Pen-y-cae-mawr", "Pen-y-clawdd", "Pen-twyn", "Penallt", "Penperlleni", "Penrhos", "Portskewett", "Pwllmeyric", "Raglan", "Redwick", "Rockfield", "Rogiet", "Shirenewton", "Skenfrith", "St Arvans", "St Brides Netherwent", "St. Maughans", "St. Woolas", "Sudbrook Rumney", "The Bryn", "Tintern", "Tredunnock", "Tregagle", "Tregare", "Trelleck Grange", "Trelleck", "Twyn-y-Sheriff", "The Narth", "Undy", "Upper Green", "Usk", "Wernyrheolydd", "Whitebrook", "Whitson", "Wilcrick", "Wolvesnewton", "Wonastow", "Wyesham", "Abercych", "Abereiddy", "Abercastle", "Albert Town(r)", "Ambleston", "Amroth", "Angle", "Axton Hill(r)", "Bateman's Hill(r)", "Bayvil", "Begelly", "Bentlass", "Bethlehem(r)", "Blackpool", "Blaenffos", "Boncath", "Bosherston", "Boulston", "Brawdy", "Bridell", "Brimaston(r)", "Brithdir Mawr", "Broadfield", "Broad Haven", "Broadmoor(r)", "Broadway(r)", "Broom(r)", "Brynberian", "Brynhenllan", "Burton", "Bwlchygroes", "Caerfarchell", "Caldey Island", "Camp Hill", "Camrose", "Canaston Bridge", "Capel Colman", "Carew", "Carew Cheriton", "Carew Newton(r)", "Carnhedryn", "Carreg-wen", "Castellan", "Castlebythe", "Castlemartin", "Castlemorris", "Churchton", "Cilgerran", "Cilgwyn(r)", "Cilrhedyn", "Clarbeston", "Clarbeston Road(r)", "Clunderwen", "Clydau", "Coedcanlas", "Cold Blow", "Cold Inn", "Cosheston", "Coxlake(r)", "Cresselly(r)", "Cresswell Quay(r)", "Crinow", "Croes-goch", "Cross Hands(r)", "Crosswell", "Crymych", "Crundale", "Crunwere", "Cuffern(r)", "Cwmcych", "Cwm yr Eglwys", "Cippyn(r)", "Dale", "Dinas Cross", "Dreenhill(r)", "Druidston(r)", "East Williamston", "Eglwyswen", "Eglwyswrw", "Fachelich", "Felindre Farchog", "Fishguard", "Flimston(r)", "Ford(r)", "Foxhall", "Freystrop", "Freshwater East", "Freshwater West", "Gelli", "Glandwr", "Glanrhyd(r)", "Glogue", "Goodwick", "Granston", "Greenway", "Gumfreston", "Gwastad(r)", "Hakin", "Haroldston St. Issell's", "Haroldston West", "Hasguard", "Haverfordwest", "Hayscastle", "Hazelbeach(r)", "Henry's Moat", "Herbrandston", "Hermon", "Hill Mountain", "Hodgeston", "Hook", "Houghton", "Hubberston", "Hundleton", "Jameston", "Jeffreyston", "Johnston", "Jordanston (Llanstadwell Community)(r)", "Jordanston (parish)", "Keeston(r)", "Kilgetty", "Kingheriot", "Lambston(r)", "Lammas Ecovillage", "Lampeter Velfrey", "Lamphey", "Lawrenny", "Leonardston", "Letterston", "Liddeston", "Little Haven", "Little Hasguard(r)", "Little Honeyborough(r)", "Little Newcastle", "Little Milford", "Llanddewi Velfrey", "Llandeilo Llwydarth", "Llandeloy", "Llandissilio", "Llandruidion", "Llanfair-Nant-Gwyn", "Llanfair-Nant-y-Gôf", "Llanfihangel Penbedw", "Llanfyrnach", "Llangloffan(r)", "Llangolman", "Llangwm", "Llanhowell(r)", "Llanion", "Llanllawer", "Llanreath", "Llanreithan", "Llanrhian", "Llanstadwell", "Llanstinan", "Llanteg", "Llantood", "Llanungar", "Llanwnda", "Llanycefn(r)", "Llanychaer", "Llanychlwydog", "Llawhaden", "Llys y Fran", "Loveston(r)", "Ludchurch", "Lydstep(r)", "Lydstep Haven", "Maenclochog", "Maiden Wells", "Manorbier", "Manorbier Newton", "Manordeifi", "Manorowen", "Marloes", "Martletwy", "Mascle Bridge(r)", "Mathry", "Meline", "Merlin's Bridge", "Middle Mill", "Milford Haven", "Millin Cross", "Milton(r)", "Minwear", "Molleston", "Monington", "Monkton", "Morvil", "Mounton", "Moylgrove", "Mynachlog-ddu", "Narberth", "Nash", "Newchapel", "Nevern", "New Hedges", "New Moat", "Newgale", "Newport", "Newton North(r)", "Newton Mountain", "Neyland", "Nine Wells", "Nolton(r)", "Nolton Haven", "Panteg", "Paran", "Pembroke", "Pembroke Dock", "Pembroke Ferry", "Penally", "Penffordd", "Pennar", "Penparc", "Penrydd", "Pentlepoir", "Pentre Galar", "Pen-y-Bryn(r)", "Penycwm", "Penygroes", "Pleasant Valley", "Pontfaen", "Pontrhydyceirt", "Pontyglasier", "Port Lion", "Porthclais", "Portheiddy", "Porthgain", "Poyston Cross(r)", "Prendergast", "Puncheston", "Pwllcrochan", "Pwllgwaelod", "Ramsey Island", "Redberth", "Reynalton", "Rhoscrowther", "Rhoshill", "Rhosson", "Rhosycaerau", "Robeston Wathen", "Robeston West", "Roch(r)", "Rogeston", "Rosebush", "Rosemarket", "Rudbaxton", "Sageston(r)", "Sandy Haven", "Saundersfoot", "Sardis (Saundersfoot community)", "Sardis (Burton community)", "Scleddau", "Simpson Cross", "Slebech", "Solva", "South Dairy", "Spittal", "Square And Compass", "St Brides", "St David's", "St Dogmaels", "St Dogwells", "St Edrins", "St Elvis", "St Florence", "St Ishmael's", "St Issells(r)", "St Nicholas", "St Petrox", "St Twynnells", "Stackpole(r)", "Stackpole Estate", "Star", "Stepaside", "Steynton", "Summerhill", "Talbenny", "Tavernspite", "Tegryn", "Templeton", "Tenby", "Thomas Chapel", "Thornton", "Tiers Cross", "Trecadwgan", "Trecwn", "Trefasser", "Treffgarne", "Treffgarn Owen", "Treffynnon", "Trefin", "Tremaenhir", "Tremarchog", "Troopers Inn", "Tufton", "Upton", "Uzmaston", "Vorlan", "Wallis(r)", "Walton East", "Walton West", "Walwyn's Castle", "Warren", "Waterston", "West Williamston(r)", "Whitchurch", "Whitehill(r)", "Whitechurch", "Wisemans Bridge", "Wiston", "Withybush(r)", "Wood", "Wooden", "Woodstock", "Wind Mill Hill", "Wolf's Castle", "Wolfsdale(r)", "Yerbeston(r)", "Abercynafon", "Aberhafesp", "Aberhosan", "Aberllynfi", "Adfa", "Berriew (Aberriw)", "Bettws Cedewain (Betws Cedewain)", "Bont Dolgadfan", "Boughrood (Bochrwd)", "Brecon (Aberhonddu)", "Builth Wells (Llanfair ym Muallt)", "Bwlch", "Caersws", "Capel-y-ffin", "Carno", "Cefn Coch", "Cilmeri", "City", "Clyro", "Commins Coch", "Crickhowell", "Crossgates", "Cwmdu", "Dolfach", "Dylife", "Elan Village", "Erwood", "Esgairgeiliog", "Four Crosses", "Llanfair Caereinion", "Four Crosses near Oswestry", "Fron", "Llandrindod Wells", "Fron", "Montgomery", "Fron", "Welshpool", "Garth", "Glasbury", "Glyntawe", "Guilsfield", "Hay-on-Wye", "Howey", "Hyssington", "Honddu Isaf", "Kerry", "Knighton", "Little London", "Llan", "Llanbrynmair", "Llandinam", "Llandrindod Wells", "Llandyssil", "Llanfair Caereinion", "Llanfechain", "Llanfyllin", "Llangammarch Wells", "Llangurig", "Llanidloes", "Llanigon", "Llanrhaeadr-ym-Mochnant", "Llansantffraid-ym-Mechain", "Llanwrtyd Wells", "Llanymynech", "Llowes", "Llyswen", "Machynlleth", "Manafon", "Middletown", "Milford", "Montgomery", "Newbridge-on-Wye (Pontnewydd ar Wy)", "New Mills", "Powys.", "New Radnor", "Newtown (Y Drenewydd)", "Old Radnor", "Pandy", "Penegoes", "Pennant Melangell", "Penpont", "Penstrowed", "Penybont", "Pipton", "Pontdolgoch", "Presteigne (Llandandras)", "Rhayader", "Sarn", "Sennybridge", "Staylittle", "Talerddig", "Talgarth", "Talybont-on-Usk", "Tirabad", "Trecastle", "Trefeglwys", "Abernant", "Aberaman", "Abercwmboi", "Abercynon", "Aberdare", "Beddau", "Blaenllechau", "Blaencwm", "Blaenclydach", "Blaenrhondda", "Brynna", "Church Village", "Clydach Vale", "Carnetown", "Cwmaman", "Cwmbach", "Cwmdare", "Cwmparc", "Cwmpennar", "Cefnpennar", "Caegarw", "Cefn Rhigos", "Cwm-Hwnt", "Dinas Rhondda", "Efail Isaf", "Ferndale", "Fernhill", "Glyncoch", "Gelli", "Groesfaen", "Gilfach Goch", "Glenboi", "Glyntaff", "Hirwaun", "Llanharan", "Llanharry", "Llantrisant", "Llantwit Fardre", "Llwydcoed", "Llwynypia", "Llanwynno", "Maerdy", "Miskin", "Mountain Ash", "Penderyn", "Penrhiwceiber", "Perthcelyn", "Penrhiwfer", "Penrhys", "Pentre", "Penygraig", "Pen-y-waun", "Pontyclun", "Pontygwaith", "Pontypridd", "Porth", "Pontcynon", "Rhigos", "Stanleytown", "Talbot Green", "Trealaw", "Trebanog", "Trecynon", "Trehafod", "Treherbert", "Treorchy", "Tonypandy", "Tynewydd", "Tonyrefail", "Tonteg", "Ton Pentre", "Tylorstown", "Taffs Well", "Treforest", "Upper Boat", "Williamstown", "Wattstown", "Ynysybwl", "Ynyshir", "Ystrad", "Killay", "Kingsbridge", "Kittle", "Knelston", "Landore", "Landimore", "Langland", "Leason", "Llandewi", "Llangennith", "Llangyfelach", "Llanmadoc", "Llanmorlais", "Llanrhidian", "Llansamlet", "Llethryd", "Llewitha", "Loughor", "Manselton", "Maritime Quarter", "Mawr", "Mayals", "Mayhill", "Middleton", "Morfa", "Morriston", "Mount Pleasant", "Mumbles", "Murton", "Mynydd-Bach", "Mynydd Bach Y Glo", "Newton", "Nicholaston", "Norton", "North Hill", "Olchfa", "Oldwalls", "Overton", "Oystermouth", "Oxwich", "Oxwich Green", "Pantlasau", "Parkmill", "Penclawdd", "Peniel Green", "Penlan", "Peniel Green", "Penllergaer", "Penmaen", "Pennard", "Penrice", "Pentrebach", "Pentrechwyth", "Pentre-Dwr", "Pentrepoeth", "Penyrheol", "Pitton", "Pitton Green", "Plasmarl", "Pontarddulais", "Pontlliw", "Port Eynon", "Portmead", "Port Tennant", "Poundffald", "Aberthaw", "Aberthin", "Bonvilston", "Barry", "Barry Island", "Boverton", "Broughton", "Cadoxton", "City", "Clawdd Coch", "Cogan", "Colwinston", "Corntown", "Cowbridge", "Dinas Powys", "Dowlais", "Drope", "Duffryn/Dyffryn", "Ewenny", "Eglwys Brewis", "Flemingston", "Fontegary", "Gileston", "Gwern-y-Steeple", "Graig Penllyn", "Hensol Castle", "Lavernock", "Llampha", "Llanbethery", "Llanblethian", "Llancadle", "Llancarfan", "Llandough", "Llandow", "Llangan", "Llanmaes", "Llanmihangel", "Llansannor", "Llantrithyd", "Llantwit Major", "Llysworney", "Marcross", "Michaelston-le-Pit", "Monknash", "Moulton", "Ogmore", "Ogmore-by-Sea", "Penarth", "Pendoylan", "Penllyn", "Penmark", "Peterston-super-Ely", "Porthkerry", "Rhoose", "St Andrew's Major", "St Athan", "St Brides Major", "St Donats", "St Hilary", "St Lythans", "St Mary Church", "St Nicholas", "Sigingstone", "Southerndown", "Sully", "Talygarn", "Tredodridge", "Treguff", "Treoes", "Walterston", "Welsh St Donats", "Wenvoe", "Wick", "Ystradowen", "Abenbury", "Aberoer", "Acrefair", "Acton Park", "Bangor-on-Dee", "Bronington", "Brymbo", "Burton", "Bwlchgwyn", "Borras", "Bersham", "Bradley", "Bryn Offa", "Brynteg", "Caia Park", "Cefn Mawr", "Chirk", "Coedpoeth", "Cross Lanes", "Erddig", "Erbistock", "Froncysyllte", "Gresford", "Garden Village", "Gwersyllt", "Gwynfryn", "Hanmer", "Holt", "Horseman's Green", "Hightown", "Johnstown", "Llay", "Llanarmon Dyffryn Ceiriog", "Marchwiel", "Marford", "Minera", "Moss Valley", "Overton-on-Dee", "Penley", "Pentre Broughton", "Pentre Bychan", "Pentre Maelor", "Ponciau", "Penycae", "Queens Park", "Rhosddu", "Rhosllanerchrugog", "Rhosrobin", "Rhostyllen", "Rossett", "Ruabon", "Stansty", "Summerhill", "Southsea", "Sydallt", "Trevor", "Tybroughton", "Whitewell", "Worthenbury", "Wrexham", "See also"
];

const NameGenerator = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * names.length))

  const newQuote = () => {
    let newIndex = Math.floor(Math.random() * names.length);
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * names.length);
    }
    setIndex(newIndex)
  }


  return (
    <div id="quote-box">
      <header id="author">
        <h1>DnD Name Generator</h1>
      </header>
      <p id="text">Your new name is: {names[index]}</p>
      <div id="buttons">
        {/* <div>
          <a
            id="tweet-quote"
            rel="noopener noreferrer"
            target="_blank"
            href={`http://twitter.com/intent/tweet?text=${quotes[this.state.quoteIndex]
              }`}
          >
            Tweet This
            </a>
        </div> */}
        <button type="button" id="new-quote" onClick={newQuote}>
          New Name
          </button>
      </div>
    </div>
  );
}

export default NameGenerator;