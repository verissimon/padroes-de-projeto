import { ShapeVisitor } from "./shape-visitors"

interface Shape {
  accept(visitor: ShapeVisitor): void
}
// classes cujo comportamento queremos extender
class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): void {
    // a classe concreta aceita o visitante e é
    // quem decide qual método executar
    visitor.visitCircle(this)
  }
}

class Square implements Shape {
  constructor(public side: number) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitSquare(this)
  }
}

class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this)
  }
}

export { Shape, Circle, Rectangle, Square }
