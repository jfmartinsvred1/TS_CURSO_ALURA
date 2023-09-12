import { Negociacao } from "../models/negociacao";
import { View } from "./view";

export class volumeView extends View<Negociacao>{
    protected template(model: Negociacao): string {
        throw new Error("Method not implemented.");
    }

}