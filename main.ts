namespace PixelBox{
    /**
     * * Address LEDs with linear index
     */
    //% blockId=pixelboxExtensionplotAt
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void {
        const y = Math.floor(index / 5);
        const x = index % 5;
        led.plot(x,y);
    }
}
