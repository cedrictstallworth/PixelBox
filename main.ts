enum pixels{
    //% block ="$c00"
    //% c00.shadow="colorNumberPicker",

    //% block= "$c01" 
    //% c01.shadow="colorNumberPicker"


}

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
    

    
    //% block
    //% pixels.fieldEditor="gridpicker"
    //% pixels.fieldOptions.width=220
    //% pixels.fieldOptions.columns=8
    


     export function setPixel(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number,
         c08: number)
         : void {
        pixelbox.setMatrixColor(0, 0, c00);
        pixelbox.show();
    }
}
