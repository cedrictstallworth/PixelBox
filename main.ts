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
     * * Set pixel color with x y indexing
     */
    //% blockId=PixelBox_setPixel
    //% block="set pixel(x=$x y=$y) to green"
    //% x.min=0 x.max=8
    //% y.min=0 y.max=8
    export function setPixel(x: number, y:number): void {
        pixelbox.setMatrixColor(x, y, neopixel.colors(NeoPixelColors.Green));
        pixelbox.show();
    }
}
