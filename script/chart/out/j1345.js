var bubu ={ s64:"64.75",s65:"476.77",s11:"11.73",s12:"13.84",s13:"151.59",s14:"34.32",s15:"141.77",s21:"91.67",s22:"67.53",s23:"214.75",s31:"16.21",s32:"268.51",s33:"100.22",s34:"120.56",s35:"100.94",s36:"151.35",s37:"159.71",s41:"120.07",s42:"132.65",s43:"193.89",s44:"224.84",s45:"208.39",s46:"35.84",s50:"18.75",s51:"118.71",s52:"48.72",s53:"105.95",s54:"33.43",s61:"55.51",s62:"96.05",s63:"20.47" };
var title = "2007年各省供用农业用水";
var unit = "亿立方米";
function getColor(d) {
    return d > 250 ? '#800026' :
           d > 200  ? '#BD0026' :
           d > 150  ? '#E31A1C' :
           d > 130  ? '#FC4E2A' :
           d > 100   ? '#FD8D3C' :
           d > 80  ? '#FEB24C' :
           d > 50   ? '#FED976' :
           d > 10   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [10, 50, 80, 100, 130, 150, 200, 250];