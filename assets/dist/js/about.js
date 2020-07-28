$(document).ready(function () {

    $('.example').eyMaps({
        zoomAfter: 'click',
        map: {
            zoom: 15,
            controls: [],
            zoomAfter: 'click',
        },

        // Метки
        placemark: [

            // Метка №1
            {
                geometry: [55.431642, 37.277329], // Координаты метки
                options: {
                    // эта опция переопределит аналогичную опцию в параметре placemarkDefaults
                    iconColor: '#ff3333',
                    preset: 'islands#redFoodIcon'
                }
            },
        ],

        // Эти стили будут использ. по умолчанию у всех меток
        placemarkDefaults: {
            iconColor: '#ff3333',
            preset: 'islands#redFoodIcon',
        },

    });
    $('.example2').eyMaps({
        zoomAfter: 'click',
        map: {
            zoom: 15,
            controls: [],
            zoomAfter: 'click',
        },

        // Метки
        placemark: [

            // Метка №1
            {
                geometry: [55.758042, 37.635117], // Координаты метки
                iconCaption: "Диаграмма",
                options: {
                    // эта опция переопределит аналогичную опцию в параметре placemarkDefaults
                    iconColor: '#ff3333',
                    preset: 'islands#redFoodIcon'
                }
            },
        ],

        // Эти стили будут использ. по умолчанию у всех меток
        placemarkDefaults: {
            iconColor: '#ff3333',
            preset: 'islands#redFoodIcon'
        },

    });
})