var elements = document.getElementsByClassName("item");

for(var i = 0; i < elements.length; i++)
{
    elements[i].onclick = function(){

        var el = elements[0];
        while(el)
        {
            if(el.tagName === "DIV"){
                el.classList.remove("dale")
            }
            
            el = el.nextSibling;
        }
       
        this.classList.add("dale");
        
    };
    
}



function CerrarMenu(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("vacio").style.width="0px";
    document.getElementById("Amenu").style.display="block";
}
function AbrirMenu(){
    document.getElementById("menu").style.width="210px";
    document.getElementById("vacio").style.width="255px";
    document.getElementById("Amenu").style.display="none";
}



//************** ConneR OS documentos **************//
// .1
function Log_701_12_14_1(){
    document.getElementById("fondoLog_701_12_14_1").classList.add('show');
    document.getElementById("Log_701_12_14_1").classList.add('show');
}
function CerrarLog_701_12_14_1(){
    document.getElementById("Log_701_12_14_1").classList.remove('show');
    document.getElementById("fondoLog_701_12_14_1").classList.remove('show');
}
// .2
function Cam_Arc_701_12_16(){
    document.getElementById("fondoCam_Arc_701_12_16").classList.add('show');
    document.getElementById("Cam_Arc_701_12_16").classList.add('show');
}
function CerrarCam_Arc_701_12_16(){
    document.getElementById("Cam_Arc_701_12_16").classList.remove('show');
    document.getElementById("fondoCam_Arc_701_12_16").classList.remove('show');
}
// .3
function Audio_Raven_701_12_21(){
    document.getElementById("fondoAudio_Raven_701_12_21").classList.add('show');
    document.getElementById("Audio_Raven_701_12_21").classList.add('show');
}
function CerrarAudio_Raven_701_12_21(){
    document.getElementById("Audio_Raven_701_12_21").classList.remove('show');
    document.getElementById("fondoAudio_Raven_701_12_21").classList.remove('show');
}
// .4
function Cam_Arc_702_01_30(){
    document.getElementById("fondoCam_Arc_702_01_30").classList.add('show');
    document.getElementById("Cam_Arc_702_01_30").classList.add('show');
}
function CerrarCam_Arc_702_01_30(){
    document.getElementById("Cam_Arc_702_01_30").classList.remove('show');
    document.getElementById("fondoCam_Arc_702_01_30").classList.remove('show');
}
// .5
function Audio_Arc_702_02_05(){
    document.getElementById("fondoAudio_Arc_702_02_05").classList.add('show');
    document.getElementById("Audio_Arc_702_02_05").classList.add('show');
}
function CerrarAudio_Arc_702_02_05(){
    document.getElementById("Audio_Arc_702_02_05").classList.remove('show');
    document.getElementById("fondoAudio_Arc_702_02_05").classList.remove('show');
}
// .6
function Log_702_02_14_reparado(){
    document.getElementById("fondoLog_702_02_14_reparado").classList.add('show');
    document.getElementById("Log_702_02_14_reparado").classList.add('show');
}
function CerrarLog_702_02_14_reparado(){
    document.getElementById("Log_702_02_14_reparado").classList.remove('show');
    document.getElementById("fondoLog_702_02_14_reparado").classList.remove('show');
}
// .7
function Audio_Home_697_07_11(){
    document.getElementById("fondoAudio_Home_697_07_11").classList.add('show');
    document.getElementById("Audio_Home_697_07_11").classList.add('show');
}
function CerrarAudio_Home_697_07_11(){
    document.getElementById("Audio_Home_697_07_11").classList.remove('show');
    document.getElementById("fondoAudio_Home_697_07_11").classList.remove('show');
}
// .8
function Mail_iM_702_07_01(){
    document.getElementById("fondoMail_iM_702_07_01").classList.add('show');
    document.getElementById("Mail_iM_702_07_01").classList.add('show');
}
function CerrarMail_iM_702_07_01(){
    document.getElementById("Mail_iM_702_07_01").classList.remove('show');
    document.getElementById("fondoMail_iM_702_07_01").classList.remove('show');
}
// .9
function Log_Home_697_08_08(){
    document.getElementById("fondoLog_Home_697_08_08").classList.add('show');
    document.getElementById("Log_Home_697_08_08").classList.add('show');
}
function CerrarLog_Home_697_08_08(){
    document.getElementById("Log_Home_697_08_08").classList.remove('show');
    document.getElementById("fondoLog_Home_697_08_08").classList.remove('show');
}
// .10
function Mail_690_05_14(){
    document.getElementById("fondoMail_690_05_14").classList.add('show');
    document.getElementById("Mail_690_05_14").classList.add('show');
}
function CerrarMail_690_05_14(){
    document.getElementById("Mail_690_05_14").classList.remove('show');
    document.getElementById("fondoMail_690_05_14").classList.remove('show');
}
// .11
function Cam_Arc_702_04_04(){
    document.getElementById("fondoCam_Arc_702_04_04").classList.add('show');
    document.getElementById("Cam_Arc_702_04_04").classList.add('show');
}
function CerrarCam_Arc_702_04_04(){
    document.getElementById("Cam_Arc_702_04_04").classList.remove('show');
    document.getElementById("fondoCam_Arc_702_04_04").classList.remove('show');
}
// .12
function Diary_ConneR_702_04_06(){
    document.getElementById("fondoDiary_ConneR_702_04_06").classList.add('show');
    document.getElementById("Diary_ConneR_702_04_06").classList.add('show');
}
function CerrarDiary_ConneR_702_04_06(){
    document.getElementById("Diary_ConneR_702_04_06").classList.remove('show');
    document.getElementById("fondoDiary_ConneR_702_04_06").classList.remove('show');
}
// .13
function Mail_BH_702_07_12(){
    document.getElementById("fondoMail_BH_702_07_12").classList.add('show');
    document.getElementById("Mail_BH_702_07_12").classList.add('show');
}
function CerrarMail_BH_702_07_12(){
    document.getElementById("Mail_BH_702_07_12").classList.remove('show');
    document.getElementById("fondoMail_BH_702_07_12").classList.remove('show');
}
// .14
function Call_702_07_12(){
    document.getElementById("fondoCall_702_07_12").classList.add('show');
    document.getElementById("Call_702_07_12").classList.add('show');
}
function CerrarCall_702_07_12(){
    document.getElementById("Call_702_07_12").classList.remove('show');
    document.getElementById("fondoCall_702_07_12").classList.remove('show');
}
// .15
function Log_Arc_702_07_14(){
    document.getElementById("fondoLog_Arc_702_07_14").classList.add('show');
    document.getElementById("Log_Arc_702_07_14").classList.add('show');
}
function CerrarLog_Arc_702_07_14(){
    document.getElementById("Log_Arc_702_07_14").classList.remove('show');
    document.getElementById("fondoLog_Arc_702_07_14").classList.remove('show');
}
// .16
function Cam_Arc_702_07_20(){
    document.getElementById("fondoCam_Arc_702_07_20").classList.add('show');
    document.getElementById("Cam_Arc_702_07_20").classList.add('show');
}
function CerrarCam_Arc_702_07_20(){
    document.getElementById("Cam_Arc_702_07_20").classList.remove('show');
    document.getElementById("fondoCam_Arc_702_07_20").classList.remove('show');
}
// .17
function Cam_Cafe_702_07_21(){
    document.getElementById("fondoCam_Cafe_702_07_21").classList.add('show');
    document.getElementById("Cam_Cafe_702_07_21").classList.add('show');
}
function CerrarCam_Cafe_702_07_21(){
    document.getElementById("Cam_Cafe_702_07_21").classList.remove('show');
    document.getElementById("fondoCam_Cafe_702_07_21").classList.remove('show');
}
// .18
function Diary_ConneR_702_07_22(){
    document.getElementById("fondoDiary_ConneR_702_07_22").classList.add('show');
    document.getElementById("Diary_ConneR_702_07_22").classList.add('show');
}
function CerrarDiary_ConneR_702_07_22(){
    document.getElementById("Diary_ConneR_702_07_22").classList.remove('show');
    document.getElementById("fondoDiary_ConneR_702_07_22").classList.remove('show');
}
// .19
function Cam_Arc_702_07_24(){
    document.getElementById("fondoCam_Arc_702_07_24").classList.add('show');
    document.getElementById("Cam_Arc_702_07_24").classList.add('show');
}
function CerrarCam_Arc_702_07_24(){
    document.getElementById("Cam_Arc_702_07_24").classList.remove('show');
    document.getElementById("fondoCam_Arc_702_07_24").classList.remove('show');
}
// .20
function Mail_Arc_702_07_27(){
    document.getElementById("fondoMail_Arc_702_07_27").classList.add('show');
    document.getElementById("Mail_Arc_702_07_27").classList.add('show');
}
function CerrarMail_Arc_702_07_27(){
    document.getElementById("Mail_Arc_702_07_27").classList.remove('show');
    document.getElementById("fondoMail_Arc_702_07_27").classList.remove('show');
}
// .21
function Diary_ConneR_702_07_28(){
    document.getElementById("fondoDiary_ConneR_702_07_28").classList.add('show');
    document.getElementById("Diary_ConneR_702_07_28").classList.add('show');
}
function CerrarDiary_ConneR_702_07_28(){
    document.getElementById("Diary_ConneR_702_07_28").classList.remove('show');
    document.getElementById("fondoDiary_ConneR_702_07_28").classList.remove('show');
}
// .22
function Mail_Arc_702_07_22(){
    document.getElementById("fondoMail_Arc_702_07_22").classList.add('show');
    document.getElementById("Mail_Arc_702_07_22").classList.add('show');
}
function CerrarMail_Arc_702_07_22(){
    document.getElementById("Mail_Arc_702_07_22").classList.remove('show');
    document.getElementById("fondoMail_Arc_702_07_22").classList.remove('show');
}
// .23
function Audio_Arc_702_08_26(){
    document.getElementById("fondoAudio_Arc_702_08_26").classList.add('show');
    document.getElementById("Audio_Arc_702_08_26").classList.add('show');
}
function CerrarAudio_Arc_702_08_26(){
    document.getElementById("Audio_Arc_702_08_26").classList.remove('show');
    document.getElementById("fondoAudio_Arc_702_08_26").classList.remove('show');
}
// .24
function Diary_ConneR_702_08_26(){
    document.getElementById("fondoDiary_ConneR_702_08_26").classList.add('show');
    document.getElementById("Diary_ConneR_702_08_26").classList.add('show');
}
function CerrarDiary_ConneR_702_08_26(){
    document.getElementById("Diary_ConneR_702_08_26").classList.remove('show');
    document.getElementById("fondoDiary_ConneR_702_08_26").classList.remove('show');
}
// .25
function Audio_Arc_702_08_12(){
    document.getElementById("fondoAudio_Arc_702_08_12").classList.add('show');
    document.getElementById("Audio_Arc_702_08_12").classList.add('show');
}
function CerrarAudio_Arc_702_08_12(){
    document.getElementById("Audio_Arc_702_08_12").classList.remove('show');
    document.getElementById("fondoAudio_Arc_702_08_12").classList.remove('show');
}

