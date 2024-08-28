export interface Builder {
    adicionarCama(): this; // Obrigatório
    adicionarMesa(): this; // Obrigatório
    adicionarComoda?(): this; // Opcional
    adicionarVentilador?(): this; // Opcional
    adicionarComputador?(): this; // Opcional
}
