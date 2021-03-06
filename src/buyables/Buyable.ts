import Overlay from '../elements/Overlay.js';

export interface Buyable {
	readonly name: string;
	readonly price: number;
	readonly canBeBought: boolean;
	container: PIXI.Container;
	overlay: Overlay;
	priceText?: PIXI.Text;
	nameText?: PIXI.Text;
}
