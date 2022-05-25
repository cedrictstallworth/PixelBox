//%color="#4B0082" icon="\u2592"
//%groups = '["Image Rows", "others"]'
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
     * *Set pixel image ROW00 by clicking on pixels and selecting colors
     */
    //% blockId=PixelBox_setPixelImageRow00
    //% block ="set pixel image row00 $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% inlineInputMode=inline

    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"

    export function setPixelImageRow00(
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

    /**
     * *Set pixel image ROW01 by clicking on pixels and selecting colors
     */
    //% blockId=PixelBox_setPixelImageRow01
    //% block ="set pixel image row01 $c08 $c09 $c10 $c11 $c12 $c13 $c14 $c15"
    //% inlineInputMode=inline

    //% c07.shadow="colorNumberPicker"
    //% c08.shadow="colorNumberPicker"
    //% c09.shadow="colorNumberPicker"
    //% c10.shadow="colorNumberPicker"
    //% c11.shadow="colorNumberPicker"
    //% c12.shadow="colorNumberPicker"
    //% c13.shadow="colorNumberPicker"
    //% c14.shadow="colorNumberPicker"
    //% c15.shadow="colorNumberPicker"

    export function setPixelImageRow01(
        c08: number, c09: number, c10: number, c11: number, c12: number, c13: number, c14: number, c15: number)
        : void {
        pixelbox.setMatrixColor(0, 1, neopixel.colors(c08));
        pixelbox.setMatrixColor(1, 1, neopixel.colors(c09));
        pixelbox.setMatrixColor(2, 1, neopixel.colors(c10));
        pixelbox.setMatrixColor(3, 1, neopixel.colors(c11));
        pixelbox.setMatrixColor(4, 1, neopixel.colors(c12));
        pixelbox.setMatrixColor(5, 1, neopixel.colors(c13));
        pixelbox.setMatrixColor(6, 1, neopixel.colors(c14));
        pixelbox.setMatrixColor(7, 1, neopixel.colors(c15));
        pixelbox.show()
    }
}
