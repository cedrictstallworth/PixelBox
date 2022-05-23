namespace PixelBox{
    /**
     * Define Variables
     */
    let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB);
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
     * * Set pixel color with x y indexing "$c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07"
     */
    //% blockId=PixelBox_setPixel
    //% block ="|| $c00 || $c01 $c02 $c03 $c04 $c05 $c06 $c07"
    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"

     export function setPixel(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number)
         : void {
        pixelbox.setMatrixColor(0, 0, c00);
        pixelbox.show();
    }
}
