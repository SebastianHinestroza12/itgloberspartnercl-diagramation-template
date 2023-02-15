export const customGridSchema = {
    title: "Grilla Custom",
    type: "object",
    properties: {
        gridType: {
            title: "Tipo de Grilla",
            type: 'number',
            enum: [
                1,
                2,
                3,
                4
            ]
        }
    }
}

