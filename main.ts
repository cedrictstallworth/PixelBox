
enum imageList{
    image01 = 1,
    image02 = 2
}

enum Gest {
    //% block="red"
    //% jres=gestures.tiltleft
    red,
    //% block="green"
    green,
    //% block="blue"
    blue,
    //% block="cyan"
    cyan,
    //% block="magenta"
    magenta,
    //% block="yellow"
    yellow,
    //% block="white"
    white,
    //% block="gray"
    gray,
    //% block="black"
    black
}

//% color="#4B0082" colorSecondary="#FFFF00" icon="\u2592" block="Pixelbox"
namespace PixelBox{

    /************************************************************************
    /**** DEFINE IMAGE **********************************************************
    //*************************************************************************
    * Define an Image
    */
     //% blockId=Pixelbox_declareAnImage
    //% block="create an image $thisName"

    export class PixelBoxImage {
        name: string;
        pixel: neopixel.Strip;
        tag: string;
        constructor(thisName: string) {
            this.name = thisName;
            this.pixel = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
            this.pixel.setMatrixWidth(8);
            this.pixel.clear();
        }
    }
    //==== END - DEFINE IMAGE =======================================================


    /************************************************************************
    /**** CREATE IMAGE ***********************************************************
    //*************************************************************************
    * Create an Image
    */
    //% blockId=Pixelbox_declareAnImage
    //% block="create an image $thisName=variables_get(imageName)"
    export function createImage(thisName: string) :PixelBoxImage {
        let x = new PixelBoxImage(thisName);
        return x;
    }
    //==== END - CREATE IMAGE ============================================================


    /************************************************************************
    /**** SET IMAGE ROW COLORS ***********************************************************
    //************************************************************************
    *Set Pixelbox image row(0-7) by clicking on pixels to select colors
    */
    //% blockId=Pixelbox_setPixelboxColorsForRow
    //% block="set $img=variables_get(imageName) colors for row $row, $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
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

    export function setPixelboxColorsForCol(img: PixelBoxImage, row: number,
        c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number): void {
  
        let colors = [c00, c01, c02, c03, c04, c05, c06, c07];

        for (let column = 0; column <= 7; column++) {
            /*switch (num) {
                case image01.num:
                    image01.pixel.setMatrixColor(column, row, neopixel.colors(colors[column]));
                    break;
                case image02.num:
                    image02.pixel.setMatrixColor(column, row, neopixel.colors(colors[column]));
                    break;
            }*/
            img.pixel.setMatrixColor(column, row, neopixel.colors(colors[column]));
        }
    }
    //==== END - SET IMAGE ROW COLORS ==============================================================


    /************************************************************************
    /**** SHOW IMAGE ***********************************************************
    //************************************************************************
    *Set pixel image ROWXX by clicking on pixels and selecting colors
    */
    //% blockId=Pixelbox_showPixelBoxImage
    //% block="show image $img=variables_get(imageName)"

    export function showPixelBoxImage(img: PixelBoxImage): void {
        /*switch(num){
            case image01.num:
                image01.pixel.show();
                break;
            case image02.num:
                image02.pixel.show();
                break;
        }*/
        img.pixel.show();
    }
    //==== END - SHOW IMAGE =============================================================


    //************************************************************************
    //**** SCRATCH ***********************************************************
    //************************************************************************
    /**
        
    //********* Show varibale value in console.log
    //% block="showme $x"
    export function showme(x: any) {
        console.log(x.name)
    }

    //******* Show grid selector bsaed on an enum
    //% block
    //% gip.fieldEditor="gridpicker"
    //% gip.fieldOptions.width=220
    //% gip.fieldOptions.columns=3
    export function onGip(gip: Gest) {
    }

     //==== END - SCRATCH ============================================================
    */
    
}