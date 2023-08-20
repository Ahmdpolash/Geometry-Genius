function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base')
    const baseFieldValue = baseField.value;
    const base = parseFloat(baseFieldValue)


    const heightField = document.getElementById('triangle-height')
    const heightFieldValue = heightField.value;
    const height = parseFloat(heightFieldValue)


    const area = 0.5 * base * height;

    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area

}

function rectangleArea() {
   
    const widthField = document.getElementById('rectangle-width')
    const widthFieldValue = widthField.value;
    const width = parseFloat(widthFieldValue)

    const lengthField = document.getElementById('rectangle-length')
    const lengthFieldValue = lengthField.value
    const length = parseFloat(lengthFieldValue)

    const area = width * length

    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = area
}