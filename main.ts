
enum Colors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //$ block=pink
    Pink = 0xFF9da5,

    //% block=green
    Green = 0x00FF00,
    //% block=lavender
    Lavender = 0xB09EFF,
    //% block=cyan
    Cyan = 0x00FFFF,
    //% block=royal
    Royal = 0x007FFF,

    //% block=brown
    Brown = 0x65471F,
    //% block=blue
    Blue = 0x0000FF,
    //% block=purple
    Purple = 0x7F00FF,
    //% block=fuchsia
    Fuchsia = 0xFF0080,

    //% block=magenta
    Magenta = 0x00FF00,
    //% block=white
    White = 0xFFFFFF,
    //% block=gray
    Gray = 0x999999,
    //% block=black
    Black = 0x000000
}

//% color="#4B0082" colorSecondary="#FFFF00" icon="\u2592" block="Pixelbox"
namespace PixelBox{

    /************************************************************************
    /**** DEFINE IMAGE **********************************************************
    //*************************************************************************
    * Define an Image
    */
    // % blockId=Pixelbox_declareAnImage
    // % block="create an image $thisName"

    export class PixelBoxImage {
        name: string;
        pixel: neopixel.Strip;
        image: Colors[];

        constructor(thisName: string) {
            this.name = thisName;
            this.pixel = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
            this.pixel.setMatrixWidth(8);
            this.pixel.clear();
            this.initializeImage(Colors.Black);
        }

        initializeImage(color: Colors) {
            for (let i = 0; i <= 63; i++) {
                console.log(i);
                this.image[i] = Colors.Black;
                //console.log(this.image[5]);
            }
        }

        

        /*setColor(row:number, col:number, color:Colors){
            let index = (row % 8) + (col * 8);
            this.image[index] = color;
        }*/

        /*getColor(row:number, col:number) :Colors{
            let index = (row % 8) + (col * 8);
            return this.image[index];
        }*/


    }
    //==== END - DEFINE IMAGE =======================================================


    /************************************************************************
    /**** CREATE IMAGE ***********************************************************
    //*************************************************************************
    * Create an Image
    */
    //% blockId=Pixelbox_declareAnImage
    //% block="create an image $thisName"
    export function createImage(thisName: string) :PixelBoxImage {
        let x = new PixelBoxImage(thisName);
        console.log(x.name);
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
        
        for (let row = 0; row <= 7; row++){
            for (let column = 0; column <= 7; column++) {
               // img.pixel.setMatrixColor(column, row, neopixel.colors(colors[column])); //img.getColor(row, column)
            }
        }
    
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