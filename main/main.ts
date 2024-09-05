import Quoue from "../quoue/quoue";

class MyQuoue<T> extends Quoue<T> {  
    private list: string = ""
    private DELIMER: string

    constructor(length: number, customDelimer?: string) {
        super(length)
        
        this.DELIMER = customDelimer ?? "\n"
    }

    pushMany(...elements: T[]) {
        for(const el of elements) this.push(el)
        return this
    }

    resetAll() {
        return this.clear()
    }

    chanceQuoueOfOne() {
        this.push(this.shift())
    }

    generateList(signCallback: (element: T) => string) {
        let size = this.size()
        this.listReset()

        while(size-- !== 0){
            const el = this.shift()

            this.list += this.addingText(el, signCallback)
            this.push(el)
        } 
        
        return this.removeLastPrefix()
    }

    sizeQuoue() {
        return this.size()
    }

    private listReset() {
        this.list = ""
    }

    private addingText(text: T, signCallback: (element: T) => string) {
        return signCallback(text) + this.DELIMER
    }

    private removeLastPrefix() {
        return this.list.slice(0, this.list.lastIndexOf(this.DELIMER))
    }
}

export default MyQuoue
