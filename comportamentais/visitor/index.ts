import { ShapeLogger } from "./src/shape-visitors"
import {
  Shape,
  Circle,
  Square,
  Rectangle,
} from "./src/shapes"

const shapes: Shape[] = [
  new Circle(10),
  new Square(5),
  new Rectangle(4, 6),
]

const shapeLogger = new ShapeLogger()

shapes.map((shape) => shape.accept(shapeLogger))
