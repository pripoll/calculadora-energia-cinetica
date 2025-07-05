# calculadora-energia-cinetica
Esta es una aplicación web simple que calcula la energía cinética de un proyectil en la boca del cañón, una medida fundamental en balística para determinar su potencia.

Funcionalidad

La herramienta solicita al usuario dos datos de entrada y permite seleccionar las unidades:

    Peso del proyectil: Se puede ingresar en grains o en gramos.

    Velocidad del proyectil: Se puede ingresar en pies por segundo (FPS) o en metros por segundo (m/s).

Con estos datos, la aplicación realiza las conversiones necesarias y calcula la energía cinética, mostrando el resultado en dos unidades estándar:

    Pie-libra fuerza (Ft-Lbs)

    Julios (Joules)

Fórmulas y conversiones utilizadas

El cálculo base se realiza con las unidades del sistema imperial (grains y FPS).

    Cálculo de energía en Ft-Lbs:
    Energía (Ft-Lbs) = (Peso_en_grains * Velocidad_en_FPS²) / 450240

    Conversiones de entrada:

        1 gramo = 15.4324 grains

        1 m/s = 3.28084 FPS

    Conversión de salida:

        Energía (Joules) = Energía (Ft-Lbs) * 1.35582

Autor

    Pablo I. Ripoll - CABA, Argentina - Julio de 2025
