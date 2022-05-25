//% color="#4B0082" icon="\u2592" block="Pixelbox"
namespace Pixelbox{
    /**
     * Define Variables
     */
    let pixelbox: neopixel.Strip = null;
    pixelbox = neopixel.create(DigitalPin.P1, 64, NeoPixelMode.RGB);
    pixelbox.setMatrixWidth(8);
    pixelbox.clear();
 


    /***************************************************************************
         * *Show Pixelbox Image
        */
    //% blockId=Pixelbox_showPixelboxImage
    //% block ="show Pixelbox image"
    //% inlineInputMode=inline
    //% weight=30

    export function showPixelboxImage()
        : void {
        pixelbox.show();
    }


}