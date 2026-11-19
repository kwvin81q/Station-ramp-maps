const stations = [
  ['MEM','KMEM','Memphis','spot','Airport operations manual · FAA ATCT Spots attachment','https://flymemphis.com/wp-content/uploads/2025/08/ACM-2025-Signed-complete.pdf'],
  ['IND','KIND','Indianapolis','planning','Airport Authority board packet · FedEx lease site plan','https://d1j6zi7czwjuok.cloudfront.net/iaa-images/board-papers/2023-September-Board-Packet-WEBSITE.pdf?mtime=20230912155531'],
  ['MIA','KMIA','Miami','planning','Miami-Dade County · cargo parcels aerial site plan','https://www.miamidade.gov/govaction/legistarfiles/Matters/Y2022/220408.pdf'],
  ['AFW','KAFW','Fort Worth Alliance','planning','AllianceTexas development map · FedEx regional sort hub','https://www.alliancetexas.com/Portals/0/alliance-center.pdf?ver=2019-06-18-124209-913'],
  ['EWR','KEWR','Newark Liberty','planning','Port Authority technical report · FedEx project area','https://www.panynj.gov/content/dam/port-authority/about/studies-and-reports-pdfs/newark-airport-terminal-A-redevelopment-program.pdf'],
  ['OAK','KOAK','Oakland','planning','Aviation forecast · OAK Cargo Areas aerial map','https://files.ceqanet.lci.ca.gov/269827-2/attachment/KJvltFiS5qhS_Hxk-6EzdpMY1UnuZ84izWPNMzENEDNM86mVNzF-O1GxzWcVSwyPNabdhXIj5cHNwub00'],
  ['ORD','KORD','Chicago O’Hare','surface','Chicago Department of Aviation · Southwest Cargo airfield guide','https://badging.flychicago.com/SiteCollectionDocuments/ord/Advanced%20Airfield%20Familiarization%20-%20JAN%202024%20-%20FINAL.pdf'],
  ['LAX','KLAX','Los Angeles','surface','Los Angeles World Airports · airport surface map','https://www.lawa.org/sites/lawa/files/2026-02/ASM%202026.02.pdf']
];

// Published tower entries from the FAA airport data displayed by AirNav.
const towerData = {
  MEM: [['118.3','RWY 09/27'],['119.7','RWYs 18L/36R, 18C/36C'],['128.425','RWY 18R/36L'],['257.8','UHF']],
  IND: [['120.9','VHF'],['251.1','UHF']],
  MIA: [['118.3','Sector 270°–089°'],['123.9','Sector 090°–269°'],['256.9','UHF']],
  AFW: [['135.15','VHF'],['120.825','Helicopters'],['257.9','UHF']],
  EWR: [['118.3','VHF'],['134.05','Additional VHF'],['257.6','UHF']],
  OAK: [['118.3','RWYs 10L/28R, 10R/28L, 15/33'],['127.2','RWY 12/30'],['124.9','Additional VHF'],['291.65','UHF · RWYs 10L/28R, 10R/28L, 15/33'],['256.9','UHF · RWY 12/30']],
  ORD: [['120.75','RWYs 04R/22L, 10C/28C'],['121.15','RWY 09C/27C'],['126.9','RWYs 09R/27L, 22R'],['128.15','RWY 09L/27R'],['132.7','RWY 10L/28R'],['133.0','RWY 10R/28L'],['348.0','UHF']],
  LAX: [['120.95','South complex'],['133.9','North complex'],['119.8','Helicopters'],['379.1','UHF · South complex'],['239.3','UHF · North complex and helicopters']]
};
