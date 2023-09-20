¿Qué sucedio al usar async y await?

Al marcar la función comandos() como async, estoy indicando que dentro de esta función puedo utilizar la palabra clave await para esperar a que las promesas se resuelvan antes de continuar con la ejecución del código. Esto evita que tenga que encadenar múltiples .then() para manejar promesas, lo que hace que el código sea más legible.

¿Qué sucedio al usar el método then()?

con este metodo puedo manejar el exito de la resolucion de la promesa osea cuando se cumple, y el catch para manejar si ocurre un error, peor creo que con multiples funciones que retornas promesas puede voverse dificil de leer y de mantener el codigo.

¿Qué diferencias encontraste entre async, await y el método then()?

El uso de .then() es un enfoque tradicional para manejar promesas en JavaScript y es útil cuando deseas un mayor control sobre el flujo de tu código. Sin embargo, en comparación con async/await, puede hacer que el código sea menos legible, especialmente cuando se trata de múltiples promesas encadenadas.

En resumen ambas son muy buenas y necesarias, lo que debemos tener en cuenta es en donde es mejor usarlas y si es necesario, pero he aprendido de ambas