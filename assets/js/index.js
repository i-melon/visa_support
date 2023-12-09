addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();

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




    var openButtonIndex = 0;

    document.getElementById("openButton1").addEventListener("click", function () {
        if (openButtonIndex === 0) {
            document.getElementById("closeButton1").style.display = "flex";
            document.getElementById("openText1").style.display = "flex";
            document.getElementById("QopenButton1").style.display = "none";
            openButtonIndex++;
        } else {
            document.getElementById("closeButton1").style.display = "none";
            document.getElementById("openText1").style.display = "none";
            document.getElementById("QopenButton1").style.display = "flex";
            openButtonIndex--;
        }
    });


    var openButtonIndex2 = 0;

    document.getElementById("openButton2").addEventListener("click", function () {
        if (openButtonIndex2 === 0) {
            document.getElementById("closeButton2").style.display = "flex";
            document.getElementById("openText2").style.display = "flex";
            document.getElementById("QopenButton2").style.display = "none";
            openButtonIndex2++;
        } else {
            document.getElementById("closeButton2").style.display = "none";
            document.getElementById("openText2").style.display = "none";
            document.getElementById("QopenButton2").style.display = "flex";
            openButtonIndex2--;
        }
    });

    var openButtonIndex3 = 0;

    document.getElementById("openButton3").addEventListener("click", function () {
        if (openButtonIndex3 === 0) {
            document.getElementById("closeButton3").style.display = "flex";
            document.getElementById("openText3").style.display = "flex";
            document.getElementById("QopenButton3").style.display = "none";
            openButtonIndex3++;
        } else {
            document.getElementById("closeButton3").style.display = "none";
            document.getElementById("openText3").style.display = "none";
            document.getElementById("QopenButton3").style.display = "flex";
            openButtonIndex3--;
        }
    });

    var openButtonIndex4 = 0;

    document.getElementById("openButton4").addEventListener("click", function () {
        if (openButtonIndex4 === 0) {
            document.getElementById("closeButton4").style.display = "flex";
            document.getElementById("openText4").style.display = "flex";
            document.getElementById("QopenButton4").style.display = "none";
            openButtonIndex4++;
        } else {
            document.getElementById("closeButton4").style.display = "none";
            document.getElementById("openText4").style.display = "none";
            document.getElementById("QopenButton4").style.display = "flex";
            openButtonIndex4--;
        }
    });

    var openButtonIndex5 = 0;

    document.getElementById("openButton5").addEventListener("click", function () {
        if (openButtonIndex5 === 0) {
            document.getElementById("closeButton5").style.display = "flex";
            document.getElementById("openText5").style.display = "flex";
            document.getElementById("QopenButton5").style.display = "none";
            openButtonIndex5++;
        } else {
            document.getElementById("closeButton5").style.display = "none";
            document.getElementById("openText5").style.display = "none";
            document.getElementById("QopenButton5").style.display = "flex";
            openButtonIndex5--;
        }
    });

    var openButtonIndex6 = 0;

    document.getElementById("openButton6").addEventListener("click", function () {
        if (openButtonIndex6 === 0) {
            document.getElementById("closeButton6").style.display = "flex";
            document.getElementById("openText6").style.display = "flex";
            document.getElementById("QopenButton6").style.display = "none";
            openButtonIndex6++;
        } else {
            document.getElementById("closeButton6").style.display = "none";
            document.getElementById("openText6").style.display = "none";
            document.getElementById("QopenButton6").style.display = "flex";
            openButtonIndex6--;
        }
    });

    var openButtonIndex7 = 0;

    document.getElementById("openButton7").addEventListener("click", function () {
        if (openButtonIndex7 === 0) {
            document.getElementById("closeButton7").style.display = "flex";
            document.getElementById("openText7").style.display = "flex";
            document.getElementById("QopenButton7").style.display = "none";
            openButtonIndex7++;
        } else {
            document.getElementById("closeButton7").style.display = "none";
            document.getElementById("openText7").style.display = "none";
            document.getElementById("QopenButton7").style.display = "flex";
            openButtonIndex7--;
        }
    });








    indexRe = 0;
    toRight3 = document.getElementById("toRight3").addEventListener("click", function (){
        if(indexRe<4){
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
            indexRe = 4
            document.getElementById("reviewWrapper").style.left = -378*indexRe+"px"
        }

    })


    var iconButtonIndex = 0;

    document.getElementById("iconOpen").addEventListener("click", function () {
        if (iconButtonIndex === 0) {
            document.getElementById("iconText").style.display = "flex";
            document.getElementById("iconClose").style.display = "flex";
            document.getElementById("QiconOpen").style.display = "none";
            iconButtonIndex++;
        } else {
            document.getElementById("iconText").style.display = "none";
            document.getElementById("iconClose").style.display = "none";
            document.getElementById("QiconOpen").style.display = "flex";
            iconButtonIndex--;
        }
    });

    var iconButtonIndex2 = 0;

    document.getElementById("iconOpen2").addEventListener("click", function () {
        if (iconButtonIndex2 === 0) {
            document.getElementById("iconText2").style.display = "flex";
            document.getElementById("iconClose2").style.display = "flex";
            document.getElementById("QiconOpen2").style.display = "none";
            iconButtonIndex2++;
        } else {
            document.getElementById("iconText2").style.display = "none";
            document.getElementById("iconClose2").style.display = "none";
            document.getElementById("QiconOpen2").style.display = "flex";
            iconButtonIndex2--;
        }
    });

    var iconButtonIndex3 = 0;

    document.getElementById("iconOpen3").addEventListener("click", function () {
        if (iconButtonIndex3 === 0) {
            document.getElementById("iconText3").style.display = "flex";
            document.getElementById("iconClose3").style.display = "flex";
            document.getElementById("QiconOpen3").style.display = "none";
            iconButtonIndex3++;
        } else {
            document.getElementById("iconText3").style.display = "none";
            document.getElementById("iconClose3").style.display = "none";
            document.getElementById("QiconOpen3").style.display = "flex";
            iconButtonIndex3--;
        }
    });

    var iconButtonIndex4 = 0;

    document.getElementById("iconOpen4").addEventListener("click", function () {
        if (iconButtonIndex4 === 0) {
            document.getElementById("iconText4").style.display = "flex";
            document.getElementById("iconClose4").style.display = "flex";
            document.getElementById("QiconOpen4").style.display = "none";
            iconButtonIndex4++;
        } else {
            document.getElementById("iconText4").style.display = "none";
            document.getElementById("iconClose4").style.display = "none";
            document.getElementById("QiconOpen4").style.display = "flex";
            iconButtonIndex4--;
        }
    });

    var iconButtonIndex5 = 0;

    document.getElementById("iconOpen5").addEventListener("click", function () {
        if (iconButtonIndex5 === 0) {
            document.getElementById("iconText5").style.display = "flex";
            document.getElementById("iconClose5").style.display = "flex";
            document.getElementById("QiconOpen5").style.display = "none";
            iconButtonIndex5++;
        } else {
            document.getElementById("iconText5").style.display = "none";
            document.getElementById("iconClose5").style.display = "none";
            document.getElementById("QiconOpen5").style.display = "flex";
            iconButtonIndex5--;
        }
    });

    var iconButtonIndex6 = 0;

    document.getElementById("iconOpen6").addEventListener("click", function () {
        if (iconButtonIndex6 === 0) {
            document.getElementById("iconText6").style.display = "flex";
            document.getElementById("iconClose6").style.display = "flex";
            document.getElementById("QiconOpen6").style.display = "none";
            iconButtonIndex6++;
        } else {
            document.getElementById("iconText6").style.display = "none";
            document.getElementById("iconClose6").style.display = "none";
            document.getElementById("QiconOpen6").style.display = "flex";
            iconButtonIndex6--;
        }
    });

    var iconButtonIndex7 = 0;

    document.getElementById("iconOpen7").addEventListener("click", function () {
        if (iconButtonIndex7 === 0) {
            document.getElementById("iconText7").style.display = "flex";
            document.getElementById("iconClose7").style.display = "flex";
            document.getElementById("QiconOpen7").style.display = "none";
            iconButtonIndex7++;
        } else {
            document.getElementById("iconText7").style.display = "none";
            document.getElementById("iconClose7").style.display = "none";
            document.getElementById("QiconOpen7").style.display = "flex";
            iconButtonIndex7--;
        }
    })

    var iconButtonIndex8 = 0;

    document.getElementById("iconOpen8").addEventListener("click", function () {
        if (iconButtonIndex8 === 0) {
            document.getElementById("iconText8").style.display = "flex";
            document.getElementById("iconClose8").style.display = "flex";
            document.getElementById("QiconOpen8").style.display = "none";
            iconButtonIndex8++;
        } else {
            document.getElementById("iconText8").style.display = "none";
            document.getElementById("iconClose8").style.display = "none";
            document.getElementById("QiconOpen8").style.display = "flex";
            iconButtonIndex8--;
        }
    })

    var iconButtonIndex9 = 0;

    document.getElementById("iconOpen9").addEventListener("click", function () {
        if (iconButtonIndex9 === 0) {
            document.getElementById("iconText9").style.display = "flex";
            document.getElementById("iconClose9").style.display = "flex";
            document.getElementById("QiconOpen9").style.display = "none";
            iconButtonIndex9++;
        } else {
            document.getElementById("iconText9").style.display = "none";
            document.getElementById("iconClose9").style.display = "none";
            document.getElementById("QiconOpen9").style.display = "flex";
            iconButtonIndex9--;
        }
    })

    var iconButtonIndex10 = 0;

    document.getElementById("iconOpen10").addEventListener("click", function () {
        if (iconButtonIndex10 === 0) {
            document.getElementById("iconText10").style.display = "flex";
            document.getElementById("iconClose10").style.display = "flex";
            document.getElementById("QiconOpen10").style.display = "none";
            iconButtonIndex10++;
        } else {
            document.getElementById("iconText10").style.display = "none";
            document.getElementById("iconClose10").style.display = "none";
            document.getElementById("QiconOpen10").style.display = "flex";
            iconButtonIndex10--;
        }
    })

    var iconButtonIndex11 = 0;

    document.getElementById("iconOpen11").addEventListener("click", function () {
        if (iconButtonIndex11 === 0) {
            document.getElementById("iconText11").style.display = "flex";
            document.getElementById("iconClose11").style.display = "flex";
            document.getElementById("QiconOpen11").style.display = "none";
            iconButtonIndex11++;
        } else {
            document.getElementById("iconText11").style.display = "none";
            document.getElementById("iconClose11").style.display = "none";
            document.getElementById("QiconOpen11").style.display = "flex";
            iconButtonIndex11--;
        }
    })

    var iconButtonIndex12 = 0;

    document.getElementById("iconOpen12").addEventListener("click", function () {
        if (iconButtonIndex12 === 0) {
            document.getElementById("iconText12").style.display = "flex";
            document.getElementById("iconClose12").style.display = "flex";
            document.getElementById("QiconOpen12").style.display = "none";
            iconButtonIndex12++;
        } else {
            document.getElementById("iconText12").style.display = "none";
            document.getElementById("iconClose12").style.display = "none";
            document.getElementById("QiconOpen12").style.display = "flex";
            iconButtonIndex12--;
        }
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
    document.getElementById("MmodalOpen3").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("MmodalOpen4").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("MmodalOpen5").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("MmodalOpen6").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen7").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    })
    document.getElementById("modalOpen8").addEventListener("click", function () {
        document.getElementById("modalWrapper").style.display= "flex"
    });


// Получаем элементы DOM
    var openModalBtn = document.getElementById("reviewButton");
    var videoModal = document.getElementById("videoModal");
    var closeModalBtn = document.getElementById("closeModalBtn");
    var modalVideo = document.getElementById("modalVideo");

// Открываем модальное окно при клике на кнопку
    openModalBtn.addEventListener("click", function () {
        videoModal.style.display = "block";
        modalVideo.play(); // Воспроизводим видео
    });
    document.getElementById("reviewButtonM").addEventListener("click", function () {
        videoModal.style.display = "block";
        modalVideo.play(); // Воспроизводим видео
    });

// Закрываем модальное окно при клике на крестик
    closeModalBtn.addEventListener("click", function () {
        videoModal.style.display = "none";
        modalVideo.pause(); // Приостанавливаем видео
    });

// Закрываем модальное окно по завершении видео
    modalVideo.addEventListener("ended", function () {
        videoModal.style.display = "none";
    });

    var openModalBtn2 = document.getElementById("reviewButton2");
    var videoModal2 = document.getElementById("videoModal2");
    var closeModalBtn2 = document.getElementById("closeModalBtn2");
    var modalVideo2 = document.getElementById("modalVideo2");

// Открываем модальное окно при клике на кнопку
    openModalBtn2.addEventListener("click", function () {
        videoModal2.style.display = "block";
        modalVideo2.play(); // Воспроизводим видео
    });
    document.getElementById("reviewButtonM2").addEventListener("click", function () {
        videoModal2.style.display = "block";
        modalVideo2.play(); // Воспроизводим видео
    });

// Закрываем модальное окно при клике на крестик
    closeModalBtn2.addEventListener("click", function () {
        videoModal2.style.display = "none";
        modalVideo2.pause(); // Приостанавливаем видео
    });

// Закрываем модальное окно по завершении видео
    modalVideo2.addEventListener("ended", function () {
        videoModal2.style.display = "none";
    });


    var openModalBtn3 = document.getElementById("reviewButton3");
    var videoModal3 = document.getElementById("videoModal3");
    var closeModalBtn3 = document.getElementById("closeModalBtn3");
    var modalVideo3 = document.getElementById("modalVideo3");

// Открываем модальное окно при клике на кнопку
    openModalBtn3.addEventListener("click", function () {
        videoModal3.style.display = "block";
        modalVideo3.play(); // Воспроизводим видео
    });
    document.getElementById("reviewButtonM3").addEventListener("click", function () {
        videoModal3.style.display = "block";
        modalVideo3.play(); // Воспроизводим видео
    });

// Закрываем модальное окно при клике на крестик
    closeModalBtn3.addEventListener("click", function () {
        videoModal3.style.display = "none";
        modalVideo3.pause(); // Приостанавливаем видео
    });

// Закрываем модальное окно по завершении видео
    modalVideo3.addEventListener("ended", function () {
        videoModal3.style.display = "none";
    });


    var openModalBtn4 = document.getElementById("reviewButton4");
    var videoModal4 = document.getElementById("videoModal4");
    var closeModalBtn4 = document.getElementById("closeModalBtn4");
    var modalVideo4 = document.getElementById("modalVideo4");

// Открываем модальное окно при клике на кнопку
    openModalBtn4.addEventListener("click", function () {
        videoModal4.style.display = "block";
        modalVideo4.play(); // Воспроизводим видео
    });
    document.getElementById("reviewButtonM4").addEventListener("click", function () {
        videoModal4.style.display = "block";
        modalVideo4.play(); // Воспроизводим видео
    });

// Закрываем модальное окно при клике на крестик
    closeModalBtn4.addEventListener("click", function () {
        videoModal4.style.display = "none";
        modalVideo4.pause(); // Приостанавливаем видео
    });

// Закрываем модальное окно по завершении видео
    modalVideo4.addEventListener("ended", function () {
        videoModal4.style.display = "none";
    });


    var openModalBtn5 = document.getElementById("reviewButton5");
    var videoModal5 = document.getElementById("videoModal5");
    var closeModalBtn5 = document.getElementById("closeModalBtn5");
    var modalVideo5 = document.getElementById("modalVideo5");

// Открываем модальное окно при клике на кнопку
    openModalBtn5.addEventListener("click", function () {
        videoModal5.style.display = "block";
        modalVideo5.play(); // Воспроизводим видео
    });

// Закрываем модальное окно при клике на крестик
    closeModalBtn5.addEventListener("click", function () {
        videoModal5.style.display = "none";
        modalVideo5.pause(); // Приостанавливаем видео
    });

// Закрываем модальное окно по завершении видео
    modalVideo5.addEventListener("ended", function () {
        videoModal5.style.display = "none";
    });







    // Set Phone Mask On Inputs
    IMask(
        document.getElementById('phoneNumber1'),
        {
          mask: '+{7} (700) 000-00-00'
        }
    )   
    IMask(
        document.getElementById('phoneNumber2'),
        {
          mask: '+{7} (700) 000-00-00'
        }
    )    
    IMask(
        document.getElementById('phoneNumber3'),
        {
          mask: '+{7} (700) 000-00-00'
        }
    )    
    IMask(
        document.getElementById('phoneNumber4'),
        {
          mask: '+{7} (700) 000-00-00'
        }
    )      
})