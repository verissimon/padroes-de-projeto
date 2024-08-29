import { App } from "./src/App"
import {
  GUIabsFactory,
  MacOSGUIFactory,
  WindowsGUIFactory,
} from "./src/GUIabsFactory"

enum OperatingSystem {
  Windows = "Windows",
  MacOS = "MacOS",
}

let os: OperatingSystem =
  Math.random() < 0.5 ? OperatingSystem.Windows : OperatingSystem.MacOS

let GUIfactory: GUIabsFactory

if (os === OperatingSystem.Windows) {
  GUIfactory = new WindowsGUIFactory()
} else if (os === OperatingSystem.MacOS) {
  GUIfactory = new MacOSGUIFactory()
} else throw new Error("OS não suportado")

const app = new App(GUIfactory)

app.renderizar()
