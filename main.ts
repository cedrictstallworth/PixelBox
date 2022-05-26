
enum imageList{
    image01 = 1,
    image02 = 2
}

//% color="#4B0082" icon="\u2592" block="Pixelbox"
namespace PixelBox{


    /**
    * Declare an Image
    */
     //% blockId=Pixelbox_declareAnImage
    //% block="create an image $thisName"
    class PixelBoxImage {
        num: number;
        pixel: neopixel.Strip;
        constructor(thisNum: number) {
            this.num = thisNum;
            this.pixel = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
            this.pixel.setMatrixWidth(8);
            this.pixel.clear();
        }
    }

    let image01 = new PixelBoxImage(1);
    let image02 = new PixelBoxImage(2);
 
    /**
    *Set Pixelbox image row(0-7) by clicking on pixels to select colors
    */
    //% blockId=Pixelbox_setPixelboxColorsForRow
     //% block="set $name colors for row $row, $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% inlineInputMode=inline
    //% row.min=0 row.max=7
    
    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"

    export function setPixelboxColorsForCol(num: imageList, row: number,
        c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number): void {
  
        let colors = [c00, c01, c02, c03, c04, c05, c06, c07];

        for (let column = 0; column <= 7; column++) {
            switch (num) {
                case image01.num:
                    image01.pixel.setMatrixColor(column, row, neopixel.colors(colors[column]));
                    break;
                case image02.num:
                    image02.pixel.setMatrixColor(column, row, neopixel.colors(colors[column]));
                    break;
            }
        }
    }


    /**
    *Set pixel image ROWXX by clicking on pixels and selecting colors
    */

    //% blockId=Pixelbox_showPixelBoxImage
    //% block="show pixelbox image $name"

    export function showPixelBoxImage(num: number): void {
        switch(num){
            case image01.num:
                image01.pixel.show();
                break;
            case image02.num:
                image02.pixel.show();
                break;
        }
    }

}
