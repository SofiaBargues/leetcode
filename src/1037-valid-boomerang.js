/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // Paso 1: nombrar los puntos
  const [p1, p2, p3] = points;

  // Paso 2: extraer coordenadas
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;

  // Paso 3: usar producto cruzado para evitar divisiones
  const left = (y2 - y1) * (x3 - x1);
  const right = (y3 - y1) * (x2 - x1);

  // Paso 4: si los productos son distintos, no están en línea recta
  return left !== right;
};
