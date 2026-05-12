# Aventura de Texto: Programación Móvil (UPQ)

from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = "upq_programacion_movil_2025"

# ── Datos del juego  ──────────────────────────
ZONAS = {
    1: {
        "nombre": "Zona 1: La Caverna de las Reglas",
        "guardián": "Guardián Isay",
        "lore": (
            "Has cruzado la Puerta de la Inscripción y entras a la oscura "
            "Caverna de las Reglas. El Guardián Isay, de mirada severa y "
            "lista en mano, bloquea el paso. 'Ningún Noob avanza sin conocer "
            "las Leyes del Reino', gruñe."
        ),
        "pregunta_1": "¿Cuál es el porcentaje MÍNIMO de asistencia que debes tener para no perder la materia?",
        "respuesta_1": "80",
        "pista_1": "Es un número entre 70 y 90...",
        "pregunta_2": "¿Cuántos minutos de tolerancia hay al inicio de la clase?",
        "respuesta_2": "10",
        "pista_2": "Es un número de un solo dígito... bueno, casi.",
        "checkbox_texto": "Juro por mi inscripción que NO usaré audífonos ni comeré en clase, y que el plagio me hará reprobar.",
    },
    2: {
        "nombre": "Zona 2: El Oráculo de las Notas",
        "guardián": "El Papiro Eterno",
        "lore": (
            "Superaste la Caverna. Ahora un papiro gigante flota ante ti, "
            "cubierto de porcentajes y fórmulas. 'Yo soy el Oráculo de las Notas', "
            "susurra. 'Dime cómo se calcula tu destino en el 1er Parcial y te dejaré pasar...'"
        ),
        "pregunta_1": "En el 1er y 2do Parcial, ¿cuánto vale el rubro 'Conocimiento' en porcentaje?",
        "respuesta_1": "40",
        "pista_1": "Es el rubro más pesado del parcial...",
        "pregunta_2": "En el 3er Parcial, ¿cuánto vale el rubro 'Proyecto PI' en porcentaje?",
        "respuesta_2": "50",
        "pista_2": "Es la mitad de tu calificación final del último parcial.",
        "checkbox_texto": "Juro que voy a entregar mis proyectos a tiempo y no culparé al WiFi de la UPQ.",
    },
    3: {
        "nombre": "Zona 3: La Forja de las Skills",
        "guardián": "La Llama del Bug Eterno",
        "lore": (
            "El calor es insoportable. Martillos de código golpean componentes "
            "de React sobre yunques de TypeScript. La Llama del Bug Eterno te "
            "observa. 'Para forjar tu arma definitiva, debes saber de qué está hecha...'"
        ),
        "pregunta_1": "¿Cuál es el nombre del framework de JavaScript que usaremos para crear apps móviles?",
        "respuesta_1": "react native",
        "pista_1": "Es un framework de Meta (Facebook). Pista: React ______.",
        "pregunta_2": "¿Qué tecnología de base de datos LOCAL usaremos en el celular?",
        "respuesta_2": "sqlite",
        "pista_2": "Es liviana, sin servidor y su nombre termina en 'lite'.",
        "checkbox_texto": "Juro que instalaré Node.js, crearé mi primer componente y no copiaré el proyecto de un compañero.",
    },
    4: {
        "nombre": "Zona 4: La Línea del Tiempo del Fin del Mundo",
        "guardián": "El Pergamino del Caos",
        "lore": (
            "Frente a ti se despliega un pergamino interminable con fechas escritas "
            "en tinta roja. El Pergamino del Caos habla: 'Muchos héroes cayeron "
            "aquí por entregar tarde. ¿Conoces las fechas del juicio final?'"
        ),
        "pregunta_1": "¿En qué fecha (día y mes) es el 1er Parcial? Escribe: DD/MM",
        "respuesta_1": "01/06",
        "pista_1": "Es el primer día del mes de junio.",
        "pregunta_2": "¿En qué fecha (día y mes) es el BOSS FINAL (examen final)? Escribe: DD/MM",
        "respuesta_2": "17/08",
        "pista_2": "Es en agosto, a mediados del mes.",
        "checkbox_texto": "Juro que agendaré TODAS las fechas en mi calendario y no diré 'no sabía' cuando me pidan la tarea.",
    },
}


# ── Ruta de inicio: limpia la sesión y arranca el juego ───────────────────────
@app.route("/")
def inicio():
    session.clear()
    session["vidas"] = 3
    session["zona_actual"] = 1
    return render_template("index.html")


# ── Ruta de zona: maneja GET (mostrar) y POST (evaluar respuestas) ─────────────
@app.route("/zona/<int:numero>", methods=["GET", "POST"])
def zona(numero):

    # Evita que el jugador salte zonas manualmente desde la URL
    if numero != session.get("zona_actual", 1):
        return redirect(url_for("zona", numero=session.get("zona_actual", 1)))

    if numero not in ZONAS:
        return "¡Zona no encontrada!", 404

    datos_zona = ZONAS[numero]
    mensaje_error = None

    if request.method == "POST":

        # Leemos los campos del formulario HTML (name="respuesta_1", etc.)
        respuesta_1 = request.form.get("respuesta_1", "").strip().lower()
        respuesta_2 = request.form.get("respuesta_2", "").strip().lower()
        compromiso  = request.form.get("compromiso", None)  # "on" si marcado, None si no

        respuesta_correcta_1 = datos_zona["respuesta_1"].lower()
        respuesta_correcta_2 = datos_zona["respuesta_2"].lower()

        # Las 3 condiciones deben cumplirse para avanzar
        if respuesta_1 == respuesta_correcta_1 and respuesta_2 == respuesta_correcta_2 and compromiso:
            siguiente_zona = numero + 1
            if siguiente_zona > 4:
                return redirect(url_for("victoria"))
            session["zona_actual"] = siguiente_zona
            return redirect(url_for("zona", numero=siguiente_zona))

        else:
            # Respuesta incorrecta: restamos vida y verificamos game over
            session["vidas"] -= 1
            if session["vidas"] <= 0:
                return redirect(url_for("game_over"))

            if respuesta_1 != respuesta_correcta_1:
                mensaje_error = f"❌ Respuesta 1 incorrecta. Pista: {datos_zona['pista_1']}"
            elif respuesta_2 != respuesta_correcta_2:
                mensaje_error = f"❌ Respuesta 2 incorrecta. Pista: {datos_zona['pista_2']}"
            elif not compromiso:
                mensaje_error = "❌ ¡Debes marcar el juramento de compromiso para avanzar!"

    return render_template(
        "zona.html",
        zona=datos_zona,
        numero=numero,
        vidas=session["vidas"],
        mensaje_error=mensaje_error,
    )


# ── Game Over y Victoria ───────────────────────────────────────────────────────
@app.route("/game_over")
def game_over():
    session["vidas"] = 0
    return render_template("game_over.html")


@app.route("/victoria")
def victoria():
    vidas_restantes = session.get("vidas", 0)
    return render_template("victoria.html", vidas=vidas_restantes)


if __name__ == "__main__":
    app.run(debug=True)