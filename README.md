Crear un Blockchain con node.js

El siguiente proyecto como como finalidad crear una cadena de bloques sencilla para entender los conceptos basicos de Blockchain

Getting Started

Para iniciar solo se debera correr el archivo main.js con la ayuda de node, con node main.js

Prerequisites

Solo deberemos tener instalado node js

Instrucciones y tareas realizadas

1) Genera una clase Block como modelo con los siguientes atributos:

   a) Index = Identificador de la posición del bloque en la cadena.
   b) Data = El contenido del bloque
   c) previousHash = Valor del bloque anterior de la cadena

2) Genera una clase Blockchain.

3) Mediante la clase Blockchain manipula elementos Block para poder generar la cadena de bloques.

4) Genera un método mine que calcule el nuevo hash del bloque según su dificultad.
