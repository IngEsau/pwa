const params = new URLSearchParams(window.location.search);
const n = params.get('n')
const d = params.get('d')


class Quickchart {
    constructor(d){
        this.d = d;
    }
    crearCadunos(){        
        let cadunos = Array(Number(this.d)).fill("1").join(", ");
        return cadunos;
    }
    generarSrcImg(){        
        let etiquetas = [];
        for(let i=0; i<this.d; i++){
            etiquetas.push(i < n ? `1/${this.d}` : "");
        }
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos()
                    + "&chs=500x250&chl=" + etiquetas.join("|");
        return url;
    }
}

const q = new Quickchart(d)
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';

var lienzo = document.getElementById("lienzo");
var cd = lienzo.getContext("2d");

function exhibirLineas(){
    var x = 0;
    while (x < 400){
        cd.moveTo(x,0);
        cd.lineTo(400,300-x);
        cd.stroke();
        x = x + 10;
    }
}
