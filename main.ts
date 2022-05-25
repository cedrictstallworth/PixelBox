//% color="#4B0082" icon="\u2592" block="Pixelbox"
namespace Pixelbox{
    /**
     * Define Variables
     */
    let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
    pixelbox.setMatrixWidth(8);
    pixelbox.clear();
 
    /**TEST FOR A BETTER WAY *************************************************************************
         * *Set pixel image ROW03 by clicking on pixels and selecting colors
         */
    //% blockId=Pixelbox_setPixelboxImageRow03
    //% block ="set pixel image row $row $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% inlineInputMode=inline
    //% weight=50

    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"

    export function setPixelboxImageRow03(row: number,
        c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number)
        : void {
        let colors = [c00, c01, c03, c04, c05, c06, c07];   
        for (let column = 0; column<=7;  column++){
            pixelbox.setMatrixColor(column, row, neopixel.colors(colors[column]));
        }
        pixelbox.show()
    }

    /*************************************************************************************************
     * *Set pixel image ROW00 by clicking on pixels and selecting colors
     */
    //% blockId=Pixelbox_setPixelboxImageRow00
    //% block ="set pixel image row00 $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% inlineInputMode=inline
    //% weight=80

    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"

    export function setPixelboxImageRow00(
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

    /*************************************************************************************************
     * 
     * *Set pixel image ROW01 by clicking on pixels and selecting colors
     */
    //% blockId=Pixelbox_setPixelboxImageRow01
    //% block ="set pixel image row01 $c08 $c09 $c10 $c11 $c12 $c13 $c14 $c15"
    //% inlineInputMode=inline
    //% weight=70

    //% c07.shadow="colorNumberPicker"
    //% c08.shadow="colorNumberPicker"
    //% c09.shadow="colorNumberPicker"
    //% c10.shadow="colorNumberPicker"
    //% c11.shadow="colorNumberPicker"
    //% c12.shadow="colorNumberPicker"
    //% c13.shadow="colorNumberPicker"
    //% c14.shadow="colorNumberPicker"
    //% c15.shadow="colorNumberPicker"

    export function setPixelboxImageRow01(
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

    /*************************************************************************************************
     * 
     * *Set pixel image ROW02 by clicking on pixels and selecting colors
     */
    //% blockId=Pixelbox_setPixelboxImageRow02
    //% block ="set pixel image row02 $c16 $c17 $c18 $c19 $c20 $c21 $c22 $c23"
    //% inlineInputMode=inline
    //% weight=60

    //% c16.shadow="colorNumberPicker"
    //% c17.shadow="colorNumberPicker"
    //% c18.shadow="colorNumberPicker"
    //% c19.shadow="colorNumberPicker"
    //% c20.shadow="colorNumberPicker"
    //% c21.shadow="colorNumberPicker"
    //% c22.shadow="colorNumberPicker"
    //% c23.shadow="colorNumberPicker"

    export function setPixelboxImageRow02(
        c16: number, c17: number, c18: number, c19: number, c20: number, c21: number, c22: number, c23: number)
        : void {
        pixelbox.setMatrixColor(0, 2, neopixel.colors(c16));
        pixelbox.setMatrixColor(1, 2, neopixel.colors(c17));
        pixelbox.setMatrixColor(2, 2, neopixel.colors(c18));
        pixelbox.setMatrixColor(3, 2, neopixel.colors(c19));
        pixelbox.setMatrixColor(4, 2, neopixel.colors(c20));
        pixelbox.setMatrixColor(5, 2, neopixel.colors(c21));
        pixelbox.setMatrixColor(6, 2, neopixel.colors(c22));
        pixelbox.setMatrixColor(7, 2, neopixel.colors(c23));
        pixelbox.show()
    }
}
