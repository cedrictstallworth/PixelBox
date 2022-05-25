//%color="#4B0082" icon="\u2592"
namespace PixelBox{
    /**
     * Define Variables
     */
    
    
    let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
    pixelbox.setMatrixWidth(8);
    pixelbox.clear();
       
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

    //% block ="set image row00 $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% inlineInputMode=inline


    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"


    export function setPixelImage(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number)
         : void {
        
        pixelbox.setMatrixColor(0, 0, neopixel.colors(c00));
        pixelbox.setMatrixColor(1, 0, neopixel.colors(c01));
        pixelbox.setMatrixColor(2, 0, neopixel.colors(c02));
        pixelbox.setMatrixColor(3, 0, neopixel.colors(c03));
        pixelbox.setMatrixColor(4, 0, neopixel.colors(c04));
        pixelbox.setMatrixColor(5, 0, neopixel.colors(c05));
        pixelbox.setMatrixColor(6, 0, neopixel.colors(c06));
        pixelbox.setMatrixColor(7, 0, neopixel.colors(c07));

        pixelbox.show()

    }
}
