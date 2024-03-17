
function I2(){
    if(document.getElementById("Quiz1Input1").value == "3A"){
        document.getElementById("Quiz1Input1").style.color = "#00b922"
    }else if (document.getElementById("Quiz1Input1").value != null){
        document.getElementById("Quiz1Input1").style.color = "red"
    }
}
function I3(){
    if(document.getElementById("Quiz1Input2").value == "3A"){
        document.getElementById("Quiz1Input2").style.color = "#00b922"
    }else if (ocument.getElementById("Quiz1Input2").value != null){
        document.getElementById("Quiz1Input2").style.color = "red"
    }
}
function V2(){
    if(document.getElementById("Quiz1Input3").value == "230V"){
        document.getElementById("Quiz1Input3").style.color = "#00b922"
    }else if (ocument.getElementById("Quiz1Input3").value != null){
        document.getElementById("Quiz1Input3").style.color = "red"
    }
}


function Spannung1(){
    if (document.getElementById("Quiz-Spannung-1").value == "80 Volt"){
        document.getElementById("Quiz-Spannung-1").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Spannung-1").value != null){
        document.getElementById("Quiz-Spannung-1").style.color = "red" 
    }
}
function Spannung2(){
    if (document.getElementById("Quiz-Spannung-2").value == "5 Volt"){
        document.getElementById("Quiz-Spannung-2").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Spannung-2").value != null){
        document.getElementById("Quiz-Spannung-2").style.color = "red" 
    }
}

function Stromstärke1(){
    if (document.getElementById("Quiz-Stromstärke-1").value == "1,7 Ampere"){
        document.getElementById("Quiz-Stromstärke-1").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Stromstärke-1").value != null){
        document.getElementById("Quiz-Stromstärke-1").style.color = "red" 
    }
}


function Wiederstand1(){
    if (document.getElementById("Quiz-Wiederstand-1").value == "120 Ohm"){
        document.getElementById("Quiz-Wiederstand-1").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Wiederstand-1").value != null){
        document.getElementById("Quiz-Wiederstand-1").style.color = "red" 
    }
}
function Wiederstand2(){
    if (document.getElementById("Quiz-Wiederstand-2").value == "1,7 Ohm"){
        document.getElementById("Quiz-Wiederstand-2").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Wiederstand-2").value != null){
        document.getElementById("Quiz-Wiederstand-2").style.color = "red" 
    }
}
function Wiederstand3(){
    if (document.getElementById("Quiz-Wiederstand-3").value == "1,8 Ohm"){
        document.getElementById("Quiz-Wiederstand-3").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Wiederstand-3").value != null){
        document.getElementById("Quiz-Wiederstand-3").style.color = "red" 
    }
}


function Leistung1(){
    if (document.getElementById("Quiz-Leistung-1").value == "400 Watt"){
        document.getElementById("Quiz-Leistung-1").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Leistung-1").value != null){
        document.getElementById("Quiz-Leistung-1").style.color = "red" 
    }
}
function Leistung2(){
    if (document.getElementById("Quiz-Leistung-2").value == "1,2 Watt"){
        document.getElementById("Quiz-Leistung-2").style.color = "#00b922" 
    }else if (document.getElementById("Quiz-Leistung-2").value != null){
        document.getElementById("Quiz-Leistung-2").style.color = "red" 
    }
}




var UndBtnA = false
var UndBtnB = false
function UndGatterInputA(){
    if (UndBtnA === false){
        UndBtnA = true
        if (UndBtnA === true && UndBtnB === false){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }else if (UndBtnA === true && UndBtnB === true){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/aktiviert/Und-Gatter.png" alt="">`
        }
    }else{
        UndBtnA = false
        if (UndBtnB === false){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }else if (UndBtnB === true){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }
    }
    
}
function UndGatterInputB(){
    if (UndBtnB === false){
        UndBtnB = true
        if (UndBtnB === true && UndBtnA === false){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }else if (UndBtnB === true && UndBtnA === true){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/aktiviert/Und-Gatter.png" alt="">`
        }
    }else{
        UndBtnB = false
        if (UndBtnA === false){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }else if (UndBtnA === true){
            document.getElementById("Und-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="UndGatterInputA()" class="Knopf" id="UndGatterInputBtnA"><p>⚡</p></div>
            <div onclick="UndGatterInputB()" class="Knopf" id="UndGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="Und-Gatter" src="Graphiken/Gatter/nicht aktiviert/Und-Gatter.png" alt="">`
        }
    }
}












var OderBtnA = false
var OderBtnB = false
function OderGatterInputA(){
    if (OderBtnA === false){
        OderBtnA = true
        if (OderBtnA === true && OderBtnB === false){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }else if (OderBtnA === true && OderBtnB === true){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }
    }else{
        OderBtnA = false
        if (OderBtnA === false && OderBtnB === true){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }else if (OderBtnA === false && OderBtnB === false){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/nicht aktiviert/Oder-Gatter.png" alt="">`
        }
    }
    
}
function OderGatterInputB(){
    if (OderBtnB === false){
        OderBtnB = true
        if (OderBtnB === true && OderBtnA === false){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }else if (OderBtnB === true && OderBtnA === true){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }
    }else{
        OderBtnB = false
        if (OderBtnB === false && OderBtnA === true){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/aktiviert/Oder-Gatter.png" alt="">`
        }else if (OderBtnB === false && OderBtnA === false){
            document.getElementById("Oder-Gatter").innerHTML = `
                <div class="Knöpfe" style="translate: 20px;">
                <div onclick="OderGatterInputA()" class="Knopf" id="OderGatterInputBtnA"><p>⚡</p></div>
                <div onclick="OderGatterInputB()" class="Knopf" id="OderGatterInputBtnB"><p>⚡</p></div>
                </div>
                <div class="Inputs" style="translate: 25px;">
                <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
                </div>
                <img class="Oder-Gatter" src="Graphiken/Gatter/nicht aktiviert/Oder-Gatter.png" alt="">`
        }
    }
    
}











var NotBtn = false
document.getElementById("Not-Gatter").innerHTML = `<div class="Knöpfe"><div onclick="NotGatterInputA()" class="Knopf" id="NotGatterInputBtnA"><p>⚡</p></div></div><div class="Inputs"><img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt=""></div><img class="Not-Gatter" src="Graphiken/Gatter/aktiviert/Not-Gatter.png" alt="">`
function NotGatterInputA(){
    if (NotBtn === false){
        NotBtn = true
        document.getElementById("Not-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="NotGatterInputA()" class="Knopf" id="NotGatterInputBtnA"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="Not-Gatter" src="Graphiken/Gatter/aktiviert/Not-Gatter.png" alt="">`
    }else{
        NotBtn = false
        document.getElementById("Not-Gatter").innerHTML = `
            <div class="Knöpfe">
            <div onclick="NotGatterInputA()" class="Knopf" id="NotGatterInputBtnA"><p>⚡</p></div>
            </div>
            <div class="Inputs">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="Not-Gatter" src="Graphiken/Gatter/nicht aktiviert/Not-Gatter.png" alt="">`
    }
}





var XOderBtnA = false
var XOderBtnB = false
function XOderGatterInputA(){
    if (XOderBtnA === false){
        XOderBtnA = true
        if (XOderBtnA === true && XOderBtnB === false){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/aktiviert/XOder-Gatter.png" alt="">
            `
        }else if (XOderBtnA === true && XOderBtnB === true){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/nicht aktiviert/XOder-Gatter.png" alt="">
            `
        }
    }else if(XOderBtnA === true){
        XOderBtnA = false
        if (XOderBtnA === false && XOderBtnB === true){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/aktiviert/XOder-Gatter.png" alt="">
            `
        }else if (XOderBtnA === false && XOderBtnB === false){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/nicht aktiviert/XOder-Gatter.png" alt="">
            `
        }
    }
}
function XOderGatterInputB(){
    if (XOderBtnB === false){
        XOderBtnB = true
        if (XOderBtnB === true && XOderBtnA === false){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/aktiviert/XOder-Gatter.png" alt="">
            `
        }else if (XOderBtnB === true && XOderBtnA === true){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/nicht aktiviert/XOder-Gatter.png" alt="">
            `
        }
    }else if(XOderBtnB === true){
        XOderBtnB = false
        if (XOderBtnB === false && XOderBtnA === true){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/aktiviert/Input-Gatter.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/aktiviert/XOder-Gatter.png" alt="">
            `
        }else if (XOderBtnB === false && XOderBtnA === false){
            document.getElementById("XOder-Gatter").innerHTML = `
            <div class="Knöpfe" style="translate: 30px;">
            <div onclick="XOderGatterInputA()" class="Knopf" id="XOderGatterInputBtnA"><p>⚡</p></div>
            <div onclick="XOderGatterInputB()" class="Knopf" id="XOderGatterInputBtnB"><p>⚡</p></div>
            </div>
            <div class="Inputs" style="translate: 35px;">
            <img class="Input1" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            <img class="Input2" src="Graphiken/Gatter/nicht aktiviert/Input.png" alt="">
            </div>
            <img class="XOder-Gatter" src="Graphiken/Gatter/nicht aktiviert/XOder-Gatter.png" alt="">
            `
        }
    }
}
                








var XOderEBtnA = false
var XOderEBtnB = false

document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
<div class="Knöpfe-XOder">
<div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
<div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
</div>
<img class="Gatter-One" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
<img class="Gatter-Two" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
<img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/Und-XOder-3-unten-Gatter.png" alt="">
<img class="Gatter-Four" src="Graphiken/Gatter/nicht aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
<img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
<img class="Gatter-Six" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
`

function XOderEGatterInputA(){
    if (XOderEBtnA === false){
        XOderEBtnA = true
        if (XOderEBtnA === true && XOderEBtnB === false){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/Und-XOder-3-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }else if (XOderEBtnA === true && XOderEBtnB === true){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/nicht aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }
    }else if(XOderEBtnA === true){
        XOderEBtnA = false
        if (XOderEBtnA === false && XOderEBtnB === true){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }else if (XOderEBtnA === false && XOderEBtnB === false){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/nicht aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }
    }
}
function XOderEGatterInputB(){
    if (XOderEBtnB === false){
        XOderEBtnB = true
        if (XOderEBtnB === true && XOderEBtnA === false){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/Und-XOder-3-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }else if (XOderEBtnB === true && XOderEBtnA === true){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/nicht aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }
    }else if(XOderEBtnB === true){
        XOderEBtnB = false
        if (XOderEBtnB === false && XOderEBtnA === true){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/Und-XOder-3-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }else if (XOderEBtnB === false && XOderEBtnA === false){
            document.getElementById("XOder-Gatter-Vereinfachung").innerHTML = `
            <div class="Knöpfe-XOder">
            <div class="Knopf" onclick="XOderEGatterInputA()"><p>⚡</p></div>
            <div class="Knopf" onclick="XOderEGatterInputB()"><p>⚡</p></div>
            </div>
            <img class="Gatter-One" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-1-oben-Gatter.png" alt="">
            <img class="Gatter-Two" src="Graphiken/Gatter/nicht aktiviert/Input-XOder-2-unten-Gatter.png" alt="">
            <img class="Gatter-Three" src="Graphiken/Gatter/nicht aktiviert/Und-XOder-3-unten-Gatter.png" alt="">
            <img class="Gatter-Four" src="Graphiken/Gatter/nicht aktiviert/Oder-XOder-4-oben-Gatter.png" alt="">
            <img class="Gatter-Five" src="Graphiken/Gatter/aktiviert/Not-XOder-5-unten-Gatter.png" alt="">
            <img class="Gatter-Six" src="Graphiken/Gatter/nicht aktiviert/OutputUnd-XOder-6-unten-Gatter.png" alt="">
            `
        }
    }
}