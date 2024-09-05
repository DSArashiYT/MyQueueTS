class Quoue<T> {
    private arr: Array<T>
    private length = 0

    constructor(length: number) {
        this.arr = new Array(length)
    }

    protected push(element: T) {
        if(!this.sizeIsBeetweenZeroAndMax()) throw new Error("All field in Quoue class is full")
        this.saveDataInArray(element)
        this.incrementSize()
        return this
    }

    protected shift() {
        const element = this.getFirstElementFromArray()
        this.oneJumpElements()
        this.removeLastElement()
        this.deincrementSize()

        return element
    }

    protected maxSize() {
        return this.arr.length
    }

    protected size() {
        return this.length
    }

    protected clear() {
        while(this.length !== 0) {
            this.removeLastElement()
            this.deincrementSize()
        }
    }

    private sizeIsBeetweenZeroAndMax() {
        return this.length < this.arr.length && this.length >= 0
    }

    private saveDataInArray(element: T) {
        this.arr[this.length] = element
    }

    private incrementSize() {
        this.length = this.length + 1
    }

    private getFirstElementFromArray() {
        if(!this.arrayHaveFirstElement()) throw new Error("All field in Quoue class is empty")
        return this.arr[0]
    }

    private arrayHaveFirstElement() {
        return this.length > 0
    }
    
    private oneJumpElements() {
        for(let i = 1; i < this.arr.length; i++) {
            this.arr[i - 1] = this.arr[i]
        }
    }

    private removeLastElement() {
        delete this.arr[this.length]
    }

    private deincrementSize() {
        this.length = this.length - 1
    }
}

export default Quoue