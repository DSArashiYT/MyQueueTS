import QuoueExample from "@app/quoue/queue.test.class"

describe("Quoue Class", () => {
    const MAX_SIZE = 10
    const instance = new QuoueExample<number>(MAX_SIZE)

    it("should create instance", () => {
        expect(instance).toBeTruthy()
    })

    it("push test method", () => {
        expect(instance.pushElement(1).sizeQuoue()).toBe(1)
        expect(instance.pushElement(2).sizeQuoue()).toBe(2)
        expect(instance.pushElement(4).pushElement(3).sizeQuoue()).toBe(4)

        try {
            for(let i = 0; i < MAX_SIZE; i++) instance.pushElement(i) //Must be a error
        }

        catch(err) {
            expect(err instanceof Error).toBe(true)
            expect((err as Error).message).toBe("All field in Quoue class is full")
        }
    })

    it("clear test method", () => {
       instance.clearQuoue()
       expect(instance.sizeQuoue()).toBe(0)
    })

    it("shift test method", () => {
        expect(instance.pushElement(1).pushElement(4).shiftElement()).toBe(1)
        expect(instance.shiftElement()).toBe(4)

        try {
            expect(instance.shiftElement()).toBe(1) //Must be a error
        }
        
        catch(err) {
            expect(err instanceof Error).toBe(true)
            expect((err as Error).message).toBe("All field in Quoue class is empty")
        }
    })

    it("maxSize test method", () => {
        expect(instance.maxSizeQuoue()).toBe(MAX_SIZE)
    })
})