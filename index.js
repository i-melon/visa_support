addEventListener("DOMContentLoaded", function (){
    index = 0;
    toLeft = document.getElementById("toLeft").addEventListener("click", function (){
        if(index>0){
            index--;
            document.getElementById("cantWrapper").style.left= -410*index+"px"

        }
        else{
            index = 3;
            document.getElementById("cantWrapper").style.left= -410*index+"px"
        }
    })
    toRight = document.getElementById("toRight").addEventListener("click", function () {
        if(index<3){
            index++;
            document.getElementById("cantWrapper").style.left= -410*index+"px"

        }
        else{
            index = 0;
            document.getElementById("cantWrapper").style.left= -410*index+"px"
        }
    })

    indexPrep = 0;
    toRight2 = document.getElementById("toRight2").addEventListener("click", function (){
        if(indexPrep<2){
            indexPrep++
            document.getElementById("prepWrapper").style.left = -345*indexPrep+"px"
        }
        else {
            indexPrep = 0
            document.getElementById("prepWrapper").style.left = -345*indexPrep+"px"
        }

    })
    toLeft2 = document.getElementById("toLeft2").addEventListener("click", function (){
        if(indexPrep>0){
            indexPrep--
            document.getElementById("prepWrapper").style.left = -345*indexPrep+"px"
        }
        else {
            indexPrep = 2
            document.getElementById("prepWrapper").style.left = -345*indexPrep+"px"
        }

    })





    document.getElementById("openButton1").addEventListener("click", function () {
        document.getElementById("closeButton1").style.display="flex"
        document.getElementById("openText1").style.display="flex"
        document.getElementById("openButton1").style.display="none"

    })
    document.getElementById("closeButton1").addEventListener("click", function () {
        document.getElementById("closeButton1").style.display="none"
        document.getElementById("openText1").style.display="none"
        document.getElementById("openButton1").style.display="flex"

    })
    document.getElementById("openButton2").addEventListener("click", function () {
        document.getElementById("closeButton2").style.display="flex"
        document.getElementById("openText2").style.display="flex"
        document.getElementById("openButton2").style.display="none"

    })
    document.getElementById("closeButton2").addEventListener("click", function () {
        document.getElementById("closeButton2").style.display="none"
        document.getElementById("openText2").style.display="none"
        document.getElementById("openButton2").style.display="flex"

    })
    document.getElementById("openButton3").addEventListener("click", function () {
        document.getElementById("closeButton3").style.display="flex"
        document.getElementById("openText3").style.display="flex"
        document.getElementById("openButton3").style.display="none"

    })
    document.getElementById("closeButton3").addEventListener("click", function () {
        document.getElementById("closeButton3").style.display="none"
        document.getElementById("openText3").style.display="none"
        document.getElementById("openButton3").style.display="flex"

    })
    document.getElementById("openButton4").addEventListener("click", function () {
        document.getElementById("closeButton4").style.display="flex"
        document.getElementById("openText4").style.display="flex"
        document.getElementById("openButton4").style.display="none"

    })
    document.getElementById("closeButton4").addEventListener("click", function () {
        document.getElementById("closeButton4").style.display="none"
        document.getElementById("openText4").style.display="none"
        document.getElementById("openButton4").style.display="flex"

    })
    document.getElementById("openButton5").addEventListener("click", function () {
        document.getElementById("closeButton5").style.display="flex"
        document.getElementById("openText5").style.display="flex"
        document.getElementById("openButton5").style.display="none"

    })
    document.getElementById("closeButton5").addEventListener("click", function () {
        document.getElementById("closeButton5").style.display="none"
        document.getElementById("openText5").style.display="none"
        document.getElementById("openButton5").style.display="flex"

    })
    document.getElementById("openButton6").addEventListener("click", function () {
        document.getElementById("closeButton6").style.display="flex"
        document.getElementById("openText6").style.display="flex"
        document.getElementById("openButton6").style.display="none"

    })
    document.getElementById("closeButton6").addEventListener("click", function () {
        document.getElementById("closeButton6").style.display="none"
        document.getElementById("openText6").style.display="none"
        document.getElementById("openButton6").style.display="flex"

    })
    document.getElementById("openButton7").addEventListener("click", function () {
        document.getElementById("closeButton7").style.display="flex"
        document.getElementById("openText7").style.display="flex"
        document.getElementById("openButton7").style.display="none"

    })
    document.getElementById("closeButton7").addEventListener("click", function () {
        document.getElementById("closeButton7").style.display="none"
        document.getElementById("openText7").style.display="none"
        document.getElementById("openButton7").style.display="flex"

    })





    indexRe = 0;
    toRight3 = document.getElementById("toRight3").addEventListener("click", function (){
        if(indexRe<3){
            indexRe++
            document.getElementById("reviewWrapper").style.left = -378*indexRe+"px"
        }
        else {
            indexRe = 0
            document.getElementById("reviewWrapper").style.left = -378*indexRe+"px"
        }

    })
    toLeft3 = document.getElementById("toLeft3").addEventListener("click", function (){
        if(indexRe>0){
            indexRe--
            document.getElementById("reviewWrapper").style.left = -378*indexRe+"px"
        }
        else {
            indexRe = 3
            document.getElementById("reviewWrapper").style.left = -378*indexRe+"px"
        }

    })



    document.getElementById("iconOpen").addEventListener("click", function () {
        document.getElementById("iconText").style.display="flex"
        document.getElementById("iconClose").style.display="flex"
        document.getElementById("iconOpen").style.display="none"

    })
    document.getElementById("iconClose").addEventListener("click", function () {
        document.getElementById("iconText").style.display="none"
        document.getElementById("iconClose").style.display="none"
        document.getElementById("iconOpen").style.display="flex"

    })
    document.getElementById("iconOpen2").addEventListener("click", function () {
        document.getElementById("iconText2").style.display="flex"
        document.getElementById("iconClose2").style.display="flex"
        document.getElementById("iconOpen2").style.display="none"

    })
    document.getElementById("iconClose2").addEventListener("click", function () {
        document.getElementById("iconText2").style.display="none"
        document.getElementById("iconClose2").style.display="none"
        document.getElementById("iconOpen2").style.display="flex"

    })
    document.getElementById("iconOpen3").addEventListener("click", function () {
        document.getElementById("iconText3").style.display="flex"
        document.getElementById("iconClose3").style.display="flex"
        document.getElementById("iconOpen3").style.display="none"

    })
    document.getElementById("iconClose3").addEventListener("click", function () {
        document.getElementById("iconText3").style.display="none"
        document.getElementById("iconClose3").style.display="none"
        document.getElementById("iconOpen3").style.display="flex"

    })
    document.getElementById("iconOpen4").addEventListener("click", function () {
        document.getElementById("iconText4").style.display="flex"
        document.getElementById("iconClose4").style.display="flex"
        document.getElementById("iconOpen4").style.display="none"

    })
    document.getElementById("iconClose4").addEventListener("click", function () {
        document.getElementById("iconText4").style.display="none"
        document.getElementById("iconClose4").style.display="none"
        document.getElementById("iconOpen4").style.display="flex"

    })
    document.getElementById("iconOpen5").addEventListener("click", function () {
        document.getElementById("iconText5").style.display="flex"
        document.getElementById("iconClose5").style.display="flex"
        document.getElementById("iconOpen5").style.display="none"

    })
    document.getElementById("iconClose5").addEventListener("click", function () {
        document.getElementById("iconText5").style.display="none"
        document.getElementById("iconClose5").style.display="none"
        document.getElementById("iconOpen5").style.display="flex"

    })
    document.getElementById("iconOpen6").addEventListener("click", function () {
        document.getElementById("iconText6").style.display="flex"
        document.getElementById("iconClose6").style.display="flex"
        document.getElementById("iconOpen6").style.display="none"

    })
    document.getElementById("iconClose6").addEventListener("click", function () {
        document.getElementById("iconText6").style.display="none"
        document.getElementById("iconClose6").style.display="none"
        document.getElementById("iconOpen6").style.display="flex"

    })
    document.getElementById("iconOpen7").addEventListener("click", function () {
        document.getElementById("iconText7").style.display="flex"
        document.getElementById("iconClose7").style.display="flex"
        document.getElementById("iconOpen7").style.display="none"

    })
    document.getElementById("iconClose7").addEventListener("click", function () {
        document.getElementById("iconText7").style.display="none"
        document.getElementById("iconClose7").style.display="none"
        document.getElementById("iconOpen7").style.display="flex"

    })
    document.getElementById("iconOpen8").addEventListener("click", function () {
        document.getElementById("iconText8").style.display="flex"
        document.getElementById("iconClose8").style.display="flex"
        document.getElementById("iconOpen8").style.display="none"

    })
    document.getElementById("iconClose8").addEventListener("click", function () {
        document.getElementById("iconText8").style.display="none"
        document.getElementById("iconClose8").style.display="none"
        document.getElementById("iconOpen8").style.display="flex"

    })
    document.getElementById("iconOpen9").addEventListener("click", function () {
        document.getElementById("iconText9").style.display="flex"
        document.getElementById("iconClose9").style.display="flex"
        document.getElementById("iconOpen9").style.display="none"

    })
    document.getElementById("iconClose9").addEventListener("click", function () {
        document.getElementById("iconText9").style.display="none"
        document.getElementById("iconClose9").style.display="none"
        document.getElementById("iconOpen9").style.display="flex"

    })
    document.getElementById("iconOpen10").addEventListener("click", function () {
        document.getElementById("iconText10").style.display="flex"
        document.getElementById("iconClose10").style.display="flex"
        document.getElementById("iconOpen10").style.display="none"

    })
    document.getElementById("iconClose10").addEventListener("click", function () {
        document.getElementById("iconText10").style.display="none"
        document.getElementById("iconClose10").style.display="none"
        document.getElementById("iconOpen10").style.display="flex"

    })
    document.getElementById("iconOpen11").addEventListener("click", function () {
        document.getElementById("iconText11").style.display="flex"
        document.getElementById("iconClose11").style.display="flex"
        document.getElementById("iconOpen11").style.display="none"

    })
    document.getElementById("iconClose11").addEventListener("click", function () {
        document.getElementById("iconText11").style.display="none"
        document.getElementById("iconClose11").style.display="none"
        document.getElementById("iconOpen11").style.display="flex"

    })
    document.getElementById("iconOpen12").addEventListener("click", function () {
        document.getElementById("iconText12").style.display="flex"
        document.getElementById("iconClose12").style.display="flex"
        document.getElementById("iconOpen12").style.display="none"

    })
    document.getElementById("iconClose12").addEventListener("click", function () {
        document.getElementById("iconText12").style.display="none"
        document.getElementById("iconClose12").style.display="none"
        document.getElementById("iconOpen12").style.display="flex"

    })




    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "none"
    })
    document.getElementById("modalOpen").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen2").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen3").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen4").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen5").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen6").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen7").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen8").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalButton").addEventListener("click", function () {
        sendEmail();
    })



    function sendEmail() {
        var form = document.getElementById('emailForm');
        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', './index.php', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Обработка успешного ответа от сервера
                console.log(xhr.responseText);
                alert('Email sent successfully!');
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                // Обработка ошибки
                console.error('Error sending email.');
                alert('Error sending email. Please try again later.');
            }
        };

        xhr.send(formData);
    }

    
})