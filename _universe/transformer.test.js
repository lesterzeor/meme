const rewire = require("rewire")
const transformer = rewire("./transformer")
const buildBabelConfig = transformer.__get__("buildBabelConfig")
const buildModuleResolverPreset = transformer.__get__("buildModuleResolverPreset")
// @ponicode
describe("buildBabelConfig", () => {
    test("0", () => {
        let callFunction = () => {
            buildBabelConfig("program.exe", { projectRoot: "commit e6d1117d97e7cc250166120d2eee1c2662c58150\r\nAuthor: Keagan Cole <Crystal69@gmail.com>\r\nDate: Thu Jul 29 2021 05:36:16 GMT+0200 (Central European Summer Time)\r\n\r\n    override wireless alarm\r\n", inlineRequires: { blacklist: [32, 10, 10] }, dev: true, hot: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            buildBabelConfig("index.js", { projectRoot: "commit d3f6bf9bcee016096098e88aced2d5afdc68c424\r\nAuthor: Edna Rice <Shanie.Pagac@yahoo.com>\r\nDate: Wed Jul 28 2021 22:05:49 GMT+0200 (Central European Summer Time)\r\n\r\n    bypass cross-platform hard drive\r\n", inlineRequires: { blacklist: [32, 256, 0] }, dev: false, hot: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            buildBabelConfig("install.deb", { projectRoot: "commit d3f6bf9bcee016096098e88aced2d5afdc68c424\r\nAuthor: Edna Rice <Shanie.Pagac@yahoo.com>\r\nDate: Wed Jul 28 2021 22:05:49 GMT+0200 (Central European Summer Time)\r\n\r\n    bypass cross-platform hard drive\r\n", inlineRequires: { blacklist: [32, 0, 16] }, dev: false, hot: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            buildBabelConfig("image.png", { projectRoot: "commit 03ccef2ffa982df061ae86ca8730cd9ad0af05b3\r\nAuthor: Ladarius Zboncak <Ricky.Schultz37@hotmail.com>\r\nDate: Wed Jul 28 2021 16:52:11 GMT+0200 (Central European Summer Time)\r\n\r\n    program wireless program\r\n", inlineRequires: { blacklist: [32, 32, 16] }, dev: true, hot: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            buildBabelConfig("install.deb", { projectRoot: "commit f20ba84baadcbd1f3a45d95e9bb5aef588f4e902\r\nAuthor: Marty Douglas <Rubie_Boehm29@yahoo.com>\r\nDate: Thu Jul 29 2021 09:06:18 GMT+0200 (Central European Summer Time)\r\n\r\n    override solid state microchip\r\n", inlineRequires: { blacklist: [64, 0, 64] }, dev: false, hot: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            buildBabelConfig(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("transformer.transform", () => {
    test("0", () => {
        let callFunction = () => {
            transformer.transform({ filename: "install.deb", options: { dev: true, retainLines: [false, false, false], generateSourceMaps: false }, src: { key: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            transformer.transform({ filename: "program.exe", options: { dev: true, retainLines: [false, true, true], generateSourceMaps: false }, src: { key: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            transformer.transform({ filename: "script.py", options: { dev: false, retainLines: [true, false, true], generateSourceMaps: false }, src: { key: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            transformer.transform({ filename: "script.py", options: { dev: false, retainLines: [true, true, true], generateSourceMaps: false }, src: { key: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            transformer.transform({ filename: "program.exe", options: { dev: false, retainLines: [false, false, false], generateSourceMaps: false }, src: { key: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            transformer.transform({ filename: undefined, options: undefined, src: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("buildModuleResolverPreset", () => {
    test("0", () => {
        let callFunction = () => {
            buildModuleResolverPreset()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("transformer.getCacheKey", () => {
    test("0", () => {
        let callFunction = () => {
            transformer.getCacheKey()
        }
    
        expect(callFunction).not.toThrow()
    })
})
