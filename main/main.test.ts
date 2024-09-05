import data from "@app/main.data.json"
import MyQuoue from "@main/main";

type NoInter<T> = T extends [] ? T[number] : T[never]

describe("MyQuoue", () => {
    const DELIMER = "\n"
    const myQuoue = new MyQuoue<NoInter<typeof data>>(data.length, DELIMER)

    function expectValues<T>(...values: T[]) {
       expect(myQuoue.generateList(i => i)).toBe(values.join(DELIMER))
    }

    it("should created instance", () => {
        expect(myQuoue).toBeTruthy()
    })

    it("pushMany test method", () => {
        try {
            expect(myQuoue.pushMany("test1", "test2").sizeQuoue()).toBe(2)
            expect(myQuoue.pushMany("test3").sizeQuoue()).toBe(3)
            expect(myQuoue.pushMany(...data).sizeQuoue()).toBe(9) //This must be a error
        }

        catch(err) {
            expect(err instanceof Error).toBe(true)
            expect((err as Error).message).toBe("All field in Quoue class is full")
        }
    })

    it("resetAll test method", () => {
        myQuoue.resetAll()
        expect(myQuoue.sizeQuoue()).toBe(0)
    })

    it("generateList test method", () => {
        //First Test
        expect(myQuoue.generateList(i => i)).toBe("")
        
        //Secound Test
        myQuoue.pushMany(...data)
        expectValues(...data)

        //Third Test
        myQuoue.resetAll()
        myQuoue.pushMany(data[0], data[1])
        expect(myQuoue.generateList(i => `${i} --> 1`)).toBe(`${data[0]} --> 1\n${data[1]} --> 1`)

        myQuoue.resetAll()
    })

    it("changeQuoueOfOne test method", () => {
        myQuoue.pushMany(data[0], data[1], data[2])
        
        //First Test
        myQuoue.chanceQuoueOfOne()
        expectValues(data[1], data[2], data[0])

        //Secound Test
        myQuoue.chanceQuoueOfOne()
        expectValues(data[2], data[0], data[1])
        
        //Third test
        myQuoue.chanceQuoueOfOne()
        expectValues(data[0], data[1], data[2])

        myQuoue.resetAll()
    })
})

