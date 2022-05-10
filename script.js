function alterarBorda() {
    
    let valor1 = document.getElementById("ip1").value;
    let valor2 = document.getElementById("ip2").value;
    let valor3 = document.getElementById("ip3").value;
    let valor4 = document.getElementById("ip4").value;
    
    verificandoEAlterando(valor1, valor2, valor3, valor4);
    
}

function verificandoEAlterando(v1, v2, v3, v4){

    if(isNaN(v1)){
        alert("Utilize números inteiros!");
        document.getElementById("ip1").value = "";
        document.getElementById("ip5").value = "";
    }else if(isNaN(v2)){
        alert("Utilize números inteiros!");
        document.getElementById("ip2").value = "";
        document.getElementById("ip5").value = "";
    }else if(isNaN(v3)){
        alert("Utilize números inteiros!");
        document.getElementById("ip3").value = "";
        document.getElementById("ip5").value = "";
    }else if(isNaN(v4)){
        alert("Utilize números inteiros!");
        document.getElementById("ip4").value = "";
        document.getElementById("ip5").value = "";
    }else{
        editandoBordas(v1,v2,v3,v4);
    }
}

function editandoBordas(v1, v2, v3, v4){
    
    if(!v1 && !v2 && !v3 && !v4){
        alert("Preencha os campos abaixo para alterar a forma do retângulo!")
        document.getElementById("ip5").value = "";
    }else if(v1 && v2 && !v3 && !v4){
        document.getElementById("dv1").style.borderTopLeftRadius = v1 + "px ";
        document.getElementById("dv1").style.borderTopRightRadius = v2 + "px";
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-top-right-radius ${v2}px;`;
    }else if(v1 && !v2 && !v3 && !v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px;`;
    }else if(!v1 && v2 && !v3 && !v4){
        document.getElementById("dv1").style.borderTopRightRadius = `${v2}px`;
        document.getElementById("ip5").value = `border-top-right-radius: ${v2}px;`;
    }else if(!v1 && !v2 && v3 && !v4){
        document.getElementById("dv1").style.borderBottomRightRadius = `${v3}px`;
        document.getElementById("ip5").value = `border-bottom-right-radius: ${v3}px;`;
    }else if(!v1 && !v2 && !v3 && v4){
        document.getElementById("dv1").style.borderBottomLeftRadius = `${v4}px`;
        document.getElementById("ip5").value = `border-bottom-left-radius: ${v4}px;`;
    }else if(v1 && v2 && v3 && v4){
        if(v1===v2 && v1===v3 && v1===v4){
            document.getElementById("dv1").style.borderRadius = `${v1}px`;
            document.getElementById("ip5").value = `border-radius: ${v1}px;`;    
        }else if(v1 === v3 && v2 === v4){
            document.getElementById("dv1").style.borderRadius = `${v1}px ${v2}px`;
            document.getElementById("ip5").value = `border-radius: ${v1}px ${v2}px;`
        }else{
            document.getElementById("dv1").style.borderRadius = `${v1}px ${v2}px ${v3}px ${v4}px`;
            document.getElementById("ip5").value = `border-radius: ${v1}px ${v2}px ${v3}px ${v4}px;`;
        }
    }else if(v1 && v2 && v3 && !v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("dv1").style.borderTopRightRadius = `${v2}px`;
        document.getElementById("dv1").style.borderBottomRightRadius = `${v3}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-top-right-radius: ${v2}px; border-bottom-right-radius: ${v3}px;`;
    }else if(v1 && v2 && !v3 && v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("dv1").style.borderTopRightRadius = `${v2}px`;
        document.getElementById("dv1").style.borderBottomLeftRadius = `${v4}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-top-right-radius: ${v2}px; border-bottom-left-radius: ${v4}px;`;
    }else if(v1 && !v2 && v3 && v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("dv1").style.borderBottomRightRadius = `${v3}px`;
        document.getElementById("dv1").style.borderBottomLeftRadius = `${v4}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-bottom-right-radius: ${v3}px; border-bottom-left-radius: ${v4}px;`;
    }else if(!v1 && v2 && v3 && !v4){
        document.getElementById("dv1").style.borderTopRightRadius = `${v2}px`;
        document.getElementById("dv1").style.borderBottomRightRadius = `${v3}px`;
        document.getElementById("ip5").value = `border-top-right-radius: ${v2}px; border-bottom-right-radius: ${v3}px;`;    
    }else if(v1 && !v2 && !v3 && v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("dv1").style.borderBottomLeftRadius = `${v4}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-bottom-left-radius: ${v4}px;`;
    }else if(v1 && !v2 && v3 && !v4){
        document.getElementById("dv1").style.borderTopLeftRadius = `${v1}px`;
        document.getElementById("dv1").style.borderBottomRightRadius = `${v3}px`;
        document.getElementById("ip5").value = `border-top-left-radius: ${v1}px; border-bottom-right-radius: ${v3}px;`;
    }else if(!v1 && v2 && !v3 && v4){
        document.getElementById("dv1").style.borderTopRightRadius = `${v2}px`;
        document.getElementById("dv1").style.borderBottomLeftRadius = `${v4}px`;
        document.getElementById("ip5").value = `border-top-right-radius: ${v2}px; border-bottom-left-radius: ${v4}px;`;
    }
    
}

function copiarCss() {
    var copiarTexto = document.getElementById("ip5");

    copiarTexto.select();

    copiarTexto.setSelectionRange(0, 99999); //para dispositivos móveis

    navigator.clipboard.writeText(copiarTexto.value);
    
    alert("Texto copiado: " + copiarTexto.value);

        document.getElementById("ip1").value = "";
        document.getElementById("ip2").value = "";
        document.getElementById("ip3").value = "";
        document.getElementById("ip4").value = "";
}

function resetarRetangulo(){
    document.getElementById("dv1").style.borderRadius = "0px";
}