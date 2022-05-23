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
    * Define Colors
    */
    enum RoverColors {
        //% block="red"
        Red = 0xFF0000,
        //% block="orange"
        Orange = 0xFFA500,
        //% block="yellow"
        Yellow = 0xFFFF00,
        //% block="green"
        Green = 0x00FF00,
        //% block="blue"
        Blue = 0x0000FF,
        //% block="indigo"
        Indigo = 0x4b0082,
        //% block="violet"
        Violet = 0x8a2be2,
        //% block="purple"
        Purple = 0xFF00FF,
        //% block="white"
        White = 0xFFFFFF,
        //% block="black"
        Black = 0x000000
    }
    
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

    //% block ="$c00 $c01 $c02 $c03 $c04 $c05 $c06 $c07 \n $c08 $c09 $c10 $c11 $c12 $c13 $c14 $c15"
    //% inlineInputMode=inline
    
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
    //% c15.shadow=
 

     export function setPixel(
         c00: number, c01: number, c02: number, c03: number, c04: number, c05: number, c06: number, c07: number,
         c08: number, c09: number, c10: number, c11: number, c12: number, c13: number, c14: number, c15: number)
         : void {
        pixelbox.setMatrixColor(0, 0, c00);
        pixelbox.show();
    }
}
