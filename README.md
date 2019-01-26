# Dialogos Presonalizados

> Estructura de dialogos puede ser modular

    .
    ├── dialog-config                    # Modelo de datos especial
    ├── dialog-injector                  # Pasa los datos de `dialog-config` al componente ejemplo
    ├── dialog-ref                       # Comunica cuando se cierra y pasa datos
    ├── dialog.componet.ts/html           # Es el fondo, recibe al hijo `example` y lo pinta
    ├── insertion.directive               # Es la directiva que indica cuando es cerrado el dialogo por seleccionar el fondo
    ├── dialog.service                      # Tools, es para poder abrirlo y pasar datos en el open()
    ├── example.component               #Componente a renderizar
    └── modules
