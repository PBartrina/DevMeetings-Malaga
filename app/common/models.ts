/**
 * This is an interface
 */

export namespace models {
    export interface Product {
        id: number;
        name: string;
        description?: string;
        price: number;
        state?: string;
    }
}
