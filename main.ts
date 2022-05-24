//%color="#4B0082" icon="\u2592"
namespace PixelBox{
    /**
     * Define Variables
     */
    
    /* let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB);
    pixelbox.setMatrixWidth(8);
    pixelbox.clear();
    */
       
    /**
     * * Address LEDs with linear index
     */
    //% blockId=PixelBox_plotAt
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void {
        const y = Math.floor(index / 5);
        const x = index % 5;
        led.plot(x,y);
    }

    /**
     * *Set pixel image by clicking on pixels and selecting colors
     */

    //% blockId=PixelBox_setPixelImage

    //% block ="Set Pixel Image || $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07 || $c08 $c09 $c10 $c11 $c12 $c13 $c14 $c15"
    //% expandableArgumentMode="toggle"

    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"
    //% c08.shadow="colorNumberPicker"
    //% c09.shadow="colorNumberPicker"
    //% c10.shadow="colorNumberPicker"
    //% c11.shadow="colorNumberPicker"
    //% c12.shadow="colorNumberPicker"
    //% c13.shadow="colorNumberPicker"
    //% c14.shadow="colorNumberPicker"
    //% c15.shadow="colorNumberPicker"


    export function setPixelImage(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number,
         c08: number, c09: number, c10: number, c11: number, c12: number, c13: number, c14: number, c15: number)
         : void {
        
        

    }
}
