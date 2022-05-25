//% color="#4B0082" icon="\u2592" block="Pixelbox"
namespace PixelBox{
    /**
     * Define Variables
     */
    let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
    pixelbox.setMatrixWidth(8);
    pixelbox.clear();

    /**
         * *Set pixel image ROWXX by clicking on pixels and selecting colors
         */
    //% blockId=Pixelbox_setPixelboxColorsForRow
    //% block ="set pixelbox colors for row $row, $c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
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

    export function setPixelboxColorsForRow(row: number,
        c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number)
        : void {
        let colors = [c00, c01, c02, c03, c04, c05, c06, c07];
        for (let column = 0; column <= 7; column++) {
            pixelbox.setMatrixColor(column, row, neopixel.colors(colors[column]));
        }
    }

/**
     * *Set pixel image ROWXX by clicking on pixels and selecting colors
     */
//% blockId=Pixelbox_showPixelBoxImage
//% block ="show pixelbox image"

export function showPixelBoxImage()
    : void {
    pixelbox.show();
    }
}