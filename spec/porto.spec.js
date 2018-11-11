describe('porto', () => {
    const porto = require('../lib/porto')

    describe('classify', () => {
        it('should be defined', () => {
            expect(porto.classify).toBeDefined()
        })

        it('should return Standardbrief if the letter is 200 x 90 x 5 and weights 20g.', () => {
            expect(porto.classify(200, 90, 5, 20)).toEqual('Standardbrief')
        })

        it('should return Großbrief if the letter is 100 x 100 x 5 and weights 20g.', () => {
            expect(porto.classify(100, 100, 5, 20)).toEqual('Großbrief')
        })

        it('should return Kompaktbrief if the letter is 200 x 100 x 5 and weights 40g.', () => {
            expect(porto.classify(200, 100, 5, 40)).toEqual('Kompaktbrief')
        })
    })
})