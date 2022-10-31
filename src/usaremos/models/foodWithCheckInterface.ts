import { IFood } from "./foodInterface";
export interface IFoodWithCheck extends IFood {
    tasted: boolean;
}
