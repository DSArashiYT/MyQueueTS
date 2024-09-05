import Quoue from "@quoue/quoue";

class QuoueExample<T> extends Quoue<T> {
    constructor(length: number) {
        super(length)
    }

    pushElement(element: T): this {
        return this.push(element)
    }

    clearQuoue(): void {
        return this.clear()
    }

    shiftElement(): T {
        return this.shift()
    }

    sizeQuoue(): number {
        return this.size()
    }

    maxSizeQuoue(): number {
        return this.maxSize()    
    }
}

export default QuoueExample