var bubu ={ s64:"0",s65:"0.8",s11:"4.95",s12:"0.1",s13:"0.52",s14:"0",s15:"0.99",s21:"2.4",s22:"0",s23:"0",s31:"0",s32:"0",s33:"0.47",s34:"0.48",s35:"0.82",s36:"0",s37:"1.98",s41:"0.39",s42:"0.89",s43:"0.71",s44:"0.73",s45:"2.99",s46:"0",s50:"0.03",s51:"1.37",s52:"0.48",s53:"1.95",s54:"0",s61:"0.82",s62:"1.82",s63:"0" };
var title = "2007年各省供用其他情况";
var unit = "亿立方米";
function getColor(d) {
    return d > 3 ? '#800026' :
           d > 2.5  ? '#BD0026' :
           d > 2  ? '#E31A1C' :
           d > 1.5  ? '#FC4E2A' :
           d > 1   ? '#FD8D3C' :
           d > 0.8  ? '#FEB24C' :
           d > 0.5   ? '#FED976' :
           d > 0   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [0, 0.5, 0.8, 1, 1.5, 2, 2.5, 3];