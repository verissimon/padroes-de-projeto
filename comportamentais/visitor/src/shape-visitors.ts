import { Circle, Square, Rectangle } from "./shapes"

interface ShapeVisitor {
  visitCircle(circle: Circle): void
  visitSquare(square: Square): void
  visitRectangle(rectangle: Rectangle): void
}

class ShapeLogger implements ShapeVisitor {
  // várias versões do algoritmo, cada uma recebendo 
  // como parâmetro os objetos concretos Shape
  visitCircle(circle: Circle) {
    console.log(
      `Logging circle with radius ${circle.radius}`
    )
  }

  visitSquare(square: Square) {
    console.log(`Logging square with side ${square.side}`)
  }

  visitRectangle(rectangle: Rectangle) {
    console.log(
      `Logging rectangle with width ${rectangle.width} and height ${rectangle.height}`
    )
  }
}

export { ShapeVisitor, ShapeLogger }
