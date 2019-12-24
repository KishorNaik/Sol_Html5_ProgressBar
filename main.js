function progressBarDemo() {


    let arrayData = function () {
        let modes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        return modes;
    }

    let loading = function (index) {

        $("#progressBarObj").attr("value", index);
    }

    // Public Method
    this.showProgressBar = function () {
        var setTimer = null;
        let arrayDataObj = null;

        // Get Array Data;
        arrayDataObj = arrayData();
        console.log(arrayDataObj);

        // get Progress Bar Max Value
        $("#progressBarObj").attr("value", 0);
        $("#progressBarObj").attr("max", arrayDataObj.length - 1);


        let interval = 500; //one second
        arrayDataObj.forEach((value, index) => {


            setTimeout(() => {

                console.log(value);

                loading(index);

            }, interval * index);
        });
    };

}

var progressBarDemoObj = new progressBarDemo();
progressBarDemoObj.showProgressBar();
