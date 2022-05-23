//%color="#4B0082" icon="\u2592"
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
     * * Set pixel color by clicking on the pixel and selecting a color
     */
    
    //% blockId=PixelBox_setPixel

    //% block ="$c00"
    //% block= "$c01" 
    //% block= "$c02" 
    //% block= "$c03" 
    //% block= "$c04" 
    //% block= "$c05" 
    //% block= "$c06" 
    //% block= "$c07"
    //% block ="$c08" 
    //% block= "$c09" 
    //% block= "$c10" 
    //% block= "$c11" 
    //% block= "$c12" 
    //% block= "$c13" 
    //% block= "$c14" 
    //% block= "$c15"

    //% c00.shadow="colorNumberPicker"
    //% c01.shadow="colorNumberPicker"
    //% c02.shadow="colorNumberPicker"
    //% c03.shadow="colorNumberPicker"
    //% c04.shadow="colorNumberPicker"
    //% c05.shadow="colorNumberPicker"
    //% c06.shadow="colorNumberPicker"
    //% c07.shadow="colorNumberPicker"
    //% c08.shadow="colorNumberPicker"

     export function setPixel(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number,
         c08: number)
         : void {
        pixelbox.setMatrixColor(0, 0, c00);
        pixelbox.show();
    }
}
