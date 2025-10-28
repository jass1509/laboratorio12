// 3
function prog3() {
    const num = Number(prompt("Ingrese un número:"));
    const esPar = (n) => n % 2 === 0;
    if (esPar(num))
        alert(num + " es par");
    else
        alert(num + " no es par");
}

// 4
function prog4() {
    const b = Number(prompt("Base:"));
    const h = Number(prompt("Altura:"));
    const areaRectangulo = (base, altura) => base * altura;
    alert("Área = " + areaRectangulo(b, h));
}

// 5
function prog5() {
    const a = Number(prompt("Número a:"));
    const b = Number(prompt("Número b:"));
    const esMultiplo = (x, y) => x % y === 0;
    if (esMultiplo(a, b))
        alert(a + " es múltiplo de " + b);
    else
        alert(a + " no es múltiplo de " + b);
}

// 6
function prog6() {
    const a = Number(prompt("a:"));
    const b = Number(prompt("b:"));
    const c = Number(prompt("c:"));
    const mayorDeTres = (a, b, c) => Math.max(a, b, c);
    alert("El mayor es " + mayorDeTres(a, b, c));
}

// 7
function prog7() {
    const n1 = Number(prompt("Nota 1:"));
    const n2 = Number(prompt("Nota 2:"));
    const n3 = Number(prompt("Nota 3:"));
    const promedio = (a, b, c) => (a + b + c) / 3;
    alert("Promedio = " + promedio(n1, n2, n3).toFixed(2));
}

// 8
function prog8() {
    const texto = prompt("Ingrese un texto:");
    const convertirAMayusculas = (t) => t.toUpperCase();
    alert(convertirAMayusculas(texto));
}

// 9
function prog9() {
    const precio = Number(prompt("Precio:"));
    const porc = Number(prompt("Descuento (%):"));
    const calcularDescuento = (precio, porcentaje) => precio * (1 - porcentaje / 100);
    alert("Precio final: S/ " + calcularDescuento(precio, porc).toFixed(2));
}

// 10
function prog10() {
    const nombre = prompt("Ingrese su nombre:");
    const saludo = (nombre) => "¡Hola " + nombre + "! Bienvenido.";
    alert(saludo(nombre));
}

// 11
function prog11() {
    const num = Number(prompt("Número:"));
    const esPositivo = (n) => n > 0;
    if (esPositivo(num))
        alert(num + " es positivo");
    else
        alert(num + " no es positivo");
}

// 12
function prog12() {
    const mayus = (t) => t.toUpperCase();
    const signo = (t) => t + "!";
    const componer = (f1, f2) => (t) => f2(f1(t));
    const transformar = componer(mayus, signo);
    alert(transformar(prompt("Texto:")));
}

// 13
function prog13() {
    function procesarTexto(texto) {
        function limpiarEspacios(t) { return t.trim(); }
        function contarPalabras(t) { return limpiarEspacios(t).split(/\s+/).length; }
        return "Palabras: " + contarPalabras(texto);
    }
    const t = prompt("Ingrese texto:");
    alert(procesarTexto(t));
}

// 14
function prog14() {
    function operacionesMatematicas() {
        const sumar = (a, b) => a + b;
        const restar = (a, b) => a - b;
        const multiplicar = (a, b) => a * b;
        const dividir = (a, b) => a / b;
        return { sumar, restar, multiplicar, dividir };
    }
    const op = operacionesMatematicas();
    alert("Ejemplo: 4 + 2 = " + op.sumar(4, 2) + ", 4 / 2 = " + op.dividir(4, 2));
}

// 15
function prog15() {
    function crearContador() {
        let count = 0;
        return {
            incrementar: function() { return ++count; },
            resetear: function() { count = 0; }
        };
    }
    const c = crearContador();
    c.incrementar(); c.incrementar();
    alert("Contador: " + c.incrementar() + " (después de 3 incrementos)");
}

// 16
function prog16() {
    function acumulador(valorInicial) {
        let total = valorInicial;
        return function(nuevo) { total += nuevo; return total; };
    }
    const acc = acumulador(5);
    acc(3); acc(2);
    alert("Acumulado: " + acc(0));
}

// 17
function prog17() {
    const saludo = function(nombre) {
        if (nombre === undefined || nombre === "")
            return "Hola, Amigo!";
        else
            return "Hola, " + nombre + "!";
    };
    const n = prompt("Nombre (opcional):");
    alert(saludo(n));
}

// 18
function prog18() {
    function media() {
        let suma = 0;
        for (let i = 0; i < arguments.length; i++)
            suma += arguments[i];
        return suma / arguments.length;
    }
    alert("Media: " + media(4, 8, 10, 2, 6).toFixed(2));
}

// 19
function prog19() {
    function mostrarDatos(nombre, edad, hobbies) {
        return "Nombre: " + nombre + "\nEdad: " + edad + "\nHobbies: " + hobbies;
    }
    alert(mostrarDatos("Luis", 25, "Leer, Correr, Música"));
}

// 20
function prog20() {
    function ejecutarOperacion(fn, x, y) {
        return fn(x, y);
    }
    function suma(a, b) {
        return a + b;
    }
    alert("Resultado: " + ejecutarOperacion(suma, 4, 5));
}

// 21
function prog21() {
    const arr = [1, 2, 3, 4, 5, 6];
    function filtrarArreglo(arr, cb) {
        return arr.filter(cb);
    }
    alert("Pares: " + filtrarArreglo(arr, function(n) { return n % 2 === 0; }).join(", "));
}

// 22
function prog22() {
    function descargarArchivo(url, callback) {
        alert("Descargando " + url + "...");
        setTimeout(function() { callback(url); }, 1000);
    }
    descargarArchivo("archivo.zip", function(u) {
        alert("Descarga completa de " + u);
    });
}

// 23
function prog23() {
    function potencia(base, exp) {
        if (exp === 0) return 1;
        return base * potencia(base, exp - 1);
    }
    const b = Number(prompt("Base:"));
    const e = Number(prompt("Exponente:"));
    alert(b + "^" + e + " = " + potencia(b, e));
}

// 24
function prog24() {
    function crearSecuencia(inicio, paso) {
        let actual = inicio - paso;
        return function() {
            actual += paso;
            return actual;
        };
    }
    const sec = crearSecuencia(2, 3);
    alert("Secuencia: " + sec() + ", " + sec() + ", " + sec() + ", " + sec());
}
